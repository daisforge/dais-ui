import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import type { SIZE } from '@ui-kit/components/TableCanvas/styles';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import React, { createRef } from 'react';

import { MenuTable } from '../visual-fixtures/MenuTable';
import { gridReady, settle } from '../visual-helpers';

export default {
  title: 'Локальные компоненты/TableCanvas/ControlBlock/Визуальные тесты',
  tags: ['!autodocs'],
  parameters: { screenshot: { keepState: true, capture: 'page' } },
} satisfies Meta;

function exportMenu(size: SIZE, narrow = false): StoryObj {
  const ref = createRef<DataEditorRef>();
  return {
    render: () => <MenuTable tableRef={ref} size={size} narrow={narrow} />,
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const page = within(canvasElement.ownerDocument.body);
      await canvasElement.ownerDocument.fonts.ready;
      await gridReady(ref);
      await settle();
      const name = narrow ? 'Дополнительные действия' : 'Экспорт';
      const trigger = await canvas.findByRole('combobox', { name });
      await userEvent.click(trigger);
      if (narrow) {
        await userEvent.click(
          await page.findByRole('option', { name: 'Экспорт' }),
        );
      }
      await expect(await page.findByText('CSV')).toBeVisible();
      const list = page.getByText('CSV').closest('ul');
      expect(list?.parentElement?.getBoundingClientRect().width).toBe(
        size === 'big' ? 140 : 120,
      );
    },
  };
}

export const ExportSmall = exportMenu('small');
export const ExportMedium = exportMenu('medium');
export const ExportBig = exportMenu('big');
export const OverflowSmall = exportMenu('small', true);
export const OverflowMedium = exportMenu('medium', true);
export const OverflowBig = exportMenu('big', true);
