/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useEffect, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Filtering/Manual',
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

type Story = StoryObj;

export const ManualFiltering: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'task',
          name: 'Title',
          filtering: {
            component: 'input',
            filter: 'includes',

            valueInRow: (r) => r.task,

            keyInFilterState: 'task',
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
          filtering: {
            component: 'input',
            keyInFilterState: 'complete',
            valueInRow: (r) => r.complete,
            filter: (fv, rv) => (+rv || 0) >= (+fv || 0),
          },
        },
      ],
      [],
    );

    const rows = useMemo(() => createRows(), []);

    const [filteredRows, setFilteredRows] = useState(rows);

    const filteringStateAndSetter = useState<{
      task: string;
      priority: string;
      issueType: string[];
      complete: string;
    }>({
      task: '',
      priority: 'All',
      issueType: [],
      complete: '',
    });

    const [state] = filteringStateAndSetter;

    useEffect(() => {
      const enabledFilters = Object.entries(state).filter((el) =>
        Array.isArray(el[1]) ? !!el[1].length : !!el[1],
      );
      const filterRows = rows.filter((row) =>
        enabledFilters.every((enabledFilter) => {
          const colValue = row[enabledFilter[0] as keyof typeof row] as string;

          return Array.isArray(enabledFilter[1])
            ? enabledFilter[1].includes(colValue)
            : enabledFilter[1] === colValue.toString() ||
                enabledFilter[1] === 'All';
        }),
      );
      setFilteredRows(filterRows);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

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
      <Table
        tableConfig={{
          filtering: {
            state: filteringStateAndSetter,
            filtersInfo: {
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
            },
            manualFiltering: true,
          },
        }}
        columnConfig={columnConfig}
        rows={filteredRows}
        headerContextValue={headerContextValue}
      />
    );
  },
};
