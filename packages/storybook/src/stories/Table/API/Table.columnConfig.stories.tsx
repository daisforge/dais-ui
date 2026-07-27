/* eslint-disable react-hooks/rules-of-hooks */
import DocArgsTemplate from '@df-storybook/templates/DocArgsTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { StoryColumnConfigComp } from '@ui-kit/components/StoriesUtils';
import type { ComponentType } from 'react';
import React from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/API/columnConfig',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocArgsTemplate
    }
  },
  excludeStories: ['CANVAS'],
  component: StoryColumnConfigComp as ComponentType<unknown>
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
} from '@dais-ui/ui-kit';
import { IconAddOutline, IconBoxOutline, IconSber } from '@dais-ui/ui-kit/icons';
`;

export const Docs: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'API',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  render: () => <></>
};
