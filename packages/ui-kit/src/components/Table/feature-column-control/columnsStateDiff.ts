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

const sameSet = (a: string[], b: string[]) =>
  [...a].sort().join() === [...b].sort().join();

export const getColumnsStateChanged = (
  prev: ColumnsState,
  next: ColumnsState,
): ColumnsStateChanged => ({
  ...(!sameSet(prev.pinned, next.pinned) && { pinned: 'pinned' as const }),
  ...(prev.order.join() !== next.order.join() && { order: 'order' as const }),
  ...(!sameSet(prev.hidden, next.hidden) && { hidden: 'hidden' as const }),
});
