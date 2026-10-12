import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useMassActionsPosition } from '../../widgets/mass-actions/hooks/useMassActionsPosition';
import { useMassActionsSidebar } from '../../widgets/mass-actions/hooks/useMassActionsSidebar';
import { SIDEBAR_DURATION } from '../constants';

const panels = vi.hoisted(() => ({
  leftOpen: false,
  rightOpen: false,
  leftWidth: 300 as string | number,
  rightWidth: 400,
  canvasWidth: 1000,
  canvasRef: { current: null as HTMLDivElement | null },
}));

vi.mock('../../contexts', () => ({
  useLeftSidebar: () => ({ isOpen: panels.leftOpen, width: panels.leftWidth }),
  useRightSidebar: () => ({
    isOpen: panels.rightOpen,
    width: panels.rightWidth,
  }),
  useRefTableContainerContext: () => panels.canvasRef,
  useTableResizeObserverWidth: () => () => 1000,
}));

const transitionWait = SIDEBAR_DURATION * 1000 + 50;
const makeOptions = (isCollapsed = true) => ({
  isCollapsed,
  isHaveSomeFeatureInSidebar: true,
  rightSidebarWidth: undefined as string | number | undefined,
  setIsCollapsed: vi.fn(),
  calculatePositionForState: vi.fn(() => 150),
  calculatePosition: vi.fn(),
  calculateCompression: vi.fn(),
  setTranslateX: vi.fn(),
  shouldApplySidebarOffsetRef: { current: isCollapsed },
});

const rectWithWidth = (width: number): DOMRect => ({
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  right: width,
  bottom: 0,
  height: 0,
  width,
  toJSON: () => ({}),
});

