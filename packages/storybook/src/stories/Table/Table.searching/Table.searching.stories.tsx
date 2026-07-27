/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useCallback, useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Searching',
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

export const ControlSearching: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Контролируемый поиск',
  render: () => {
    const [rows] = useState(createRows);
    const [query, setQuery] = useState('Bug');

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID'
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
          key: 'developer',
          name: 'Developer'
        },
        {
          key: 'tr1',
          name: 'TR'
        },
        {
          key: 'complete',
          name: '% Complete'
        }
      ],
      []
    );

    return (
      <Table
        tableConfig={{
          searching: {
            enabled: true,
            defaultSearchQuery: 'Epic',
            showSearchBlock: true,
            onChange: (value) => console.debug('onChange searching', value),
            onDebouncedChange: (value) =>
              console.debug('onDebouncedChange searching', value),
            searchQueryState: [query, setQuery],
            debounceDelay: 350,
            placeholder: 'Введите сумму',
            searchClasses: 'someClassForSearch'
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const UncontrolledSearching: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Неконтролируемый поиск',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID'
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
          key: 'developer',
          name: 'Developer'
        },
        {
          key: 'tr1',
          name: 'TR'
        },
        {
          key: 'complete',
          name: '% Complete'
        }
      ],
      []
    );

    return (
      <Table
        tableConfig={{
          searching: {
            enabled: true,
            defaultSearchQuery: 'Epic',
            showSearchBlock: true,
            onChange: (value) => console.debug('onChange searching', value),
            onDebouncedChange: (value) =>
              console.debug('onDebouncedChange searching', value),
            debounceDelay: 550
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const ManualSearching: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Manual поиск',
  render: () => {
    const [rows, setRows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID'
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
          key: 'developer',
          name: 'Developer'
        },
        {
          key: 'tr1',
          name: 'TR'
        },
        {
          key: 'complete',
          name: '% Complete'
        }
      ],
      []
    );

    return (
      <Table
        tableConfig={{
          searching: {
            enabled: true,
            manualSearching: true,
            defaultSearchQuery: '',
            showSearchBlock: true,
            onChange: (value) => console.debug('onChange searching', value),
            onDebouncedChange: (value) => {
              console.debug('onDebouncedChange searching', value);
              // fetchData from server => then setRows for example
              setRows(createRows(0, 10));
            },
            debounceDelay: 550
          },
          containerStyle: { height: 700 }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const AutocompleteHistory: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Autocomplete (история поиска)',
  render: () => {
    const [rows] = useState(createRows);
    const [searchHistory, setSearchHistory] = useState<string[]>([
      'Epi',
      'Bug',
      'Improvement',
      '19.628582577979465asdf97.58738810084174',
      'Critical',
      'High',
      'Story',
      'Task'
    ]);
    const lastSubmittedRef = useRef('');

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'developer', name: 'Developer' }
      ],
      []
    );

    const addToHistory = useCallback((value: string) => {
      if (!value.trim() || value === lastSubmittedRef.current) return;
      lastSubmittedRef.current = value;
      setSearchHistory((prev) => {
        const filtered = prev.filter((item) => item !== value);
        return [value, ...filtered].slice(0, 10);
      });
    }, []);

    const suggestions = useMemo(
      () => searchHistory.map((label) => ({ label })),
      [searchHistory]
    );

    return (
      <Table
        tableConfig={{
          searching: {
            enabled: true,
            showSearchBlock: true,
            onDebouncedChange: (value) => {
              console.debug('search:', value);
              addToHistory(value);
            },
            debounceDelay: 300,
            placeholder: 'Поиск',
            autocomplete: {
              suggestions,
              threshold: 0,
              listMaxHeight: '200px',

              onSuggestionSelect: (suggestion) => {
                console.debug('selected:', suggestion.label);
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
