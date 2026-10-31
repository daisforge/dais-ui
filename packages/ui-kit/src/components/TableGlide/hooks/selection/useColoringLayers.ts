import type { GridSelection, Rectangle } from '@glideappsfinal/glide-data-grid';
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
 *      ячейки (bgEditableCell), поверх него — тема ячейки от потребителя
 *      (columnThemeOverride). Самая сильная: editing перекрывает и ховер,
 *      и чекбокс.
 *
 * Часть 2. ПОВЕРХ выбранного фона рисуются прямоугольники этого хука.
 * Порядок в массиве равен порядку отрисовки, первый элемент самый нижний:
 *   1) внешние регионы потребителя (highlightRegionsExternal);
 *   2) базовое выделение (useBaseHighlightRegions): затемнение сервис-зоны
 *      активного диапазона, заливка и обводка одиночной активной ячейки,
 *      кольца ошибок (поячеечные и на всю строку);
 *   3) выделение колонок и строк, затемнение нумерации под rangeStack
 *      (useColumnRowHighlightRegions). Выбранная строка регионами не
 *      красится — её фон задают темы (часть 1).
 * Ховер сервис-зоны (нумерация и чекбокс под курсором) регионом не рисуется:
 * это тема ячейки сервис-колонки под курсором (getCellContent в
 * TableGlide.tsx). Регион менял бы массив на каждое движение мыши, и glide
 * перерисовывал бы весь экран.
 * Дальше рисует форк: заливки регионов накладываются на фон, потом линии сетки,
 * после линий кольца (solid-outline: ошибки, активная ячейка), сверху
 * фокус-ринг и fill-handle.
 */
interface UseColoringLayersParams {
  theme: Theme;
  /* Слои 1 и 2: базовое выделение. */
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
  /** Строки с ошибкой всей строки (одна рамка на строку). */
  errorRowIndexes?: readonly number[];
  highlightRegionsExternal?: GlideProps['highlightRegions'];
  /* Слой 3: выделение колонок и строк. */
  selectedColumnIndexes: number[];
  headerSelectedRowIndexes: number[];
  /** Рамка у каждого Ctrl-диапазона ячеек, а не только у активного. */
  outlineEachRange: boolean;
  /** Всего строк (данные + summary). */
  totalRows: number;
  columnsCount: number;
  /**
   * Служебные колонки красятся вместе со строкой (appearance.variant='clean'):
   * у них нет своего голубого фона и своего цвета под курсором, а регионы
   * выделения сервис-зоны рисуются стилем 'accent' — цветом выделения своей
   * строки.
   */
  serviceZoneFollowsRow?: boolean;
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
  errorRowIndexes,
  highlightRegionsExternal,
  selectedColumnIndexes,
  headerSelectedRowIndexes,
  outlineEachRange,
  totalRows,
  columnsCount,
  serviceZoneFollowsRow = false,
}: UseColoringLayersParams): GlideProps['highlightRegions'] {
  // Слои 1 и 2: внешние регионы и базовое выделение.
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
    errorRowIndexes,
    columnsCount,
    highlightRegionsExternal,
    serviceZoneFollowsRow,
  });

  // Слой 3: выделение колонок и строк поверх базы. Шапки выделенных колонок
  // красятся отдельно, через bgHeader в columnsForRender.
  const withColumnsAndRows = useColumnRowHighlightRegions({
    baseRegions,
    selectedColumnIndexes,
    headerSelectedRowIndexes,
    selectionRangeStack: selection.current?.rangeStack,
    activeRange: selection.current?.range,
    outlineEachRange,
    totalRows,
    firstDataCol: serviceColumnsCount,
    columnsCount,
    theme,
    serviceZoneFollowsRow,
  });

  return withColumnsAndRows;
}
