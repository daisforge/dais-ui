import type { Rectangle } from '@glideappsfinal/glide-data-grid';
import { useMemo } from 'react';

import type { GlideProps, Theme } from '../../types';

interface UseColumnRowHighlightRegionsParams {
  /** Базовые регионы подсветки (из useBaseHighlightRegions) — расширяем их. */
  baseRegions: GlideProps['highlightRegions'];
  /** Индексы выделенных колонок (без сервисных). */
  selectedColumnIndexes: number[];
  /** Индексы выделенных по нумерации строк. */
  headerSelectedRowIndexes: number[];
  /**
   * Подсвеченная строка (highlightActiveType='row') — только bg, без рамки.
   * Перекрывается селектингом: ячейки текущего диапазона из заливки вырезаются.
   */
  activeRow?: number;
  /** Текущий диапазон выделения (для выреза под селектинг на подсвеченной строке). */
  activeRange?: Rectangle;
  /**
   * Диапазоны rangeStack (multi-range-cell). glide рисует рамку только вокруг
   * current.range, поэтому предыдущие Ctrl-диапазоны остаются без обводки —
   * дорисовываем её сами.
   */
  selectionRangeStack?: readonly Rectangle[];
  /** Строки, у которых ЕСТЬ чекбокс — подсвеченная строка тогда темнее. */
  checkboxAvailableRowIndexes?: ReadonlySet<number>;
  /** Всего строк (данные + summary). */
  totalRows: number;
  /** Индекс первой колонки данных (= кол-во ведущих сервисных колонок). */
  firstDataCol: number;
  /** Всего колонок (вместе с сервисными). */
  columnsCount: number;
  theme: Theme;
}

/**
 * Рисует заливку + объединённую обводку выделенных КОЛОНОК и СТРОК поверх
 * базовых highlightRegions. Шапка колонок подсвечивается отдельно через
 * bgHeader в columnsForRender; сервисные колонки (нумерация) в заливку/рамку
 * не входят (x = firstDataCol).
 */
