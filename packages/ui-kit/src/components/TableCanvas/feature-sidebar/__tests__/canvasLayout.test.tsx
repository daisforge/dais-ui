import { cleanup, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import { createPortal } from 'react-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { TableContentStateOverlay } from '../../feature-content-state/types';
import { tableClassNames } from '../../styles';
import type { TableGlideInstanceProps } from '../../TableGlideInstance';
import { TableOrCardsUI } from '../../widgets/table-or-card-UI';

vi.mock('react-dom', async (importOriginal) => {
  const original = await importOriginal<typeof import('react-dom')>();
  return { ...original, createPortal: vi.fn(original.createPortal) };
});

vi.mock('../../contexts', async (importOriginal) => ({
  ...(await importOriginal<typeof import('../../contexts')>()),
  useContextMenu: () => ({
    enableHeaderContextMenu: false,
    enableCellContextMenu: false,
  }),
  useTableCollapse: () => ({
    enableCollapse: false,
    isCollapsed: false,
  }),
}));

vi.mock('../../TableGlideInstance', async (importOriginal) => ({
  ...(await importOriginal<typeof import('../../TableGlideInstance')>()),
  // Не создаём grid и не вызываем renderOverlayFeatures: slot должен работать без готовности Glide.
  TableGlideInstance: ({
    containerProps,
    contentStateOverlay,
    containerSlot,
  }: Pick<
    TableGlideInstanceProps<Record<string, unknown>>,
    'containerProps' | 'contentStateOverlay' | 'containerSlot'
  >) => (
    <div {...containerProps} data-testid="canvas-container">
      {contentStateOverlay?.kind ?? 'normal'}
      {containerSlot}
    </div>
  ),
}));

vi.mock('../../widgets/mass-actions', () => ({
  MassActions: ({ forceShow }: { forceShow: boolean }) => (
    <div data-testid="mass-actions" data-force-show={forceShow} />
  ),
}));

type LayoutProps = Parameters<typeof TableOrCardsUI>[0];

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const contentStates: [string, TableContentStateOverlay | undefined][] = [
  ['normal', undefined],
  ['error', { kind: 'error', displayMode: 'full-content' }],
  ['empty', { kind: 'empty', displayMode: 'full-content' }],
];

const bottomSheetConfig = {
  content: <div data-testid="bottom-sheet-content">Log</div>,
};

const createLayoutProps = (
  canvasRef: React.Ref<HTMLDivElement>,
  contentStateOverlay?: TableContentStateOverlay,
  bottomSheet?: LayoutProps['containerProps']['bottomSheetConfig'],
): LayoutProps => ({
  containerProps: {
    viewProp: { activeView: 'rows', view: { type: 'rows' } },
    controlBlock: null,
    rightSidebarBlock: null,
    containerId: undefined,
    refTableGlobalContainer: createRef<HTMLDivElement>(),
    refTableContainer: canvasRef,
    $borderLeftTopRadiusRounded: false,
    $borderRightTopRadiusRounded: false,
    $borderLeftBottomRadiusRounded: false,
    $borderRightBottomRadiusRounded: false,
    $columnsGroupingIsActive: false,
    $containerStyle: undefined,
    $containerCss: undefined,
    $css: undefined,
    $fullScreened: false,
    fullScreenPortal: false,
    $tableAndSidebarContainerHeightStyle: {},
    $highlightActiveType: 'disabled',
    $borderTopRounded: false,
    isHaveSomeFeatureInSidebar: false,
    bottomSheetConfig: bottomSheet,
  },
  dataGridProps: {
    rows: [],
    columns: [],
    rowSize: 'big',
    refTable: undefined,
    CellReadOnlyEditor: () => null,
    contentStateOverlay,
  },
  pagination: undefined,
  setPaginationHeight: vi.fn(),
  massActionPanel: { buttons: [], show: true },
});

describe.each([false, true])(
  'canvas layout with bottom sheet: %s',
  (withBottomSheet) => {
    it.each(contentStates)(
      'keeps forced mass actions inside the canvas in %s state',
      (_, contentStateOverlay) => {
        const canvasRef = createRef<HTMLDivElement>();
        const props = createLayoutProps(
          canvasRef,
          contentStateOverlay,
          withBottomSheet ? bottomSheetConfig : undefined,
        );
        const { container, unmount } = render(<TableOrCardsUI {...props} />);
        const canvas = screen.getByTestId('canvas-container');
        const massActions = screen.getByTestId('mass-actions');

        expect(canvasRef.current).toBe(canvas);
        expect(massActions.parentElement).toBe(canvas);
        expect(createPortal).not.toHaveBeenCalled();
        expect(massActions.getAttribute('data-force-show')).toBe('true');
        expect(
          container.querySelectorAll(`.${tableClassNames.tableCenterColumn}`),
        ).toHaveLength(1);
        if (withBottomSheet) {
          const bottomSheet = screen.getByTestId(
            'bottom-sheet-content',
          ).parentElement;
          expect(bottomSheet?.contains(massActions)).toBe(false);
          expect(bottomSheet?.parentElement).toBe(canvas.parentElement);
        }

        unmount();
        expect(canvasRef.current).toBeNull();
      },
    );
  },
);

describe('bottom sheet configuration changes', () => {
  it.each(contentStates)(
    'preserves canvas, its external ref and mass actions slot in %s state',
    (_, contentStateOverlay) => {
      const canvasRef = vi.fn((_node: HTMLDivElement | null) => undefined);
      const props = createLayoutProps(canvasRef, contentStateOverlay);
      const { container, rerender, unmount } = render(
        <TableOrCardsUI {...props} />,
      );
      const canvas = screen.getByTestId('canvas-container');
      const massActions = screen.getByTestId('mass-actions');
      const column = container.querySelector(
        `.${tableClassNames.tableCenterColumn}`,
      );
      expect(column).not.toBeNull();
      expect(canvasRef.mock.calls).toEqual([[canvas]]);

      [bottomSheetConfig, undefined].forEach((config) => {
        rerender(
          <TableOrCardsUI
            {...props}
            containerProps={{
              ...props.containerProps,
              bottomSheetConfig: config,
            }}
          />,
        );

        expect(screen.getByTestId('canvas-container')).toBe(canvas);
        expect(screen.getByTestId('mass-actions')).toBe(massActions);
        expect(massActions.parentElement).toBe(canvas);
        expect(canvasRef.mock.calls).toEqual([[canvas]]);
        expect(
          container.querySelector(`.${tableClassNames.tableCenterColumn}`),
        ).toBe(column);
        expect(
          container.querySelectorAll(`.${tableClassNames.tableCenterColumn}`),
        ).toHaveLength(1);
        if (config) {
          const bottomSheet = screen.getByTestId(
            'bottom-sheet-content',
          ).parentElement;
          expect(bottomSheet?.parentElement).toBe(column);
          expect(bottomSheet?.contains(massActions)).toBe(false);
        } else {
          expect(screen.queryByTestId('bottom-sheet-content')).toBeNull();
        }
      });

      unmount();
      expect(canvasRef.mock.calls).toEqual([[canvas], [null]]);
    },
  );
});

describe('mass actions slot visibility and fullscreen', () => {
  it.each(['cards', 'loading', 'hidden'] as const)(
    'does not render mass actions in %s mode',
    (mode) => {
      const props = createLayoutProps(createRef<HTMLDivElement>());
      if (mode === 'cards') {
        props.containerProps.viewProp = {
          activeView: 'cards',
          view: { type: 'cards', typeCardsRender: 'Cards' },
        };
      } else if (mode === 'loading') {
        props.loadingOverlayConfig = { active: true };
      } else {
        props.massActionPanel = { buttons: [], show: false };
      }

      render(<TableOrCardsUI {...props} />);

      expect(screen.queryByTestId('mass-actions')).toBeNull();
      expect(createPortal).not.toHaveBeenCalled();
    },
  );

  it('keeps only the fullscreen layout portal and renders mass actions inside its canvas', () => {
    const canvasRef = createRef<HTMLDivElement>();
    const props = createLayoutProps(canvasRef, undefined, bottomSheetConfig);
    const fullScreenPortal = document.createElement('div');
    document.body.append(fullScreenPortal);
    props.containerProps.$fullScreened = true;
    props.containerProps.fullScreenPortal = fullScreenPortal;

    try {
      render(<TableOrCardsUI {...props} />);
      const canvas = screen.getByTestId('canvas-container');
      const massActions = screen.getByTestId('mass-actions');

      expect(canvasRef.current).toBe(canvas);
      expect(massActions.parentElement).toBe(canvas);
      expect(fullScreenPortal.contains(canvas)).toBe(true);
      expect(createPortal).toHaveBeenCalledTimes(1);
      expect(vi.mocked(createPortal).mock.calls[0]?.[1]).toBe(fullScreenPortal);
    } finally {
      fullScreenPortal.remove();
    }
  });
});
