/* eslint-disable no-plusplus */
import '@daisforge/glide-data-grid/dist/index.css';

import {
  DataEditorRef,
  GridCell,
  GridColumn,
  GridSelection,
  isReadWriteCell,
  Rectangle,
} from '@daisforge/glide-data-grid';
import type { CSSProperties } from 'react';
import { SELECT_LIST_PORTAL_ID } from '@ui-kit/components/TableCanvasSharedConstants';
import { mergeRefs, useActiveTheme } from '@ui-kit/utils';
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { glideCellRenderer } from './cellRenderer';
import {
  DEFAULT_HEADER_HEIGHT,
  DEFAULT_SPAN_VERTICAL_ALIGN,
  EDITOR_BLOOM,
} from './constants';
import {
  useColoringLayers,
  useNativeGridSelection,
  useSelectionGeometry,
  useTableSelectionSystem,
} from './hooks/selection';
import { BlockAutoHeight } from './hooks/autoRowHeight/BlockAutoHeight';
import { useKeepCellInView } from './hooks/autoRowHeight/useKeepCellInView';
import { useScrollAnchor } from './hooks/autoRowHeight/useScrollAnchor';
import {
  paintActiveHeaderBackground,
  useActiveHeadersRedraw,
} from './hooks/useActiveHeadersRedraw';
import { useActiveRowsRedraw } from './hooks/useActiveRowsRedraw';
import { useAnimatedRowHeight } from './hooks/useAnimatedRowHeight';
import { useErrorCellRanges } from './hooks/useErrorCellRanges';
import { useCanvasContextMenuInteraction } from './hooks/useCanvasContextMenuInteraction';
import { useCanvasEditorActivation } from './hooks/useCanvasEditorActivation';
import { useCanvasInteractionSession } from './hooks/useCanvasInteractionSession';
import { useCustomRenderers } from './hooks/useCustomRenderers';
import { useGlideElements } from './hooks/useGlideElements';
import { useHoverState } from './hooks/useHoverState';
import type { RowRange } from './hooks/visibleRows';
import { useSnapshotRepaint } from './hooks/useSnapshotRepaint';
import { useOverlayPortalFix } from './hooks/useOverlayPortalFix';
import { useItemHoveredHandler } from './hooks/useItemHoveredHandler';
import { useRowHeightGlide } from './hooks/useRowHeightGlide';
import { useStickyContentHeights } from './hooks/useStickyContentHeights';
import { useUnstickyHeader } from './hooks/useUnstickyHeader';
import { useColumnPortalReset } from './hooks/useColumnPortalReset';
import {
  buildCanvasTree,
  Canvas,
  CellCanvasRoot,
  createNormalCanvasInteraction,
  isCanvasCell,
  performCanvasClick,
  retrieveRenderData,
  buildCellId,
} from './lib/canvas';
import { useFontLoadRedraw, useIconLoadRedraw } from './lib/canvas/hooks';
import { buildEffectiveInteractionOutcome } from './lib/canvas/interaction/interactionManager';
import { resolveCanvasCellInteractionTargetFromRenderData } from './lib/canvas/interaction/resolveCanvasCellInteractionTarget';
import { StyledGlideDataEditor, StyledOverlayPortal } from './styled';
import { getTheme } from './theming';
import { TablePaletteOverrideContext } from './theming/palette-override';
import { resolveRowStateOverride } from './theming/row-state-override';
import {
  getEditableCellFillStates,
  getEditedCellFillStates,
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
  TableGlideProps,
} from './types';
import {
  createEmptyCellGlide,
  createTextCellGlide,
  TextCellOptions,
} from './utils/createCell';
import {
  EditorFrame,
  getEditorFrameVars,
  syncEditorFrame,
} from './utils/editorFrame';
import { cellEdgeInset, gridLinesAroundCell } from './utils/cellEdgeInset';
import { createBlockEditedLookup } from './utils/hasEditedCellInBlock';
import { EMPTY_SELECTION } from './hooks/selection/useNativeGridSelection';
import { findFirstDataColumnIndex } from './hooks/selection/rectGeometry';
import { useSelectionProjection } from './hooks/selection/useSelectionProjection';
import { findBlockOrigin } from './utils/findBlockOrigin';
import { mergeThemeOverrides } from './utils/mergeThemeOverrides';
import { queryGlideElements } from './utils/queryGlideElements';
import type { ResolveHoverRows } from './hooks/useHoverState';
import { getSpan } from './utils/getSpan';
import {
  getColumnGroupPath,
  handleGroupHeaderClick,
} from './utils/groupHeaderClick';
import { getRowSpan } from './utils/getRowSpan';
import { GroupHeaderParts } from './utils/groupHeaderParts';
import {
  isBlockCut,
  isBlockRowHovered,
  rangesOverlap,
  createSetRangeHitCache,
} from './utils/blockRanges';
import { isCanvasContent, isPrimitive } from './utils/typeGuards';
import {
  EMPTY_RESIZED_WIDTHS,
  reconcileResizedWidths,
  recordResizedWidth,
  widthOfColumn,
  type ActiveColumnResize,
  type ResizedWidthsMap,
} from './utils/resizedColumnWidths';

/** Функция-болванка. Ничего не делает */
function noop(..._: unknown[]) {
  // no operation performed
}

// utils

