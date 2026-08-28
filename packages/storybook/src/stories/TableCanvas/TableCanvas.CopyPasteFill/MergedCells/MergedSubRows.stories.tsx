import type { Meta, StoryObj } from '@storybook/react';
import {
  type ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { type CSSProperties, useMemo } from 'react';

/**
 * ИССЛЕДОВАНИЕ: объединение ячеек на основе ДЕРЕВА от бэка (subRows), а не
 * группировки по значениям. Одни и те же данные показаны двумя подходами —
 * это кандидаты на будущий `subRows.view: 'tree' | 'merged'`.
 *
 * Подход Y (нативное дерево subRows): каждый узел — своя строка, вложенность
 * через отступ + шеврон раскрытия. Это то, что subRows умеет сейчас.
 *
 * Подход X (merged-плоский): строки данных = только листья; колонки-предки
 * (категория/подкатегория/группа) подняты в объединённые ячейки, перекрывающие
 * свои листья. Одинаковые имена в разных ветках НЕ сливаются — ключ пути их
 * разделяет (как createGroupPathValue в merged-группировке).
 */
const meta: Meta = {
  title:
    'Локальные компоненты/TableCanvas/Copy-Paste-Fill/Объединение ячеек/SubRows (исследование)',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

const hintStyle: CSSProperties = {
  fontSize: 13,
  color: '#888',
  marginBottom: 8,
};

// Разделитель пути: управляющий символ, чтобы имена не могли случайно столкнуться.
const SEP = String.fromCharCode(1);

// ---------------------------------------------------------------------------
// Явное 4-уровневое дерево «от бэка»: категория -> подкатегория -> группа -> товар.
type TreeNode = {
  id: string;
  name: string;
  amount?: number; // сумма есть только у листьев (товаров)
  subRows?: TreeNode[];
};

const TREE: readonly TreeNode[] = [
  {
    id: 'A',
    name: 'Электроника',
    subRows: [
      {
        id: 'A1',
        name: 'Телефоны',
        subRows: [
          {
            id: 'A1a',
            name: 'Смартфоны',
            subRows: [
              { id: 'p1', name: 'iPhone 15', amount: 90000 },
              { id: 'p2', name: 'Galaxy S24', amount: 80000 },
            ],
          },
          {
            id: 'A1b',
            name: 'Кнопочные',
            subRows: [
              { id: 'p3', name: 'Nokia 105', amount: 1500 },
              { id: 'p4', name: 'Philips E2101', amount: 2000 },
            ],
          },
        ],
      },
      {
        id: 'A2',
        name: 'Ноутбуки',
        subRows: [
          {
            id: 'A2a',
            name: 'Игровые',
            subRows: [
              { id: 'p5', name: 'ASUS ROG', amount: 150000 },
              { id: 'p6', name: 'MSI Raider', amount: 200000 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'B',
    name: 'Одежда',
    subRows: [
      {
        id: 'B1',
        name: 'Верхняя',
        subRows: [
          {
            id: 'B1a',
            name: 'Куртки',
            // Тот же лист-набор имён, что в другой ветке НЕ конфликтует по пути.
            subRows: [
              { id: 'p7', name: 'Пуховик', amount: 12000 },
              { id: 'p8', name: 'Ветровка', amount: 5000 },
            ],
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Подход X: разворачиваем дерево в ЛИСТЬЯ, денормализуя путь предков на каждый лист.
type LeafRow = {
  id: string;
  cat: string;
  sub: string;
  grp: string;
  item: string;
  amount: number;
  // Ключи пути (учитывают предков) — по ним идёт merge, а не по «голому» имени.
  catPath: string;
  subPath: string;
  grpPath: string;
};

const flattenToLeaves = (
  nodes: readonly TreeNode[],
  path: readonly string[] = [],
): LeafRow[] => {
  const out: LeafRow[] = [];
  for (const n of nodes) {
    const p = [...path, n.name];
    if (n.subRows?.length) {
      out.push(...flattenToLeaves(n.subRows, p));
    } else {
      out.push({
        id: n.id,
        cat: p[0] ?? '',
        sub: p[1] ?? '',
        grp: p[2] ?? '',
        item: n.name,
        amount: n.amount ?? 0,
        catPath: p.slice(0, 1).join(SEP),
        subPath: p.slice(0, 2).join(SEP),
        grpPath: p.slice(0, 3).join(SEP),
      });
    }
  }
  return out;
};

// ---------------------------------------------------------------------------
// Подход Y: разворачиваем дерево в ПЛОСКИЙ список ВСЕХ узлов (pre-order). Каждый
// узел (и внутренний, и лист) — строка; колонки-уровни сливаются по пути, поэтому
// внутренний узел становится origin-строкой блока своего уровня (визуально «лесенка»).
type NodeRow = {
  id: string;
  cat: string;
  sub: string;
  grp: string;
  item: string;
  amount: number;
  catPath: string;
  subPath: string;
  grpPath: string;
};

const sumLeaves = (n: TreeNode): number =>
  n.subRows?.length
    ? n.subRows.reduce((s, c) => s + sumLeaves(c), 0)
    : n.amount ?? 0;

const flattenAllNodes = (
  nodes: readonly TreeNode[],
  path: readonly string[] = [],
): NodeRow[] => {
  const out: NodeRow[] = [];
  for (const n of nodes) {
    const p = [...path, n.name];
    const isLeaf = !n.subRows?.length;
    out.push({
      id: n.id,
      cat: p[0] ?? '',
      sub: p[1] ?? '',
      grp: p[2] ?? '',
      // Внутренние узлы товара не имеют; имя листа — в колонке «Товар».
      item: isLeaf ? n.name : '',
      // Листья — своя сумма; внутренние узлы — субтотал (сумма листьев поддерева).
      amount: sumLeaves(n),
      catPath: p.slice(0, 1).join(SEP),
      // Уровень, до которого узел не доходит, делаем уникальным (по id) — пустая
      // ячейка этого уровня остаётся одиночной и ни с чем не сливается.
      subPath: p.length >= 2 ? p.slice(0, 2).join(SEP) : n.id,
      grpPath: p.length >= 3 ? p.slice(0, 3).join(SEP) : n.id,
    });
    if (n.subRows?.length) {
      out.push(...flattenAllNodes(n.subRows, p));
    }
  }
  return out;
};

// ===========================================================================
// Подход X — merged-плоский: листья-строки, колонки-предки слиты по пути.
// (объявлен ниже; здесь идёт подход Y — лесенка со всеми узлами)

// ===========================================================================
// Подход Y — merged-лесенка: ВСЕ узлы строки, колонки-уровни слиты по пути.
export const SubRowsMergedStaircase: Story = {
  name: 'Подход Y: merged-лесенка (узлы-строки)',
  render: () => {
    const rows = useMemo(() => flattenAllNodes(TREE), []);

    const columns: readonly ColumnConfig<NodeRow>[] = [
      { key: 'cat', name: 'Категория', width: 150 },
      { key: 'sub', name: 'Подкатегория', width: 150 },
      { key: 'grp', name: 'Группа', width: 150 },
      { key: 'item', name: 'Товар', width: 180 },
      {
        key: 'amount',
        name: 'Сумма / субтотал',
        width: 160,
        contentFormat: 'number',
      },
    ];

    return (
      <div>
        <p style={hintStyle}>
          Все узлы дерева — строки (pre-order). Колонки-уровни слиты по ключу
          пути, поэтому внутренний узел (категория/подкатегория) становится
          origin-строкой блока своего уровня → «лесенка». Внутренние узлы несут
          субтотал в «Сумме». Полезно, когда у узлов есть собственные данные
          (итоги), которые надо показать отдельной строкой.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '60vh' },
            rowMarkers: { startIndex: 1 },
            mergeCells: {
              mergeByCellValues: [
                { colKey: 'cat', value: (r) => (r as NodeRow).catPath },
                { colKey: 'sub', value: (r) => (r as NodeRow).subPath },
                { colKey: 'grp', value: (r) => (r as NodeRow).grpPath },
              ],
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// ===========================================================================
// Ссылка — нативное дерево subRows (кандидат на view: 'tree'): узлы-строки, шеврон.
export const SubRowsAsTree: Story = {
  name: 'Ссылка: нативное дерево subRows (view tree)',
  render: () => {
    const columns = useMemo(
      (): readonly ColumnConfig<TreeNode>[] => [
        {
          key: 'name',
          name: 'Наименование',
          width: 320,
          // Одна колонка-иерархия: узел показывает своё имя на любом уровне,
          // с отступом и шевроном раскрытия.
          subRow: {
            keyOfColumnInSubRow: 'name',
            isColumnWithArrow: true,
          },
        },
        {
          key: 'amount',
          name: 'Сумма',
          width: 160,
          contentFormat: 'number',
          // У листьев сумма есть; у внутренних узлов — пусто.
          subRow: { keyOfColumnInSubRow: 'amount' },
        },
      ],
      [],
    );

    return (
      <div>
        <p style={hintStyle}>
          Дерево от бэка через <code>subRows.getSubRows</code>. Каждый узел —
          строка; вложенность отступом, раскрытие шевроном. Внутренние узлы
          (категории) видимы как строки. Это baseline «оставляем узлы строками».
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '60vh' },
            rowMarkers: { startIndex: 1 },
            subRows: {
              getSubRows: (row) => row?.subRows,
              rowKeyGetter: (row) => row.id,
            },
            resizableColumn: true,
          }}
          columnConfig={columns}
          rows={TREE as TreeNode[]}
        />
      </div>
    );
  },
};

// ===========================================================================
// Подход X — merged-плоский: листья-строки, колонки-предки слиты по пути.
export const SubRowsAsMerged: Story = {
  name: 'Подход X: merged-плоский (предки слиты)',
  render: () => {
    const rows = useMemo(() => flattenToLeaves(TREE), []);

    const columns: readonly ColumnConfig<LeafRow>[] = [
      { key: 'cat', name: 'Категория', width: 150 },
      { key: 'sub', name: 'Подкатегория', width: 150 },
      { key: 'grp', name: 'Группа', width: 150 },
      { key: 'item', name: 'Товар', width: 180 },
      {
        key: 'amount',
        name: 'Сумма',
        width: 140,
        contentFormat: 'number',
      },
    ];

    return (
      <div>
        <p style={hintStyle}>
          То же дерево, но плоско: строки = листья (товары), а колонки-предки
          подняты в объединённые ячейки. Merge идёт по КЛЮЧУ ПУТИ (
          <code>catPath / subPath / grpPath</code>), поэтому одинаковые имена в
          разных ветках не сливаются. Это кандидат на <code>view: 'merged'</code>.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '60vh' },
            rowMarkers: { startIndex: 1 },
            mergeCells: {
              mergeByCellValues: [
                { colKey: 'cat', value: (r) => (r as LeafRow).catPath },
                { colKey: 'sub', value: (r) => (r as LeafRow).subPath },
                { colKey: 'grp', value: (r) => (r as LeafRow).grpPath },
              ],
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};
