/* eslint-disable react-hooks/rules-of-hooks, no-bitwise */
import { StoryHint } from '@df-storybook/utils/StoryHint';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { Slider } from '@ui-kit/components/Slider';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { TextField } from '@ui-kit/components/TextField';
import React, {
  Profiler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

/**
 * Большой набор данных: до 1500 колонок и миллиона строк. Пример для проверки
 * производительности таблицы (выделение, скролл, сайдбар, редактирование) и
 * поведения фич на масштабе. Переключатели:
 *
 * - «объединение»: строки как дерево subRows с merged-колонками иерархии
 *   либо плоский список без subRows вообще;
 * - «тяжёлые ячейки»: renderCell с Canvas.Badge и контейнерами либо
 *   максимально дешёвый Canvas.Text;
 * - «редактирование»: режим редактирования с error-правилом на колонке Факт.
 *
 * Поверх таблицы HUD с метриками производительности (описание метрик — на
 * самой странице стори).
 */
const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CellsMerging',
  tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

type Node = {
  id: string;
  division?: string;
  unit?: string;
  team?: string;
  employee?: string;
  plan?: number;
  fact?: number;
  subRows?: Node[];
};

const SURNAMES = [
  'Иванов',
  'Петрова',
  'Сидоров',
  'Кузнецова',
  'Смирнов',
  'Попова',
  'Волков',
  'Морозова',
];

const DIVISIONS = 20;
const UNITS = 10;
const TEAMS = 5;
const BLOCKS = DIVISIONS * UNITS * TEAMS;

// Строим только нужное представление: дерево для merged-режима либо плоский
// список листьев с денормализованной иерархией. Оба сразу не держим, чтобы на
// сотнях тысяч строк не удваивать память.
function buildData(
  target: number,
  asTree: boolean,
): { rows: Node[]; leaves: number } {
  const perTeam = Math.max(1, Math.round(target / BLOCKS));
  let g = 0;
  let leaves = 0;
  const tree: Node[] = [];
  const flat: Node[] = [];
  for (let d = 0; d < DIVISIONS; d += 1) {
    const division = `Дивизион ${d + 1}`;
    const units: Node[] = [];
    for (let u = 0; u < UNITS; u += 1) {
      const unit = `Управление ${u + 1}`;
      const teams: Node[] = [];
      for (let t = 0; t < TEAMS; t += 1) {
        const team = `Команда ${t + 1}`;
        const employees: Node[] = [];
        for (let e = 0; e < perTeam; e += 1) {
          const plan = 500000 + ((g * 37) % 20) * 50000;
          const employee = `${SURNAMES[g % SURNAMES.length]} ${g + 1}`;
          const fact = Math.round(plan * (0.6 + ((g * 13) % 40) / 100));
          if (asTree) {
            employees.push({ id: `e${g}`, employee, plan, fact });
          } else {
            flat.push({
              id: `e${g}`,
              employee,
              plan,
              fact,
              division,
              unit,
              team,
            });
          }
          g += 1;
          leaves += 1;
        }
        if (asTree) {
          teams.push({ id: `d${d}u${u}t${t}`, team, subRows: employees });
        }
      }
      if (asTree) {
        units.push({ id: `d${d}u${u}`, unit, subRows: teams });
      }
    }
    if (asTree) {
      tree.push({ id: `d${d}`, division, subRows: units });
    }
  }
  return { rows: asTree ? tree : flat, leaves };
}

function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function cellNum(rowId: string, colIndex: number): number {
  return (hashStr(rowId) ^ Math.imul(colIndex + 1, 2654435761)) % 1000;
}

function badgeView(v: number): 'accent' | 'warning' | 'negative' | 'dark' {
  if (v > 750) return 'accent';
  if (v > 500) return 'warning';
  if (v > 250) return 'dark';
  return 'negative';
}

function buildColumns(
  measureCount: number,
  heavyCells: boolean,
  withEditing: boolean,
): ColumnConfig<Node>[] {
  // Правило ошибки для режима редактирования: факт сильно ниже плана.
  const factError = withEditing
    ? {
        error: {
          value: (r: Node) => (r.fact ?? 0) < (r.plan ?? 0) * 0.7,
        },
      }
    : {};
  const base: ColumnConfig<Node>[] = [
    { key: 'division', name: 'Дивизион', width: 150 },
    { key: 'unit', name: 'Управление', width: 150 },
    { key: 'team', name: 'Команда', width: 140 },
    { key: 'employee', name: 'Сотрудник', width: 180 },
    {
      key: 'plan',
      name: 'План',
      width: 120,
      contentFormat: 'number',
      ...(withEditing && {
        editingCell: { component: 'inputNumber' as const },
      }),
    },
    {
      key: 'fact',
      name: 'Факт',
      width: 120,
      contentFormat: 'number',
      ...(withEditing && {
        editingCell: { component: 'inputNumber' as const, ...factError },
      }),
    },
  ];

  const measures: ColumnConfig<Node>[] = Array.from(
    { length: measureCount },
    (_, i) => {
      const col: ColumnConfig<Node> = {
        key: `m${i}`,
        name: `M${i + 1}`,
        width: 84,
      };
      if (!heavyCells) {
        // Дешёвая ячейка: один Canvas.Text без контейнеров и бейджей.
        col.renderCell = ({ row }) => (
          <Canvas.Text>{row?.id ? String(cellNum(row.id, i)) : ''}</Canvas.Text>
        );
        return col;
      }
      const kind = i % 4;
      if (kind === 0) {
        col.renderCell = ({ row }) => (
          <Canvas.Container justifyContent="center" alignItems="center">
            <Canvas.Text>
              {row?.id ? String(cellNum(row.id, i)) : ''}
            </Canvas.Text>
          </Canvas.Container>
        );
      } else if (kind === 1) {
        col.renderCell = ({ row }) => {
          const v = row?.id ? cellNum(row.id, i) : 0;
          return (
            <Canvas.Container justifyContent="center" alignItems="center">
              <Canvas.Badge pilled view={badgeView(v)} text={String(v)} />
            </Canvas.Container>
          );
        };
      } else if (kind === 2) {
        col.renderCell = ({ row, theme }) => (
          <Canvas.Container
            justifyContent="flex-end"
            alignItems="center"
            padding={{ right: theme.cellHorizontalPadding }}
          >
            <Canvas.Text>
              {row?.id ? `${cellNum(row.id, i) % 100}%` : ''}
            </Canvas.Text>
          </Canvas.Container>
        );
      } else {
        col.renderCell = ({ row, theme }) => (
          <Canvas.Container
            justifyContent="flex-start"
            alignItems="center"
            padding={{ left: theme.cellHorizontalPadding }}
          >
            <Canvas.Text>{row?.id ? 'метка' : ''}</Canvas.Text>
          </Canvas.Container>
        );
      }
      return col;
    },
  );
  return [...base, ...measures];
}

const fmt = (n: number) => n.toLocaleString('ru-RU');

// HUD живёт в отдельном компоненте со своим стейтом: его секундный тик не
// должен перерендеривать стори и таблицу (перерендер снаружи сбрасывает
// открытый редактор ячейки, пока getCellContent обёртки нестабилен).
function PerfHudBadge({
  commitsRef,
}: {
  commitsRef: React.MutableRefObject<number[]>;
}) {
  const [stats, setStats] = useState({
    fps: 0,
    commits: 0,
    avgMs: 0,
    maxMs: 0,
  });

  useEffect(() => {
    let frames = 0;
    let raf = 0;
    const loop = () => {
      frames += 1;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const iv = setInterval(() => {
      const arr = commitsRef.current;
      commitsRef.current = [];
      const sum = arr.reduce((a, b) => a + b, 0);
      setStats({
        fps: frames,
        commits: arr.length,
        avgMs: arr.length ? Math.round((sum / arr.length) * 10) / 10 : 0,
        maxMs: arr.length ? Math.round(Math.max(...arr) * 10) / 10 : 0,
      });
      frames = 0;
    }, 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(iv);
    };
  }, [commitsRef]);

  return (
    <span
      style={{
        fontFamily: 'monospace',
        padding: '4px 10px',
        borderRadius: 6,
        background: stats.fps < 40 ? '#ffe0e0' : '#e6f4ea',
      }}
    >
      FPS: <b>{stats.fps}</b> · коммитов/с: <b>{stats.commits}</b> · коммит
      сред: <b>{stats.avgMs} мс</b> · макс: <b>{stats.maxMs} мс</b>
    </span>
  );
}

export const BigDataExample: Story = {
  name: 'Большой набор данных (строки × колонки)',
  render: () => {
    const [cols, setCols] = useState(1000);
    const [rowInput, setRowInput] = useState('50000');
    const [rowTarget, setRowTarget] = useState(50000);
    const [withMerge, setWithMerge] = useState(true);
    const [heavyCells, setHeavyCells] = useState(true);
    const [withEditing, setWithEditing] = useState(false);
    // Правки пользователя поверх сгенерированных данных (режим редактирования).
    const [editedRows, setEditedRows] = useState<Node[] | null>(null);

    const commitsRef = useRef<number[]>([]);
    const onRender = useCallback(
      (_id: string, _phase: string, actualDuration: number) => {
        commitsRef.current.push(actualDuration);
      },
      [],
    );

    const { rows: builtRows, leaves } = useMemo(
      () => buildData(rowTarget, withMerge),
      [rowTarget, withMerge],
    );

    useEffect(() => {
      setEditedRows(null);
    }, [builtRows]);

    const dataRows = editedRows ?? builtRows;

    const columns = useMemo(
      () => buildColumns(cols, heavyCells, withEditing),
      [cols, heavyCells, withEditing],
    );

    const tableConfig = useMemo(
      () => ({
        containerStyle: { height: '70vh' },
        rowMarkers: { startIndex: 1 },
        resizableColumn: true,
        columnsControl: {
          enable: true,
          pinning: true,
          pinnedDefault: ['employee'],
        },
        ...(withMerge
          ? {
              subRows: {
                getSubRows: (row: Node) => row?.subRows,
                rowKeyGetter: (row: Node) => row.id,
                view: 'merged' as const,
                mergedColumns: ['division', 'unit', 'team'],
              },
            }
          : {}),
        ...(withEditing
          ? {
              editing: {
                onRowsChange: (next: Node[]) => setEditedRows(next),
                rowKeyGetter: (r: Node) => r.id,
              },
            }
          : {}),
      }),
      [withMerge, withEditing],
    );

    return (
      <div>
        <StoryHint>
          Пример на большом наборе данных: настройте число колонок и строк,
          включите нужные режимы и проверяйте выделение, скролл, сайдбар и
          редактирование. HUD справа показывает метрики производительности: FPS
          — кадров в секунду (ниже 40 подсвечивается красным); «коммитов/с» —
          сколько раз в секунду React перерендерил таблицу (при протяжке
          выделения каждый шаг мыши даёт один коммит); «коммит сред/макс» —
          среднее и максимальное время одного такого перерендера в
          миллисекундах, то есть цена реакции таблицы на одно действие.
        </StoryHint>

        <div
          style={{
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '8px 4px 12px',
            fontSize: 13,
          }}
        >
          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            Колонок: <b style={{ minWidth: 42 }}>{cols}</b>
            <div style={{ width: 220 }}>
              <Slider
                value={cols}
                min={1}
                max={1500}
                onChangeCommitted={(value) => setCols(value)}
              />
            </div>
          </span>

          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            Строк:
            <div style={{ width: 130 }}>
              <TextField
                value={rowInput}
                type="number"
                size="s"
                onChange={(e) => setRowInput(e.target.value)}
              />
            </div>
            <Button
              size="s"
              view="secondary"
              onClick={() => setRowTarget(Math.max(1, Number(rowInput) || 1))}
            >
              Построить
            </Button>
            <span style={{ opacity: 0.75 }}>
              (листьев: <b>{fmt(leaves)}</b>)
            </span>
          </span>

          <Checkbox
            label="объединение (subRows merged)"
            checked={withMerge}
            onChange={(e) => setWithMerge(e.target.checked)}
          />

          <Checkbox
            label="тяжёлые ячейки (Canvas.Badge)"
            checked={heavyCells}
            onChange={(e) => setHeavyCells(e.target.checked)}
          />

          <Checkbox
            label="редактирование (error-ячейки)"
            checked={withEditing}
            onChange={(e) => setWithEditing(e.target.checked)}
          />

          <PerfHudBadge commitsRef={commitsRef} />
        </div>

        <Profiler id="big-data-table" onRender={onRender}>
          <TableCanvas
            tableConfig={tableConfig}
            columnConfig={columns}
            rows={dataRows as Node[]}
          />
        </Profiler>
      </div>
    );
  },
};
