/* eslint-disable no-plusplus */
import '@glideappsfinal/glide-data-grid/dist/index.css';

import {
  DataEditorRef,
  GridCell,
  GridColumn,
} from '@glideappsfinal/glide-data-grid';
import type { CSSProperties } from 'react';
import { mergeRefs, useActiveTheme } from '@ui-kit/utils';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { glideCellRenderer } from './cellRenderer';
import { DEFAULT_HEADER_HEIGHT, DEFAULT_ROW_HEIGHT } from './constants';
import {
  useColoringLayers,
  useNativeGridSelection,
  useSelectionGeometry,
  useTableSelectionSystem,
} from './hooks/selection';
import { useAnimatedRowHeight } from './hooks/useAnimatedRowHeight';
import { useErrorCellRanges } from './hooks/useErrorCellRanges';
import { useCanvasContextMenuInteraction } from './hooks/useCanvasContextMenuInteraction';
import { useCanvasEditorActivation } from './hooks/useCanvasEditorActivation';
import { useCanvasInteractionSession } from './hooks/useCanvasInteractionSession';
import { useCustomRenderers } from './hooks/useCustomRenderers';
import { useGlideElements } from './hooks/useGlideElements';
import { useHoverState } from './hooks/useHoverState';
import { useOverlayPortalFix } from './hooks/useOverlayPortalFix';
import { useItemHoveredHandler } from './hooks/useItemHoveredHandler';
import { useUnstickyHeader } from './hooks/useUnstickyHeader';
import {
  buildCanvasTree,
  Canvas,
  CellCanvasRoot,
  createNormalCanvasInteraction,
  isCanvasCell,
  performCanvasClick,
  retrieveRenderData,
  buildCellId,
  toContentPoint,
} from './lib/canvas';
import { useFontLoadRedraw, useIconLoadRedraw } from './lib/canvas/hooks';
import { buildEffectiveInteractionOutcome } from './lib/canvas/interaction/interactionManager';
import { resolveCanvasCellInteractionTargetFromRenderData } from './lib/canvas/interaction/resolveCanvasCellInteractionTarget';
import { StyledGlideDataEditor, StyledOverlayPortal } from './styled';
import { getTheme } from './theming';
import {
  rangeHasAny,
  resolveBlockRowOverride,
} from './theming/block-row-override';
import {
  getEditableCellFillStates,
  resolveActiveRowBg,
  resolveCellFillOverride,
  resolveConsumerFillOverride,
} from './theming/cell-fill-override';
import type {
  CellInfo,
  ColumnGlideLast,
  GlideProps,
  GlideThemeForRender,
  HeaderCellInfo,
  ObjectForExtending,
  RowHeightGlide,
  TableGlideProps,
} from './types';
import {
  createEmptyCellGlide,
  createTextCellGlide,
  TextCellOptions,
} from './utils/createCell';
import { findBlockOrigin } from './utils/findBlockOrigin';
import type { ResolveHoverRows } from './hooks/useHoverState';
import { getSpan } from './utils/getSpan';
import { getRowSpan } from './utils/getRowSpan';
import { isCanvasContent, isPrimitive } from './utils/typeGuards';

/** Функция-болванка. Ничего не делает */
function noop(..._: unknown[]) {
  // no operation performed
}

// utils

export class CellContentCache {
  // column -> row -> value
  // для каждой ячейки колонки сохраняется кэш, например,  col1Cache = [row1-col1-GridCell,row2-col1-GridCell,...]
  private cachedContent: Map<number, GridCell[]> = new Map();

  get(col: number, row: number) {
    const colCache = this.cachedContent.get(col);

    if (colCache === undefined) {
      return undefined;
    }

    return colCache[row];
  }

  set(colInd: number, rowInd: number, value: GridCell) {
    let rowCache = this.cachedContent.get(colInd);
    if (rowCache === undefined) {
      rowCache = [];
      this.cachedContent.set(colInd, rowCache);
    }
    rowCache[rowInd] = value;
  }
}

const CTXS_EMPTY = {};

// Путь групп колонки: string → [string], string[] → как есть, иначе [].
const getColumnGroupPath = (group: unknown): string[] =>
  Array.isArray(group)
    ? group.filter((g): g is string => typeof g === 'string')
    : typeof group === 'string'
    ? [group]
    : [];

type CanvasCacheKey = string | number | boolean | null;

interface CanvasCellCacheEntry {
  cacheKey: CanvasCacheKey;
  canvasRoot: CellCanvasRoot;
}

