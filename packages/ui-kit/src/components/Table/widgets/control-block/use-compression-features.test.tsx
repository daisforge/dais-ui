import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import type { ToolsMenuState } from './types';
import { useCompressionFeatures } from './use-compression-features';

const state: ToolsMenuState = {
  leftSide: {
    collapsingBlock: { isActive: false },
    selectingRowFeature: {
      isActive: false,
      isLabelVisible: true,
      isCounterVisible: false,
    },
    editRowFeature: {
      isActive: false,
      isLabelVisible: true,
      editModeEnabled: false,
    },
    leftSideInner: [],
    isLeftSideInnerInsideDropdown: false,
  },
  middle: { searchingFeature: { isActive: false, searchPosition: 'below' } },
  rightSide: {
    rightSideInner: [{ isLabelVisible: true, isTargetAction: false }],
    customFeatures: [],
    groupingRowsFeature: {
      isActive: false,
      isVisibleLabel: true,
      isCounterVisible: false,
    },
    isRightSideInsideDropdown: false,
  },
};

afterEach(cleanup);

describe('Table: сохранённый resize после перезамера', () => {
  it('использует новые ширины и исходное состояние', () => {
    const { result, rerender } = renderHook(
      ({ width, initialState }) =>
        useCompressionFeatures(initialState, { rightSideInner: [width] }, null),
      { initialProps: { width: 480, initialState: state } },
    );
    const savedCompress = result.current.compress;
    act(() => {
      savedCompress(500);
    });
    expect(
      result.current.compressedState.rightSide.rightSideInner[0]
        ?.isLabelVisible,
    ).toBe(true);
    rerender({ width: 540, initialState: state });
    act(() => {
      savedCompress(500);
    });
    expect(
      result.current.compressedState.rightSide.rightSideInner[0]
        ?.isLabelVisible,
    ).toBe(false);
    rerender({
      width: 540,
      initialState: {
        ...state,
        rightSide: {
          ...state.rightSide,
          rightSideInner: [{ isLabelVisible: true, isTargetAction: true }],
        },
      },
    });
    act(() => {
      savedCompress(1000);
    });
    expect(
      result.current.compressedState.rightSide.rightSideInner[0]
        ?.isTargetAction,
    ).toBe(true);
  });
});
