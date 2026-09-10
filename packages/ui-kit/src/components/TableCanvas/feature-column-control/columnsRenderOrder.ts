/**
 * Порядок отрисовки колонок: закреплённые уходят в начало (так же, как их двигает
 * glide), внутри каждой части порядок сохраняется. Единый источник этого правила:
 * его берёт и видимый порядок грида (useColumns), и полный порядок со скрытыми
 * столбцами для индикатора (useHiddenColumnsIndicator), чтобы логика жила в одном
 * месте, а не повторялась.
 */
export const frozenFirst = <T>(
  items: readonly T[],
  isFrozen: (item: T) => boolean,
): T[] => {
  const frozen: T[] = [];
  const rest: T[] = [];
  items.forEach((item) => {
    (isFrozen(item) ? frozen : rest).push(item);
  });
  return [...frozen, ...rest];
};
