import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

const STAND = 'локальные-компоненты-tablecanvas-redraw--basic';

/**
 * Смена выделения: glide рисует только области выделения (selection), обёртка
 * дорисовывает строки подсветки (damage). Шапка только при смене колонок.
 */
const partial = (header: boolean, maxShare = 0.3): FrameExpectation => ({
  kinds: ['selection', 'damage'],
  header,
  maxShare,
});

/** Выделение строк и колонок целиком всегда кадр целиком (плюс смена фокуса). */
const full: FrameExpectation = { kinds: ['full', 'selection', 'damage'] };

/** Выделение вместе с прокруткой: сдвиг прошлого кадра и области выделения. */
const scrolled: FrameExpectation = { kinds: ['blit', 'selection', 'damage'] };

test.describe('первый клик после загрузки', () => {
  test('частичный с первого клика', async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
    await grid.step('первый клик', () => grid.click([2, 3]), {
      kinds: ['selection', 'damage'],
    });
    await grid.step('второй клик', () => grid.click([2, 5]), partial(false));
    await grid.step('стрелка', () => grid.press('ArrowDown'), partial(false));
    await grid.finish();
  });
});

test.describe('выделение', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
    await grid.prime();
  });

  test('клик и стрелки', async ({ grid }) => {
    await grid.step('клик по ячейке', () => grid.click([2, 3]), partial(true));
    await grid.step('вниз', () => grid.press('ArrowDown'), partial(false));
    await grid.step('ещё вниз', () => grid.press('ArrowDown'), partial(false));
    await grid.step('вправо', () => grid.press('ArrowRight'), partial(true));
    await grid.step('влево', () => grid.press('ArrowLeft'), partial(true));
    await grid.step('вверх', () => grid.press('ArrowUp'), partial(false));
    await grid.step(
      'клик в другую колонку',
      () => grid.click([5, 8]),
      partial(true),
    );
    await grid.step(
      'клик в ту же колонку',
      () => grid.click([5, 1]),
      partial(false),
    );
    await grid.finish();
  });

  test('диапазоны Shift и несколько диапазонов Ctrl', async ({ grid }) => {
    await grid.step('клик', () => grid.click([1, 2]), partial(true));
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
    await grid.step(
      'Shift+вправо',
      () => grid.press('Shift+ArrowRight'),
      partial(true),
    );
    await grid.step(
      'Shift+клик далеко',
      () => grid.click([5, 9], { modifiers: ['Shift'] }),
      partial(true, 0.6),
    );
    await grid.step(
      'Ctrl+клик: второй диапазон',
      () => grid.click([7, 1], { modifiers: ['Control'] }),
      partial(true, 0.6),
    );
    await grid.step(
      'Ctrl+клик: третий диапазон',
      () => grid.click([0, 12], { modifiers: ['Control'] }),
      partial(true, 0.6),
    );
    await grid.step(
      'стрелка снимает диапазоны',
      () => grid.press('ArrowDown'),
      partial(true, 0.6),
    );
    await grid.finish();
  });

  test('протяжка мышью', async ({ grid }) => {
    await grid.step(
      'протяжка вниз и вправо',
      () => grid.drag([1, 1], [4, 6]),
      partial(true, 0.6),
    );
    await grid.step(
      'протяжка в одну строку',
      () => grid.drag([0, 9], [6, 9]),
      partial(true, 0.6),
    );
    await grid.step(
      'протяжка вверх и влево',
      () => grid.drag([5, 8], [2, 2]),
      partial(true, 0.6),
    );
    await grid.finish();
  });

  test('снять выделение и потерять фокус', async ({ grid }) => {
    await grid.step('клик', () => grid.click([3, 4]), partial(true));
    await grid.step('Escape', () => grid.press('Escape'), partial(true));
    await grid.step('снова клик', () => grid.click([3, 4]), partial(true));
    await grid.step(
      'клик мимо таблицы',
      () => grid.clickPoint({ x: 1300, y: 880 }),
      {
        kinds: ['selection', 'damage'],
      },
    );
    await grid.step('клик обратно', () => grid.click([3, 5]), partial(false));
    await grid.finish();
  });

  test('колонки, строки и вся таблица целиком', async ({ grid }) => {
    await grid.step('клик по шапке колонки', () => grid.click([2, -1]), full);
    await grid.step(
      'Shift+клик по шапке',
      () => grid.click([4, -1], { modifiers: ['Shift'] }),
      full,
    );
    await grid.step('клик по ячейке после колонок', () => grid.click([1, 1]), {
      kinds: ['full', 'selection', 'damage'],
    });
    await grid.step('клик по номеру строки', () => grid.click([-1, 3]), full);
    await grid.step(
      'Ctrl+клик по номеру строки',
      () => grid.click([-1, 6], { modifiers: ['Control'] }),
      full,
    );
    await grid.step('выделить всё', () => grid.click([-1, -1]), full);
    await grid.step('клик по ячейке после всего', () => grid.click([2, 2]), {
      kinds: ['full', 'selection', 'damage'],
    });
    await grid.finish();
  });

  test('выделение вместе с прокруткой', async ({ grid }) => {
    await grid.step('клик', () => grid.click([2, 2]), partial(true));
    await grid.step('PageDown', () => grid.press('PageDown'), scrolled);
    await grid.step('PageDown ещё', () => grid.press('PageDown'), scrolled);
    await grid.step('вниз у края', () => grid.press('ArrowDown'), scrolled);
    await grid.step('PageUp', () => grid.press('PageUp'), scrolled);
    await grid.step(
      'End: последняя колонка',
      () => grid.press('End'),
      scrolled,
    );
    await grid.step('Home: первая колонка', () => grid.press('Home'), scrolled);
    await grid.step('Ctrl+End', () => grid.press('Control+End'), scrolled);
    await grid.step('Ctrl+Home', () => grid.press('Control+Home'), scrolled);
    await grid.step('прокрутка колесом с выделением', () => grid.wheel(250), {
      kinds: ['blit', 'damage'],
    });
    await grid.step(
      'стрелка после прокрутки',
      () => grid.press('ArrowDown'),
      scrolled,
    );
    await grid.finish();
  });

  test('наведение поверх выделения', async ({ grid }) => {
    await grid.step(
      'протяжка',
      () => grid.drag([1, 2], [4, 6]),
      partial(true, 0.6),
    );
    for (const row of [1, 2, 4, 6, 7, 3]) {
      await grid.step(
        `наведение на строку ${row}`,
        () => grid.hover([3, row]),
        {
          kinds: ['damage'],
          header: false,
        },
      );
    }
    await grid.step(
      'наведение на шапку выделенной колонки',
      () => grid.hover([3, -1]),
      {
        kinds: ['damage'],
        header: true,
      },
    );
    await grid.step('мышь ушла', () => grid.leave(), { kinds: ['damage'] });
    await grid.finish();
  });
});
