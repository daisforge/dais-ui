import {
  buildCanvasTree,
  CanvasRenderResult,
  CellCanvasRoot,
  createCanvasCell,
} from './lib/canvas';
import {
  CellContent,
  CellInfo,
  GlideThemeForRender,
  ObjectForExtending,
} from './types';
import { createEmptyCellGlide, createTextCellGlide } from './utils/createCell';
import {
  isCanvasEl,
  isGlideGridCellObj,
  isPrimitive,
  isValueEmpty,
} from './utils/typeGuards';

type CanvasCacheKey = string | number | boolean | null;

interface CanvasCellCacheEntry {
  cacheKey: CanvasCacheKey;
  canvasRoot: CellCanvasRoot;
}

export const glideCellRenderer = <R extends ObjectForExtending, SR>({
  jsxElement,
  canvasCellCache,
  cellInfo,
  options,
}: {
  jsxElement: CellContent;
  cellInfo: CellInfo<R, SR>;
  canvasCellCache: WeakMap<
    ObjectForExtending,
    Map<string, CanvasCellCacheEntry>
  >;
  options: {
    span?: readonly [number, number] | undefined;
    data: string | undefined;
    getPortalEventTarget?: () => EventTarget | null;
    refTable?: unknown;
  };
}) => {
  let canvasBounds: DOMRect | null = null;

  if (isGlideGridCellObj(jsxElement)) {
    return { ...jsxElement, ...options } as typeof jsxElement;
  }

  if (isPrimitive(jsxElement)) {
    if (isValueEmpty(jsxElement)) {
      return createEmptyCellGlide(options);
    }
    return createTextCellGlide(String(jsxElement), options);
  }
  if (!isCanvasEl(jsxElement)) {
    const txt = 'передан НЕ CanvasEl';
    return createTextCellGlide(txt, {
      ...options,
      data: txt,
    });
  }
  const { colInd, rowInd, row, column } = cellInfo;
  const { id } = column;
  const getPortalEventTarget = options.getPortalEventTarget;

  let cellCanvasRoot: CellCanvasRoot | null = null;
  const cellPortalOriginId = `cell-${colInd}-${rowInd}`;

  const render = (
    ctx: CanvasRenderingContext2D,
    rect: { x: number; y: number; width: number; height: number },
    theme: GlideThemeForRender,
    _hoverX: number | undefined,
    _hoverY: number | undefined,
    renderArgs?: {
      canvasRoot?: CellCanvasRoot;
      frameTime?: number;
      requestAnimationFrame?: () => void;
    }
  ): CanvasRenderResult => {
    const cacheKeyValue = undefined;
    const isCacheable = cacheKeyValue !== undefined && cacheKeyValue !== null;
    const columnCacheId = id;
    let rowCache: Map<string, CanvasCellCacheEntry> | undefined;
    let cachedEntry: CanvasCellCacheEntry | undefined;

    if (isCacheable) {
      rowCache = canvasCellCache.get(row);
      if (!rowCache) {
        rowCache = new Map();
        canvasCellCache.set(row, rowCache);
      }
      const existing = rowCache.get(columnCacheId);
      if (existing && existing.cacheKey === cacheKeyValue) {
        cachedEntry = existing;
      }
    }

    let canvasRootInstance: CellCanvasRoot | null =
      cachedEntry?.canvasRoot ??
      (renderArgs?.canvasRoot instanceof CellCanvasRoot
        ? renderArgs.canvasRoot
        : cellCanvasRoot);

    let rebuilt = false;

    if (!cachedEntry) {
      if (!jsxElement) {
        if (isCacheable && rowCache) {
          rowCache.delete(columnCacheId);
        }

        return {};
      }

      const node = buildCanvasTree({
        element: jsxElement,
        idPrefix: `cell-${colInd}-${rowInd}-${id}`,
        theme,
      });

      if (!canvasRootInstance) {
        canvasRootInstance = new CellCanvasRoot(node, cellPortalOriginId);
      } else {
        canvasRootInstance.setRootNode(node);
        canvasRootInstance.setOriginId(cellPortalOriginId);
      }

      if (isCacheable && rowCache && canvasRootInstance) {
        const entry: CanvasCellCacheEntry = {
          cacheKey: cacheKeyValue as CanvasCacheKey,
          canvasRoot: canvasRootInstance,
        };
        rowCache.set(columnCacheId, entry);
        cachedEntry = entry;
      } else {
        cellCanvasRoot = canvasRootInstance;
      }
      rebuilt = true;
    } else {
      canvasRootInstance = cachedEntry.canvasRoot;
    }

    if (!canvasRootInstance) {
      return {};
    }

    const hoverPos =
      _hoverX !== undefined && _hoverY !== undefined
        ? { x: _hoverX, y: _hoverY }
        : undefined;
    canvasRootInstance.rootNode.style = {
      width: rect.width,
      height: rect.height,
    };

    if (!canvasBounds) {
      canvasBounds = ctx.canvas.getBoundingClientRect();
    }

    const absoluteBounds = {
      x: canvasBounds.left + rect.x,
      y: canvasBounds.top + rect.y,
      width: rect.width,
      height: rect.height,
    };
    canvasRootInstance.setPortalEventTarget(getPortalEventTarget?.() ?? null);

    // Устанавливаем контекст для тултипа (аналогично контекстному меню)
    canvasRootInstance.setTooltipContext({
      column: cellInfo.column,
      row: cellInfo.row,
      ctxs: cellInfo.ctxs,
      refTable: options.refTable,
    });

    canvasRootInstance.render(ctx, rect, hoverPos, absoluteBounds, {
      frameTime: renderArgs?.frameTime,
      requestAnimationFrame: renderArgs?.requestAnimationFrame,
    });

    if (!isCacheable || rebuilt) {
      cellCanvasRoot = canvasRootInstance;
    }

    return {
      canvasRoot: canvasRootInstance,
    };
  };
  const { data: _data, ...restOptions } = options;
  const copyData = column.copyData
    ? typeof column.copyData === 'function'
      ? column.copyData(row)
      : column.copyData
    : _data;

  return createCanvasCell(render, undefined, copyData, restOptions);
};
