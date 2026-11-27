import type { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, waitFor, within } from '@storybook/test';
import type { SIZE } from '@ui-kit/components/TableCanvas/styles';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import React, { createRef } from 'react';

import { MenuTable } from '../visual-fixtures/MenuTable';
import { click, getGridTarget, gridReady, settle } from '../visual-helpers';

export default {
  title: 'Локальные компоненты/TableCanvas/Filtering/Визуальные тесты',
  tags: ['!autodocs'],
  parameters: { screenshot: { keepState: true, capture: 'page' } },
} satisfies Meta;

function headerFilter(
  size: SIZE,
  column: 'priority' | 'status' | 'text',
): StoryObj {
  const ref = createRef<DataEditorRef>();
  const maxWidth = { small: 300, medium: 380, big: 440 }[size];
  return {
    render: () => (
      <MenuTable tableRef={ref} size={size} textFilter={column === 'text'} />
    ),
    play: async ({ canvasElement }) => {
      const page = within(canvasElement.ownerDocument.body);
      await canvasElement.ownerDocument.fonts.ready;
      await gridReady(ref);
      await settle();
      const target = await getGridTarget(canvasElement);
      const bounds = ref.current?.getBounds(column === 'status' ? 1 : 0, -1);
      if (!bounds) throw new Error('Границы заголовка недоступны');
      const y = bounds.y + bounds.height / 2;
      click(target, { x: bounds.x + bounds.width - 22, y });
      await waitFor(() => expect(page.getByRole('textbox')).toBeVisible());
      await waitFor(() => {
        const anchor = canvasElement
          .querySelector('[data-popover-trigger]')
          ?.getBoundingClientRect();
        const popup = page.getByRole('dialog').getBoundingClientRect();
        if (!anchor) throw new Error('Якорь фильтра недоступен');
        if (column === 'text') {
          expect(popup.width).toBe(size === 'small' ? 200 : 240);
        } else if (column === 'priority') {
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
        const inputX = page.getByRole('textbox').getBoundingClientRect().left;
        const searchInset = size === 'big' ? 42 : 34;
        expect(Math.abs(inputX - popup.left - searchInset)).toBeLessThanOrEqual(
          1,
        );
        if (column !== 'text') {
          const item = page.getByText(
            column === 'status' ? 'В работе' : 'Высокий',
            { selector: 'li' },
          );
          const range = canvasElement.ownerDocument.createRange();
          const text = item.lastChild;
          if (!text || text.nodeType !== Node.TEXT_NODE) {
            throw new Error('Подпись пункта фильтра недоступна');
          }
          range.selectNodeContents(text);
          const labelX = range.getBoundingClientRect().left;
          const labelInset = { small: 32, medium: 36, big: 48 }[size];
          expect(
            Math.abs(labelX - popup.left - labelInset),
          ).toBeLessThanOrEqual(1);
          expect(getComputedStyle(item).lineHeight).toBe(
            { small: '16px', medium: '20px', big: '24px' }[size],
          );
        }
        const edge = column === 'status' ? 'right' : 'left';
        const expectedX =
          edge === 'right'
            ? Math.max(0, anchor.right - popup.width)
            : anchor.left;
        expect(Math.abs(popup.left - expectedX)).toBeLessThanOrEqual(1);
      });
      if (column === 'status') {
        const dialog = page.getByRole('dialog');
        const list = within(dialog);
        const search = list.getByRole('textbox');
        const initialX = search.getBoundingClientRect().left;
        const assertSearchPosition = () => {
          expect(dialog.getBoundingClientRect().width).toBe(maxWidth);
          expect(
            Math.abs(search.getBoundingClientRect().left - initialX),
          ).toBeLessThanOrEqual(1);
        };

        fireEvent.input(search, { target: { value: 'В работе' } });
        await waitFor(() =>
          expect(list.getAllByRole('listitem')).toHaveLength(1),
        );
        assertSearchPosition();

        fireEvent.input(search, { target: { value: '' } });
        await list.findByText('Выбрать всё');
        assertSearchPosition();
      }
    },
  };
}

export const FilterSmall = headerFilter('small', 'priority');
export const FilterMedium = headerFilter('medium', 'priority');
export const FilterBig = headerFilter('big', 'priority');
export const LastFilterSmall = headerFilter('small', 'status');
export const LastFilterMedium = headerFilter('medium', 'status');
export const LastFilterBig = headerFilter('big', 'status');
export const TextFilter = headerFilter('medium', 'text');
