import type { ObjectForExtending } from '../types/utils.type';
import { rowGrouper } from './data-handlers';
import type { RowsGrouping } from './types';

// Merged-вид группировки: плоские строки вместо дерева, колонки уровней слиты по
// границам групп. Хелперы модуля дают порядок строк, ключ пути, нумерацию и чекбокс.

/** Разделитель в ключе пути (не встречается в данных). */
const GROUP_PATH_SEP = String.fromCharCode(1);

export const isMergedGroupingView = <
  RowType extends ObjectForExtending,
  SummaryRowType,
>(
  rowsGrouping: RowsGrouping<RowType, SummaryRowType> | undefined,
  groupByArr: string[] | undefined,
): boolean => rowsGrouping?.view === 'merged' && (groupByArr?.length ?? 0) > 0;

// Строки в порядке групп: группы идут по первому вхождению, внутри группы
// порядок строк сохраняется.
export function flattenRowsByGroups<RowType extends ObjectForExtending>(
  rows: readonly RowType[],
  groupByArr: readonly string[],
): readonly RowType[] {
  if (groupByArr.length === 0) return rows;
  const [key, ...rest] = groupByArr;
  const out: RowType[] = [];
  for (const childRows of Object.values(rowGrouper(rows, key as string))) {
    out.push(...flattenRowsByGroups(childRows as RowType[], rest));
  }
  return out;
}

// Ключ пути от корня до уровня depth. Одинаковое значение под разными родителями
// даёт разные ключи, поэтому блок дочернего уровня рвётся на границе родителя.
export function createGroupPathValue<RowType extends ObjectForExtending>(
  groupByArr: readonly string[],
  depth: number,
): (row: RowType) => unknown {
  return (row) => {
    let acc = '';
    for (let i = 0; i <= depth; i += 1) {
      acc += GROUP_PATH_SEP + String(row[groupByArr[i] as string]);
    }
    return acc;
  };
}

// Номер группы верхнего уровня для нумерации строк (по порядку первого вхождения).
export function createTopGroupOrdinalGetter<RowType extends ObjectForExtending>(
  topKey: string,
  rowsRef: { readonly current: readonly RowType[] },
): (args: { row: RowType }) => string | number {
  let cachedRows: readonly RowType[] | null = null;
  let ordinal = new Map<unknown, number>();

  return ({ row }) => {
    const rows = rowsRef.current;
    if (rows !== cachedRows) {
      cachedRows = rows;
      ordinal = new Map();
      let n = 0;
      for (const r of rows) {
        const v = r[topKey];
        if (!ordinal.has(v)) {
          n += 1;
          ordinal.set(v, n);
        }
      }
    }
    return ordinal.get(row[topKey]) ?? '';
  };
}

type SelectingLike<
  RowType extends ObjectForExtending,
  K extends string | number,
> = {
  state: [ReadonlySet<K>, React.Dispatch<React.SetStateAction<ReadonlySet<K>>>];
  rowKeyGetter: (row: RowType) => K;
};

// Групповой чекбокс: оборачивает сеттер выделения так, что тоггл одной строки
// группы тогглит всю группу. Работает и для «выделить всё» / «сбросить».
export function wrapMergedGroupSelecting<S>(
  selecting: S,
  topKey: string,
  flattenedRowsRef: { readonly current: readonly ObjectForExtending[] },
): S {
  const sel = selecting as unknown as SelectingLike<
    ObjectForExtending,
    string | number
  >;
  const [value, setValue] = sel.state;
  const { rowKeyGetter } = sel;

  // Карта «группа → ключи строк», кэш по идентичности массива строк.
  let cachedRows: readonly ObjectForExtending[] | null = null;
  let cachedGroups = new Map<unknown, Array<string | number>>();
  const groupsOf = (rows: readonly ObjectForExtending[]) => {
    if (rows !== cachedRows) {
      cachedRows = rows;
      cachedGroups = new Map();
      for (const row of rows) {
        const g = row[topKey];
        const keys = cachedGroups.get(g);
        if (keys) keys.push(rowKeyGetter(row));
        else cachedGroups.set(g, [rowKeyGetter(row)]);
      }
    }
    return cachedGroups;
  };

  const setWrapped: React.Dispatch<
    React.SetStateAction<ReadonlySet<string | number>>
  > = (next) => {
    setValue((prev) => {
      const raw = typeof next === 'function' ? next(prev) : next;
      const groups = groupsOf(flattenedRowsRef.current);
      const result = new Set(raw);
      for (const keys of groups.values()) {
        const added = keys.some((k) => raw.has(k) && !prev.has(k));
        const removed = keys.some((k) => !raw.has(k) && prev.has(k));
        if (added) keys.forEach((k) => result.add(k));
        else if (removed) keys.forEach((k) => result.delete(k));
      }
      return result;
    });
  };

  return {
    ...(selecting as object),
    state: [value, setWrapped],
  } as unknown as S;
}
