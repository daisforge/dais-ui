import { expect, test as base } from 'playwright/test';

import { GridPage } from './grid';

export interface RedrawOptions {
  /**
   * Сверять частичный кадр с полным после каждого шага. Выключено в проекте
   * накопления: там одна сверка в конце серии, чтобы следы, которые копятся
   * несколько шагов, не стирались полной перерисовкой между шагами.
   */
  checkEachStep: boolean;
}

export const test = base.extend<RedrawOptions & { grid: GridPage }>({
  checkEachStep: [true, { option: true }],
  grid: async ({ page, checkEachStep }, use, testInfo) => {
    await use(new GridPage(page, testInfo, checkEachStep));
  },
});

export { expect };
