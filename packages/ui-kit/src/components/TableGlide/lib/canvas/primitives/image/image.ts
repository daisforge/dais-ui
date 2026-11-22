import type { CanvasImageResources } from '../../core/CanvasImageResources';
import type { Rect } from '../../core/CanvasNode';

/** fill растягивает изображение; cover заполняет область с обрезкой; contain вписывает целиком. */
export type ImageFit = 'fill' | 'cover' | 'contain';

export function getImage(
  src: string | undefined,
  resources?: CanvasImageResources,
) {
  return src
    ? resources?.loader.loadOrGetImage(
        src,
        resources.colIndex,
        resources.rowIndex,
      )
    : undefined;
}

export function imageRects(
  width: number,
  height: number,
  rect: Rect,
  fit: ImageFit,
) {
  if (width <= 0 || height <= 0 || rect.width <= 0 || rect.height <= 0)
    return undefined;
  const source = { x: 0, y: 0, width, height };
  const destination = { ...rect };
  if (fit === 'cover') {
    const scale = Math.max(rect.width / width, rect.height / height);
    source.width = rect.width / scale;
    source.height = rect.height / scale;
    source.x = (width - source.width) / 2;
    source.y = (height - source.height) / 2;
  } else if (fit === 'contain') {
    const scale = Math.min(rect.width / width, rect.height / height);
    destination.width = width * scale;
    destination.height = height * scale;
    destination.x += (rect.width - destination.width) / 2;
    destination.y += (rect.height - destination.height) / 2;
  }
  return { source, destination };
}

export function paintImage(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement | ImageBitmap,
  rect: Rect,
  fit: ImageFit,
) {
  const width = 'naturalWidth' in image ? image.naturalWidth : image.width;
  const height = 'naturalHeight' in image ? image.naturalHeight : image.height;
  const rectangles = imageRects(width, height, rect, fit);
  if (!rectangles) return;
  const { source: s, destination: d } = rectangles;
  ctx.drawImage(
    image,
    s.x,
    s.y,
    s.width,
    s.height,
    d.x,
    d.y,
    d.width,
    d.height,
  );
}
