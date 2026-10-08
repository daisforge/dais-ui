import type { GridSelection, Rectangle } from '@glideappsfinal/glide-data-grid';
import { useMemo } from 'react';

import type { CellsSelectionMode, GlideProps, Theme } from '../../types';
import { useBaseHighlightRegions } from './useBaseHighlightRegions';
import { useColumnRowHighlightRegions } from './useColumnRowHighlightRegions';

/**
 * Собирает все прямоугольники подсветки таблицы (выделение, рамки ошибок,
 * подсветку служебных колонок) в один список в правильном порядке.
 *
 * Подробнее. Это единственное место, где задан порядок слоёв окраски. Сам
 * хук ничего не решает: что именно красится, описано в
 * useBaseHighlightRegions и useColumnRowHighlightRegions, фоны — в темах.
 *
 * Итоговый цвет ячейки складывается из двух частей.
 *
 * Часть 1. ФОН выбирается приоритетом тем, от слабой к сильной:
 *   1) тема колонки (columnsForRender в TableGlide.tsx): голубой фон
 *      сервис-колонок, прозрачный accent нумерации, тёмная шапка активной
 *      или выделенной колонки;
 *   2) тема строки (getRowThemeOverride в TableGlide.tsx): серый ховер строки,
 *      фон строки с отмеченным чекбоксом, фон выбранной строки
 *      (highlightActiveType='row'), фон summary;
 *   3) тема ячейки (getCellContent в TableGlide.tsx): жёлтый фон редактируемой
 *      ячейки (bgEditableCell). Самая сильная: editing перекрывает и ховер,
 *      и чекбокс.
 *
 * Часть 2. ПОВЕРХ выбранного фона рисуются прямоугольники этого хука.
 * Порядок в массиве равен порядку отрисовки, первый элемент самый нижний:
 *   1) ховер сервис-зоны (нумерация и чекбокс под курсором);
 *   2) внешние регионы потребителя (highlightRegionsExternal);
 *   3) базовое выделение (useBaseHighlightRegions): затемнение сервис-зоны
 *      активного диапазона, заливка и обводка одиночной активной ячейки,
 *      кольца ошибок;
 *   4) выделение колонок и строк, затемнение нумерации под rangeStack
 *      (useColumnRowHighlightRegions). Выбранная строка регионами не
 *      красится — её фон задают темы (часть 1).
 * Дальше рисует форк: заливки регионов блендятся с фоном, потом линии сетки,
 * после линий кольца (solid-outline: ошибки, активная ячейка), сверху
 * фокус-ринг и fill-handle.
 */
interface UseColoringLayersParams {
  theme: Theme;
  /* Слои 2 и 3: базовое выделение. */
  cellsSelectionMode: CellsSelectionMode;
  selection: GridSelection;
  /** Число ведущих сервис-колонок (нумерация, чекбокс). */
  serviceColumnsCount: number;
  activeDataRange?: Rectangle;
  outlineRange?: Rectangle;
  checkboxSelectedRowIndexes?: ReadonlySet<number>;
  /**
   * Номер выбранной строки (highlightActiveType='row'). Саму строку этот хук
   * не красит — её фон задают темы в TableGlide.tsx. Номер нужен только
   * базовому слою: на этой строке кликнутая ячейка не заливается цветом
   * выделения.
   */
  activeRow?: number;
  errorCellRanges?: readonly Rectangle[];
  highlightRegionsExternal?: GlideProps['highlightRegions'];
  /* Слой 4: выделение колонок и строк. */
  selectedColumnIndexes: number[];
  headerSelectedRowIndexes: number[];
  /** Всего строк (данные + summary). */
  totalRows: number;
  columnsCount: number;
  /* Слой 1: ховер сервис-зоны. */
  isRowHoverEnabled: boolean;
  hoverRow?: number;
  /** Строк данных без summary: summary ховер не получает. */
  dataRowsCount: number;
}

export function useColoringLayers({
  theme,
  cellsSelectionMode,
  selection,
  serviceColumnsCount,
  activeDataRange,
  outlineRange,
  checkboxSelectedRowIndexes,
  activeRow,
  errorCellRanges,
  highlightRegionsExternal,
  selectedColumnIndexes,
  headerSelectedRowIndexes,
  totalRows,
  columnsCount,
  isRowHoverEnabled,
  hoverRow,
  dataRowsCount,
}: UseColoringLayersParams): GlideProps['highlightRegions'] {
  // Слои 2 и 3: внешние регионы и базовое выделение.
  const baseRegions = useBaseHighlightRegions({
    cellsSelectionMode,
    selection,
    baseTheme: theme,
    serviceColumnsCount,
    activeDataRange,
    outlineRange,
    checkboxSelectedRowIndexes,
    highlightActiveRow: activeRow,
    errorCellRanges,
    highlightRegionsExternal,
  });

  // Слой 4: выделение колонок и строк поверх базы. Шапки выделенных колонок
  // красятся отдельно, через bgHeader в columnsForRender.
  const withColumnsAndRows = useColumnRowHighlightRegions({
    baseRegions,
    selectedColumnIndexes,
    headerSelectedRowIndexes,
    selectionRangeStack: selection.current?.rangeStack,
    totalRows,
    firstDataCol: serviceColumnsCount,
    columnsCount,
    theme,
  });

  // Слой 1: ховер сервис-зоны, первым в массиве (самый нижний). Голубой фон
  // сервис-колонок задан темой колонки, а серый ховер строки задан темой
  // строки и в glide перекрывает колоночную, поэтому сервис-зоне возвращаем
  // цвет регионом поверх. Цвет тот же, что затемнение при селектинге.
  return useMemo((): GlideProps['highlightRegions'] | undefined => {
    if (
      !isRowHoverEnabled ||
      hoverRow === undefined ||
      hoverRow > dataRowsCount - 1 || // summary-строки ховер не получают
      serviceColumnsCount === 0
    ) {
      return withColumnsAndRows;
    }

    return [
      {
        color: theme.bgServiceRowHovered,
        range: { x: 0, y: hoverRow, width: serviceColumnsCount, height: 1 },
        style: 'no-outline',
      },
      ...(withColumnsAndRows ?? []),
    ];
  }, [
    withColumnsAndRows,
    serviceColumnsCount,
    isRowHoverEnabled,
    hoverRow,
    dataRowsCount,
    theme.bgServiceRowHovered,
  ]);
}
