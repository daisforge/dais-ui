/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { Select } from '@ui-kit/components/Select';
import {
  ColumnConfig,
  HighlightActiveType,
  Table,
} from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/HighlightActiveType',
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

export const HighlightActiveTypeTable: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cell = await canvas.findByRole(
      'gridcell',
      { name: /^2$/ },
      { timeout: 10000 },
    );
    await userEvent.click(cell);
    await waitFor(
      () =>
        expect(
          canvas.getByRole('gridcell', { selected: true }),
        ).toHaveTextContent(/^2$/),
      { timeout: 10000 },
    );
  },
  ...storySourceDoc({
    preCode,
    previewSource: 'hidden',
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('row');
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
      <>
        Выбрать тип выделения
        <Select
          value={highlightActiveType}
          onChange={(v) => setHighlightActiveType(v as HighlightActiveType)}
          items={['row', 'cell', 'disabled'].map((i) => ({
            label: i,
            value: i,
          }))}
        />
        <br />
        <Table
          tableConfig={{
            containerStyle: { height: 700 },
            highlightActiveType,
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  },
};
