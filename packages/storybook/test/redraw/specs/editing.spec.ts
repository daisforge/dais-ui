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

test('внешние отметки обновляют фон открытого редактора', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=локальные-компоненты-tablecanvas-editing--editing-controlled-highlights&viewMode=story',
  );
  await page
    .locator('button')
    .filter({ hasText: /^Редактировать$/ })
    .click();
  const canvas = await page.getByTestId('data-grid-canvas').boundingBox();
  if (!canvas) throw new Error('Таблица ещё не отображается');
  await page.mouse.dblclick(canvas.x + 100, canvas.y + 54);
  const editor = page.locator('textarea:visible');
  await expect(editor).toHaveValue('Альфа');
  await editor.fill('Черновик');
  const background = () =>
    page
      .locator('[id^="gdg-overlay-"].gdg-style')
      .evaluate((el) => getComputedStyle(el, '::before').backgroundColor);
  const original = await background();
  // Вызываем обработчик кнопки без перевода фокуса, как при внешнем обновлении отметок.
  await page
    .getByRole('button', { name: 'Подсветить только название первой строки' })
    .evaluate((button: HTMLButtonElement) => button.click());
  await expect
    .poll(background)
    .toMatch(/^rgb\((207, 236|222, 242|237, 248), 255\)$/);
  await expect(editor).toHaveValue('Черновик');
  await page
    .getByRole('button', { name: 'Сбросить подсветку' })
    .evaluate((button: HTMLButtonElement) => button.click());
  await expect.poll(background).toBe(original);
  await expect(editor).toBeFocused();
});

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
    const editorFill = () =>
      page
        .locator('[id^="gdg-overlay-"].gdg-style')
        .evaluate((el) => getComputedStyle(el, '::before').backgroundColor);
    await expect.poll(editorFill).toBe('rgb(255, 232, 191)');
    await grid.step('ввод и Enter меняют данные', async () => {
      const editor = page.locator('textarea:visible');
      await expect(editor).toHaveValue('Запись 6');
      await editor.fill('Новое имя');
      await expect(editor).toHaveValue('Новое имя');
      await editor.press('Enter');
      await expect(editor).toHaveCount(0);
    });
    await page.mouse.dblclick(point.x, point.y);
    const savedEditor = page.locator('textarea:visible');
    await expect(savedEditor).toHaveValue('Новое имя');
    await expect.poll(editorFill).toBe('rgb(207, 236, 255)');
    await grid.leave();
    await expect.poll(editorFill).toBe('rgb(222, 242, 255)');
    await savedEditor.press('Escape');
    await grid.click([1, 7]);
    await grid.leave();
    await grid.settle();
    const editedBounds = await grid.bounds([1, 5]);
    const pixel = await page
      .getByTestId('data-grid-canvas')
      .evaluate((el, rect) => {
        const canvas = el as HTMLCanvasElement;
        const bounds = canvas.getBoundingClientRect();
        const x = Math.floor(
          ((rect.x + rect.width - 12 - bounds.x) * canvas.width) / bounds.width,
        );
        const y = Math.floor(
          ((rect.y + 6 - bounds.y) * canvas.height) / bounds.height,
        );
        return Array.from(
          canvas.getContext('2d')!.getImageData(x, y, 1, 1).data,
        );
      }, editedBounds);
    expect(pixel).toEqual([237, 248, 255, 255]); // editedSuccessfullyCellColor светлой темы
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
