/* eslint-disable no-underscore-dangle, react-hooks/rules-of-hooks, no-restricted-syntax, no-plusplus, jsx-a11y/label-has-associated-control */
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { StoryHint } from '@df-storybook/utils/StoryHint';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Select } from '@ui-kit/components/Select';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  type MergedCellsRegion,
  type SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CellsMerging',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
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

const ROW_SPAN_BASIC_CODE = `
import { useMemo, useRef, useState } from 'react';
import { Select } from '@daisforge/ui/components/Select';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  role: string;
  dept: string;
  period: string;
  plan: number;
  fact: number;
};

// role/dept повторяются в данных блоками по 3 строки — объединение
// выводится из повторяющихся значений, данные не мутируются.
const GROUPS = [
  { role: 'Аналитик', dept: 'Отдел A' },
  { role: 'Разработчик', dept: 'Отдел B' },
  { role: 'Тестировщик', dept: 'Отдел C' },
  { role: 'Менеджер', dept: 'Отдел D' },
];
const PERIODS = ['Q1', 'Q2', 'Q3'];
const INITIAL_ROWS: Row[] = [];
let counter = 1;
for (const g of GROUPS) {
  for (const p of PERIODS) {
    INITIAL_ROWS.push({
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

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  const beforeEditRef = useRef(rows);
  const [selectionMode, setSelectionMode] =
    useState<CellsSelectionMode>('range-cell');
  const [highlightActiveType, setHighlightActiveType] =
    useState<HighlightActiveType>('disabled');

  const columns = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'role', name: 'Роль (merge ×3)', width: 220 },
      {
        key: 'dept',
        name: 'Отдел (custom + merge ×3)',
        width: 220,
        renderCell: ({ row, theme }) => (
          <Canvas.Container padding={8} alignItems="center" justifyContent="center">
            <Canvas.Text color={theme.textDark}>{row.dept}</Canvas.Text>
          </Canvas.Container>
        ),
        copyData: (row) => row.dept,
        // У canvas-колонок превью по умолчанию выключено — включаем явно.
        renderCellPreview: 'cellEditorAsPreview',
      },
      { key: 'period', name: 'Период', width: 120, editingCell: { component: 'inputString' } },
      { key: 'plan', name: 'План', width: 120, editingCell: { component: 'inputNumber' } },
      { key: 'fact', name: 'Факт', width: 120, editingCell: { component: 'inputNumber' } },
    ],
    [],
  );

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
        <Select
          target="textfield-like"
          label="Режим выделения"
          value={selectionMode}
          onChange={(v) => setSelectionMode(v as CellsSelectionMode)}
          items={SELECTION_MODE_OPTIONS}
        />
        <Select
          target="textfield-like"
          label="Highlight active"
          value={highlightActiveType}
          onChange={(v) => setHighlightActiveType(v as HighlightActiveType)}
          items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS}
        />
      </div>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '600px' },
          highlightActiveType,
          rowMarkers: { startIndex: 1 },
          columnsControl: { enable: true },
          rowSize: { default: 'medium', showInControl: true },
          fullScreenEnabled: true,
          mergeCells: { mergeByCellValues: ['role', 'dept'] },
          cellsSelection: { mode: selectionMode, enableColumnSelection: true },
          cellTransfer: { fillHandle: true },
          editing: {
            onRowsChange: setRows,
            rowKeyGetter: (r) => \`\${r.id}\`,
            onEnableEditing: (enable) => {
              beforeEditRef.current = rows;
              enable();
            },
            onCancel: (disable) => {
              setRows(beforeEditRef.current);
              disable();
            },
            onSave: (disable) => {
              disable();
            },
          },
          resizableColumn: true,
        }}
        columnConfig={columns}
        rows={rows}
      />
    </div>
  );
};
`;

