import { useMemo } from 'react';

import { getRowSelectingInfo } from './selecting-contexts';

/**
 * Собирает индексы отображаемых строк, для которых `predicate` истинен.
 * Единый бойлерплейт: итерация, Set, молчаливый пропуск служебных строк (на них
 * `rowKeyGetter` кидает) и возврат `undefined` вместо пустого Set — проп грида
 * ждёт именно undefined, а не пустую коллекцию.
 */
function collectRowIndexes<R>(
  rows: readonly R[],
  predicate: (row: R, index: number) => boolean,
): Set<number> | undefined {
  const indexes = new Set<number>();
  rows.forEach((row, index) => {
    try {
      if (predicate(row, index)) indexes.add(index);
    } catch {
      // Служебная строка, не поддерживаемая rowKeyGetter, — пропускаем.
    }
  });
  return indexes.size > 0 ? indexes : undefined;
}

interface UseCheckboxRowIndexesParams<
  RowType,
  RowIdType extends string | number,
> {
  /** Отображаемые строки грида (их позиции = row-индексы glide). */
  rows: readonly RowType[];
  /** Ключ строки для чекбокс-выбора; без него оба набора — undefined. */
  rowKeyGetter?: (row: RowType) => RowIdType;
  /** Актуальный набор отмеченных чекбоксом строк (по ключам). */
  selectedRows?: ReadonlySet<RowIdType>;
  /** Конфиг выбора строк; чекбоксы видимы только при selectingRowsIsActive. */
  selectingRowConfig?: { selectingRowsIsActive?: boolean };
  /** Контекст для getRowSelectingInfo (тип гасится ниже через as unknown). */
  flattenedRowsArrAndMap: unknown;
  /** Сеттер отмеченных строк (часть контекста getRowSelectingInfo). */
  setSelectedRows: unknown;
  /** Активна ли группировка строк (rowsGrouping в конфиге И есть groupedCols). */
  isRowsGroupingActive: boolean;
}

/**
 * Проецирует чекбокс-домен выбора строк (ключи) в позиционные row-индексы glide.
 *
 * Возвращает два набора:
 *  - `checkboxSelectedRowIndexes` — реально ОТМЕЧЕННЫЕ чекбоксом строки;
 *  - `checkboxVisibleRowIndexes` — строки, у которых чекбокс ЕСТЬ (виден),
 *    независимо от отметки (нужно для затемнения при highlightActiveType='row').
 *
 * «Есть чекбокс» считаем той же `getRowSelectingInfo`, что и чекбокс-колонка
 * (учитывает levels, rowShowCheckbox, rowGetStates). Оба набора — `Set<number>`
 * или `undefined`, наружу glide-типы не протекают.
 */
export function useCheckboxRowIndexes<
  RowType,
  RowIdType extends string | number,
>({
  rows,
  rowKeyGetter,
  selectedRows,
  selectingRowConfig,
  flattenedRowsArrAndMap,
  setSelectedRows,
  isRowsGroupingActive,
}: UseCheckboxRowIndexesParams<RowType, RowIdType>) {
  const checkboxSelectedRowIndexes = useMemo(() => {
    if (!rowKeyGetter || !selectedRows?.size || !rows.length) {
      return undefined;
    }

    // Подсвечиваем только реально отображаемые строки грида.
    return collectRowIndexes(rows, (row) =>
      selectedRows.has(rowKeyGetter(row)),
    );
  }, [rows, selectedRows, rowKeyGetter]);

  const checkboxVisibleRowIndexes = useMemo(() => {
    if (
      !selectingRowConfig?.selectingRowsIsActive ||
      !rowKeyGetter ||
      !rows.length
    ) {
      return undefined;
    }

    const selectingRowCtx = {
      flattenedRowsArrAndMap,
      selectingRowConfig,
      selectedRows,
      setSelectedRows,
      rowKeyGetter,
      rowsGroupingIsActive: isRowsGroupingActive,
    };

    return collectRowIndexes(rows, (row) => {
      const { isHaveCheckbox } = getRowSelectingInfo({
        row,
        ctxs: { selectingRowCtx },
      } as unknown as Parameters<typeof getRowSelectingInfo>[0]);

      return isHaveCheckbox;
    });
  }, [
    rows,
    selectingRowConfig,
    selectedRows,
    setSelectedRows,
    flattenedRowsArrAndMap,
    rowKeyGetter,
    isRowsGroupingActive,
  ]);

  return { checkboxSelectedRowIndexes, checkboxVisibleRowIndexes };
}
