/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import {
  createSeededRandom,
  FIXED_DATE_TIMESTAMP,
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@ui-kit/components/Calendar';
import {
  ColumnConfig,
  TableCanvas,
  TableFilterSelectListItem,
} from '@ui-kit/components/TableCanvas';
import { IconStar } from '@ui-kit/icons';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Filtering',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui';

`;

export const FilteringTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Filtering Table',
  render: () => {
    const [isFavorite, setIsFavorite] = useState(true);
    const [rows] = useState(() => {
      const seededRandom = createSeededRandom(42);
      return createRows().map((el) => ({
        ...el,
        id: Math.floor(seededRandom() * 1000),
        date: (() => {
          const date = new Date(
            FIXED_DATE_TIMESTAMP +
              (Math.floor(seededRandom() * 61) - 30) * 86400000,
          );
          return `${String(date.getDate()).padStart(2, '0')}.${String(
            date.getMonth() + 1,
          ).padStart(2, '0')}.${date.getFullYear()}`;
        })(),
      }));
    });

    const filteringStateAndSetter = useState({
      id: '',
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
      globalFilter: '',
      date: undefined as string | undefined,
    });

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'id',
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'date',
          name: 'Date',
          filtering: {
            component: 'custom',
            customRender: (props) => {
              const {
                headerContextState: { filters, setFilters },
              } = props;
              return (
                <Calendar
                  value={filters?.['date']}
                  onChangeValue={(v) => {
                    if (setFilters)
                      setFilters((prev) => ({
                        ...prev,
                        date: v,
                      }));
                  }}
                />
              );
            },
            filter: (filterValue, rowValue) =>
              filterValue ? rowValue === filterValue : true,
            valueInRow: (r) => (r as Row & { date: string })?.date,
            compareWithClearedValue: (clearedValue, currV) =>
              clearedValue === currV,
            keyInFilterState: 'date',
          },
        },

        {
          key: 'priority',
          name: 'Priority',
          filtering: {
            component: 'select',
            selectOptions: {
              type: 'constant',
              options: [
                { value: 'All', text: 'All' },
                { value: 'High', text: 'High' },
                { value: 'Critical', text: 'Critical' },
                { value: 'Medium', text: 'Medium' },
                { value: 'Low', text: 'Low' },
              ],
            },

            keyInFilterState: 'priority',
            valueInRow: (r) => r.priority,
            filter: {
              typeOfValue: 'single',
              filteringType: (fv, rv) => (fv !== 'All' ? rv === fv : true),
            },
          },
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          filtering: {
            beforeList(props) {
              return (
                <TableFilterSelectListItem
                  $size={props.headerContextState.rowSize}
                >
                  custom beforeList
                </TableFilterSelectListItem>
              );
            },
            component: 'select',
            selectOptions: {
              type: 'stateInHeaderContext',
              optionsKeyInHeaderContext: 'issueTypeOptions',
            },
            keyInFilterState: 'issueType',
            valueInRow: (r) => r.issueType,
            filter: {
              typeOfValue: 'multiple',
              filteringType: (fv, rv) =>
                !fv.length || fv.some((fvCurr) => fvCurr === rv),
            },
          },
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    const headerContextValue = useMemo(
      () => ({
        issueTypeOptions: [
          { text: 'Bug', value: 'Bug' },
          { text: 'Improvement', value: 'Improvement' },
          { text: 'Epic', value: 'Epic' },
          { text: 'Story', value: 'Story' },
        ],
      }),
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowSize: {
            default: 'big',
            showInControl: true,
          },
          fullScreenEnabled: true,
          controlBlock: {
            customFeatures: [
              // Обязательная кастомная фича
              {
                value: 'favorite',
                label: 'Удалить из избранного',
                Icon: IconStar,
                onClick: () => {},
                mandatory: true,
                details: {
                  type: 'switch',
                  label: 'В избранном',
                  checked: isFavorite,
                  onChange: (e) => setIsFavorite(e.target.checked),
                },
              },
            ],
          },
          filtering: {
            state: filteringStateAndSetter,
            filtersInfo: {
              id: {
                label: 'id',
                clearedValue: '',
              },
              task: {
                label: 'task',
                clearedValue: '',
              },
              priority: {
                label: 'Some Label',
                clearedValue: 'All',
              },
              issueType: {
                label: 'issueType',
                clearedValue: [],
              },
              complete: {
                label: 'complete',
                clearedValue: '',
              },
              date: {
                label: 'Дата',
                clearedValue: undefined,
              },
              globalFilter: {
                label: 'Global filter',
                clearedValue: '',
              },
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
        headerContextValue={headerContextValue}
      />
    );
  },
};
