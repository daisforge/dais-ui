/** Пересекаются ли отрезки [aFrom, aTo] и [bFrom, bTo] (концы включительно). */
export const rangesOverlap = (
  aFrom: number,
  aTo: number,
  bFrom: number,
  bTo: number,
): boolean => aFrom <= bTo && aTo >= bFrom;

/**
 * Обрезан ли блок краем области данных: его строки выше видимой части. Сложение
 * останавливается, как только высота превышена, поэтому длинный блок считается
 * не дольше, чем строки на экране. Один пиксель допуска на линию сетки. Если
 * высота строк неизвестна, считаем блок обрезанным: лишний замер безопасен.
 */
export const isBlockCut = (
  rowHeight: number | ((rowInd: number) => number) | undefined,
  [from, to]: readonly [number, number],
  visibleHeight: number,
): boolean => {
  if (rowHeight === undefined) {
    return true;
  }
  if (typeof rowHeight === 'number') {
    return (to - from + 1) * rowHeight > visibleHeight + 1;
  }
  let height = 0;
  for (let rowInd = from; rowInd <= to; rowInd += 1) {
    height += rowHeight(rowInd);
    if (height > visibleHeight + 1) {
      return true;
    }
  }
  return false;
};

/**
 * Попадает ли ячейка или блок в строки под курсором. Без рассчитанных строк
 * берётся строка под мышью, без курсора ничего не подсвечено.
 */
export const isBlockRowHovered = (
  hoveredRowInd: number | undefined,
  hoverRows: { from: number; to: number } | undefined,
  [from, to]: readonly [number, number],
): boolean => {
  if (hoveredRowInd === undefined) {
    return false;
  }
  return rangesOverlap(
    hoverRows?.from ?? hoveredRowInd,
    hoverRows?.to ?? hoveredRowInd,
    from,
    to,
  );
};

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

const RANGE_HIT_CACHE_LIMIT = 10_000;

/**
 * То же, что setHasAnyInRange, но ответ запоминается для каждого отрезка.
 *
 * Блок спрашивают из каждой его видимой ячейки в каждом кадре, а перебор при
 * большом наборе дорогой. Для нового набора создаётся новая функция, так что
 * старые ответы уходят вместе со старым набором.
 */
export const createSetRangeHitCache = (set: ReadonlySet<number> | undefined) => {
  const answers = new Map<string, boolean>();
  return (from: number, to: number): boolean => {
    if (!set?.size) {
      return false;
    }
    const key = `${from}:${to}`;
    const cached = answers.get(key);
    if (cached !== undefined) {
      return cached;
    }
    if (answers.size >= RANGE_HIT_CACHE_LIMIT) {
      answers.clear();
    }
    const hit = setHasAnyInRange(set, from, to);
    answers.set(key, hit);
    return hit;
  };
};
