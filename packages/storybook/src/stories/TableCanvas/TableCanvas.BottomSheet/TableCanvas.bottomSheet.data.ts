import type { SortColumn } from '@ui-kit/components/TableCanvas';

export type BottomSheetRow = {
  id: number | string;
  task: string;
  priority: string;
  issueType: string;
  developer: string;
  complete: number;
  subRows?: BottomSheetRow[];
};

export type BottomSheetFilters = {
  priority: string;
  issueType: string[];
  developer: string;
  complete: string;
  globalFilter: string;
};

export type BottomSheetSummary = {
  type: 'top' | 'bottom';
  values: Array<{ columnId: string; value: string }>;
};

export type BottomSheetDataMode = 'all' | 'pagination' | 'infinity';

export function createBottomSheetRows(count = 100): BottomSheetRow[] {
  const priorities = ['Critical', 'High', 'Medium', 'Low'];
  const issueTypes = ['Bug', 'Improvement', 'Epic', 'Story'];
  const developers = ['Анна', 'Борис', 'Виктор', 'Дарья', 'Елена'];

  return Array.from({ length: Math.max(0, Math.floor(count)) }, (_, index) => {
    const id = index + 1;
    const priority = priorities[index % priorities.length] ?? 'Medium';
    const issueType =
      issueTypes[Math.floor(index / 4) % issueTypes.length] ?? 'Story';
    return {
      id,
      task: `Задача ${id}: подготовить отчёт и проверить данные`,
      priority,
      issueType,
      developer: developers[index % developers.length] ?? 'Анна',
      complete: (id * 17) % 101,
      subRows: Array.from({ length: 2 }, (_child, childIndex) => ({
        id: `${id}.${childIndex + 1}`,
        task: `Подзадача ${id}.${childIndex + 1}: ${
          childIndex === 0 ? 'реализация' : 'проверка'
        }`,
        priority,
        issueType,
        developer:
          developers[(index + childIndex + 1) % developers.length] ?? 'Анна',
        complete: (id * 17 + (childIndex + 1) * 13) % 101,
      })),
    };
  });
}

export function cloneBottomSheetRows(
  rows: readonly BottomSheetRow[],
): BottomSheetRow[] {
  return rows.map((row) => ({
    ...row,
    ...(row.subRows ? { subRows: cloneBottomSheetRows(row.subRows) } : {}),
  }));
}

export function prepareBottomSheetRows(
  rows: readonly BottomSheetRow[],
  query: string,
  filters: BottomSheetFilters,
  sortColumns: readonly SortColumn[],
  tree = false,
): BottomSheetRow[] {
  const search = query.trim().toLocaleLowerCase('ru');
  const globalFilter = filters.globalFilter.trim().toLocaleLowerCase('ru');
  const developer = filters.developer.trim().toLocaleLowerCase('ru');
  const minimumComplete = Number(filters.complete) || 0;
  const fields = [
    'id',
    'task',
    'priority',
    'issueType',
    'developer',
    'complete',
  ] as const;

  function matches(row: BottomSheetRow): boolean {
    const text = fields
      .map((key) => String(row[key]))
      .join(' ')
      .toLocaleLowerCase('ru');
    return (
      (!search || text.includes(search)) &&
      (!globalFilter || text.includes(globalFilter)) &&
      (!filters.priority ||
        filters.priority === 'All' ||
        row.priority === filters.priority) &&
      (!filters.issueType.length ||
        filters.issueType.includes(row.issueType)) &&
      (!developer ||
        row.developer.toLocaleLowerCase('ru').startsWith(developer)) &&
      row.complete >= minimumComplete
    );
  }

  function compare(left: BottomSheetRow, right: BottomSheetRow): number {
    return sortColumns.reduce((result, sort) => {
      if (result || !fields.some((key) => key === sort.columnKey))
        return result;
      const key = sort.columnKey as (typeof fields)[number];
      const difference =
        key === 'complete'
          ? left.complete - right.complete
          : String(left[key]).localeCompare(String(right[key]), 'ru', {
              numeric: key === 'id',
            });
      return sort.direction === 'DESC' ? -difference : difference;
    }, 0);
  }

  function visit(siblings: readonly BottomSheetRow[]): BottomSheetRow[] {
    return siblings
      .reduce<BottomSheetRow[]>((result, row) => {
        const children = tree && row.subRows ? visit(row.subRows) : undefined;
        if (matches(row) || children?.length) {
          const { subRows: _subRows, ...values } = row;
          result.push({
            ...values,
            ...(children?.length ? { subRows: children } : {}),
          });
        }
        return result;
      }, [])
      .sort(compare);
  }

  return visit(rows);
}

export function applyBottomSheetRowChanges(
  rows: readonly BottomSheetRow[],
  changedRows: readonly BottomSheetRow[],
): BottomSheetRow[] {
  const changes = new Map<string, BottomSheetRow>();

  function collect(siblings: readonly BottomSheetRow[]): void {
    siblings.forEach((row) => {
      changes.set(String(row.id), row);
      if (row.subRows) collect(row.subRows);
    });
  }

  function visit(siblings: readonly BottomSheetRow[]): BottomSheetRow[] {
    return siblings.map((row) => {
      const change = changes.get(String(row.id));
      return {
        ...row,
        ...(change
          ? {
              task: change.task,
              priority: change.priority,
              issueType: change.issueType,
              developer: change.developer,
              complete: change.complete,
            }
          : {}),
        ...(row.subRows ? { subRows: visit(row.subRows) } : {}),
      };
    });
  }

  collect(changedRows);
  return visit(rows);
}

export function summarizeBottomSheetRows(
  rows: readonly BottomSheetRow[],
  tree = false,
): BottomSheetSummary[] {
  const allRows: BottomSheetRow[] = [];

  function collect(siblings: readonly BottomSheetRow[]): void {
    siblings.forEach((row) => {
      allRows.push(row);
      if (tree && row.subRows) collect(row.subRows);
    });
  }

  collect(rows);
  const complete = allRows.reduce((sum, row) => sum + row.complete, 0);
  const average = allRows.length ? complete / allRows.length : 0;
  const developers = new Set(allRows.map((row) => row.developer));
  return [
    {
      type: 'top',
      values: [
        { columnId: 'id', value: String(allRows.length) },
        { columnId: 'task', value: 'Всего строк в выборке' },
        {
          columnId: 'priority',
          value: `Critical: ${
            allRows.filter((row) => row.priority === 'Critical').length
          }`,
        },
        {
          columnId: 'issueType',
          value: `Bug: ${
            allRows.filter((row) => row.issueType === 'Bug').length
          }`,
        },
        { columnId: 'developer', value: `Исполнителей: ${developers.size}` },
        { columnId: 'complete', value: `Сумма: ${complete}` },
      ],
    },
    {
      type: 'bottom',
      values: [
        { columnId: 'task', value: 'Средняя готовность всей выборки' },
        { columnId: 'complete', value: `${average.toFixed(1)}%` },
      ],
    },
  ];
}

export function selectBottomSheetRows(
  rows: readonly BottomSheetRow[],
  mode: BottomSheetDataMode,
  page = 1,
  pageSize = 20,
  loadedCount = 20,
): BottomSheetRow[] {
  if (mode === 'all') return [...rows];
  if (mode === 'infinity')
    return rows.slice(0, Math.max(0, Math.floor(loadedCount)));
  const size = Math.max(1, Math.floor(pageSize));
  const lastPage = Math.max(1, Math.ceil(rows.length / size));
  const currentPage = Math.min(lastPage, Math.max(1, Math.floor(page)));
  return rows.slice((currentPage - 1) * size, currentPage * size);
}
