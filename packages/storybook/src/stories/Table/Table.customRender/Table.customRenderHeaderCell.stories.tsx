import { createRows } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { Chip } from '@ui-kit/components/Chip';
import { Table } from '@ui-kit/components/Table';
import React, { ComponentProps, FC, PropsWithChildren } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Custom render/HeaderCell',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
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

type Story = StoryObj<
  Pick<ComponentProps<typeof Table>, 'columnConfig' | 'rows'> & {
    noRowsFallback: boolean;
  }
>;

const rows = createRows(0, 20);

const CellContainer: FC<PropsWithChildren> = ({ children }) => (
  <Box
    $css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    }}
  >
    {children}
  </Box>
);

export const CustomRenderHeaderCell: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Кастомизация рендера заголовка колонки',
  args: {
    rows,
    columnConfig: [
      {
        key: 'id',
        name: (
          <CellContainer>
            <Chip text="ID" type="submit" size="xs" />
          </CellContainer>
        )
      },
      {
        key: 'task',
        width: 200,
        name: (
          <CellContainer>
            <Button
              view="accent"
              size="xxs"
              onClick={() =>
                // Для примера
                // eslint-disable-next-line no-alert
                alert(`Клик по кнопке кастомной ячейки в заголовке колонки`)
              }
            >
              Кнопка Title
            </Button>
          </CellContainer>
        )
      },
      {
        key: 'priority',
        name: (
          <CellContainer>
            <Badge text="Бейдж Priority" view="negative" />
          </CellContainer>
        )
      },
      {
        key: 'issueType',
        name: (
          <CellContainer>
            <Checkbox checked />
          </CellContainer>
        )
      },
      {
        key: 'complete',
        name: '% Complete'
      }
    ]
  },
  argTypes: {},
  render: ({ rows, columnConfig }) => (
    <Table
      tableConfig={{
        containerStyle: { height: 700 }
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  )
};
