/**
 * Состояние настройки колонок, которое уходит потребителю в onConfirm.
 */
export type ColumnsState = {
  order: string[];
  pinned: string[];
  hidden: string[];
};

/**
 * Какие части состояния колонок изменились между prev и next.
 * Для порядка важна последовательность, для закреплённых и скрытых — только состав.
 */
export type ColumnsStateChanged = {
  pinned?: 'pinned';
  order?: 'order';
  hidden?: 'hidden';
};

const sameSet = (a: string[], b: string[]) => {
  const setA = new Set(a);
  const setB = new Set(b);
  return setA.size === setB.size && [...setA].every((key) => setB.has(key));
};

/**
 * Совпадает ли часть состояния колонок: порядок сравниваем по
 * последовательности, закреплённые и скрытые по составу.
 */
export const isSameColumnsStatePart = (
  part: keyof ColumnsState,
  a: string[],
  b: string[],
) => (part === 'order' ? a.join() === b.join() : sameSet(a, b));

export const getColumnsStateChanged = (
  prev: ColumnsState,
  next: ColumnsState,
): ColumnsStateChanged => ({
  ...(!isSameColumnsStatePart('pinned', prev.pinned, next.pinned) && {
    pinned: 'pinned' as const,
  }),
  ...(!isSameColumnsStatePart('order', prev.order, next.order) && {
    order: 'order' as const,
  }),
  ...(!isSameColumnsStatePart('hidden', prev.hidden, next.hidden) && {
    hidden: 'hidden' as const,
  }),
});
