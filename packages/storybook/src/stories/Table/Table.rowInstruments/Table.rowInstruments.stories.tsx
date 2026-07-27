/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import { createSeededRandom } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import {
  type ColumnConfig,
  type RowInstrumentsDropdownItemOption,
  type RowInstrumentsType,
  Table
} from '@ui-kit/components/Table';
import { TextM } from '@ui-kit/components/Typography';
import { IconAddOutline, IconBoxOutline } from '@ui-kit/icons';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/RowInstruments',
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

export const RowInstruments: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Инструменты строк',
  render: () => {
    const [rows, setRows] = useState(createRows);

    const columnConfig = useMemo(
      (): readonly ColumnConfig<Row>[] => [
        {
          key: 'id',
          name: 'id'
        },
        {
          key: 'task',
          name: 'Title'
        },
        {
          key: 'priority',
          name: 'Priority'
        },
        {
          key: 'issueType',
          name: 'Issue Type'
        },
        {
          key: 'complete',
          name: '% Complete'
        }
      ],
      []
    );
    const [value, setValue] = useState(1);

    const getRowDropdownConfig = useCallback<RowInstrumentsType<Row>>(
      ({ row, rowIdx }) => ({
        items: [
          ...(rowIdx === 0
            ? [
                {
                  label: 'Увеличить счетчик',
                  value: 'counter',
                  onItemSelect: (_, e) => {
                    e.preventDefault();
                    setValue((prev) => prev + (rowIdx || 1));
                  },
                  dividerAfter: true
                } as RowInstrumentsDropdownItemOption
              ]
            : []),
          {
            label: 'Удалить строку',
            value: 'delete row',
            onItemSelect: () => {
              const index = rows.findIndex((r) => r.id === row.id);
              if (index !== -1) {
                setRows((prev) => {
                  const newV = [...prev];

                  newV.splice(index, 1);
                  return newV;
                });
              }
            },
            contentLeft: <IconBoxOutline color="inherit" />
          },
          {
            label: 'Добавить строку вниз',
            value: 'add row',
            onItemSelect: () => {
              const index = rows.findIndex((r) => r.id === row.id);
              if (index !== -1) {
                setRows((prev) => {
                  const newV = [...prev];
                  const newRow: Row = {
                    id: createSeededRandom(rows.length)() * 1000 + rows.length,
                    task: '',
                    priority: '',
                    issueType: '',
                    developer: '',
                    complete: 0,
                    tr: '',
                    loremIpsum: ''
                  } as Row;
                  newV.splice(index + 1, 0, newRow);

                  return newV;
                });
              }
            },
            contentLeft: <IconAddOutline color="inherit" />
          }
        ]
      }),
      [rows]
    );

    return (
      <>
        <Box $css={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <TextM>
            Счетчик, который меняется в инструментах(последняя иконка) первой
            строки
          </TextM>
          <Badge view="dark" text={value.toString()} />
        </Box>

        <Table
          tableConfig={{
            containerStyle: { height: 700 },
            rowInstruments: {
              getRowDropdownConfig,
              showInControl: true,
              defaultOpened: false
            }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  }
};

export const RowInstrumentsExternalVisibleState: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Инструменты строк (внешнее управление)',
  render: () => {
    const [rows, setRows] = useState(createRows);
    const [isVisibleRowInstrument, setIsVisibleRowInstrument] = useState(false); // Внешнее управление

    const columnConfig = useMemo(
      (): readonly ColumnConfig<Row>[] => [
        {
          key: 'id',
          name: 'id'
        },
        {
          key: 'task',
          name: 'Title'
        },
        {
          key: 'priority',
          name: 'Priority'
        },
        {
          key: 'issueType',
          name: 'Issue Type'
        },
        {
          key: 'complete',
          name: '% Complete'
        }
      ],
      []
    );
    const [value, setValue] = useState(1);

    const getRowDropdownConfig = useCallback<RowInstrumentsType<Row>>(
      ({ row, rowIdx }) => ({
        items: [
          ...(rowIdx === 0
            ? [
                {
                  label: 'Увеличить счетчик',
                  value: 'counter',
                  onItemSelect: (_, e) => {
                    e.preventDefault();
                    setValue((prev) => prev + (rowIdx || 1));
                  },
                  dividerAfter: true
                } as RowInstrumentsDropdownItemOption
              ]
            : []),
          {
            label: 'Удалить строку',
            value: 'delete row',
            onItemSelect: () => {
              const index = rows.findIndex((r) => r.id === row.id);
              if (index !== -1) {
                setRows((prev) => {
                  const newV = [...prev];

                  newV.splice(index, 1);
                  return newV;
                });
              }
            },
            contentLeft: <IconBoxOutline color="inherit" />
          },
          {
            label: 'Добавить строку вниз',
            value: 'add row',
            onItemSelect: () => {
              const index = rows.findIndex((r) => r.id === row.id);
              if (index !== -1) {
                setRows((prev) => {
                  const newV = [...prev];
                  const newRow: Row = {
                    id: createSeededRandom(rows.length)() * 1000 + rows.length,
                    task: '',
                    priority: '',
                    issueType: '',
                    developer: '',
                    complete: 0,
                    tr: '',
                    loremIpsum: ''
                  } as Row;
                  newV.splice(index + 1, 0, newRow);

                  return newV;
                });
              }
            },
            contentLeft: <IconAddOutline color="inherit" />
          }
        ]
      }),
      [rows]
    );

    return (
      <>
        <Box
          $css={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginBottom: '10px'
          }}
        >
          <TextM>
            Счетчик, который меняется в инструментах(последняя иконка) первой
            строки
          </TextM>
          <Badge view="dark" text={value.toString()} />
          <Button onClick={() => setIsVisibleRowInstrument((prev) => !prev)}>
            {isVisibleRowInstrument
              ? 'Закрыть RowInstruments'
              : 'Открыть RowInstruments'}
          </Button>
        </Box>

        <Table
          tableConfig={{
            containerStyle: { height: 700 },
            rowInstruments: {
              getRowDropdownConfig,
              showInControl: true,
              defaultOpened: false,
              openedState: [isVisibleRowInstrument, setIsVisibleRowInstrument]
            }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  }
};
