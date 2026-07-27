/* eslint-disable react-hooks/rules-of-hooks */
import { createRowsTree, TreeRow } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/FormatCellContent',
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

export const BasicFormatting: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Форматирование ячеек',
  render: () => {
    const [rows] = useState(() => createRowsTree());

    const columns = useMemo<readonly ColumnConfig<TreeRow>[]>(
      () => [
        {
          key: 'block',
          name: 'Блок / Трайб / Продукт',
          contentFormat: {
            customFormat: (val) => `📝 ${val}`
          },
          subRow: {
            keyOfColumnInSubRow: (lvl) => {
              switch (lvl) {
                case 0:
                  return 'block';
                case 1:
                  return 'tribe';
                case 2:
                  return 'product';
                default:
                  return 'block';
              }
            },
            isColumnWithArrow: true,
            hideHeaderExpandAllArrow: false
          },
          resizable: true
        },
        {
          key: 'blockActivity',
          name: 'Активность блока',
          title: '123',
          contentFormat: {
            customFormat: (val) => `${val}!`
          }
        },
        {
          key: '',
          minWidth: 170,
          name: 'Локация трайба',
          subRow: {
            renderSubRowCell: (props, lvl) => {
              if (lvl === 1) {
                return (
                  <Badge view="accent" size="m">
                    {props.row?.tribeZone}
                  </Badge>
                );
              }
              return null;
            }
          }
        },
        {
          key: 'q1',
          name: 'Q1',
          contentFormat: 'number',
          subRow: {
            parentKeyAsDefault: true,
            /* Форматирование в подстроках */
            contentFormat: {
              customFormat: (val) => `${val}%`
            }
          }
        },

        {
          key: 'q2',
          name: 'Q2',
          contentFormat: {
            type: 'number',
            minimumFractionDigits: 1,
            maximumFractionDigits: 3,
            decimalSeparator: '.',
            thousandSeparator: '_',
            alignContent: 'center'
          },
          subRow: {
            keyOfColumnInSubRow: 'q1',
            contentFormat: {
              type: 'number',
              minimumFractionDigits: 1,
              maximumFractionDigits: 3,
              decimalSeparator: ',',
              thousandSeparator: '.',
              alignContent: 'right'
            }
          }
        },
        {
          key: 'q3',
          name: 'Q3',
          contentFormat: {
            type: 'number',
            minimumFractionDigits: 2,
            locales: ['en-US', 'fr-FR', 'ru-RU']
          },
          subRow: {
            keyOfColumnInSubRow: 'q1'
          }
        },
        {
          key: 'q4',
          name: 'Q4',
          contentFormat: 'number',
          subRow: {
            keyOfColumnInSubRow: 'q1'
          }
        }
      ],
      []
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id
          },
          resizableColumn: true
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
