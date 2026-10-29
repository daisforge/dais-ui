import { Button } from '@ui-kit/components/Button';
import { Table } from '@ui-kit/components/Table';
import { TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useCallback, useMemo, useRef, useState } from 'react';

type Filters = { spaceName: string; spaceId: string; status: string };
type Row = Filters & { id: number };
type Setter = React.Dispatch<React.SetStateAction<Filters>>;
type Call = {
  id: number;
  argument: 'updater' | 'object';
  previous: Filters;
  requested: Filters;
  applied: Filters;
  dependencyReset: boolean;
};

const INITIAL_FILTERS: Filters = {
  spaceName: 'Platform',
  spaceId: 'platform-1',
  status: 'active',
};
const ROWS: Row[] = [
  { id: 1, spaceName: 'Platform', spaceId: 'platform-1', status: 'active' },
  { id: 2, spaceName: 'Platform', spaceId: 'platform-2', status: 'active' },
  { id: 3, spaceName: 'Platform', spaceId: 'platform-1', status: 'archived' },
  { id: 4, spaceName: 'Analytics', spaceId: 'analytics-1', status: 'active' },
  { id: 5, spaceName: 'Analytics', spaceId: 'analytics-2', status: 'archived' },
];
const FILTER_KEYS = ['spaceName', 'spaceId', 'status'] as const;
const COLUMNS = FILTER_KEYS.map((key) => ({
  key,
  name: key,
  width: 200,
  filtering: {
    component: 'input' as const,
    keyInFilterState: key,
    filter: 'equal' as const,
  },
}));
const FILTERS_INFO = {
  spaceName: { label: 'spaceName', clearedValue: '' },
  spaceId: { label: 'spaceId', clearedValue: '' },
  status: { label: 'status', clearedValue: '' },
};

