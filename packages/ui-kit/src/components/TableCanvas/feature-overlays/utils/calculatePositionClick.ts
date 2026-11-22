import { CanvasEvent } from '../../TableGlideInstance/type';

export function calculateFilterPopoverPositionX(event: CanvasEvent): number {
  return (
    (event.cellBounds ? event.cellBounds.x : 0) +
    (event.target &&
    event.target.rect &&
    typeof event.target.rect.x === 'number'
      ? event.target.rect.x
      : 0) +
    (event.target &&
    event.target.rect &&
    typeof event.target.rect.width === 'number'
      ? event.target.rect.width / 2
      : 0)
  );
}

export function calculateFilterPopoverPositionY(event: CanvasEvent): number {
  return (
    (event.cellBounds?.y ?? 0) +
    (event.target?.rect?.y ?? 0) +
    (event.target?.rect?.height ?? 0)
  );
}
