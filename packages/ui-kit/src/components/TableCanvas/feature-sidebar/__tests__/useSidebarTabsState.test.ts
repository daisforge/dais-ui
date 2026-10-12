import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { SidebarTab } from '../../widgets/control-block/types';
import { useSidebarTabsState } from '../useSidebarTabsState';

const tabs: [SidebarTab, SidebarTab, SidebarTab] = [
  { id: 'reports', label: 'Reports', icon: null, content: 'Reports content' },
  { id: 'books', label: 'Books', icon: null, content: 'Books content' },
  {
    id: 'hidden',
    label: 'Hidden',
    icon: null,
    content: 'Hidden content',
    showInSidebar: false,
  },
];

type SidebarProps = Parameters<typeof useSidebarTabsState>[0];

const renderSidebarState = (options: Partial<SidebarProps> = {}) => {
  const initialProps: SidebarProps = {
    isOpen: true,
    toggle: vi.fn(),
    sidebarTabs: tabs,
    activeTabId: null,
    ...options,
  };
  return {
    ...renderHook((props: SidebarProps) => useSidebarTabsState(props), {
      initialProps,
    }),
    initialProps,
  };
};

describe('shared sidebar tab state', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    cleanup();
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('uses the default tab on the first external opening of an initially closed panel', () => {
    const { result, rerender, initialProps } = renderSidebarState({
      isOpen: false,
      defaultActiveTabId: 'books',
    });

    rerender({ ...initialProps, isOpen: true });

    expect(result.current.selectedTab).toBe('books');
    expect(result.current.displayedTab?.content).toBe('Books content');
  });

  it('preserves initial closed-panel reset notifications for legacy consumers', () => {
    const onActiveTabChange = vi.fn();
    const { result } = renderSidebarState({
      isOpen: false,
      defaultActiveTabId: 'books',
      onActiveTabChange,
    });
    expect(result.current.selectedTab).toBeNull();
    expect(onActiveTabChange.mock.calls).toEqual([[null, undefined]]);
    act(() => vi.advanceTimersByTime(300));
    expect(onActiveTabChange.mock.calls).toEqual([
      [null, undefined],
      [null, undefined],
    ]);
  });

  it.each(['missing', 'hidden'])(
    'falls back to the first visible tab when default tab %s is unavailable',
    (defaultActiveTabId) => {
      const { result, rerender, initialProps } = renderSidebarState({
        isOpen: false,
        defaultActiveTabId,
      });
      rerender({ ...initialProps, isOpen: true });

      expect(result.current.selectedTab).toBe('reports');
      expect(result.current.displayedTab?.content).toBe('Reports content');
    },
  );

  it('ignores defaultActiveTabId in controlled mode and waits for the external value', () => {
    const setActiveTab = vi.fn();
    const onActiveTabChange = vi.fn();
    const { result, rerender, initialProps } = renderSidebarState({
      defaultActiveTabId: 'reports',
      activeTabState: ['books', setActiveTab],
      onActiveTabChange,
    });

    expect(result.current.selectedTab).toBe('books');
    act(() => result.current.handleTabChange('reports'));
    expect(setActiveTab).toHaveBeenLastCalledWith('reports');
    expect(onActiveTabChange).toHaveBeenLastCalledWith('reports', tabs[0]);
    expect(result.current.selectedTab).toBe('books');

    rerender({ ...initialProps, activeTabState: ['reports', setActiveTab] });
    expect(result.current.selectedTab).toBe('reports');
    expect(result.current.displayedTab?.content).toBe('Reports content');
  });

  it('ignores the default on external opening with a controlled null value', () => {
    const setActiveTab = vi.fn();
    const { result, rerender, initialProps } = renderSidebarState({
      isOpen: false,
      defaultActiveTabId: 'books',
      activeTabState: [null, setActiveTab],
    });

    rerender({ ...initialProps, isOpen: true });

    expect(result.current.selectedTab).toBe('reports');
    expect(setActiveTab).toHaveBeenLastCalledWith('reports');
  });

  it('selects the clicked tab before opening a closed panel', () => {
    const toggle = vi.fn();
    const onActiveTabChange = vi.fn();
    const { result, rerender, initialProps } = renderSidebarState({
      isOpen: false,
      defaultActiveTabId: 'reports',
      toggle,
      onActiveTabChange,
    });

    act(() => result.current.handleTabChange('books'));
    expect(toggle).toHaveBeenCalledOnce();
    expect(onActiveTabChange).toHaveBeenLastCalledWith('books', tabs[1]);
    rerender({ ...initialProps, isOpen: true });
    expect(result.current.selectedTab).toBe('books');
  });

  it('changes content without toggling an open panel when another tab is clicked', () => {
    const toggle = vi.fn();
    const { result } = renderSidebarState({ toggle });

    act(() => result.current.handleTabChange('books'));

    expect(result.current.selectedTab).toBe('books');
    expect(result.current.displayedTab?.content).toBe('Books content');
    expect(toggle).not.toHaveBeenCalled();
  });

  it.each(['removed', 'hidden'])(
    'selects available content when the active tab is %s',
    (change) => {
      const onActiveTabChange = vi.fn();
      const { result, rerender, initialProps } = renderSidebarState({
        defaultActiveTabId: 'books',
        onActiveTabChange,
      });
      const sidebarTabs =
        change === 'removed'
          ? [tabs[0]]
          : tabs.map((tab) => ({
              ...tab,
              showInSidebar: tab.id === 'books' ? false : tab.showInSidebar,
            }));

      rerender({ ...initialProps, sidebarTabs });

      expect(result.current.selectedTab).toBe('reports');
      expect(result.current.displayedTab?.content).toBe('Reports content');
      expect(onActiveTabChange).toHaveBeenLastCalledWith(
        'reports',
        sidebarTabs[0],
      );
    },
  );

  it('clears the active content when no visible tabs remain', () => {
    const onActiveTabChange = vi.fn();
    const { result, rerender, initialProps } = renderSidebarState({
      onActiveTabChange,
    });

    rerender({ ...initialProps, sidebarTabs: [tabs[2]] });

    expect(result.current.selectedTab).toBeNull();
    expect(result.current.displayedTab).toBeNull();
    expect(onActiveTabChange).toHaveBeenLastCalledWith(null, undefined);
  });

  it('preserves the repeated ID callback and delayed null while retaining closing content', () => {
    const toggle = vi.fn();
    const onActiveTabChange = vi.fn();
    const { result, rerender, initialProps } = renderSidebarState({
      defaultActiveTabId: 'books',
      toggle,
      onActiveTabChange,
    });
    onActiveTabChange.mockClear();

    act(() => result.current.handleTabChange('books'));
    expect(toggle).toHaveBeenCalledOnce();
    expect(onActiveTabChange.mock.calls).toEqual([['books', tabs[1]]]);
    rerender({ ...initialProps, isOpen: false });
    act(() => vi.advanceTimersByTime(299));
    expect(onActiveTabChange).toHaveBeenCalledOnce();
    expect(result.current.displayedTab?.content).toBe('Books content');
    act(() => vi.advanceTimersByTime(1));
    expect(onActiveTabChange.mock.calls).toEqual([
      ['books', tabs[1]],
      [null, undefined],
    ]);
    expect(result.current.selectedTab).toBeNull();
    expect(result.current.displayedTab?.content).toBe('Books content');
    act(() => vi.advanceTimersByTime(199));
    expect(result.current.displayedTab?.content).toBe('Books content');
    act(() => vi.advanceTimersByTime(1));
    expect(result.current.displayedTab).toBeNull();
  });

  it('cancels both closing timers when the panel reopens quickly', () => {
    const onActiveTabChange = vi.fn();
    const { result, rerender, initialProps } = renderSidebarState({
      defaultActiveTabId: 'books',
      onActiveTabChange,
    });

    rerender({ ...initialProps, isOpen: false });
    act(() => vi.advanceTimersByTime(200));
    rerender({ ...initialProps, isOpen: true });
    act(() => vi.advanceTimersByTime(500));

    expect(result.current.selectedTab).toBe('books');
    expect(result.current.displayedTab?.content).toBe('Books content');
    expect(onActiveTabChange).not.toHaveBeenCalledWith(null, undefined);
  });

  it('calls the current callback and controlled setter when the closing timer completes', () => {
    const previousCallback = vi.fn();
    const latestCallback = vi.fn();
    const previousSetter = vi.fn();
    const latestSetter = vi.fn();
    const { rerender, initialProps } = renderSidebarState({
      activeTabState: ['books', previousSetter],
      onActiveTabChange: previousCallback,
    });

    rerender({ ...initialProps, isOpen: false });
    act(() => vi.advanceTimersByTime(100));
    rerender({
      ...initialProps,
      isOpen: false,
      activeTabState: ['books', latestSetter],
      onActiveTabChange: latestCallback,
    });
    act(() => vi.advanceTimersByTime(200));

    expect(previousCallback).not.toHaveBeenCalled();
    expect(previousSetter).not.toHaveBeenCalled();
    expect(latestCallback.mock.calls).toEqual([[null, undefined]]);
    expect(latestSetter.mock.calls).toEqual([[null]]);
  });

  it('does not emit a delayed callback after unmounting', () => {
    const onActiveTabChange = vi.fn();
    const { rerender, unmount, initialProps } = renderSidebarState({
      defaultActiveTabId: 'books',
      onActiveTabChange,
    });

    rerender({ ...initialProps, isOpen: false });
    unmount();
    act(() => vi.advanceTimersByTime(500));

    expect(onActiveTabChange).not.toHaveBeenCalled();
  });
});
