import type { Meta, StoryObj } from '@storybook/react';

import { DropdownsExample } from './DropdownsExample';

export default {
  title: 'Локальные компоненты/TableCanvas/Dropdowns',
  component: DropdownsExample,
  argTypes: {
    size: { control: 'radio', options: ['small', 'medium', 'big'] },
    contextMenuWidth: { name: 'Ширина меню ПКМ, px', control: 'number' },
    textFilter: { name: 'Текстовый фильтр', control: 'boolean' },
    tableRef: { table: { disable: true } },
  },
} satisfies Meta<typeof DropdownsExample>;

export const Playground: StoryObj<typeof DropdownsExample> = {
  args: { size: 'medium' },
};
