import { GridCellKind } from '@glideappsfinal/glide-data-grid';

import {
  buildCellId,
  getCellIndices,
  normalizeHoverPoint,
  resolveClickPoint,
  toRelativePoint,
} from '../helpers';
import { retrieveRenderData, storeRenderData } from '../state';
import type { CanvasCell, CanvasCellData, CanvasRenderArgs } from '../types';
import { CANVAS_CELL_KIND } from '../types';
import type {
  BeginInteractionSessionArgs,
  FindInteractionSessionArgs,
  InteractionSession,
} from '../../interaction/interactionSessionStore';
import {
  handleCanvasRootHover,
  updateHoverStateIfNeeded,
} from './hoverHandlers';
import {
  type CanvasClickDispatchResult,
  performCanvasClick,
} from './performCanvasClick';
import { performCanvasPointerDownIntent } from './performCanvasPointerDownIntent';
import { getRelativePointerPosition } from './pointerUtils';
import type {
  CanvasCellRendererConfig,
  RendererClickArgs,
  RendererDrawArgs,
  RendererSelectArgs,
} from './types';

interface CanvasCellRendererOptions {
  /**
   * Создает или возвращает session для текущего gesture.
   * Renderer не принимает policy-решения сам: он получает уже рассчитанный
   * decision из session и применяет его к своей фазе.
   */
  beginOrGetInteractionSession?: (
    args: BeginInteractionSessionArgs
  ) => InteractionSession;

  /** Забирает click-result, который уже был посчитан в `onCellClicked`. */
  consumeCanvasClickResult?: (
    args: FindInteractionSessionArgs
  ) => CanvasClickDispatchResult | undefined;
}

/**
 * Canvas cell renderer for glide-data-grid.
 *
 * Handles rendering and interaction for custom canvas-based cells:
 * - Custom drawing via render function
 * - Click handling with support for CellCanvasRoot and click areas
 * - Hover state tracking and cursor management
 * - Pointer event dispatching
 */
export function createCanvasCellRenderer(
  options: CanvasCellRendererOptions = {}
): CanvasCellRendererConfig {
  return {
    kind: GridCellKind.Custom,

    isMatch: (cell): cell is CanvasCell =>
      (cell.data as CanvasCellData | undefined)?.kind === CANVAS_CELL_KIND,

    needsHover: true,
    needsHoverPosition: true,

    onSelect: (args: RendererSelectArgs): void => {
      const cell = args.cell as CanvasCell;
      const rect = args.bounds;
      const clickPoint = resolveClickPoint(args);

      if (!clickPoint) {
        return;
      }

      const relativePoint = toRelativePoint(clickPoint, rect);
      const indices = getCellIndices(args);
      const cellId = buildCellId(indices, rect);
      const renderData = retrieveRenderData(cellId, cell);
      const pointerIntent = performCanvasPointerDownIntent({
        renderData,
        relativePoint,
      });
      const location: [number, number] = args.location ?? [
        indices.colIndex,
        indices.rowIndex,
      ];
      const session =
        pointerIntent.interaction && options.beginOrGetInteractionSession
          ? options.beginOrGetInteractionSession({
              cell: location,
              relativePoint,
              interaction: pointerIntent.interaction,
              source: 'pointer',
              ...(args.button !== undefined ? { button: args.button } : {}),
            })
          : undefined;

      // На ранней select-фазе применяем только решение про selection. Запрет
      // editor (`editor: "never"`) не должен автоматически блокировать выбор
      // ячейки: это отдельная поздняя click-фаза.
      if (
        session?.decision.suppressEarlyGridSelect ||
        pointerIntent.suppressEarlyGridSelect
      ) {
        args.preventDefault?.();
      }
    },

    onClick: (args: RendererClickArgs): CanvasCell | undefined => {
      const cell = args.cell as CanvasCell;
      const rect = args.bounds;

      const clickPoint = resolveClickPoint(args);

      if (!clickPoint) {
        return undefined;
      }

      const relativePoint = toRelativePoint(clickPoint, rect);
      const indices = getCellIndices(args);
      const cellId = buildCellId(indices, rect);
      const renderData = retrieveRenderData(cellId, cell);
      const location: [number, number] = args.location ?? [
        indices.colIndex,
        indices.rowIndex,
      ];

      // Один пользовательский клик по canvas-ячейке Glide обрабатывает в два
      // шага: сначала через `onCellClicked`, потом через `renderer.onClick`.
      // Если `onClick` canvas-примитива уже был вызван на первом шаге, здесь
      // нельзя запускать его повторно. Поэтому сначала пробуем взять уже
      // сохраненный результат этого клика, а только если его нет — выполняем
      // обычную обработку.
      const replayClickResult = options.consumeCanvasClickResult?.({
        cell: location,
        relativePoint,
        ...(args.button !== undefined ? { button: args.button } : {}),
      });
      const clickResult =
        replayClickResult ??
        performCanvasClick({
          cell,
          rect,
          relativePoint,
          renderData,
          rowData: args.row ?? args.rowData,
          rowIndex: indices.rowIndex,
          event: args.event,
        });

      if (clickResult.suppressGridDefault) {
        args.preventDefault?.();
      }

      // Return value здесь Glide трактует как отредактированную ячейку.
      // Canvas click уже выполнил side effect, поэтому не возвращаем cell data.
      if (clickResult.handled) {
        return undefined;
      }

      return undefined;
    },

    draw: (args: RendererDrawArgs, cell: CanvasCell): void => {
      const { ctx, rect, theme } = args;
      const { render } = cell.data;
      const themeForRender =
        args.cellFillColor !== undefined
          ? { ...theme, bgCell: args.cellFillColor }
          : theme;

      const indices = getCellIndices(args);
      const cellId = buildCellId(indices, rect);

      const renderArgs: CanvasRenderArgs = {
        hoverX: args.hoverX,
        hoverY: args.hoverY,
        row: args.row,
        rowData: args.rowData,
        event: args.event,
        frameTime: args.frameTime,
        requestAnimationFrame: args.requestAnimationFrame,
      };

      const relativeHover =
        normalizeHoverPoint(args.hoverX, args.hoverY, rect) ??
        getRelativePointerPosition(renderArgs, rect);

      ctx.save();

      const previousRenderData = retrieveRenderData(cellId, cell);
      const renderResult = render(
        ctx,
        rect,
        themeForRender,
        relativeHover?.x,
        relativeHover?.y,
        {
          ...renderArgs,
          canvasRoot: previousRenderData?.canvasRoot,
        }
      );
      const hoveredAreas = renderResult?.hoveredAreas ?? [];

      storeRenderData(cellId, cell, renderResult);

      const canvasRoot =
        renderResult?.canvasRoot ?? previousRenderData?.canvasRoot;
      handleCanvasRootHover(canvasRoot, relativeHover, renderArgs, args);
      updateHoverStateIfNeeded(
        cell.data,
        relativeHover,
        hoveredAreas,
        canvasRoot,
        args
      );

      ctx.restore();
    },

    onPaste: () => undefined,
  };
}

export const canvasCellRenderer: CanvasCellRendererConfig =
  createCanvasCellRenderer();
