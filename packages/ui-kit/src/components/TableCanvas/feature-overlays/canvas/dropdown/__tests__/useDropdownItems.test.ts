import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useDropdownItems } from '../hooks/useDropdownItems';

const ITEMS = [{ value: 1, label: 'Открыть' }];

describe('useDropdownItems: пункты дропдауна, в том числе асинхронные', () => {
  afterEach(() => {
    cleanup();
  });

  it('готовые items отдаёт сразу', () => {
    const { result } = renderHook(() => useDropdownItems({ items: ITEMS }));
    expect(result.current.status).toBe('ready');
    expect(result.current.items).toBe(ITEMS);
  });

  it('синхронный getItems отдаёт пункты без состояния загрузки после монтирования', () => {
    const config = { getItems: () => ITEMS };
    const { result } = renderHook(() => useDropdownItems(config));
    expect(result.current.status).toBe('ready');
    expect(result.current.items).toBe(ITEMS);
  });

  it('промис из getItems: сначала loading, потом ready', async () => {
    let resolve: (items: typeof ITEMS) => void = () => {};
    const config = {
      getItems: () =>
        new Promise<typeof ITEMS>((res) => {
          resolve = res;
        }),
    };
    const { result } = renderHook(() => useDropdownItems(config));
    expect(result.current.status).toBe('loading');
    await act(async () => {
      resolve(ITEMS);
    });
    expect(result.current.status).toBe('ready');
    expect(result.current.items).toBe(ITEMS);
  });

  it('ошибка промиса даёт error, retry запускает запрос снова', async () => {
    const getItems = vi
      .fn()
      .mockRejectedValueOnce(new Error('сеть'))
      .mockResolvedValueOnce(ITEMS);
    const config = { getItems };
    const { result } = renderHook(() => useDropdownItems(config));
    await act(async () => {});
    expect(result.current.status).toBe('error');
    expect((result.current.error as Error).message).toBe('сеть');

    await act(async () => {
      result.current.retry();
    });
    expect(result.current.status).toBe('ready');
    expect(result.current.items).toBe(ITEMS);
    expect(getItems).toHaveBeenCalledTimes(2);
  });

  it('исключение из getItems даёт error', () => {
    const config = {
      getItems: () => {
        throw new Error('нет данных');
      },
    };
    const { result } = renderHook(() => useDropdownItems(config));
    expect(result.current.status).toBe('error');
  });

  it('ответ после размонтирования не обновляет состояние', async () => {
    let resolve: (items: typeof ITEMS) => void = () => {};
    const config = {
      getItems: () =>
        new Promise<typeof ITEMS>((res) => {
          resolve = res;
        }),
    };
    const { unmount } = renderHook(() => useDropdownItems(config));
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    unmount();
    await act(async () => {
      resolve(ITEMS);
    });
    expect(error).not.toHaveBeenCalled();
    error.mockRestore();
  });

  it('размонтирование во время загрузки отменяет запрос через signal', () => {
    let signal: AbortSignal | undefined;
    const config = {
      getItems: (context: { signal: AbortSignal }) => {
        signal = context.signal;
        return new Promise<typeof ITEMS>(() => {});
      },
    };
    const { unmount } = renderHook(() => useDropdownItems(config));
    expect(signal?.aborted).toBe(false);
    unmount();
    expect(signal?.aborted).toBe(true);
  });

  it('retry отменяет прежний запрос', () => {
    const signals: AbortSignal[] = [];
    const config = {
      getItems: ({ signal }: { signal: AbortSignal }) => {
        signals.push(signal);
        return new Promise<typeof ITEMS>(() => {});
      },
    };
    const { result } = renderHook(() => useDropdownItems(config));
    act(() => {
      result.current.retry();
    });
    expect(signals).toHaveLength(2);
    expect(signals[0]?.aborted).toBe(true);
    expect(signals[1]?.aborted).toBe(false);
  });

  it('новый объект config с тем же getItems не запускает загрузку заново', () => {
    const getItems = vi.fn(() => ITEMS);
    const { rerender } = renderHook(() => useDropdownItems({ getItems }));
    rerender();
    rerender();
    expect(getItems).toHaveBeenCalledTimes(1);
  });
});
