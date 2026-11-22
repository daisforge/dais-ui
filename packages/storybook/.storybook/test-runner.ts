import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import fs from 'node:fs';
import path from 'node:path';
import type { Browser, Page } from 'playwright';
import {
  beginVisit,
  captureStory,
  type ScreenshotParameters,
} from '../test/screenshots/capture';
import { checkSnapshot } from '../test/screenshots/compare';

const mode = process.env.SCREENSHOT_MODE;
const artifacts =
  process.env.SCREENSHOT_ARTIFACTS_DIR ?? 'artifacts/screenshots/manual';
// Ошибки изображений и шрифтов собираем отдельно для каждого посещения страницы.
// Исключения задаются в конкретной story, например для намеренно сломанного аватара.
const resources = new WeakMap<Page, string[]>();
const requiredResourceErrors = (page: Page, params: ScreenshotParameters) =>
  (resources.get(page) ?? []).filter(
    (url) =>
      !params.allowedResourceErrors?.some((allowed) => url.includes(allowed)),
  );
const inspectedBrowsers = new WeakSet<Browser>();
const record = (id: string, data: object) => {
  fs.mkdirSync(path.join(artifacts, 'stories'), { recursive: true });
  fs.writeFileSync(
    path.join(artifacts, 'stories', `${id}.json`),
    JSON.stringify({ id, ...data }, null, 2),
  );
};
const config: TestRunnerConfig = {
  // Подготовка окружения выполняется до рендера и play-функции story.
  async preVisit(page, context) {
    process.env.SCREENSHOT_CURRENT_STORY = context.id;
    beginVisit(artifacts, context.id);
    // Сценарии copy/paste используют настоящий браузерный буфер обмена.
    await page
      .context()
      .grantPermissions(['clipboard-read', 'clipboard-write']);
    const browser = page.context().browser();
    if (!browser) throw new Error('Canonical Chromium browser is unavailable');
    // Один раз проверяем программный рендерер: другой GPU может изменить пиксели.
    if (!inspectedBrowsers.has(browser)) {
      const session = await browser.newBrowserCDPSession();
      try {
        const info = await session.send('SystemInfo.getInfo');
        if (
          !info.gpu.devices.some((device) =>
            /SwiftShader/i.test(device.deviceString),
          )
        )
          throw new Error('Canonical SwiftShader renderer is unavailable');
        fs.writeFileSync(
          path.join(artifacts, 'runtime-browser.json'),
          JSON.stringify({ version: browser.version(), ...info }, null, 2),
        );
        inspectedBrowsers.add(browser);
      } finally {
        await session.detach();
      }
    }
    // Страница переиспользуется между stories. Убираем настоящий указатель заранее,
    // чтобы новая Canvas-таблица не получила случайное состояние наведения.
    await page.mouse.move(0, 0);
    if (!resources.has(page)) {
      page.on('requestfailed', (request) => {
        if (['image', 'font'].includes(request.resourceType()))
          resources.get(page)?.push(request.url());
      });
      page.on('response', (response) => {
        if (
          response.status() >= 400 &&
          ['image', 'font'].includes(response.request().resourceType())
        )
          resources.get(page)?.push(response.url());
      });
    }
    resources.set(page, []);
    // DOM-таблица пересчитывает размеры внутри ResizeObserver: переход ширины мешает
    // стабильному расчёту. Отключаем переходы только в DOM-таблицах до play.
    // Canvas использует transitionend для размеров, поэтому её переходы сохраняем.
    await page.evaluate(() => {
      if (document.getElementById('screenshot-motion')) return;
      const style = document.createElement('style');
      style.id = 'screenshot-motion';
      style.textContent =
        '.rdg-container-all:has(.rdg), .rdg-container-all:has(.rdg) *, .rdg-container-all:has(.rdg) *::before, .rdg-container-all:has(.rdg) *::after { transition: none !important; }';
      document.head.appendChild(style);
    });
    // Загружаем шрифты до рендера: Canvas сразу должен измерять текст нужным шрифтом.
    await page.evaluate(async () => {
      const samples = ['SB Sans Text', 'SB Sans Display'].flatMap((family) =>
        [100, 300, 400, 500, 600, 700].map(
          (weight) => `${weight} 16px "${family}"`,
        ),
      );
      for (const sample of samples) {
        const loaded = await document.fonts.load(sample, 'Тест Test');
        if (!loaded.length)
          throw new Error(`Required font is missing: ${sample}`);
      }
      await document.fonts.ready;
    });
  },
  // После успешного play проверяем ресурсы, получаем стабильный кадр и сравниваем PNG.
  async postVisit(page, context) {
    const story = await getStoryContext(page, context);
    const params = (story.parameters?.screenshot ?? {}) as ScreenshotParameters;
    const failedBeforeCapture = requiredResourceErrors(page, params);
    if (failedBeforeCapture.length)
      throw new Error(
        `Required resources failed: ${failedBeforeCapture.join(', ')}`,
      );
    // skip отключает только PNG-проверку; render и play уже выполнены.
    // Причина обязательна, чтобы пропуски покрытия были видны в отчёте.
    if (params.skip) {
      if (!params.skipReason)
        throw new Error(`screenshot.skip requires skipReason: ${context.id}`);
      record(context.id, { status: 'skipped', skipReason: params.skipReason });
      return;
    }
    const dir = path.join(artifacts, context.id);
    const started = Date.now();
    try {
      const image = await captureStory(page, params, dir);
      const captureDurationMs = Date.now() - started;
      const failed = requiredResourceErrors(page, params);
      if (failed.length)
        throw new Error(`Required resources failed: ${failed.join(', ')}`);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'actual.png'), image);
      const baseline = path.resolve(
        __dirname,
        '../__snapshots__',
        `${context.id}.png`,
      );
      // Обновление сначала пишет в /staging. Общий запуск перенесёт эталоны
      // в репозиторий только после успешного завершения всех выбранных stories.
      if (mode === 'update')
        fs.writeFileSync(path.join('/staging', `${context.id}.png`), image);
      else checkSnapshot(image, baseline, dir);
      record(context.id, {
        status: mode === 'update' ? 'updated' : 'passed',
        browser: page.context().browser()?.version(),
        durationMs: Date.now() - started,
        captureDurationMs,
        capture: params.capture ?? 'root',
      });
    } catch (error) {
      // Дополнительный снимок помогает понять сбой подготовки; исходную ошибку сохраняем.
      fs.mkdirSync(dir, { recursive: true });
      await page
        .screenshot({
          path: path.join(dir, 'failure-page.png'),
          fullPage: true,
        })
        .catch(() => {});
      record(context.id, {
        status: 'failed',
        error: String(error),
        resourceErrors: resources.get(page),
        durationMs: Date.now() - started,
      });
      throw error;
    }
  },
};
export default config;
