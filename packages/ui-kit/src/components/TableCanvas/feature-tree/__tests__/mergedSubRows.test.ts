import { describe, expect, it } from 'vitest';

import { TREE_ID_KEY, TREE_LVL_KEY } from '../constants';
import {
  flattenSubRowsToMergedLeaves,
  isMergedSubRowsView,
} from '../mergedSubRows';
import type { SubRows } from '../types';

// Контракты merged-вида subRows: дерево потребителя разворачивается в ЛИСТЬЯ с
// денормализацией значений предков в колонки mergedColumns; служебные
// tree-ключи не инжектятся (листья рендерятся как обычные строки).

type Node = {
  name: string;
  value?: number;
  children?: Node[];
  [key: string]: unknown;
};

const getSubRows = (n: Node) => n.children;

const tree: Node[] = [
  {
    name: 'IT',
    children: [
      {
        name: 'Dev',
        children: [
          { name: 'Alice', value: 1 },
          { name: 'Bob', value: 2 },
        ],
      },
      { name: 'QA', children: [{ name: 'Carol', value: 3 }] },
    ],
  },
  {
    name: 'HR',
    children: [{ name: 'Rec', children: [{ name: 'Dave', value: 4 }] }],
  },
];

describe('isMergedSubRowsView — гейт активации', () => {
  const sub = (view?: 'tree' | 'merged', mergedColumns?: string[]) =>
    ({ view, mergedColumns } as unknown as SubRows<Node, string>);

  it('true только при view merged И непустом mergedColumns', () => {
    expect(isMergedSubRowsView(sub('merged', ['dept']))).toBe(true);
    expect(isMergedSubRowsView(sub('merged', []))).toBe(false);
    expect(isMergedSubRowsView(sub('merged', undefined))).toBe(false);
    expect(isMergedSubRowsView(sub('tree', ['dept']))).toBe(false);
    expect(isMergedSubRowsView(undefined)).toBe(false);
  });
});

describe('flattenSubRowsToMergedLeaves — дерево в листья с денормализацией', () => {
  it('листья идут в порядке обхода, значения предков проштампованы в колонки уровней', () => {
    // Уровень 0 пишет name узла в dept, уровень 1 — в role.
    const leaves = flattenSubRowsToMergedLeaves(
      tree.map((n): Node => ({ ...n, dept: n.name })),
      (n) =>
        getSubRows(n as Node)?.map((c, i) => ({
          ...c,
          // Узел уровня 1 несёт role, лист — собственные поля.
          ...(c.children ? { role: c.name } : {}),
          __i: i,
        })) as Node[] | undefined,
      ['dept', 'role'],
    );

    expect(leaves.map((l) => l.name)).toEqual([
      'Alice',
      'Bob',
      'Carol',
      'Dave',
    ]);
    expect(leaves.map((l) => l['dept'])).toEqual(['IT', 'IT', 'IT', 'HR']);
    expect(leaves.map((l) => l['role'])).toEqual(['Dev', 'Dev', 'QA', 'Rec']);
  });

  it('узел без детей на верхнем уровне сам становится листом', () => {
    const leaves = flattenSubRowsToMergedLeaves(
      [{ name: 'Solo', dept: 'Ops' }] as Node[],
      getSubRows,
      ['dept'],
    );
    expect(leaves).toHaveLength(1);
    expect(leaves[0]?.name).toBe('Solo');
    expect(leaves[0]?.['dept']).toBe('Ops');
  });

  it('глубина больше mergedColumns: лишние уровни не штампуются, листья не теряются', () => {
    const deep: Node[] = [
      {
        name: 'A',
        dept: 'A',
        children: [
          {
            name: 'B',
            children: [{ name: 'C', children: [{ name: 'leaf', value: 7 }] }],
          },
        ],
      },
    ];
    const leaves = flattenSubRowsToMergedLeaves(deep, getSubRows, ['dept']);
    expect(leaves).toHaveLength(1);
    expect(leaves[0]?.name).toBe('leaf');
    expect(leaves[0]?.['dept']).toBe('A');
  });

  it('служебные tree-ключи в листья не инжектятся', () => {
    const leaves = flattenSubRowsToMergedLeaves(
      tree.map((n) => ({ ...n, dept: n.name })),
      getSubRows,
      ['dept'],
    );
    for (const leaf of leaves) {
      expect(leaf[TREE_ID_KEY]).toBeUndefined();
      expect(leaf[TREE_LVL_KEY]).toBeUndefined();
    }
  });

  it('штамп предка перетирает собственное поле листа при совпадении ключа', () => {
    const leaves = flattenSubRowsToMergedLeaves(
      [
        {
          name: 'IT',
          dept: 'IT',
          children: [{ name: 'child', dept: 'OWN' }],
        },
      ] as Node[],
      getSubRows,
      ['dept'],
    );
    // Лист раскладывается как {...node, ...stamp}: штамп предка ложится ПОВЕРХ
    // собственного поля листа. Фиксируем фактическое поведение: побеждает предок.
    expect(leaves[0]?.['dept']).toBe('IT');
  });
});
