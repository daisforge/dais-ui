/**
 * Браузерная часть скриншотных тестов: Storybook-хук afterEach, который подключается
 * только при прогоне через Vitest (см. ../vitest.setup.ts). Выполняется после рендера
 * и play-функции истории, снимает её и отдаёт снимок на сравнение в Node (./commands.ts).
 */
import type { ReactRenderer } from '@storybook/react-vite';
import type { AfterEach } from 'storybook/internal/types';
import { commands, page } from 'vitest/browser';

/** Вьюпорт, в котором снимались эталонные скриншоты */
const VIEWPORT = { width: 1440, height: 900 };

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const STABLE_FONTS_STYLE_ID = 'screenshot-stable-fonts';

// Отключаем субпиксельное сглаживание шрифтов для стабильных скриншотов.
// Без этого Chromium может рендерить текст с субпиксельным сдвигом (0.25px)
// между запусками — визуально незаметно, но pixelmatch видит разницу 3-5%.
function addStableFontsStyle() {
  if (document.getElementById(STABLE_FONTS_STYLE_ID)) {
    return;
  }
  const style = document.createElement('style');
  style.id = STABLE_FONTS_STYLE_ID;
  style.textContent = `
    *, *::before, *::after {
      -webkit-font-smoothing: none !important;
      text-rendering: geometricPrecision !important;
    }
  `;
  document.head.appendChild(style);
}

async function waitForImages(timeout: number) {
  const deadline = Date.now() + timeout;
  while (
    Date.now() < deadline &&
    !Array.from(document.images).every(
      (img) => img.complete && img.naturalHeight > 0,
    )
  ) {
    // eslint-disable-next-line no-await-in-loop
    await sleep(100);
  }
}

function isVisible(element: HTMLElement) {
  const { width, height } = element.getBoundingClientRect();
  return width > 0 && height > 0 && element.checkVisibility();
}

export const screenshotAfterEach: AfterEach<ReactRenderer> = async ({
  id,
  parameters,
  canvasElement,
}) => {
  if (parameters.screenshot?.skip) {
    return;
  }

  // addon-vitest перед историей выставляет вьюпорт 1200x900 —
  // эталоны сняты в 1440x900, как раньше в test-runner
  await page.viewport(VIEWPORT.width, VIEWPORT.height);

  await document.fonts?.ready;
  addStableFontsStyle();
  await waitForImages(5000);

  await sleep(2500);

  if (!parameters.screenshot?.keepState) {
    await sleep(300);
    await commands.moveMouseToOrigin();
    await sleep(300);
  }

  // canvasElement — контейнер истории (аналог #storybook-root). Если он пуст
  // (например, история рендерит только портал с модалкой) — снимаем всю страницу
  const base64 = await page.screenshot({
    element: isVisible(canvasElement) ? canvasElement : undefined,
    save: false,
  });

  await commands.compareStoryScreenshot(id, base64);
};