function SidebarControl({
  field,
  filters,
  setFilters,
}: {
  field: keyof Filters;
  filters: Filters;
  setFilters: Setter;
}) {
  const values = [
    ...new Set(
      ROWS.filter(
        (row) => field !== 'spaceId' || row.spaceName === filters.spaceName,
      ).map((row) => row[field]),
    ),
  ];

  return (
    <select
      aria-label={`Черновик ${field}`}
      value={filters[field]}
      style={{ width: '100%', padding: 8 }}
      disabled={field === 'spaceId' && !filters.spaceName}
      onChange={(event) => {
        const { value } = event.target;
        setFilters((previous) => ({
          ...previous,
          [field]: value,
          ...(field === 'spaceName' && value !== previous.spaceName
            ? { spaceId: '' }
            : {}),
        }));
      }}
    >
      <option value="">Все</option>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

const SIDEBAR_ITEMS = Object.fromEntries(
  FILTER_KEYS.map((field) => [
    field,
    {
      label: field,
      customRenderFn: (filters: Filters, setFilters: Setter) => (
        <SidebarControl
          field={field}
          filters={filters}
          setFilters={setFilters}
        />
      ),
    },
  ]),
);

/** Both tables receive the same data and setter to compare reset behavior. */
export function TableFilteringResetDemo({
  canvas = false,
}: {
  canvas?: boolean;
}) {
  const [filters, setFiltersState] = useState<Filters>({ ...INITIAL_FILTERS });
  const [calls, setCalls] = useState<Call[]>([]);
  // A synchronous external store makes each setter call observable. Logging
  // stays outside React updaters, so re-renders/StrictMode do not inflate it.
  const currentFilters = useRef(filters);
  const sequence = useRef(0);

  const setFilters = useCallback<Setter>((action) => {
    const previous = currentFilters.current;
    const requested = typeof action === 'function' ? action(previous) : action;
    const dependencyReset = requested.spaceName !== previous.spaceName;
    const applied = dependencyReset ? { ...requested, spaceId: '' } : requested;
    currentFilters.current = applied;
    sequence.current += 1;
    const call: Call = {
      id: sequence.current,
      argument: typeof action === 'function' ? 'updater' : 'object',
      previous,
      requested,
      applied,
      dependencyReset,
    };
    setCalls((previousCalls) => [...previousCalls, call]);
    setFiltersState(applied);
  }, []);

  const rows = useMemo(
    () =>
      ROWS.filter((row) =>
        FILTER_KEYS.every((key) => !filters[key] || row[key] === filters[key]),
      ),
    [filters],
  );

  const restore = () => {
    const initial = { ...INITIAL_FILTERS };
    currentFilters.current = initial;
    sequence.current = 0;
    setFiltersState(initial);
    setCalls([]);
  };

  const tableConfig = {
    containerStyle: { height: 430 },
    sidebarConfig: {
      defaultOpen: true,
      defaultActiveTabId: canvas ? 'filtering' : 'tableSettings',
    },
    filtering: {
      state: [filters, setFilters] as [Filters, Setter],
      manualFiltering: true,
      filtersInfo: FILTERS_INFO,
      sidebarConfig: { order: [...FILTER_KEYS], items: SIDEBAR_ITEMS },
    },
  };

  return (
    <main
      style={{
        padding: 24,
        display: 'grid',
        gap: 12,
        fontFamily: 'sans-serif',
        fontSize: 14,
        lineHeight: 1.45,
      }}
    >
      <h2 style={{ margin: 0 }}>
        {canvas ? 'TableCanvas' : 'Table'}: очистка зависимых фильтров
      </h2>
      <p style={{ margin: 0 }}>
        При изменении spaceName внешний setter сбрасывает spaceId. Фильтрация
        строк выполняется снаружи (manualFiltering).
      </p>
      <ol style={{ margin: 0, paddingLeft: 24 }}>
        <li>
          Нажмите «Сбросить все» над таблицей: в журнале появится 1 вызов setter
          с целым объектом.
        </li>
        <li>
          Восстановите пример. В правом сайдбаре нажмите «Очистить»: внешних
          вызовов ещё нет.
        </li>
        <li>Нажмите «Применить»: появится 1 вызов с целым объектом.</li>
        <li>
          Восстановите пример. Измените spaceName в фильтре колонки или в
          сайдбаре: spaceId сбросится.
        </li>
      </ol>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Button size="s" view="secondary" onClick={restore}>
          Восстановить пример
        </Button>
        <strong data-testid="setter-count">
          Вызовов setter: {calls.length}
        </strong>
        <span>
          Строк: {rows.length} / {ROWS.length}
        </span>
      </div>
      <code data-testid="filter-state">{JSON.stringify(filters)}</code>
      <div style={{ minHeight: 470 }}>
        {canvas ? (
          <TableCanvas
            columnConfig={COLUMNS}
            rows={rows}
            tableConfig={tableConfig}
          />
        ) : (
          <Table columnConfig={COLUMNS} rows={rows} tableConfig={tableConfig} />
        )}
      </div>
      <section aria-label="Журнал вызовов setter">
        <h3 style={{ margin: '0 0 8px' }}>Журнал внешнего setter</h3>
        <p style={{ margin: '0 0 8px' }}>
          Считаются вызовы setter, а не рендеры или запросы. Источник действия
          таблица в setter не передаёт. «Восстановить пример» очищает журнал.
        </p>
        {calls.length === 0 ? (
          <p>Вызовов пока нет.</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: 13,
              }}
            >
              <thead>
                <tr>
                  {[
                    '№ / аргумент',
                    'До',
                    'Входящее состояние',
                    'После зависимости',
                    'Сброс spaceId',
                  ].map((label) => (
                    <th key={label} style={{ padding: 8 }}>
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody data-testid="setter-log">
                {calls.map((call) => (
                  <tr key={call.id} style={{ borderTop: '1px solid #aaa' }}>
                    <td style={{ padding: 8 }}>
                      {call.id} / {call.argument}
                    </td>
                    {[call.previous, call.requested, call.applied].map(
                      (value, index) => (
                        // These fixed columns have no stable object identifiers.
                        // eslint-disable-next-line react/no-array-index-key
                        <td key={index} style={{ padding: 8 }}>
                          <code>{JSON.stringify(value)}</code>
                        </td>
                      ),
                    )}
                    <td style={{ padding: 8 }}>
                      {call.dependencyReset ? 'Да' : 'Нет'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
