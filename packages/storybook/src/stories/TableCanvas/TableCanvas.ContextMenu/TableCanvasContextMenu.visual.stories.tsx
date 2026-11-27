/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Визуальные (скриншотные) тесты контекстного меню.
 * Стори доводит грид до ОДНОГО состояния (меню открыто) — один скриншот.
 * `play` эмулирует ПКМ по шапке, `screenshot.keepState` не сбрасывает состояние
 * перед снимком. Эталонные PNG обновляются явно через npm run screenshot:update в Docker.
 */
import { createRows, type Row } from '@df-storybook/data/tableData';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, waitFor, within } from '@storybook/test';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import type { SIZE } from '@ui-kit/components/TableCanvas/styles';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import React, { createRef, useMemo, useState } from 'react';

import { MenuTable } from '../visual-fixtures/MenuTable';
import { getGridTarget, gridReady, settle } from '../visual-helpers';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ContextMenu/Визуальные тесты',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

const screenshot = {
  parameters: { screenshot: { keepState: true, capture: 'page' } },
};

function ExampleAllFeatures() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onCellContextMenu: (args, event, context) => {
          console.debug(args, event, context, 'onCellContextMenu');
        },
        onCellContextMenuDropdown: {
          type: 'dropdown',
          getDropdownItems: ({ column }) => [
            {
              value: `lvl1 ${column.name}`,
              label: `${column.name} lvl1`,
              items: [
                {
                  value: `lvl1_inside ${column.name}`,
                  label: `${column.name} lvl1 inside`,
                },
              ],
            },
            {
              value: `lvl2 ${column.name}`,
              label: `${column.name} lvl2`,
            },
          ],
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect for onCellContextMenuDropdown');
            console.debug(item, 'item');
            console.debug(context, 'context');
            console.debug(event, 'event');
            console.groupEnd();
          },
        },
        onHeaderContextMenu: (colIndex, event, context) =>
          console.debug(colIndex, event, context),
        onHeaderContextMenuDropdown: {
          type: 'dropdown',
          getDropdownItems: ({ column }) => [
            {
              value: `lvl1 ${column.name}`,
              label: `${column.name} lvl1`,
              items: [
                {
                  value: `lvl1_inside ${column.name}`,
                  label: `${column.name} lvl1 inside`,
                },
              ],
            },
            {
              value: `lvl2 ${column.name}`,
              label: `${column.name} lvl2`,
            },
          ],
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect for onHeaderContextMenuDropdown');
            console.debug(item, 'item');
            console.debug(context, 'context');
            console.debug(event, 'event');
            console.groupEnd();
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

export const ContextMenuAllFeatures: Story = {
  name: 'Контекстное меню (все возможности)',
  ...screenshot,
  render: ExampleAllFeatures,
  play: async ({ canvasElement }) => {
    const gridCanvas = await waitFor(() => {
      const el = canvasElement.querySelector(
        '[data-testid="data-grid-canvas"]',
      ) as HTMLCanvasElement | null;
      if (!el) throw new Error('Data grid canvas not found');
      return el;
    });

    await new Promise((resolve) => {
      setTimeout(resolve, 250);
    });

    const doc = canvasElement.ownerDocument;
    const target =
      (canvasElement.querySelector('.dvn-scroller') as HTMLElement | null) ??
      gridCanvas;

    const rect = target.getBoundingClientRect();
    const clientX = rect.left + 80;
    const clientY = rect.top + 20; // header point

    fireEvent.pointerDown(target, {
      clientX,
      clientY,
      button: 2,
      buttons: 2,
      pointerType: 'mouse',
    });
    fireEvent.pointerUp(target, {
      clientX,
      clientY,
      button: 2,
      buttons: 0,
      pointerType: 'mouse',
    });
    fireEvent.contextMenu(target, {
      clientX,
      clientY,
      button: 2,
      buttons: 2,
    });

    await waitFor(
      () => {
        if (!doc.querySelector('[data-testid="table-context-menu"]')) {
          throw new Error('Context menu is not open');
        }
      },
      { timeout: 3000 },
    );
  },
};

function cellMenu(
  size: SIZE,
  listWidth?: number | string,
  nearBottom = false,
): Story {
  const ref = createRef<DataEditorRef>();
  const maxWidth = { small: 300, medium: 380, big: 440 }[size];
  return {
    ...screenshot,
    render: () => (
      <div
        style={nearBottom ? { paddingTop: 'calc(100vh - 220px)' } : undefined}
      >
        <MenuTable tableRef={ref} size={size} contextMenuWidth={listWidth} />
      </div>
    ),
    play: async ({ canvasElement }) => {
      const page = within(canvasElement.ownerDocument.body);
      await canvasElement.ownerDocument.fonts.ready;
      await gridReady(ref);
      await settle();
      const target = await getGridTarget(canvasElement);
      const bounds = ref.current?.getBounds(0, 0);
      if (!bounds) throw new Error('Границы ячейки недоступны');
      const event = {
        clientX: bounds.x + 64,
        clientY: bounds.y + bounds.height / 2,
        button: 2,
        pointerType: 'mouse',
      };
      fireEvent.pointerDown(target, { ...event, buttons: 2 });
      fireEvent.pointerUp(target, { ...event, buttons: 0 });
      fireEvent.contextMenu(target, event);
      await expect(await page.findByText('Копировать')).toBeVisible();
      const list = await page.findByRole('tree');
      await waitFor(() => {
        const menuRect = list.parentElement?.getBoundingClientRect();
        const cellRect = ref.current?.getBounds(0, 0);
        if (!menuRect || !cellRect)
          throw new Error('Границы ячейки или контекстного меню недоступны');
        if (listWidth !== undefined) {
          expect(menuRect.width).toBe(parseFloat(String(listWidth)));
        } else {
          expect(menuRect.width).toBeLessThanOrEqual(maxWidth);
        }
        expect(Math.abs(menuRect.x - event.clientX)).toBeLessThanOrEqual(1);
        expect(
          nearBottom
            ? Math.abs(menuRect.bottom - cellRect.y + 4)
            : Math.abs(menuRect.y - cellRect.y - cellRect.height - 4),
        ).toBeLessThanOrEqual(1);
      });
      if (nearBottom) {
        const scroller = canvasElement.ownerDocument.scrollingElement;
        const menu = list.parentElement;
        if (!scroller || !menu) throw new Error('Меню или страница недоступны');
        const initialScroll = scroller.scrollTop;
        const initialTop = menu.getBoundingClientRect().top;
        try {
          scroller.scrollTop += 64;
          await waitFor(() => {
            const distance = scroller.scrollTop - initialScroll;
            expect(distance).toBeGreaterThan(0);
            const displacement = menu.getBoundingClientRect().top - initialTop;
            expect(Math.abs(displacement + distance)).toBeLessThanOrEqual(1);
          });
        } finally {
          scroller.scrollTop = initialScroll;
        }
      }
    },
  };
}

export const CellSmall = cellMenu('small');
export const CellMedium = cellMenu('medium');
export const CellBig = cellMenu('big');
export const ExplicitWideMenu = cellMenu('medium', 600);
export const ExplicitNarrowMenu = cellMenu('small', '96px');
export const CellNearBottom = cellMenu('medium', undefined, true);
