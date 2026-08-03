/* eslint-disable react-hooks/rules-of-hooks */
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

import { createRowsForGrouping, RowForGrouping } from '../dataRowGrouping';

const meta: Meta = {
  title:
    'Локальные компоненты/TableCanvas/SelectingRow/Пример кастомного выбора строк в группированной таблице',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;
type Story = StoryObj;

const preCode = `
interface RowForGrouping {
  id: number;
  country: string;
  year: number;
  sport: string;
  athlete: string;
  gold: number;
  silver: number;
  bronze: number;
}
`;

export const SelectingRow: Story = {
  name: 'Пример кастомного выбора строк в группированной таблице',
  tags: ['!autodocs'],
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRowsForGrouping);

    const [groupByArr, setGroupByArr] = useState<string[]>([]);

    const columnConfig = useMemo<readonly ColumnConfig<RowForGrouping>[]>(
      () => [
        {
          key: 'athlete',
          name: 'Athlete',
          rowsGrouping: {
            columnGroupLabel: 'Athlete',
          },
        },
        {
          key: 'sport',
          name: 'Sport',

          rowsGrouping: {
            columnGroupLabel: 'Sport',
          },
        },
        {
          key: 'country',
          name: 'Country',

          rowsGrouping: {
            columnGroupLabel: 'Country',
          },
        },
        {
          key: 'year',
          name: 'Year',

          rowsGrouping: {
            columnGroupLabel: 'Year',
          },
        },

        {
          key: 'gold',
          name: 'Gold',
          rowsGrouping: {
            groupByColumn: false,
            columnGroupLabel: 'Gold',
            renderGroupCell({ childRows }) {
              return childRows
                .reduce((prev, { gold }) => prev + gold, 0)
                .toString();
            },
          },
        },
      ],
      [],
    );
    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id,
            groupedRow: {
              getStates({ row, selectedRows }) {
                if (row.groupByKey === 'country') {
                  return {
                    checked: selectedRows.has(row.groupKey),
                    indeterminate: false,
                  };
                }
                return null;
              },
              onChange({ checked, row, setSelectedRows, defaultSetter }) {
                const recursive = (rowX: typeof row, groupByKeyX: string) => {
                  const childGroupsX = rowX.childGroups as (typeof row)[];
                  if (!childGroupsX || !childGroupsX?.length) {
                    return;
                  }
                  if (childGroupsX[0]?.groupByKey === 'country') {
                    setSelectedRows((prev) => {
                      const copy = new Set(prev);

                      childGroupsX.forEach((groupRow) =>
                        copy[checked ? 'delete' : 'add'](groupRow.groupKey),
                      );
                      return copy;
                    });
                    return;
                  }

                  childGroupsX.forEach((groupX) => {
                    const newChildGroupsX =
                      groupX.childGroups as (typeof row)[];
                    if (!newChildGroupsX || !childGroupsX?.length) {
                      return;
                    }
                    recursive(groupX, groupByKeyX);
                  });
                };
                if (row.groupByKey === 'country') {
                  setSelectedRows((prev) => {
                    const copy = new Set(prev);
                    copy[checked ? 'delete' : 'add'](row.groupKey);
                    return copy;
                  });
                  return;
                }
                recursive(row, 'country');
                defaultSetter();
              },
            },
          },
          rowsGrouping: {
            rowKeyGetter: (r) => r.id,
            groupByState: [groupByArr, setGroupByArr],
            expandAllBtn: {
              expandedAll({ allRowsIds, shownRows }) {
                return allRowsIds?.size === shownRows.length;
              },
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
