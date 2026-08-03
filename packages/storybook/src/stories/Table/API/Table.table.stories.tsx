/* eslint-disable react-hooks/rules-of-hooks */
import DocArgsTemplate from '@df-storybook/templates/DocArgsTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@ui-kit/components/Table';
import React from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/API/Table',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocArgsTemplate,
    },
  },
  component: Table,
};

export default meta;

const preCode = `
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`;

export const Docs: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'API',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  render: () => <></>,
};
