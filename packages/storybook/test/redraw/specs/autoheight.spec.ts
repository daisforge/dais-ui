import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

// Высота строк по содержимому: строки разной высоты, стрелки и прокрутка у края экрана.
const STAND = 'локальные-компоненты-tablecanvas-redraw--auto-height';

const rowsOnly: FrameExpectation = {
  kinds: ['damage'],
  header: false,
  maxShare: 0.35,
};
// Строки высокие: протяжка на несколько строк занимает заметную долю тела.
const partial = (header: boolean): FrameExpectation => ({
  kinds: ['selection', 'damage'],
  header,
  maxShare: 0.75,
});
const scrolled: FrameExpectation = { kinds: ['blit', 'selection', 'damage'] };

test.describe('автовысота строк', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
    await grid.prime();
  });

  test('наведение на строки разной высоты', async ({ grid }) => {
    for (let row = 0; row < 8; row += 1) {
      await grid.step(`строка ${row}`, () => grid.hover([2, row]), rowsOnly);
    }
    for (const row of [6, 1, 7, 0]) {
      await grid.step(`прыжок на ${row}`, () => grid.hover([3, row]), rowsOnly);
    }
    await grid.finish();
  });

  test('выделение и стрелки по строкам разной высоты', async ({ grid }) => {
    await grid.step(
      'клик в высокую строку',
      () => grid.click([2, 2]),
      partial(true),
    );
    await grid.step('вниз', () => grid.press('ArrowDown'), partial(false));
    await grid.step(
      'вниз в низкую',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    await grid.step('вверх', () => grid.press('ArrowUp'), partial(false));
    await grid.step(
      'Shift+вниз',
      () => grid.press('Shift+ArrowDown'),
      partial(false),
    );
    await grid.step(
      'Shift+вниз ещё',
      () => grid.press('Shift+ArrowDown'),
      partial(false),
    );
    await grid.step('протяжка', () => grid.drag([1, 1], [4, 4]), partial(true));
    await grid.finish();
  });

  test('стрелка вверх у края: обрезанная строка выезжает целиком', async ({
    grid,
  }) => {
    await grid.step('клик', () => grid.click([2, 1]), partial(true));
    await grid.step('прокрутка на полстроки', () => grid.wheel(40), {
      kinds: ['blit', 'damage'],
    });
    await grid.step(
      'клик в первую видимую',
      () => grid.click([2, 2]),
      partial(false),
    );
    await grid.step(
      'вверх к обрезанной строке',
      () => grid.press('ArrowUp'),
      scrolled,
    );
    await grid.step('ещё вверх', () => grid.press('ArrowUp'), scrolled);
    await grid.step(
      'прокрутка вниз на экран',
      () => grid.press('PageDown'),
      scrolled,
    );
    await grid.step(
      'вниз у нижнего края',
      () => grid.press('ArrowDown'),
      scrolled,
    );
    await grid.step('вниз ещё', () => grid.press('ArrowDown'), scrolled);
    await grid.step('PageUp', () => grid.press('PageUp'), scrolled);
    await grid.finish();
  });

  test('прокрутка колесом по высоким строкам', async ({ grid }) => {
    await grid.step('строка 1', () => grid.hover([2, 1]), rowsOnly);
    for (const dy of [120, 300, -200, 500, -700]) {
      await grid.step(`колесо ${dy}`, () => grid.wheel(dy), {
        kinds: ['blit', 'damage'],
        some: false,
      });
    }
    await grid.step('наведение после прокрутки', () => grid.hover([2, 3]), {
      ...rowsOnly,
      some: false,
    });
    await grid.step(
      'клик после прокрутки',
      () => grid.click([2, 4]),
      partial(true),
    );
    await grid.finish();
  });
});
