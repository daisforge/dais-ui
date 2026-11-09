import { act, cleanup, renderHook } from '@testing-library/react';
import { useLayoutEffect } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { throttleWithLastCall } from '../../../../../utils/throttle';
import type { CompressionSpacing, ToolsMenuState } from '../types';
import { useCompressionFeatures } from './index';

const state: ToolsMenuState = {
  leftSide: {
    collapsingBlock: { isActive: false },
    editRowFeature: {
      isActive: false,
      isLabelVisible: true,
      editModeEnabled: false,
    },
    leftSideInner: [],
  },
  middle: { searchingFeature: { isActive: false, minWidth: 250 } },
  rightSide: {
    buttons: [{ isLabelVisible: true }],
    customFeatures: [],
    overflowItems: [],
    isOverflowTriggerVisible: false,
  },
};
const spacing: CompressionSpacing = {
  containerPadding: 0,
  leftPartGap: 0,
  leftPartPaddingRight: 0,
  collapseGap: 0,
  rightButtonsGap: 0,
  rightButtonsPaddingInline: 0,
};

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe('TableCanvas: компрессия после перезамера', () => {
  it('отложенный resize использует новые замеры после двух смен ширины', () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(
      ({ width }) =>
        useCompressionFeatures(
          state,
          { rightButtons: [width], rightButtonsIcon: [48] },
          null,
          spacing,
        ),
      { initialProps: { width: 480 } },
    );
    const savedCompress = result.current.compress;
    const resize = throttleWithLastCall(savedCompress, 100);
    act(() => {
      resize(510);
      resize(500);
    });
    expect(
      result.current.compressedState.rightSide.buttons[0]?.isLabelVisible,
    ).toBe(true);
    rerender({ width: 540 });
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(
      result.current.compressedState.rightSide.buttons[0]?.isLabelVisible,
    ).toBe(false);
    expect(
      result.current.calculateCurrentWidth(result.current.compressedState),
    ).toBeLessThanOrEqual(500);
    expect(result.current.compress).toBe(savedCompress);
    resize.cancel();
  });

  it('обновляет исходное состояние до layout-эффекта потребителя', () => {
    const { result, rerender } = renderHook(
      ({ initialState }) => {
        const updated = useCompressionFeatures(
          initialState,
          { rightButtons: [480] },
          null,
          spacing,
        );
        const { compress } = updated;
        useLayoutEffect(() => {
          compress(500);
        }, [initialState, compress]);
        return updated;
      },
      { initialProps: { initialState: state } },
    );
    const nextState = {
      ...state,
      rightSide: { ...state.rightSide, buttons: [] },
    };
    rerender({ initialState: nextState });
    expect(result.current.compressedState.rightSide.buttons).toEqual([]);
  });

  it('не возвращает старое состояние кэша после изменения отступов', () => {
    const widths = { rightButtons: [480], rightButtonsIcon: [48] };
    const { result, rerender } = renderHook(
      ({ padding }) =>
        useCompressionFeatures(state, widths, null, {
          ...spacing,
          containerPadding: padding,
        }),
      { initialProps: { padding: 0 } },
    );
    act(() => {
      result.current.compress(500);
    });
    rerender({ padding: 20 });
    act(() => {
      result.current.compress(500);
    });
    expect(
      result.current.compressedState.rightSide.buttons[0]?.isLabelVisible,
    ).toBe(false);
  });
});
