import { renderHook } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

// Мокаем createSafeResizeObserver, чтобы управлять моментом вызова колбека
// напрямую, без реального ResizeObserver и rAF-задержки.
const observeMock = vi.fn();
const disconnectMock = vi.fn();
let capturedCallback: (() => void) | undefined;

vi.mock('@ui-kit/utils', () => ({
  createSafeResizeObserver: (callback: () => void) => {
    capturedCallback = callback;
    return {
      observe: observeMock,
      disconnect: disconnectMock,
    };
  },
}));

// eslint-disable-next-line import/first
import { useSyncTabsScrollArrows } from './useSyncTabsScrollArrows';

const buildContainer = () => {
  const container = document.createElement('div');
  const scrollWrapper = document.createElement('div');
  scrollWrapper.className = 'tabs-clip-scroll';
  const track = document.createElement('div');
  scrollWrapper.appendChild(track);
  container.appendChild(scrollWrapper);
  document.body.appendChild(container);
  return { container, scrollWrapper, track };
};

describe('useSyncTabsScrollArrows', () => {
  it('должен диспатчить scroll-событие на скролл-контейнер табов при изменении размеров', () => {
    const { container, scrollWrapper } = buildContainer();
    const ref = createRef<HTMLDivElement>();
    // @ts-expect-error readonly ref для теста
    ref.current = container;

    const dispatchSpy = vi.spyOn(scrollWrapper, 'dispatchEvent');

    renderHook(() => useSyncTabsScrollArrows(ref, true));

    expect(observeMock).toHaveBeenCalled();
    expect(dispatchSpy).not.toHaveBeenCalled();

    // Эмулируем срабатывание ResizeObserver (например, добавился новый чип фильтра)
    capturedCallback?.();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    const [dispatchedEvent] = dispatchSpy.mock.calls[0] ?? [];
    expect(dispatchedEvent?.type).toBe('scroll');
  });

  it('не должен ничего наблюдать, если стрелки неактивны (active=false)', () => {
    const { container } = buildContainer();
    const ref = createRef<HTMLDivElement>();
    // @ts-expect-error readonly ref для теста
    ref.current = container;

    observeMock.mockClear();

    renderHook(() => useSyncTabsScrollArrows(ref, false));

    expect(observeMock).not.toHaveBeenCalled();
  });

  it('должен отписываться от ResizeObserver при размонтировании', () => {
    const { container } = buildContainer();
    const ref = createRef<HTMLDivElement>();
    // @ts-expect-error readonly ref для теста
    ref.current = container;

    disconnectMock.mockClear();

    const { unmount } = renderHook(() => useSyncTabsScrollArrows(ref, true));
    unmount();

    expect(disconnectMock).toHaveBeenCalledTimes(1);
  });
});
