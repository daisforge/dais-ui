/* eslint-disable no-underscore-dangle */
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  type SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { type CSSProperties, useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Copy-Paste-Fill/Объединение ячеек',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

const SELECTION_MODE_OPTIONS: Array<{
  label: string;
  value: CellsSelectionMode;
}> = [
  { label: 'cell', value: 'cell' },
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'disabled', value: 'disabled' },
];

const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: Array<{
  label: string;
  value: HighlightActiveType;
}> = [
  { label: 'row', value: 'row' },
  { label: 'disabled', value: 'disabled' },
];

// Базовый rowSpan: role/dept ПОВТОРЯЮТСЯ в данных по блоку из 3 строк (объединение —
// чистый UI-фасад над повторяющимися значениями), period/plan/fact — свои у строки.
export const RowSpanBasic: Story = {
  name: 'Базовый rowSpan (повторяющиеся данные)',
  render: () => {
    type MRow = {
      id: number;
      role: string;
      dept: string;
      period: string;
      plan: number;
      fact: number;
    };
    const GROUPS = [
      { role: 'Аналитик', dept: 'Отдел A' },
      { role: 'Разработчик', dept: 'Отдел B' },
      { role: 'Тестировщик', dept: 'Отдел C' },
      { role: 'Менеджер', dept: 'Отдел D' },
    ];
    const PERIODS = ['Q1', 'Q2', 'Q3'];
    const initialRows: MRow[] = [];
    let counter = 1;
    for (const g of GROUPS) {
      for (const p of PERIODS) {
        initialRows.push({
          id: counter,
          role: g.role,
          dept: g.dept,
          period: p,
          plan: counter * 10,
          fact: counter * 8,
        });
        counter += 1;
      }
    }

    const [rows, setRows] = useState<MRow[]>(initialRows);
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('disabled');

    // Блок = 3 строки одной группы. Диапазон ОДИНАКОВ для всех ячеек блока.
    const rowSpanByThree = (rowInd: number): readonly [number, number] => {
      const start = Math.floor(rowInd / 3) * 3;
      return [start, start + 2];
    };

    const columns = useMemo<readonly ColumnConfig<MRow>[]>(
      () => [
        {
          key: 'role',
          name: 'Роль (merge ×3)',
          width: 220,
          rowSpan: (ci) => rowSpanByThree(ci.rowInd),
        },
        {
          key: 'dept',
          name: 'Отдел (custom + merge ×3)',
          width: 220,
          rowSpan: (ci) => rowSpanByThree(ci.rowInd),
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              padding={8}
              alignItems="center"
              justifyContent="center"
            >
              <Canvas.Text color={theme.textDark}>{row.dept}</Canvas.Text>
            </Canvas.Container>
          ),
          copyData: (row) => row.dept,
        },
        {
          key: 'period',
          name: 'Период',
          width: 120,
          editingCell: { component: 'inputString' },
        },
        {
          key: 'plan',
          name: 'План',
          width: 120,
          editingCell: { component: 'inputNumber' },
        },
        {
          key: 'fact',
          name: 'Факт',
          width: 120,
          editingCell: { component: 'inputNumber' },
        },
      ],
      [],
    );

    return (
      <div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
          <label>
            Режим выделения:{' '}
            <select
              value={selectionMode}
              onChange={(e) =>
                setSelectionMode(e.target.value as CellsSelectionMode)
              }
            >
              {SELECTION_MODE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Highlight active:{' '}
            <select
              value={highlightActiveType}
              onChange={(e) =>
                setHighlightActiveType(e.target.value as HighlightActiveType)
              }
            >
              {HIGHLIGHT_ACTIVE_TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <b>Роль</b> и <b>Отдел</b> слиты блоками по 3 строки. Значения РЕАЛЬНО
          повторяются в данных (Аналитик×3, Отдел A×3) — объединение только
          UI-фасад, скрытых других значений нет. Период/План/Факт — свои у строки.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            highlightActiveType,
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            cellsSelection: {
              mode: selectionMode,
              enableColumnSelection: true,
            },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
            },
            resizableColumn: true,
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// Colspan: строки-заголовки секций, первая колонка спанит всю ширину.
export const Colspan: Story = {
  name: 'Colspan (заголовок секции на всю ширину)',
  render: () => {
    type MRow = {
      id: number;
      kind: 'header' | 'data';
      label: string;
      a: string;
      b: string;
    };
    const initialRows: MRow[] = [];
    let id = 1;
    for (let s = 0; s < 3; s += 1) {
      initialRows.push({
        id: id++,
        kind: 'header',
        label: `Секция ${s + 1}`,
        a: '',
        b: '',
      });
      for (let r = 0; r < 3; r += 1) {
        initialRows.push({
          id: id++,
          kind: 'data',
          label: `Строка ${r + 1}`,
          a: `A${s}${r}`,
          b: `B${s}${r}`,
        });
      }
    }

    const [rows, setRows] = useState<MRow[]>(initialRows);

    const columns: readonly ColumnConfig<MRow>[] = [
      {
        key: 'label',
        name: 'Заголовок / Строка',
        width: 220,
        // header-строка: colSpan=2 → спан 3 колонки (label, a, b).
        colSpan: (ci) => (ci.row.kind === 'header' ? 2 : 0),
        editingCell: { component: 'inputString' },
        renderCell: ({ row, theme }) => (
          <Canvas.Container padding={8} alignItems="center">
            <Canvas.Text color={theme.textDark}>{row.label}</Canvas.Text>
          </Canvas.Container>
        ),
      },
      {
        key: 'a',
        name: 'A',
        width: 200,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'b',
        name: 'B',
        width: 200,
        editingCell: { component: 'inputString' },
      },
    ];

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Строки-заголовки секций: первая колонка через <code>colSpan</code>{' '}
          спанит все 3 колонки. Данные-строки — обычные. Редактирование/протяжка/
          копирование включены — проверяем overlay-редактор и перенос на merged.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// Прямоугольный блок: colSpan + rowSpan на ОДНОЙ origin-ячейке = блок cols×rows.
export const Rectangular: Story = {
  name: 'Прямоугольный блок (colSpan + rowSpan)',
  render: () => {
    type MRow = { id: number; a: string; b: string; c: string; d: string };
    const initialRows: MRow[] = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      a: `A·${i}`,
      b: `B·${i}`,
      c: `C·${i}`,
      d: `D·${i}`,
    }));

    const [rows, setRows] = useState<MRow[]>(initialRows);
    // Снимок «сохранённого» состояния: отмена = потребитель откатывает свой стейт.
    const savedRef = useRef<MRow[]>(initialRows);

    // Блок 2×3: колонки A,B × строки 1..3. На origin-колонке 'a' для этих строк:
    // colSpan=1 (2 колонки A,B) + rowSpan=[1,3] (3 строки).
    const inBlock = (rowInd: number) => rowInd >= 1 && rowInd <= 3;

    const columns: readonly ColumnConfig<MRow>[] = [
      {
        key: 'a',
        name: 'A (origin)',
        width: 160,
        colSpan: (ci) => (inBlock(ci.rowInd) ? 1 : 0),
        rowSpan: (ci) => (inBlock(ci.rowInd) ? [1, 3] : null),
        editingCell: { component: 'inputString' },
        renderCell: ({ row, rowInd, theme }) => (
          <Canvas.Container
            padding={8}
            alignItems="center"
            justifyContent={inBlock(rowInd) ? 'center' : 'flex-start'}
          >
            <Canvas.Text color={theme.textDark}>
              {inBlock(rowInd) ? 'Блок 2×3' : row.a}
            </Canvas.Text>
          </Canvas.Container>
        ),
      },
      {
        key: 'b',
        name: 'B',
        width: 160,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'c',
        name: 'C',
        width: 160,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'd',
        name: 'D',
        width: 160,
        editingCell: { component: 'inputString' },
      },
    ];

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Прямоугольный блок 2×3 (колонки A,B × строки 2–4) — через{' '}
          <code>colSpan</code> + <code>rowSpan</code> на origin-ячейке A.
          Редактирование/протяжка/копирование включены — проверяем overlay на
          блоке и перенос.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
              // Отмена/сохранение данных — на стороне потребителя: снимок при
              // входе, восстановление по «Отменить», фиксация по «Сохранить».
              onEnableEditing: (enable) => {
                savedRef.current = rows;
                enable();
              },
              onCancel: (disable) => {
                setRows(savedRef.current);
                disable();
              },
              onSave: (disable) => {
                savedRef.current = rows;
                disable();
              },
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// Авто-объединение через tableConfig.spanCells.spanBy: обёртка САМА объединяет
// колонки role/dept по подряд идущим одинаковым значениям в текущем видимом
// порядке (run-map O(n) на смену данных, lookup O(1)). Sort/filter — ВСТРОЕННЫЕ,
// и блоки пересобираются сами. Никакого ручного предпосчёта и manualSorting: в
// колонках role/dept НЕТ rowSpan, всё делает spanBy. Данные не мутируются.
export const DerivedGroupingSortFilter: Story = {
  name: 'spanBy: авто-объединение по значению + сортировка/фильтр',
  render: () => {
    type GRow = {
      id: number;
      role: string;
      dept: string;
      person: string;
      plan: number;
    };
    const GROUPS = [
      { role: 'Аналитик', dept: 'Отдел A' },
      { role: 'Разработчик', dept: 'Отдел B' },
      { role: 'Тестировщик', dept: 'Отдел C' },
      { role: 'Менеджер', dept: 'Отдел D' },
    ];
    const ALL: GRow[] = [];
    let counter = 1;
    for (const g of GROUPS) {
      for (let p = 0; p < 3; p += 1) {
        ALL.push({
          id: counter,
          role: g.role,
          dept: g.dept,
          person: `Сотрудник ${counter}`,
          plan: (13 - counter) * 5,
        });
        counter += 1;
      }
    }

    const sortState = useState<readonly SortColumn[]>([]);
    const filteringState = useState<{ role: string }>({ role: 'Все' });

    const columns: readonly ColumnConfig<GRow>[] = [
      {
        key: 'role',
        name: 'Роль (spanBy)',
        width: 260,
        sortingType: 'stringSort',
        filtering: {
          component: 'select',
          keyInFilterState: 'role',
          valueInRow: (r) => r.role,
          selectOptions: {
            type: 'constant',
            options: [
              { value: 'Все', text: 'Все' },
              ...GROUPS.map((g) => ({ value: g.role, text: g.role })),
            ],
          },
          filter: {
            typeOfValue: 'single',
            filteringType: (fv, rv) => fv === 'Все' || rv === fv,
          },
        },
      },
      { key: 'dept', name: 'Отдел (spanBy)', width: 260, sortingType: 'stringSort' },
      { key: 'person', name: 'Сотрудник', width: 170 },
      { key: 'plan', name: 'План', width: 110, sortingType: 'numberSort' },
    ];

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <code>spanCells.spanBy: [&apos;role&apos;, &apos;dept&apos;]</code> —
          обёртка сама объединяет эти колонки по подряд идущим одинаковым
          значениям. Отсортируй по <b>Роль</b> → блоки соберутся; по <b>План</b> →
          роли перемешаются и блоки распадутся; фильтр по роли (в шапке колонки
          «Роль») → блоки сожмутся. Всё пересобирается САМО, без ручного кода в
          стори.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            spanCells: { spanBy: ['role', 'dept'] },
            sorting: { state: sortState },
            filtering: {
              state: filteringState,
              filtersInfo: { role: { label: 'Роль', clearedValue: 'Все' } },
            },
          }}
          columnConfig={columns}
          rows={ALL}
        />
      </div>
    );
  },
};

// spanBy + редактирование: правка значения ячейки перестраивает блоки (объединение
// derived из значения). Отредактируй «Регион» у origin-строки блока → блок разъедется.
// Больше данных (6 регионов × 4 строки) — виден масштаб и вложенность region/team.
export const SpanByWithEditing: Story = {
  name: 'spanBy + редактирование (правка перестраивает блоки)',
  render: () => {
    type ERow = { id: number; region: string; team: string; person: string };
    const REGIONS = ['Север', 'Юг', 'Запад', 'Восток', 'Центр', 'Урал'];
    const initial: ERow[] = [];
    let c = 1;
    for (const region of REGIONS) {
      for (let t = 0; t < 4; t += 1) {
        initial.push({
          id: c,
          region,
          team: `Команда ${Math.floor(t / 2) + 1}`,
          person: `Сотрудник ${c}`,
        });
        c += 1;
      }
    }

    const [rows, setRows] = useState<ERow[]>(initial);

    const columns: readonly ColumnConfig<ERow>[] = [
      {
        key: 'region',
        name: 'Регион (spanBy)',
        width: 220,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'team',
        name: 'Команда (spanBy)',
        width: 220,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'person',
        name: 'Сотрудник',
        width: 220,
        editingCell: { component: 'inputString' },
      },
    ];

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <code>spanBy: [&apos;region&apos;, &apos;team&apos;]</code>. Регион слит
          блоками по 4 строки, команда — по 2 (вложенно). Отредактируй значение
          «Регион» у верхней строки блока → блок разъедется, объединения
          пересоберутся из новых значений. Данные обычные, merge — только визуал.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            spanCells: { spanBy: ['region', 'team'] },
            cellsSelection: { mode: 'range-cell' },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// Controlled-список: объединения задаются ВНЕШНИМ стейтом spanCells.spans (id строк
// + ключи колонок) и управляются кнопками (re-merge на лету). Резолвится по
// ключам/id → переживает hide/reorder; при разрыве смежности (сортировка) регион
// не рисуется, как ограничения sort в Excel.
type CtlRegion = { rowIds: Array<string | number>; colKeys: string[] };

export const ControlledSpans: Story = {
  name: 'Controlled-список: внешнее управление merge (кнопки)',
  render: () => {
    type CRow = {
      id: number;
      dept: string;
      role: string;
      person: string;
      plan: number;
    };
    const GROUPS = [
      { dept: 'Отдел A', role: 'Аналитик', ids: [1, 2, 3] },
      { dept: 'Отдел B', role: 'Разработчик', ids: [4, 5, 6] },
      { dept: 'Отдел C', role: 'Тестировщик', ids: [7, 8, 9, 10] },
    ];
    const rows: CRow[] = [];
    for (const g of GROUPS) {
      for (const id of g.ids) {
        rows.push({
          id,
          dept: g.dept,
          role: g.role,
          person: `Сотрудник ${id}`,
          plan: (11 - id) * 5,
        });
      }
    }

    const [spans, setSpans] = useState<CtlRegion[]>([
      { rowIds: [1, 2, 3], colKeys: ['dept'] },
    ]);
    const [sort, setSort] = useState<readonly SortColumn[]>([]);

    const keyOf = (r: CtlRegion) => JSON.stringify(r);
    const toggle = (r: CtlRegion) =>
      setSpans((prev) =>
        prev.some((s) => keyOf(s) === keyOf(r))
          ? prev.filter((s) => keyOf(s) !== keyOf(r))
          : [...prev, r],
      );

    const columns: readonly ColumnConfig<CRow>[] = [
      { key: 'dept', name: 'Отдел', width: 180, sortingType: 'stringSort' },
      { key: 'role', name: 'Роль', width: 180, sortingType: 'stringSort' },
      { key: 'person', name: 'Сотрудник', width: 180 },
      { key: 'plan', name: 'План', width: 110, sortingType: 'numberSort' },
    ];

    const btn: CSSProperties = {
      padding: '4px 10px',
      cursor: 'pointer',
    };

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Объединения — во ВНЕШНЕМ стейте <code>spanCells.spans</code> (id строк +
          ключи колонок), управляются кнопками. Скрой/переставь колонку через
          шестерёнку — merge переживает (резолв по ключам). Отсортируй по{' '}
          <b>План</b> → регион с разбежавшимися строками перестаёт рисоваться (как
          ограничения sort в Excel).
        </p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
          <button
            type="button"
            style={btn}
            onClick={() => toggle({ rowIds: [1, 2, 3], colKeys: ['dept'] })}
          >
            Слить 1-3 (Отдел)
          </button>
          <button
            type="button"
            style={btn}
            onClick={() => toggle({ rowIds: [4, 5, 6], colKeys: ['dept'] })}
          >
            Слить 4-6 (Отдел)
          </button>
          <button
            type="button"
            style={btn}
            onClick={() =>
              toggle({ rowIds: [1, 2, 3], colKeys: ['dept', 'role'] })
            }
          >
            Прямоугольник 1-3 × Отдел+Роль
          </button>
          <button type="button" style={btn} onClick={() => setSpans([])}>
            Очистить
          </button>
        </div>
        <pre style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
          spans = {JSON.stringify(spans)}
        </pre>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            sorting: { state: [sort, setSort] },
            spanCells: { spans, rowKeyGetter: (r) => r.id },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};
