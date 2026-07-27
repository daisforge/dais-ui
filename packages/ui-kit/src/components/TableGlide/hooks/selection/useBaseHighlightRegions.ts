import type { GridSelection, Rectangle } from '@glideappsfinal/glide-data-grid';
import { useMemo } from 'react';

import type { GlideProps, CellsSelectionMode, Theme } from '../../types';

interface UseBaseHighlightRegionsParams {
  cellsSelectionMode: CellsSelectionMode;
  selection: GridSelection;
  baseTheme: Theme;
  serviceColumnsCount: number;
  activeDataRange?: Rectangle;
  outlineRange?: Rectangle;
  checkboxSelectedRowIndexes?: ReadonlySet<number>;
  errorCellRanges?: readonly Rectangle[];
  highlightRegionsExternal?: GlideProps['highlightRegions'];
}

export function useBaseHighlightRegions({
  cellsSelectionMode,
  selection,
  baseTheme,
  serviceColumnsCount,
  activeDataRange,
  outlineRange,
  checkboxSelectedRowIndexes,
  errorCellRanges,
  highlightRegionsExternal,
}: UseBaseHighlightRegionsParams): GlideProps['highlightRegions'] {
  return useMemo(() => {
    // highlightRegions — это уже финальный слой canvas-overlay.
    // Здесь мы не решаем, что считается active: это приходит из
    // useSelectionGeometry и переводится в набор прямоугольников glide.
    const regions = [...(highlightRegionsExternal ?? [])];
    const current = selection.current;

    const pushErrorCellRegions = () => {
      if (!errorCellRanges?.length) {
        return;
      }

      // Ошибки рисуем ровно на конкретных ячейках, как в обычном Table:
      // отдельный red outline на cell-level, без service-area.
      // Добавляем его в самом конце, чтобы border не перекрывался active fill.
      for (const range of errorCellRanges) {
        regions.push({
          color: baseTheme.errorOutlineColor,
          range,
          style: 'solid-outline',
        });
      }
    };

    if (!current || cellsSelectionMode === 'disabled') {
      pushErrorCellRegions();
      return regions.length > 0 ? regions : undefined;
    }

    const [, activeRow] = current.cell;
    const activeRowIsCheckboxSelected =
      checkboxSelectedRowIndexes?.has(activeRow) ?? false;
    const dataActiveFill = activeRowIsCheckboxSelected
      ? baseTheme.selectionActiveCheckboxBg
      : baseTheme.selectionActiveBg;
    const serviceActiveFill = baseTheme.selectionServiceActiveBg;

    if (activeDataRange && serviceColumnsCount > 0) {
      // Service-часть строки/диапазона подсвечиваем только фоном.
      regions.push({
        color: serviceActiveFill,
        range: {
          x: 0,
          y: activeDataRange.y,
          width: serviceColumnsCount,
          height: activeDataRange.height,
        },
        style: 'no-outline',
      });
    }

    // Свою заливку рисуем ТОЛЬКО для одиночной ячейки в cell-режиме. Любой
    // реальный диапазон (range-cell, строка по нумерации) рисует glide нативно.
    if (
      activeDataRange &&
      cellsSelectionMode === 'cell' &&
      activeDataRange.width === 1 &&
      activeDataRange.height === 1
    ) {
      // Data fill активной сущности рисуем отдельно от outline,
      // чтобы спокойно комбинировать его с red error-outline.
      regions.push({
        color: dataActiveFill,
        range: activeDataRange,
        style: 'no-outline',
      });
    }

    // outlineRange задан только когда нужна наша обводка (одиночная ячейка) —
    // useSelectionGeometry гейтит это сам.
    if (outlineRange) {
      regions.push({
        color: baseTheme.accentColor,
        range: outlineRange,
        style: 'solid-outline',
      });
    }

    pushErrorCellRegions();

    // В range-cell полностью используем нативный focus/range highlight glide,
    // чтобы было видно стартовую ячейку и не дублировался outline диапазона.
    return regions.length > 0 ? regions : undefined;
  }, [
    cellsSelectionMode,
    selection,
    baseTheme.selectionActiveBg,
    baseTheme.selectionActiveCheckboxBg,
    baseTheme.selectionServiceActiveBg,
    baseTheme.errorOutlineColor,
    baseTheme.accentColor,
    serviceColumnsCount,
    activeDataRange,
    outlineRange,
    checkboxSelectedRowIndexes,
    errorCellRanges,
    highlightRegionsExternal,
  ]);
}