// Базовый rowSpan: role/dept ПОВТОРЯЮТСЯ в данных по блоку из 3 строк (объединение —
// чистый UI-фасад над повторяющимися значениями), period/plan/fact — свои у строки.
export const RowSpanBasic: Story = {
  name: 'mergeByCellValues: объединение по значению',
  ...storySourceDoc({ code: ROW_SPAN_BASIC_CODE, type: 'code', previewSource: 'shown' }),
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
    const beforeEditRef = useRef(rows);
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('disabled');

    const columns = useMemo<readonly ColumnConfig<MRow>[]>(
      () => [
        {
          key: 'role',
          name: 'Роль (merge ×3)',
          width: 220,
        },
        {
          key: 'dept',
          name: 'Отдел (custom + merge ×3)',
          width: 220,
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
          // У canvas-колонок превью по умолчанию выключено — включаем явно.
          renderCellPreview: 'cellEditorAsPreview',
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
          <Select
            target="textfield-like"
            label="Режим выделения"
            value={selectionMode}
            onChange={(v) => setSelectionMode(v as CellsSelectionMode)}
            items={SELECTION_MODE_OPTIONS}
          />
          <Select
            target="textfield-like"
            label="Highlight active"
            value={highlightActiveType}
            onChange={(v) => setHighlightActiveType(v as HighlightActiveType)}
            items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS}
          />
        </div>

        <StoryHint>
          <b>Роль</b> и <b>Отдел</b> слиты блоками по 3 строки. Значения РЕАЛЬНО
          повторяются в данных (Аналитик×3, Отдел A×3) — объединение только
          UI-фасад, скрытых других значений нет. Период/План/Факт — свои у
          строки.
        </StoryHint>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            highlightActiveType,
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            fullScreenEnabled: true,
            mergeCells: { mergeByCellValues: ['role', 'dept'] },
            cellsSelection: {
              mode: selectionMode,
              enableColumnSelection: true,
            },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              onEnableEditing: (enable) => {
                beforeEditRef.current = rows;
                enable();
              },
              onCancel: (disable) => {
                setRows(beforeEditRef.current);
                disable();
              },
              onSave: (disable) => {
                disable();
              },
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

// Авто-объединение через tableConfig.mergeCells.mergeByCellValues: обёртка САМА объединяет
// колонки role/dept по подряд идущим одинаковым значениям в текущем видимом
// порядке (run-map O(n) на смену данных, lookup O(1)). Sort/filter — ВСТРОЕННЫЕ,
// и блоки пересобираются сами. Никакого ручного предпосчёта и manualSorting: в
// колонках role/dept НЕТ rowSpan, всё делает mergeByCellValues. Данные не мутируются.
const DERIVED_GROUPING_SORT_FILTER_CODE = `
import { useState } from 'react';
import {
  type ColumnConfig,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
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
const ALL: Row[] = [];
let counter = 1;
for (const g of GROUPS) {
  for (let p = 0; p < 3; p += 1) {
    ALL.push({
      id: counter,
      role: g.role,
      dept: g.dept,
      person: \`Сотрудник \${counter}\`,
      plan: (13 - counter) * 5,
    });
    counter += 1;
  }
}

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'role',
    name: 'Роль (mergeByCellValues)',
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
  {
    key: 'dept',
    name: 'Отдел (mergeByCellValues)',
    width: 260,
    sortingType: 'stringSort',
  },
  { key: 'person', name: 'Сотрудник', width: 170 },
  { key: 'plan', name: 'План', width: 110, sortingType: 'numberSort' },
];

export const Example = () => {
  const sortState = useState<readonly SortColumn[]>([]);
  const filteringState = useState<{ role: string }>({ role: 'Все' });

  // Обёртка сама объединяет role/dept по подряд идущим одинаковым значениям.
  // Sort/filter встроенные, блоки пересобираются автоматически.
  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '520px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: { mergeByCellValues: ['role', 'dept'] },
        sorting: { state: sortState },
        filtering: {
          state: filteringState,
          filtersInfo: { role: { label: 'Роль', clearedValue: 'Все' } },
        },
      }}
      columnConfig={columns}
      rows={ALL}
    />
  );
};
`;

export const DerivedGroupingSortFilter: Story = {
  name: 'mergeByCellValues: сортировка и фильтр',
  ...storySourceDoc({ code: DERIVED_GROUPING_SORT_FILTER_CODE, type: 'code', previewSource: 'shown' }),
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
        name: 'Роль (mergeByCellValues)',
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
      {
        key: 'dept',
        name: 'Отдел (mergeByCellValues)',
        width: 260,
        sortingType: 'stringSort',
      },
      { key: 'person', name: 'Сотрудник', width: 170 },
      { key: 'plan', name: 'План', width: 110, sortingType: 'numberSort' },
    ];

    return (
      <div>
        <StoryHint>
          <code>
            mergeCells.mergeByCellValues: [&apos;role&apos;, &apos;dept&apos;]
          </code>{' '}
          — обёртка сама объединяет эти колонки по подряд идущим одинаковым
          значениям. Отсортируй по <b>Роль</b> → блоки соберутся; по <b>План</b>{' '}
          → роли перемешаются и блоки распадутся; фильтр по роли (в шапке
          колонки «Роль») → блоки сожмутся. Всё пересобирается САМО, без ручного
          кода в стори.
        </StoryHint>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            fullScreenEnabled: true,
            mergeCells: { mergeByCellValues: ['role', 'dept'] },
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

// mergeByCellValues + редактирование: правка значения ячейки перестраивает блоки (объединение
// derived из значения). Отредактируй «Регион» у origin-строки блока → блок разъедется.
// Больше данных (6 регионов × 4 строки) — виден масштаб и вложенность region/team.
const SPAN_BY_WITH_EDITING_CODE = `
import { useRef, useState } from 'react';
import {
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = { id: number; region: string; team: string; person: string };

// 6 регионов × 4 строки: регион слит блоками по 4, команда — по 2 (вложенно).
const REGIONS = ['Север', 'Юг', 'Запад', 'Восток', 'Центр', 'Урал'];
const INITIAL_ROWS: Row[] = [];
let c = 1;
for (const region of REGIONS) {
  for (let t = 0; t < 4; t += 1) {
    INITIAL_ROWS.push({
      id: c,
      region,
      team: \`Команда \${Math.floor(t / 2) + 1}\`,
      person: \`Сотрудник \${c}\`,
    });
    c += 1;
  }
}

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'region',
    name: 'Регион (mergeByCellValues)',
    width: 220,
    editingCell: { component: 'inputString' },
  },
  {
    key: 'team',
    name: 'Команда (mergeByCellValues)',
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

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  const beforeEditRef = useRef(rows);

  // Правка значения перестраивает блоки: объединение derived из значения.
  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '600px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: { mergeByCellValues: ['region', 'team'] },
        cellsSelection: { mode: 'range-cell' },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: (r) => \`\${r.id}\`,
          onEnableEditing: (enable) => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: (disable) => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: (disable) => {
            disable();
          },
        },
      }}
      columnConfig={columns}
      rows={rows}
    />
  );
};
`;

export const SpanByWithEditing: Story = {
  name: 'mergeByCellValues: редактирование',
  ...storySourceDoc({ code: SPAN_BY_WITH_EDITING_CODE, type: 'code', previewSource: 'shown' }),
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
    const beforeEditRef = useRef(rows);

    const columns: readonly ColumnConfig<ERow>[] = [
      {
        key: 'region',
        name: 'Регион (mergeByCellValues)',
        width: 220,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'team',
        name: 'Команда (mergeByCellValues)',
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
        <StoryHint>
          <code>mergeByCellValues: [&apos;region&apos;, &apos;team&apos;]</code>
          . Регион слит блоками по 4 строки, команда — по 2 (вложенно).
          Отредактируй значение «Регион» у верхней строки блока → блок
          разъедется, объединения пересоберутся из новых значений. Данные
          обычные, merge — только визуал.
        </StoryHint>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            fullScreenEnabled: true,
            mergeCells: { mergeByCellValues: ['region', 'team'] },
            cellsSelection: { mode: 'range-cell' },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              onEnableEditing: (enable) => {
                beforeEditRef.current = rows;
                enable();
              },
              onCancel: (disable) => {
                setRows(beforeEditRef.current);
                disable();
              },
              onSave: (disable) => {
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

const MERGED_SELECT_EDITING_CODE = `
import { useRef, useState } from 'react';
import {
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  status: string;
  owner: string;
  priority: string;
  stage: string;
  task: string;
};

const STATUSES = ['В работе', 'Готово', 'Отменено', 'На паузе'];
const OWNERS = ['Иванов', 'Петров', 'Сидоров'];
const PRIORITIES = ['Высокий', 'Средний', 'Низкий'];
// Неслитый Select (per-row) — для проверки обычных ячеек рядом со слитыми.
const STAGES = ['Анализ', 'Разработка', 'Тест', 'Релиз'];

// Блоки разной высоты: 4 строки, 3 строки, 2 строки. Все три select-колонки
// слиты синхронно (одинаковые границы).
const INITIAL_ROWS: Row[] = [
  { id: 1, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Анализ', task: 'Задача 1' },
  { id: 2, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Разработка', task: 'Задача 2' },
  { id: 3, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Тест', task: 'Задача 3' },
  { id: 4, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Релиз', task: 'Задача 4' },
  { id: 5, status: 'Готово', owner: 'Петров', priority: 'Средний', stage: 'Анализ', task: 'Задача 5' },
  { id: 6, status: 'Готово', owner: 'Петров', priority: 'Средний', stage: 'Разработка', task: 'Задача 6' },
  { id: 7, status: 'Готово', owner: 'Петров', priority: 'Средний', stage: 'Тест', task: 'Задача 7' },
  { id: 8, status: 'Отменено', owner: 'Сидоров', priority: 'Низкий', stage: 'Анализ', task: 'Задача 8' },
  { id: 9, status: 'Отменено', owner: 'Сидоров', priority: 'Низкий', stage: 'Релиз', task: 'Задача 9' },
];

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'status',
    name: 'Статус — низ/лево',
    width: 220,
    // Выравнивание контента блока: вертикаль низ, горизонталь лево.
    mergedCellsAlign: { vertical: 'bottom', horizontal: 'left' },
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: STATUSES.map((s) => ({ text: s, value: s })),
      },
    },
  },
  {
    key: 'owner',
    name: 'Ответственный — низ/право',
    width: 220,
    mergedCellsAlign: { vertical: 'bottom', horizontal: 'right' },
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: OWNERS.map((s) => ({ text: s, value: s })),
      },
    },
  },
  {
    key: 'priority',
    name: 'Приоритет — центр/центр',
    width: 200,
    mergedCellsAlign: { vertical: 'center', horizontal: 'center' },
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: PRIORITIES.map((s) => ({ text: s, value: s })),
      },
    },
  },
  {
    key: 'stage',
    name: 'Этап (Select, НЕ слит)',
    width: 200,
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: STAGES.map((s) => ({ text: s, value: s })),
      },
    },
  },
  {
    key: 'task',
    name: 'Задача (текст, не слит)',
    width: 180,
    editingCell: { component: 'inputString' },
  },
];

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  const beforeEditRef = useRef(rows);

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '560px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: {
          mergeByCellValues: ['status', 'owner', 'priority'],
        },
        cellsSelection: { mode: 'range-cell' },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: (r) => \`\${r.id}\`,
          onEnableEditing: (enable) => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: (disable) => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: (disable) => {
            disable();
          },
        },
      }}
      columnConfig={columns}
      rows={rows}
    />
  );
};
`;

export const MergedSelectEditing: Story = {
  name: 'Select в объединённой ячейке',
  ...storySourceDoc({ code: MERGED_SELECT_EDITING_CODE, type: 'code', previewSource: 'shown' }),
  render: () => {
    type SRow = {
      id: number;
      status: string;
      owner: string;
      priority: string;
      stage: string;
      task: string;
    };
    const STATUSES = ['В работе', 'Готово', 'Отменено', 'На паузе'];
    const OWNERS = ['Иванов', 'Петров', 'Сидоров'];
    const PRIORITIES = ['Высокий', 'Средний', 'Низкий'];
    // Неслитый Select (per-row) — для проверки обычных ячеек рядом со слитыми.
    const STAGES = ['Анализ', 'Разработка', 'Тест', 'Релиз'];
    // Блоки разной высоты: 4 строки, 3 строки, 2 строки. Все три select-колонки
    // слиты синхронно (одинаковые границы), чтобы сравнить выравнивание на разной
    // высоте блока.
    const initial: SRow[] = [
      { id: 1, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Анализ', task: 'Задача 1' }, // prettier-ignore
      { id: 2, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Разработка', task: 'Задача 2' }, // prettier-ignore
      { id: 3, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Тест', task: 'Задача 3' }, // prettier-ignore
      { id: 4, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Релиз', task: 'Задача 4' }, // prettier-ignore
      { id: 5, status: 'Готово', owner: 'Петров', priority: 'Средний', stage: 'Анализ', task: 'Задача 5' }, // prettier-ignore
      { id: 6, status: 'Готово', owner: 'Петров', priority: 'Средний', stage: 'Разработка', task: 'Задача 6' }, // prettier-ignore
      { id: 7, status: 'Готово', owner: 'Петров', priority: 'Средний', stage: 'Тест', task: 'Задача 7' }, // prettier-ignore
      { id: 8, status: 'Отменено', owner: 'Сидоров', priority: 'Низкий', stage: 'Анализ', task: 'Задача 8' }, // prettier-ignore
      { id: 9, status: 'Отменено', owner: 'Сидоров', priority: 'Низкий', stage: 'Релиз', task: 'Задача 9' }, // prettier-ignore
    ];

    const [rows, setRows] = useState<SRow[]>(initial);
    const beforeEditRef = useRef(rows);

    const columns: readonly ColumnConfig<SRow>[] = [
      {
        key: 'status',
        name: 'Статус — низ/лево',
        width: 220,
        // Выравнивание контента блока: вертикаль низ, горизонталь лево.
        mergedCellsAlign: { vertical: 'bottom', horizontal: 'left' },
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: STATUSES.map((s) => ({ text: s, value: s })),
          },
        },
      },
      {
        key: 'owner',
        name: 'Ответственный — низ/право',
        width: 220,
        mergedCellsAlign: { vertical: 'bottom', horizontal: 'right' },
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: OWNERS.map((s) => ({ text: s, value: s })),
          },
        },
      },
      {
        key: 'priority',
        name: 'Приоритет — центр/центр',
        width: 200,
        mergedCellsAlign: { vertical: 'center', horizontal: 'center' },
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: PRIORITIES.map((s) => ({ text: s, value: s })),
          },
        },
      },
      {
        key: 'stage',
        name: 'Этап (Select, НЕ слит)',
        width: 200,
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: STAGES.map((s) => ({ text: s, value: s })),
          },
        },
      },
      {
        key: 'task',
        name: 'Задача (текст, не слит)',
        width: 180,
        editingCell: { component: 'inputString' },
      },
    ];

    return (
      <div>
        <StoryHint>
          Три Select-колонки слиты по значению (
          <code>
            mergeByCellValues: [&apos;status&apos;, &apos;owner&apos;,
            &apos;priority&apos;]
          </code>
          ), блоки высотой 4 / 3 / 2 строки. У каждой колонки своё{' '}
          <code>mergedCellsAlign</code>: «Статус» — низ/лево, «Ответственный» —
          низ/право, «Приоритет» — центр по обеим осям. Контент, уголок и превью
          редактора следуют выравниванию блока (низ → список открывается вверх).
          Колонки «Этап» (Select) и «Задача» (текст) — <b>не слиты</b>, для
          сравнения с обычными ячейками. В контрол-блоке — переключатель размера
          строки и полноэкранный режим.
        </StoryHint>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '560px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            fullScreenEnabled: true,
            mergeCells: {
              mergeByCellValues: ['status', 'owner', 'priority'],
            },
            cellsSelection: { mode: 'range-cell' },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              onEnableEditing: (enable) => {
                beforeEditRef.current = rows;
                enable();
              },
              onCancel: (disable) => {
                setRows(beforeEditRef.current);
                disable();
              },
              onSave: (disable) => {
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

const COLSPAN_CODE = `
import { useMemo, useRef, useState } from 'react';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  kind: 'header' | 'data';
  label: string;
  a: string;
  b: string;
};

// Инвариант блочной модели: данные под блоком одинаковы во ВСЕХ его ячейках.
// Блок показывает origin (левую верхнюю видимую ячейку), и при пине/реордере
// origin может переехать на другую колонку — заголовок должен остаться видимым.
const buildRows = (): Row[] => {
  const out: Row[] = [];
  let id = 1;
  for (let s = 0; s < 3; s += 1) {
    out.push({
      id: id++,
      kind: 'header',
      label: \`Секция \${s + 1}\`,
      a: \`Секция \${s + 1}\`,
      b: \`Секция \${s + 1}\`,
    });
    for (let r = 0; r < 3; r += 1) {
      out.push({
        id: id++,
        kind: 'data',
        label: \`Строка \${r + 1}\`,
        a: \`A\${s}\${r}\`,
        b: \`B\${s}\${r}\`,
      });
    }
  }
  return out;
};

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'label',
    name: 'Заголовок / Строка',
    width: 220,
    editingCell: { component: 'inputString' },
    renderCell: ({ row, theme }) => (
      <Canvas.Container padding={8} alignItems="center">
        <Canvas.Text color={theme.textDark}>{row.label}</Canvas.Text>
      </Canvas.Container>
    ),
    // У canvas-колонок превью по умолчанию выключено — включаем явно.
    renderCellPreview: 'cellEditorAsPreview',
  },
  { key: 'a', name: 'A', width: 200, editingCell: { component: 'inputString' } },
  { key: 'b', name: 'B', width: 200, editingCell: { component: 'inputString' } },
];

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(buildRows);
  const beforeEditRef = useRef(rows);

  // Заголовки секций через controlled-список regions: каждая header-строка
  // сливает все 3 колонки (label, a, b). Резолв по id строки.
  const regions = useMemo(
    () =>
      rows
        .filter((r) => r.kind === 'header')
        .map((r) => ({ rowKeys: [r.id], colKeys: ['label', 'a', 'b'] })),
    [rows],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '520px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: {
          mergedCellsRegions: regions,
          rowKeyGetter: (r) => r.id,
        },
        cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
        cellTransfer: { fillHandle: true },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: (r) => \`\${r.id}\`,
          onEnableEditing: (enable) => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: (disable) => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: (disable) => {
            disable();
          },
        },
      }}
      columnConfig={columns}
      rows={rows}
    />
  );
};
`;

// Colspan: строки-заголовки секций, первая колонка спанит всю ширину.
export const Colspan: Story = {
  name: 'mergedCellsRegions: заголовки секций',
  ...storySourceDoc({ code: COLSPAN_CODE, type: 'code', previewSource: 'shown' }),
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
      // Инвариант блочной модели: данные под блоком одинаковы во ВСЕХ его
      // ячейках. Блок показывает origin (левую верхнюю ВИДИМУЮ ячейку), и при
      // пине/реордере origin может переехать на другую колонку — заголовок
      // должен остаться видимым.
      initialRows.push({
        id: id++,
        kind: 'header',
        label: `Секция ${s + 1}`,
        a: `Секция ${s + 1}`,
        b: `Секция ${s + 1}`,
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
    const beforeEditRef = useRef(rows);

    // Заголовки секций через controlled-список regions: каждая header-строка
    // сливает все 3 колонки (label, a, b). Резолв по id строки.
    const regions = useMemo(
      () =>
        rows
          .filter((r) => r.kind === 'header')
          .map((r) => ({ rowKeys: [r.id], colKeys: ['label', 'a', 'b'] })),
      [rows],
    );

    const columns: readonly ColumnConfig<MRow>[] = [
      {
        key: 'label',
        name: 'Заголовок / Строка',
        width: 220,
        editingCell: { component: 'inputString' },
        renderCell: ({ row, theme }) => (
          <Canvas.Container padding={8} alignItems="center">
            <Canvas.Text color={theme.textDark}>{row.label}</Canvas.Text>
          </Canvas.Container>
        ),
        // У canvas-колонок превью по умолчанию выключено — включаем явно.
        renderCellPreview: 'cellEditorAsPreview',
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
        <StoryHint>
          Строки-заголовки секций слиты на всю ширину через{' '}
          <code>mergeCells.mergedCellsRegions</code> (список header-строк,
          colKeys — все колонки). Данные-строки — обычные.
          Редактирование/протяжка/копирование включены — проверяем
          overlay-редактор и перенос на merged.
        </StoryHint>
        <pre style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
          mergedCellsRegions = {JSON.stringify(regions)}
        </pre>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            fullScreenEnabled: true,
            mergeCells: {
              mergedCellsRegions: regions,
              rowKeyGetter: (r) => r.id,
            },
            cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              onEnableEditing: (enable) => {
                beforeEditRef.current = rows;
                enable();
              },
              onCancel: (disable) => {
                setRows(beforeEditRef.current);
                disable();
              },
              onSave: (disable) => {
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

const RECTANGULAR_CODE = `
import { useRef, useState } from 'react';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = { id: number; a: string; b: string; c: string; d: string };

const INITIAL_ROWS: Row[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  a: \`A·\${i}\`,
  b: \`B·\${i}\`,
  c: \`C·\${i}\`,
  d: \`D·\${i}\`,
}));

// Блок 2×3: колонки A,B × строки 2..4 (rowInd 1..3, id 2..4). Задаётся
// controlled-списком mergeCells.mergedCellsRegions (id строк + ключи колонок).
const inBlock = (rowInd: number) => rowInd >= 1 && rowInd <= 3;
const regions = [{ rowKeys: [2, 3, 4], colKeys: ['a', 'b'] }];

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'a',
    name: 'A (origin)',
    width: 160,
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
    // У canvas-колонок превью по умолчанию выключено — включаем явно.
    renderCellPreview: 'cellEditorAsPreview',
  },
  { key: 'b', name: 'B', width: 160, editingCell: { component: 'inputString' } },
  { key: 'c', name: 'C', width: 160, editingCell: { component: 'inputString' } },
  { key: 'd', name: 'D', width: 160, editingCell: { component: 'inputString' } },
];

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  // Снимок «сохранённого» состояния: отмена = потребитель откатывает свой стейт.
  const savedRef = useRef<Row[]>(INITIAL_ROWS);

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '520px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: {
          mergedCellsRegions: regions,
          rowKeyGetter: (r) => r.id,
        },
        cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
        cellTransfer: { fillHandle: true },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: (r) => \`\${r.id}\`,
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
  );
};
`;

// Прямоугольный блок cols×rows через controlled-список mergeCells.mergedCellsRegions.
export const Rectangular: Story = {
  name: 'mergedCellsRegions: прямоугольный блок',
  ...storySourceDoc({ code: RECTANGULAR_CODE, type: 'code', previewSource: 'shown' }),
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

    // Блок 2×3: колонки A,B × строки 2..4 (rowInd 1..3, id 2..4). Задаётся
    // controlled-списком mergeCells.mergedCellsRegions (id строк + ключи колонок).
    const inBlock = (rowInd: number) => rowInd >= 1 && rowInd <= 3;
    const regions = [{ rowKeys: [2, 3, 4], colKeys: ['a', 'b'] }];

    const columns: readonly ColumnConfig<MRow>[] = [
      {
        key: 'a',
        name: 'A (origin)',
        width: 160,
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
        // У canvas-колонок превью по умолчанию выключено — включаем явно.
        renderCellPreview: 'cellEditorAsPreview',
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
        <StoryHint>
          Прямоугольный блок 2×3 (колонки A,B × строки 2–4) — через{' '}
          <code>mergeCells.mergedCellsRegions</code> (id строк 2–4 + ключи
          колонок A,B). Редактирование/протяжка/копирование включены — проверяем
          overlay на блоке и перенос.
        </StoryHint>
        <pre style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
          mergedCellsRegions = {JSON.stringify(regions)}
        </pre>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            fullScreenEnabled: true,
            mergeCells: {
              mergedCellsRegions: regions,
              rowKeyGetter: (r) => r.id,
            },
            cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
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

// Controlled-список: объединения задаются ВНЕШНИМ стейтом mergeCells.mergedCellsRegions (id строк
// + ключи колонок) и управляются кнопками (re-merge на лету). Резолвится по
// ключам/id → переживает hide/reorder; при разрыве смежности (сортировка) регион
// не рисуется, как ограничения sort в Excel.
const CONTROLLED_SPANS_CODE = `
import { useState } from 'react';
import { Button } from '@daisforge/ui/components/Button';
import {
  type ColumnConfig,
  type MergedCellsRegion,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
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
const ROWS: Row[] = [];
for (const g of GROUPS) {
  for (const id of g.ids) {
    ROWS.push({
      id,
      dept: g.dept,
      role: g.role,
      person: \`Сотрудник \${id}\`,
      plan: (11 - id) * 5,
    });
  }
}

const columns: readonly ColumnConfig<Row>[] = [
  { key: 'dept', name: 'Отдел', width: 180, sortingType: 'stringSort' },
  { key: 'role', name: 'Роль', width: 180, sortingType: 'stringSort' },
  { key: 'person', name: 'Сотрудник', width: 180 },
  { key: 'plan', name: 'План', width: 110, sortingType: 'numberSort' },
];

export const Example = () => {
  // Объединения — во внешнем стейте: список регионов по id строк и ключам
  // колонок. Merge переживает hide/reorder (резолв по ключам); при разрыве
  // смежности (сортировка) регион не рисуется, как ограничения sort в Excel.
  const [regions, setRegions] = useState<MergedCellsRegion[]>([
    { rowKeys: [1, 2, 3], colKeys: ['dept'] },
  ]);
  const [sort, setSort] = useState<readonly SortColumn[]>([]);

  const keyOf = (r: MergedCellsRegion) => JSON.stringify(r);
  const toggle = (r: MergedCellsRegion) =>
    setRegions((prev) =>
      prev.some((s) => keyOf(s) === keyOf(r))
        ? prev.filter((s) => keyOf(s) !== keyOf(r))
        : [...prev, r],
    );

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
        <Button
          view="secondary"
          size="s"
          onClick={() => toggle({ rowKeys: [1, 2, 3], colKeys: ['dept'] })}
        >
          Слить 1-3 (Отдел)
        </Button>
        <Button
          view="secondary"
          size="s"
          onClick={() => toggle({ rowKeys: [4, 5, 6], colKeys: ['dept'] })}
        >
          Слить 4-6 (Отдел)
        </Button>
        <Button
          view="secondary"
          size="s"
          onClick={() => toggle({ rowKeys: [1, 2, 3], colKeys: ['dept', 'role'], mergedCellsAlign: { horizontal: 'center', vertical: 'center' } })}
        >
          Прямоугольник 1-3 × Отдел+Роль (центр)
        </Button>
        <Button view="secondary" size="s" onClick={() => setRegions([])}>
          Очистить
        </Button>
      </div>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '520px' },
          rowMarkers: { startIndex: 1 },
          columnsControl: { enable: true },
          rowSize: { default: 'medium', showInControl: true },
          fullScreenEnabled: true,
          sorting: { state: [sort, setSort] },
          mergeCells: {
            mergedCellsRegions: regions,
            rowKeyGetter: (r) => r.id,
          },
        }}
        columnConfig={columns}
        rows={ROWS}
      />
    </div>
  );
};
`;

export const ControlledSpans: Story = {
  name: 'mergedCellsRegions: управление кнопками',
  ...storySourceDoc({ code: CONTROLLED_SPANS_CODE, type: 'code', previewSource: 'shown' }),
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

    const [regions, setRegions] = useState<MergedCellsRegion[]>([
      { rowKeys: [1, 2, 3], colKeys: ['dept'] },
    ]);
    const [sort, setSort] = useState<readonly SortColumn[]>([]);

    const keyOf = (r: MergedCellsRegion) => JSON.stringify(r);
    const toggle = (r: MergedCellsRegion) =>
      setRegions((prev) =>
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

    return (
      <div>
        <StoryHint>
          Объединения — во ВНЕШНЕМ стейте{' '}
          <code>mergeCells.mergedCellsRegions</code> (id строк + ключи колонок),
          управляются кнопками. Скрой/переставь колонку через шестерёнку — merge
          переживает (резолв по ключам). Отсортируй по <b>План</b> → регион с
          разбежавшимися строками перестаёт рисоваться (как ограничения sort в
          Excel).
        </StoryHint>
        <div
          style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}
        >
          <Button
            view="secondary"
            size="s"
            onClick={() => toggle({ rowKeys: [1, 2, 3], colKeys: ['dept'] })}
          >
            Слить 1-3 (Отдел)
          </Button>
          <Button
            view="secondary"
            size="s"
            onClick={() => toggle({ rowKeys: [4, 5, 6], colKeys: ['dept'] })}
          >
            Слить 4-6 (Отдел)
          </Button>
          <Button
            view="secondary"
            size="s"
            onClick={() =>
              toggle({ rowKeys: [1, 2, 3], colKeys: ['dept', 'role'], mergedCellsAlign: { horizontal: 'center', vertical: 'center' } })
            }
          >
            Прямоугольник 1-3 × Отдел+Роль (центр)
          </Button>
          <Button view="secondary" size="s" onClick={() => setRegions([])}>
            Очистить
          </Button>
        </div>
        <pre style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
          mergedCellsRegions = {JSON.stringify(regions)}
        </pre>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            fullScreenEnabled: true,
            sorting: { state: [sort, setSort] },
            mergeCells: {
              mergedCellsRegions: regions,
              rowKeyGetter: (r) => r.id,
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

const FORMAT_IN_BLOCK_CODE = `
import { useState } from 'react';
import { Button } from '@daisforge/ui/components/Button';
import {
  Canvas,
  type ColumnConfig,
  type MergedCellsRegion,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  dept: string;
  role: string;
  person: string;
  plan: number;
  fact: number;
};

// dept/role повторяются в данных: 3 отдела, в каждом 2 роли по 2 сотрудника.
const DEPTS = [
  { dept: 'Отдел A', roles: ['Аналитик', 'Разработчик'] },
  { dept: 'Отдел B', roles: ['Разработчик', 'Тестировщик'] },
  { dept: 'Отдел C', roles: ['Менеджер', 'Аналитик'] },
];
const ROWS: Row[] = [];
let id = 1;
for (const d of DEPTS) {
  for (const role of d.roles) {
    for (let i = 0; i < 2; i += 1) {
      ROWS.push({
        id,
        dept: d.dept,
        role,
        person: \`Сотрудник \${id}\`,
        plan: (id % 7) * 1000 + 500.5,
        fact: (id % 5) * 900 + 250.25,
      });
      id += 1;
    }
  }
}

export const Example = () => {
  const [regions, setRegions] = useState<MergedCellsRegion[]>([
    { rowKeys: [1, 2], colKeys: ['plan', 'fact'] },
  ]);

  const columns: readonly ColumnConfig<Row>[] = [
    { key: 'dept', name: 'Отдел (слит)', width: 160 },
    {
      key: 'role',
      name: 'Роль (свой рендер)',
      width: 200,
      // Свой canvas-рендер: в блоке рисуется верхняя-левая ячейка, контент
      // растягивается на весь прямоугольник блока.
      renderCell: ({ row }) => (
        <Canvas.Container padding={8} alignItems="center" justifyContent="center">
          <Canvas.Badge text={row.role} />
        </Canvas.Container>
      ),
      copyData: (row) => row.role,
      // У колонок со своим рендером предпросмотр по умолчанию выключен.
      renderCellPreview: 'cellEditorAsPreview',
    },
    { key: 'person', name: 'Сотрудник', width: 170 },
    {
      key: 'plan',
      name: 'План (число, вправо)',
      width: 170,
      contentFormat: {
        type: 'number',
        minimumFractionDigits: 2,
        alignContent: 'right',
      },
    },
    {
      key: 'fact',
      name: 'Факт (свой формат)',
      width: 170,
      contentFormat: { customFormat: (v) => \`\${v} ₽\` },
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <Button
          view="secondary"
          size="s"
          onClick={() =>
            setRegions([{ rowKeys: [1, 2], colKeys: ['plan', 'fact'] }])
          }
        >
          Слить План+Факт (строки 1-2)
        </Button>
        <Button view="secondary" size="s" onClick={() => setRegions([])}>
          Очистить
        </Button>
      </div>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '520px' },
          rowMarkers: { startIndex: 1 },
          columnsControl: { enable: true },
          rowSize: { default: 'medium', showInControl: true },
          fullScreenEnabled: true,
          mergeCells: {
            mergeByCellValues: ['dept', 'role'],
            mergedCellsRegions: regions,
            rowKeyGetter: (r) => r.id,
          },
        }}
        columnConfig={columns}
        rows={ROWS}
      />
    </div>
  );
};
`;

// Форматирование и свой рендер при объединении: блок рисует контент верхней-левой
// ячейки, включая её contentFormat и renderCell. Форматы покрытых колонок и строк
// на блок не влияют.
export const FormatInBlock: Story = {
  name: 'Форматирование и свой рендер в блоке',
  ...storySourceDoc({
    code: FORMAT_IN_BLOCK_CODE,
    type: 'code',
    previewSource: 'shown',
  }),
  render: () => {
    type FRow = {
      id: number;
      dept: string;
      role: string;
      person: string;
      plan: number;
      fact: number;
    };
    const rows = useMemo(() => {
      const depts = [
        { dept: 'Отдел A', roles: ['Аналитик', 'Разработчик'] },
        { dept: 'Отдел B', roles: ['Разработчик', 'Тестировщик'] },
        { dept: 'Отдел C', roles: ['Менеджер', 'Аналитик'] },
      ];
      const out: FRow[] = [];
      let rowId = 1;
      for (const d of depts) {
        for (const role of d.roles) {
          for (let i = 0; i < 2; i += 1) {
            out.push({
              id: rowId,
              dept: d.dept,
              role,
              person: `Сотрудник ${rowId}`,
              plan: (rowId % 7) * 1000 + 500.5,
              fact: (rowId % 5) * 900 + 250.25,
            });
            rowId += 1;
          }
        }
      }
      return out;
    }, []);
    const [regions, setRegions] = useState<MergedCellsRegion[]>([
      { rowKeys: [1, 2], colKeys: ['plan', 'fact'] },
    ]);

    const columns: readonly ColumnConfig<FRow>[] = [
      { key: 'dept', name: 'Отдел (слит)', width: 160 },
      {
        key: 'role',
        name: 'Роль (свой рендер)',
        width: 200,
        // Свой canvas-рендер: в блоке рисуется верхняя-левая ячейка, контент
        // растягивается на весь прямоугольник блока.
        renderCell: ({ row }) => (
          <Canvas.Container
            padding={8}
            alignItems="center"
            justifyContent="center"
          >
            <Canvas.Badge text={row.role} />
          </Canvas.Container>
        ),
        copyData: (row) => row.role,
        // У колонок со своим рендером предпросмотр по умолчанию выключен.
        renderCellPreview: 'cellEditorAsPreview',
      },
      { key: 'person', name: 'Сотрудник', width: 170 },
      {
        key: 'plan',
        name: 'План (число, вправо)',
        width: 170,
        contentFormat: {
          type: 'number',
          minimumFractionDigits: 2,
          alignContent: 'right',
        },
      },
      {
        key: 'fact',
        name: 'Факт (свой формат)',
        width: 170,
        contentFormat: { customFormat: (v) => `${v} ₽` },
      },
    ];

    return (
      <div>
        <StoryHint>
          «Отдел» и «Роль» слиты по значению: блок роли рисуется своим рендером
          (бейдж по центру). Кнопкой можно слить «План+Факт» строк 1–2 в
          прямоугольник: блок покажет значение и числовой формат верхней-левой
          ячейки (План, выравнивание вправо) — формат покрытой колонки «Факт»
          (₽) на блок не влияет.
        </StoryHint>
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <Button
            view="secondary"
            size="s"
            onClick={() =>
              setRegions([{ rowKeys: [1, 2], colKeys: ['plan', 'fact'] }])
            }
          >
            Слить План+Факт (строки 1-2)
          </Button>
          <Button view="secondary" size="s" onClick={() => setRegions([])}>
            Очистить
          </Button>
        </div>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            fullScreenEnabled: true,
            mergeCells: {
              mergeByCellValues: ['dept', 'role'],
              mergedCellsRegions: regions,
              rowKeyGetter: (r) => r.id,
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};
