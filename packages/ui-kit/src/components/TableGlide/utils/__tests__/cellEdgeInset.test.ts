import { describe, expect, it } from 'vitest';

import { cellEdgeInset, gridLinesAroundCell } from '../cellEdgeInset';

describe('gridLinesAroundCell: линии сетки слева и сверху от ячейки', () => {
  it('verticalBorder(col) это линия у левого края колонки col', () => {
    // Линии нет только между колонками 2 и 3
    const settings = {
      verticalBorder: (col: number) => col !== 3,
      horizontalBorder: true,
      hasCellBorders: false,
    };
    expect(gridLinesAroundCell(settings, 3, 0).hasLeftLine).toBe(false);
    expect(gridLinesAroundCell(settings, 2, 0).hasLeftLine).toBe(true);
    expect(gridLinesAroundCell(settings, 4, 0).hasLeftLine).toBe(true);
  });

  it('horizontalBorder(row) это линия у верхнего края строки row', () => {
    const settings = {
      verticalBorder: true,
      horizontalBorder: (row: number) => row !== 5,
      hasCellBorders: false,
    };
    expect(gridLinesAroundCell(settings, 1, 5).hasTopLine).toBe(false);
    expect(gridLinesAroundCell(settings, 1, 4).hasTopLine).toBe(true);
    expect(gridLinesAroundCell(settings, 1, 6).hasTopLine).toBe(true);
  });

  it('у первой колонки линии слева нет, без настройки линии есть', () => {
    const settings = {
      verticalBorder: undefined,
      horizontalBorder: undefined,
      hasCellBorders: false,
    };
    expect(gridLinesAroundCell(settings, 0, 0)).toEqual({
      hasLeftLine: false,
      hasTopLine: true,
    });
    expect(gridLinesAroundCell(settings, 1, 1)).toEqual({
      hasLeftLine: true,
      hasTopLine: true,
    });
  });

  it('с точечными рамками ячеек линии считаются есть', () => {
    expect(
      gridLinesAroundCell(
        {
          verticalBorder: false,
          horizontalBorder: false,
          hasCellBorders: true,
        },
        2,
        2,
      ),
    ).toEqual({ hasLeftLine: true, hasTopLine: true });
  });
});

describe('cellEdgeInset', () => {
  it('без линий содержимое доходит до края, рамка оставляет пиксель, у последних колонки и строки пиксель справа и снизу', () => {
    const base = {
      hasLeftLine: false,
      hasTopLine: false,
      keepsRing: false,
      isLastColumn: false,
      isLastRow: false,
    };
    expect(cellEdgeInset(base)).toEqual({
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    });
    expect(cellEdgeInset({ ...base, keepsRing: true })).toEqual({
      left: 1,
      top: 1,
      right: 0,
      bottom: 0,
    });
    expect(
      cellEdgeInset({
        ...base,
        hasLeftLine: true,
        isLastColumn: true,
        isLastRow: true,
      }),
    ).toEqual({ left: 1, top: 0, right: 1, bottom: 1 });
  });
});
