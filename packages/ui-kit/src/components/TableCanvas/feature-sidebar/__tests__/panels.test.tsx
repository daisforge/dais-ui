import { act, cleanup, renderHook } from '@testing-library/react';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from 'vitest';

import { TABLE_BUBBLES } from '../../constants';
import type { useRightSidebar, useSidebar } from '../../contexts';
import { getTableHeightStyles } from '../../styles/styles';
import { useLeftSidebarState } from '../../table-hooks/useLeftSidebarValues';
import { usePrepareTableConfig } from '../../table-hooks/usePrepareTableConfig';
import { useSidebarState } from '../../table-hooks/useSidebarValues';
import type {
  LeftSidebarConfig,
  RightSidebarConfig,
  SidebarConfig,
  TableCanvasSidebarConfig,
  TableConfig,
} from '../../types';
import { SIDEBAR_TABS_WIDTH } from '../constants';
import { getCustomSidebarTabs } from '../getCustomSidebarTabs';

type TestTableConfig = TableConfig<
  { id: number },
  unknown,
  number,
  Record<string, unknown>
>;

describe('left sidebar state', () => {
  it('reads dynamic widths and preserves internal open state across config changes', () => {
    const { result, rerender } = renderHook(
      ({ config }) => useLeftSidebarState(config),
      {
        initialProps: {
          config: { defaultOpen: true, width: 280 } as LeftSidebarConfig,
        },
      },
    );
    expect(result.current.isOpen).toBe(true);
    rerender({ config: { width: '25%' } });
    expect(result.current.width).toBe('25%');
    expect(result.current.isOpen).toBe(true);
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(false);
    rerender({ config: { width: 'calc(20% + 40px)' } });
    expect(result.current.width).toBe('calc(20% + 40px)');
    expect(result.current.isOpen).toBe(false);
    rerender({ config: {} });
    expect(result.current.width).toBe(300);
    expect(result.current.isOpen).toBe(false);
  });

  it('uses controlled opening instead of defaultOpen', () => {
    const setter = vi.fn();
    const { result, rerender } = renderHook(
      ({ config }) => useLeftSidebarState(config),
      {
        initialProps: {
          config: {
            defaultOpen: true,
            openState: [false, setter],
          } as LeftSidebarConfig,
        },
      },
    );
    expect(result.current.isOpen).toBe(false);
    act(() => result.current.toggle());
    expect(setter.mock.calls[0]?.[0](false)).toBe(true);
    rerender({ config: { openState: [true, setter] } });
    expect(result.current.isOpen).toBe(true);
  });
});

describe('custom sidebar tabs', () => {
  it('orders custom tabs without repeating ids and defaults showInSidebar to true', () => {
    const tabs = getCustomSidebarTabs({
      customTabsOrder: ['books', 'books', 'missing'],
      customTabs: [
        { id: 'reports', label: 'Reports', icon: null, content: null },
        { id: 'books', label: 'Books', icon: null, content: null },
        {
          id: 'hidden',
          label: 'Hidden',
          icon: null,
          content: null,
          showInSidebar: false,
        },
      ],
    });
    expect(tabs.map((tab) => tab.id)).toEqual(['books', 'reports', 'hidden']);
    expect(tabs.map((tab) => tab.showInSidebar)).toEqual([true, true, false]);
  });
});

describe('right sidebar compatibility', () => {
  it('keeps sidebarConfig and prioritizes rightSidebarConfig', () => {
    const legacy: TableConfig<
      { id: number },
      unknown,
      number,
      Record<string, unknown>
    > = {
      sidebarConfig: { defaultOpen: true },
    };
    expect(
      usePrepareTableConfig({ tableConfigExternal: legacy }).tableConfig,
    ).toBe(legacy);
    const rightSidebarConfig = { enabled: false };
    expect(
      usePrepareTableConfig({
        tableConfigExternal: { ...legacy, rightSidebarConfig },
      }).tableConfig.sidebarConfig,
    ).toBe(rightSidebarConfig);
  });

  it('keeps numeric width in both right hooks and shares custom configuration between sides', () => {
    expectTypeOf<
      ReturnType<typeof useSidebar>['width']
    >().toEqualTypeOf<number>();
    expectTypeOf<
      ReturnType<typeof useRightSidebar>['width']
    >().toEqualTypeOf<number>();
    expectTypeOf<
      Parameters<ReturnType<typeof useSidebar>['setWidth']>[0]
    >().toEqualTypeOf<number>();
    expectTypeOf<LeftSidebarConfig>().toEqualTypeOf<TableCanvasSidebarConfig>();
    expectTypeOf<RightSidebarConfig>().toEqualTypeOf<SidebarConfig>();

    const shared: TableCanvasSidebarConfig = {
      defaultOpen: true,
      width: '35%',
      customTabs: [
        { id: 'reports', label: 'Reports', icon: null, content: 'Reports' },
      ],
      customTabsOrder: ['reports'],
    };
    const left: LeftSidebarConfig = shared;
    const right: RightSidebarConfig = shared;
    expect(left).toBe(right);
  });

  it.each(['sidebarConfig', 'rightSidebarConfig'] as const)(
    'keeps the legacy 400px width and state through %s',
    (configName) => {
      const { result, rerender } = renderHook(
        ({ config }: { config: TestTableConfig }) =>
          useSidebarState({
            tableConfig: usePrepareTableConfig({ tableConfigExternal: config })
              .tableConfig,
          }),
        { initialProps: { config: { [configName]: { defaultOpen: true } } } },
      );

      expect(result.current.width).toBe(400);
      expect(result.current.effectiveWidth).toBe(400);
      expect(result.current.isOpen).toBe(true);
      act(() => result.current.setWidth(520));
      expect(result.current.width).toBe(520);
      expect(result.current.effectiveWidth).toBe(520);

      rerender({ config: { [configName]: { width: '35%' } } });
      expect(result.current.width).toBe(520);
      expect(result.current.effectiveWidth).toBe('35%');
      expect(result.current.isOpen).toBe(true);
      act(() => result.current.setWidth(600));
      expect(result.current.width).toBe(600);
      expect(result.current.effectiveWidth).toBe('35%');
      rerender({ config: { [configName]: { width: 'calc(20% + 40px)' } } });
      expect(result.current.effectiveWidth).toBe('calc(20% + 40px)');
      rerender({ config: {} });
      expect(result.current.effectiveWidth).toBe(600);
      expect(result.current.isOpen).toBe(true);
    },
  );

  it('keeps the numeric default without a config and the legacy tab strip size', () => {
    const { result } = renderHook(() => useSidebarState({ tableConfig: {} }));
    expect(result.current.width).toBe(400);
    expect(result.current.effectiveWidth).toBe(400);
    expect(SIDEBAR_TABS_WIDTH).toBe(44);
  });

  it('uses controlled opening and functional toggles for the legacy config', () => {
    const setter = vi.fn();
    const { result, rerender } = renderHook(
      ({ config }: { config: TestTableConfig }) =>
        useSidebarState({ tableConfig: config }),
      {
        initialProps: {
          config: {
            sidebarConfig: { defaultOpen: true, openState: [false, setter] },
          },
        },
      },
    );

    expect(result.current.isOpen).toBe(false);
    act(() => result.current.toggle());
    expect(setter.mock.calls[0]?.[0](false)).toBe(true);
    rerender({ config: { sidebarConfig: { openState: [true, setter] } } });
    expect(result.current.isOpen).toBe(true);
  });
});

