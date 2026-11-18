import { expect, test } from '../fixtures';
import type { FrameExpectation } from '../grid';

// Редактируемые (название, сумма) и нередактируемые ячейки вперемешку, маркер
// растяжения, ошибка в ячейке суммы при отрицательном значении.
const STAND = 'локальные-компоненты-tablecanvas-redraw--editing';

// Шапку не проверяем: пока в первой видимой строке есть обводка (ошибка), glide
// перерисовывает шапку при любой смене регионов подсветки.
const partial = (_header: boolean): FrameExpectation => ({
  kinds: ['selection', 'damage'],
  maxShare: 0.5,
});
// Переход между редактируемой и нередактируемой ячейкой меняет видимость маркера
// растяжения, это проп glide: кадр целиком один раз на переход (см. план, пункт
// про useFillHandle). Внутри одной зоны редактируемости путь частичный.
const crossing: FrameExpectation = { kinds: ['full', 'selection', 'damage'] };

test.describe('редактирование', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
    await grid.prime();
  });

  test('выделение внутри редактируемой колонки и переходы между зонами', async ({
    grid,
  }) => {
    await grid.step('клик в редактируемую', () => grid.click([1, 2]), crossing);
    await grid.step(
      'вниз по редактируемой',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    await grid.step('ещё вниз', () => grid.press('ArrowDown'), partial(false));
    await grid.step(
      'вправо в нередактируемую',
      () => grid.press('ArrowRight'),
      crossing,
    );
    await grid.step(
      'вниз по нередактируемой',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    await grid.step(
      'клик в сумму с ошибкой',
      () => grid.click([3, 4]),
      crossing,
    );
    await grid.step(
      'вниз по суммам',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    await grid.step('наведение на ошибку', () => grid.hover([3, 1]), {
      kinds: ['damage'],
      header: false,
    });
    await grid.finish();
  });

  test('открыть и закрыть редактор', async ({ grid, page }) => {
    await grid.step('клик в редактируемую', () => grid.click([1, 3]), crossing);
    await grid.step('Enter открывает редактор', () => grid.press('Enter'), {
      some: false,
    });
    await expect(page.locator('input, textarea').first()).toBeVisible();
    await grid.step('Escape закрывает', () => grid.press('Escape'), {
      some: false,
    });
    await expect(page.locator('input, textarea')).toHaveCount(0);
    await grid.step(
      'стрелка после редактора',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    const point = await grid.center([1, 5]);
    await grid.step(
      'двойной клик открывает',
      () => page.mouse.dblclick(point.x, point.y),
      {
        some: false,
      },
    );
    await grid.step('ввод и Enter меняют данные', async () => {
      await page.keyboard.type('Новое имя');
      await page.keyboard.press('Enter');
    });
    await grid.step('наведение после правки', () => grid.hover([1, 6]), {
      kinds: ['damage'],
      header: false,
    });
    await grid.finish();
  });

  test('маркер растяжения', async ({ grid }) => {
    await grid.step('клик в сумму', () => grid.click([3, 2]), crossing);
    const cell = await grid.bounds([3, 2]);
    const handle = { x: cell.x + cell.width - 3, y: cell.y + cell.height - 3 };
    const target = await grid.center([3, 6]);
    await grid.step('наведение на маркер', () => grid.hoverPoint(handle), {
      kinds: ['damage'],
      some: false,
    });
    await grid.step(
      'протяжка маркером вниз',
      () => grid.dragPoints(handle, target),
      {
        kinds: ['full', 'blit', 'selection', 'damage'],
      },
    );
    await grid.step('наведение после протяжки', () => grid.hover([3, 8]), {
      kinds: ['damage'],
      header: false,
    });
    await grid.step(
      'клик в другую сумму',
      () => grid.click([3, 9]),
      partial(false),
    );
    await grid.finish();
  });
});
