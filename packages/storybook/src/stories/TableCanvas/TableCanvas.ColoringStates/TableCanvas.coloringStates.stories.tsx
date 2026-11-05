/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import type { Meta, StoryObj } from '@storybook/react';
import {
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { setTablePaletteOverride } from '@ui-kit/components/TableGlide/theming/palette-override';
import React, { useEffect, useMemo, useState } from 'react';

import {
  buildHcPalette,
  defaultStepFactor,
  HC_THEMES,
} from './stepFactorPalette';

/**
 * Универсальный стенд состояний цветов таблицы: hover строки, выделение
 * (диапазон/колонка/строка), highlightActiveType, чекбокс-строки,
 * редактируемые ячейки, ячейки с ошибкой и статусные цвета потребителя.
 * Темы переключаются глобальным тулбаром Storybook. Колонки «Отдел» и
 * «Команда» объединяются по значению (переключатель «объединённые строки»).
 *
 * Ползунки «множитель шага» пересчитывают палитру контрастных тем на лету
 * формулой генератора: насколько заметно ячейка темнеет под курсором. Нужны
 * для подбора значения вместе с дизайнером; выбранное число вносится в
 * THEME_SETTINGS генератора, затем npm run table-colors:palette.
 */

type ColoringArgs = {
  hoverRow: boolean;
  highlightActiveType: HighlightActiveType;
  cellsSelectionMode: CellsSelectionMode;
  checkboxSelecting: boolean;
  editingEnabled: boolean;
  rowMarkers: boolean;
  mergedCells: boolean;
  hcLightStepFactor: number;
  hcDarkStepFactor: number;
};

const STEP_FACTOR_CONTROL = {
  control: { type: 'range', min: 0.5, max: 2.5, step: 0.05 },
} as const;

const meta: Meta<ColoringArgs> = {
  title: 'Локальные компоненты/TableCanvas/ColoringStates',
  // Стенд виден в меню: у скрытой тегом hideInSidebar стори Storybook не
  // показывает панель контролов, а без неё не работают переключатели и ползунки.
  tags: ['!autodocs'],
  args: {
    hoverRow: true,
    highlightActiveType: 'row',
    cellsSelectionMode: 'range-cell',
    checkboxSelecting: true,
    editingEnabled: true,
    rowMarkers: true,
    mergedCells: true,
    hcLightStepFactor: defaultStepFactor('highContrastLight'),
    hcDarkStepFactor: defaultStepFactor('highContrastDark'),
  },
  argTypes: {
    hcLightStepFactor: {
      name: 'множитель шага: контрастная светлая',
      ...STEP_FACTOR_CONTROL,
    },
    hcDarkStepFactor: {
      name: 'множитель шага: контрастная тёмная',
      ...STEP_FACTOR_CONTROL,
    },
    hoverRow: {
      name: 'hoverEffects.row',
      control: 'boolean',
    },
    highlightActiveType: {
      name: 'highlightActiveType',
      control: 'inline-radio',
      options: ['row', 'disabled'],
    },
    cellsSelectionMode: {
      name: 'cellsSelection.mode',
      control: 'inline-radio',
      options: ['range-cell', 'multi-range-cell', 'cell', 'disabled'],
    },
    checkboxSelecting: {
      name: 'selecting (чекбоксы)',
      control: 'boolean',
    },
    editingEnabled: {
      name: 'editing (редактирование)',
      control: 'boolean',
    },
    rowMarkers: {
      name: 'rowMarkers (нумерация)',
      control: 'boolean',
    },
    mergedCells: {
      name: 'объединённые строки (Отдел, Команда)',
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<ColoringArgs>;

// Итоговая строка (bottomSummaryRows): контент ячеек отдаёт renderSummaryCell.
type SummaryRow = {
  type: 'top' | 'bottom';
  values: Array<{ columnId: string; value: string }>;
};
const renderSummaryCell = ({
  row,
  column,
}: {
  row: SummaryRow;
  column: { key: string };
}) => row.values.find((v) => v.columnId === column.key)?.value ?? '';

// Статусный цвет ячейки по приоритету. Цвет берётся из темы таблицы, а не
// задаётся фиксированным hex: так он подстраивается под каждую тему (в
// тёмной теме — тёмный). Его состояния (hover, выделение) таблица считает
// сама формулой (fill-states.ts) — это путь «свой цвет потребителя».
const PRIORITY_THEME_KEY = {
  Critical: 'bgCellNegative',
  High: 'bgCellWarning',
  Medium: 'bgCellInfo',
  Low: 'bgCellPositive',
} as const;

const priorityBgCell = (
  priority: string,
  theme: Record<
    (typeof PRIORITY_THEME_KEY)[keyof typeof PRIORITY_THEME_KEY],
    string
  >,
) => {
  const key = PRIORITY_THEME_KEY[priority as keyof typeof PRIORITY_THEME_KEY];
  return key ? { bgCell: theme[key] } : undefined;
};

// Строки стенда с колонками для объединения: «Отдел» по 12 строк и вложенная
// в него «Команда» по 4 строки, как блоки группировки.
type StandRow = Row & { dept: string; team: string };
const DEPTS = ['Продажи', 'Разработка', 'Поддержка', 'Финансы'];
const TEAMS = ['Север', 'Юг', 'Запад'];
const withBlocks = (rows: Row[]): StandRow[] =>
  rows.map((row, index) => ({
    ...row,
    dept: DEPTS[Math.floor(index / 12) % DEPTS.length] ?? '',
    team: TEAMS[Math.floor(index / 4) % TEAMS.length] ?? '',
  }));

export const ColoringStates: Story = {
  name: 'Состояния цветов (универсальный)',
  render: (args) => {
    const [rows, setRows] = useState<StandRow[]>(() =>
      withBlocks(createRows(0, 40)),
    );
    const selectingState = useState<ReadonlySet<string | number>>(
      () => new Set(),
    );

    // Итоговая строка: красится bgHeader, hover/подсветку не получает.
    const bottomSummaryRows = useMemo(
      (): SummaryRow[] => [
        {
          type: 'bottom',
          values: [
            { columnId: 'id', value: 'Итого' },
            { columnId: 'task', value: `строк: ${rows.length}` },
          ],
        },
      ],
      [rows.length],
    );

    const columnConfig = useMemo(
      (): ColumnConfig<StandRow, SummaryRow>[] => [
        { key: 'dept', name: 'Отдел', width: 130, renderSummaryCell },
        { key: 'team', name: 'Команда', width: 120, renderSummaryCell },
        { key: 'id', name: 'ID', width: 70, renderSummaryCell },
        {
          key: 'task',
          name: 'Задача (редактируемая, ошибка на id % 7 = 0)',
          width: 320,
          renderSummaryCell,
          editingCell: {
            component: 'inputString',
            editable: true,
            error: { value: (row) => Number(row.id) % 7 === 0 },
          },
        },
        {
          key: 'priority',
          name: 'Приоритет (статусный цвет)',
          width: 220,
          themeOverride: ({ row, theme }) =>
            priorityBgCell(row.priority, theme),
        },
        {
          key: 'complete',
          name: '% (редактируемая)',
          width: 160,
          editingCell: {
            component: 'inputNumber',
            editable: true,
          },
        },
        { key: 'issueType', name: 'Тип', width: 140 },
        { key: 'developer', name: 'Разработчик', width: 220 },
      ],
      [],
    );

    // Палитра контрастных тем с множителями из ползунков. Подмена ставится
    // до отрисовки таблицы, а key пересоздаёт таблицу, чтобы тема собралась
    // заново с новыми цветами.
    const factors = {
      highContrastLight: args.hcLightStepFactor,
      highContrastDark: args.hcDarkStepFactor,
    };
    const paletteKey = `${factors.highContrastLight}/${factors.highContrastDark}`;
    useMemo(() => {
      const palette = buildHcPalette(factors);
      HC_THEMES.forEach((theme) => {
        setTablePaletteOverride(theme, {
          colors: palette[theme],
          stepFactor: factors[theme],
        });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paletteKey]);
    useEffect(
      () => () =>
        HC_THEMES.forEach((theme) => setTablePaletteOverride(theme, undefined)),
      [],
    );

    return (
      <TableCanvas
        key={paletteKey}
        tableConfig={{
          containerStyle: { height: '560px' },
          hoverEffects: { row: args.hoverRow },
          summaryRows: { showDefault: true, showInControl: false },
          highlightActiveType: args.highlightActiveType,
          cellsSelection: { mode: args.cellsSelectionMode },
          ...(args.mergedCells && {
            mergeCells: { mergeByCellValues: ['dept', 'team'] },
          }),
          ...(args.rowMarkers && { rowMarkers: { startIndex: 1 } }),
          ...(args.checkboxSelecting && {
            selecting: {
              state: selectingState,
              rowKeyGetter: (r: StandRow) => r.id,
            },
          }),
          ...(args.editingEnabled && {
            editing: {
              onRowsChange: (newRows: StandRow[]) => setRows([...newRows]),
              rowKeyGetter: (r: StandRow) => r.id,
              defaultEnabled: true,
            },
          }),
        }}
        columnConfig={columnConfig}
        bottomSummaryRows={bottomSummaryRows}
        rows={rows}
      />
    );
  },
};
