/**
 * Нормализует размер под canvas-flex:
 * - number → number
 * - '100%' → '100%'
 * - '<number>px' → number
 * - '<number>rem' → number (конвертируется в px)
 * - другое → undefined
 */
export const normalizeDimensionValue = (
  value?: number | string
): number | '100%' | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return value;

  const trimmed = value.trim();
  
  // Поддержка процентов
  if (trimmed === '100%') return '100%';

  // Поддержка px: "100px" → 100
  const pxMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)px$/i);
  if (pxMatch) {
    return Number(pxMatch[1]);
  }

  // Поддержка rem: "1.5rem" → 24
  const remMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)rem$/i);
  if (remMatch) {
    return Number(remMatch[1]) * 16;
  }

  // Числовая строка: "100" → 100
  const numericValue = Number(trimmed);
  if (!Number.isNaN(numericValue)) {
    return numericValue;
  }

  return undefined;
};
