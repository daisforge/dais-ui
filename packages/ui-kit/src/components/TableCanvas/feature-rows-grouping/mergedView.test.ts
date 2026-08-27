import { describe, expect, it } from 'vitest';

import {
  createGroupPathValue,
  createTopGroupOrdinalGetter,
  flattenRowsByGroups,
  isMergedGroupingView,
  wrapMergedGroupSelecting,
} from './mergedView';
import type { RowsGrouping } from './types';

// Контракты merged-вида группировки: плоский порядок листьев, составной ключ
// пути, нумерация по верхнему уровню и групповой чекбокс (расширение дельты
// выделения до границ группы).

type Row = { id: number; dept: string; role: string };

const row = (id: number, dept: string, role: string): Row => ({
  id,
  dept,
  role,
});

const rows: Row[] = [
  row(1, 'IT', 'Dev'),
  row(2, 'HR', 'Rec'),
  row(3, 'IT', 'QA'),
  row(4, 'IT', 'Dev'),
  row(5, 'HR', 'Rec'),
];

describe('isMergedGroupingView — гейт активации', () => {
  const grouping = (view?: 'tree' | 'merged') =>
    ({ view } as RowsGrouping<Row, unknown>);

  it('true только при view merged И непустом groupBy', () => {
    expect(isMergedGroupingView(grouping('merged'), ['dept'])).toBe(true);
    expect(isMergedGroupingView(grouping('merged'), [])).toBe(false);
    expect(isMergedGroupingView(grouping('merged'), undefined)).toBe(false);
    expect(isMergedGroupingView(grouping('tree'), ['dept'])).toBe(false);
    expect(isMergedGroupingView(undefined, ['dept'])).toBe(false);
  });
});

describe('flattenRowsByGroups — плоский порядок листьев по группам', () => {
  it('группы идут по первому вхождению, листья внутри сохраняют входной порядок', () => {
    const flat = flattenRowsByGroups(rows, ['dept']);
    expect(flat.map((r) => r.id)).toEqual([1, 3, 4, 2, 5]);
  });

  it('второй уровень группирует внутри первого', () => {
    const flat = flattenRowsByGroups(rows, ['dept', 'role']);
    // IT: Dev (1, 4), QA (3); HR: Rec (2, 5).
    expect(flat.map((r) => r.id)).toEqual([1, 4, 3, 2, 5]);
  });

  it('пустой groupBy возвращает вход как есть', () => {
    expect(flattenRowsByGroups(rows, [])).toBe(rows);
  });
});

describe('createGroupPathValue — составной ключ пути', () => {
  it('одинаковое значение дочернего уровня в РАЗНЫХ родителях даёт разные ключи', () => {
    const value = createGroupPathValue<Row>(['dept', 'role'], 1);
    // Одинаковая роль Dev в разных отделах не должна сливаться.
    expect(value(row(1, 'IT', 'Dev'))).not.toEqual(value(row(2, 'HR', 'Dev')));
    // А в одном отделе — должна.
    expect(value(row(1, 'IT', 'Dev'))).toEqual(value(row(3, 'IT', 'Dev')));
  });

  it('глубина 0 различает только верхний уровень', () => {
    const value = createGroupPathValue<Row>(['dept', 'role'], 0);
    expect(value(row(1, 'IT', 'Dev'))).toEqual(value(row(3, 'IT', 'QA')));
    expect(value(row(1, 'IT', 'Dev'))).not.toEqual(value(row(2, 'HR', 'Dev')));
  });
});

describe('createTopGroupOrdinalGetter — нумерация групп верхнего уровня', () => {
  it('номер = порядок первого вхождения значения в видимом списке', () => {
    const flat = flattenRowsByGroups(rows, ['dept']);
    const rowsRef = { current: flat };
    const getOrdinal = createTopGroupOrdinalGetter<Row>('dept', rowsRef);
    expect(getOrdinal({ row: flat[0] as Row })).toBe(1); // IT
    expect(getOrdinal({ row: flat[3] as Row })).toBe(2); // HR
  });

  it('кэш по идентичности: замена массива пересчитывает номера', () => {
    const first = flattenRowsByGroups(rows, ['dept']);
    const rowsRef = { current: first };
    const getOrdinal = createTopGroupOrdinalGetter<Row>('dept', rowsRef);
    expect(getOrdinal({ row: row(2, 'HR', 'Rec') })).toBe(2);

    // HR теперь первая группа.
    rowsRef.current = [row(2, 'HR', 'Rec'), row(1, 'IT', 'Dev')];
    expect(getOrdinal({ row: row(2, 'HR', 'Rec') })).toBe(1);
  });
});

