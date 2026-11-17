import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

// Выделение хранит потребитель: каждый клик перерисовывает компонент. Таблица
// при этом не должна рисовать весь экран, пока данные и колонки прежние.
const STAND = 'локальные-компоненты-tablecanvas-redraw--controlled';

const partial: FrameExpectation = { kinds: ['selection', 'damage'] };

test.describe('выделение снаружи (controlled)', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
  });

  test('клики, стрелки и наведение', async ({ grid }) => {
    await grid.step('клик', () => grid.click([2, 3]), partial);
    await grid.step('вниз', () => grid.press('ArrowDown'), partial);
    await grid.step('Shift+вниз', () => grid.press('Shift+ArrowDown'), partial);
    await grid.step(
      'Shift+клик',
      () => grid.click([5, 8], { modifiers: ['Shift'] }),
      partial,
    );
    await grid.step(
      'Ctrl+клик',
      () => grid.click([7, 1], { modifiers: ['Control'] }),
      partial,
    );
    for (const row of [0, 4, 9, 2]) {
      await grid.step(
        `наведение на строку ${row}`,
        () => grid.hover([3, row]),
        {
          kinds: ['damage'],
          header: false,
        },
      );
    }
    await grid.step('клик по шапке', () => grid.click([3, -1]));
    await grid.step('Escape', () => grid.press('Escape'));
    await grid.step('PageDown', () => grid.press('PageDown'));
    await grid.step('клик после прокрутки', () => grid.click([1, 20]), partial);
    await grid.finish();
  });
});