const EMPTY_AXIS_INDEXES: number[] = [];
const EMPTY_COLUMN_SET = new Set<number>();

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
/** Разделитель имён групп в ключе выделенных групп, в именах не встречается */
const GROUP_KEY_SEPARATOR = '\u0000';

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
  maxAutoRowHeight,
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
  focusOnStateChange = true,
  // Выделение колонок — независимая ось (НЕ через highlightActiveType).
  // По умолчанию включено; работает при любом highlightActiveType.
  enableColumnSelection = true,
  // Выделение строк по колонке нумерации — независимая ось. По умолчанию включено.
  enableRowSelection = true,
  // Выделение всей таблицы кликом по шапке колонки нумерации. По умолчанию включено.
  enableSelectAll = true,
  // Рамка у каждого Ctrl-диапазона ячеек, а не только у активного.
  outlineEachRange = false,
  enableLowDprHairline,
  // Controlled нативное выделение (значение + сеттер).
  gridSelection: gridSelectionExternal,
  onGridSelectionChange: onGridSelectionChangeExternal,
  // Канал для copy/paste (selectionRef потребителя) — отдельно от controlled.
  onSelectionEmit,
  onSelectionSync,
  selectionView,
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
  isCellEdited,
  isErrorRow,
  collectRowErrors,
  onCellClicked: onCellClickedExternal,
  onCellContextMenu: onCellContextMenuExternal,
  onGroupHeaderClicked: onGroupHeaderClickedExternal,
  onColumnResizeStart: onColumnResizeStartExternal,
  onColumnResizeEnd: onColumnResizeEndExternal,
  // TODO: внешний getGroupDetails пока не прокидываем (см. композицию ниже).
  // getGroupDetails: getGroupDetailsExternal,
  onMouseMove: onMouseMoveExternal,
  onVisibleRegionChanged: onVisibleRegionChangedExternal,
  portalElementRef: _portalElementRef, // на всякий вытащили, чтобы в составе resProps не перезаписал внутреннюю логику.
  ...restProps
}: TableGlideProps<R, SR>) => {
  const activeTheme = useActiveTheme();
  const appearanceVariant = appearance?.variant ?? 'default';
  // Подмена палитры есть только у стенда подбора цветов в Storybook.
  const paletteOverride =
    useContext(TablePaletteOverrideContext)?.[activeTheme];
  const theme = useMemo(
    () => getTheme(rowSize, activeTheme, appearanceVariant, paletteOverride),
    [rowSize, activeTheme, appearanceVariant, paletteOverride],
  );

  const summaryRowsLength = bottomSummaryRows?.length ?? 0;

  // Glide обновляет ширину во время drag. Локальная копия удерживает её на экране,
  // пока props владельца не подтвердят итоговую ширину.
  const [resizedColsMap, setResizedColsMap] =
    useState<ResizedWidthsMap>(EMPTY_RESIZED_WIDTHS);
  // Обработчик resize стабилен, поэтому читает последние columns через ref,
  // не добавляя их в зависимости useCallback.
  const columnsRef = useRef(columns);
  columnsRef.current = columns;
  const activeColumnResizeRef = useRef<ActiveColumnResize | null>(null);

  const columnWidthAt = useCallback((columnIndex: number, id: string) => {
    const columns = columnsRef.current;
    const column = columns[columnIndex];

    if (column?.id === id) return widthOfColumn(column);

    const columnById = columns.find((candidate) => candidate.id === id);
    return columnById ? widthOfColumn(columnById) : undefined;
  }, []);

  const onColumnResizeStartInternal = useCallback<
    NonNullable<TableGlideProps<R, SR>['onColumnResizeStart']>
  >(
    (column, newSize, colIndex, newSizeWithGrow) => {
      activeColumnResizeRef.current = column.id
        ? {
            id: column.id,
            startWidth: columnWidthAt(colIndex, column.id),
          }
        : null;

      onColumnResizeStartExternal?.(column, newSize, colIndex, newSizeWithGrow);
    },
    [columnWidthAt, onColumnResizeStartExternal],
  );

  const onColumnResizeEndInternal = useCallback<
    NonNullable<TableGlideProps<R, SR>['onColumnResizeEnd']>
  >(
    (column, newSize, colIndex, newSizeWithGrow) => {
      onColumnResizeEndExternal?.(column, newSize, colIndex, newSizeWithGrow);

      // Glide вызывает этот обработчик для перетаскиваемой колонки и затем
      // для остальных выделенных. Завершаем сессию только для колонки, с которой
      // начался drag; внешние callbacks при этом получают все вызовы.
      if (column.id && activeColumnResizeRef.current?.id === column.id) {
        activeColumnResizeRef.current = null;
        setResizedColsMap(
          (prev) =>
            reconcileResizedWidths(columnsRef.current, prev).resizedWidths,
        );
      }
    },
    [onColumnResizeEndExternal],
  );

  const { onColumnResizeStep, onColumnMoved: resetOnColumnMoved } =
    useColumnPortalReset(portalEventTargetRef);

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

      // Ширину колонки меняют: якоря сдвинулись, тултип и открытый Popover
      // прячем, наведение на время ресайза выключаем.
      onColumnResizeStep();

      onColumnResize?.(col, newSize, colIndex, newSizeWithGrow);

      // Базовую ширину фиксируем при начале drag, а не на каждом его шаге:
      // владелец может обновлять props с задержкой или ограничивать ширину.
      setResizedColsMap((prev) => {
        const activeResize = activeColumnResizeRef.current;
        const previousResize = prev.get(col.id);
        let propsWidth = previousResize
          ? previousResize.propsWidth
          : columnWidthAt(colIndex, col.id);

        if (activeResize?.id === col.id) {
          propsWidth = activeResize.startWidth;
        }

        return recordResizedWidth(prev, col.id, newSize, propsWidth);
      });
    },
    [columnWidthAt, onColumnResize, onColumnResizeStep],
  );

  // Применяем локальные ширины; обновлённые владельцем значения удаляются из кеша.
  // Неизвестные сейчас колонки сохраняются: TableCanvas может скрыть их и позже показать снова.
  const { columns: columnsLast, resizedWidths: reconciledResizedWidths } =
    useMemo(
      () =>
        reconcileResizedWidths(
          columns,
          resizedColsMap,
          activeColumnResizeRef.current ?? undefined,
        ),
      [columns, resizedColsMap],
    );

  // Сбрасываем устаревшие временные ширины после commit, не обновляя состояние во время render.
  // Проверка текущей карты защищает resize, который мог произойти после вычисления результата.
  useEffect(() => {
    if (reconciledResizedWidths === resizedColsMap) return;
    setResizedColsMap((prev) =>
      prev === resizedColsMap ? reconciledResizedWidths : prev,
    );
  }, [reconciledResizedWidths, resizedColsMap]);

  const {
    rowHeightGlide,
    trackAutoRowHeightRegion,
    autoHeightReporter,
    takeAnchorShift,
  } = useRowHeightGlide({
    rowHeight,
    rows,
    rowSize,
    columns: columnsLast,
    theme,
    maxAutoRowHeight,
    stickyRows: restProps.stickyRows,
  });
  const rowH = useAnimatedRowHeight(rowHeightGlide);

  const [updateVersion, setUpdateVersion] = useState(0);
  const canvasCellCache = useMemo(
    () => new WeakMap<R, Map<string, CanvasCellCacheEntry>>(),
    [],
  );
  // Высота содержимого блоков с прилипанием, снимается при отрисовке. Форк не сжимает
  // содержимое меньше неё, а уводит его целиком вместе с краем блока.
  const stickyContentHeights = useStickyContentHeights(rows, columnsLast);
  // Отрисовка читает высоту строк из ссылки: её смена сама перерисовывает таблицу.
  const rowHeightRef = useRef(rowH);
  rowHeightRef.current = rowH;
  const dataEditorRef = useRef<DataEditorRef | null>(null);
  // Полная перерисовка таблицы для тестовой сборки Storybook: перед снимком и
  // для сверки в тестах перерисовки. В приложении её никто не вызывает.
  // Подробнее: функцию регистрирует useSnapshotRepaint, только если подключён
  // декоратор withCanvasSnapshots (STORYBOOK_SCREENSHOT_TEST=1). Вызывают её
  // прогон снимков (window.tableCanvasScreenshotRepaint) и тесты перерисовки
  // (window.tableCanvasRedraw). Без декоратора нет и отметок о кадрах (onFrameDrawn).
  const repaintSnapshot = useCallback(() => {
    if (!dataEditorRef.current) return false;
    // Новая версия getCellContent заставляет Glide перерисовать всю видимую область.
    // Частичный updateCells может накапливать пиксели по краям обрезанных ячеек.
    setUpdateVersion((version) => version + 1);
    return true;
  }, []);
  const onFrameDrawn = useSnapshotRepaint(repaintSnapshot, dataEditorRef);

  const {
    interactionSessionStore,
    beginOrGetInteractionSession,
    consumeCanvasClickResult,
  } = useCanvasInteractionSession();
  const applyCanvasEditorActivation = useCanvasEditorActivation(
    interactionSessionStore,
  );

  // Выделение сменили из кода (controlled state), а не мышью или клавиатурой.
  // Снимаем свой Ctrl-выбор колонок и строк и сообщаем копированию, вставке и
  // протяжке заполнения о новом выделении.
  // Подробнее: Ctrl-выбор сбрасывает система выделения, она объявлена ниже,
  // поэтому функция сброса приходит через ref.
  const resetAxesRef = useRef<() => void>();
  const handleExternalSelectionChange = useCallback(
    (next: GridSelection, initial: boolean, preserveColumnSelection = false) => {
      // При монтировании Ctrl-выбора ещё нет, сбрасывать нечего
      if (!initial && !preserveColumnSelection) resetAxesRef.current?.();
      onSelectionSync?.(next);
    },
    [onSelectionSync],
  );
  // Прилипшие строки (stickyRows) для точечных дорисовок.
  // Подробнее: glide рисует их всегда, но в видимую область не включает, поэтому
  // дорисовки добавляют их отдельно. Читаются через функцию с постоянной
  // ссылкой, чтобы новый массив от потребителя не пересоздавал хуки.
  const stickyRowsRef = useRef(restProps.stickyRows);
  stickyRowsRef.current = restProps.stickyRows;
  const getStickyRows = useCallback(() => stickyRowsRef.current, []);

  const snapshot = selectionView?.history.current;
  const {
    selection: nativeSelection,
    applyProjectedSelection,
    isProjectedSelection,
    handleGridSelectionChange,
    handleSelectionCleared,
    rangeSelect,
    spanRangeBehavior,
  } = useNativeGridSelection({
    cellsSelectionMode,
    columns: selectionView?.loading && snapshot ? snapshot.view.columns : columnsLast,
    previousControlled: snapshot?.controlled,
    previousLeadingColumns: snapshot && findFirstDataColumnIndex(snapshot.view.columns),
    gridSelection: gridSelectionExternal,
    onGridSelectionChange: onGridSelectionChangeExternal,
    onSelectionEmit,
    onExternalSelectionChange: handleExternalSelectionChange,
  });

  // div-обертка над Glide для DOM-поиска элементов
  const containerRefInternal = useRef<HTMLDivElement>(null);

  // Якорь прокрутки при автовысоте: строки выше экрана выросли, а видимое
  // содержимое остаётся на месте.
  // Подробнее: сначала якорь сдвигает прокрутку на рост строк выше него,
  // потом докрутка к активной ячейке. Иначе докрутка видела бы ячейку в кадре,
  // а якорь после неё уводил бы верх строки за край на величину роста.
  useScrollAnchor({
    enabled: rowHeight === 'auto',
    containerRef: containerRefInternal,
    rowHeights: rowHeightGlide,
    takeShift: takeAnchorShift,
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
    hasAxisSelection,
    isNativeColumnSelection,
    selectedColumnIndexes: ownColumns,
    selectedColumnKeysAll,
    selectColumnsByKeys,
    selectedColumnSet: ownColumnSet,
    headerSelectedRowIndexes: ownRows,
    activeRow,
    numberingColumnIndex,
    drawFocusRing,
    selectColumnFromHeader,
    handleGridSelectionWithColumnReset,
    handleSelectionClearedWithColumns,
    resetAxes,
  } = useTableSelectionSystem({
    columns: columnsLast,
    selection: nativeSelection,
    cellsSelectionMode,
    highlightActiveType,
    enableColumnSelection,
    enableRowSelection,
    enableSelectAll,
    leadingServiceColumnsCount: findFirstDataColumnIndex(columnsLast),
    dataRowCount: rows.length + summaryRowsLength,
    handleGridSelectionChange,
    handleSelectionCleared,
    highlightActiveRow,
    onHighlightActiveRowChange: handleHighlightActiveRowChange,
    isHighlightActiveRowControlled: highlightActiveRowControlled,
  });
  resetAxesRef.current = resetAxes;
  // selectColumnFromHeader пересоздаётся на каждую смену выделения. Клик по шапке
  // зовёт его через ref, чтобы drawHeader оставался прежним и glide не перерисовывал
  // шапку на каждый клик.
  const selectColumnFromHeaderRef = useRef(selectColumnFromHeader);
  selectColumnFromHeaderRef.current = selectColumnFromHeader;

  // Отдаём объединённое выделение колонок (ключи) наверх (контрл-блок). Эффект,
  // а не вызов в рендере: колбэк потребителя может быть нестабильным.
  useEffect(() => {
    onColumnSelectionChange?.(selectedColumnKeysAll);
  }, [selectedColumnKeysAll, onColumnSelectionChange]);

  // После закрепления колонок выделяем те же колонки заново, по ключам.
  // Делаем это один раз, когда порядок колонок устоялся.
  // Подробнее: порядок колонок после закрепления доходит до рендера с задержкой
  // (columnsOrder в useReorderDragable обновляется в эффекте), поэтому
  // columnsLast сначала ещё старый. Таймер сбрасывается при смене порядка и
  // срабатывает, когда порядок больше не меняется: наружу уходит один
  // onChange с новыми индексами, а не два (первый со старыми). Следим за
  // порядком ключей, а не за ссылкой на массив и обработчики: новый массив с тем
  // же порядком на каждом рендере иначе откладывал бы применение без конца.
  const columnsOrderKey = useMemo(
    () => columnsLast.map((column) => column.id).join('|'),
    [columnsLast],
  );
  const selectColumnsByKeysRef = useRef(selectColumnsByKeys);
  selectColumnsByKeysRef.current = selectColumnsByKeys;
  const onColumnSelectionAppliedRef = useRef(onColumnSelectionApplied);
  onColumnSelectionAppliedRef.current = onColumnSelectionApplied;
  useEffect(() => {
    if (!pendingColumnSelectionKeys) return undefined;
    const timer = setTimeout(() => {
      selectColumnsByKeysRef.current(pendingColumnSelectionKeys);
      onColumnSelectionAppliedRef.current?.();
    }, 0);
    return () => clearTimeout(timer);
  }, [pendingColumnSelectionKeys, columnsOrderKey]);

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

      // Шапку выделенной колонки здесь не красим, это делает drawHeader.
      // Подробнее: если красить через тему колонки, на каждый клик
      // пересобирался бы весь массив колонок, и glide при числе колонок
      // больше ста перерисовывал бы весь экран.

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
    numberingColumnIndex,
    appearanceVariant,
    theme.selectionServiceBg,
  ]);

  // Блок колонок может начинаться только на колонке с colSpan: findBlockOrigin
  // обходит их, а не все колонки левее ячейки.
  const spanColumnIndexes = useMemo(
    () =>
      columnsForRender.flatMap((column, columnIndex) =>
        column.colSpan ? [columnIndex] : []
      ),
    [columnsForRender]
  );

  // ─── hoverEffects.row: подсветка строки под курсором (цвета из темы).
  // По умолчанию ВКЛЮЧЕНА (решение дизайн-системы — строка под курсором
  // показывает hover-ступень); выключается явно hoverEffects: { row: false }.
  const isRowHoverEnabled = hoverEffects?.row !== false;

  // ─── appearance.zebra: строки с чётным индексом с серым фоном (см. getRowThemeOverride).
  const isZebra = appearance?.zebra === true;

  // Видимая область таблицы и обновление фона открытого редактора.
  // Подробнее: обе ссылки заполняются ниже, а нужны уже здесь: видимой областью
  // ограничиваются точечные дорисовки строк, а фон редактора меняется вместе
  // со строками под курсором.
  const visibleRegionRef = useRef<Rectangle | null>(null);
  const updateEditorBgRef = useRef<() => void>();

  // Данные ячейки без наведения и выделения: по ним считаются границы
  // объединённых блоков (colSpan, rowSpan).
  const getProbeInfo = useCallback(
    (colInd: number, rowInd: number): CellInfo<R, SR> =>
      ({
        row: rows[rowInd],
        column: columnsForRender[colInd],
        colInd,
        rowInd,
        ctxs,
        theme,
        hovered: { cellHover: false, rowHover: false },
        active: { cellActive: false, rowActive: false },
      } as CellInfo<R, SR>),
    [rows, columnsForRender, ctxs, theme],
  );

  // Верхняя левая ячейка объединённого блока, в который попала ячейка.
  const findCellBlockOrigin = useCallback(
    (colInd: number, rowInd: number) =>
      findBlockOrigin(
        colInd,
        rowInd,
        spanColumnIndexes,
        (c, r) => {
          const col = columnsForRender[c];
          return col?.colSpan ? getSpan(col.colSpan, getProbeInfo(c, r)) : null;
        },
        (c, r) => {
          const col = columnsForRender[c];
          return col?.rowSpan
            ? getRowSpan(col.rowSpan, getProbeInfo(c, r))
            : null;
        },
      ),
    [columnsForRender, getProbeInfo, spanColumnIndexes],
  );

  const projectedSelection = useSelectionProjection({
    view: selectionView,
    history: selectionView?.history,
    columns: columnsLast,
    selection: nativeSelection,
    controlled: gridSelectionExternal,
    hasAxes: hasAxisSelection,
    selectedRows: ownRows,
    columnsSelected: isNativeColumnSelection,
    getBlock(col, row) {
      const [x, y] = findCellBlockOrigin(col, row);
      const column = columnsForRender[x];
      const info = getProbeInfo(x, y);
      const right = getSpan(column?.colSpan, info)?.[1] ?? x;
      const bottom = getRowSpan(column?.rowSpan, info)?.[1] ?? y;
      return { x, y, width: right - x + 1, height: bottom - y + 1 };
    },
    apply: applyProjectedSelection,
  });

  const selection = projectedSelection ?? nativeSelection;
  // Controlled-выделение приходит, когда грид НЕ в фокусе (напр. клик по внешней
  // кнопке) — тогда glide рисует якорную ячейку без заливки (нативный стиль
  // «активная ячейка, грид не сфокусирован»). Фокусируем грид, чтобы выделение
  // выглядело как обычное. На интеракции мышью грид уже в фокусе -> focus().
  useEffect(() => {
    if (
      focusOnStateChange &&
      gridSelectionExternal?.current !== undefined &&
      !projectedSelection &&
      !isProjectedSelection
    ) {
      dataEditorRef.current?.focus();
    }
  }, [gridSelectionExternal, focusOnStateChange, projectedSelection, isProjectedSelection]);

  const hideAxes = projectedSelection === EMPTY_SELECTION;
  const selectedColumnIndexes = hideAxes ? EMPTY_AXIS_INDEXES : ownColumns;
  const selectedColumnSet = hideAxes ? EMPTY_COLUMN_SET : ownColumnSet;
  const headerSelectedRowIndexes = hideAxes ? EMPTY_AXIS_INDEXES : ownRows;

  const selectionVisualState = useSelectionGeometry({
    columns: columnsLast,
    selection,
    cellsSelectionMode,
    checkboxSelectedRowIndexes,
  });
  // Выделение для отрисовки ячеек. Лежит в ref, чтобы функция содержимого
  // ячеек не менялась на каждый клик и glide не перерисовывал весь экран.
  // Подробнее: для glide новая функция getCellContent значит «поменялось
  // всё», и он перерисовывал весь экран. Ref обновляется в рендере, до
  // эффектов glide.
  // Строки, у которых сменился признак active, дорисовываются отдельно
  // (useActiveRowsRedraw).
  const selectionVisualStateRef = useRef(selectionVisualState);
  selectionVisualStateRef.current = selectionVisualState;

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

  // Признаки выделения для шапки. В ref, чтобы drawHeader не менялся на каждый
  // клик (подробнее у drawHeader).
  const isColumnInSelectionRef = useRef(isColumnInSelection);
  isColumnInSelectionRef.current = isColumnInSelection;
  const hasSelectedRowsRef = useRef(hasSelectedRows);
  hasSelectedRowsRef.current = hasSelectedRows;

  // Прыжок с клавиатуры через ещё не измеренные строки: докручиваем к ячейке,
  // когда строки дорастут до своей высоты
  useKeepCellInView({
    enabled: rowHeight === 'auto' && !projectedSelection && !isProjectedSelection,
    dataEditorRef,
    cell: selection.current?.cell,
    rowHeights: rowHeightGlide,
  });

  // Строки, которые подсвечивает курсор: на объединённом блоке все строки
  // блока, иначе строка под мышью.
  const resolveHoverRows = useCallback<ResolveHoverRows>(
    (rawColInd, rawRowInd) => {
      const single = { from: rawRowInd, to: rawRowInd };
      if (!rows[rawRowInd]) {
        return single;
      }
      const [originColInd, originRowInd] = findCellBlockOrigin(
        rawColInd,
        rawRowInd,
      );
      const rowSpan = columnsForRender[originColInd]?.rowSpan;
      const blockRows = rowSpan
        ? getRowSpan(rowSpan, getProbeInfo(originColInd, originRowInd))
        : null;
      return blockRows ? { from: blockRows[0], to: blockRows[1] } : single;
    },
    [columnsForRender, rows, getProbeInfo, findCellBlockOrigin],
  );

  // Наведение курсора: ячейка под курсором (признаки наведения в содержимом
  // ячеек) и строки под курсором (фон строки). Чем они отличаются, описано в
  // useHoverState.
  const {
    hoveredCellRef,
    setHoveredCell,
    hoverRowsRef,
    onHoverRowChange,
    damageRows,
  } = useHoverState({
    isRowHoverEnabled,
    dataEditorRef,
    columnsCount: columnsForRender.length,
    rowsCount: rows.length,
    resolveHoverRows,
    visibleRegionRef,
    getPinnedRows: getStickyRows,
    onHoverRowsChange: () => updateEditorBgRef.current?.(),
  });

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

  const overlayPortalRef = useRef<HTMLDivElement | null>(null);
  const scrollPositionRef = useRef('');
  // Пока открыт редактор или предпросмотр, рамку ячейки или блока рисует он сам
  // (styled.ts), а canvas свою не рисует: режим drawFocusRing="no-editor" у Glide.
  // Ячейку под редактором запоминаем, чтобы обновлять фон редактора и двигать
  // рамку за блоком при прокрутке. Закрытие узнаём по оверлею в портале: Glide
  // об этом не сообщает.
  const editorCellRef = useRef<readonly [number, number]>();
  const editorFrameRef = useRef<EditorFrame>();
  const updateEditorFrameRef = useRef<() => void>();
  // Портал пересоздаётся, когда появляется контейнер таблицы (режим inside),
  // поэтому наблюдатель вешаем callback-ref'ом на актуальный элемент.
  const portalObserverRef = useRef<MutationObserver>();
  const setOverlayPortal = useCallback((portal: HTMLDivElement | null) => {
    overlayPortalRef.current = portal;
    portalObserverRef.current?.disconnect();
    portalObserverRef.current = undefined;
    if (!portal) return;
    const observer = new MutationObserver(() => {
      if (portal.querySelector("[id^='gdg-overlay-']")) return;
      editorFrameRef.current = undefined;
      editorCellRef.current = undefined;
    });
    observer.observe(portal, { childList: true });
    portalObserverRef.current = observer;
  }, []);

  // Подсвеченная строка для отрисовки. В ref по той же причине, что и
  // выделение выше.
  const activeRowRef = useRef(activeRow);
  activeRowRef.current = activeRow;

  // Строки на экране, их перерисовываем после догрузки шрифта или иконки.
  // Подробнее: раньше перерисовывались строки 0-29, и прокрученная таблица
  // оставалась запасным шрифтом до наведения или прокрутки.
  const getVisibleRowsForRedraw = useCallback((): RowRange | null => {
    const region = visibleRegionRef.current;
    return region ? { from: region.y, to: region.y + region.height } : null;
  }, []);

  const handleVisibleRegionChanged = useCallback<
    NonNullable<GlideProps['onVisibleRegionChanged']>
  >(
    (range, tx, ty, extras) => {
      visibleRegionRef.current = range;
      trackVisibleRegion(range);
      trackAutoRowHeightRegion(range);
      onVisibleRegionChangedExternal?.(range, tx, ty, extras);

      const scrollPosition = `${range.x}:${range.y}:${tx}:${ty}`;
      if (scrollPosition !== scrollPositionRef.current) {
        scrollPositionRef.current = scrollPosition;
        updateEditorFrameRef.current?.();
      }
    },
    [
      trackVisibleRegion,
      trackAutoRowHeightRegion,
      onVisibleRegionChangedExternal,
    ]
  );

  // Есть ли в блоке отмеченные строки: ответ на блок запоминается до смены отметок.
  const blockHasCheckedRow = useMemo(
    () => createSetRangeHitCache(checkboxSelectedRowIndexes),
    [checkboxSelectedRowIndexes],
  );

  // Дорисовываем строки и шапки, у которых сменилось выделение.
  // Подробнее: выделение и подсвеченная строка лежат в ref, glide об их смене
  // не знает.
  useActiveRowsRedraw({
    activeRow,
    activeRowsRange: selectionVisualState.activeRowsRange,
    damageRows,
    visibleRowsRef: visibleRegionRef,
    pinnedRows: restProps.stickyRows,
  });

  useActiveHeadersRedraw({
    selectedColumns: selectedColumnSet,
    hasSelectedRows,
    dataEditorRef,
    visibleRegionRef,
    columnsCount: columnsForRender.length,
    freezeColumns: freezeColumns ?? 0,
    stickyColumns: restProps.stickyColumns,
  });

  // Автовысота ячеек блоков по строкам (см. BlockAutoHeight). Новый экземпляр
  // на новые строки и колонки: прежние блоки к ним не относятся.
  const blockAutoHeight = useMemo(
    () => new BlockAutoHeight(),
    [rows, columnsForRender, autoHeightReporter],
  );

  const blockEdited = useMemo(
    () => isCellEdited && createBlockEditedLookup(rows, columnsForRender, isCellEdited),
    [rows, columnsForRender, isCellEdited],
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
          // Итоговые строки: пиксель слева и сверху оставляем всегда, как
          // прежний отступ по умолчанию; справа и снизу только у последней
          // колонки и строки.
          edgeInset: cellEdgeInset({
            hasLeftLine: true,
            hasTopLine: true,
            keepsRing: true,
            isLastColumn:
              (span ? span[1] : colInd) === columnsForRender.length - 1,
            isLastRow: rowInd === rows.length + summaryRowsLength - 1,
          }),
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
      const [originColInd, originRowInd] = findCellBlockOrigin(colInd, rowInd);
      if (originColInd !== colInd || originRowInd !== rowInd) {
        // eslint-disable-next-line no-use-before-define
        return getCellContentGlide(
          [originColInd, originRowInd],
          getCellContentOptions,
        );
      }

      const hoveredPosition = hoveredCellRef.current;
      const selectionState = selectionVisualStateRef.current;
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
          cellActive: selectionState.isActiveDataCell(colInd, rowInd),
          rowActive: selectionState.isActiveRow(rowInd),
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
      // Строки под курсором проходят через ячейку или блок.
      const hoverRowsNow = isRowHoverEnabled ? hoverRowsRef.current : undefined;
      const rowsHovered =
        hoverRowsNow !== undefined &&
        rangesOverlap(
          hoverRowsNow.from,
          hoverRowsNow.to,
          blockRows[0],
          blockRows[1],
        );
      // Флаг содержимого совпадает с фоном: все строки блока под курсором.
      cellInfo.hovered.rowHover = isBlockRowHovered(
        hoveredPosition?.rowInd,
        hoverRowsNow,
        blockRows,
      );
      if (isBlock) {
        const range = selectionState.activeDataRange;
        const rangeHitsRows =
          !!range &&
          rangesOverlap(
            range.y,
            range.y + range.height - 1,
            blockRows[0],
            blockRows[1],
          );
        cellInfo.active = {
          cellActive:
            rangeHitsRows &&
            rangesOverlap(
              range.x,
              range.x + range.width - 1,
              blockCols[0],
              blockCols[1],
            ),
          rowActive: rangeHitsRows,
        };
      }
      // Выбранная строка (highlightActiveType='row'), проходящая через ячейку
      // или блок.
      const activeRowNow = activeRowRef.current;
      const blockActiveRow =
        activeRowNow !== undefined &&
        activeRowNow >= blockRows[0] &&
        activeRowNow <= blockRows[1]
          ? activeRowNow
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
      const stickyBlockKey =
        spanRows &&
        spanRows[0] !== spanRows[1] &&
        (column.spanContentSticky ?? true)
          ? `${id}:${spanRows[0]}`
          : undefined;
      const stickyContentHeight =
        stickyBlockKey !== undefined
          ? stickyContentHeights.current.get(stickyBlockKey)
          : undefined;
      const spanAlign: GridCell['spanAlign'] =
        spanRows && spanRows[0] !== spanRows[1]
          ? {
              vertical: DEFAULT_SPAN_VERTICAL_ALIGN,
              ...configuredSpanAlign,
              sticky: stickyBlockKey !== undefined,
              ...(stickyContentHeight !== undefined && { stickyContentHeight }),
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
        rowHover: rowsHovered,
        rowActive: blockActiveRow !== undefined,
      };
      const edited = isBlock
        ? blockEdited?.(blockRows, blockCols)
        : !column.isServiceColumn && isCellEdited?.(row, id);
      const fillOverride = edited
        ? resolveCellFillOverride(getEditedCellFillStates(theme), fillContext)
        : cellIsEditable
        ? resolveCellFillOverride(getEditableCellFillStates(theme), fillContext)
        : columnThemeOverrideResult?.bgCell
        ? resolveConsumerFillOverride(
            columnThemeOverrideResult.bgCell,
            activeTheme,
            fillContext,
            paletteOverride?.stepFactor,
          )
        : undefined;

      // Фон блока по строкам, проходящим через него (выбранная, отмеченная
      // чекбоксом, под курсором). У ячейки со своим цветом состояния уже
      // учтены в fillOverride. Свой bgCell у блока отключает построчные
      // полосы фона внутри блока. Зебру блок не берёт: её полосы по строкам
      // рисует Glide.
      const blockActiveRowChecked =
        blockActiveRow !== undefined &&
        (checkboxSelectedRowIndexes?.has(blockActiveRow) ?? false);
      const blockRowOverride =
        isBlock && !fillOverride
          ? resolveRowStateOverride(theme, {
              rowHover: rowsHovered,
              active: blockActiveRow !== undefined,
              activeChecked: blockActiveRowChecked,
              checked: blockHasCheckedRow(blockRows[0], blockRows[1]),
              zebra: false,
            })
          : undefined;

      // Кликнутая ячейка на выбранной строке: показываем только рамку, фон
      // остаётся как у строки (правило дизайнера).
      // Подробнее: glide красит выделенную ячейку цветом accentLight из её
      // темы. Кладём в accentLight тот же цвет, что и фон ячейки, — заливка
      // выделения становится невидимой (непрозрачный цвет glide не смешивает,
      // а просто подставляет). Работает только для одной выделенной ячейки:
      // если выделено больше, пересечение со строкой красится как выделение.
      const { soloDataCell } = selectionState;
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
                    checkboxChecked: blockActiveRowChecked,
                  }),
            }
          : undefined;

      // Служебные колонки (нумерация, чекбокс) у строки под курсором: свой
      // цвет наведения.
      // Подробнее: тема ячейки сильнее темы строки, поэтому цвет ложится
      // поверх серого наведения строки. Раньше это был регион подсветки, но массив регионов
      // менялся на каждое движение мыши, и glide перерисовывал весь экран. В
      // «чистом» виде (appearance 'clean') служебные колонки красятся вместе
      // со строкой, своего цвета у них нет.
      const serviceHoverOverride =
        column.isServiceColumn && appearanceVariant !== 'clean' && rowsHovered
          ? { bgCell: theme.bgServiceRowHovered }
          : undefined;

      const themeOverride = mergeThemeOverrides(
        columnThemeOverrideResult,
        blockRowOverride,
        fillOverride,
        soloActiveCellOverride,
        serviceHoverOverride,
      );

      // Сколько пикселей у краёв ячейки содержимое не закрашивает (см.
      // CellEdgeInset). Где слева или сверху нет линии сетки, содержимое
      // доходит до края ячейки.
      const edgeInset = cellEdgeInset({
        ...gridLinesAroundCell(
          {
            verticalBorder: restProps.verticalBorder,
            horizontalBorder: restProps.horizontalBorder,
            hasCellBorders: restProps.getCellBorder !== undefined,
          },
          colInd,
          rowInd,
        ),
        keepsRing: cellInfo.active.cellActive || rowErrors !== undefined,
        isLastColumn: blockCols[1] === columnsForRender.length - 1,
        isLastRow: blockRows[1] === rows.length + summaryRowsLength - 1,
      });

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
        ...(themeOverride && { themeOverride }),
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
            edgeInset,
            getPortalEventTarget: () => portalEventTargetRef?.current ?? null,
            refTable,
          },
          // Автовысота: ячейка сообщает свою высоту, а ячейка блока на
          // несколько строк нет (см. BlockAutoHeight).
          autoHeight: autoHeightReporter
            ? blockAutoHeight.reporterFor(
                autoHeightReporter(row, rowInd, id, !!span),
                id,
                spanRows,
                (rowIndex) => {
                  const blockRow = rows[rowIndex];
                  if (blockRow) {
                    autoHeightReporter(blockRow, rowIndex, id, false).forget();
                  }
                },
              )
            : undefined,
          stickyContent:
            spanRows && stickyBlockKey !== undefined
              ? {
                  isCut: (visibleHeight) =>
                    isBlockCut(rowHeightRef.current, spanRows, visibleHeight),
                  report: (height) => {
                    if (
                      stickyContentHeights.current.get(stickyBlockKey) ===
                      height
                    ) {
                      return false;
                    }
                    stickyContentHeights.current.set(stickyBlockKey, height);
                    return true;
                  },
                }
              : undefined,
        })
      );
    },
    [
      updateVersion,
      bottomSummaryRows,
      rows,
      autoHeightReporter,
      blockAutoHeight,
      columnsForRender,
      findCellBlockOrigin,
      ctxs,
      theme,
      activeTheme,
      paletteOverride,
      isCellEdited,
      blockEdited,
      isRowHoverEnabled,
      appearanceVariant,
      checkboxSelectedRowIndexes,
      blockHasCheckedRow,
      rowErrorsByIndex,
      canvasCellCache,
      portalEventTargetRef,
      applyCanvasEditorActivation,
      summaryRowsLength,
      restProps.verticalBorder,
      restProps.horizontalBorder,
      restProps.getCellBorder,
    ],
  );

  // Помещается ли ячейка целиком в прокручиваемую часть таблицы: без
  // закреплённых колонок и липких колонок левее неё, как считает scrollTo в Glide.
  const fitsScrollArea = useCallback(
    (col: number, width: number) => {
      const { scroller } = queryGlideElements(containerRefInternal.current);
      if (!scroller) return false;
      const widthOf = (index: number) => {
        const column = columnsForRender[index];
        return column && 'width' in column ? column.width : 0;
      };
      let pinnedWidth = 0;
      for (let i = 0; i < (freezeColumns ?? 0); i++) pinnedWidth += widthOf(i);
      for (const stickyColumn of restProps.stickyColumns ?? []) {
        if (stickyColumn >= col) break;
        if (stickyColumn >= (freezeColumns ?? 0)) {
          pinnedWidth += widthOf(stickyColumn);
        }
      }
      return width <= scroller.clientWidth - pinnedWidth;
    },
    [columnsForRender, freezeColumns, restProps.stickyColumns],
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

      // Редактируемую ячейку, частично ушедшую за край или под закреплённые
      // колонки, докручиваем в видимую часть, как Glide делает при выборе
      // стрелками. Иначе редактор откроется во всю ширину ячейки и ляжет поверх
      // закреплённых колонок.
      //
      // Подробнее. Ячейку шире видимой части не докручиваем: Glide прокрутил бы
      // к её началу, и при каждом клике содержимое уезжало бы из-под курсора.
      // Только по горизонтали: у высокого блока Glide даёт первую строку, и по
      // вертикали таблица прыгала бы к началу блока. Если таблица сдвинулась,
      // этот клик редактор не открывает: Glide поставил бы его по старому месту
      // ячейки. Следующий клик откроет его уже на месте.
      if (
        glideCell.allowOverlay &&
        isReadWriteCell(glideCell) &&
        fitsScrollArea(cell[0], event.bounds.width)
      ) {
        const { scroller } = queryGlideElements(containerRefInternal.current);
        const scrollLeft = scroller?.scrollLeft;
        dataEditorRef.current?.scrollTo(cell[0], cell[1], 'horizontal');
        if (scroller && scroller.scrollLeft !== scrollLeft) {
          event.preventDefault();
        }
      }

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
      // Переводим координаты клика в систему координат внутри ячейки.
      const relativePoint = {
        x: event.localEventX,
        y: event.localEventY,
      };
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
        pointerOptions: { button: event.button, cellBounds: event.bounds },
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
    [
      fitsScrollArea,
      getCellContentGlide,
      interactionSessionStore,
      onCellClickedExternal,
      rows,
    ],
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
  const groupHeaderParts = useMemo(
    () => new GroupHeaderParts<CellCanvasRoot>(),
    []
  );
  useEffect(() => {
    groupHeaderParts.retain(
      new Set(
        columnsForRender.flatMap((column) => getColumnGroupPath(column.group))
      )
    );
  }, [groupHeaderParts, columnsForRender]);
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

      // Шапка выделенной колонки заливается цветом выделения.
      // Подробнее: колонка считается выделенной, если участвует в выделении любым
      // способом: активная колонка текущего диапазона; выделенная по шапке
      // (selection.columns намеренно пуст); покрытая ячейками rangeStack; либо
      // выделены строки по нумерации, тогда темнеют шапки всех колонок данных.
      // Под курсором шапка темнеет ещё на ступень, а не светлеет штатным
      // наведением, иначе наведение визуально снимало бы выделение. Признаки
      // читаются из ref, и glide об их смене не знает: шапки дорисовывает
      // useActiveHeadersRedraw.
      const columnIsSelected = isColumnInSelectionRef.current(columnIndex);
      const isActiveHeader =
        columnIsSelected ||
        (hasSelectedRowsRef.current && !column?.isServiceColumn);
      if (isActiveHeader) {
        paintActiveHeaderBackground(
          ctx,
          rect,
          columnIndex,
          drawArgs.hoverAmount,
          {
            active: theme.selectionServiceActiveBg,
            hovered: theme.bgHeaderSelectedHovered,
          },
        );
      }

      if (!column || !column.renderHeaderCell) {
        return drawContent();
      }

      // Своя отрисовка шапки (renderHeaderCell) получает цвет выделения в
      // теме. Шапка, которая сама заливает фон по теме, иначе потеряла бы его:
      // раньше этот цвет приходил через themeOverride колонки.
      const headerDrawArgs = isActiveHeader
        ? {
            ...drawArgs,
            theme: {
              ...drawArgs.theme,
              bgHeader: theme.selectionServiceActiveBg,
              bgHeaderHasFocus: theme.selectionServiceActiveBg,
              bgHeaderHovered: theme.bgHeaderSelectedHovered,
            },
          }
        : drawArgs;

      const headerCellInfo: HeaderCellInfo<R, SR> = {
        column,
        drawArgs: headerDrawArgs,
        columnIsSelected,
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
            undefined,
            { button: event.button, cellBounds: event.bounds },
          );
          if (interaction) return;
        }
      }

      // 2) Выделение столбца (включается/сбрасывается внутри хука; работает при
      //    любом highlightActiveType — независимая ось).
      selectColumnFromHeaderRef.current(columnIndex, event);
    };

    return { drawHeader, onHeaderClicked };
  }, [
    columnsForRender,
    ctxs,
    theme,
    columnsHeaderCanvasRootInstanceMap,
    portalEventTargetRef,
    dataEditorRef,
  ]);

  const onGroupHeaderClicked = useCallback<
    NonNullable<GlideProps['onGroupHeaderClicked']>
  >(
    (colIndex, event) =>
      handleGroupHeaderClick({
        colIndex,
        event,
        groupRoot: groupHeaderParts.rootAt(event.group, event.location[0]),
        columns: columnsForRender,
        enableColumnSelection,
        selectColumnsByKeys,
        onGroupHeaderClicked: onGroupHeaderClickedExternal,
      }),
    [
      enableColumnSelection,
      columnsForRender,
      selectColumnsByKeys,
      onGroupHeaderClickedExternal,
      groupHeaderParts,
    ]
  );

  // Групп-ячейка подсвечивается, если ВСЕ её листья выделены (транзитивно вверх:
  // имя верхней группы есть в group-пути всех её листьев). «Лист выделен» значит
  // ровно те же условия, что затемняют bgHeader листовой колонки в
  // columnsForRender: активный диапазон ячеек, выделение колонки по шапке,
  // rangeStack, выделение строк. Поэтому подсветка группы симметрична
  // подсветке её шапок.
  // Подробнее: набор считается заново на каждый клик, поэтому сначала
  // собираем ключ по содержимому. getGroupDetails пересоздаётся только при смене самих групп:
  // каждая его новая ссылка заставляет glide перерисовать шапку.
  const fullySelectedGroupsKey = useMemo(() => {
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

    const result: string[] = [];
    groupAllSelected.forEach((allSelected, name) => {
      if (allSelected) result.push(name);
    });
    return result.join(GROUP_KEY_SEPARATOR);
  }, [
    columnsForRender,
    selectionVisualState,
    selectedColumnSet,
    rangeStackColumnSet,
    hasSelectedRows,
  ]);
  const fullySelectedGroupNames = useMemo(
    () =>
      new Set(
        fullySelectedGroupsKey === ''
          ? []
          : fullySelectedGroupsKey.split(GROUP_KEY_SEPARATOR)
      ),
    [fullySelectedGroupsKey]
  );

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

  // onFrameDrawn есть только в тестовой сборке Storybook (см. useSnapshotRepaint).
  const experimental = useMemo<GlideProps['experimental']>(() => {
    if (enableLowDprHairline === undefined && onFrameDrawn === undefined) {
      return mergedExperimental;
    }

    return {
      ...mergedExperimental,
      ...(enableLowDprHairline !== undefined && { enableLowDprHairline }),
      ...(onFrameDrawn !== undefined && { onFrameDrawn }),
    };
  }, [enableLowDprHairline, mergedExperimental, onFrameDrawn]);

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
    getVisibleRows: getVisibleRowsForRedraw,
    getPinnedRows: getStickyRows,
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

      // Колонки переставлены, и якоря сдвинулись: прячем тултип и закрываем
      // открытый Popover этой таблицы.
      resetOnColumnMoved();

      onColumnsReorder(sourceKey, targetKey);
    };

    return onColumnMoved;
  }, [columnsForRender, onColumnsReorder, resetOnColumnMoved]);

  const drawGroupHeader = useMemo((): GlideProps['drawGroupHeader'] => {
    if (!renderGroupHeader) return undefined;
    return (args, drawContent) => {
      const { groupName, rect, ctx, span } = args;
      const result = renderGroupHeader(args);
      if (result === 'default') {
        groupHeaderParts.drop(groupName, span);
        return drawContent();
      }

      const customGroupName = 'defaultWithCustomGroupName' in result;

      if (customGroupName) {
        groupHeaderParts.drop(groupName, span);
        return drawContent(result.defaultWithCustomGroupName);
      }

      let jsxElement = result;

      if (!isCanvasContent(jsxElement)) {
        groupHeaderParts.drop(groupName, span);
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

      groupHeaderParts.set(nodeId, span, canvasRootInstance);

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
    groupHeaderParts,
    renderGroupHeader,
    theme,
    portalEventTargetRef,
  ]);

  // Состояние строки без наведения и с ним. Порядок состояний описан в
  // theming/row-state-override.ts; тот же порядок у объединённых блоков.
  const resolveRowTheme = useCallback(
    (rowInd: number, rowHover: boolean) => {
      const checked = checkboxSelectedRowIndexes?.has(rowInd) ?? false;
      const active = rowInd === activeRowRef.current;
      return resolveRowStateOverride(theme, {
        rowHover,
        active,
        activeChecked: active && checked,
        checked,
        zebra: isZebra && rowInd % 2 === 0,
      });
    },
    [theme, checkboxSelectedRowIndexes, isZebra],
  );

  // Включена ли подсветка выбранной строки.
  // Подробнее: если включена, функция темы строк нужна, даже пока строка не
  // выбрана: сама строка читается из ref при вызове, чтобы функция не
  // пересоздавалась на каждый клик.
  const hasActiveRowHighlight =
    highlightActiveType === 'row' || activeRow !== undefined;

  // Тема строки: наведение, выбранная строка, отмеченные строки, зебра.
  // Подробнее: строки под курсором и подсвеченная строка читаются из ref при
  // каждом вызове. Функция не пересоздаётся при наведении и клике, иначе glide считал
  // бы, что поменялось всё, и перерисовывал весь экран. Прежние и новые строки
  // дорисовываются точечно (useHoverState, useActiveRowsRedraw).
  const getRowThemeOverride = useMemo((): GlideProps['getRowThemeOverride'] => {
    const hasSelectedRows = !!checkboxSelectedRowIndexes?.size;
    const isHoveredRow = (rowInd: number) => {
      const hover = isRowHoverEnabled ? hoverRowsRef.current : undefined;
      return hover !== undefined && rowInd >= hover.from && rowInd <= hover.to;
    };

    if (
      !summaryRowsLength &&
      !hasSelectedRows &&
      !isZebra &&
      !isRowHoverEnabled &&
      !hasActiveRowHighlight
    ) {
      return undefined;
    }

    const dataRowsLength = rows.length;

    // Строке без своего оформления (итоговой или обычной) отдаём undefined,
    // а не пустой объект.
    // Подробнее: фон итоговых строк задаётся по ячейкам (getCellContentGlide),
    // иначе glide растянул бы его на пустое место под данными, и при
    // горизонтальной прокрутке он перекрыл бы текст итоговой строки. Пустой
    // объект glide считает темой и для каждой ячейки строки собирал бы полную
    // копию темы.
    return (rowInd) =>
      rowInd >= dataRowsLength
        ? undefined
        : resolveRowTheme(rowInd, isHoveredRow(rowInd));
  }, [
    resolveRowTheme,
    summaryRowsLength,
    checkboxSelectedRowIndexes,
    isZebra,
    rows.length,
    isRowHoverEnabled,
    hasActiveRowHighlight,
  ]);

  // Фон редактора следует за состоянием ячейки под ним: наведение, выбранная строка,
  // отметка, тема. Форк берёт тему редактора один раз при открытии, поэтому фон
  // открытого редактора обновляем сами, прямо в его элементе.
  const getEditorBgRef = useRef<(col: number, row: number) => string>();
  getEditorBgRef.current = (col, row) => {
    const hover = hoverRowsRef.current;
    const rowHovered =
      hover !== undefined && row >= hover.from && row <= hover.to;
    return (
      getCellContentGlide([col, row], { applyCanvasEditorActivation: false })
        .themeOverride?.bgCell ??
      (row < rows.length
        ? resolveRowTheme(row, rowHovered)?.bgCell
        : undefined) ??
      theme.bgCell
    );
  };
  // Края рамки редактора в объединённом блоке (styled.ts): рамка обводит весь
  // блок, поэтому края обрезаем по области данных, а линию у обрезанного края
  // не рисуем. getBounds у блока отдаёт одну строку, поэтому берём первую и
  // последнюю строки отдельно; строка -1 это шапка, ниже неё начинаются данные.
  const measureEditorBlock = (
    col: number,
    spanRows: readonly [number, number] | undefined,
  ): EditorFrame | undefined => {
    const grid = dataEditorRef.current;
    const first = spanRows && grid?.getBounds(col, spanRows[0]);
    const last = spanRows && grid?.getBounds(col, spanRows[1]);
    const { scroller } = queryGlideElements(containerRefInternal.current);
    if (!first || !last || !grid || !scroller) return undefined;
    const header = grid.getBounds(col, -1);
    const scrollerRect = scroller.getBoundingClientRect();
    const firstSummary =
      summaryRowsLength > 0 ? grid.getBounds(col, rows.length) : undefined;
    return {
      blockTop: first.y,
      blockBottom: last.y + last.height,
      dataTop: header ? header.y + header.height : scrollerRect.top,
      dataBottom: firstSummary
        ? firstSummary.y
        : scrollerRect.top + scroller.clientHeight,
      scrollTop: scroller.scrollTop,
    };
  };
  updateEditorFrameRef.current = () => {
    const frame = editorFrameRef.current;
    if (!frame) return;
    const overlay = overlayPortalRef.current?.querySelector<HTMLElement>(
      "[id^='gdg-overlay-']",
    );
    const { scroller } = queryGlideElements(containerRefInternal.current);
    if (!overlay || !scroller) return;
    syncEditorFrame(overlay, frame, scroller.scrollTop);
  };
  // Фон открытого редактора по состоянию ячейки под ним.
  updateEditorBgRef.current = () => {
    const cell = editorCellRef.current;
    const overlay = cell
      ? overlayPortalRef.current?.querySelector<HTMLElement>(
          "[id^='gdg-overlay-']",
        )
      : null;
    if (!cell) return;
    if (!overlay) {
      editorCellRef.current = undefined;
      return;
    }
    overlay.style.setProperty(
      '--gdg-bg-cell',
      getEditorBgRef.current?.(cell[0], cell[1]) ?? null,
    );
  };
  // Смена строк под курсором рендер не вызывает, её сообщает useHoverState.
  useLayoutEffect(() => {
    updateEditorBgRef.current?.();
  }, [activeRow, checkboxSelectedRowIndexes, theme, isCellEdited]);
  // Ссылка постоянная: новая функция заставила бы форк пересоздать открытый редактор.
  const provideEditorExternalRef = useRef(restProps.provideEditor);
  provideEditorExternalRef.current = restProps.provideEditor;
  const hasProvideEditor = restProps.provideEditor !== undefined;
  const provideEditor = useMemo<GlideProps['provideEditor']>(
    () =>
      hasProvideEditor
        ? (cell) => {
            const provided = provideEditorExternalRef.current?.(cell);
            if (!cell.location) return provided;
            const [col, row] = cell.location;
            // Пока оверлей открыт, canvas рамку не рисует (no-editor), поэтому
            // ячейку запоминаем при любом редакторе, даже встроенном у Glide.
            editorCellRef.current = cell.location;
            if (!provided) return provided;
            // Редактор-функцию оборачиваем, чтобы задать ему те же стили и рамку.
            const editor =
              typeof provided === 'function' ? { editor: provided } : provided;
            const frame = measureEditorBlock(col, cell.spanRows);
            editorFrameRef.current = frame;
            return {
              ...editor,
              styleOverride: {
                ...editor.styleOverride,
                ...(frame && getEditorFrameVars(frame, 0)),
                '--gdg-bg-cell': getEditorBgRef.current?.(col, row),
              } as CSSProperties,
            };
          }
        : undefined,
    [hasProvideEditor],
  );

  // Нажатие, которое откроет редактор в частично спрятанной редактируемой
  // ячейке: сначала докручиваем ячейку, как по клику, потом повторяем нажатие.
  // Сразу открывать нельзя: Glide поставит редактор по положению ячейки до
  // прокрутки.
  //
  // Подробнее. Спрятана ли ячейка, видно по тому, сдвинул ли scrollTo
  // скроллер. Повтор ждёт, пока Glide узнает о прокрутке (положение ячейки
  // в getBounds сменится), но не дольше нескольких кадров. Своё повторное
  // нажатие узнаём по ссылке на событие: внешний обработчик его не получает,
  // он уже получил настоящее.
  const onKeyDownExternalRef = useRef(restProps.onKeyDown);
  onKeyDownExternalRef.current = restProps.onKeyDown;
  const repeatedKeyRef = useRef<KeyboardEvent>();
  const editOnType = restProps.editOnType !== false;
  const handleKeyDownBridge = useCallback<
    NonNullable<GlideProps['onKeyDown']>
  >(
    (event) => {
      const { location, bounds, rawEvent } = event;
      if (rawEvent && rawEvent.nativeEvent === repeatedKeyRef.current) {
        repeatedKeyRef.current = undefined;
        return;
      }
      let cancelled = false;
      onKeyDownExternalRef.current?.({
        ...event,
        cancel: () => {
          cancelled = true;
          event.cancel();
        },
      });
      if (
        cancelled ||
        !location ||
        !bounds ||
        !rawEvent ||
        event.ctrlKey ||
        event.metaKey ||
        (event.key !== 'Enter' && event.key.length !== 1)
      ) {
        return;
      }
      const cell = getCellContentGlide([location[0], location[1]], {
        applyCanvasEditorActivation: false,
      });
      const activates = event.key === 'Enter' || event.key === ' ';
      if (
        !cell.allowOverlay ||
        !isReadWriteCell(cell) ||
        (!activates && !editOnType) ||
        !fitsScrollArea(location[0], bounds.width)
      ) {
        return;
      }
      const { scroller } = queryGlideElements(containerRefInternal.current);
      const scrollLeft = scroller?.scrollLeft;
      dataEditorRef.current?.scrollTo(location[0], location[1], 'horizontal');
      if (!scroller || scroller.scrollLeft === scrollLeft) return;

      event.cancel();
      event.preventDefault();
      const { target } = rawEvent;
      const repeated = new KeyboardEvent('keydown', {
        key: rawEvent.key,
        code: rawEvent.code,
        shiftKey: rawEvent.shiftKey,
        altKey: rawEvent.altKey,
        bubbles: true,
        cancelable: true,
      });
      let framesLeft = 10;
      const repeatWhenMoved = () => {
        const moved =
          dataEditorRef.current?.getBounds(location[0], location[1])?.x !==
          bounds.x;
        framesLeft -= 1;
        if (moved || framesLeft === 0) {
          repeatedKeyRef.current = repeated;
          target.dispatchEvent(repeated);
        } else {
          requestAnimationFrame(repeatWhenMoved);
        }
      };
      requestAnimationFrame(repeatWhenMoved);
    },
    [editOnType, fitsScrollArea, getCellContentGlide],
  );

  // ─── onItemHovered: единый агрегатор hover-логики (тултипы, окрашивание строки)
  const { onItemHovered } = useItemHoveredHandler(
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
    outlineEachRange,
    totalRows: rows.length + summaryRowsLength,
    columnsCount: columnsLast.length,
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
              ref={setOverlayPortal}
              data-focus-ring={drawFocusRing}
              onAnimationEndCapture={(e) => e.stopPropagation()} // важно, чтобы слушатели модальных окон не перехватывали фокус
              id="portal"
            />,
            containerRefInternal?.current ?? document.body,
          )
        : createPortal(
            <StyledOverlayPortal
              id="portal"
              ref={setOverlayPortal}
              data-focus-ring={drawFocusRing}
            />,
            document.body,
          )}
      {
        createPortal(
          <StyledOverlayPortal id={SELECT_LIST_PORTAL_ID} />,
          document.body,
        ) /* Этот портал нужен списку CellEditorCombobox: внутри модальных окон общий id=portal не подходит,
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
          // Пока открыт редактор, рамку рисует он сам (styled.ts), canvas нет.
          drawFocusRing={drawFocusRing ? 'no-editor' : false}
          gridSelection={selection}
          onGridSelectionChange={handleGridSelectionWithColumnReset}
          onSelectionCleared={handleSelectionClearedWithColumns}
          width={width ?? '100%'}
          onColumnMoved={onColumnMoved}
          onColumnResize={resizableColumn ? onColumnResizeInternal : undefined}
          resizeIndicatorOnHover
          resizeIndicator="full"
          customRenderers={customRenderers}
          rowHeight={rowH}
          highlightRegions={highlightRegionsFinal}
          rangeSelect={rangeSelect}
          spanRangeBehavior={spanRangeBehavior}
          smoothScrollX
          smoothScrollY
          // overscrollX={16}
          headerHeight={DEFAULT_HEADER_HEIGHT}
          editorBloom={EDITOR_BLOOM}
          onCellClicked={handleCellClickedBridge}
          onCellContextMenu={handleCellContextMenuBridge}
          onItemHovered={onItemHovered}
          onVisibleRegionChanged={handleVisibleRegionChanged}
          {...restProps}
          scrollToActiveCell={projectedSelection ? false : restProps.scrollToActiveCell}
          onColumnResizeStart={
            resizableColumn ? onColumnResizeStartInternal : undefined
          }
          onColumnResizeEnd={
            resizableColumn ? onColumnResizeEndInternal : undefined
          }
          provideEditor={provideEditor}
          onKeyDown={handleKeyDownBridge}
          // В режиме cell квадратика автозаполнения нет, рамка блока его не включает.
          fillHandle={cellsSelectionMode === 'cell' ? false : restProps.fillHandle}
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
