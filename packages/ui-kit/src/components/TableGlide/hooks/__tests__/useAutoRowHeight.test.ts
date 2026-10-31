import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useAutoRowHeight } from '../useAutoRowHeight';

let fontsLoaded: () => void = () => {};
vi.mock('../../lib/canvas/hooks/fontsLoaded', () => ({
  subscribeFontsLoaded: (onLoaded: () => void) => {
    fontsLoaded = onLoaded;
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
      useAutoRowHeight({
        enabled: true,
        rows: ROWS,
        columns,
        theme,
        baseHeight: BASE,
      }),
    { initialProps: initial },
  );
  hook.result.current.heightOf(0);
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

    expect(result.current.heightOf(0)).toBe(60);
    expect(result.current.heightOf(1)).toBe(BASE);
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
    expect(result.current.heightOf(0)).toBe(60);
    expect(needsHeight(result, 'a')).toBe(true);
    expect(needsHeight(result, 'b')).toBe(true);
  });

  it('смена темы (rowSize, шрифт, отступы) перемеряет все ячейки', async () => {
    const { result, rerender } = await measured();

    rerender({ columns: COLUMNS, theme: { fontFamily: 'Inter', size: 'big' } });

    expect(needsHeight(result, 'a')).toBe(true);
    expect(needsHeight(result, 'b')).toBe(true);
    expect(result.current.heightOf(0)).toBe(60);
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

  it('maxHeight ограничивает строку, смена даёт glide новую функцию высоты без перемера', async () => {
    const { result, rerender } = renderHook(
      ({ maxHeight }) =>
        useAutoRowHeight({
          enabled: true,
          rows: ROWS,
          columns: COLUMNS,
          theme: SMALL,
          maxHeight,
          baseHeight: BASE,
        }),
      { initialProps: { maxHeight: 50 } },
    );
    result.current.heightOf(0);
    await act(async () => {
      result.current.reporterFor(ROWS[0]!, 0, 'a', false).report(100, 900);
    });

    expect(result.current.heightOf(0)).toBe(50);

    const heightOfBefore = result.current.heightOf;
    rerender({ maxHeight: 700 });

    expect(result.current.heightOf).not.toBe(heightOfBefore);
    expect(result.current.heightOf(0)).toBe(700);
    expect(needsHeight(result, 'a')).toBe(false);
  });
});

describe('useAutoRowHeight: подсказка changes для glide', () => {
  type Props = { rows: Row[]; baseHeight: number; maxHeight?: number };
  const ROWS_MANY: Row[] = Array.from({ length: 10 }, (_, id) => ({ id }));

  const setupMany = (initial: Props = { rows: ROWS_MANY, baseHeight: BASE }) => {
    const hook = renderHook(
      ({ rows, baseHeight, maxHeight }: Props) =>
        useAutoRowHeight({
          enabled: true,
          rows,
          columns: COLUMNS,
          theme: SMALL,
          baseHeight,
          maxHeight,
        }),
      { initialProps: initial },
    );
    for (let i = 0; i < 10; i += 1) hook.result.current.heightOf(i);
    return hook;
  };

  const report = async (
    hook: ReturnType<typeof setupMany>,
    rows: Row[],
    rowIndex: number,
    height: number,
  ) => {
    await act(async () => {
      hook.result.current
        .reporterFor(rows[rowIndex]!, rowIndex, 'a', false)
        .report(100, height);
    });
  };

  it('новые высоты строк: подсказка от прежней версии с диапазоном этих строк', async () => {
    const hook = setupMany();
    const before = hook.result.current.heightOf;

    await act(async () => {
      hook.result.current.reporterFor(ROWS_MANY[3]!, 3, 'a', false).report(100, 60);
      hook.result.current.reporterFor(ROWS_MANY[6]!, 6, 'a', false).report(100, 70);
    });

    const after = hook.result.current.heightOf;
    expect(after).not.toBe(before);
    expect(after.changes).toEqual({
      previousVersion: before.version,
      from: 3,
      to: 6,
    });
  });

  it('следующий шаг: подсказка только от предыдущей версии, диапазон не копится', async () => {
    const hook = setupMany();
    await report(hook, ROWS_MANY, 3, 60);
    const second = hook.result.current.heightOf;

    await report(hook, ROWS_MANY, 8, 50);
    expect(hook.result.current.heightOf.changes).toEqual({
      previousVersion: second.version,
      from: 8,
      to: 8,
    });
  });

  it('сортировка (новый массив строк той же длины): без подсказки', async () => {
    const hook = setupMany();
    await report(hook, ROWS_MANY, 3, 60);

    const sorted = [...ROWS_MANY].reverse();
    hook.rerender({ rows: sorted, baseHeight: BASE });
    expect(hook.result.current.heightOf.changes).toBeUndefined();
    expect(hook.result.current.heightOf(6)).toBe(60);
    expect(hook.result.current.heightOf(3)).toBe(BASE);
  });

  it('смена базовой высоты или потолка: без подсказки', () => {
    const hook = setupMany();
    hook.rerender({ rows: ROWS_MANY, baseHeight: BASE + 10 });
    expect(hook.result.current.heightOf.changes).toBeUndefined();

    hook.rerender({ rows: ROWS_MANY, baseHeight: BASE + 10, maxHeight: 40 });
    expect(hook.result.current.heightOf.changes).toBeUndefined();
  });

  it('догрузка шрифта: без подсказки, иначе glide не перерисует и ячейки не перемеряются', async () => {
    const hook = setupMany();
    await report(hook, ROWS_MANY, 3, 60);
    const before = hook.result.current.heightOf;

    act(() => fontsLoaded());
    const after = hook.result.current.heightOf;
    expect(after).not.toBe(before);
    expect(after.changes).toBeUndefined();

    await report(hook, ROWS_MANY, 5, 70);
    expect(hook.result.current.heightOf.changes).toEqual({
      previousVersion: after.version,
      from: 5,
      to: 5,
    });
  });

  it('смена набора колонок: без подсказки', async () => {
    const hook = renderHook(
      ({ columns }: { columns: Column[] }) =>
        useAutoRowHeight({
          enabled: true,
          rows: ROWS_MANY,
          columns,
          theme: SMALL,
          baseHeight: BASE,
        }),
      { initialProps: { columns: COLUMNS } },
    );
    for (let i = 0; i < 10; i += 1) hook.result.current.heightOf(i);
    await act(async () => {
      hook.result.current.reporterFor(ROWS_MANY[3]!, 3, 'a', false).report(100, 60);
    });
    expect(hook.result.current.heightOf.changes).toBeDefined();

    hook.rerender({ columns: [COLUMNS[0]!] });
    expect(hook.result.current.heightOf.changes).toBeUndefined();
  });

  it('у каждой новой функции heightOf свой номер версии, номера растут', async () => {
    const hook = setupMany();
    const versions = [hook.result.current.heightOf.version!];
    await report(hook, ROWS_MANY, 3, 60);
    versions.push(hook.result.current.heightOf.version!);
    hook.rerender({ rows: [...ROWS_MANY], baseHeight: BASE });
    versions.push(hook.result.current.heightOf.version!);
    act(() => fontsLoaded());
    versions.push(hook.result.current.heightOf.version!);

    expect(new Set(versions).size).toBe(versions.length);
    expect([...versions].sort((a, b) => a - b)).toEqual(versions);
  });
});
