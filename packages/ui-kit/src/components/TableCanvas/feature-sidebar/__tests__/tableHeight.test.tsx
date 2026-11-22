import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { FULL_SCREEN } from '../../feature-full-screen/constants';
import { getTableHeightStyles } from '../../styles';
import { useInlineStyle } from '../../table-hooks/useInlineStyle';

vi.mock('../../table-hooks/useRecalculateColumnsWidth', () => ({
  useRecalculateColumnsWidth: () => ({ widthOfTable: null }),
}));

type HookProps = Parameters<typeof useInlineStyle>[0];
type HeightProps = {
  height: string | number | undefined;
  maxHeight: string | number | undefined;
  control: boolean;
  controlHeight: number;
  filters: boolean;
  fullscreen: boolean;
  pagination: boolean;
  paginationHeight: number;
  paginationSize: 's' | 'xs' | undefined;
  searchBelow: boolean;
  collapsed: boolean;
  placement: 'inside' | 'above';
  minimum: number;
};

function workspace(overrides: Partial<HeightProps> = {}) {
  const props: HeightProps = {
    height: 620,
    maxHeight: undefined,
    control: true,
    controlHeight: 40,
    filters: false,
    fullscreen: false,
    pagination: true,
    paginationHeight: 56,
    paginationSize: undefined,
    searchBelow: false,
    collapsed: false,
    placement: 'inside',
    minimum: 0,
    ...overrides,
  };
  return getTableHeightStyles(
    props.height,
    props.maxHeight,
    props.control,
    props.filters,
    props.fullscreen,
    props.pagination,
    props.paginationHeight,
    props.paginationSize,
    props.searchBelow,
    props.collapsed,
    props.placement,
    props.controlHeight,
    props.minimum,
  );
}

function hookProps(overrides: Partial<HookProps> = {}): HookProps {
  return {
    tableConfig: { containerStyle: { height: 620 } },
    reorderedColumns: [],
    filtersAreVisible: false,
    style: undefined,
    controlBlockIsHave: true,
    fullScreened: false,
    paginationActiveInConfig: true,
    paginationCustomSize: undefined,
    paginationHeight: 56,
    isSearchingBellow: false,
    tableCollapsingValue: {
      enableCollapse: true,
      isCollapsed: false,
      toggleCollapse: vi.fn(),
      collapseText: 'Свернуть',
      expandText: 'Развернуть',
    },
    hasBottomSheet: true,
    ...overrides,
  };
}

afterEach(cleanup);

describe('table workspace height budget', () => {
  it('reserves 96px and applies a numeric maximum independently', () => {
    expect(workspace({ maxHeight: 500 })).toEqual({
      height: 'max(0px, calc(620px - 96px))',
      maxHeight: 'max(0px, calc(500px - 96px))',
    });
  });

  it('releases measured pagination height when pagination is disabled', () => {
    expect(workspace({ pagination: false }).height).toBe(
      'max(0px, calc(620px - 40px))',
    );
  });

  it.each([
    ['s', 88],
    ['xs', 80],
  ] as const)(
    'uses the %s pagination fallback before measurement',
    (size, reserved) => {
      expect(
        workspace({ paginationHeight: 0, paginationSize: size }).height,
      ).toBe(`max(0px, calc(620px - ${reserved}px))`);
      expect(
        workspace({ paginationHeight: 56, paginationSize: size }).height,
      ).toBe('max(0px, calc(620px - 96px))');
    },
  );

  it('reserves xs control, above header, filters and xs pagination', () => {
    expect(
      workspace({
        controlHeight: 32,
        placement: 'above',
        filters: true,
        paginationHeight: 40,
      }).height,
    ).toBe('max(0px, calc(620px - 137px))');
  });

  it('does not reserve a hidden control block or its search row', () => {
    expect(
      workspace({ control: false, searchBelow: true, pagination: false })
        .height,
    ).toBe('max(0px, calc(620px - 0px))');
    expect(workspace({ searchBelow: true, pagination: false }).height).toBe(
      'max(0px, calc(620px - 80px))',
    );
  });

  it('preserves the legacy 316px minimum independently of the bottom slot minimum', () => {
    expect(workspace({ height: 350, minimum: 316 }).height).toBe(
      'max(316px, calc(350px - 96px))',
    );
    expect(workspace({ height: 350 }).height).toBe(
      'max(0px, calc(350px - 96px))',
    );
  });

  it('uses viewport minus fullscreen margins and padding before reserving blocks', () => {
    expect(workspace({ fullscreen: true, maxHeight: 500 })).toEqual({
      height: 'max(0px, calc(calc(100dvh - 48px) - 96px))',
      maxHeight: 'max(0px, calc(calc(100dvh - 48px) - 96px))',
    });
  });

  it('collapses the workspace before fullscreen and header calculations', () => {
    expect(
      workspace({ fullscreen: true, collapsed: true, placement: 'above' }),
    ).toEqual({ height: '0px', maxHeight: '0px' });
  });
});

