export interface PopoverRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Точка внутри прямоугольника, расширенного на `expand` px со всех сторон. */
export function isPointInRect(
  x: number,
  y: number,
  rect: PopoverRect,
  expand = 0,
): boolean {
  return (
    x >= rect.x - expand &&
    x <= rect.x + rect.width + expand &&
    y >= rect.y - expand &&
    y <= rect.y + rect.height + expand
  );
}

/** Прямоугольник, охватывающий все переданные. */
export function unionRect(rects: PopoverRect[]): PopoverRect | null {
  if (rects.length === 0) return null;
  const left = Math.min(...rects.map((rect) => rect.x));
  const top = Math.min(...rects.map((rect) => rect.y));
  const right = Math.max(...rects.map((rect) => rect.x + rect.width));
  const bottom = Math.max(...rects.map((rect) => rect.y + rect.height));
  return { x: left, y: top, width: right - left, height: bottom - top };
}
