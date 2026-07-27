/* eslint-disable react-hooks/rules-of-hooks */
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ColumnConfig,
  SortColumn,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

import { createRowsForGrouping, type RowForGrouping } from './dataRowGrouping';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/RowsGrouping',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@dais-ui/ui-kit/components/TableCanvas';

`;

export const SimpleTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Простая группировка',
  render: () => {
    const [rows] = useState(createRowsForGrouping);

    const [groupByArr, setGroupByArr] = useState<string[]>([]);

    const columnConfig = useMemo<readonly ColumnConfig<RowForGrouping>[]>(
      () => [
        {
          key: 'athlete',
          name: 'Athlete',
          rowsGrouping: {
            columnGroupLabel: 'Athlete'
          }
        },
        {
          key: 'sport',
          name: 'Sport',

          rowsGrouping: {
            columnGroupLabel: 'Sport'
          }
        },
        {
          key: 'country',
          name: 'Country',

          rowsGrouping: {
            columnGroupLabel: 'Country'
          }
        },
        {
          key: 'year',
          name: 'Year',

          rowsGrouping: {
            columnGroupLabel: 'Year'
          }
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
            }
          }
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          columnsControl: {
            enable: true
          },
          rowsGrouping: {
            rowKeyGetter: (r) => r.id,
            groupByState: [groupByArr, setGroupByArr],

            groupButton: {
              defaultCustomItems: [
                { value: 'gold', label: 'Gold as custom option' }
              ]
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
                }
              }
            }
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const MultipleFeaturesTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
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
            columnGroupLabel: 'Athlete'
          },
          filtering: {
            component: 'input',
            filter: 'includes',
            valueInRow: (r) => r.athlete,
            keyInFilterState: 'athlete'
          }
        },
        {
          key: 'sport',
          name: 'Sport',
          sortingType: 'stringSort',
          rowsGrouping: {
            columnGroupLabel: 'Sport'
          },
          filtering: {
            component: 'input',
            filter: 'includes',
            valueInRow: (r) => r.sport,
            keyInFilterState: 'sport'
          }
        },
        {
          key: 'country',
          name: 'Country',
          sortingType: 'stringSort',
          rowsGrouping: {
            columnGroupLabel: 'Country'
          },
          filtering: {
            component: 'input',
            filter: 'startWith',
            valueInRow: (r) => r.country,
            keyInFilterState: 'country'
          }
        },
        {
          key: 'year',
          name: 'Year',
          sortingType: 'numberSort',
          rowsGrouping: {
            columnGroupLabel: 'Year'
          },
          filtering: {
            component: 'input',
            filter: 'startWith',
            valueInRow: (r) => r.year,
            keyInFilterState: 'year'
          }
        },

        {
          key: 'gold',
          name: 'Gold',
          sortingType: 'numberSort',
          rowsGrouping: {
            columnGroupLabel: 'Gold',
            renderGroupCell({ childRows }) {
              return String(
                childRows.reduce((prev, { gold }) => prev + gold, 0)
              );
            }
          }
        }
      ],
      []
    );
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

    const filteringStateAndSetter = useState({
      athlete: '',
      sport: '',
      gold: '',
      country: '',
      year: ''
    });

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set()
    );
    const rowCheckboxDisabled = (r: RowForGrouping) => r.id === 1;

    return (
      <TableCanvas
        tableConfig={{
          rowMarkers: {
            startIndex: 1
          },
          columnsControl: {
            enable: true
          },
          containerStyle: { height: 700 },
          rowsGrouping: {
            rowKeyGetter: (r) => r.id,
            groupByState: [groupByArr, setGroupByArr],
            groupedColumnProps: {
              name: <>моя группировка</>
            }
          },
          resizableColumn: true,
          sorting: {
            state: sortingStateAndSetter
          },
          filtering: {
            state: filteringStateAndSetter,
            clearedValue: {
              athlete: '',
              sport: '',
              gold: '',
              country: '',
              year: ''
            }
          },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id,
            showDefault: true,
            rowCheckboxDisabled
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
