import { BaseGridCell, GridCellKind } from '@glideappsfinal/glide-data-grid';

import { GlideThemeForRender } from '../../../theming/types';
import type {
  CanvasCell,
  CanvasCellData,
  CanvasRenderArgs,
  CanvasRenderResult,
  RectBounds,
} from './types';
import { CANVAS_CELL_KIND } from './types';

export function createCanvasCell(
  render: (
    ctx: CanvasRenderingContext2D,
    rect: RectBounds,
    theme: GlideThemeForRender,
    hoverX: number | undefined,
    hoverY: number | undefined,
    args?: CanvasRenderArgs
  ) => CanvasRenderResult,
  onClick?: (
    x: number,
    y: number,
    rect: RectBounds,
    row?: Record<string, unknown>,
    rowIndex?: number,
    renderData?: CanvasRenderResult
  ) => boolean,
  copyData?: string,
  options?: Omit<BaseGridCell, 'allowOverlay'> & { allowOverlay?: boolean }
): CanvasCell {
  return {
    kind: GridCellKind.Custom,
    allowOverlay: false,
    readonly: true,
    copyData: copyData ?? '',
    data: {
      kind: CANVAS_CELL_KIND,
      render: render as CanvasCellData['render'],
      onClick: onClick as CanvasCellData['onClick'],
    },
    ...options,
  };
}

export function isCanvasCell(cell: unknown): cell is CanvasCell {
  const c = cell as CanvasCell | null | undefined;
  return Boolean(
    c &&
      c.kind === GridCellKind.Custom &&
      (c.data as CanvasCellData)?.kind === CANVAS_CELL_KIND
  );
}
