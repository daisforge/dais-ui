/* eslint-disable react-hooks/rules-of-hooks */
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ColumnConfig,
  isGroupRow,
  RowInstrumentsType,
  SortColumn,
  Table
} from '@ui-kit/components/Table';
import React, { useCallback, useMemo, useState } from 'react';

import { createRowsForGrouping, type RowForGrouping } from '../dataRowGrouping';

const meta: Meta = {
  title:
    'Локальные компоненты/Table/RowsGrouping/Комбинация фичи группировка строк и других фичей',
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

export const MultipleFeaturesTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Комбинация фичи группировка строк и других фичей',
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
              return childRows.reduce((prev, { gold }) => prev + gold, 0);
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
    const getRowDropdownConfig = useCallback<
      RowInstrumentsType<RowForGrouping>
    >(({ row }) => {
      if (isGroupRow(row)) {
        return {
          items: [{ value: 'kek2', label: 'grouped kek' }]
        };
      }
      return {
        items: [{ value: 'kek', label: 'kek label' }]
      };
    }, []);

    return (
      <Table
        tableConfig={{
          rowInstruments: {
            getRowDropdownConfig,
            defaultOpened: true
          },
          columnsControl: {
            enable: true
          },
          containerStyle: { height: 700 },
          rowsGrouping: {
            rowKeyGetter: (r) => r.id,
            groupByState: [groupByArr, setGroupByArr],
            groupedColumnProps: {
              name: <>моя группировка</>,
              resizable: true
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
