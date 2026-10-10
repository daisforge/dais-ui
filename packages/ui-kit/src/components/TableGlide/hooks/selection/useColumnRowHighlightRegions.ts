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
   * Диапазоны rangeStack (multi-range-cell). glide рисует рамку только вокруг
   * current.range, поэтому предыдущие Ctrl-диапазоны остаются без обводки —
   * дорисовываем её сами.
   */
  selectionRangeStack?: readonly Rectangle[];
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
  selectionRangeStack,
  totalRows,
  firstDataCol,
  columnsCount,
  theme,
}: UseColumnRowHighlightRegionsParams): GlideProps['highlightRegions'] {
  return useMemo<GlideProps['highlightRegions']>(() => {
    const hasColumns = selectedColumnIndexes.length > 0;
    const hasRows = headerSelectedRowIndexes.length > 0;
    const hasRangeStack = (selectionRangeStack?.length ?? 0) > 0;
    if (!hasColumns && !hasRows && !hasRangeStack) {
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
      // Служебные колонки (нумерация, чекбокс) темнеют так же, как при
      // обычном выделении мышью. Выделенная колонка занимает все строки,
      // поэтому темнеют служебные колонки всех строк.
      if (firstDataCol > 0) {
        regions.push({
          color: theme.selectionServiceActiveBg,
          range: { x: 0, y: 0, width: firstDataCol, height: totalRows },
          style: 'no-outline' as const,
        });
      }
      // Стиль 'accent' (наша доработка форка): цвет заливки берётся не из
      // региона, а из accentLight темы каждой ячейки. Так жёлтые и статусные
      // ячейки показывают свой цвет «в выделении», а не общий синий.
      for (const colInd of selectedColumnIndexes) {
        regions.push({
          color: theme.selectionActiveBg,
          range: { x: colInd, y: 0, width: 1, height: totalRows },
          style: 'accent' as const,
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
    // Служебные колонки (нумерация) в заливку и рамку не входят
    // (x = firstDataCol), но темнеют так же, как при обычном выделении мышью.
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
          style: 'accent' as const,
        });
      }
      pushMergedOutlines(headerSelectedRowIndexes, (start, end) => ({
        x: firstDataCol,
        y: start,
        width: dataWidth,
        height: end - start + 1,
      }));
    }

    // Выбранную строку (highlightActiveType='row') здесь НЕ рисуем: это не
    // выделение, поверх неё ничего не накладывается. Её фон задаёт тема
    // строки (getRowThemeOverride в TableGlide.tsx), фон цветных ячеек —
    // тема самой ячейки (theming/cell-fill-override.ts).

    // Несколько диапазонов, выбранных с Ctrl (rangeStack): здесь только
    // затемняем нумерацию их строк.
    // Подробнее: рамку glide рисует только вокруг последнего диапазона, а
    // заливку прежних красит сам. Свою рамку не добавляем — иначе между
    // соседними ячейками видны швы, а рамка остаётся, когда новый диапазон
    // поглощает старый.
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
    selectionRangeStack,
    totalRows,
    firstDataCol,
    columnsCount,
    theme.selectionActiveBg,
    theme.selectionServiceActiveBg,
    theme.accentColor,
  ]);
}
