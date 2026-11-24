import { expect, test } from '../fixtures';

const storyId =
  'локальные-компоненты-tablecanvas-columnscontrol--columns-control-persisted-order';

test('Metallica: сохранение порядка, перезагрузка и сброс первым действием', async ({
  page,
}) => {
  await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
  const story = page.locator('#storybook-root');
  const reset = story.getByRole('button', {
    name: 'Сбросить порядок',
    exact: true,
  });
  const headers = story.locator('[role="columnheader"]');
  const storedOrder = () =>
    page.evaluate(() =>
      localStorage.getItem('storybook.tableCanvas.columnsControl.order.v1'),
    );
  const defaultOrder = ['ID', 'Модель', 'Версия расчёта'];
  const savedOrder = ['ID', 'Версия расчёта', 'Модель'];
  await expect(headers).toHaveText(defaultOrder);

  await expect(reset).toBeDisabled();

  const model = story.locator('[draggable="true"][id="model"]');
  const version = story.locator('[draggable="true"][id="version"]');
  await model.dragTo(version, { targetPosition: { x: 5, y: 15 } });
  await expect(headers).toHaveText(savedOrder);
  await expect
    .poll(storedOrder)
    .toBe(JSON.stringify(['id', 'version', 'model']));
  await page.reload();
  await expect(headers).toHaveText(savedOrder);

  await expect(reset).toBeEnabled();
  const canvas = await story
    .locator('canvas')
    .first()
    .evaluateHandle((node) => node);
  await reset.click();
  await expect(headers).toHaveText(defaultOrder);
  await expect(reset).toBeDisabled();
  expect(await canvas.evaluate((node) => node.isConnected)).toBe(true);
  await expect
    .poll(storedOrder)
    .toBe(JSON.stringify(['id', 'model', 'version']));

  await page.reload();
  await expect(headers).toHaveText(defaultOrder);
  await expect(reset).toBeDisabled();
});
