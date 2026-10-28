/**
 * Сколько первых индексов из `[0, length)` подходят под `predicate`, двоичным поиском.
 * `predicate` должен быть монотонным: истинен на начале диапазона, затем ложен до конца.
 */
export const countWhile = (
  length: number,
  predicate: (index: number) => boolean,
): number => {
  let low = 0;
  let high = length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (predicate(mid)) low = mid + 1;
    else high = mid;
  }
  return low;
};
