/** Пересекаются ли отрезки [aFrom, aTo] и [bFrom, bTo] (концы включительно). */
export const rangesOverlap = (
  aFrom: number,
  aTo: number,
  bFrom: number,
  bTo: number,
): boolean => aFrom <= bTo && aTo >= bFrom;

/**
 * Есть ли в наборе хотя бы один индекс из [from, to]. Перебирает то, что
 * короче: набор или отрезок.
 */
export const setHasAnyInRange = (
  set: ReadonlySet<number> | undefined,
  from: number,
  to: number,
): boolean => {
  if (!set?.size) {
    return false;
  }
  if (set.size < to - from + 1) {
    for (const index of set) {
      if (index >= from && index <= to) {
        return true;
      }
    }
    return false;
  }
  for (let index = from; index <= to; index += 1) {
    if (set.has(index)) {
      return true;
    }
  }
  return false;
};
