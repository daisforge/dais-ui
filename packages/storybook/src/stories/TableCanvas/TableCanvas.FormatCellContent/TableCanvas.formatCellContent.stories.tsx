/* eslint-disable react-hooks/rules-of-hooks */
import {
  createRows,
  createRowsTree,
  type Row,
  TreeRow,
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/FormatCellContent',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

export const BasicFormatting: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
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
            customFormat: (val) => `📝 ${val}`,
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
            hideHeaderExpandAllArrow: false,
          },
          resizable: true,
        },
        {
          key: 'blockActivity',
          name: 'Активность блока',
          title: '123',
          contentFormat: {
            customFormat: (val) => `${val}!`,
          },
        },
        {
          key: '',
          minWidth: 170,
          name: 'Локация трайба',
          subRow: {
            renderSubRowCell: (props, lvl) => {
              if (lvl === 1) {
                return props.row?.tribeZone;
              }
              return null;
            },
          },
        },
        {
          key: 'q1',
          name: 'Q1',
          contentFormat: 'number',
          subRow: {
            parentKeyAsDefault: true,
            /* Форматирование в подстроках */
            contentFormat: {
              customFormat: (val) => `${val}%`,
            },
          },
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
            alignContent: 'center',
          },
          subRow: {
            keyOfColumnInSubRow: 'q1',
            contentFormat: {
              type: 'number',
              minimumFractionDigits: 1,
              maximumFractionDigits: 3,
              decimalSeparator: ',',
              thousandSeparator: '.',
              alignContent: 'right',
            },
          },
        },
        {
          key: 'q3',
          name: 'Q3',
          contentFormat: {
            type: 'number',
            minimumFractionDigits: 2,
            locales: ['en-US', 'fr-FR', 'ru-RU'],
          },
          subRow: {
            keyOfColumnInSubRow: 'q1',
          },
        },
        {
          key: 'q4',
          name: 'Q4',
          contentFormat: 'number',
          subRow: {
            keyOfColumnInSubRow: 'q1',
          },
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '700px' },
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id,
          },
          resizableColumn: true,
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  },
};

/**
 * `column.contentAlign` задаёт выравнивание ячеек колонки явно и приоритетнее
 * `contentFormat`: число можно прижать влево, текст поставить по центру.
 */
export const ContentAlign: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Выравнивание колонки (contentAlign)',
  render: () => {
    const [rows] = useState(() => createRows(1, 30));

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'issueType', name: 'Текст', width: 140 },
        {
          key: 'priority',
          name: 'Текст, center',
          width: 120,
          contentAlign: 'center',
        },
        {
          key: 'complete',
          name: 'Число',
          width: 120,
          contentFormat: 'number',
        },
        {
          key: 'inspiredDay',
          name: 'Число, left',
          width: 120,
          contentFormat: 'number',
          contentAlign: 'left',
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: '500px' } }}
        columnConfig={columns}
        rows={rows}
      />
    );
  },
};
