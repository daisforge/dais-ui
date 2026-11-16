import { test } from '../fixtures';

// Выделение хранит потребитель: каждый клик перерисовывает компонент, и кадр
// рисуется целиком. Здесь проверяется только совпадение с полным кадром, виды
// кадров не ограничиваем.
const STAND = 'локальные-компоненты-tablecanvas-redraw--controlled';

test.describe('выделение снаружи (controlled)', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
  });

  test('клики, стрелки и наведение', async ({ grid }) => {
    await grid.step('клик', () => grid.click([2, 3]));
    await grid.step('вниз', () => grid.press('ArrowDown'));
    await grid.step('Shift+вниз', () => grid.press('Shift+ArrowDown'));
    await grid.step('Shift+клик', () =>
      grid.click([5, 8], { modifiers: ['Shift'] }),
    );
    await grid.step('Ctrl+клик', () =>
      grid.click([7, 1], { modifiers: ['Control'] }),
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
    await grid.step('клик после прокрутки', () => grid.click([1, 20]));
    await grid.finish();
  });
});
