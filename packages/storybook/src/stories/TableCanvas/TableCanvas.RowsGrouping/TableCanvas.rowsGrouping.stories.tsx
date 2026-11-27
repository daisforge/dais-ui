/* eslint-disable react-hooks/rules-of-hooks */
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import {
  ColumnConfig,
  SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { IconRefresh } from '@ui-kit/icons';
import React, { useMemo, useState } from 'react';

import { settle } from '../visual-helpers';
import { createRowsForGrouping, type RowForGrouping } from './dataRowGrouping';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/RowsGrouping',
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
import { IconRefresh } from '@daisforge/ui/icons';

`;

export const SimpleTable: StoryObj<{
  manyColumns: boolean;
  narrowPanel: boolean;
  confirm: boolean;
  onApply?: (keys: string[]) => void;
}> = {
  decorators: [(Story, { args }) => <Story key={String(args.manyColumns)} />],
  args: { manyColumns: false, narrowPanel: false, confirm: false },
  argTypes: {
    manyColumns: { name: '24 дополнительных столбца', control: 'boolean' },
    confirm: { name: 'Применение по кнопке', control: 'boolean' },
    narrowPanel: { name: 'Узкая панель', control: 'boolean' },
  },
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Простая группировка',
  render: ({ manyColumns, narrowPanel, confirm, onApply }) => {
    const [sourceRows] = useState(createRowsForGrouping);
    const years = useMemo(
      () => (manyColumns ? Array.from({ length: 24 }, (_, i) => 2000 + i) : []),
      [manyColumns],
    );
    const rows = useMemo(
      () =>
        sourceRows.map((row) => ({
          ...row,
          ...Object.fromEntries(
            years.map((year) => [
              String(year),
              row.year === year ? row.gold : 0,
            ]),
          ),
        })),
      [sourceRows, years],
    );

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
        ...years.map((year) => ({
          key: String(year),
          name: String(year),
          rowsGrouping: { columnGroupLabel: `Золотые медали за ${year} год` },
        })),
      ],
      [years],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: {
            height: 700,
            maxWidth: narrowPanel ? 168 : undefined,
          },
          fullScreenEnabled: narrowPanel,
          controlBlock: narrowPanel
            ? {
                rightSideInner: [
                  {
                    text: 'Сбросить группировку',
                    contentLeft: <IconRefresh />,
                    'aria-label': 'Сбросить группировку',
                    title: 'Сбросить группировку',
                    onClick: () => setGroupByArr([]),
                  },
                ],
              }
            : undefined,
          columnsControl: {
            enable: true,
          },
          rowsGrouping: {
            rowKeyGetter: (r) => r.id,
            groupByState: [
              groupByArr,
              (update) => {
                const next =
                  typeof update === 'function' ? update(groupByArr) : update;
                onApply?.(next);
                setGroupByArr(next);
              },
            ],

            groupButton: {
              applyMode: confirm ? 'confirm' : 'instant',
              defaultCustomItems: [
                { value: 'gold', label: 'Gold as custom option' },
              ],
            },
            groupedColumnProps: {
              width: 350,
              renderCell: (props) => {
                if (props.parentGroupKey === 'Russian Federation') {
                  return 'Russia last lvl';
                }
                return props.parentGroupKey ?? '';
              },
              rowsGrouping: {
                renderGroupCell(props) {
                  if (props.groupKey === 'Russian Federation') {
                    return 'Russia';
                  }
                  return props.groupKey;
                },
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

export const MultipleFeaturesTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Комбинация с другими фичами',
  render: () => {
    const [rows] = useState(createRowsForGrouping);

    const [groupByArr, setGroupByArr] = useState<string[]>([]);

    const columnConfig = useMemo<readonly ColumnConfig<RowForGrouping>[]>(
      () => [
        {
          key: 'athlete',
          name: 'Athlete',
          sortingType: 'stringSort',
          rowsGrouping: {
            columnGroupLabel: 'Athlete',
          },
          filtering: {
            component: 'input',
            filter: 'includes',
            valueInRow: (r) => r.athlete,
            keyInFilterState: 'athlete',
          },
        },
        {
          key: 'sport',
          name: 'Sport',
          sortingType: 'stringSort',
          rowsGrouping: {
            columnGroupLabel: 'Sport',
          },
          filtering: {
            component: 'input',
            filter: 'includes',
            valueInRow: (r) => r.sport,
            keyInFilterState: 'sport',
          },
        },
        {
          key: 'country',
          name: 'Country',
          sortingType: 'stringSort',
          rowsGrouping: {
            columnGroupLabel: 'Country',
          },
          filtering: {
            component: 'input',
            filter: 'startWith',
            valueInRow: (r) => r.country,
            keyInFilterState: 'country',
          },
        },
        {
          key: 'year',
          name: 'Year',
          sortingType: 'numberSort',
          rowsGrouping: {
            columnGroupLabel: 'Year',
          },
          filtering: {
            component: 'input',
            filter: 'startWith',
            valueInRow: (r) => r.year,
            keyInFilterState: 'year',
          },
        },

        {
          key: 'gold',
          name: 'Gold',
          sortingType: 'numberSort',
          rowsGrouping: {
            columnGroupLabel: 'Gold',
            renderGroupCell({ childRows }) {
              return String(
                childRows.reduce((prev, { gold }) => prev + gold, 0),
              );
            },
          },
        },
      ],
      [],
    );
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

    const filteringStateAndSetter = useState({
      athlete: '',
      sport: '',
      gold: '',
      country: '',
      year: '',
    });

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );
    const rowCheckboxDisabled = (r: RowForGrouping) => r.id === 1;

    return (
      <TableCanvas
        tableConfig={{
          rowMarkers: {
            startIndex: 1,
          },
          columnsControl: {
            enable: true,
          },
          containerStyle: { height: 700 },
          rowsGrouping: {
            rowKeyGetter: (r) => r.id,
            groupByState: [groupByArr, setGroupByArr],
            groupedColumnProps: {
              name: <>моя группировка</>,
            },
          },
          resizableColumn: true,
          sorting: {
            state: sortingStateAndSetter,
          },
          filtering: {
            state: filteringStateAndSetter,
            clearedValue: {
              athlete: '',
              sport: '',
              gold: '',
              country: '',
              year: '',
            },
          },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id,
            showDefault: true,
            rowCheckboxDisabled,
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

function confirmGrouping(narrowPanel: boolean): typeof SimpleTable {
  const onApply = fn();
  return {
    ...SimpleTable,
    name: narrowPanel ? 'Применение из подменю' : 'Применение из списка',
    args: { ...SimpleTable.args, narrowPanel, confirm: true, onApply },
    parameters: { screenshot: { keepState: true, capture: 'page' } },
    play: async ({ canvasElement }) => {
      onApply.mockClear();
      const page = within(canvasElement.ownerDocument.body);
      const open = async () => {
        if (narrowPanel) {
          await userEvent.click(
            await page.findByLabelText('Дополнительные действия'),
          );
          await userEvent.click(
            await page.findByRole('option', { name: 'Группировать' }),
          );
        } else {
          await userEvent.click(
            await page.findByRole('combobox', { name: /Группировать/ }),
          );
        }
        await page.findByText('Сбросить все');
      };
      const option = (name: string) =>
        page.getByRole('option', { name: new RegExp(name) });
      const applyRole = narrowPanel ? 'option' : 'button';
      await settle();
      await open();
      await userEvent.click(option('Sport'));
      await userEvent.click(option('Country'));
      expect(onApply).not.toHaveBeenCalled();
      await userEvent.click(page.getByRole(applyRole, { name: 'Применить' }));
      expect(onApply).toHaveBeenCalledTimes(1);
      expect(onApply).toHaveBeenLastCalledWith(['sport', 'country']);
      await waitFor(() => expect(page.queryByText('Сбросить все')).toBeNull());
      await open();
      await userEvent.click(option('Sport'));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(page.queryByText('Сбросить все')).toBeNull());
      await open();
      expect(within(option('Sport')).getByRole('checkbox')).toBeChecked();
      expect(within(option('Country')).getByRole('checkbox')).toBeChecked();
      expect(onApply).toHaveBeenCalledTimes(1);
    },
  };
}

export const ConfirmWide = confirmGrouping(false);
export const ConfirmNarrow = confirmGrouping(true);
