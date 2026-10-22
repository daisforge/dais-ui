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

const BASE = 20;
const ROWS: Row[] = [{ id: 0 }, { id: 1 }];
const COLUMNS = [{ id: 'a' }, { id: 'b' }];

/** Хук после первого запроса высоты: glide передал базовую высоту */
const setup = () => {
  const hook = renderHook(() =>
    useAutoRowHeight({ enabled: true, rows: ROWS, columns: COLUMNS }),
  );
  hook.result.current.heightOf(0, BASE);
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

  it('высота ниже базовой обновления не вызывает', async () => {
    const { result } = setup();
    const versionBefore = result.current.version;

    await act(async () => {
      result.current.reporterFor(ROWS[0]!, 0, 'a', false).report(100, 10);
    });

    expect(result.current.version).toBe(versionBefore);
  });

  it('после загрузки шрифтов высоты сбрасываются и ячейки меряются заново', async () => {
    const { result } = setup();
    await act(async () => {
      result.current.reporterFor(ROWS[0]!, 0, 'a', false).report(100, 60);
    });
    const versionBefore = result.current.version;

    await act(async () => {
      fontsLoaded();
    });

    expect(result.current.version).toBe(versionBefore + 1);
    expect(result.current.heightOf(0, BASE)).toBe(BASE);
    expect(
      result.current.reporterFor(ROWS[0]!, 0, 'a', false).needsHeight(100),
    ).toBe(true);
  });
});
