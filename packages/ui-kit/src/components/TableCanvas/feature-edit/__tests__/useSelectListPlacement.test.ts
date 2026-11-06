import { act, renderHook, waitFor } from '@testing-library/react';
import { SELECT_LIST_PORTAL_ID } from '@ui-kit/components/TableCanvasSharedConstants';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useSelectListPlacement } from '../useSelectListPlacement';

const addList = (height: number) => {
  const portal = document.createElement('div');
  portal.id = SELECT_LIST_PORTAL_ID;
  const wrapper = document.createElement('div');
  vi.spyOn(wrapper, 'getBoundingClientRect').mockReturnValue({
    height,
  } as DOMRect);
  const tree = document.createElement('ul');
  tree.setAttribute('role', 'tree');
  wrapper.append(tree);
  portal.append(wrapper);
  document.body.append(portal);
};

const render = (preferTop: boolean, spaceAbove: number | undefined) =>
  renderHook(() =>
    useSelectListPlacement({ preferTop, getSpaceAbove: () => spaceAbove }),
  );

afterEach(() => {
  document.body.innerHTML = '';
  vi.restoreAllMocks();
});

describe('useSelectListPlacement', () => {
  it('подпись внизу и список помещается над ней: вверх', () => {
    addList(164);

    expect(render(true, 164).result.current).toBe('top');
  });

  it('подпись внизу и список не помещается: вниз', () => {
    addList(164);

    expect(render(true, 163).result.current).toBe('bottom');
  });

  it('подпись не внизу: вниз, даже если место есть', () => {
    addList(164);

    expect(render(false, 500).result.current).toBe('bottom');
  });

  it('область данных неизвестна: вниз', () => {
    addList(164);

    expect(render(true, undefined).result.current).toBe('bottom');
  });

  it('список появился позже поля: сторона выбирается по нему', async () => {
    const { result } = render(true, 500);
    expect(result.current).toBe('bottom');

    act(() => addList(164));

    await waitFor(() => expect(result.current).toBe('top'));
  });

  it('список не появился: остаётся вниз', () => {
    expect(render(true, 500).result.current).toBe('bottom');
  });

  it('после размонтирования за появлением списка не следит', async () => {
    const disconnect = vi.spyOn(MutationObserver.prototype, 'disconnect');
    const { unmount } = render(true, 500);

    unmount();

    expect(disconnect).toHaveBeenCalled();
  });
});
