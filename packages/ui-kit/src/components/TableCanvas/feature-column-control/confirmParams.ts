import { ColumnsControlConfig } from './types';

type ColumnsState = { order: string[]; pinned: string[]; hidden: string[] };

export type ConfirmParams = Parameters<
  NonNullable<ColumnsControlConfig['onConfirm']>
>[0];

const sameSet = (a: string[], b: string[]) =>
  [...a].sort().join() === [...b].sort().join();

/**
 * Параметры для columnsControl.onConfirm: новое состояние колонок без служебных
 * колонок и отметки, что именно изменилось. Порядок сравнивается с учётом
 * позиций, закрепление и скрытие — как наборы ключей.
 */
export const buildConfirmParams = (
  prev: ColumnsState,
  next: ColumnsState,
  withoutServiceCols: (cols: string[]) => string[],
): ConfirmParams => {
  const changed: ConfirmParams['changed'] = {
    ...(!sameSet(next.pinned, prev.pinned) && { pinned: 'pinned' as const }),
    ...(prev.order.join() !== next.order.join() && {
      order: 'order' as const,
    }),
    ...(!sameSet(next.hidden, prev.hidden) && { hidden: 'hidden' as const }),
  };

  return {
    order: withoutServiceCols(next.order),
    pinned: withoutServiceCols(next.pinned),
    hidden: withoutServiceCols(next.hidden),
    changed,
  };
};
