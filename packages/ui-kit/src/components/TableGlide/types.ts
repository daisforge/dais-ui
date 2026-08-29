import type {
  DataEditor,
  DataEditorRef,
  GridCell,
  GridColumn,
  GridSelection,
  ProvideEditorCallback,
  ProvideEditorCallbackResult,
  ProvideEditorComponent,
  SpanAlignment,
} from '@glideappsfinal/glide-data-grid';
// THEME
import type {
  CSSProperties,
  ComponentProps,
  ReactElement,
  ReactNode,
  ReactPortal,
  Ref,
  RefObject,
} from 'react';

import type { GlideSizeConfig, SIZE } from './constants';
import type { CanvasNodeTooltipConfig } from './lib/canvas';

import { GlideThemeForRender, GlideThemePartial, Theme } from './theming/types';
import { ActiveTheme } from './theming/activeTheme.type';

export type { Tokens } from './tokens';

export type {
  DataEditor,
  DataEditorRef,
  GridCell,
  GridColumn,
  ProvideEditorCallback,
  ProvideEditorCallbackResult,
  ProvideEditorComponent,
  SpanAlignment,
};
export type ThemeDynamicCustoms = {
  rowSize: SIZE;
  activeSizes: GlideSizeConfig;
};
export type { Theme, ActiveTheme };

export type GlideProps = ComponentProps<typeof DataEditor>;

export type RowHeightGlide = GlideProps['rowHeight'];

/**
 * Подсветка активной сущности (визуальная ось).
 * @deprecated Значения 'cell' и 'range-cell' устарели — режим выделения теперь
 * задаётся через `cellsSelectionMode`. Актуальны 'row' (подсветка строки) и 'disabled'.
 */
export type HighlightActiveType = 'cell' | 'row' | 'range-cell' | 'disabled';

/**
 * Режим фактического выделения ячеек (нативный glide selection).
 * По нему работают copy/paste, рамка, fill-handle и затемнение шапки/нумерации.
 * Независим от `highlightActiveType`.
 * - `'range-cell'` — выделение одного прямоугольного диапазона (drag).
 * - `'multi-range-cell'` — то же + Ctrl копит несколько диапазонов (rangeStack).
 * - `'cell'` — одна ячейка. `'disabled'` — выделение ячеек выключено.
 */
export type CellsSelectionMode =
  | 'cell'
  | 'range-cell'
  | 'multi-range-cell'
  | 'disabled';

/**
 * Эффекты при наведении (hover) — единый расширяемый конфиг.
 * Сейчас поддерживается подсветка строки (`row`); в будущем здесь же появятся
 * hover по ячейке, кастомные мапки наложения цветов и т.д.
 */
export type HoverEffectsConfig = {
  /**
   * Подсветка строки под курсором.
   * `true` — цвет data-ячеек из темы (`bgRowHovered`); объект — свой цвет.
   * Служебные колонки темнеют `bgServiceRowHovered`, checkbox-строки —
   * `bgSelectedRowHovered` (всегда из темы, `color` их не переопределяет).
   */
  row?: boolean | { color?: string };
};

// ---------------------------------------- COLUMNS

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ObjectForExtending = Record<string, any>;

// ---------------------------------------- COLUMNS
export interface CanvasCellOptions<
  R extends ObjectForExtending = ObjectForExtending,
  SR = unknown
> {
  render: (
    ctx: CanvasRenderingContext2D,
    rect: { x: number; y: number; width: number; height: number },
    theme: GlideThemeForRender,
    hoverX: number | undefined,
    hoverY: number | undefined,
    row: R,
    rowIndex: number
  ) => {
    hoveredAreas?: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
    }>;
  };
  onClick?: (
    x: number,
    y: number,
    rect: { x: number; y: number; width: number; height: number },
    rowInfo: CellInfo<R, SR>,
    renderData?: {
      hoveredAreas?: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
      }>;
    }
  ) => boolean;
  onMouseEnter?: (rowInfo: CellInfo<R, SR>) => void;
  onMouseLeave?: (rowInfo: CellInfo<R, SR>) => void;
  copyData?: string | ((row: R) => string);
  /**
   * Optional cache key factory to reuse rendered Canvas trees between frames.
   * Return a primitive that changes whenever the visual content should update.
   */
  getCacheKey?: (
    rowInfo: CellInfo<R, SR>
  ) => string | number | boolean | null | undefined;
}
export type CanvasEl = ReactElement;
export type CanvasContent = ReactElement | string;

