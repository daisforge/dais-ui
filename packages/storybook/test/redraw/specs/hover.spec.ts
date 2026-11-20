import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

const STAND = 'локальные-компоненты-tablecanvas-redraw--basic';

/** Наведение дорисовывает только прежнюю и новую строки, шапку не трогает. */
const rowsOnly: FrameExpectation = {
  kinds: ['damage'],
  header: false,
  maxShare: 0.2,
};

test.describe('наведение', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
  });

  test('проход по строкам вниз и обратно вверх', async ({ grid }) => {
    for (let row = 0; row < 10; row += 1) {
      await grid.step(
        `вниз, строка ${row}`,
        () => grid.hover([2, row]),
        rowsOnly,
      );
    }
    for (let row = 8; row >= 0; row -= 1) {
      await grid.step(
        `вверх, строка ${row}`,
        () => grid.hover([2, row]),
        rowsOnly,
      );
    }
    await grid.finish();
  });

  test('по диагонали, прыжками и внутри одной строки', async ({ grid }) => {
    for (let i = 0; i < 6; i += 1) {
      await grid.step(`диагональ ${i}`, () => grid.hover([i, i]), rowsOnly);
    }
    for (const row of [12, 2, 9, 0, 13]) {
      await grid.step(
        `прыжок на строку ${row}`,
        () => grid.hover([3, row]),
        rowsOnly,
      );
    }
    // внутри строки меняется только ячейка под мышью
    for (let col = 0; col < 6; col += 1) {
      await grid.step(`строка 5, колонка ${col}`, () => grid.hover([col, 5]), {
        ...rowsOnly,
        some: false,
      });
    }
    await grid.finish();
  });

  test('шапка колонки, угол и номер строки', async ({ grid }) => {
    const header: FrameExpectation = { kinds: ['damage'], header: true };
    await grid.step('шапка колонки 2', () => grid.hover([2, -1]), header);
    await grid.step('шапка колонки 3', () => grid.hover([3, -1]), header);
    await grid.step('угол над нумерацией', () => grid.hover([-1, -1]), {
      kinds: ['damage'],
    });
    // наведение на нумерацию подсвечивает и её шапку
    const marker: FrameExpectation = { kinds: ['damage'], maxShare: 0.2 };
    await grid.step('номер строки 4', () => grid.hover([-1, 4]), marker);
    await grid.step('номер строки 5', () => grid.hover([-1, 5]), marker);
    await grid.step('из нумерации в ячейку', () => grid.hover([1, 5]), {
      ...rowsOnly,
      some: false,
    });
    await grid.finish();
  });

  test('уход с таблицы и возврат', async ({ grid }) => {
    await grid.step('строка 3', () => grid.hover([2, 3]), rowsOnly);
    await grid.step('мышь ушла с таблицы', () => grid.leave(), rowsOnly);
    await grid.step(
      'вернулась на строку 7',
      () => grid.hover([4, 7]),
      rowsOnly,
    );
    await grid.step('ушла через шапку', () => grid.hover([4, -1]), {
      kinds: ['damage'],
    });
    await grid.step('снова ушла', () => grid.leave(), { kinds: ['damage'] });
    await grid.finish();
  });

  test('ячейки со своим рендером и своим цветом', async ({ grid }) => {
    // колонка 4 рисует бейдж, колонка 5 красит отрицательные суммы
    for (let row = 0; row < 8; row += 1) {
      await grid.step(
        `бейдж, строка ${row}`,
        () => grid.hover([4, row]),
        rowsOnly,
      );
    }
    for (let row = 7; row >= 0; row -= 1) {
      await grid.step(
        `сумма, строка ${row}`,
        () => grid.hover([5, row]),
        rowsOnly,
      );
    }
    await grid.finish();
  });

  test('после прокрутки колесом', async ({ grid }) => {
    await grid.step('строка 2', () => grid.hover([2, 2]), rowsOnly);
    await grid.step('прокрутка вниз', () => grid.wheel(300), {
      kinds: ['blit', 'damage'],
    });
    await grid.step(
      'строка под мышью после прокрутки',
      () => grid.hover([2, 12]),
      {
        ...rowsOnly,
        some: false,
      },
    );
    await grid.step('строка 15', () => grid.hover([2, 15]), rowsOnly);
    await grid.step('прокрутка вправо', () => grid.wheel(0, 300), {
      kinds: ['blit', 'damage'],
    });
    await grid.step(
      'строка 16 после сдвига',
      () => grid.hover([8, 16]),
      rowsOnly,
    );
    await grid.step('прокрутка обратно вверх', () => grid.wheel(-300), {
      kinds: ['blit', 'damage'],
    });
    await grid.step('строка 1', () => grid.hover([8, 1]), rowsOnly);
    await grid.finish();
  });
});