const useRightPanelState = (
  config?: TableCanvasSidebarConfig,
  refTableContainer?: React.RefObject<HTMLElement>,
) =>
  useSidebarState({
    tableConfig: { sidebarConfig: config },
    refTableContainer,
  });

describe.each([
  { side: 'left', usePanelState: useLeftSidebarState },
  { side: 'right', usePanelState: useRightPanelState },
])('$side sidebar resize notifications', ({ usePanelState }) => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    cleanup();
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('notifies canvas after external opening and prop width changes', () => {
    const container = document.createElement('div');
    const refTableContainer = { current: container };
    const recalculateWidth = vi.fn();
    container.addEventListener(
      TABLE_BUBBLES.recalculateWidth,
      recalculateWidth,
    );
    const setter = vi.fn();
    const { rerender } = renderHook(
      ({ config }: { config: TableCanvasSidebarConfig }) =>
        usePanelState(config, refTableContainer),
      { initialProps: { config: { openState: [false, setter], width: 300 } } },
    );

    act(() => vi.advanceTimersByTime(600));
    expect(recalculateWidth).not.toHaveBeenCalled();
    rerender({ config: { openState: [true, setter], width: 300 } });
    act(() => vi.advanceTimersByTime(600));
    expect(recalculateWidth).toHaveBeenCalledOnce();
    rerender({ config: { openState: [true, setter], width: '35%' } });
    act(() => vi.advanceTimersByTime(600));
    expect(recalculateWidth).toHaveBeenCalledTimes(2);
  });

  it('cancels a pending resize notification on unmount', () => {
    const container = document.createElement('div');
    const refTableContainer = { current: container };
    const recalculateWidth = vi.fn();
    container.addEventListener(
      TABLE_BUBBLES.recalculateWidth,
      recalculateWidth,
    );
    const { rerender, unmount } = renderHook(
      ({ config }: { config: TableCanvasSidebarConfig }) =>
        usePanelState(config, refTableContainer),
      { initialProps: { config: { width: 300 } } },
    );

    rerender({ config: { width: '35%' } });
    unmount();
    act(() => vi.advanceTimersByTime(600));
    expect(recalculateWidth).not.toHaveBeenCalled();
  });
});

describe('panel workspace height', () => {
  const height = ({
    collapsed = false,
    fullscreen = false,
    minimum = 0,
    maxHeight = undefined as number | undefined,
    placement = 'inside' as 'inside' | 'above',
  } = {}) =>
    getTableHeightStyles(
      350,
      maxHeight,
      true,
      false,
      fullscreen,
      true,
      56,
      undefined,
      false,
      collapsed,
      placement,
      40,
      minimum,
    );

  it('reserves pagination and control block without enforcing the legacy 316px minimum', () => {
    expect(height().height).toBe('max(0px, calc(350px - 96px))');
    expect(height({ minimum: 316 }).height).toBe(
      'max(316px, calc(350px - 96px))',
    );
  });

  it('collapses the entire workspace even in fullscreen and with an above header', () => {
    expect(
      height({ collapsed: true, fullscreen: true, placement: 'above' }),
    ).toEqual({ height: '0px', maxHeight: '0px' });
  });

  it('calculates maxHeight independently and reserves an above header', () => {
    expect(height({ maxHeight: 700, placement: 'above' })).toEqual({
      height: 'max(0px, calc(350px - 136px))',
      maxHeight: 'max(0px, calc(700px - 136px))',
    });
  });
});