export type CellContent = CanvasContent | GridCell;

export type CellThemeOverrideResult = Partial<{
  bgCell: string;
  cellHorizontalPadding: number;
  cellVerticalPadding: number;
}>;

// GlIDE AND CUSTOMS FOR GLIDE COLUMN
export type СolumnGlide = GlideProps['columns'][number];

export type CellHoverState = {
  /** Равно true только для ячейки с данными, над которой сейчас находится курсор. */
  cellHover: boolean;
  /** Равно true для всех ячеек с данными в строке, над которой сейчас находится курсор. */
  rowHover: boolean;
};

export type CellActiveState = {
  /** Равно true, если текущая ячейка с данными входит в активную область выделения таблицы. */
  cellActive: boolean;
  /** Равно true, если строка текущей ячейки с данными содержит активную ячейку или активный диапазон. */
  rowActive: boolean;
};

export type CellInfo<R extends ObjectForExtending, SR = unknown> = {
  row: R;
  column: ColumnGlideLast<R, SR>;
  colInd: number;
  rowInd: number;
  ctxs: ObjectForExtending;
  theme: Theme;
  /** Состояние наведения для ячейки, которую сейчас рендерит renderCell. */
  hovered: CellHoverState;
  /** Состояние активного выделения для ячейки, которую сейчас рендерит renderCell. */
  active: CellActiveState;
};
export type EditingCellInfoGlide<
  R extends ObjectForExtending,
  SR = unknown
> = Omit<CellInfo<R, SR>, 'hovered' | 'active'> & {
  onRowChange: (row: R, commitChanges?: boolean) => void;
  onClose: (commitChanges?: boolean, shouldFocusCell?: boolean) => void;
};

export type SummaryCellInfo<R extends ObjectForExtending, SR> = {
  row: SR;
  column: ColumnGlideLast<R, SR>;
  colInd: number;
  rowInd: number;
  ctxs: ObjectForExtending;
  theme: Theme;
};

type DrawHeaderArgs = Parameters<NonNullable<GlideProps['drawHeader']>>[0];

export type HeaderCellInfo<R extends ObjectForExtending, SR> = {
  column: ColumnGlideLast<R, SR>;
  drawArgs: DrawHeaderArgs;
  ctxs: ObjectForExtending;
  theme: Theme;
};
export type ColSpan<R extends ObjectForExtending, SR> =
  | number
  | ((cellInfo: CellInfo<R, SR>) => number);

// Вертикальное объединение: функция возвращает ЯВНЫЙ диапазон строк блока
// [startRow, endRow] (одинаковый для всех ячеек блока) либо null, если ячейка не слита.
export type RowSpan<R extends ObjectForExtending, SR> = (
  cellInfo: CellInfo<R, SR>
) => readonly [number, number] | null;

/** 2D-выравнивание контента в слитой ячейке (блоке). */
export type SpanCellAlign = {
  /** По горизонтали. @default из contentAlign колонки, иначе 'left' */
  horizontal?: 'left' | 'center' | 'right';
  /** По вертикали. @default 'center' */
  vertical?: 'top' | 'center' | 'bottom';
};

export type ColumnGlideGetCellContent<R extends ObjectForExtending, SR> = (
  cellInfo: CellInfo<R, SR>
) => CellContent;
export type ColumnGlideGetSummaryCellContent<
  R extends ObjectForExtending,
  SR
> = (cellInfo: CellInfo<R, SR>) => CellContent;