export function useColumnRowHighlightRegions({
  baseRegions,
  selectedColumnIndexes,
  headerSelectedRowIndexes,
  activeRow,
  activeRange,
  selectionRangeStack,
  checkboxAvailableRowIndexes,
  totalRows,
  firstDataCol,
  columnsCount,
  theme,
}: UseColumnRowHighlightRegionsParams): GlideProps['highlightRegions'] {
  return useMemo<GlideProps['highlightRegions']>(() => {
    const hasColumns = selectedColumnIndexes.length > 0;
    const hasRows = headerSelectedRowIndexes.length > 0;
    const hasHighlightRow = activeRow !== undefined;
    const hasRangeStack = (selectionRangeStack?.length ?? 0) > 0;
    if (!hasColumns && !hasRows && !hasHighlightRow && !hasRangeStack) {
      return baseRegions;
    }

    const dataWidth = columnsCount - firstDataCol;
    const regions = [...(baseRegions ?? [])];

    // Обводка по непрерывным блокам индексов — чтобы между соседними выделенными
    // колонками/строками не было двойной разделительной линии.
    const pushMergedOutlines = (
      indexes: number[],
      mapRange: (
        start: number,
        end: number
      ) => { x: number; y: number; width: number; height: number }
    ) => {
      const [first, ...rest] = [...indexes].sort((a, b) => a - b);
      if (first === undefined) {
        return;
      }
      let blockStart = first;
      let blockEnd = first;
      const flush = (start: number, end: number) => {
        regions.push({
          color: theme.accentColor,
          range: mapRange(start, end),
          style: 'solid-outline' as const,
        });
      };
      for (const idx of rest) {
        if (idx === blockEnd + 1) {
          blockEnd = idx;
        } else {
          flush(blockStart, blockEnd);
          blockStart = idx;
          blockEnd = idx;
        }
      }
      flush(blockStart, blockEnd);
    };

    // Колонки: заливка поколоночно + объединённая обводка блоков.
    if (hasColumns) {
      // Service-зона (нумерация/чекбокс) затемняется как при нативном selecting:
      // выделенная колонка покрывает ВСЕ строки → темнеет вся service-зона.
      if (firstDataCol > 0) {
        regions.push({
          color: theme.selectionServiceActiveBg,
          range: { x: 0, y: 0, width: firstDataCol, height: totalRows },
          style: 'no-outline' as const,
        });
      }
      for (const colInd of selectedColumnIndexes) {
        regions.push({
          color: theme.selectionActiveBg,
          range: { x: colInd, y: 0, width: 1, height: totalRows },
          style: 'no-outline' as const,
        });
      }
      pushMergedOutlines(selectedColumnIndexes, (start, end) => ({
        x: start,
        y: 0,
        width: end - start + 1,
        height: totalRows,
      }));
    }

    // Строки: заливка по данным построчно + объединённая обводка блоков строк.
    // Сервисные колонки (нумерация) в заливку/рамку не входят (x = firstDataCol),
    // но саму нумерацию выделенных строк затемняем как при нативном selecting.
    if (hasRows && dataWidth > 0) {
      if (firstDataCol > 0) {
        for (const rowInd of headerSelectedRowIndexes) {
          regions.push({
            color: theme.selectionServiceActiveBg,
            range: { x: 0, y: rowInd, width: firstDataCol, height: 1 },
            style: 'no-outline' as const,
          });
        }
      }
      for (const rowInd of headerSelectedRowIndexes) {
        regions.push({
          color: theme.selectionActiveBg,
          range: { x: firstDataCol, y: rowInd, width: dataWidth, height: 1 },
          style: 'no-outline' as const,
        });
      }
      pushMergedOutlines(headerSelectedRowIndexes, (start, end) => ({
        x: firstDataCol,
        y: start,
        width: dataWidth,
        height: end - start + 1,
      }));
    }

    // Подсветка строки (highlightActiveType='row') — только bg по данным, без
    // рамки. Ячейки активного селектинга на этой строке ВЫРЕЗАЕМ, чтобы glide
    // показал поверх свой selection (цвет+рамка+fill-handle). Цвет строки без
    // чекбокса — светло-голубой, как у шапки (selectionCheckboxBg); если у строки
    // ЕСТЬ чекбокс — темнее (selectionActiveCheckboxBg), независимо от того,
    // отмечен он или нет.
    if (activeRow !== undefined && dataWidth > 0) {
      const rowFill = checkboxAvailableRowIndexes?.has(activeRow)
        ? theme.selectionActiveCheckboxBg
        : theme.selectionCheckboxBg;
      const pushRowFill = (x: number, width: number) => {
        if (width > 0) {
          regions.push({
            color: rowFill,
            range: { x, y: activeRow, width, height: 1 },
            style: 'no-outline' as const,
          });
        }
      };
      const intersectsRow =
        activeRange &&
        activeRow >= activeRange.y &&
        activeRow < activeRange.y + activeRange.height;
      if (!intersectsRow) {
        pushRowFill(firstDataCol, dataWidth);
      } else {
        const selStart = Math.max(activeRange.x, firstDataCol);
        const selEnd = activeRange.x + activeRange.width;
        pushRowFill(firstDataCol, selStart - firstDataCol);
        pushRowFill(selEnd, columnsCount - selEnd);
      }
    }

    // Диапазоны rangeStack (multi-range-cell). Свою обводку НЕ рисуем: рамку
    // ставит glide только вокруг активного current.range, а накопленные Ctrl-
    // ячейки показываем заливкой (её красит glide) + затемнением нумерации, как
    // у выделения строк. Так нет швов между смежными ячейками и «залипших» рамок
    // при поглощении диапазоном. Собираем только покрытые строки для затемнения
    // левой service-зоны (нумерации).
    if (hasRangeStack && selectionRangeStack && firstDataCol > 0) {
      const coveredRows = new Set<number>();
      for (const rect of selectionRangeStack) {
        const x = Math.max(rect.x, firstDataCol);
        const width = rect.x + rect.width - x;
        if (width <= 0 || rect.height <= 0) {
          continue;
        }
        for (let row = rect.y; row < rect.y + rect.height; row += 1) {
          coveredRows.add(row);
        }
      }
      for (const row of coveredRows) {
        regions.push({
          color: theme.selectionServiceActiveBg,
          range: { x: 0, y: row, width: firstDataCol, height: 1 },
          style: 'no-outline' as const,
        });
      }
    }

    return regions;
  }, [
    baseRegions,
    selectedColumnIndexes,
    headerSelectedRowIndexes,
    activeRow,
    activeRange,
    selectionRangeStack,
    checkboxAvailableRowIndexes,
    totalRows,
    firstDataCol,
    columnsCount,
    theme.selectionActiveBg,
    theme.selectionActiveCheckboxBg,
    theme.selectionCheckboxBg,
    theme.selectionServiceActiveBg,
    theme.accentColor,
  ]);
}
