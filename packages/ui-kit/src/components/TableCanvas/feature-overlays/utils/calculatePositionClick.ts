import type { CanvasEvent } from '../../TableGlideInstance/type';

export function getFilterAnchor(event: CanvasEvent) {
  const rect = event.target?.rect;
  return {
    position: {
      x: (event.cellBounds?.x ?? 0) + (rect?.x ?? 0),
      y: (event.cellBounds?.y ?? 0) + (rect?.y ?? 0),
    },
    anchorSize: { width: rect?.width ?? 0, height: rect?.height ?? 0 },
  };
}

export function getFilterPlacement(
  iconLeft: number,
  listWidth: number,
  visibleRight: number,
) {
  return iconLeft + listWidth > visibleRight ? 'bottom-end' : 'bottom-start';
}