export type ColumnGlideCustoms<R extends ObjectForExtending, SR = unknown> = {
  id: string;
  /** Служебные колонки (marker / checkbox / row instruments) живут по отдельным правилам подсветки. */
  isServiceColumn?: boolean;
  /** Внутренний helper для cell-level error outline, совпадающий по семантике с Table editing error. */
  isErrorCell?: (row: R) => boolean;
  renderHeaderCell?: (cellInfo: HeaderCellInfo<R, SR>) => CanvasContent;
  /** Текстовое представление ячейки для копирования в clipboard (Ctrl+C). */
  copyData?: string | ((row: R) => string);
  editable?: boolean | ((row: R) => boolean);
  contentAlign?: 'right' | 'left' | 'center';
  renderCell?: ColumnGlideGetCellContent<R, SR>;
  renderEditCell?: (cellInfo: EditingCellInfoGlide<R, SR>) => CellContent;
  renderSummaryCell?: (summaryCellInfo: SummaryCellInfo<R, SR>) => CellContent;
  colSpan?: ColSpan<R, SR>;
  rowSpan?: RowSpan<R, SR>;
  /** Выравнивание контента в слитых ячейках колонки; функция — для точечного (по блоку). */
  spanAlign?: SpanCellAlign | ((cellInfo: CellInfo<R, SR>) => SpanCellAlign | undefined);
  /** Тултип для ячеек этой колонки. Строка, объект или функция (context) => config | null. */
  cellTooltip?:
    | CanvasNodeTooltipConfig
    | ((context: {
        row: R;
        column: ColumnGlideLast<R, SR>;
        ctxs: ObjectForExtending;
        refTable?: Ref<DataEditorRef>;
        colInd?: number;
        rowInd?: number;
        theme?: Theme;
      }) => CanvasNodeTooltipConfig | null);
  /** Тултип для шапки этой колонки. Строка, объект или функция (context) => config | null. */
  headerCellTooltip?:
    | CanvasNodeTooltipConfig
    | ((context: {
        column: ColumnGlideLast<R, SR>;
        ctxs: ObjectForExtending;
        refTable?: Ref<DataEditorRef>;
        colInd?: number;
        theme?: Theme;
      }) => CanvasNodeTooltipConfig | null);
  columnThemeOverride?: (
    cellInfo: CellInfo<R, SR>
  ) => CellThemeOverrideResult | undefined;
  /** Управление preview для колонки. true — включить overlay, 'none' — отключить (в т.ч. стандартный). */
  hasPreview?: boolean | 'none';
  /** Минимальная ширина колонки (px). Ограничивает ресайз и начальную ширину снизу. */
  minWidth?: number;
  /** Максимальная ширина колонки (px). Ограничивает ресайз и начальную ширину сверху. */
  maxWidth?: number;
};

export type ColumnGlideLast<R extends ObjectForExtending, SR> = СolumnGlide &
  ColumnGlideCustoms<R, SR>;

export type { GlideThemeForRender, GlideThemePartial };

export type RenderGroupHeaderArgs = Parameters<
  NonNullable<GlideProps['drawGroupHeader']>
>[0];

export type TableGlideCustomProps<
  R extends ObjectForExtending,
  SR = unknown
