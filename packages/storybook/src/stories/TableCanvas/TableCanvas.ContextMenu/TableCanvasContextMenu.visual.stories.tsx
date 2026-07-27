/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Визуальные (скриншотные) тесты контекстного меню.
 * Стори доводит грид до ОДНОГО состояния (меню открыто) — один скриншот.
 * `play` эмулирует ПКМ по шапке, `screenshot.keepState` не сбрасывает состояние
 * перед снимком. Эталонные PNG генерит test-runner (`-u`) на стороне CI.
 */
import { createRows, type Row } from '@df-storybook/data/tableData';
import type { Meta, StoryObj } from '@storybook/react';
import { fireEvent, waitFor } from '@storybook/test';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ContextMenu/Визуальные тесты',
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj;

const screenshot = { parameters: { screenshot: { keepState: true } } };

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
      { key: 'complete', name: '% Complete' }
    ],
    []
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
                  label: `${column.name} lvl1 inside`
                }
              ]
            },
            {
              value: `lvl2 ${column.name}`,
              label: `${column.name} lvl2`
            }
          ],
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect for onCellContextMenuDropdown');
            console.debug(item, 'item');
            console.debug(context, 'context');
            console.debug(event, 'event');
            console.groupEnd();
          }
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
                  label: `${column.name} lvl1 inside`
                }
              ]
            },
            {
              value: `lvl2 ${column.name}`,
              label: `${column.name} lvl2`
            }
          ],
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect for onHeaderContextMenuDropdown');
            console.debug(item, 'item');
            console.debug(context, 'context');
            console.debug(event, 'event');
            console.groupEnd();
          }
        }
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
        '[data-testid="data-grid-canvas"]'
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
      pointerType: 'mouse'
    });
    fireEvent.pointerUp(target, {
      clientX,
      clientY,
      button: 2,
      buttons: 0,
      pointerType: 'mouse'
    });
    fireEvent.contextMenu(target, {
      clientX,
      clientY,
      button: 2,
      buttons: 2
    });

    await waitFor(
      () => {
        if (!doc.querySelector('[data-testid="table-context-menu"]')) {
          throw new Error('Context menu is not open');
        }
      },
      { timeout: 3000 }
    );
  }
};