export const TableGlide = <R extends ObjectForExtending, SR = unknown>({
  columns,
  rows,
  bottomSummaryRows,
  rowHeight,
  width,
  rowSize = 'medium',
  ctxs = CTXS_EMPTY,
  freezeColumns,
  onColumnResize,
  renderGroupHeader,
  groupAlignMap,
  refTable,
  onColumnsReorder,
  portalEventTargetRef,
  onItemHovered: onItemHoveredExternal,
  unstickyHeader,
  resizableColumn = true,
  minColumnWidth = 56,
  maxColumnWidth,
  maxColumnAutoWidth,
  containerRef: containerRefExternal,
  containerClassName,
  containerStyle,
  renderOverlayFeatures,
  hideGrid,
  contentStateNode,
  containerSlot,
  fullScreened,
  editorOverlayPortal,
  highlightActiveType = 'disabled',
  // Режим фактического выделения ячеек (нативный glide). Независим от
  // highlightActiveType: по нему идут copy/paste, рамка, fill-handle, затемнение.
  cellsSelectionMode = 'range-cell',
  // Выделение колонок — независимая ось (НЕ через highlightActiveType).
  // По умолчанию включено; работает при любом highlightActiveType.
  enableColumnSelection = true,
  // Выделение строк по колонке нумерации — независимая ось. По умолчанию включено.
  enableRowSelection = true,
  // Выделение всей таблицы кликом по шапке колонки нумерации. По умолчанию включено.
  enableSelectAll = true,
  enableLowDprHairline,
  // Controlled нативное выделение (значение + сеттер).
  gridSelection: gridSelectionExternal,
  onGridSelectionChange: onGridSelectionChangeExternal,
  // Канал для copy/paste (selectionRef потребителя) — отдельно от controlled.
  onSelectionEmit,
  // Канал наверх: индексы выделенных колонок (объединённые) для контрл-блока.
  onColumnSelectionChange,
  // Follow: после реордера (закрепление) заново выделить эти ключи.
  pendingColumnSelectionKeys,
  onColumnSelectionApplied,
  // Controlled подсвеченная строка (highlightActiveType='row').
  highlightActiveRow,
  onHighlightActiveRowChange,
  highlightActiveRowControlled,
  highlightRegions: highlightRegionsExternal,
  checkboxSelectedRowIndexes,
  // На цвет не влияет: наличие чекбокса не меняет цвет выбранной строки,
  // ступень добавляет только НАЖАТЫЙ чекбокс (checkboxSelectedRowIndexes).
  // Вытаскиваем из restProps; удалить вместе с пропом в следующем мажоре.
  checkboxVisibleRowIndexes: _checkboxVisibleRowIndexes,
  hoverEffects,
  appearance,
  isErrorRow,
  collectRowErrors,
  onCellClicked: onCellClickedExternal,
  onCellContextMenu: onCellContextMenuExternal,
  onGroupHeaderClicked: onGroupHeaderClickedExternal,
  // TODO: внешний getGroupDetails пока не прокидываем (см. композицию ниже).
  // getGroupDetails: getGroupDetailsExternal,
  onMouseMove: onMouseMoveExternal,
  onVisibleRegionChanged: onVisibleRegionChangedExternal,
  portalElementRef: _portalElementRef, // на всякий вытащили, чтобы в составе resProps не перезаписал внутреннюю логику.
  ...restProps
}: TableGlideProps<R, SR>) => {
  const activeTheme = useActiveTheme();
  const appearanceVariant = appearance?.variant ?? 'default';
  const theme = useMemo(
    () => getTheme(rowSize, activeTheme, appearanceVariant),
    [rowSize, activeTheme, appearanceVariant],
  );

  const rowHeightGlide = useMemo<RowHeightGlide>(() => {
    const baseNumber = typeof rowHeight === 'number' ? rowHeight : undefined;
    if (baseNumber) {
      return baseNumber;
    }
    const DEF_HEIGHT = DEFAULT_ROW_HEIGHT[rowSize];

    const baseFunction =
      typeof rowHeight === 'function' ? rowHeight : undefined;

    if (baseFunction) {
      return (rowIndex: number) => {
        const row = rows[rowIndex];
        if (!row) {
          return baseNumber ?? DEF_HEIGHT;
        }
        const currentRowSize = {
          rowSizeName: rowSize,
          rowSizeValue: DEF_HEIGHT,
        };
        const value = baseFunction(row, currentRowSize, rowIndex);

        return typeof value === 'number' && !Number.isNaN(value)
          ? value
          : DEF_HEIGHT;
      };
    }

    return DEF_HEIGHT;
  }, [rows, rowHeight, rowSize]);
  // ---------------------------

  const summaryRowsLength = bottomSummaryRows?.length ?? 0;

  const rowH = useAnimatedRowHeight(rowHeightGlide);

  const [resizedColsMap, setResizedColsMap] = useState(
    new Map<string, number>(),
  );

  // Скрытие тултипа на старте ресайза. Присваивается ниже из useItemHoveredHandler
  // (объявлен позже по коду), поэтому дёргаем через ref.
  const hideTooltipRef = useRef<(() => void) | null>(null);

  const onColumnResizeInternal = useCallback(
    (
      column: GridColumn,
      newSize: number,
      colIndex: number,
      newSizeWithGrow: number,
    ) => {
      const col = column as ColumnGlideLast<R, SR>;
      if (!col.id) {
        return;
      }

      // Колонка с фиксированной шириной (minWidth равен maxWidth, например
      // колонка чекбоксов) не ресайзится. Glide и так не даёт ей стать шире
      // или уже, но без этой проверки ширина попала бы в resizedColsMap и
      // перестала бы следовать за размером строк, а внешний onColumnResize
      // получил бы событие, которого по смыслу не было.
      if (col.minWidth !== undefined && col.minWidth === col.maxWidth) {
        return;
      }

      // Наведение уже произошло до старта перетаскивания, прячем тултип, чтобы он
      // не висел на месте (за границей во время ресайза он не едет).
      hideTooltipRef.current?.();

      onColumnResize?.(col, newSize, colIndex, newSizeWithGrow);

      setResizedColsMap((prev) => {
        prev.set(col.id, newSize);
        return new Map(prev);
      });
    },
    [onColumnResize],
  );

  const columnsLast = useMemo(() => {
    if (resizedColsMap.size === 0) {
      return columns;
    }
    return columns.map((c) => {
      if (resizedColsMap.has(c.id)) {
        return { ...c, width: resizedColsMap.get(c.id), grow: 0 };
      }
      return c;
    });
  }, [columns, resizedColsMap]);

  const [updateVersion, _setUpdateVersion] = useState(0);
  const canvasCellCache = useMemo(
    () => new WeakMap<R, Map<string, CanvasCellCacheEntry>>(),
    [],
  );
  const dataEditorRef = useRef<DataEditorRef | null>(null);

  // Controlled-выделение приходит, когда грид НЕ в фокусе (напр. клик по внешней
  // кнопке) — тогда glide рисует якорную ячейку без заливки (нативный стиль
  // «активная ячейка, грид не сфокусирован»). Фокусируем грид, чтобы выделение
  // выглядело как обычное. На интеракции мышью грид уже в фокусе -> focus().
  useEffect(() => {
    if (gridSelectionExternal?.current !== undefined) {
      dataEditorRef.current?.focus();
    }
  }, [gridSelectionExternal]);

  const {
    interactionSessionStore,
    beginOrGetInteractionSession,
    consumeCanvasClickResult,
  } = useCanvasInteractionSession();
  const applyCanvasEditorActivation = useCanvasEditorActivation(
    interactionSessionStore,
  );

  const {
    selection,
    handleGridSelectionChange,
    handleSelectionCleared,
    rangeSelect,
  } = useNativeGridSelection({
    cellsSelectionMode,
    columns: columnsLast,
    gridSelection: gridSelectionExternal,
    onGridSelectionChange: onGridSelectionChangeExternal,
    onSelectionEmit,
  });

  const selectionVisualState = useSelectionGeometry({
    columns: columnsLast,
    selection,
    cellsSelectionMode,
    checkboxSelectedRowIndexes,
  });

  // Обогащаем controlled-сеттер подсветки самим объектом строки (rows[index]),
  // чтобы потребитель получал узел напрямую и не слушал onCellClicked. Если
  // сеттер не задан — оставляем undefined (uncontrolled-режим сохраняется).
  const handleHighlightActiveRowChange = useMemo(
    () =>
      onHighlightActiveRowChange
        ? (index: number | undefined) =>
            onHighlightActiveRowChange(
              index,
              index !== undefined ? rows[index] : undefined,
            )
        : undefined,
    [onHighlightActiveRowChange, rows],
  );

  // Две независимые от glide оси выделения: колонки по клику на шапку и строки
  // по клику/драгу на нумерации. Стейты, хендлеры и drawFocusRing — в хуке.
  const {
    selectedColumnIndexes,
    selectedColumnKeysAll,
    selectColumnsByKeys,
    selectedColumnSet,
    headerSelectedRowIndexes,
    activeRow,
    numberingColumnIndex,
    drawFocusRing,
    selectColumnFromHeader,
    handleGridSelectionWithColumnReset,
    handleSelectionClearedWithColumns,
  } = useTableSelectionSystem({
    columns: columnsLast,
    selection,
    cellsSelectionMode,
    highlightActiveType,
    enableColumnSelection,
    enableRowSelection,
    enableSelectAll,
    leadingServiceColumnsCount: selectionVisualState.leadingServiceColumnsCount,
    dataRowCount: rows.length + summaryRowsLength,
    handleGridSelectionChange,
    handleSelectionCleared,
    onSelectionEmit,
    highlightActiveRow,
    onHighlightActiveRowChange: handleHighlightActiveRowChange,
    isHighlightActiveRowControlled: highlightActiveRowControlled,
  });

  // Отдаём объединённое выделение колонок (ключи) наверх (контрл-блок). Эффект,
  // а не вызов в рендере: колбэк потребителя может быть нестабильным.
  useEffect(() => {
    onColumnSelectionChange?.(selectedColumnKeysAll);
  }, [selectedColumnKeysAll, onColumnSelectionChange]);

  // Follow: перевыделяем по ключам после закрепления. Порядок колонок после
  // пина обновляется с ЛАГОМ в рендер (columnsOrder в useReorderDragable
  // синкается эффектом), поэтому columnsLast сначала ещё старый. Применяем на
  // КАЖДУЮ смену columnsLast, а pending гасим отложенно — таймаут сбрасывается
  // на каждом новом columnsLast, так что реально гаснет, когда порядок устоялся
  // (на финальном, уже переставленном, columnsLast).
  useEffect(() => {
    if (!pendingColumnSelectionKeys) return undefined;
    selectColumnsByKeys(pendingColumnSelectionKeys);
    const timer = setTimeout(() => onColumnSelectionApplied?.(), 0);
    return () => clearTimeout(timer);
  }, [
    pendingColumnSelectionKeys,
    columnsLast,
    selectColumnsByKeys,
    onColumnSelectionApplied,
  ]);

  // При выделении строк по нумерации вся строка активна по всем колонкам —
  // используется для затемнения шапок data-колонок (как нативный 'row').
  const hasSelectedRows = headerSelectedRowIndexes.length > 0;

  // Data-колонки, покрытые ячейками rangeStack (multi-range-cell). Их шапки
  // темнеем так же, как у активного диапазона — чтобы multi-range выглядел как
  // выделение колонок/строк (current.range уже покрыт isActiveHeaderColumn).
  const rangeStackColumnSet = useMemo(() => {
    const set = new Set<number>();
    const stack = selection.current?.rangeStack;
    if (stack) {
      const firstDataCol = selectionVisualState.firstDataColumnIndex;
      for (const rect of stack) {
        const startCol = Math.max(rect.x, firstDataCol);
        for (let col = startCol; col < rect.x + rect.width; col += 1) {
          set.add(col);
        }
      }
    }
    return set;
  }, [selection, selectionVisualState.firstDataColumnIndex]);

  // Выделена ли колонка. По этому признаку темнеет её шапка и показываются
  // кнопки фильтра и сортировки.
  //
  // Подробнее: колонка считается выделенной, если она активная колонка
  // текущего диапазона, выделена кликом по шапке (своё состояние, у Glide
  // selection.columns намеренно пуст) или покрыта ячейками rangeStack.
  // Выделение строк сюда не входит: оно темнит шапки всех колонок, но
  // кнопки на всех шапках показывать незачем.
  const isColumnInSelection = useCallback(
    (columnIndex: number) =>
      selectionVisualState.isActiveHeaderColumn(columnIndex) ||
      selectedColumnSet.has(columnIndex) ||
      rangeStackColumnSet.has(columnIndex),
    [selectionVisualState, selectedColumnSet, rangeStackColumnSet],
  );

  const columnsForRender = useMemo(() => {
    return columnsLast.map((column, columnIndex) => {
      const themeOverride = { ...(column.themeOverride ?? {}) };
      let hasThemeOverride = Object.keys(themeOverride).length > 0;

      if (column.isServiceColumn) {
        themeOverride.bgCell = theme.selectionServiceBg;
        hasThemeOverride = true;
      }

      // Колонку нумерации не подсвечиваем при выделении строки: accentLight
      // (заливка) и accentColor (рамка/ring) прозрачные → скрытый current glide
      // в этой колонке не красит число и не рисует бледную рамку.
      // В «чистом» виде заливку (accentLight) оставляем: служебная зона
      // красится регионами со стилем 'accent', то есть цветом выделения
      // своей строки (белой, зебры, отмеченной), и число внутри выделенной
      // строки и так на этом фоне.
      if (columnIndex === numberingColumnIndex) {
        if (appearanceVariant !== 'clean') {
          themeOverride.accentLight = 'transparent';
        }
        themeOverride.accentColor = 'transparent';
        hasThemeOverride = true;
      }

      // Шапка темнеет единым активным цветом, когда колонка участвует в
      // выделении любым способом: активная колонка текущего диапазона;
      // выделенная по шапке (selection.columns намеренно пуст, glide не красит
      // accentColor, и наш bgHeader виден); покрытая ячейками rangeStack
      // (multi-range-cell); либо выделены строки по нумерации, тогда темнеют
      // шапки всех data-колонок, как нативный highlightActiveType='row'.
      const headerIsActive =
        isColumnInSelection(columnIndex) ||
        (hasSelectedRows && !column.isServiceColumn);

      if (headerIsActive) {
        themeOverride.bgHeader = theme.selectionServiceActiveBg;
        themeOverride.bgHeaderHasFocus = theme.selectionServiceActiveBg;
        // Выделенная шапка под курсором темнеет на ступень (hoverActive-пара),
        // а не светлеет штатным ховером — иначе hover визуально «снимал» бы
        // выделение.
        themeOverride.bgHeaderHovered = theme.bgHeaderSelectedHovered;
        hasThemeOverride = true;
      }

      if (!hasThemeOverride) {
        return column;
      }

      return {
        ...column,
        themeOverride,
      };
    });
  }, [
    columnsLast,
    isColumnInSelection,
    hasSelectedRows,
    numberingColumnIndex,
    appearanceVariant,
    theme.selectionServiceBg,
    theme.selectionServiceActiveBg,
    theme.bgHeaderSelectedHovered,
  ]);

  // ─── hoverEffects.row: подсветка строки под курсором (цвета из темы).
  // По умолчанию ВКЛЮЧЕНА (решение дизайн-системы — строка под курсором
  // показывает hover-ступень); выключается явно hoverEffects: { row: false }.
  const isRowHoverEnabled = hoverEffects?.row !== false;

  // ─── appearance.zebra: строки с чётным индексом с серым фоном (см. getRowThemeOverride).
  const isZebra = appearance?.zebra === true;

  // Единый источник ховера: логическая ячейка (контент-флаги, ref) и
  // физическая строка (фон, state). Разница семантик описана в useHoverState.
  // Строки, которые подсвечивает курсор: на объединённом блоке все строки
  // блока, иначе строка под мышью.
  const resolveHoverRows = useCallback<ResolveHoverRows>(
    (originColInd, originRowInd, rawRowInd) => {
      const column = columnsForRender[originColInd];
      const row = rows[originRowInd];
      if (!column?.rowSpan || !row) {
        return { from: rawRowInd, to: rawRowInd };
      }
      const blockRows = getRowSpan(column.rowSpan, {
        row,
        column,
        colInd: originColInd,
        rowInd: originRowInd,
        ctxs,
        theme,
        hovered: { cellHover: false, rowHover: false },
        active: { cellActive: false, rowActive: false },
      } as CellInfo<R, SR>);
      return blockRows
        ? { from: blockRows[0], to: blockRows[1] }
        : { from: rawRowInd, to: rawRowInd };
    },
    [columnsForRender, rows, ctxs, theme],
  );

  const { hoveredCellRef, setHoveredCell, hoverRows, onHoverRowChange } =
    useHoverState({
      isRowHoverEnabled,
      dataEditorRef,
      columnsCount: columnsForRender.length,
      rowsCount: rows.length,
      resolveHoverRows,
    });
  // Строки под курсором для фона: только в режиме hoverEffects.row.
  const activeHoverRows = isRowHoverEnabled ? hoverRows : undefined;

  // Регионы ошибок (ячейки и строки) и сводка по строкам считаются по окну
  // видимой области (см. JSDoc хука).
  const {
    errorCellRanges,
    errorRowIndexes,
    rowErrorsByIndex,
    trackVisibleRegion,
  } = useErrorCellRanges({
    columns: columnsLast,
    rows,
    freezeColumns,
    isErrorRow,
    collectRowErrors,
  });

  const handleVisibleRegionChanged = useCallback<
    NonNullable<GlideProps['onVisibleRegionChanged']>
  >(
    (range, tx, ty, extras) => {
      trackVisibleRegion(range);
      onVisibleRegionChangedExternal?.(range, tx, ty, extras);
    },
    [trackVisibleRegion, onVisibleRegionChangedExternal],
  );

  const getCellContentGlide = useCallback(
    (
      [colInd, rowInd]: [number, number],
      getCellContentOptions?: { applyCanvasEditorActivation?: boolean },
    ): GridCell => {
      // Terrible hack to force update when setCellValue requests it
      noop(updateVersion);
      const shouldApplyCanvasEditorActivation =
        getCellContentOptions?.applyCanvasEditorActivation !== false;

      const applyPendingSelfEditorActivation = (
        cellContent: GridCell,
      ): GridCell => {
        if (!shouldApplyCanvasEditorActivation) {
          return cellContent;
        }

        return applyCanvasEditorActivation([colInd, rowInd], cellContent);
      };

      const isSummaryRow = !!bottomSummaryRows && rowInd > rows.length - 1;
      const row = rows[rowInd];
      const column = columnsForRender[colInd];

      if (!column) {
        return createEmptyCellGlide();
      }
      // --------------- getCellContentGlide for SummaryRow --------------------------
      if (isSummaryRow) {
        const summaryRow = bottomSummaryRows[rowInd - rows.length];

        const { renderSummaryCell, colSpan } = column;

        // Фон итоговой строки красим по её ячейкам, а не на всю строку. Если
        // задать фон на строку, пустое место под данными заливается тем же
        // фоном и при горизонтальном скролле наезжает на саму итоговую строку.
        const summaryThemeOverride = { bgCell: theme.bgSummaryRow };

        if (!renderSummaryCell || !summaryRow) {
          return createEmptyCellGlide({ themeOverride: summaryThemeOverride });
        }

        const cellInfo: CellInfo<R, SR> = {
          row: summaryRow as R,
          column,
          colInd,
          rowInd,
          ctxs,
          theme,
          hovered: {
            cellHover: false,
            rowHover: false,
          },
          active: {
            cellActive: false,
            rowActive: false,
          },
        };

        const jsxElement = renderSummaryCell(
          cellInfo as unknown as Omit<typeof cellInfo, 'row'> & { row: SR },
        );

        const span = getSpan(
          colSpan,
          cellInfo as Omit<typeof cellInfo, 'row'> & { row: R },
        );

        const options = {
          data: '',
          themeOverride: summaryThemeOverride,
          ...(span && { span }),
        };

        return applyPendingSelfEditorActivation(
          glideCellRenderer({
            jsxElement,
            canvasCellCache,
            cellInfo: cellInfo as Omit<typeof cellInfo, 'row'> & { row: R },
            options: {
              ...options,
              getPortalEventTarget: () => portalEventTargetRef?.current ?? null,
              refTable,
            },
          }),
        );
      }

      // --------------- getCellContentGlide for row --------------------------
      if (!row) {
        return createEmptyCellGlide();
      }

      // Ячейка, покрытая блоком, отдаёт контент верхней-левой ячейки блока: у всех
      // ячеек блока одинаковые span/spanRows и значение. Форк убирает повторы и
      // сводит клик, навигацию и редактирование к верхней-левой ячейке.
      const lightInfo = (
        col: (typeof columnsForRender)[number],
        c: number,
        r: number,
      ): CellInfo<R, SR> =>
        ({
          row: rows[r],
          column: col,
          colInd: c,
          rowInd: r,
          ctxs,
          theme,
          hovered: { cellHover: false, rowHover: false },
          active: { cellActive: false, rowActive: false },
        } as CellInfo<R, SR>);

      const [originColInd, originRowInd] = findBlockOrigin(
        colInd,
        rowInd,
        (c, r) => {
          const col = columnsForRender[c];
          return col?.colSpan
            ? getSpan(col.colSpan, lightInfo(col, c, r))
            : null;
        },
        (c, r) => {
          const col = columnsForRender[c];
          return col?.rowSpan
            ? getRowSpan(col.rowSpan, lightInfo(col, c, r))
            : null;
        },
      );
      if (originColInd !== colInd || originRowInd !== rowInd) {
        // eslint-disable-next-line no-use-before-define
        return getCellContentGlide(
          [originColInd, originRowInd],
          getCellContentOptions,
        );
      }

      const hoveredPosition = hoveredCellRef.current;
      // Эти флаги считаются для каждой рендеримой ячейки с данными.
      // Так пользователь renderCell не зависит от координат курсора и внутренней модели выделения.
      const cellInfo: CellInfo<R, SR> = {
        row,
        column,
        colInd,
        rowInd,
        ctxs,
        theme,
        hovered: {
          cellHover:
            hoveredPosition?.colInd === colInd &&
            hoveredPosition?.rowInd === rowInd,
          rowHover: hoveredPosition?.rowInd === rowInd,
        },
        active: {
          // Источник активного состояния тот же, что используется для визуальной подсветки таблицы.
          cellActive: selectionVisualState.isActiveDataCell(colInd, rowInd),
          rowActive: selectionVisualState.isActiveRow(rowInd),
        },
      };
      // Сводка ошибок строки есть только у строк с ошибками и только когда
      // её собирают (collectRowErrors); ячейки без неё не трогаем.
      const rowErrors = rowErrorsByIndex.get(rowInd);
      if (rowErrors) {
        cellInfo.rowErrors = rowErrors;
      }

      const {
        renderCell,
        id,
        colSpan,
        rowSpan,
        spanAlign: spanAlignConfig,
        editable,
        contentAlign,
        columnThemeOverride,
      } = column;
      const displayData = row[id]?.toString?.() ?? 'NOT FOUND';

      const span = getSpan(colSpan, cellInfo);
      const spanRows = getRowSpan(rowSpan, cellInfo);

      // Объединённый блок ведёт себя и красится целиком: курсор на любой его
      // ячейке, выделение или выбранная строка, задевшие блок, меняют весь блок.
      const blockCols: readonly [number, number] = span ?? [colInd, colInd];
      const blockRows: readonly [number, number] = spanRows ?? [rowInd, rowInd];
      const isBlock = !!span || !!spanRows;
      if (isBlock) {
        const inBlockCols = (c: number) => c >= blockCols[0] && c <= blockCols[1];
        const inBlockRows = (r: number) => r >= blockRows[0] && r <= blockRows[1];
        cellInfo.hovered = {
          cellHover:
            !!hoveredPosition &&
            inBlockCols(hoveredPosition.colInd) &&
            inBlockRows(hoveredPosition.rowInd),
          rowHover: !!hoveredPosition && inBlockRows(hoveredPosition.rowInd),
        };
        cellInfo.active = {
          cellActive: rangeHasAny(blockRows[0], blockRows[1], (r) =>
            rangeHasAny(blockCols[0], blockCols[1], (c) =>
              selectionVisualState.isActiveDataCell(c, r),
            ),
          ),
          rowActive: rangeHasAny(
            blockRows[0],
            blockRows[1],
            selectionVisualState.isActiveRow,
          ),
        };
      }
      // Выбранная строка (highlightActiveType='row'), проходящая через ячейку
      // или блок.
      const blockActiveRow =
        activeRow !== undefined &&
        activeRow >= blockRows[0] &&
        activeRow <= blockRows[1]
          ? activeRow
          : undefined;
      // Только для ячеек внутри блока: spanAlign на одиночной ячейке переключил бы
      // её в форке на путь отрисовки для объединённых ячеек.
      const configuredSpanAlign =
        (span || spanRows) && spanAlignConfig
          ? typeof spanAlignConfig === 'function'
            ? spanAlignConfig(cellInfo)
            : spanAlignConfig
          : undefined;
      // Подпись блока в несколько строк по умолчанию сверху и остаётся
      // в видимой части блока при прокрутке.
      const spanAlign =
        spanRows && spanRows[0] !== spanRows[1]
          ? {
              vertical: 'top' as const,
              ...configuredSpanAlign,
              sticky: column.spanContentSticky ?? !renderCell,
            }
          : configuredSpanAlign;

      const cellIsEditable = (() => {
        if (!editable) {
          return false;
        }
        if (typeof editable === 'boolean') {
          return editable;
        }

        return editable(row);
      })();

      const columnThemeOverrideResult =
        typeof columnThemeOverride === 'function'
          ? columnThemeOverride(cellInfo)
          : undefined;

      // Состояния ячейки со своим цветом — см. theming/cell-fill-override.ts.
      // rowActive — выбранная строка (highlightActiveType='row'): цветная
      // ячейка в ней показывает свой hover, под курсором — hover2.
      // Под курсором, если строки под курсором проходят через ячейку или блок.
      const fillContext = {
        rowHover:
          activeHoverRows !== undefined &&
          activeHoverRows.from <= blockRows[1] &&
          activeHoverRows.to >= blockRows[0],
        rowActive: blockActiveRow !== undefined,
      };
      const fillOverride = cellIsEditable
        ? resolveCellFillOverride(getEditableCellFillStates(theme), fillContext)
        : columnThemeOverrideResult?.bgCell
        ? resolveConsumerFillOverride(
            columnThemeOverrideResult.bgCell,
            activeTheme,
            fillContext,
          )
        : undefined;

      // Фон блока по строкам, проходящим через него (выбранная, отмеченная
      // чекбоксом, под курсором). У ячейки со своим цветом состояния уже
      // учтены в fillOverride. Свой bgCell у блока отключает в гриде
      // построчные полосы фона внутри блока.
      const blockRowOverride =
        isBlock && !fillOverride
          ? resolveBlockRowOverride(theme, {
              rowHover: fillContext.rowHover,
              activeRow: blockActiveRow,
              checkboxRow: rangeHasAny(
                blockRows[0],
                blockRows[1],
                (r) => checkboxSelectedRowIndexes?.has(r) ?? false,
              ),
              activeRowChecked:
                blockActiveRow !== undefined &&
                (checkboxSelectedRowIndexes?.has(blockActiveRow) ?? false),
            })
          : undefined;

      // Кликнутая ячейка на выбранной строке: показываем только рамку, фон
      // остаётся как у строки (правило дизайнера).
      // Подробнее: glide красит выделенную ячейку цветом accentLight из её
      // темы. Кладём в accentLight тот же цвет, что и фон ячейки, — заливка
      // выделения становится невидимой (непрозрачный цвет glide не смешивает,
      // а просто подставляет). Работает только для одной выделенной ячейки:
      // если выделено больше, пересечение со строкой красится как выделение.
      const { soloDataCell } = selectionVisualState;
      const soloActiveCellOverride =
        fillContext.rowActive &&
        soloDataCell !== undefined &&
        soloDataCell[0] >= blockCols[0] &&
        soloDataCell[0] <= blockCols[1] &&
        soloDataCell[1] >= blockRows[0] &&
        soloDataCell[1] <= blockRows[1]
          ? {
              accentLight: fillOverride
                ? fillOverride.bgCell
                : resolveActiveRowBg(theme, {
                    rowHover: fillContext.rowHover,
                    checkboxChecked:
                      blockActiveRow !== undefined &&
                      (checkboxSelectedRowIndexes?.has(blockActiveRow) ?? false),
                  }),
            }
          : undefined;

      const options = {
        data: row[id]?.toString?.() ?? 'NOT FOUND',
        ...(cellIsEditable
          ? {
              readonly: false,
              allowOverlay: true,
            }
          : {
              readonly: true,
              ...(column.hasPreview === true && { allowOverlay: true }),
              ...(column.hasPreview === 'none' && { allowOverlay: false }),
            }),
        themeOverride: {
          ...columnThemeOverrideResult,
          ...blockRowOverride,
          ...fillOverride,
          ...soloActiveCellOverride,
        },
        contentAlign,
        ...(span && { span }),
        ...(spanRows && { spanRows }),
        ...(spanAlign && { spanAlign }),
      } satisfies TextCellOptions;

      if (!renderCell) {
        const txt = String(displayData);
        if (isPrimitive(txt)) {
          return applyPendingSelfEditorActivation(
            createTextCellGlide(txt, options),
          );
        }
        return applyPendingSelfEditorActivation(createEmptyCellGlide(options));
      }

      const cellInfoWithThemeOverride = columnThemeOverrideResult
        ? { ...cellInfo, theme: { ...theme, ...columnThemeOverrideResult } }
        : cellInfo;

      // У объединённой ячейки передаём выравнивание блока, чтобы ячейка-select
      // внутри расставила контент и уголок по высоте всего блока, а не одной строки.
      const jsxElement = renderCell(
        span || spanRows
          ? { ...cellInfoWithThemeOverride, __mergedCell: { align: spanAlign } }
          : cellInfoWithThemeOverride,
      );

      return applyPendingSelfEditorActivation(
        glideCellRenderer({
          jsxElement,
          canvasCellCache,
          cellInfo: cellInfoWithThemeOverride,
          options: {
            ...options,
            getPortalEventTarget: () => portalEventTargetRef?.current ?? null,
            refTable,
          },
        }),
      );
    },
    [
      updateVersion,
      bottomSummaryRows,
      rows,
      columnsForRender,
      ctxs,
      theme,
      activeTheme,
      isRowHoverEnabled,
      activeHoverRows,
      activeRow,
      checkboxSelectedRowIndexes,
      selectionVisualState,
      rowErrorsByIndex,
      canvasCellCache,
      portalEventTargetRef,
      applyCanvasEditorActivation,
    ],
  );

  const handleCellClickedBridge = useCallback<
    NonNullable<GlideProps['onCellClicked']>
  >(
    (cell, event) => {
      // Получаем текущее содержимое ячейки в формате Glide. Внутреннее чтение
      // для click bridge не должно consume-ить `editor: "open-on-click"`:
      // этот request должен увидеть сам Glide, когда будет открывать overlay.
      const glideCell = getCellContentGlide(cell as [number, number], {
        applyCanvasEditorActivation: false,
      });

      // Для обычной не-canvas ячейки оставляем стандартное поведение.
      if (!isCanvasCell(glideCell)) {
        onCellClickedExternal?.(cell, event);
        return;
      }

      // Запоминаем, был ли вызван glide preventDefault внутри этого обработчика.
      let glidePrevented = false;
      const originalPreventDefault = event.preventDefault;

      // Оборачиваем preventDefault, чтобы позже понять, пойдет ли Glide в renderer.onClick.
      event.preventDefault = () => {
        glidePrevented = true;
        originalPreventDefault();
      };

      // Строим ключ доступа к последнему renderData этой canvas-ячейки.
      const cellId = buildCellId(
        { colIndex: cell[0], rowIndex: cell[1] },
        event.bounds,
      );
      // Берем сохраненное дерево canvas-нод и click-area для текущей ячейки.
      const renderData = retrieveRenderData(cellId, glideCell);
      // Переводим координаты клика в систему координат нарисованного содержимого.
      const relativePoint = toContentPoint(
        { x: event.localEventX, y: event.localEventY },
        renderData,
      );
      const resolvedTarget = resolveCanvasCellInteractionTargetFromRenderData({
        cell: cell as [number, number],
        glideCell,
        rect: event.bounds,
        renderData,
        relativePoint,
      });
      const session = resolvedTarget
        ? interactionSessionStore.beginOrGet({
            cell,
            relativePoint,
            interaction: resolvedTarget.interaction,
            button: event.button,
            source: 'click',
          })
        : interactionSessionStore.beginOrGet({
            cell,
            relativePoint,
            interaction: createNormalCanvasInteraction(),
            button: event.button,
            source: 'click',
          });

      // Сначала выполняем onClick canvas-примитива и внутренние canvas-обработчики.
      const clickResult = performCanvasClick({
        cell: glideCell,
        rect: event.bounds,
        relativePoint,
        renderData,
        rowData: rows[cell[1]],
        rowIndex: cell[1],
      });
      const outcome = session
        ? buildEffectiveInteractionOutcome({
            decision: session.decision,
            propagationStopped: clickResult.propagationStopped,
            suppressGridDefault: clickResult.suppressGridDefault,
          })
        : {
            suppressExternalCellClick: clickResult.propagationStopped,
            suppressGridDefaultForClick: clickResult.suppressGridDefault,
          };

      if (session) {
        interactionSessionStore.consumePhase(session, 'cell-click');
        interactionSessionStore.storeClickResult(session, clickResult);
      }

      if (event.button === 0 && outcome.editorRequest?.target === 'self') {
        interactionSessionStore.armEditorRequest(
          session,
          outcome.editorRequest,
        );
      }

      // Если policy или runtime canvas-event просит не продолжать стандартный
      // click path таблицы, синхронно отражаем это в Glide.
      if (outcome.suppressGridDefaultForClick) {
        event.preventDefault();
        if (session?.decision.editorRequest) {
          interactionSessionStore.clear();
        }
      }

      // Внешний onCellClicked вызываем только если declarative policy или
      // runtime stopPropagation не остановили всплытие.
      if (!outcome.suppressExternalCellClick) {
        onCellClickedExternal?.(cell, event);
      }

      // Если второго шага Glide уже не будет, ничего не сохраняем.
      if (glidePrevented || event.button === 1) {
        interactionSessionStore.clear();
        return;
      }
    },
    [getCellContentGlide, interactionSessionStore, onCellClickedExternal, rows],
  );

  const handleCellContextMenuBridge = useCallback<
    NonNullable<GlideProps['onCellContextMenu']>
  >(
    (cell, event) => {
      if (
        interactionSessionStore.isMatchingRecent('contextmenu-capture', cell)
      ) {
        return;
      }

      onCellContextMenuExternal?.(cell, event);
    },
    [interactionSessionStore, onCellContextMenuExternal],
  );

  const customRenderers = useCustomRenderers({
    beginOrGetInteractionSession,
    consumeCanvasClickResult,
  });

  const columnsHeaderCanvasRootInstanceMap = useMemo(
    () => new Map<string, CellCanvasRoot>(),
    [],
  );
  const columnsGroupHeaderCanvasRootInstanceMap = useMemo(
    () => new Map<string, CellCanvasRoot>(),
    [],
  );
  const overlayPortalRef = useRef<HTMLDivElement>(null);
  // div-обертка над Glide для DOM-поиска элементов
  const containerRefInternal = useRef<HTMLDivElement>(null);
  const mergedContainerRef = useMemo(
    () => mergeRefs(containerRefInternal, containerRefExternal),
    [containerRefExternal],
  );
  const { drawHeader, onHeaderClicked } = useMemo(() => {
    const drawHeader: NonNullable<GlideProps['drawHeader']> = (
      drawArgs,
      drawContent,
    ) => {
      const { ctx, rect, columnIndex } = drawArgs;
      const column = columnsForRender[columnIndex];

      if (!column || !column.renderHeaderCell) {
        return drawContent();
      }

      const headerCellInfo: HeaderCellInfo<R, SR> = {
        column,
        drawArgs,
        columnIsSelected: isColumnInSelection(columnIndex),
        ctxs,
        theme,
      };

      let jsxElement = column.renderHeaderCell(headerCellInfo);

      if (!isCanvasContent(jsxElement)) {
        return drawContent();
      }

      if (typeof jsxElement === 'string') {
        jsxElement = (
          <Canvas.Container style={{ width: '100%' }} alignItems="center">
            <Canvas.Text>{jsxElement}</Canvas.Text>
          </Canvas.Container>
        );
      }

      const nodeId = `header-${column.id}-${columnIndex}`;
      const node = buildCanvasTree({
        element: jsxElement,
        idPrefix: nodeId,
        theme: theme as GlideThemeForRender,
      });

      // TODO: ВРЕМЕННОЕ РЕШЕНИЕ. НЕ СПАМИМ CellCanvasRoot (в будущем механизм кеширования нужен ограниченный)
      let canvasRootInstance;
      if (columnsHeaderCanvasRootInstanceMap.has(column.id)) {
        canvasRootInstance = columnsHeaderCanvasRootInstanceMap.get(column.id);
        canvasRootInstance?.setRootNode(node);
        if (canvasRootInstance?.rootNode) {
          canvasRootInstance.rootNode.style = {
            width: rect.width,
            height: rect.height,
          };
        }
      } else {
        canvasRootInstance = new CellCanvasRoot(node, nodeId);
        canvasRootInstance.rootNode.style = {
          width: rect.width,
          height: rect.height,
        };
        columnsHeaderCanvasRootInstanceMap.set(column.id, canvasRootInstance);
      }

      canvasRootInstance?.setPortalEventTarget(
        portalEventTargetRef?.current ?? null,
      );

      // Устанавливаем контекст для тултипа (аналогично контекстному меню).
      // theme нужен тултипам, которые считают позицию от размера строки
      canvasRootInstance?.setTooltipContext({
        column,
        ctxs,
        refTable,
        theme,
      });

      // Где курсор над шапкой, знает Glide: берём позицию из его аргументов.
      //
      // Подробнее: Glide сам перерисовывает шапку при каждом движении мыши,
      // на кадрах анимации наведения и при уходе курсора, и каждый раз
      // передаёт актуальные isHovered, hoverX и hoverY. Своё хранение позиции
      // в ref здесь не нужно и раньше ломало перерисовки не из mousemove.
      const hoverPos =
        drawArgs.isHovered &&
        drawArgs.hoverX !== undefined &&
        drawArgs.hoverY !== undefined
          ? { x: drawArgs.hoverX, y: drawArgs.hoverY }
          : undefined;

      const canvasBounds = ctx.canvas.getBoundingClientRect();
      const absoluteBounds = {
        x: canvasBounds.left + rect.x,
        y: canvasBounds.top + rect.y,
        width: rect.width,
        height: rect.height,
      };

      return canvasRootInstance?.render(ctx, rect, hoverPos, absoluteBounds);
    };

    const onHeaderClicked: NonNullable<GlideProps['onHeaderClicked']> = (
      columnIndex,
      event,
    ) => {
      const column = columnsForRender[columnIndex];

      if (!column) return;

      // 1) Сначала отдаём клик canvas-кнопкам шапки (сортировка/фильтр/кастом).
      //    Если под точкой интерактивная нода (она декларирует interaction) —
      //    это клик по кнопке: её обработчик уже отработал, столбец НЕ выделяем.
      if (column.renderHeaderCell) {
        const rootInstance = columnsHeaderCanvasRootInstanceMap.get(column.id);
        if (rootInstance) {
          const interaction = rootInstance.getInteractionAtPoint(
            event.localEventX,
            event.localEventY,
          );
          rootInstance.dispatchPointerEvent(
            'click',
            event.localEventX,
            event.localEventY,
          );
          if (interaction) return;
        }
      }

      // 2) Выделение столбца (включается/сбрасывается внутри хука; работает при
      //    любом highlightActiveType — независимая ось).
      selectColumnFromHeader(columnIndex, event);
    };

    return { drawHeader, onHeaderClicked };
  }, [
    columnsForRender,
    ctxs,
    theme,
    isColumnInSelection,
    columnsHeaderCanvasRootInstanceMap,
    portalEventTargetRef,
    dataEditorRef,
    // onHeaderClicked: column-select делегирован useTableSelectionSystem
    selectColumnFromHeader,
  ]);

  // Клик по шапке группы выделяет все листовые колонки этой группы.
  //
  // У каждой колонки есть group-путь — имена групп сверху вниз (напр.
  // ['Метрики','Продажи']). Берём путь кликнутой колонки, обрезаем до уровня, по
  // которому кликнули, — это префикс, однозначно задающий группу. Колонки одной
  // группы всегда идут в ряд, поэтому от кликнутой расширяем диапазон влево и
  // вправо, пока у соседа тот же префикс; листья диапазона выделяем разом.
  //
  // Префикс сравниваем как строку — путь склеиваем через '\0' (символ NUL). NUL
  // взят разделителем, потому что он не может встретиться в имени группы, и склейка
  // получается без коллизий: пути ['A','B'] и ['AB'] дают разные ключи ('A\0B' и
  // 'AB'), тогда как join('/') или join('') их бы схлопнули в один.
  const onGroupHeaderClicked = useCallback<
    NonNullable<GlideProps['onGroupHeaderClicked']>
  >(
    (colIndex, event) => {
      const clickedColumn = columnsForRender[colIndex];
      if (!enableColumnSelection || !clickedColumn) {
        onGroupHeaderClickedExternal?.(colIndex, event);
        return;
      }

      // путь кликнутой колонки и уровень клика
      const clickedPath = getColumnGroupPath(clickedColumn.group);
      const clickedLevel = Math.max(0, clickedPath.indexOf(event.group));
      // ключ группы — префикс пути до уровня клика (про '\0' см. выше)
      const prefixKey = clickedPath.slice(0, clickedLevel + 1).join('\0');

      // у колонки тот же префикс, что у кликнутой?
      const hasSamePrefix = (index: number): boolean => {
        const column = columnsForRender[index];
        return (
          column !== undefined &&
          getColumnGroupPath(column.group)
            .slice(0, clickedLevel + 1)
            .join('\0') === prefixKey
        );
      };

      // растим диапазон влево и вправо, пока префикс совпадает
      let start = colIndex;
      let end = colIndex;
      while (start - 1 >= 0 && hasSamePrefix(start - 1)) start -= 1;
      while (end + 1 < columnsForRender.length && hasSamePrefix(end + 1))
        end += 1;

      // ключи листьев диапазона (без служебных) → выделяем
      const keys: string[] = [];
      for (let i = start; i <= end; i += 1) {
        const column = columnsForRender[i];
        if (column && !column.isServiceColumn) keys.push(column.id);
      }
      if (keys.length > 0) selectColumnsByKeys(keys);

      onGroupHeaderClickedExternal?.(colIndex, event);
    },
    [
      enableColumnSelection,
      columnsForRender,
      selectColumnsByKeys,
      onGroupHeaderClickedExternal,
    ],
  );

  // Групп-ячейка подсвечивается, если ВСЕ её листья выделены (транзитивно вверх —
  // имя верхней группы есть в group-пути всех её листьев). «Лист выделен» —
  // ровно те же условия, что затемняют bgHeader листовой колонки в
  // columnsForRender: активный диапазон ячеек, column-select, rangeStack,
  // выделение строк. Поэтому подсветка группы симметрична подсветке её шапок.
  const fullySelectedGroupNames = useMemo(() => {
    const groupAllSelected = new Map<string, boolean>();
    columnsForRender.forEach((column, columnIndex) => {
      if (column.isServiceColumn) return;
      const leafSelected =
        selectionVisualState.isActiveHeaderColumn(columnIndex) ||
        selectedColumnSet.has(columnIndex) ||
        rangeStackColumnSet.has(columnIndex) ||
        hasSelectedRows;
      getColumnGroupPath(column.group).forEach((name) => {
        if (name === '') return;
        const prev = groupAllSelected.get(name);
        groupAllSelected.set(name, (prev ?? true) && leafSelected);
      });
    });

    const result = new Set<string>();
    groupAllSelected.forEach((allSelected, name) => {
      if (allSelected) result.add(name);
    });
    return result;
  }, [
    columnsForRender,
    selectionVisualState,
    selectedColumnSet,
    rangeStackColumnSet,
    hasSelectedRows,
  ]);

  // Фон полностью выделенной группы повторяет выделенную листовую шапку:
  // idle — тёмный selected (selectionServiceActiveBg), под курсором — на
  // ступень глубже (bgHeaderSelectedHovered), те же пары, что у листа.
  const getGroupDetails = useCallback<
    NonNullable<GlideProps['getGroupDetails']>
  >(
    (groupName) => {
      // TODO: при пробросе внешнего getGroupDetails вернуть композицию
      // `getGroupDetailsExternal?.(name) ?? base` и `...base.overrideTheme` ниже.
      const align = groupAlignMap?.get(groupName);
      const base = { name: groupName, ...(align && { spanAlign: align }) };
      if (!fullySelectedGroupNames.has(groupName)) return base;
      return {
        ...base,
        overrideTheme: {
          bgGroupHeader: theme.selectionServiceActiveBg,
          bgGroupHeaderHovered: theme.bgHeaderSelectedHovered,
        },
      };
    },
    [
      groupAlignMap,
      fullySelectedGroupNames,
      theme.selectionServiceActiveBg,
      theme.bgHeaderSelectedHovered,
    ],
  );

  // useGlideElements: поиск DOM-элементов Glide
  const {
    glideContainer: glideContainerEl,
    isReady: isGlideReady,
    renderInContainer,
  } = useGlideElements(containerRefInternal, fullScreened);

  const isEditorOverlayInside = editorOverlayPortal === 'inside';
  useOverlayPortalFix(containerRefInternal, isEditorOverlayInside);

  useCanvasContextMenuInteraction({
    eventTarget: glideContainerEl ?? containerRefInternal.current,
    dataEditorRef,
    getCellContent: getCellContentGlide,
    interactionSessionStore,
    onCellContextMenuExternal,
  });

  const { unstickyCallbackRef, mergedExperimental } = useUnstickyHeader({
    enabled: unstickyHeader,
    portalEventTargetRef,
    headerHeight: restProps.headerHeight,
    groupHeaderHeight: restProps.groupHeaderHeight,
    experimental: restProps.experimental,
  });

  const mergedRef = useMemo(
    () => mergeRefs(dataEditorRef, refTable, unstickyCallbackRef),
    [refTable, unstickyCallbackRef],
  );

  const experimental = useMemo<GlideProps['experimental']>(() => {
    if (enableLowDprHairline === undefined) {
      return mergedExperimental;
    }

    return {
      ...mergedExperimental,
      enableLowDprHairline,
    };
  }, [enableLowDprHairline, mergedExperimental]);

  const onMouseMove: NonNullable<GlideProps['onMouseMove']> = useCallback(
    (event) => {
      onMouseMoveExternal?.(event);

      if (event.kind === 'cell') {
        const cellCallback = () => {
          const colInd = event.location[0];
          const rowInd = event.location[1];
          const row = rows[rowInd];
          const column = columnsForRender[colInd];

          if (!row || !column || column.isServiceColumn) {
            setHoveredCell(null);
            return;
          }

          setHoveredCell({ colInd, rowInd });
          return;
        };

        cellCallback();
      } else {
        setHoveredCell(null);
      }
    },
    [columnsForRender, onMouseMoveExternal, rows, setHoveredCell],
  );

  const loadRedrawOptions = {
    dataEditorRef,
    rowCount: rows.length,
    columnCount: columnsForRender.length,
    headerAndGroupHeaderRowsCount:
      1 + (restProps.groupHeaderHeight ?? []).length /* 1 - это сам header */,
  };
  useIconLoadRedraw(loadRedrawOptions);

  useFontLoadRedraw(loadRedrawOptions);

  const onColumnMoved = useMemo((): GlideProps['onColumnMoved'] => {
    if (!onColumnsReorder) {
      return undefined;
    }
    const onColumnMoved: NonNullable<GlideProps['onColumnMoved']> = (a, b) => {
      const sourceKey = columnsForRender[a]?.id;
      const targetKey = columnsForRender[b]?.id;

      if (typeof sourceKey !== 'string' || typeof targetKey !== 'string')
        return;

      onColumnsReorder(sourceKey, targetKey);
    };

    return onColumnMoved;
  }, [columnsForRender, onColumnsReorder]);

  const drawGroupHeader = useMemo((): GlideProps['drawGroupHeader'] => {
    if (!renderGroupHeader) return undefined;
    return (args, drawContent) => {
      const result = renderGroupHeader(args);
      if (result === 'default') {
        return drawContent();
      }

      const customGroupName = 'defaultWithCustomGroupName' in result;

      if (customGroupName) {
        return drawContent(result.defaultWithCustomGroupName);
      }

      const { groupName, rect, ctx } = args;

      let jsxElement = result;

      if (!isCanvasContent(jsxElement)) {
        return drawContent();
      }

      if (typeof jsxElement === 'string') {
        jsxElement = (
          <Canvas.Container style={{ width: '100%' }} alignItems="center">
            <Canvas.Text>{jsxElement}</Canvas.Text>
          </Canvas.Container>
        );
      }

      const nodeId = groupName;
      const node = buildCanvasTree({
        element: jsxElement,
        idPrefix: nodeId,
        theme: theme as GlideThemeForRender,
      });

      const canvasRootInstance = new CellCanvasRoot(node, nodeId);
      canvasRootInstance.rootNode.style = {
        width: rect.width,
        height: rect.height,
      };
      canvasRootInstance.setPortalEventTarget(
        portalEventTargetRef?.current ?? null,
      );

      columnsGroupHeaderCanvasRootInstanceMap.set(nodeId, canvasRootInstance);

      // Позиция курсора — из аргументов Glide, как у шапки колонки.
      const hoverPos =
        args.isHovered && args.hoverX !== undefined && args.hoverY !== undefined
          ? { x: args.hoverX, y: args.hoverY }
          : undefined;

      const canvasBounds = ctx.canvas.getBoundingClientRect();
      const absoluteBounds = {
        x: canvasBounds.left + rect.x,
        y: canvasBounds.top + rect.y,
        width: rect.width,
        height: rect.height,
      };

      return canvasRootInstance.render(ctx, rect, hoverPos, absoluteBounds);
    };
  }, [
    columnsGroupHeaderCanvasRootInstanceMap,
    renderGroupHeader,
    theme,
    portalEventTargetRef,
  ]);

  const getRowThemeOverride = useMemo((): GlideProps['getRowThemeOverride'] => {
    const hasSelectedRows = !!checkboxSelectedRowIndexes?.size;
    const hoverFrom = activeHoverRows?.from;
    const hoverTo = activeHoverRows?.to;
    const isHoveredRow = (rowInd: number) =>
      hoverFrom !== undefined &&
      hoverTo !== undefined &&
      rowInd >= hoverFrom &&
      rowInd <= hoverTo;

    if (
      !summaryRowsLength &&
      !hasSelectedRows &&
      !isZebra &&
      activeHoverRows === undefined &&
      activeRow === undefined
    ) {
      return undefined;
    }

    // Итоговые строки идут после строк данных: зебру на них не распространяем.
    const dataRowsLength = rows.length;

    const hoverBg = theme.bgRowHovered;

    return (rowInd) => {
      // Итоговые строки здесь намеренно НЕ красим: их фон задаётся по ячейкам
      // (в getCellContentGlide). Если вернуть фон на уровне строки, библиотека
      // таблицы растянет его вниз, в пустое место под данными, и при
      // горизонтальном скролле эта заливка наедет на итоговую строку и
      // перекроет её текст.

      // Выбранная строка (highlightActiveType='row'): светло-голубой фон,
      // под курсором и с нажатым чекбоксом — на ступень темнее.
      // Подробнее: это не выделение, поверх ничего не накладывается. Фон
      // выбирает resolveActiveRowBg (theming/cell-fill-override.ts).
      // accentLight нужен на случай, когда выделение мышью заходит на эту
      // строку: там ячейки красятся как выделение отмеченной строки.
      if (rowInd === activeRow) {
        const hovered = isHoveredRow(rowInd);
        return {
          bgCell: resolveActiveRowBg(theme, {
            rowHover: hovered,
            checkboxChecked: checkboxSelectedRowIndexes?.has(rowInd) ?? false,
          }),
          accentLight: hovered
            ? theme.selectionActiveCheckboxHoveredBg
            : theme.selectionActiveCheckboxBg,
        };
      }

      // Строка, отмеченная чекбоксом: свой фон, под курсором — темнее.
      // Подробнее: под курсором строка темнеет целиком (bgSelectedRowHovered),
      // обычный серый фон строки под курсором к ней не применяется.
      // accentLight — цвет её ячеек, когда они попадают в выделение.
      if (checkboxSelectedRowIndexes?.has(rowInd)) {
        const hovered = isHoveredRow(rowInd);
        return {
          bgCell: hovered
            ? theme.bgSelectedRowHovered
            : theme.selectionCheckboxBg,
          accentLight: hovered
            ? theme.selectionActiveCheckboxHoveredBg
            : theme.selectionActiveCheckboxBg,
        };
      }

      // Зебра: строка с чётным индексом (первая, третья…) с серым фоном.
      // Подробнее: это цвет покоя строки, под курсором — на ступень темнее.
      // accentLight — цвет её ячеек в выделении (считается от цвета зебры).
      // Отмеченная и выбранная строки выше по приоритету и обработаны раньше.
      if (isZebra && rowInd % 2 === 0 && rowInd < dataRowsLength) {
        const hovered = isHoveredRow(rowInd);
        return {
          bgCell: hovered ? theme.bgZebraRowHovered : theme.bgZebraRow,
          accentLight: hovered
            ? theme.bgZebraRowActiveHovered
            : theme.bgZebraRowActive,
        };
      }

      // Обычная строка под курсором: серый фон.
      // Подробнее: accentLight — цвет её ячеек в выделении под курсором
      // (на ступень темнее обычного выделения). Итоговые строки hover не
      // получают: их ячейки красятся сами, а фон строки залил бы серым
      // пустое место справа от колонок.
      if (isHoveredRow(rowInd) && rowInd < dataRowsLength) {
        return { bgCell: hoverBg, accentLight: theme.selectionActiveHoveredBg };
      }

      return {};
    };
  }, [
    summaryRowsLength,
    theme.selectionCheckboxBg,
    theme.bgRowHovered,
    theme.bgSelectedRowHovered,
    theme.bgSelectedRowActiveHovered,
    theme.selectionActiveCheckboxBg,
    theme.selectionActiveCheckboxHoveredBg,
    theme.selectionActiveHoveredBg,
    theme.bgZebraRow,
    theme.bgZebraRowHovered,
    theme.bgZebraRowActive,
    theme.bgZebraRowActiveHovered,
    checkboxSelectedRowIndexes,
    isRowHoverEnabled,
    isZebra,
    rows.length,
    activeHoverRows,
    activeRow,
  ]);

  // ─── onItemHovered: единый агрегатор hover-логики (тултипы, окрашивание строки)
  const { onItemHovered, hideTooltip } = useItemHoveredHandler(
    {
      columnsLast: columnsForRender,
      rows,
      ctxs,
      refTable,
      theme,
      portalEventTargetRef,
      externalOnItemHovered: onItemHoveredExternal,
      onHoverRowChange,
    },
    dataEditorRef,
  );
  hideTooltipRef.current = hideTooltip;

  // Все прямоугольники подсветки собирает один модуль, там же описан порядок
  // слоёв целиком (см. карту в useColoringLayers).
  const highlightRegionsFinal = useColoringLayers({
    theme,
    cellsSelectionMode,
    selection,
    serviceColumnsCount: selectionVisualState.leadingServiceColumnsCount,
    activeDataRange: selectionVisualState.activeDataRange,
    outlineRange: selectionVisualState.outlineRange,
    checkboxSelectedRowIndexes,
    errorCellRanges,
    errorRowIndexes,
    highlightRegionsExternal,
    selectedColumnIndexes,
    headerSelectedRowIndexes,
    activeRow,
    totalRows: rows.length + summaryRowsLength,
    columnsCount: columnsLast.length,
    isRowHoverEnabled,
    hoverRows,
    dataRowsCount: rows.length,
    serviceZoneFollowsRow: appearanceVariant === 'clean',
  });

  const wrapperStyle = useMemo<CSSProperties | undefined>(() => {
    if (!containerStyle && !contentStateNode && !hideGrid) {
      return undefined;
    }

    return {
      ...containerStyle,
      ...(contentStateNode ? { position: 'relative' as const } : undefined),
      ...(hideGrid ? { height: '100%', minHeight: 0 } : undefined),
    };
  }, [containerStyle, contentStateNode, hideGrid]);

  return (
    <div
      ref={mergedContainerRef}
      className={containerClassName}
      style={wrapperStyle}
    >
      {isEditorOverlayInside
        ? createPortal(
            <StyledOverlayPortal
              ref={overlayPortalRef}
              onAnimationEndCapture={(e) => e.stopPropagation()} // важно, чтобы слушатели модальных окон не перехватывали фокус
              id="portal"
            />,
            containerRefInternal?.current ?? document.body,
          )
        : createPortal(
            <StyledOverlayPortal id="portal" ref={overlayPortalRef} />,
            document.body,
          )}
      {
        createPortal(
          <StyledOverlayPortal id="portal2" />,
          document.body,
        ) /* id="portal2" создан для выпадающего списка CellEditorCombobox, поскольку id=portal не удовлетворяет внутри модальных окон
          у него должен быть  document.body
        */
      }
      {!hideGrid && (
        <StyledGlideDataEditor
          ref={mergedRef}
          className="gdg-table"
          portalElementRef={overlayPortalRef}
          theme={theme}
          getRowThemeOverride={getRowThemeOverride}
          onHeaderClicked={onHeaderClicked}
          onGroupHeaderClicked={onGroupHeaderClicked}
          onMouseMove={onMouseMove}
          drawHeader={drawHeader}
          drawGroupHeader={drawGroupHeader}
          getGroupDetails={getGroupDetails}
          getCellContent={getCellContentGlide as GlideProps['getCellContent']}
          columns={columnsForRender}
          rows={rows.length + summaryRowsLength}
          freezeTrailingRows={summaryRowsLength}
          freezeColumns={freezeColumns}
          minColumnWidth={minColumnWidth}
          maxColumnAutoWidth={maxColumnAutoWidth}
          maxColumnWidth={maxColumnWidth}
          columnSelect="none"
          columnSelectionBlending="exclusive"
          drawFocusRing={drawFocusRing}
          gridSelection={selection}
          onGridSelectionChange={handleGridSelectionWithColumnReset}
          onSelectionCleared={handleSelectionClearedWithColumns}
          width={width ?? '100%'}
          onColumnMoved={onColumnMoved}
          onColumnResize={resizableColumn ? onColumnResizeInternal : undefined}
          customRenderers={customRenderers}
          rowHeight={rowH}
          highlightRegions={highlightRegionsFinal}
          rangeSelect={rangeSelect}
          smoothScrollX
          smoothScrollY
          // overscrollX={16}
          headerHeight={DEFAULT_HEADER_HEIGHT}
          onCellClicked={handleCellClickedBridge}
          onCellContextMenu={handleCellContextMenuBridge}
          onItemHovered={onItemHovered}
          onVisibleRegionChanged={handleVisibleRegionChanged}
          {...restProps}
          experimental={experimental}
          // Copy/paste glide отключены, обрабатываются нашей реализацией
          // (feature-cell-transfer), которая поддерживает subRow, tree, copyData,
          // валидацию типов и нормализацию чисел. Хардкод, чтобы внешний код
          // не мог случайно включить встроенный clipboard glide.
          keybindings={{ ...restProps.keybindings, copy: false, paste: false }}
          onPaste={false}
        />
      )}
      {/* EmptyState, ErrorState */}
      {contentStateNode}
      {containerSlot}
      {isGlideReady &&
        glideContainerEl &&
        renderOverlayFeatures?.({
          containerElement: glideContainerEl,
          renderInContainer,
        })}
    </div>
  );
};
