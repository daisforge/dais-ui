import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

// Таблица без линий сетки: при точечной дорисовке левый и верхний пиксели ячейки
// должны краситься вместе с ней, иначе на границах остаются штрихи прежнего цвета.
const STAND = 'локальные-компоненты-tablecanvas-redraw--no-lines';

const rowsOnly: FrameExpectation = {
  kinds: ['damage'],
  header: false,
  maxShare: 0.25,
};
const partial = (header: boolean): FrameExpectation => ({
  kinds: ['selection', 'damage'],
  header,
  maxShare: 0.5,
});

test.describe('без линий сетки', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
    await grid.prime();
  });

  test('наведение и выделение без линий', async ({ grid }) => {
    for (let row = 0; row < 6; row += 1) {
      await grid.step(`строка ${row}`, () => grid.hover([2, row]), rowsOnly);
    }
    await grid.step('клик', () => grid.click([2, 2]), partial(true));
    await grid.step('вниз', () => grid.press('ArrowDown'), partial(false));
    await grid.step('вправо', () => grid.press('ArrowRight'), partial(true));
    await grid.step('протяжка', () => grid.drag([1, 1], [4, 5]), partial(true));
    await grid.step('Escape', () => grid.press('Escape'), partial(true));
    await grid.step(
      'наведение после снятия',
      () => grid.hover([3, 3]),
      rowsOnly,
    );
    await grid.step('наведение дальше', () => grid.hover([3, 7]), rowsOnly);
    await grid.finish();
  });
});
