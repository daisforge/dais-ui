import type { GridColumn } from '@glideappsfinal/glide-data-grid';

/**
 * Локальная ширина, полученная от Glide, и исходная ширина из пропсов.
 * Исходное значение нужно, чтобы понять, успел ли владелец таблицы принять resize.
 */
export type ResizedWidth = {
  width: number;
  base: number | undefined;
};

export type ResizedWidthsMap = ReadonlyMap<string, ResizedWidth>;

export const EMPTY_RESIZED_WIDTHS: ResizedWidthsMap = new Map();

const widthOfColumn = (column: GridColumn): number | undefined =>
  'width' in column ? column.width : undefined;

/**
 * Запоминает ширину от Glide и ширину столбца в актуальных пропсах.
 * По исходной ширине позже можно определить, пришло ли уже обновление от владельца таблицы.
 */
export const recordResizedWidth = (
  map: ResizedWidthsMap,
  columns: readonly GridColumn[],
  columnIndex: number,
  id: string,
  width: number,
): ResizedWidthsMap => {
  // Индекс приходит из Glide и соответствует порядку колонок, переданных в Grid.
  // Берём исходную ширину за O(1), поскольку callback вызывается во время drag.
  const column = columns[columnIndex];
  const next = new Map(map);
  next.set(id, {
    width,
    base: column?.id === id ? widthOfColumn(column) : undefined,
  });
  return next;
};

const consumerWidthIsUnchanged = (column: GridColumn, resized: ResizedWidth) =>
  widthOfColumn(column) === resized.base;

export type ReconciledResizedWidths<C extends GridColumn> = {
  columns: C[];
  resizedWidths: ResizedWidthsMap;
};

/**
 * Применяет локальные ширины и одновременно очищает устаревшие записи кеша.
 * Это оставляет один проход по колонкам при обновлении props во время resize.
 */
export const reconcileResizedWidths = <C extends GridColumn>(
  columns: C[],
  resizedWidths: ResizedWidthsMap,
): ReconciledResizedWidths<C> => {
  if (resizedWidths.size === 0) return { columns, resizedWidths };

  const retainedIds = new Set<string>();
  let nextResizedWidths: Map<string, ResizedWidth> | undefined;
  const nextColumns = columns.map((column) => {
    const { id } = column;
    if (id === undefined) return column;
    const resized = resizedWidths.get(id);

    if (!resized) return column;

    if (!consumerWidthIsUnchanged(column, resized)) {
      // Пропсы уже содержат новое значение: локальную ширину больше не применяем.
      nextResizedWidths ??= new Map(resizedWidths);
      nextResizedWidths.delete(id);
      return column;
    }

    retainedIds.add(id);
    // Отключаем grow: иначе Glide может растянуть столбец и визуальная ширина не совпадёт с resize.
    return { ...column, width: resized.width, grow: 0 };
  });

  // Удаляем записи для исчезнувших колонок; их ширина не должна вернуться при повторном появлении.
  resizedWidths.forEach((_resized, id) => {
    if (retainedIds.has(id) || nextResizedWidths?.has(id) === false) return;
    nextResizedWidths ??= new Map(resizedWidths);
    nextResizedWidths.delete(id);
  });

  return {
    columns: nextColumns,
    resizedWidths: nextResizedWidths ?? resizedWidths,
  };
};
