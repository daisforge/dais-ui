import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

// Две служебные колонки: нумерация и чекбокс. Отмечены строки 2 и 5, ошибки у строк
// с отрицательной суммой, в колонке 4 кнопка, которая меняет вид под курсором.
const STAND = 'локальные-компоненты-tablecanvas-redraw--marks';

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
// Смена отметки это состояние потребителя: компонент перерисовывается, кадр целиком.
const marked: FrameExpectation = { kinds: ['full', 'selection', 'damage'] };

test.describe('отметки строк, ошибки и кнопка в ячейке', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 2 });
    await grid.prime();
  });

  test('чекбоксы: отметить и снять, наведение на отмеченные', async ({
    grid,
  }) => {
    for (const row of [1, 2, 3]) {
      await grid.step(
        `наведение на строку ${row}`,
        () => grid.hover([1, row]),
        rowsOnly,
      );
    }
    await grid.step('отметить строку 3', () => grid.click([-1, 3]), marked);
    await grid.step(
      'наведение на отмеченную',
      () => grid.hover([2, 3]),
      rowsOnly,
    );
    await grid.step(
      'снять отметку со строки 2',
      () => grid.click([-1, 2]),
      marked,
    );
    await grid.step('наведение на снятую', () => grid.hover([2, 2]), rowsOnly);
    // начало протяжки меняет drawFocusRing в обёртке: кадр целиком (к обсуждению)
    await grid.step(
      'выделение через отмеченные',
      () => grid.drag([1, 1], [3, 6]),
      marked,
    );
    await grid.step(
      'наведение поверх выделения и отметки',
      () => grid.hover([2, 5]),
      {
        kinds: ['damage'],
        header: false,
      },
    );
    await grid.finish();
  });

  test('ошибки строк', async ({ grid }) => {
    for (let row = 0; row < 8; row += 1) {
      await grid.step(
        `наведение, строка ${row}`,
        () => grid.hover([5, row]),
        rowsOnly,
      );
    }
    await grid.step(
      'клик в ячейку с ошибкой',
      () => grid.click([5, 1]),
      partial(true),
    );
    await grid.step('вниз', () => grid.press('ArrowDown'), partial(false));
    await grid.step('наведение на столбец ошибок', () => grid.hover([-2, 1]), {
      kinds: ['damage'],
      some: false,
    });
    await grid.finish();
  });

  test('кнопка в ячейке меняет вид под курсором', async ({ grid }) => {
    for (const row of [0, 1, 2, 1, 0]) {
      await grid.step(
        `кнопка в строке ${row}`,
        () => grid.hover([4, row]),
        rowsOnly,
      );
    }
    await grid.step(
      'с кнопки на соседнюю ячейку',
      () => grid.hover([5, 0]),
      rowsOnly,
    );
    await grid.step('обратно на кнопку', () => grid.hover([4, 0]), rowsOnly);
    await grid.step('клик по кнопке', () => grid.click([4, 0]), marked);
    await grid.step('уход', () => grid.leave(), { kinds: ['damage'] });
    await grid.finish();
  });
});
