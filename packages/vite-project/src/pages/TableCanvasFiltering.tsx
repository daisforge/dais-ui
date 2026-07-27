/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useMemo, useState } from 'react';

import { createRows, type Row } from '../shared/tableData';

import {
  type ColumnConfig,
  TableCanvas,
} from '@dais-ui/ui-kit/components/TableCanvas';

const Section = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <section>
    <h3>{label}</h3>
    <div
      style={{
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        background: 'var(--bg-card)',
      }}
    >
      {children}
    </div>
  </section>
);

// ─── Automatic filtering ───────────────────────────────────────────

const AutoFilteringExample = () => {
  const [rows] = useState(createRows);

  const filteringStateAndSetter = useState({
    id: '',
    task: '',
    priority: 'All',
    issueType: [] as string[],
    complete: '',
  });

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      {
        key: 'task',
        name: 'Title',
        filtering: {
          component: 'input' as const,
          filter: 'includes' as const,
          valueInRow: (r: Row) => r.task,
          keyInFilterState: 'task',
        },
      },
      {
        key: 'priority',
        name: 'Priority',
        filtering: {
          component: 'select' as const,
          selectOptions: {
            type: 'constant' as const,
            options: [
              { value: 'All', text: 'All' },
              { value: 'High', text: 'High' },
              { value: 'Critical', text: 'Critical' },
              { value: 'Medium', text: 'Medium' },
              { value: 'Low', text: 'Low' },
            ],
          },
          keyInFilterState: 'priority',
          valueInRow: (r: Row) => r.priority,
          filter: {
            typeOfValue: 'single' as const,
            filteringType: (fv: string, rv: string) =>
              fv !== 'All' ? rv === fv : true,
          },
        },
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        filtering: {
          component: 'select' as const,
          selectOptions: {
            type: 'stateInHeaderContext' as const,
            optionsKeyInHeaderContext: 'issueTypeOptions',
          },
          keyInFilterState: 'issueType',
          valueInRow: (r: Row) => r.issueType,
          filter: {
            typeOfValue: 'multiple' as const,
            filteringType: (fv: string[], rv: string) =>
              !fv.length || fv.some((fvCurr) => fvCurr === rv),
          },
        },
      },
      {
        key: 'complete',
        name: '% Complete',
        filtering: {
          component: 'input' as const,
          keyInFilterState: 'complete',
          valueInRow: (r: Row) => r.complete,
          filter: (fv: string, rv: string | number) => (+rv || 0) >= (+fv || 0),
        },
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
        filtering: {
          state: filteringStateAndSetter,
          filtersInfo: {
            id: { label: 'ID', clearedValue: '' },
            task: { label: 'Title', clearedValue: '' },
            priority: { label: 'Priority', clearedValue: 'All' },
            issueType: { label: 'Issue Type', clearedValue: [] },
            complete: { label: '% Complete', clearedValue: '' },
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
      headerContextValue={headerContextValue}
    />
  );
};

// ─── Manual filtering ──────────────────────────────────────────────

const ManualFilteringExample = () => {
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
    const result = rows.filter((row) =>
      enabledFilters.every((enabledFilter) => {
        const colValue = row[enabledFilter[0] as keyof typeof row] as string;
        return Array.isArray(enabledFilter[1])
          ? enabledFilter[1].includes(colValue)
          : enabledFilter[1] === colValue.toString() ||
              enabledFilter[1] === 'All';
      }),
    );
    setFilteredRows(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      {
        key: 'task',
        name: 'Title',
        filtering: {
          component: 'input' as const,
          filter: 'includes' as const,
          valueInRow: (r: Row) => r.task,
          keyInFilterState: 'task',
        },
      },
      {
        key: 'priority',
        name: 'Priority',
        filtering: {
          component: 'select' as const,
          selectOptions: {
            type: 'constant' as const,
            options: [
              { value: 'All', text: 'All' },
              { value: 'High', text: 'High' },
              { value: 'Critical', text: 'Critical' },
              { value: 'Medium', text: 'Medium' },
              { value: 'Low', text: 'Low' },
            ],
          },
          keyInFilterState: 'priority',
          valueInRow: (r: Row) => r.priority,
          filter: {
            typeOfValue: 'single' as const,
            filteringType: (fv: string, rv: string) =>
              fv !== 'All' ? rv === fv : true,
          },
        },
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        filtering: {
          component: 'select' as const,
          selectOptions: {
            type: 'stateInHeaderContext' as const,
            optionsKeyInHeaderContext: 'issueTypeOptions',
          },
          keyInFilterState: 'issueType',
          valueInRow: (r: Row) => r.issueType,
          filter: {
            typeOfValue: 'multiple' as const,
            filteringType: (fv: string[], rv: string) =>
              !fv.length || fv.some((fvCurr) => fvCurr === rv),
          },
        },
      },
      {
        key: 'complete',
        name: '% Complete',
        filtering: {
          component: 'input' as const,
          keyInFilterState: 'complete',
          valueInRow: (r: Row) => r.complete,
          filter: (fv: string, rv: string | number) => (+rv || 0) >= (+fv || 0),
        },
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
        filtering: {
          state: filteringStateAndSetter,
          filtersInfo: {
            task: { label: 'Title', clearedValue: '' },
            priority: { label: 'Priority', clearedValue: 'All' },
            issueType: { label: 'Issue Type', clearedValue: [] },
            complete: { label: '% Complete', clearedValue: '' },
          },
          manualFiltering: true,
        },
      }}
      columnConfig={columnConfig}
      rows={filteredRows}
      headerContextValue={headerContextValue}
    />
  );
};

// ─── Page ──────────────────────────────────────────────────────────

export const TableCanvasFilteringExamples = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
    <Section label="1. Automatic Filtering (select single/multiple + input)">
      <AutoFilteringExample />
    </Section>
    <Section label="2. Manual Filtering (manualFiltering: true)">
      <ManualFilteringExample />
    </Section>
  </div>
);
