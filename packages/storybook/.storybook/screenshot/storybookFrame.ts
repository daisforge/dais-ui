/**
 * Воспроизводит в Vitest browser mode окружение iframe Storybook, в котором снимались
 * эталонные скриншоты (раньше test-runner открывал iframe.html): preview-head.html
 * со шрифтами SBSans, классы layout на body и контейнер истории #storybook-root.
 */
import type { ReactRenderer } from '@storybook/react-vite';
import type { BeforeEach } from 'storybook/internal/types';

import previewHead from '../preview-head.html?raw';

// Стили layout из storybook/assets/server/base-preview-head.html
const LAYOUT_CSS = `
  .sb-show-main.sb-main-centered {
    margin: 0;
    display: flex;
    align-items: center;
    min-height: 100vh;
  }
  .sb-show-main.sb-main-centered #storybook-root {
    box-sizing: border-box;
    margin: auto;
    padding: 1rem;
    max-height: 100%;
  }
  .sb-show-main.sb-main-fullscreen {
    margin: 0;
    padding: 0;
    display: block;
  }
  .sb-show-main.sb-main-padded {
    margin: 0;
    padding: 1rem;
    display: block;
    box-sizing: border-box;
  }
`;

/** Добавляет в head содержимое preview-head.html и стили layout, ждёт загрузки стилей */
export async function setupStorybookHead() {
  document.head.insertAdjacentHTML('beforeend', previewHead);

  const style = document.createElement('style');
  style.textContent = LAYOUT_CSS;
  document.head.appendChild(style);

  const links = Array.from(
    document.head.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'),
  );
  await Promise.all(
    links.map(
      (link) =>
        new Promise<void>((resolve) => {
          if (link.sheet) {
            resolve();
            return;
          }
          link.addEventListener('load', () => resolve(), { once: true });
          // Недоступный CDN не должен вешать прогон — скриншоты просто разойдутся
          link.addEventListener('error', () => resolve(), { once: true });
        }),
    ),
  );
}

export const storybookFrameBeforeEach: BeforeEach<ReactRenderer> = ({
  parameters,
  canvasElement,
}) => {
  const layout = parameters.layout ?? 'padded';
  document.body.className = `sb-show-main sb-main-${layout}`;
  canvasElement.id = 'storybook-root';
};
