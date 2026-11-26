import assert from 'node:assert/strict';

import type { Page } from 'playwright';

export const persistedOrderStoryId =
  'локальные-компоненты-tablecanvas-columnscontrol--columns-control-persisted-order';
export const persistedOrderStorageKey =
  'storybook.tableCanvas.columnsControl.order.v1';
export const restoredColumnOrder = ['id', 'version', 'model'];
const initialColumnOrder = ['id', 'model', 'version'];

export async function checkPersistedColumnOrder(page: Page, storyUrl: string) {
  await page.goto(storyUrl);
  const story = page.locator('#storybook-root');
  const reset = story.getByRole('button', {
    name: 'Сбросить порядок',
    exact: true,
  });
  const waitForOrder = (order: string[]) =>
    page.waitForFunction((expected) => {
      const headers = document.querySelectorAll(
        '#storybook-root [role="columnheader"]',
      );
      return (
        headers.length === expected.length &&
        Array.from(headers).every(
          (header, index) => header.textContent?.trim() === expected[index],
        )
      );
    }, order);
  const waitForStoredOrder = (order: string[]) =>
    page.waitForFunction(
      ({ key, value }) => localStorage.getItem(key) === value,
      { key: persistedOrderStorageKey, value: JSON.stringify(order) },
    );
  const originalHeaders = ['ID', 'Модель', 'Версия расчёта'];
  const restoredHeaders = ['ID', 'Версия расчёта', 'Модель'];

  await waitForOrder(originalHeaders);
  await reset.waitFor();
  assert.equal(await reset.isDisabled(), true);

  const model = story.locator('[draggable="true"][id="model"]');
  const version = story.locator('[draggable="true"][id="version"]');
  await model.dragTo(version, { targetPosition: { x: 5, y: 15 } });
  await waitForOrder(restoredHeaders);
  await waitForStoredOrder(restoredColumnOrder);

  await page.reload();
  await waitForOrder(restoredHeaders);
  assert.equal(await reset.isEnabled(), true);
  const canvas = await story.locator('canvas').first().elementHandle();
  await reset.click();
  await waitForOrder(originalHeaders);
  assert.equal(await reset.isDisabled(), true);
  assert.equal(await canvas?.evaluate((node) => node.isConnected), true);
  await waitForStoredOrder(initialColumnOrder);

  await page.reload();
  await waitForOrder(originalHeaders);
  assert.equal(await reset.isDisabled(), true);
}
