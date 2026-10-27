import { act, renderHook } from '@testing-library/react';
import {
  dispatchCanvasPortalHover,
  dispatchCanvasPortalReset,
  lockPortalHover,
} from '@ui-kit/components/TableGlide';
import { describe, expect, it } from 'vitest';

import { usePortalHover } from './usePortalHover';

const renderTooltip = () => {
  const container = document.createElement('div');
  const hook = renderHook(() =>
    usePortalHover({
      filter: () => ({}),
      containerRef: { current: container },
    }),
  );
  const show = () =>
    act(() => {
      dispatchCanvasPortalHover(
        { visible: true, x: 0, y: 0, width: 10, height: 10, nodeId: 'a' },
        container,
      );
    });
  return { container, hook, show };
};

describe('usePortalHover: ресайз и перестановка колонок', () => {
  it('сброс своей таблицы прячет тултип, чужой таблицы нет', () => {
    const own = renderTooltip();
    own.show();
    act(() => dispatchCanvasPortalReset(document.createElement('div')));
    expect(own.hook.result.current.visible).toBe(true);
    act(() => dispatchCanvasPortalReset(own.container));
    expect(own.hook.result.current.visible).toBe(false);
  });

  it('блокировка чужой таблицы тултип не прячет', () => {
    const own = renderTooltip();
    own.show();
    let release = () => {};
    act(() => {
      release = lockPortalHover(document.createElement('div'));
    });
    expect(own.hook.result.current.visible).toBe(true);
    act(() => release());
  });
});
