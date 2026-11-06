/* eslint-disable no-await-in-loop -- Кадры нужно получать последовательно. */
import fs from 'node:fs';
import path from 'node:path';

import type { Page } from 'playwright';

import { sameVisualPixels } from './compare';

export interface ScreenshotParameters {
  skip?: boolean;
  skipReason?: string;
  keepState?: boolean;
  capture?: 'root' | 'page';
  /** Ожидаемые ошибки ресурсов в примерах запасного состояния: подстроки URL. */
  allowedResourceErrors?: string[];
}

// test-runner 0.18 может повторить посещение при потере контекста исполнения.
// Повтор явно завершаем ошибкой, чтобы внутренний retry не скрывал нестабильность.
export function beginVisit(artifacts: string, id: string) {
  const folder = path.join(artifacts, 'stories');
  const file = path.join(folder, `${id}.json`);
  if (fs.existsSync(file))
    throw new Error(
      `Repeated story visit rejected (automatic retry or duplicate id): ${id}`,
    );
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(file, JSON.stringify({ id, status: 'running' }));
}

/** Ждём три попарно одинаковых кадра в общем бюджете времени, без перезапуска story. */
async function stableCapture(
  capture: (
    timeoutMs: number,
    remainingMs: () => number,
  ) => Promise<Uint8Array>,
  options: {
    timeoutMs?: number;
    intervalMs?: number;
    onUnstable?: (frames: Uint8Array[]) => void;
  } = {},
): Promise<Uint8Array> {
  const timeoutMs = options.timeoutMs ?? 10000;
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0)
    throw new Error('Screenshot timeoutMs must be a positive finite number');
  const deadline = performance.now() + timeoutMs;
  const remainingMs = () => {
    const remaining = deadline - performance.now();
    if (remaining <= 0)
      throw Object.assign(new Error('Screenshot capture budget exhausted'), {
        name: 'TimeoutError',
      });
    return remaining;
  };
  const frames: Uint8Array[] = [];
  while (performance.now() < deadline) {
    let frame: Uint8Array;
    try {
      frame = await capture(remainingMs(), remainingMs);
    } catch (error) {
      options.onUnstable?.(frames);
      // Ошибка Playwright может прийти из другого VM-контекста Jest, где другой Error.
      if (
        error &&
        typeof error === 'object' &&
        'name' in error &&
        error.name === 'TimeoutError'
      )
        throw new Error(
          `Screenshot did not stabilize: capture exceeded the ${timeoutMs} ms deadline. ${
            'message' in error ? String(error.message) : ''
          }`,
        );
      throw error;
    }
    frames.push(frame);
    if (frames.length > 3) frames.shift();
    if (performance.now() >= deadline) break;
    const [first, second, third] = frames;
    // Сравниваем все три пары: небольшие изменения цвета между соседними кадрами
    // не должны накопиться в заметную разницу между первым и третьим.
    if (
      first &&
      second &&
      third &&
      sameVisualPixels(first, second) &&
      sameVisualPixels(second, third) &&
      sameVisualPixels(first, third) &&
      performance.now() < deadline
    )
      return frame;
    const delay = Math.min(
      options.intervalMs ?? 100,
      deadline - performance.now(),
    );
    if (delay > 0)
      await new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
  }
  options.onUnstable?.(frames);
  throw new Error(
    `Screenshot did not stabilize: expected 3 visually identical RGBA frames within ${timeoutMs} ms.`,
  );
}

/** Таймер и отмена RAF находятся в браузере: таймаут в Node оставил бы RAF работающими. */
async function prepareScreenshotFrame(page: Page, timeoutMs: number) {
  const completed = await page.evaluate(async (budgetMs) => {
    const started = performance.now();
    document.getAnimations().forEach((animation) => {
      const endTime = animation.effect?.getComputedTiming().endTime;
      if (typeof endTime === 'number' && Number.isFinite(endTime))
        animation.finish();
    });
    // Перерисовываем видимую область грида, чтобы проверять и повторную отрисовку фото.
    // Выделение, наведение и данные при этом не меняем.
    const repaint = (
      window as Window & { daisScreenshotRepaint?: () => number }
    ).daisScreenshotRepaint;
    const grids = repaint?.() ?? 0;
    if (!grids && document.querySelector('.gdg-table'))
      throw new Error('Canvas snapshot repaint instrumentation is missing');
    const remaining = budgetMs - (performance.now() - started);
    if (remaining <= 0) return false;
    return new Promise<boolean>((resolve) => {
      let raf = 0;
      const timer = setTimeout(() => {
        cancelAnimationFrame(raf);
        resolve(false);
      }, remaining);
      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(() => {
          clearTimeout(timer);
          resolve(performance.now() - started < budgetMs);
        });
      });
    });
  }, timeoutMs);
  if (!completed)
    throw Object.assign(
      new Error('Canvas preparation exceeded capture budget'),
      {
        name: 'TimeoutError',
      },
    );
}

export async function captureStory(
  page: Page,
  params: ScreenshotParameters,
  artifactDir: string,
) {
  // Перед захватом ждём сеть, декодирование изображений и готовность шрифтов.
  // Только явно разрешённые ошибки ресурсов исключаются из этих проверок.
  await page.waitForLoadState('networkidle', { timeout: 10000 });
  const allowed = params.allowedResourceErrors ?? [];
  await page.waitForFunction(
    (ignored) =>
      Array.from(document.images).every(
        (image) =>
          ignored.some((url) => image.src.includes(url)) || image.complete,
      ),
    allowed,
    { timeout: 10000 },
  );
  await page.evaluate(async (ignored) => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images)
        .filter((image) => !ignored.some((url) => image.src.includes(url)))
        .map(async (image) => {
          if (image.complete && image.naturalWidth > 0) await image.decode();
          else if (!image.complete)
            await new Promise<void>((resolve, reject) => {
              image.addEventListener('load', () => resolve(), { once: true });
              image.addEventListener(
                'error',
                () => reject(new Error(`Image failed: ${image.src}`)),
                { once: true },
              );
            });
          else throw new Error(`Image failed: ${image.src}`);
        }),
    );
  }, allowed);
  if (!params.keepState) await page.mouse.move(0, 0);
  const options = {
    animations: 'disabled' as const,
    caret: 'hide' as const,
    scale: 'css' as const,
  };
  const screenshot =
    params.capture === 'page'
      ? (timeout: number) =>
          page.screenshot({ ...options, fullPage: true, timeout })
      : (timeout: number) =>
          page.locator('#storybook-root').screenshot({ ...options, timeout });
  return stableCapture(
    async (timeout, remainingMs) => {
      await prepareScreenshotFrame(page, timeout);
      // Подготовка и RAF расходуют общий бюджет захвата и сравнения кадров.
      // Передаём оставшееся время: старый timeout или 0 позволили бы превысить лимит.
      return screenshot(remainingMs());
    },
    {
      onUnstable: (frames) => {
        fs.mkdirSync(artifactDir, { recursive: true });
        frames.forEach((frame, i) =>
          fs.writeFileSync(path.join(artifactDir, `unstable-${i}.png`), frame),
        );
      },
    },
  );
}
