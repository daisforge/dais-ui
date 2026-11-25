import type { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, waitFor, within } from '@storybook/test';
import { SIZE } from '@ui-kit/components/TableCanvas/styles';
import { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import React, { createRef } from 'react';

import { click, getGridTarget, gridReady, settle } from '../visual-helpers';
import { DropdownsExample } from './DropdownsExample';

export default {
  title: 'Локальные компоненты/TableCanvas/Dropdowns/Визуальные тесты',
  parameters: { screenshot: { keepState: true, capture: 'page' } },
} satisfies Meta;

type Menu =
  | 'cellNearBottom'
  | 'cell'
  | 'filter'
  | 'lastFilter'
  | 'export'
  | 'overflow';

function opened(
  size: SIZE,
  menu: Menu,
  contextMenuWidth?: number | string,
  textFilter = false,
): StoryObj {
  const maxWidth = { small: 300, medium: 380, big: 440 }[size];
  const ref = createRef<DataEditorRef>();
  const isCell = menu === 'cell' || menu === 'cellNearBottom';
  return {
    render: () => (
      <div
        style={
          menu === 'cellNearBottom'
            ? { paddingTop: 'calc(100vh - 220px)' }
            : undefined
        }
      >
        <DropdownsExample
          tableRef={ref}
          contextMenuWidth={contextMenuWidth}
          textFilter={textFilter}
          size={size}
          narrow={menu === 'overflow'}
        />
      </div>
    ),
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const page = within(canvasElement.ownerDocument.body);
      await canvasElement.ownerDocument.fonts.ready;
      await gridReady(ref);
      await settle();
      if (menu === 'export' || menu === 'overflow') {
        const name = menu === 'export' ? 'Экспорт' : 'Дополнительные действия';
        const trigger = await canvas.findByRole('combobox', { name });
        await userEvent.click(trigger);
        if (menu === 'overflow') {
          await userEvent.click(
            await page.findByRole('option', { name: 'Экспорт' }),
          );
        }
        await expect(await page.findByText('CSV')).toBeVisible();
        const list = page.getByText('CSV').closest('ul');
        expect(list?.parentElement?.getBoundingClientRect().width).toBe(
          size === 'big' ? 140 : 120,
        );
        return;
      }

      const target = await getGridTarget(canvasElement);
      const bounds = ref.current?.getBounds(
        menu === 'lastFilter' ? 1 : 0,
        isCell ? 0 : -1,
      );
      if (!bounds) throw new Error('Границы ячейки недоступны');
      const y = bounds.y + bounds.height / 2;
      if (isCell) {
        const event = {
          clientX: bounds.x + 64,
          clientY: y,
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
          if (contextMenuWidth !== undefined) {
            expect(menuRect.width).toBe(parseFloat(String(contextMenuWidth)));
          } else {
            expect(menuRect.width).toBeLessThanOrEqual(maxWidth);
          }
          expect(Math.abs(menuRect.x - event.clientX)).toBeLessThanOrEqual(1);
          expect(
            menu === 'cellNearBottom'
              ? Math.abs(menuRect.bottom - cellRect.y + 4)
              : Math.abs(menuRect.y - cellRect.y - cellRect.height - 4),
          ).toBeLessThanOrEqual(1);
        });
      } else {
        click(target, { x: bounds.x + bounds.width - 22, y });
        await waitFor(() => expect(page.getByRole('textbox')).toBeVisible());
        await waitFor(() => {
          const anchor = canvasElement
            .querySelector('[data-popover-trigger]')
            ?.getBoundingClientRect();
          const popup = page.getByRole('dialog').getBoundingClientRect();
          if (!anchor) throw new Error('Якорь фильтра недоступен');
          if (textFilter) {
            expect(popup.width).toBe(size === 'small' ? 200 : 240);
          } else if (menu === 'filter') {
            expect(popup.width).toBe(size === 'big' ? 140 : 120);
          } else {
            expect(popup.width).toBe(maxWidth);
            const label = page.getByText(/^На согласовании у ответственного/);
            const text = Array.from(label.childNodes).find(
              (node) =>
                node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
            );
            if (!text) throw new Error('Текст длинного пункта недоступен');
            const range = canvasElement.ownerDocument.createRange();
            range.selectNodeContents(text);
            expect(range.getClientRects().length).toBeGreaterThan(1);
          }
          const edge = menu === 'lastFilter' ? 'right' : 'left';
          const expectedX =
            edge === 'right'
              ? Math.max(0, anchor.right - popup.width)
              : anchor.left;
          expect(Math.abs(popup.left - expectedX)).toBeLessThanOrEqual(1);
        });
      }
    },
  };
}

export const CellSmall = opened('small', 'cell');
export const CellMedium = opened('medium', 'cell');
export const CellBig = opened('big', 'cell');
export const FilterSmall = opened('small', 'filter');
export const FilterMedium = opened('medium', 'filter');
export const FilterBig = opened('big', 'filter');
export const LastFilterSmall = opened('small', 'lastFilter');
export const LastFilterMedium = opened('medium', 'lastFilter');
export const LastFilterBig = opened('big', 'lastFilter');
export const ExportSmall = opened('small', 'export');
export const ExportMedium = opened('medium', 'export');
export const ExportBig = opened('big', 'export');
export const OverflowSmall = opened('small', 'overflow');
export const OverflowMedium = opened('medium', 'overflow');
export const OverflowBig = opened('big', 'overflow');

export const ExplicitWideMenu = opened('medium', 'cell', 600);
export const ExplicitNarrowMenu = opened('small', 'cell', '96px');
export const TextFilter = opened('medium', 'filter', undefined, true);

export const CellNearBottom = opened('medium', 'cellNearBottom');
