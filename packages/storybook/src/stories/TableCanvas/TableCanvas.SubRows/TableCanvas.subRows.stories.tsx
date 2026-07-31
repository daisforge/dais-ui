/* eslint-disable react-hooks/rules-of-hooks */
import { createRowsTree, TreeRow } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/SubRows',
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

type Story = StoryObj;

export const SubRows: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Иерархичный вид',
  render: () => {
    const [rows] = useState(() => createRowsTree());

    const columns = useMemo(
      (): readonly ColumnConfig<TreeRow>[] => [
        {
          key: 'block',
          name: 'Блок / Трайб / Продукт',

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
        },
        {
          key: 'blockActivity',
          name: 'Активность блока',
        },
        {
          key: ' ',
          name: 'Локация трайба',
          subRow: {
            renderSubRowCell: (props, lvl) => {
              if (lvl === 1) {
                return (
                  <Canvas.Container
                    alignItems="center"
                    padding={{ left: 8 }}
                    style={{ width: '100%' }}
                  >
                    <Canvas.Badge
                      id="kek"
                      text={props.row?.tribeZone}
                      view="accent"
                      size="m"
                    />
                  </Canvas.Container>
                );
              }
              return '';
            },
          },
        },
        {
          key: 'q1',
          name: 'Q1',

          subRow: {
            parentKeyAsDefault: true,
          },
        },

        {
          key: 'q2',
          name: 'Q2',
          subRow: {
            keyOfColumnInSubRow: 'q1',
          },
        },
        {
          key: 'q3',
          name: 'Q3',
          subRow: {
            keyOfColumnInSubRow: 'q1',
          },
        },
        {
          key: 'q4',
          name: 'Q4',
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
          containerStyle: { height: '60vh' },
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id,
          },
          fullScreenEnabled: true,
          resizableColumn: true,
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  },
};
