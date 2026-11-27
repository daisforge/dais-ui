import assert from 'node:assert/strict';

import type { Browser } from 'playwright';

import { prepareScreenshotFrame } from './capture';

/**
 * Проверяет, что подготовка кадра сохраняет события завершения анимаций.
 * Компоненты размонтируются по animationend (StoriesViewer при закрытии), поэтому
 * захват не должен отменять анимацию раньше, чем браузер отправит это событие.
 */
export async function checkFinishedAnimations(browser: Browser) {
  const context = await browser.newContext();
  try {
    const page = await context.newPage();
    await page.setContent(`
      <style>
        @keyframes leave { from { opacity: 1 } to { opacity: 0 } }
        @keyframes enter { from { opacity: 0 } to { opacity: 1 } }
        #closing { animation: leave 10s ease forwards; }
        #entered { opacity: 0; animation: enter 10s ease forwards; }
      </style>
      <div id="closing">Закрывается</div>
      <div id="entered">Появился</div>
    `);
    await page.evaluate(() => {
      document
        .getElementById('closing')
        ?.addEventListener('animationend', (event) => {
          (event.target as Element).remove();
        });
    });
    await prepareScreenshotFrame(page, 5000);
    const state = await page.evaluate(() => {
      const entered = document.getElementById('entered');
      return {
        closingRemoved: !document.getElementById('closing'),
        enteredOpacity: entered && getComputedStyle(entered).opacity,
        animations: document.getAnimations().length,
      };
    });
    // Сравниваем поля по отдельности: объект из page.evaluate создан в другом
    // VM-контексте Jest, и строгий deepEqual отверг бы его из-за прототипа.
    assert.equal(
      state.closingRemoved,
      true,
      'Подготовка кадра отменила анимацию до animationend: элемент остался в DOM',
    );
    assert.equal(
      state.enteredOpacity,
      '1',
      'Подготовка кадра потеряла итоговый кадр анимации с fill: forwards',
    );
    assert.equal(
      state.animations,
      0,
      'Подготовка кадра не сняла завершённые анимации с fill: forwards',
    );

    // Если браузер не отдаёт кадры, ожидание после finish() не должно выходить
    // за бюджет захвата: подготовка завершается TimeoutError, а не зависает.
    await page.evaluate(() => {
      document.body.insertAdjacentHTML(
        'beforeend',
        '<div style="animation: enter 10s ease forwards">Ещё</div>',
      );
      window.requestAnimationFrame = () => 0;
    });
    const budgetMs = 150;
    const outcome = await Promise.race([
      prepareScreenshotFrame(page, budgetMs).then(
        () => 'completed',
        (error: unknown) =>
          error && typeof error === 'object' && 'name' in error
            ? String(error.name)
            : 'error',
      ),
      new Promise<string>((resolve) => {
        setTimeout(() => resolve('hung'), budgetMs * 10);
      }),
    ]);
    assert.equal(
      outcome,
      'TimeoutError',
      'Подготовка кадра без RAF должна укладываться в бюджет и завершаться TimeoutError',
    );
  } finally {
    await context.close();
  }
}
