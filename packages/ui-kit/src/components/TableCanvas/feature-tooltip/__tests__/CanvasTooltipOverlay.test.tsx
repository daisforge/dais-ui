import { act, cleanup, render } from '@testing-library/react';
import React, { useRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { dispatchCanvasPortalHover } from '../../../TableGlide/lib/canvas';
import { CANVAS_OVERLAY_CONTENT_KIND } from '../../feature-overlays/canvas/core/types';
import {
  type TablePopoverContextValue,
  TablePopoverProvider,
  useTablePopover,
} from '../../feature-overlays/context';
import { useTablePopoverState } from '../../feature-overlays/hooks/useTablePopoverState';
import { CanvasTooltipOverlay } from '../components/CanvasTooltipOverlay';

vi.mock('@ui-kit/components/Tooltip', () => ({
  Tooltip: ({ opened, text }: { opened: boolean; text: string }) =>
    opened ? <span>{text}</span> : null,
}));

let api: TablePopoverContextValue | null = null;

const ApiProbe = () => {
  api = useTablePopover();
  return null;
};

const Table = () => {
  const value = useTablePopoverState();
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <TablePopoverProvider value={value}>
      <div ref={containerRef} data-testid="table">
        <CanvasTooltipOverlay containerRef={containerRef} mouseEnterDelay={0} />
        <ApiProbe />
      </div>
    </TablePopoverProvider>
  );
};

const hover = (container: HTMLElement) =>
  act(() => {
    dispatchCanvasPortalHover(
      {
        visible: true,
        x: 10,
        y: 10,
        width: 20,
        height: 20,
        nodeId: 'icon',
        originId: 'icon',
        source: 'cell',
        tooltipFromNode: 'подсказка',
        priority: 1,
      },
      container,
    );
  });

const openCustom = (contentData: unknown) =>
  act(() => {
    api?.open({ position: { x: 0, y: 0 }, contentType: 'custom', contentData });
  });

describe('CanvasTooltipOverlay: подсказка и окна на canvas', () => {
  afterEach(() => {
    cleanup();
    api = null;
  });

  it('прячется, пока открыт Popover или Dropdown на canvas, и возвращается после закрытия', () => {
    const { getByTestId, queryByText } = render(<Table />);
    hover(getByTestId('table'));
    expect(queryByText('подсказка')).not.toBeNull();

    openCustom({
      kind: CANVAS_OVERLAY_CONTENT_KIND,
      overlay: { kind: 'popover', config: {} },
    });
    expect(queryByText('подсказка')).toBeNull();

    act(() => {
      api?.close();
    });
    expect(queryByText('подсказка')).not.toBeNull();
  });

  it('другое окно с contentType custom подсказку не прячет', () => {
    const { getByTestId, queryByText } = render(<Table />);
    hover(getByTestId('table'));

    openCustom({ kind: 'other' });
    expect(queryByText('подсказка')).not.toBeNull();
  });
});
