/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import { IconSber } from '@ui-kit/icons';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/FullScreenMode',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
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

export const FullscreenEnabling: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Полноэкранный режим',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              id
              <IconSber size="xs" color="inherit" />
            </div>
          ),
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 200 },
          fullScreenEnabled: true,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const FullscreenDefaultOpened: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Включение по умолчанию полноэкранного режима',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              id
              <IconSber size="xs" color="inherit" />
            </div>
          ),
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    return (
      <div style={{ height: 500 }}>
        <Table
          tableConfig={{
            containerStyle: { height: 200 },
            fullScreenEnabled: { defaultOpened: true },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};

export const FullscreenCustomState: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Полноэкранный режим c ручным управлением и контролем показа иконки в ControlBlock',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              id
              <IconSber size="xs" color="inherit" />
            </div>
          ),
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );
    const [fullScreened, setFullScreened] = useState(false);

    return (
      <div style={{ height: 500 }}>
        <Button view="positive" onClick={() => setFullScreened(true)}>
          На весь экран
        </Button>
        <Table
          tableConfig={{
            containerStyle: { height: 200 },
            fullScreenEnabled: {
              state: [fullScreened, setFullScreened],
              showInControl: fullScreened,
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};
