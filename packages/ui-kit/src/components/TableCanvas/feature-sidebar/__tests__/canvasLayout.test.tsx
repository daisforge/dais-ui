import { cleanup, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { TableContentStateOverlay } from '../../feature-content-state/types';
import { tableClassNames } from '../../styles';
import type { TableGlideInstanceProps } from '../../TableGlideInstance';
import { TableOrCardsUI } from '../../widgets/table-or-card-UI';

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
  // Не создаём grid и не вызываем renderOverlayFeatures: портал должен работать без готовности Glide.
  TableGlideInstance: ({
    containerProps,
    contentStateOverlay,
  }: Pick<
    TableGlideInstanceProps<Record<string, unknown>>,
    'containerProps' | 'contentStateOverlay'
  >) => (
    <div {...containerProps} data-testid="canvas-container">
      {contentStateOverlay?.kind ?? 'normal'}
    </div>
  ),
}));

vi.mock('../../widgets/mass-actions', () => ({
  MassActions: ({ forceShow }: { forceShow: boolean }) => (
    <div data-testid="mass-actions" data-force-show={forceShow} />
  ),
}));

type LayoutProps = Parameters<typeof TableOrCardsUI>[0];

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
    afterEach(cleanup);

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
  afterEach(cleanup);

  it.each(contentStates)(
    'preserves canvas, its external ref and mass actions portal in %s state',
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
