import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useUnstickyHeader } from '../useUnstickyHeader';

const HEADER_HEIGHT = 40;
const GROUP_HEADER_HEIGHT = 32;

const createGrid = (scrollTop: number) => {
  const root = document.createElement('div');
  const scroller = document.createElement('div');
  scroller.className = 'dvn-scroller';
  scroller.scrollTop = scrollTop;
  const underlay = document.createElement('div');
  underlay.className = 'dvn-underlay';
  root.append(scroller, underlay);
  return { root, scroller, underlay };
};

const setup = (scrollTop: number, enabled = true) => {
  const grid = createGrid(scrollTop);
  const hook = renderHook(
    ({ isEnabled }: { isEnabled: boolean }) =>
      useUnstickyHeader({
        enabled: isEnabled,
        portalEventTargetRef: { current: grid.root },
        headerHeight: HEADER_HEIGHT,
        groupHeaderHeight: GROUP_HEADER_HEIGHT,
      }),
    { initialProps: { isEnabled: enabled } },
  );
  const attach = () =>
    act(() => hook.result.current.unstickyCallbackRef({} as DataEditorRef));
  return { ...grid, hook, attach };
};

describe('useUnstickyHeader', () => {
  it('открепление в прокрученной таблице сразу уводит шапку вверх, не дожидаясь прокрутки', () => {
    const { underlay, hook, attach } = setup(2000);

    attach();

    expect(underlay.style.transform).toBe(
      `translateY(-${HEADER_HEIGHT + GROUP_HEADER_HEIGHT}px)`,
    );
    expect(hook.result.current.mergedExperimental?.paddingBottom).toBe(
      -(HEADER_HEIGHT + GROUP_HEADER_HEIGHT),
    );
  });

  it('шапка уезжает вместе с прокруткой, пока не скроется целиком', () => {
    const { scroller, underlay, attach } = setup(0);
    attach();

    scroller.scrollTop = 30;
    act(() => {
      scroller.dispatchEvent(new Event('scroll'));
    });

    expect(underlay.style.transform).toBe('translateY(-30px)');
  });

  it('повторное закрепление возвращает шапку на место', () => {
    const { underlay, hook, attach } = setup(2000);
    attach();

    hook.rerender({ isEnabled: false });
    attach();

    expect(underlay.style.transform).toBe('');
    expect(hook.result.current.mergedExperimental).toBeUndefined();
  });
});
