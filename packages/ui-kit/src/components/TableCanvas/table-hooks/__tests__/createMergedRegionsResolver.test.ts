import { describe, expect, it } from 'vitest';

import type { MergedCellsRegion } from '../../types';
import { createMergedRegionsResolver } from '../createMergedRegionsResolver';

// Контракт controlled-объединений (mergeCells.mergedCellsRegions): регионы по
// стабильным ключам резолвятся в индексы на render-time по актуальному порядку
// колонок и строк; разорванный или пустой регион молча не рисуется.

type Row = { id: string };

const rowsOf = (...ids: string[]): Row[] => ids.map((id) => ({ id }));

const makeResolver = (
  regions: MergedCellsRegion[],
  colKeys: readonly string[],
  rows: readonly Row[],
) => {
  const renderColKeysRef = { current: colKeys };
  const rowsRef = { current: rows };
  const resolver = createMergedRegionsResolver(
    regions,
    renderColKeysRef,
    rowsRef,
    (r) => r.id,
  );
  return { resolver, renderColKeysRef, rowsRef };
};

const region = (colKeys: string[], rowKeys: string[]): MergedCellsRegion => ({
  colKeys,
  rowKeys,
});

describe('createMergedRegionsResolver — базовый резолв', () => {
  it('регион 2x2: origin-колонка отдаёт colExtra и диапазон строк на каждой строке блока', () => {
    const { resolver } = makeResolver(
      [region(['b', 'c'], ['r2', 'r3'])],
      ['a', 'b', 'c', 'd'],
      rowsOf('r1', 'r2', 'r3', 'r4'),
    );
    expect(resolver.colSpan('b')({ rowInd: 1 })).toBe(1);
    expect(resolver.rowSpan('b')({ rowInd: 1 })).toEqual([1, 2]);
    // Покрытая строка блока несёт тот же диапазон (контракт форка).
    expect(resolver.rowSpan('b')({ rowInd: 2 })).toEqual([1, 2]);
  });

  it('вне блока: colSpan 0, rowSpan null', () => {
    const { resolver } = makeResolver(
      [region(['b', 'c'], ['r2', 'r3'])],
      ['a', 'b', 'c', 'd'],
      rowsOf('r1', 'r2', 'r3', 'r4'),
    );
    expect(resolver.colSpan('b')({ rowInd: 0 })).toBe(0);
    expect(resolver.rowSpan('b')({ rowInd: 3 })).toBeNull();
    // Не-origin колонка региона на render-time отдаёт «пусто».
    expect(resolver.colSpan('c')({ rowInd: 1 })).toBe(0);
    expect(resolver.rowSpan('c')({ rowInd: 1 })).toBeNull();
  });

  it('regionCols — union колонок всех регионов (для навешивания резолвера)', () => {
    const { resolver } = makeResolver(
      [region(['b', 'c'], ['r1']), region(['d'], ['r2'])],
      ['a', 'b', 'c', 'd'],
      rowsOf('r1', 'r2'),
    );
    expect([...resolver.regionCols].sort()).toEqual(['b', 'c', 'd']);
  });

  it('несколько регионов на одной origin-колонке живут независимо', () => {
    const { resolver } = makeResolver(
      [region(['b'], ['r1', 'r2']), region(['b'], ['r4', 'r5'])],
      ['a', 'b'],
      rowsOf('r1', 'r2', 'r3', 'r4', 'r5'),
    );
    expect(resolver.rowSpan('b')({ rowInd: 0 })).toEqual([0, 1]);
    expect(resolver.rowSpan('b')({ rowInd: 2 })).toBeNull();
    expect(resolver.rowSpan('b')({ rowInd: 4 })).toEqual([3, 4]);
  });
});

