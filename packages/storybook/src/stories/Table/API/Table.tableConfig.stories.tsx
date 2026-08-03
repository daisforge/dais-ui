/* eslint-disable react-hooks/rules-of-hooks */
import DocArgsTemplate from '@df-storybook/templates/DocArgsTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { StoryTableConfigComp } from '@ui-kit/components/StoriesUtils';
import type { ComponentType } from 'react';
import React from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/API/tableConfig',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocArgsTemplate,
    },
  },
  // excludeStories: ['CANVAS'],
  component: StoryTableConfigComp as ComponentType<unknown>,
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
