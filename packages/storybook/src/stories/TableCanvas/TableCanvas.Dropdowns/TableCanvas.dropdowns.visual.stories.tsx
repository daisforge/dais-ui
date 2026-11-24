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

type Menu = 'cell' | 'filter' | 'lastFilter' | 'export' | 'overflow';

function opened(size: SIZE, menu: Menu): StoryObj {
  const ref = createRef<DataEditorRef>();
  return {
    render: () => (
      <DropdownsExample
        tableRef={ref}
        size={size}
        narrow={menu === 'overflow'}
      />
    ),
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const page = within(canvasElement.ownerDocument.body);
      await gridReady(ref);
      await settle();
      if (menu === 'export' || menu === 'overflow') {
        const name = menu === 'export' ? 'Экспорт' : '';
        const trigger = await canvas.findByRole('combobox', { name });
        await userEvent.click(trigger);
        if (menu === 'overflow') {
          await userEvent.click(
            await page.findByRole('option', { name: 'Экспорт' }),
          );
        }
        await expect(await page.findByText('CSV')).toBeVisible();
        return;
      }

      const target = await getGridTarget(canvasElement);
      const bounds = ref.current?.getBounds(
        menu === 'lastFilter' ? 1 : 0,
        menu === 'cell' ? 0 : -1,
      );
      if (!bounds) throw new Error('Границы ячейки недоступны');
      const y = bounds.y + bounds.height / 2;
      if (menu === 'cell') {
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
      } else {
        click(target, { x: bounds.x + bounds.width - 22, y });
        await waitFor(() => expect(page.getByRole('textbox')).toBeVisible());
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