> = {
  columns: ColumnGlideLast<R, SR>[];
  rows: readonly R[];
  bottomSummaryRows?: readonly SR[];
  rowSize?: SIZE;
  rowHeight?:
    | ((
        row: R,
        currentRowSize: {
          rowSizeName: SIZE;
          rowSizeValue: number;
        },
        rowIndex: number
      ) => number)
    | number
    | undefined
    | null;
  ctxs?: ObjectForExtending;
  renderGroupHeader?: (
    args: RenderGroupHeaderArgs
  ) => 'default' | { defaultWithCustomGroupName: string } | CanvasEl;
  /** Выравнивание текста в слитой шапке по ключу группы (ColumnGroupConfig.key). */
  groupAlignMap?: Map<string, SpanAlignment>;
  refTable?: Ref<DataEditorRef>;
  onColumnsReorder?: (sourceKey: string, targetKey: string) => void;
  /** Ref на контейнер таблицы — события portal hover диспатчатся на него, чтобы несколько таблиц не перехватывали чужие тултипы */
  portalEventTargetRef?: RefObject<HTMLElement | null>;
  /** Откреплённая шапка — header уезжает вместе со скроллом */
  unstickyHeader?: boolean;
  // отключает resize колонок (по умолчанию true)
  resizableColumn?: boolean;
  /** Внешний ref на wrapper-div (для TableCanvas - refTableContainer) */
  containerRef?: Ref<HTMLDivElement>;
  /** className для wrapper-div */
  containerClassName?: string;
  /** inline-style для wrapper-div */
  containerStyle?: CSSProperties;
  /** Рендер overlay-фич (tooltip, contextMenu, popover) внутри wrapper-div когда DOM готов */
  renderOverlayFeatures?: (ctx: {
    containerElement: HTMLDivElement;
    renderInContainer: (children: ReactNode) => ReactPortal | null;
  }) => ReactNode;
  /** Не рендерить canvas-grid, оставив только overlay-content внутри wrapper. */
  hideGrid?: boolean;
  /** DOM-узел content-state (empty/error), рендерится как прямой child контейнера. */
  contentStateNode?: ReactNode;
  /** Флаг fullscreen - пересканирование DOM при переключении */
  fullScreened?: boolean;
  /** Переносит editor overlay внутрь контейнера (вместо document.body). Для модалок с CSS transform. */
  editorOverlayPortal?: 'inside';
  groupHeaderHeight?: number[];
  /** Управляет canvas-подсветкой активной сущности поверх glide selection. */
  highlightActiveType?: HighlightActiveType;
  /** Режим выделения ячеек (нативный glide selection). По умолчанию 'range-cell'. */
  cellsSelectionMode?: CellsSelectionMode;
  /** Канал для copy/paste (selectionRef потребителя), отдельно от controlled gridSelection. */
  onSelectionEmit?: (selection: GridSelection) => void;
  /**
   * Сигнал сброса выделения при смене проекции данных (сортировка/фильтр/пагинация).
   * Новый token = применить nextSelection (по умолчанию пустое). Только для
   * uncontrolled-режима: controlled сбрасывается сеттером потребителя выше.
   */
  projectionResetSignal?: ProjectionResetSignal;
  /**
   * Ключи выделенных КОЛОНОК (объединение: одиночный клик/Shift/select-all +
   * Ctrl-мультивыбор), без сервисных колонок. Канал наверх для контрл-блока
   * (например «Закрепить столбцы»). Обычное выделение ячеек сюда не попадает.
   */
  onColumnSelectionChange?: (selectedColumnKeys: string[]) => void;
  /**
   * Follow-выделение: после реордера (закрепление колонок) заново выделить эти
   * ключи. Пустой массив → снять выделение. null/undefined → не трогать.
   */
  pendingColumnSelectionKeys?: string[] | null;
  /** Вызывается после применения pendingColumnSelectionKeys (сброс pending). */
  onColumnSelectionApplied?: () => void;
  /** Controlled-значение подсвеченной строки (highlightActiveType='row'). */
  highlightActiveRow?: number;
  /**
   * Controlled-сеттер подсвеченной строки. Вторым аргументом отдаёт сам объект
   * строки (`rows[index]`) — чтобы потребитель получал узел без onCellClicked.
   */
  onHighlightActiveRowChange?: (
    row: number | undefined,
    rowData?: R | undefined
  ) => void;
  /**
   * Режим подсветки строки controlled (значением владеют снаружи). Если не
   * задан — таблица крутит подсветку внутренним стейтом, но колбэк всё равно
   * вызывается (подписка без владения).
   */
  highlightActiveRowControlled?: boolean;
  /** Выделение колонок по клику на шапку (независимо от highlightActiveType). По умолчанию true. */
  enableColumnSelection?: boolean;
  /** Выделение строк по клику/драгу на колонке нумерации. По умолчанию true. */
  enableRowSelection?: boolean;
  /** Выделение всей таблицы кликом по шапке колонки нумерации. По умолчанию true. */
  enableSelectAll?: boolean;
  /** Индексы строк, выбранных через checkbox selection. */
  checkboxSelectedRowIndexes?: ReadonlySet<number>;
  /** Индексы строк, у которых ЕСТЬ (виден) чекбокс — для тёмной подсветки highlightActiveType='row'. */
  checkboxVisibleRowIndexes?: ReadonlySet<number>;
  /**
   * Эффекты при наведении. `hoverEffects.row` — подсветка строки под курсором:
   * рисуется через bgCell (getRowThemeOverride), т.е. лежит ПОД селектингом и
   * highlightActiveType — они рисуются поверх (highlightRegions) и визуально
   * перекрывают hover. По умолчанию выключено.
   */
  hoverEffects?: HoverEffectsConfig;
  /** Включает компенсацию тонких canvas-линий при browser zoom ниже 100% / DPR < 1. */
  enableLowDprHairline?: boolean;
};

/** Сигнал сброса нативного выделения при смене проекции данных. */
export interface ProjectionResetSignal {
  token: number;
  nextSelection?: GridSelection;
}

export type TableGlideProps<R extends ObjectForExtending, SR> = Omit<
  GlideProps,
  | keyof TableGlideCustomProps<R, SR>
  | 'getCellContent'
  | 'drawGroupHeader'
  | 'ref'
  | 'groupHeaderHeight'
> &
  TableGlideCustomProps<R, SR>;