describe('inline container and workspace heights', () => {
  it.each(['80%', 'calc(100% - 100px)'])(
    'applies %s once on the outer container',
    (height) => {
      const props = hookProps({ tableConfig: { containerStyle: { height } } });
      const { result } = renderHook(() => useInlineStyle(props));
      expect(result.current.containerStyleResult).toEqual({ height });
      expect(result.current.tableAndSidebarContainerHeightStyle).toEqual({
        height: 'max(0px, calc(100% - 96px))',
        maxHeight: 'max(0px, calc(100% - 96px))',
      });
    },
  );

  it('caps a numeric height against the resolved outer percentage maximum', () => {
    const props = hookProps({
      tableConfig: { containerStyle: { height: 620, maxHeight: '50%' } },
    });
    const { result } = renderHook(() => useInlineStyle(props));
    expect(result.current.containerStyleResult).toEqual({
      height: 620,
      maxHeight: '50%',
    });
    expect(result.current.tableAndSidebarContainerHeightStyle).toEqual({
      height: 'max(0px, calc(620px - 96px))',
      maxHeight: 'max(0px, calc(100% - 96px))',
    });
  });

  it.each([
    [true, 350, 0],
    [false, 412, 316],
  ] as const)(
    'preserves natural height under a percentage-only maximum with bottom slot %s',
    (hasBottomSheet, outer, minimum) => {
      const props = hookProps({
        tableConfig: { containerStyle: { maxHeight: '80%' } },
        hasBottomSheet,
      });
      const { result } = renderHook(() => useInlineStyle(props));
      expect(result.current.containerStyleResult).toEqual({
        height: outer,
        maxHeight: '80%',
      });
      expect(result.current.tableAndSidebarContainerHeightStyle).toEqual({
        height: `max(${minimum}px, calc(350px - 96px))`,
        maxHeight: `max(${minimum}px, calc(100% - 96px))`,
      });
    },
  );

  it('leaves numeric-only maximum height on the existing auto container', () => {
    const props = hookProps({
      tableConfig: { containerStyle: { maxHeight: 500 } },
    });
    const { result } = renderHook(() => useInlineStyle(props));
    expect(result.current.containerStyleResult).toEqual({ maxHeight: 500 });
    expect(result.current.tableAndSidebarContainerHeightStyle).toEqual({
      height: 'max(0px, calc(350px - 96px))',
      maxHeight: 'max(0px, calc(500px - 96px))',
    });
  });

  it('updates workspace height when pagination, control size and visible headers change', () => {
    const props = hookProps();
    const { result, rerender } = renderHook(
      (current) => useInlineStyle(current),
      {
        initialProps: props,
      },
    );
    expect(result.current.tableAndSidebarContainerHeightStyle.height).toBe(
      'max(0px, calc(620px - 96px))',
    );
    const withoutPagination = { ...props, paginationActiveInConfig: false };
    rerender(withoutPagination);
    expect(result.current.tableAndSidebarContainerHeightStyle.height).toBe(
      'max(0px, calc(620px - 40px))',
    );
    const compact = {
      ...withoutPagination,
      tableConfig: {
        ...props.tableConfig,
        controlBlock: { size: 'xs' as const },
      },
    };
    rerender(compact);
    expect(result.current.tableAndSidebarContainerHeightStyle.height).toBe(
      'max(0px, calc(620px - 32px))',
    );
    rerender({
      ...compact,
      collapseButtonPlacement: 'above',
      filtersAreVisible: true,
    });
    expect(result.current.tableAndSidebarContainerHeightStyle.height).toBe(
      'max(0px, calc(620px - 97px))',
    );
  });

  it('recalculates natural percentage-cap height from the shared visible block budget', () => {
    const props = hookProps({
      tableConfig: {
        containerStyle: { maxHeight: 'calc(100% - 100px)' },
        controlBlock: { size: 'xs' },
      },
      hasBottomSheet: false,
      collapseButtonPlacement: 'above',
      filtersAreVisible: true,
    });
    const { result, rerender } = renderHook(
      (current) => useInlineStyle(current),
      {
        initialProps: props,
      },
    );
    expect(result.current.containerStyleResult).toEqual({
      height: 469,
      maxHeight: 'calc(100% - 100px)',
    });
    expect(result.current.tableAndSidebarContainerHeightStyle.height).toBe(
      'max(316px, calc(350px - 153px))',
    );
    rerender({ ...props, paginationActiveInConfig: false });
    expect(result.current.containerStyleResult?.height).toBe(413);
    expect(result.current.tableAndSidebarContainerHeightStyle.height).toBe(
      'max(316px, calc(350px - 97px))',
    );
  });

  it('preserves expanded maximum and custom styles across collapse and expansion', () => {
    const props = hookProps({
      tableConfig: {
        containerStyle: {
          height: 620,
          maxHeight: 500,
          minHeight: 450,
          backgroundColor: 'red',
        },
      },
    });
    const { result, rerender } = renderHook(
      (current) => useInlineStyle(current),
      {
        initialProps: props,
      },
    );
    rerender({
      ...props,
      tableCollapsingValue: {
        ...props.tableCollapsingValue,
        isCollapsed: true,
      },
    });
    expect(result.current.containerStyleResult).toEqual({
      height: 40,
      maxHeight: 500,
      minHeight: 0,
      backgroundColor: 'red',
    });
    expect(result.current.tableAndSidebarContainerHeightStyle).toEqual({
      height: '0px',
      maxHeight: '0px',
    });
    rerender(props);
    expect(result.current.containerStyleResult).toEqual(
      props.tableConfig.containerStyle,
    );
  });

  it('ignores saved collapsed state when collapse is disabled', () => {
    const props = hookProps();
    const { result } = renderHook(() =>
      useInlineStyle({
        ...props,
        tableCollapsingValue: {
          ...props.tableCollapsingValue,
          enableCollapse: false,
          isCollapsed: true,
        },
      }),
    );
    expect(result.current.containerStyleResult?.height).toBe(620);
    expect(result.current.tableAndSidebarContainerHeightStyle.height).toBe(
      'max(0px, calc(620px - 96px))',
    );
  });

  it.each([
    ['m', 'inside', 56],
    ['m', 'above', 96],
    ['xs', 'inside', 48],
    ['xs', 'above', 80],
  ] as const)(
    'keeps fullscreen collapse and expansion unconstrained by min-height for %s / %s',
    (size, placement, height) => {
      const props = hookProps({
        fullScreened: true,
        collapseButtonPlacement: placement,
        tableConfig: { controlBlock: { size } },
      });
      const { result, rerender } = renderHook(
        (current) => useInlineStyle(current),
        {
          initialProps: props,
        },
      );
      expect(result.current.containerStyleResult).toEqual({
        height: FULL_SCREEN.HEIGHT_TABLE_CONTAINER,
        maxHeight: FULL_SCREEN.HEIGHT_TABLE_CONTAINER,
        minHeight: 0,
      });
      rerender({
        ...props,
        tableCollapsingValue: {
          ...props.tableCollapsingValue,
          isCollapsed: true,
        },
      });
      expect(result.current.containerStyleResult).toEqual({
        height,
        maxHeight: FULL_SCREEN.HEIGHT_TABLE_CONTAINER,
        minHeight: 0,
      });
      rerender(props);
      expect(result.current.containerStyleResult?.height).toBe(
        FULL_SCREEN.HEIGHT_TABLE_CONTAINER,
      );
      expect(result.current.containerStyleResult?.minHeight).toBe(0);
    },
  );

  it('retains static fullscreen min-height behavior without collapse', () => {
    const props = hookProps();
    const { result } = renderHook(() =>
      useInlineStyle({
        ...props,
        fullScreened: true,
        tableCollapsingValue: {
          ...props.tableCollapsingValue,
          enableCollapse: false,
        },
      }),
    );
    expect(result.current.containerStyleResult?.height).toBe(
      FULL_SCREEN.HEIGHT_TABLE_CONTAINER,
    );
    expect(result.current.containerStyleResult?.minHeight).toBeUndefined();
  });
});
