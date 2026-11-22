import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { Theme } from '../../types';
import { useColumnRowHighlightRegions } from './useColumnRowHighlightRegions';

const THEME = {
  accentColor: 'accent',
  selectionActiveBg: 'active',
  selectionActiveCheckboxBg: 'checkbox-active',
  selectionCheckboxBg: 'checkbox',
  selectionServiceActiveBg: 'service',
} as unknown as Theme;

const outlinesOf = (
  activeRange: { x: number; y: number; width: number; height: number },
  selectionRangeStack: {
    x: number;
    y: number;
    width: number;
    height: number;
  }[],
  outlineEachRange = true,
) => {
  const { result } = renderHook(() =>
    useColumnRowHighlightRegions({
      baseRegions: undefined,
      selectedColumnIndexes: [],
      headerSelectedRowIndexes: [],
      activeRange,
      selectionRangeStack,
      outlineEachRange,
      totalRows: 10,
      firstDataCol: 1,
      columnsCount: 6,
      theme: THEME,
    }),
  );
  return (result.current ?? [])
    .filter((region) => region.style === 'solid-outline')
    .map((region) => region.range);
};

describe('useColumnRowHighlightRegions — Ctrl-диапазоны (rangeStack)', () => {
  it('без outlineEachRange накопленные диапазоны не обводятся', () => {
    expect(
      outlinesOf(
        { x: 4, y: 4, width: 1, height: 1 },
        [{ x: 2, y: 1, width: 1, height: 1 }],
        false,
      ),
    ).toEqual([]);
  });

  it('с outlineEachRange обводит каждый накопленный диапазон в области данных', () => {
    expect(
      outlinesOf({ x: 4, y: 4, width: 1, height: 1 }, [
        { x: 2, y: 1, width: 1, height: 1 },
        { x: 0, y: 2, width: 3, height: 2 },
      ]),
    ).toEqual([
      { x: 2, y: 1, width: 1, height: 1 },
      { x: 1, y: 2, width: 2, height: 2 },
    ]);
  });

  it('не обводит диапазон, поглощённый активным или более поздним', () => {
    expect(
      outlinesOf({ x: 1, y: 1, width: 3, height: 3 }, [
        { x: 2, y: 2, width: 1, height: 1 },
        { x: 4, y: 5, width: 1, height: 1 },
        { x: 4, y: 5, width: 2, height: 2 },
      ]),
    ).toEqual([{ x: 4, y: 5, width: 2, height: 2 }]);
  });
});
