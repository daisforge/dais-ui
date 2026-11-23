import type { GridColumn } from '@daisforge/glide-data-grid';

/** Ширина, полученная от Glide, и ширина из props до начала resize. */
export type ResizedWidth = {
  width: number;
  propsWidth: number | undefined;
};

export type ResizedWidthsMap = ReadonlyMap<string, ResizedWidth>;

export type ActiveColumnResize = {
  id: string;
  startWidth: number | undefined;
};

export const EMPTY_RESIZED_WIDTHS: ResizedWidthsMap = new Map();

export const widthOfColumn = (column: GridColumn): number | undefined =>
  'width' in column ? column.width : undefined;

/**
 * Запоминает ширину от Glide и ширину из props до начала локального resize.
 */
export const recordResizedWidth = (
  map: ResizedWidthsMap,
  id: string,
  width: number,
  propsWidth: number | undefined,
): ResizedWidthsMap => {
  const next = new Map(map);
  next.set(id, { width, propsWidth });
  return next;
};

// Сравниваем текущий width в props со значением до resize. Совпадение означает,
// что новое числовое значение не пришло; намеренную передачу того же числа
// невозможно отличить от отсутствия обновления.
const consumerWidthIsUnchanged = (column: GridColumn, resized: ResizedWidth) =>
  widthOfColumn(column) === resized.propsWidth;

export type ReconciledResizedWidths<C extends GridColumn> = {
  columns: C[];
  resizedWidths: ResizedWidthsMap;
};

/**
 * Применяет локальные ширины и очищает записи, которые владелец заменил новыми props.
 * Отсутствие колонки в текущем массиве не считается удалением: TableCanvas может скрыть её.
 */
export const reconcileResizedWidths = <C extends GridColumn>(
  columns: C[],
  resizedWidths: ResizedWidthsMap,
  activeResize?: ActiveColumnResize,
): ReconciledResizedWidths<C> => {
  if (resizedWidths.size === 0) return { columns, resizedWidths };

  let nextResizedWidths: Map<string, ResizedWidth> | undefined;
  const nextColumns = columns.map((column) => {
    const { id } = column;
    if (id === undefined) return column;
    const resized = resizedWidths.get(id);

    if (!resized) return column;

    const isActiveColumn = activeResize?.id === id;
    const propsWidthIsUnchanged = consumerWidthIsUnchanged(column, resized);

    if (!propsWidthIsUnchanged && !activeResize) {
      // Пропсы уже содержат новое значение: локальную ширину больше не применяем.
      nextResizedWidths ??= new Map(resizedWidths);
      nextResizedWidths.delete(id);
      return column;
    }

    if (!propsWidthIsUnchanged && !isActiveColumn) {
      // Пока идёт resize, внешние обновления других колонок показываем сразу,
      // но откладываем очистку их кеша до конца жеста.
      return column;
    }

    // Во время drag локальная ширина остаётся главной даже при промежуточном
    // ответе владельца. После drag обычная сверка применит окончательные props.
    // Отключаем grow: иначе Glide может растянуть колонку сверх этой ширины.
    return { ...column, width: resized.width, grow: 0 };
  });

  return {
    columns: nextColumns,
    resizedWidths: nextResizedWidths ?? resizedWidths,
  };
};
