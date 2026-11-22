import { expect, test } from '../fixtures';

test('активная запись при серверной сортировке и перестановке колонки', async ({
  grid,
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await grid.open(
    'локальные-компоненты-tablecanvas-cellsselection-смена-данных--server-sort',
  );
  const status = page.locator('output');
  await grid.click([1, 1]);
  await grid.press('Shift+ArrowDown');
  await expect(status).toHaveText('ID 20, колонка 2, диапазон 1 × 2');
  await page.getByRole('button', { name: 'Запросить сортировку' }).click();
  await expect(status).toHaveText('ID 20, колонка 2, диапазон 1 × 1');
  await page.getByRole('button', { name: 'Применить ответ' }).click();
  await expect(status).toHaveText('ID 20, колонка 2, диапазон 1 × 1');
  await page.getByRole('button', { name: 'Переместить имя в начало' }).click();
  await expect(status).toHaveText('ID 20, колонка 1, диапазон 1 × 1');
  await page.getByTestId('data-grid-canvas').focus();
  await page.keyboard.press('Control+c');
  await expect
    .poll(() => page.evaluate(() => navigator.clipboard.readText()))
    .toBe('Борис');
  await grid.finish();
});

for (const replaceOnLoad of [false, true]) {
  test(`после ответа запись вне экрана копируется без прокрутки, replace=${replaceOnLoad}`, async ({
    grid,
    page,
    context,
  }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    const id =
      'локальные-компоненты-tablecanvas-cellsselection-смена-данных--server-sort';
    await grid.open(id, {
      args: `extraRows:100;replaceOnLoad:${replaceOnLoad}`,
    });
    await grid.click([1, 1]);
    await grid.press('Shift+ArrowDown');
    await expect(page.locator('output')).toHaveText(
      'ID 20, колонка 2, диапазон 1 × 2',
    );
    await page.getByRole('button', { name: 'Запросить сортировку' }).click();
    if (replaceOnLoad)
      await expect(page.getByTestId('data-grid-canvas')).toHaveCount(0);
    await page.getByRole('button', { name: 'Применить ответ' }).click();
    await expect(page.locator('output')).toHaveText(
      'ID 20, колонка 2, диапазон 1 × 1',
    );
    await grid.settle();
    const scroller = page.locator('.dvn-scroller').first();
    expect(
      await scroller.evaluate((el) => el.scrollHeight - el.clientHeight),
    ).toBeGreaterThan(1000);
    expect(await scroller.evaluate((el) => el.scrollTop)).toBe(0);
    await page.getByTestId('data-grid-canvas').focus();
    await page.keyboard.press('Control+c');
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe('Борис');
    await page.keyboard.press('ArrowUp');
    await expect(page.locator('output')).toHaveText(
      'ID 30, колонка 2, диапазон 1 × 1',
    );
    await expect
      .poll(() => scroller.evaluate((el) => el.scrollTop))
      .toBeGreaterThan(0);
  });
}
