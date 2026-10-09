import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useStickyColumnIndexes } from '../useStickyColumnIndexes';

type Column = { key: string; isServiceColumn?: boolean };

const COLUMNS: Column[] = [
  { key: 'row-markers', isServiceColumn: true },
  { key: 'region' },
  { key: 'jan' },
  { key: 'total' },
];

describe('useStickyColumnIndexes', () => {
  it('без конфига — undefined', () => {
    const { result } = renderHook(() =>
      useStickyColumnIndexes(COLUMNS, undefined),
    );
    expect(result.current).toBeUndefined();
  });

  it('ключи → индексы в порядке колонок; несуществующие ключи игнорируются', () => {
    const { result } = renderHook(() =>
      useStickyColumnIndexes(COLUMNS, ['total', 'region', 'missing']),
    );
    expect(result.current).toEqual([1, 3]);
  });

  it('предикат по колонке', () => {
    const { result } = renderHook(() =>
      useStickyColumnIndexes(COLUMNS, (column) => column.key !== 'jan'),
    );
    expect(result.current).toEqual([1, 3]);
  });

  it('служебные колонки липкими не становятся', () => {
    const { result } = renderHook(() =>
      useStickyColumnIndexes(COLUMNS, ['row-markers', 'region']),
    );
    expect(result.current).toEqual([1]);
  });
});