describe('createMergedRegionsResolver — render-порядок и смежность', () => {
  it('origin следует за render-порядком: после reorder origin-колонкой становится другая', () => {
    const { resolver, renderColKeysRef } = makeResolver(
      [region(['b', 'c'], ['r1'])],
      ['a', 'b', 'c'],
      rowsOf('r1'),
    );
    expect(resolver.colSpan('b')({ rowInd: 0 })).toBe(1);

    // Reorder: 'c' теперь левее 'b' — origin переезжает на 'c'.
    renderColKeysRef.current = ['c', 'b', 'a'];
    expect(resolver.colSpan('b')({ rowInd: 0 })).toBe(0);
    expect(resolver.colSpan('c')({ rowInd: 0 })).toBe(1);
  });

  it('колонки региона перестали быть смежными → регион не рисуется', () => {
    const { resolver, renderColKeysRef } = makeResolver(
      [region(['a', 'b'], ['r1'])],
      ['a', 'b', 'c'],
      rowsOf('r1'),
    );
    expect(resolver.colSpan('a')({ rowInd: 0 })).toBe(1);

    // 'c' вклинилась между 'a' и 'b'.
    renderColKeysRef.current = ['a', 'c', 'b'];
    expect(resolver.colSpan('a')({ rowInd: 0 })).toBe(0);
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toBeNull();
  });

  it('строки региона перестали быть смежными (сортировка) → регион не рисуется', () => {
    const { resolver, rowsRef } = makeResolver(
      [region(['a'], ['r1', 'r2'])],
      ['a'],
      rowsOf('r1', 'r2', 'r3'),
    );
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toEqual([0, 1]);

    rowsRef.current = rowsOf('r1', 'r3', 'r2');
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toBeNull();
  });

  it('скрытая колонка региона: оставшаяся часть рисуется, если смежность цела', () => {
    const { resolver, renderColKeysRef } = makeResolver(
      [region(['b', 'c'], ['r1', 'r2'])],
      ['a', 'b', 'c'],
      rowsOf('r1', 'r2'),
    );
    // 'c' скрыта — регион сжимается до вертикального merge на 'b'.
    renderColKeysRef.current = ['a', 'b'];
    expect(resolver.colSpan('b')({ rowInd: 0 })).toBe(0);
    expect(resolver.rowSpan('b')({ rowInd: 0 })).toEqual([0, 1]);
  });

  it('отфильтрованные строки региона: оставшаяся часть сжимается по строкам', () => {
    const { resolver, rowsRef } = makeResolver(
      [region(['a'], ['r1', 'r2', 'r3'])],
      ['a'],
      rowsOf('r1', 'r2', 'r3'),
    );
    rowsRef.current = rowsOf('r2', 'r3');
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toEqual([0, 1]);
  });

  it('все ключи региона отсутствуют → регион молча пропадает', () => {
    const { resolver, rowsRef } = makeResolver(
      [region(['a'], ['r1', 'r2'])],
      ['a'],
      rowsOf('r1', 'r2'),
    );
    rowsRef.current = rowsOf('x1', 'x2');
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toBeNull();
  });

  it('дубликаты в colKeys/rowKeys не валят проверку смежности', () => {
    const { resolver } = makeResolver(
      [region(['a', 'a', 'b'], ['r1', 'r1', 'r2'])],
      ['a', 'b'],
      rowsOf('r1', 'r2'),
    );
    expect(resolver.colSpan('a')({ rowInd: 0 })).toBe(1);
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toEqual([0, 1]);
  });
});

describe('createMergedRegionsResolver — кэш по идентичности', () => {
  it('мутация массивов на месте (та же identity) НЕ пересчитывает карту', () => {
    const rows = rowsOf('r1', 'r2', 'r3');
    const { resolver, rowsRef } = makeResolver(
      [region(['a'], ['r1', 'r2'])],
      ['a'],
      rows,
    );
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toEqual([0, 1]);

    // In-place reverse: identity не изменилась — резолвер отдаёт кэш.
    (rowsRef.current as Row[]).reverse();
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toEqual([0, 1]);
  });

  it('новый массив строк (новая identity) пересчитывает карту', () => {
    const { resolver, rowsRef } = makeResolver(
      [region(['a'], ['r1', 'r2'])],
      ['a'],
      rowsOf('r1', 'r2', 'r3'),
    );
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toEqual([0, 1]);

    rowsRef.current = rowsOf('r3', 'r1', 'r2');
    expect(resolver.rowSpan('a')({ rowInd: 0 })).toBeNull();
    expect(resolver.rowSpan('a')({ rowInd: 1 })).toEqual([1, 2]);
  });
});
