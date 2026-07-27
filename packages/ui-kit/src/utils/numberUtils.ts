/**
 * Возвращает value, если он в диапазоне между min и max. Иначе вернет min или max.
 */
export const clamp = (min: number, value: number, max: number) => {
  if (value > max) return max;
  if (value < min) return min;
  return value;
};
