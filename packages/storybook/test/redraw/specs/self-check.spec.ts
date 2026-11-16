import { expect, test } from '../fixtures';

// Проверка самих тестов: сравнение замечает один пиксель на каждом холсте, а
// журнал кадров действительно ведётся (без отметки glide всё было бы зелёным,
// ничего не проверяя).
const STAND = 'локальные-компоненты-tablecanvas-redraw--basic';

test.describe('проверка механизма', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
  });

  test('сравнение замечает один пиксель на теле и на шапке', async ({
    grid,
    page,
  }) => {
    await grid.click([2, 3]);
    await grid.settle();
    await page.evaluate(() => window.daisRedraw?.corrupt('body', 40, 120));
    const body = await page.evaluate(() => window.daisRedraw!.compare());
    expect(body.equal).toBe(false);
    expect(
      body.canvases.find((c) => c.name === 'body')?.pixels,
    ).toBeGreaterThan(0);
    expect(body.canvases.find((c) => c.name === 'header')?.pixels).toBe(0);
    expect(body.canvases.find((c) => c.name === 'body')?.diff).toContain(
      'data:image/png',
    );

    await page.evaluate(() => window.daisRedraw?.corrupt('header', 40, 10));
    const header = await page.evaluate(() => window.daisRedraw!.compare());
    expect(header.equal).toBe(false);
    expect(
      header.canvases.find((c) => c.name === 'header')?.pixels,
    ).toBeGreaterThan(0);
    expect(header.canvases.find((c) => c.name === 'body')?.pixels).toBe(0);

    // после полной перерисовки холст совпадает сам с собой
    const clean = await page.evaluate(() => window.daisRedraw!.compare());
    expect(clean.equal).toBe(true);
  });

  test('журнал кадров: полная перерисовка даёт full, наведение только damage', async ({
    grid,
    page,
  }) => {
    await grid.prime();
    const count = await page.evaluate(() => window.daisRedraw!.repaint());
    expect(count).toBe(1);
    await grid.settle();
    const repaint = await grid.takeFrames();
    expect(
      repaint.map((f) => f.kind),
      'glide без отметки о кадрах (experimental.onFrameDrawn): нужен форк с этим хуком',
    ).toContain('full');

    await grid.hover([2, 3]);
    await grid.settle();
    const hover = await grid.takeFrames();
    expect(hover.length).toBeGreaterThan(0);
    expect(hover.every((f) => f.kind === 'damage')).toBe(true);

    await grid.click([2, 5]);
    await grid.settle();
    const click = await grid.takeFrames();
    expect(click.map((f) => f.kind)).toContain('selection');
    expect(click.map((f) => f.kind)).not.toContain('full');
  });

  test('после сверки частичный путь продолжает работать', async ({ grid }) => {
    await grid.prime();
    await grid.step('клик', () => grid.click([1, 1]), {
      kinds: ['selection', 'damage'],
    });
    await grid.check('после клика');
    await grid.step('стрелка после сверки', () => grid.press('ArrowDown'), {
      kinds: ['selection', 'damage'],
      header: false,
    });
    await grid.step('наведение после сверки', () => grid.hover([3, 6]), {
      kinds: ['damage'],
      header: false,
    });
  });
});
