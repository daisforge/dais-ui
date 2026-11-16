import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

// Колонка 2 (отдел) объединена блоками по 4 строки, колонка 3 (роль) по 2.
const STAND = 'локальные-компоненты-tablecanvas-redraw--merged';

/** Наведение на блок подсвечивает все его строки. */
const blockRows: FrameExpectation = {
  kinds: ['damage'],
  header: false,
  maxShare: 0.8,
};
// Пока блок с прилипающим содержимым обрезан краем экрана, glide по своему правилу
// рисует смену выделения кадром целиком (разделы 4 и 9 selection-partial-redraw.md
// в форке). Сужение правила обсуждается отдельно, здесь кадр целиком допускается.
const partial = (_header: boolean): FrameExpectation => ({
  kinds: ['full', 'selection', 'damage'],
});

test.describe('объединённые ячейки', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
    await grid.prime();
  });

  test('наведение внутри блока и между блоками', async ({ grid }) => {
    for (let row = 0; row < 9; row += 1) {
      await grid.step(`отдел, строка ${row}`, () => grid.hover([2, row]), {
        ...blockRows,
        some: false,
      });
    }
    for (let row = 0; row < 7; row += 1) {
      await grid.step(`роль, строка ${row}`, () => grid.hover([3, row]), {
        ...blockRows,
        some: false,
      });
    }
    await grid.step(
      'обычная колонка рядом',
      () => grid.hover([4, 5]),
      blockRows,
    );
    await grid.step('снова блок', () => grid.hover([2, 5]), blockRows);
    await grid.step('мышь ушла', () => grid.leave(), blockRows);
    await grid.finish();
  });

  test('выделение в блоке и через его границу', async ({ grid }) => {
    await grid.step(
      'клик в блок отдела',
      () => grid.click([2, 3]),
      partial(true),
    );
    await grid.step(
      'вниз внутри блока',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    await grid.step(
      // клик по уже выделенному блоку glide считает началом редактирования,
      // поэтому кликаем в соседнюю колонку
      'вниз через границу блоков',
      () => grid.click([3, 7]),
      partial(false),
    );
    await grid.step(
      'ещё вниз, следующий блок',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    await grid.step(
      'вправо в блок роли',
      () => grid.press('ArrowRight'),
      partial(true),
    );
    await grid.step(
      'Shift+вниз через роль',
      () => grid.press('Shift+ArrowDown'),
      partial(false),
    );
    await grid.step(
      'Shift+вниз ещё',
      () => grid.press('Shift+ArrowDown'),
      partial(false),
    );
    await grid.step(
      'Shift+вправо в обычную колонку',
      () => grid.press('Shift+ArrowRight'),
      partial(true),
    );
    await grid.step(
      'протяжка из обычной в блок',
      () => grid.drag([5, 1], [2, 4]),
      partial(true),
    );
    await grid.step(
      'Ctrl+клик во второй блок',
      () => grid.click([3, 12], { modifiers: ['Control'] }),
      partial(true),
    );
    await grid.step('Escape', () => grid.press('Escape'), partial(true));
    await grid.finish();
  });

  test('наведение поверх выделенного блока', async ({ grid }) => {
    await grid.step(
      'протяжка по блокам',
      () => grid.drag([1, 2], [3, 9]),
      partial(true),
    );
    for (const row of [1, 3, 8, 10, 5]) {
      await grid.step(`наведение, строка ${row}`, () => grid.hover([2, row]), {
        kinds: ['damage'],
        header: false,
        some: false,
      });
    }
    // блок с прилипающим содержимым на экране: прокрутка кадром целиком по правилу
    await grid.step('прокрутка', () => grid.wheel(200), {
      kinds: ['full', 'blit', 'damage'],
    });
    await grid.step('наведение после прокрутки', () => grid.hover([2, 14]), {
      kinds: ['damage'],
      header: false,
    });
    await grid.finish();
  });
});