// --- Групповой чекбокс -------------------------------------------------------

type SetAction = React.SetStateAction<ReadonlySet<string | number>>;

/** Прогоняет обёрнутый сеттер и возвращает результат применения к prev. */
function applyWrapped(
  prev: ReadonlySet<number>,
  next: SetAction,
  flat: readonly Row[],
): ReadonlySet<string | number> {
  let result: ReadonlySet<string | number> = new Set();
  const setValue = (updater: SetAction) => {
    result =
      typeof updater === 'function'
        ? updater(prev as ReadonlySet<string | number>)
        : updater;
  };
  const selecting = {
    state: [prev, setValue],
    rowKeyGetter: (r: Row) => r.id,
  };
  const wrapped = wrapMergedGroupSelecting(selecting, 'dept', {
    current: flat,
  }) as typeof selecting;
  (wrapped.state[1] as (n: SetAction) => void)(next);
  return result;
}

describe('wrapMergedGroupSelecting — групповой чекбокс merged-вида', () => {
  const flat = flattenRowsByGroups(rows, ['dept']); // IT: 1,3,4; HR: 2,5

  it('тоггл одной строки группы выделяет всю группу', () => {
    const result = applyWrapped(
      new Set(),
      (prev) => new Set([...prev, 1]),
      flat,
    );
    expect([...result].sort()).toEqual([1, 3, 4]);
  });

  it('снятие одной строки снимает всю группу', () => {
    const result = applyWrapped(
      new Set([1, 3, 4]),
      (prev) => {
        const next = new Set(prev);
        next.delete(3);
        return next;
      },
      flat,
    );
    expect(result.size).toBe(0);
  });

  it('«выделить всё» выделяет все группы целиком', () => {
    const result = applyWrapped(new Set(), new Set([1, 2, 3, 4, 5]), flat);
    expect(result.size).toBe(5);
  });

  it('«сбросить» снимает всё', () => {
    const result = applyWrapped(new Set([1, 3, 4, 2, 5]), new Set(), flat);
    expect(result.size).toBe(0);
  });

  it('дельта другой группы не трогает соседнюю', () => {
    const result = applyWrapped(
      new Set([1, 3, 4]),
      (prev) => new Set([...prev, 2]),
      flat,
    );
    expect([...result].sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it('quirk: added и removed в ОДНОЙ группе одновременно — побеждает added', () => {
    // В одной дельте строка 1 снята, строка 3 добавлена: обёртка видит и
    // добавление, и снятие в группе IT; ветка added идёт первой.
    const result = applyWrapped(new Set([1]), new Set([3]), flat);
    expect([...result].sort()).toEqual([1, 3, 4]);
  });

  it('унаследованное частичное выделение БЕЗ дельты не чинится', () => {
    // Извне пришло полу-выделение группы (1 из IT). Дельты нет — обёртка не
    // достраивает группу. Фиксируем текущее поведение (важно для будущего
    // indeterminate-состояния чекбокса).
    const partial = new Set([1]);
    const result = applyWrapped(partial, (prev) => new Set(prev), flat);
    expect([...result]).toEqual([1]);
  });

  it('форма selecting сохраняется: value тот же, подменяется только сеттер', () => {
    const prev = new Set<number>();
    const setValue = () => undefined;
    const selecting = {
      state: [prev, setValue],
      rowKeyGetter: (r: Row) => r.id,
      extraProp: 'x',
    };
    const wrapped = wrapMergedGroupSelecting(selecting, 'dept', {
      current: flat,
    }) as typeof selecting;
    expect(wrapped.state[0]).toBe(prev);
    expect(wrapped.state[1]).not.toBe(setValue);
    expect(wrapped.extraProp).toBe('x');
  });
});