describe('mass actions with two sidebars', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    panels.leftOpen = false;
    panels.rightOpen = false;
    panels.leftWidth = 300;
    panels.rightWidth = 400;
    panels.canvasWidth = 1000;
    const canvas = document.createElement('div');
    vi.spyOn(canvas, 'getBoundingClientRect').mockImplementation(() =>
      rectWithWidth(panels.canvasWidth),
    );
    panels.canvasRef.current = canvas;
  });
  afterEach(() => {
    cleanup();
    vi.clearAllTimers();
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it.each(['left', 'right'] as const)(
    'handles second-panel opening and first-panel closing after %s',
    (firstSide) => {
      panels.leftOpen = firstSide === 'left';
      panels.rightOpen = firstSide === 'right';
      const options = makeOptions();
      const { rerender, result } = renderHook(() =>
        useMassActionsSidebar(options),
      );

      panels.leftOpen = true;
      panels.rightOpen = true;
      rerender();
      expect(options.calculatePosition).toHaveBeenCalledTimes(2);
      expect(options.calculateCompression).toHaveBeenCalledTimes(2);
      expect(result.current.isSidebarOpen).toBe(true);

      panels.leftOpen = firstSide !== 'left';
      panels.rightOpen = firstSide !== 'right';
      rerender();
      expect(options.calculatePosition).toHaveBeenCalledTimes(3);
      expect(options.calculateCompression).toHaveBeenCalledTimes(3);
      expect(options.setIsCollapsed).not.toHaveBeenCalled();

      panels.leftOpen = false;
      panels.rightOpen = false;
      rerender();
      expect(options.setIsCollapsed).toHaveBeenLastCalledWith(false);
      expect(options.calculatePositionForState).toHaveBeenLastCalledWith(false);
      expect(options.shouldApplySidebarOffsetRef.current).toBe(false);
    },
  );

  it('collapses manually expanded actions when a second panel opens', () => {
    panels.leftOpen = true;
    const options = makeOptions();
    const { rerender } = renderHook((props) => useMassActionsSidebar(props), {
      initialProps: options,
    });
    rerender({ ...options, isCollapsed: false });
    expect(options.setIsCollapsed).not.toHaveBeenCalled();
    panels.rightOpen = true;
    rerender({ ...options, isCollapsed: false });
    expect(options.setIsCollapsed).toHaveBeenCalledOnce();
    expect(options.setIsCollapsed).toHaveBeenLastCalledWith(true);
    expect(options.calculatePositionForState).toHaveBeenLastCalledWith(true);
  });

  it('remeasures both sides for CSS width changes while numeric right context stays unchanged', () => {
    panels.leftOpen = true;
    panels.rightOpen = true;
    const options = makeOptions();
    const { rerender } = renderHook((props) => useMassActionsSidebar(props), {
      initialProps: options,
    });
    rerender({ ...options, rightSidebarWidth: '25%' });
    expect(options.calculatePosition).toHaveBeenCalledTimes(2);
    expect(options.calculateCompression).toHaveBeenCalledTimes(2);
    panels.leftWidth = 'calc(20% + 10px)';
    rerender({ ...options, rightSidebarWidth: '25%' });
    expect(options.calculatePosition).toHaveBeenCalledTimes(3);
    rerender({ ...options, rightSidebarWidth: 'calc(25% + 40px)' });
    expect(options.calculatePosition).toHaveBeenCalledTimes(4);
    expect(options.calculateCompression).toHaveBeenCalledTimes(4);
    expect(panels.rightWidth).toBe(400);
    act(() => vi.advanceTimersByTime(transitionWait));
    expect(options.calculatePosition).toHaveBeenCalledTimes(5);
    expect(options.calculateCompression).toHaveBeenCalledTimes(5);
  });

  it('uses current position and compression callbacks after the transition', () => {
    panels.leftOpen = true;
    const options = makeOptions();
    const { rerender } = renderHook((props) => useMassActionsSidebar(props), {
      initialProps: options,
    });
    const currentPosition = vi.fn();
    const currentCompression = vi.fn();
    rerender({
      ...options,
      calculatePosition: currentPosition,
      calculateCompression: currentCompression,
    });
    act(() => vi.advanceTimersByTime(transitionWait - 1));
    expect(currentPosition).not.toHaveBeenCalled();
    expect(currentCompression).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(1));
    expect(currentPosition).toHaveBeenCalledOnce();
    expect(currentCompression).toHaveBeenCalledOnce();
    expect(options.calculatePosition).toHaveBeenCalledOnce();
    expect(options.calculateCompression).toHaveBeenCalledOnce();
  });

  it('cancels prior transition measurements on rapid toggles and unmount', () => {
    panels.leftOpen = true;
    const options = makeOptions();
    const { rerender, unmount } = renderHook(
      (props) => useMassActionsSidebar(props),
      {
        initialProps: options,
      },
    );
    act(() => vi.advanceTimersByTime(200));
    panels.leftOpen = false;
    rerender({ ...options, isCollapsed: false });
    expect(options.calculatePosition).toHaveBeenCalledTimes(2);
    act(() => vi.advanceTimersByTime(transitionWait - 200));
    expect(options.calculatePosition).toHaveBeenCalledTimes(2);
    expect(options.calculateCompression).toHaveBeenCalledTimes(2);
    act(() => vi.advanceTimersByTime(200));
    expect(options.calculatePosition).toHaveBeenCalledTimes(3);
    expect(options.calculateCompression).toHaveBeenCalledTimes(3);
    panels.rightOpen = true;
    rerender({ ...options, isCollapsed: true });
    expect(options.calculatePosition).toHaveBeenCalledTimes(4);
    unmount();
    act(() => vi.runAllTimers());
    expect(options.calculatePosition).toHaveBeenCalledTimes(4);
    expect(options.calculateCompression).toHaveBeenCalledTimes(4);
  });

  it('ignores an open right panel when its content is not displayed', () => {
    panels.rightOpen = true;
    const options = {
      ...makeOptions(false),
      isHaveSomeFeatureInSidebar: false,
    };
    const { result } = renderHook(() => useMassActionsSidebar(options));
    expect(result.current.isSidebarOpen).toBe(false);
    expect(options.setIsCollapsed).not.toHaveBeenCalled();
    expect(options.shouldApplySidebarOffsetRef.current).toBe(false);
  });

  it('positions oversized actions using the actual canvas rather than the outer width', () => {
    panels.canvasWidth = 400;
    const actions = document.createElement('div');
    vi.spyOn(actions, 'getBoundingClientRect').mockReturnValue(
      rectWithWidth(500),
    );
    const setTranslateX = vi.fn();
    const { result } = renderHook(() =>
      useMassActionsPosition({
        containerRef: { current: actions },
        collapseButtonRef: { current: null },
        summaryCheckboxElRef: { current: null },
        isCompact: false,
        isHaveSomeFeatureInSidebar: false,
        visibleButtonsCount: 1,
        setTranslateX,
      }),
    );
    act(() => result.current.calculatePosition());
    expect(setTranslateX).toHaveBeenLastCalledWith(74);
    panels.canvasWidth = 200;
    act(() => result.current.calculatePosition());
    expect(setTranslateX).toHaveBeenLastCalledWith(174);
  });
});
