/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, dataObj, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnOrColumnGroupConfig, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/ColumnsGrouping',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  },
  args: {
    headerTreeLvl: Object.keys(dataObj)[0]
  },
  argTypes: {
    headerTreeLvl: {
      description: 'Уровни вложенности шапки таблицы',
      control: { type: 'radio' },
      options: Object.keys(dataObj)
    }
  }
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

export const SimpleTable: StoryObj<{ headerTreeLvl: keyof typeof dataObj }> = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  args: {
    headerTreeLvl: 'lvl3'
  },

  name: 'Columns grouping',

  render: ({ headerTreeLvl }) => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(
      () => [...(dataObj[headerTreeLvl] ?? [])],
      [headerTreeLvl]
    );

    return (
      <Table
        key={headerTreeLvl}
        tableConfig={{
          containerStyle: { height: 700 },
          columnsControl: { enable: true },
          resizableColumn: true
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
