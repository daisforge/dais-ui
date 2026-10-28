import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useAutoRowHeight } from '../useAutoRowHeight';

let fontsLoaded: () => void = () => {};
let fontsLoadedOptions: unknown;
vi.mock('../../lib/canvas/hooks/fontsLoaded', () => ({
  subscribeFontsLoaded: (onLoaded: () => void, options?: unknown) => {
    fontsLoaded = onLoaded;
    fontsLoadedOptions = options;
    return () => {};
  },
}));

type Row = { id: number };
type Column = { id: string; renderCell?: unknown };

const BASE = 20;
const ROWS: Row[] = [{ id: 0 }, { id: 1 }];
const renderA = () => 'a';
const renderB = () => 'b';
const COLUMNS: Column[] = [
  { id: 'a', renderCell: renderA },
  { id: 'b', renderCell: renderB },
];
const SMALL = { fontFamily: 'Inter', size: 'small' };

/** Хук после первого запроса высоты: glide передал базовую высоту */
const setup = (initial = { columns: COLUMNS, theme: SMALL as object }) => {
  const hook = renderHook(
    ({ columns, theme }) =>
      useAutoRowHeight({ enabled: true, rows: ROWS, columns, theme }),
    { initialProps: initial },
  );
  hook.result.current.heightOf(0, BASE);
  return hook;
};

const needsHeight = (
  result: { current: ReturnType<typeof useAutoRowHeight<Row>> },
  columnId: string,
) => result.current.reporterFor(ROWS[0]!, 0, columnId, false).needsHeight(100);

/** Ячейки строки 0 в колонках a и b измерены */
const measured = async () => {
  const hook = setup();
  await act(async () => {
    hook.result.current.reporterFor(ROWS[0]!, 0, 'a', false).report(100, 60);
    hook.result.current.reporterFor(ROWS[0]!, 0, 'b', false).report(100, 30);
  });
  return hook;
};

describe('useAutoRowHeight', () => {
  it('высота строки — по сообщённым ячейкам после кадра, не ниже базовой', async () => {
    const { result } = setup();

    await act(async () => {
      result.current.reporterFor(ROWS[0]!, 0, 'a', false).report(100, 60);
      result.current.reporterFor(ROWS[1]!, 1, 'a', false).report(100, 5);
    });

    expect(result.current.heightOf(0, BASE)).toBe(60);
    expect(result.current.heightOf(1, BASE)).toBe(BASE);
  });

  it('высоты за кадр — одно обновление для glide', async () => {
    const { result } = setup();
    const versionBefore = result.current.version;

    await act(async () => {
      result.current.reporterFor(ROWS[0]!, 0, 'a', false).report(100, 60);
      result.current.reporterFor(ROWS[1]!, 1, 'b', false).report(100, 80);
    });

    expect(result.current.version).toBe(versionBefore + 1);
  });

  it('обновление рендерится в микрозадаче коммита, до показа кадра', async () => {
    const { result } = setup();
    const versionBefore = result.current.version;
    const scope = globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean };
    const actEnvironment = scope.IS_REACT_ACT_ENVIRONMENT;
    scope.IS_REACT_ACT_ENVIRONMENT = false;

    try {
      result.current.reporterFor(ROWS[0]!, 0, 'a', false).report(100, 60);
      await Promise.resolve();

      expect(result.current.version).toBe(versionBefore + 1);
    } finally {
      scope.IS_REACT_ACT_ENVIRONMENT = actEnvironment;
    }
  });

  it('высота ниже базовой обновления не вызывает', async () => {
    const { result } = setup();
    const versionBefore = result.current.version;

    await act(async () => {
      result.current.reporterFor(ROWS[0]!, 0, 'a', false).report(100, 10);
    });

    expect(result.current.version).toBe(versionBefore);
  });

  it('загрузка шрифта: ячейки перемеряются, до перемера строка держит высоту', async () => {
    const { result } = await measured();
    const versionBefore = result.current.version;

    await act(async () => {
      fontsLoaded();
    });

    expect(result.current.version).toBe(versionBefore + 1);
    expect(result.current.heightOf(0, BASE)).toBe(60);
    expect(needsHeight(result, 'a')).toBe(true);
    expect(needsHeight(result, 'b')).toBe(true);
  });

  it('подписка на шрифты без фильтра по семейству темы: у ячейки может быть свой шрифт', () => {
    setup();

    expect(fontsLoadedOptions).toBeUndefined();
  });

  it('смена темы (rowSize, шрифт, отступы) перемеряет все ячейки', async () => {
    const { result, rerender } = await measured();

    rerender({ columns: COLUMNS, theme: { fontFamily: 'Inter', size: 'big' } });

    expect(needsHeight(result, 'a')).toBe(true);
    expect(needsHeight(result, 'b')).toBe(true);
    expect(result.current.heightOf(0, BASE)).toBe(60);
  });

  it('новый renderCell колонки при тех же строках перемеряет только её ячейки', async () => {
    const { result, rerender } = await measured();

    rerender({
      columns: [{ id: 'a', renderCell: () => 'длинный текст' }, COLUMNS[1]!],
      theme: SMALL,
    });

    expect(needsHeight(result, 'a')).toBe(true);
    expect(needsHeight(result, 'b')).toBe(false);
  });

  it('новый массив колонок с теми же renderCell (ресайз) не перемеряет', async () => {
    const { result, rerender } = await measured();

    rerender({
      columns: COLUMNS.map((column) => ({ ...column })),
      theme: SMALL,
    });

    expect(needsHeight(result, 'a')).toBe(false);
    expect(needsHeight(result, 'b')).toBe(false);
  });

  it('перерисовка без изменений темы и колонок не перемеряет', async () => {
    const { result, rerender } = await measured();

    rerender({ columns: COLUMNS, theme: SMALL });

    expect(needsHeight(result, 'a')).toBe(false);
  });
});
