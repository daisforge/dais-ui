import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';

import { CellCanvasRoot } from '../cells/CellCanvasRoot';
import { isCanvasCell } from '../cells/factory';
import { buildCellId } from '../cells/helpers';
import { retrieveRenderData } from '../cells/state';
import type {
  CanvasCell,
  CanvasRenderResult,
  RectBounds,
} from '../cells/types';
import type { RelativePoint } from '../cells/renderer/types';
import type { ResolvedCanvasInteractionConfig } from '../core/canvasInteraction';

type MouseArgs = NonNullable<
  ReturnType<DataEditorRef['getMouseArgsForPosition']>
>;
type CellMouseArgs = Extract<MouseArgs, { kind: 'cell' }>;

export interface ResolvedCanvasCellInteractionTarget {
  cell: [number, number];
  mouseArgs?: CellMouseArgs;
  glideCell: CanvasCell;
  rect: RectBounds;
  renderData: CanvasRenderResult | undefined;
  relativePoint: RelativePoint;
  interaction: ResolvedCanvasInteractionConfig;
}

/**
 * Resolve для фаз, где Glide уже дал cell bounds и local coordinates.
 *
 * Используется click/select pipeline-ом: берется сохраненный renderData ячейки,
 * и через canvasRoot ищется ближайшая нода с interaction contract.
 */
export function resolveCanvasCellInteractionTargetFromRenderData({
  cell,
  glideCell,
  rect,
  renderData,
  relativePoint,
  mouseArgs,
}: {
  cell: [number, number];
  glideCell: CanvasCell;
  rect: RectBounds;
  renderData: CanvasRenderResult | undefined;
  relativePoint: RelativePoint;
  mouseArgs?: CellMouseArgs;
}): ResolvedCanvasCellInteractionTarget | undefined {
  // Важный инвариант новой interaction-модели: первый successful resolve
  // фиксирует interaction policy в session. Следующие фазы используют уже
  // сохраненное решение, а не делают новый policy resolve без необходимости.
  // Этот resolver используется, когда Glide уже дал нам cell bounds и
  // localEventX/Y: click/select-фазы не должны заново переводить DOM-координаты.
  const interaction =
    renderData?.canvasRoot instanceof CellCanvasRoot
      ? renderData.canvasRoot.getInteractionAtPoint(
          relativePoint.x,
          relativePoint.y
        )
      : undefined;

  if (!interaction) {
    return undefined;
  }

  return {
    cell,
    glideCell,
    rect,
    renderData,
    relativePoint,
    interaction,
    ...(mouseArgs ? { mouseArgs } : {}),
  };
}

/**
 * Resolve для DOM capture-событий, где нет готового Glide cell event.
 *
 * Используется contextmenu capture listener-ом: сначала просим DataEditorRef
 * перевести clientX/clientY в Glide mouse args, затем переиспользуем обычный
 * resolve по renderData.
 */
export function resolveCanvasCellInteractionTargetFromDomPoint({
  dataEditor,
  getCellContent,
  clientX,
  clientY,
  nativeEvent,
}: {
  dataEditor: DataEditorRef | null;
  getCellContent: (cell: [number, number]) => unknown;
  clientX: number;
  clientY: number;
  nativeEvent?: MouseEvent | TouchEvent;
}): ResolvedCanvasCellInteractionTarget | undefined {
  // Переводим DOM-координаты обратно в Glide mouse args, чтобы capture-layer
  // мог работать на тех же координатах и тех же bounds, что и сам grid engine.
  // Это нужно для contextmenu capture: на DOM-событии нет готового Glide cell,
  // но есть clientX/clientY.
  const mouseArgs = dataEditor?.getMouseArgsForPosition(
    clientX,
    clientY,
    nativeEvent
  );

  if (!mouseArgs || mouseArgs.kind !== 'cell') {
    return undefined;
  }

  const cell = [mouseArgs.location[0], mouseArgs.location[1]] as [
    number,
    number
  ];
  const glideCell = getCellContent(cell);

  if (!isCanvasCell(glideCell)) {
    return undefined;
  }

  const rect = mouseArgs.bounds;
  const cellId = buildCellId({ colIndex: cell[0], rowIndex: cell[1] }, rect);
  // Render data содержит последний CellCanvasRoot и click areas для этой
  // canvas-cell. Без него невозможно понять, какая canvas-нода под курсором.
  const renderData = retrieveRenderData(cellId, glideCell);
  const relativePoint = {
    x: mouseArgs.localEventX,
    y: mouseArgs.localEventY,
  };

  return resolveCanvasCellInteractionTargetFromRenderData({
    cell,
    mouseArgs,
    glideCell,
    rect,
    renderData,
    relativePoint,
  });
}

export const resolveCanvasCellInteractionTarget =
  resolveCanvasCellInteractionTargetFromDomPoint;
