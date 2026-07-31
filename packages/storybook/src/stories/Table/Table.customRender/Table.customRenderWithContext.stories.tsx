/* eslint-disable react-hooks/rules-of-hooks */
import { createRows } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import {
  SIZE,
  Table,
  useHeaderContext,
  useRowContext,
} from '@ui-kit/components/Table';
import { BodyS } from '@ui-kit/components/Typography';
import React, {
  ComponentProps,
  FC,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Custom render/Cell Context',
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
      height: '100%',
    }}
  >
    {children}
  </Box>
);

const HeaderComponent = () => {
  const { rowSize, setRowSize } = useHeaderContext();
  const sizeMap: Record<SIZE, SIZE> = {
    big: 'small',
    small: 'medium',
    medium: 'big',
  };
  return (
    <Box
      $css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Button
        view="accent"
        size="xxs"
        onClick={() => setRowSize(sizeMap[rowSize])}
      >
        Изменить размер строк на {sizeMap[rowSize]}
      </Button>
    </Box>
  );
};

const CheckboxCell: FC<{ tabIndex: number }> = ({ tabIndex }) => {
  const { checkbox } = useRowContext<ICheckboxCtx>();
  const [checked, setChecked] = checkbox;
  return (
    <Checkbox
      tabIndex={tabIndex}
      checked={checked}
      label={`${checked ? 'Выключить' : 'Включить'} чекбокс`}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

const TextCell: FC = () => {
  const { rowSize } = useHeaderContext();
  return (
    <CellContainer>
      <BodyS bold>Размер строки {rowSize}</BodyS>
    </CellContainer>
  );
};

type ICheckboxCtx = { checkbox: [boolean, (value: boolean) => void] };

export const CellContext: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Работа с контекстом в кастомных ячейках',
  args: {
    rows,
    columnConfig: [
      {
        key: 'id',
        name: <HeaderComponent />,
        renderCell: ({ tabIndex }) => <CheckboxCell tabIndex={tabIndex} />,
      },
      {
        key: 'task',
        width: 200,
        name: 'Title',
        renderCell: () => <TextCell />,
      },
      {
        key: 'priority',
        name: 'Priority',
      },
      {
        key: 'issueType',
        name: 'Issue Type',
      },
    ],
  },
  argTypes: {},
  render: ({ rows, columnConfig }) => {
    const [checked, setChecked] = useState(false);

    const rowContextValue = useMemo<ICheckboxCtx>(
      () => ({
        checkbox: [checked, setChecked],
      }),
      [checked, setChecked],
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },
        }}
        columnConfig={columnConfig}
        rows={rows}
        rowContextValue={rowContextValue}
      />
    );
  },
};
