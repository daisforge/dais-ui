import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { Theme } from '../../types';
import { useColoringLayers } from './useColoringLayers';

const THEME = {
  selectionServiceActiveBg: 'service-active',
  selectionActiveBg: 'active',
  selectionActiveCheckboxBg: 'active-checkbox',
  accentColor: 'accent',
  errorOutlineColor: 'error',
} as unknown as Theme;

const EMPTY_SELECTION = {
  current: undefined,
  rows: { length: 0 },
  columns: { length: 0 },
} as unknown as GridSelection;

/** Общие параметры: одна служебная колонка, три колонки данных, пять строк. */
const base = {
  theme: THEME,
  cellsSelectionMode: 'range-cell' as const,
  selection: EMPTY_SELECTION,
  serviceColumnsCount: 1,
  selectedColumnIndexes: [] as number[],
  headerSelectedRowIndexes: [] as number[],
  totalRows: 5,
  columnsCount: 4,
  outlineEachRange: false,
};

const render = (overrides: Partial<Parameters<typeof useColoringLayers>[0]>) =>
  renderHook(() => useColoringLayers({ ...base, ...overrides })).result.current;

describe('useColoringLayers: служебная зона следует за строкой (clean)', () => {
  it('без выделения и ошибок регионов нет: наведение регионов не даёт', () => {
    expect(render({})).toBeUndefined();
    expect(render({ serviceZoneFollowsRow: true })).toBeUndefined();
  });

  it('по умолчанию служебная зона выделенной по нумерации строки — фиксированным цветом', () => {
    const regions = render({ headerSelectedRowIndexes: [1] });
    const service = regions?.find(
      (r) => r.range.x === 0 && r.range.width === 1,
    );
    expect(service).toMatchObject({
      color: 'service-active',
      style: 'no-outline',
    });
  });

  it('serviceZoneFollowsRow: служебная зона выделенной строки берёт цвет ячейки (accent)', () => {
    const regions = render({
      headerSelectedRowIndexes: [1],
      serviceZoneFollowsRow: true,
    });
    const service = regions?.find(
      (r) => r.range.x === 0 && r.range.width === 1,
    );
    expect(service).toMatchObject({ style: 'accent' });
  });

  it('serviceZoneFollowsRow: служебная зона выделенной колонки тоже accent', () => {
    const regions = render({
      selectedColumnIndexes: [2],
      serviceZoneFollowsRow: true,
    });
    const service = regions?.find(
      (r) => r.range.x === 0 && r.range.width === 1 && r.range.height === 5,
    );
    expect(service).toMatchObject({ style: 'accent' });
  });
});
