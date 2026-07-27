import type { TestRunnerConfig } from '@storybook/test-runner';
import { waitForPageReady, getStoryContext } from '@storybook/test-runner';
import fs from 'fs';
import path from 'path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const customSnapshotsDir = path.resolve(__dirname, '../__snapshots__');
const diffOutputDir = path.resolve(customSnapshotsDir, '__diff_output__');

const isCI = process.env.CI === 'true';
const failureThreshold = isCI ? 0.01 : 0.04;

// Хелперы для обхода несовместимости Buffer/Uint8Array в TypeScript 5.4
const writeFile = (filePath: string, data: Buffer | Uint8Array) =>
  fs.writeFileSync(filePath, data as unknown as Uint8Array);
const readPng = (filePath: string) =>
  PNG.sync.read(fs.readFileSync(filePath) as unknown as Buffer);
const writePng = (png: PNG) => PNG.sync.write(png) as unknown as Uint8Array;

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function createCompositeDiff(
  baselinePng: PNG,
  currentPng: PNG,
  diffPng: PNG
): Uint8Array {
  const { width, height } = baselinePng;
  const gap = 2;
  const compositeWidth = width * 3 + gap * 2;
  const composite = new PNG({ width: compositeWidth, height });

  // Заливаем серым (разделители)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < compositeWidth; x++) {
      const idx = (y * compositeWidth + x) << 2;
      composite.data[idx] = 128;
      composite.data[idx + 1] = 128;
      composite.data[idx + 2] = 128;
      composite.data[idx + 3] = 255;
    }
  }

  // Копируем три панели: baseline | diff | received
  const panels = [
    { png: baselinePng, offsetX: 0 },
    { png: diffPng, offsetX: width + gap },
    { png: currentPng, offsetX: (width + gap) * 2 },
  ];

  for (const { png, offsetX } of panels) {
    for (let y = 0; y < height; y++) {
      const srcStart = y * width * 4;
      const dstStart = (y * compositeWidth + offsetX) * 4;
      composite.data.set(
        png.data.subarray(srcStart, srcStart + width * 4),
        dstStart
      );
    }
  }

  return writePng(composite);
}

function compareSnapshots(
  received: Uint8Array,
  snapshotPath: string,
  snapshotId: string,
  update: boolean
) {
  ensureDir(customSnapshotsDir);

  if (!fs.existsSync(snapshotPath) || update) {
    writeFile(snapshotPath, received);
    return;
  }

  const baseline = readPng(snapshotPath);
  const current = PNG.sync.read(Buffer.from(received) as unknown as Buffer);

  const { width, height } = baseline;

  if (current.width !== width || current.height !== height) {
    throw new Error(
      `Screenshot size mismatch for "${snapshotId}": ` +
        `expected ${width}x${height}, got ${current.width}x${current.height}. ` +
        `Run with -u to update.`
    );
  }

  const diff = new PNG({ width, height });
  const mismatchedPixels = pixelmatch(
    new Uint8Array(baseline.data.buffer),
    new Uint8Array(current.data.buffer),
    new Uint8Array(diff.data.buffer),
    width,
    height,
    { threshold: 0.1 } // 0.1 игнорирует различия в антиалиасинге текста между запусками
  );

  const totalPixels = width * height;
  const diffPercent = mismatchedPixels / totalPixels;

  if (diffPercent > failureThreshold) {
    ensureDir(diffOutputDir);

    // Композитное изображение: baseline | diff (красные пиксели) | received
    writeFile(
      path.join(diffOutputDir, `${snapshotId}-composite.png`),
      createCompositeDiff(baseline, current, diff)
    );

    throw new Error(
      `Screenshot "${snapshotId}" differs by ${(diffPercent * 100).toFixed(
        2
      )}% ` +
        `(threshold: ${(failureThreshold * 100).toFixed(0)}%). ` +
        `Diff: ${diffOutputDir}/${snapshotId}-composite.png`
    );
  }
}

const config: TestRunnerConfig = {
  // Права на буфер обмена нужны интеракционным тестам copy/paste
  // (наш Ctrl+C/Ctrl+V читает/пишет navigator.clipboard). Гранта на все
  // стори безвредна — обычные скриншоты его не используют.
  async preVisit(page) {
    await page
      .context()
      .grantPermissions(['clipboard-read', 'clipboard-write'])
      .catch(() => {
        // headless без поддержки — copy/paste-стори просто не изменят данные
      });
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);

    if (storyContext.parameters?.screenshot?.skip) {
      return;
    }

    await waitForPageReady(page);

    await page.evaluate(() => document.fonts?.ready).catch(() => {});

    // Отключаем субпиксельное сглаживание шрифтов для стабильных скриншотов.
    // Без этого Chromium может рендерить текст с субпиксельным сдвигом (0.25px)
    // между запусками — визуально незаметно, но pixelmatch видит разницу 3-5%.
    await page.addStyleTag({
      content: `
      *, *::before, *::after {
        -webkit-font-smoothing: none !important;
        text-rendering: geometricPrecision !important;
      }
    `,
    });

    await page
      .waitForFunction(
        () =>
          Array.from(document.images).every(
            (img) => img.complete && img.naturalHeight > 0
          ),
        { timeout: 5000 }
      )
      .catch(() => {
        // Продолжаем
      });

    await page.waitForTimeout(2500);

    if (!storyContext.parameters?.screenshot?.keepState) {
      await page.waitForTimeout(300);
      await page.mouse.move(0, 0);
      await page.waitForTimeout(300);
    }

    const storyRoot = page.locator('#storybook-root').first();
    const isVisible = await storyRoot.isVisible().catch(() => false);
    const image = isVisible
      ? await storyRoot.screenshot()
      : await page.screenshot();
    const snapshotPath = path.join(customSnapshotsDir, `${context.id}.png`);
    // @ts-expect-error globals из jest config
    const update = globalThis.UPDATE_SNAPSHOTS === 'true';

    compareSnapshots(new Uint8Array(image), snapshotPath, context.id, update);
  },
};

export default config;
