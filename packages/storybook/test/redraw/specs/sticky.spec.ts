import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

// Закреплены колонки id и name (после нумерации), прилипшие строки 4 и 11,
// итоговая строка внизу.
const STAND = 'локальные-компоненты-tablecanvas-redraw--sticky';
const ROWS = 60;

const rowsOnly: FrameExpectation = {
  kinds: ['damage'],
  header: false,
  maxShare: 0.25,
};
const partial = (header: boolean): FrameExpectation => ({
  kinds: ['selection', 'damage'],
  header,
  maxShare: 0.6,
});
const scrolled: FrameExpectation = { kinds: ['blit', 'selection', 'damage'] };

test.describe('закреплённые колонки и строки', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
    await grid.prime();
  });

  test('наведение через границу закреплённых колонок', async ({ grid }) => {
    for (const col of [0, 1, 2, 5, 1, 7, 0]) {
      await grid.step(`строка 3, колонка ${col}`, () => grid.hover([col, 3]), {
        ...rowsOnly,
        some: false,
      });
    }
    for (let row = 0; row < 8; row += 1) {
      await grid.step(
        `закреплённая колонка, строка ${row}`,
        () => grid.hover([1, row]),
        rowsOnly,
      );
    }
    await grid.finish();
  });

  test('горизонтальная прокрутка и выделение через границу', async ({
    grid,
  }) => {
    await grid.step(
      'клик в закреплённой колонке',
      () => grid.click([1, 2]),
      partial(true),
    );
    await grid.step('прокрутка вправо', () => grid.wheel(0, 400), {
      kinds: ['blit', 'damage'],
    });
    await grid.step(
      'вправо стрелкой из закреплённой',
      () => grid.press('ArrowRight'),
      scrolled,
    );
    await grid.step(
      'Shift+вправо через границу',
      () => grid.press('Shift+ArrowRight'),
      scrolled,
    );
    await grid.step(
      'Shift+вправо ещё',
      () => grid.press('Shift+ArrowRight'),
      scrolled,
    );
    await grid.step(
      'наведение на закреплённую',
      () => grid.hover([0, 5]),
      rowsOnly,
    );
    await grid.step(
      'наведение на прокрученную',
      () => grid.hover([9, 6]),
      rowsOnly,
    );
    await grid.step(
      'протяжка из закреплённой в прокрученную',
      () => grid.drag([1, 7], [9, 9]),
      partial(true),
    );
    // стрелки уже могли вернуть прокрутку к началу, чтобы показать выделенную ячейку
    await grid.step('прокрутка обратно', () => grid.wheel(0, -400), {
      kinds: ['blit', 'damage'],
      some: false,
    });
    await grid.step(
      'клик в прокрученной области',
      () => grid.click([6, 1]),
      partial(true),
    );
    await grid.finish();
  });

  test('прилипшие строки под шапкой', async ({ grid }) => {
    // колесо крутит то, что под мышью: сначала наводим на таблицу
    await grid.hover([2, 1]);
    await grid.settle();
    // с прилипшими строками прокрутка меняет их состав, кадр целиком по правилу
    await grid.step('прокрутка вниз', () => grid.wheel(500), {
      kinds: ['full', 'blit', 'damage'],
    });
    await grid.step(
      'наведение на прилипшую строку 4',
      () => grid.hover([2, 4]),
      rowsOnly,
    );
    await grid.step(
      'наведение на прилипшую строку 11',
      () => grid.hover([2, 11]),
      rowsOnly,
    );
    await grid.step(
      'наведение на обычную строку рядом',
      () => grid.hover([2, 20]),
      rowsOnly,
    );
    await grid.step('клик по прилипшей строке', () => grid.click([3, 4]), {
      kinds: ['full', 'selection', 'damage'],
    });
    await grid.step(
      'стрелка вниз из прилипшей',
      () => grid.press('ArrowDown'),
      {
        kinds: ['full', 'blit', 'selection', 'damage'],
      },
    );
    await grid.step('клик по обычной строке', () => grid.click([3, 21]), {
      kinds: ['full', 'selection', 'damage'],
    });
    await grid.step(
      'Shift+клик по прилипшей',
      () => grid.click([5, 11], { modifiers: ['Shift'] }),
      {
        kinds: ['full', 'selection', 'damage'],
      },
    );
    await grid.finish();
  });

  test('итоговая строка', async ({ grid }) => {
    await grid.step('наведение на итог', () => grid.hover([2, ROWS]), {
      kinds: ['damage'],
      some: false,
    });
    await grid.step(
      'наведение на строку над итогом',
      () => grid.hover([2, 12]),
      rowsOnly,
    );
    await grid.step('клик по строке', () => grid.click([2, 12]), partial(true));
    await grid.step(
      'наведение на итог с выделением',
      () => grid.hover([2, ROWS]),
      {
        kinds: ['damage'],
        some: false,
      },
    );
    await grid.step('прокрутка в конец', () => grid.press('Control+End'), {
      kinds: ['full', 'blit', 'selection', 'damage'],
    });
    await grid.step(
      'наведение на последнюю строку',
      () => grid.hover([2, ROWS - 1]),
      // после прокрутки под мышью уже может быть эта строка
      { ...rowsOnly, some: false },
    );
    await grid.finish();
  });
});
