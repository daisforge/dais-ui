import { describe, expect, it } from 'vitest';

import { flatten } from '../handlers';
import { getRowSelectingInfo } from '../selecting-contexts';

// Регрессия: на дереве в 3+ уровня возврат галочки последнего потомка должен
// переселектить всех предков вплоть до корня, а снятие — снимать их. Раньше
// пересчёт предков шёл одним проходом по неизменяемому набору, поэтому корень
// не видел только что решённого промежуточного родителя и не подсвечивался.

type Row = { id: string; subRows?: Row[] };

const tree: Row[] = [
  {
    id: 'request',
    subRows: [
      {
        id: 'equipment',
        subRows: [{ id: 'laptops' }, { id: 'monitors' }],
      },
      {
        id: 'licenses',
        subRows: [{ id: 'ide' }, { id: 'os' }],
      },
    ],
  },
];

const ALL_IDS = [
  'equipment',
  'ide',
  'laptops',
  'licenses',
  'monitors',
  'os',
  'request',
];

const rowKeyGetter = (r: Row) => r.id;

// то же построение плоского списка, что и в useSelectRow.ts
const flattenedRows = flatten(
  tree,
  (r) => r?.subRows,
  (r) => r,
);
const flattenedRowsMap = new Map(
  flattenedRows.map((r) => [rowKeyGetter(r as Row), r]),
);

const byId = new Map<string, Row>();
const collect = (rows: Row[]) => {
  rows.forEach((r) => {
    byId.set(r.id, r);
    if (r.subRows) collect(r.subRows);
  });
};
collect(tree);

// имитируем клик по чекбоксу строки: дёргаем реальный onChange и возвращаем
// новый набор выбранных
const clickRow = (
  id: string,
  selectedRows: ReadonlySet<string | number>,
): ReadonlySet<string | number> => {
  let next = selectedRows;
  const setSelectedRows = (
    updater:
      | ReadonlySet<string | number>
      | ((prev: ReadonlySet<string | number>) => ReadonlySet<string | number>),
  ) => {
    next = typeof updater === 'function' ? updater(selectedRows) : updater;
  };

  const ctx = {
    row: byId.get(id),
    ctxs: {
      selectingRowCtx: {
        flattenedRowsArrAndMap: { flattenedRows, flattenedRowsMap },
        selectingRowConfig: {
          selectingRowsIsActive: true,
          selectingRules: { levels: 'all' },
        },
        selectedRows,
        setSelectedRows,
        rowKeyGetter,
        rowsGroupingIsActive: false,
      },
    },
  };

  getRowSelectingInfo(ctx as never).onChange();
  return next;
};

describe('переселект предков при возврате/снятии потомка (дерево 3+ уровня)', () => {
  it('клик по корню выделяет всё дерево', () => {
    const selected = clickRow('request', new Set());
    expect([...selected].sort()).toEqual([...ALL_IDS].sort());
  });

  it('снятие листа снимает всех его предков до корня', () => {
    const all = clickRow('request', new Set());
    const afterUncheck = clickRow('monitors', all);

    expect(afterUncheck.has('monitors')).toBe(false);
    expect(afterUncheck.has('equipment')).toBe(false);
    expect(afterUncheck.has('request')).toBe(false);
    // соседняя ветка не тронута
    expect(afterUncheck.has('laptops')).toBe(true);
    expect(afterUncheck.has('licenses')).toBe(true);
    expect([...afterUncheck].sort()).toEqual([
      'ide',
      'laptops',
      'licenses',
      'os',
    ]);
  });

  it('возврат листа переселектит всех предков, включая корень', () => {
    const all = clickRow('request', new Set());
    const afterUncheck = clickRow('monitors', all);
    const afterRecheck = clickRow('monitors', afterUncheck);

    // это и есть баг до фикса: корень оставался невыбранным
    expect(afterRecheck.has('equipment')).toBe(true);
    expect(afterRecheck.has('request')).toBe(true);
    expect([...afterRecheck].sort()).toEqual([...ALL_IDS].sort());
  });
});
