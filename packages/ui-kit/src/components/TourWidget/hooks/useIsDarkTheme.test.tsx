import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useIsDarkTheme } from './useIsDarkTheme';

afterEach(() => {
  cleanup();
  document.documentElement.removeAttribute('data-theme');
  vi.restoreAllMocks();
});

describe('Тема TourWidget', () => {
  it.each([
    ['light', false],
    ['dark', true],
    ['betaCoreLight', false],
    ['betaCoreDark', true],
    ['highContrastLight', false],
    ['highContrastDark', true],
    ['DARK', true],
    ['unknown', false],
    [null, false],
  ] as const)('определяет тему %s при монтировании', (theme, expected) => {
    if (theme !== null)
      document.documentElement.setAttribute('data-theme', theme);

    const { result } = renderHook(useIsDarkTheme);

    expect(result.current).toBe(expected);
  });

  it.each([
    ['light', 'dark', true],
    ['dark', 'betaCoreLight', false],
    ['light', 'betaCoreDark', true],
    ['light', 'highContrastDark', true],
    ['dark', 'light', false],
    ['dark', null, false],
  ] as const)(
    'обновляет тему %s → %s без повторного монтирования',
    async (initial, next, expected) => {
      document.documentElement.setAttribute('data-theme', initial);
      const { result } = renderHook(useIsDarkTheme);

      await act(async () => {
        if (next === null)
          document.documentElement.removeAttribute('data-theme');
        else document.documentElement.setAttribute('data-theme', next);
      });

      expect(result.current).toBe(expected);
    },
  );

  it('отключает наблюдение после размонтирования', () => {
    const disconnect = vi.spyOn(MutationObserver.prototype, 'disconnect');
    const { unmount } = renderHook(useIsDarkTheme);

    unmount();

    expect(disconnect).toHaveBeenCalledOnce();
  });
});
