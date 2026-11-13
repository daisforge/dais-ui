import type { Rectangle } from '@glideappsfinal/glide-data-grid';

/** Строки от первой до последней включительно. */
export interface RowRange {
  from: number;
  to: number;
}

/** Видимая область glide: по её строкам точечные дорисовки обрезаются до экрана. */
export type VisibleRegion = Pick<Rectangle, 'y' | 'height'>;

/** Если видимая область ещё неизвестна, дорисовываем не больше стольких строк. */
export const MAX_ROWS_WITHOUT_REGION = 200;
