import { TableFilteringResetDemo } from '@df-storybook/utils/TableFilteringResetDemo';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Filtering/Clear all reproduction',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen', screenshot: { skip: true } },
};
export default meta;

export const DependentFilters: StoryObj = {
  name: 'Зависимые фильтры: очистка и журнал setter',
  render: () => <TableFilteringResetDemo canvas />,
};
