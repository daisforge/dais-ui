import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Chip } from '@ui-kit/components/Chip';
import { Table } from '@ui-kit/components/Table';
import React, { ComponentProps, FC, PropsWithChildren } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Custom render/Cell',
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
} from '@dais-ui/ui-kit';
import { IconAddOutline, IconBoxOutline, IconSber } from '@dais-ui/ui-kit/icons';
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

export const CustomRenderCell: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Кастомизация рендера ячейки',
  args: {
    rows,
    columnConfig: [
      {
        key: 'id',
        name: 'ID',
        renderCell: ({ tabIndex }) => (
          <CellContainer>
            <Chip text="Это чип" type="submit" tabIndex={tabIndex} />
          </CellContainer>
        )
      },
      {
        key: 'task',
        name: 'Title',
        width: 200,
        renderCell: ({ row, rowIdx, tabIndex }) => (
          <CellContainer>
            <Button
              view="positive"
              tabIndex={tabIndex}
              onClick={() =>
                // Для примера
                // eslint-disable-next-line no-alert
                alert(`Строка ${rowIdx + 1}. Клик по кнопке кастомной ячейки`)
              }
            >
              {row?.task}
            </Button>
          </CellContainer>
        )
      },
      {
        key: 'priority',
        name: 'Priority',
        renderCell: ({ row, tabIndex }) => {
          const viewMap: Record<
            Row['priority'],
            ComponentProps<typeof Badge>['view']
          > = {
            High: 'accent',
            Medium: 'warning',
            Low: 'dark',
            Critical: 'negative'
          };
          return (
            <CellContainer>
              <Badge
                text={row.priority}
                view={viewMap[row.priority] || 'default'}
                tabIndex={tabIndex}
              />
            </CellContainer>
          );
        }
      },
      {
        key: 'issueType',
        name: 'Issue Type'
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
