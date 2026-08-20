import type { ObjectForExtending } from '../types/utils.type';
import { rowGrouper } from './data-handlers';
import type { RowsGrouping } from './types';

/**
 * Вид отображения группировки «merged»: вместо дерева с шевронами — плоские
 * строки, где колонки уровней группировки слиты вертикально по границам своих
 * групп (внутренний merge по составному ключу пути). Хелперы этого модуля
 * обслуживают порядок строк, блоки, нумерацию групп и групповой чекбокс.
 */

/** Разделитель значений в составном ключе пути (не встречается в данных). */
const GROUP_PATH_SEP = String.fromCharCode(1);

export const isMergedGroupingView = <
  RowType extends ObjectForExtending,
  SummaryRowType,
>(
  rowsGrouping: RowsGrouping<RowType, SummaryRowType> | undefined,
  groupByArr: string[] | undefined,
): boolean => rowsGrouping?.view === 'merged' && (groupByArr?.length ?? 0) > 0;

/**
 * Плоский порядок листьев по группам: та же рекурсивная группировка, что у
 * tree-вида (rowGrouper, порядок групп = первое вхождение, листья сохраняют
 * входной порядок после сортировки), но без обёрток GroupRow.
 */
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

/**
 * Значение ячейки для merge уровня `depth`: составной ключ пути от корня.
 * Блок дочернего уровня рвётся на границе родителя (у «Разработчика» из разных
 * отделов разные ключи), в отличие от merge по «голому» значению.
 */
export function createGroupPathValue<RowType extends ObjectForExtending>(
  groupByArr: string[],
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

/**
 * Номер группы ВЕРХНЕГО уровня для нумерации строк: порядковый номер первого
 * вхождения значения в видимом списке. Кэш по идентичности массива строк.
 */
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

/**
 * Групповой чекбокс merged-вида: чекбокс-колонка слита по верхнему уровню, а
 * ось selecting тогглит одну строку (origin). Обёртка сеттера расширяет ЛЮБУЮ
 * дельту выделения до границ группы: тогглнулась строка группы — тогглится вся
 * группа. Заодно делает групповыми «выделить всё» и «Сбросить».
 *
 * Дженерик ключа строки (RowIdType) внутри сужен до string | number — форма
 * state/rowKeyGetter совпадает, поэтому кастуем локально и возвращаем S как есть.
 */
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

  const setWrapped: React.Dispatch<
    React.SetStateAction<ReadonlySet<string | number>>
  > = (next) => {
    setValue((prev) => {
      const raw = typeof next === 'function' ? next(prev) : next;
      const groups = new Map<unknown, Array<string | number>>();
      for (const row of flattenedRowsRef.current) {
        const g = row[topKey];
        const keys = groups.get(g);
        if (keys) keys.push(rowKeyGetter(row));
        else groups.set(g, [rowKeyGetter(row)]);
      }
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
