/* eslint-disable react-hooks/rules-of-hooks */
import DocArgsTemplate from '@df-storybook/templates/DocArgsTemplate.mdx';
import type { Meta, StoryObj } from '@storybook/react';
import { TableCanvas } from '@ui-kit/components/TableCanvas';
import React from 'react';

/**
 * ### API таблицы:
 */
const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/API/Table',
  parameters: {
    docs: {
      page: DocArgsTemplate,
    },
  },
  component: TableCanvas,
};

export default meta;

export const Docs: StoryObj = {
  name: 'API',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  render: () => <></>,
};
