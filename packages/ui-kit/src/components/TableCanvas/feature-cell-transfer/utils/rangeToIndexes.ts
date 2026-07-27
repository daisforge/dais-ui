/**
 * Разворачивает прямоугольный отрезок `[start, start + length)` в массив
 * индексов. Используется для приведения смежных диапазонов к тем же явным
 * спискам таргетов, что и несмежный (range-cell / Ctrl) выбор.
 */
export function rangeToIndexes(start: number, length: number): number[] {
  return Array.from({ length: Math.max(length, 0) }, (_, i) => start + i);
}
