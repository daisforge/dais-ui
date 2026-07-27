import { useCallback, useEffect, useMemo, useState } from 'react';

import { AllRowsMapEntry } from '../feature-row-markers/types';
import {
  SUBROWS_KEY,
  TREE_ID_KEY,
  TREE_LVL_KEY
} from '../feature-tree/constants';
import { getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import { ObjectForExtending, TableConfig } from '../types';

/**
 * Служебный ключ: rowKey родительской строки.
 * Записывается в объект строки при рекурсивном обходе дерева
 * в getRecursivelyRowAndOpenedSubRows для вычисления parentKey в allRowsMap.
 */
const PARENT_ROW_KEY = '__parentRowKey';

const getRecursivelyRowAndOpenedSubRows = <
  RowType,
  RowIdType extends string | number
>({
  r,
  parentId,
  parentRowKey,
  lvl = 0,
  getRowIsExpanded,
  rowKeyGetter,
  getSubRows
}: {
  r: RowType;
  getRowIsExpanded: (key: string | number) => boolean;
  rowKeyGetter: ((row: RowType) => RowIdType) | undefined;
  getSubRows: ((row: RowType) => RowType[] | undefined) | undefined;
  parentId?: string;
  /** rowKey родительской строки. Передаётся рекурсивно для вычисления parentKey в allRowsMap. */
  parentRowKey?: string | number;
  /** Уровень вложенности. Для root === 0, для subRows растёт на 1 на каждый уровень. */
  lvl?: number;
}) => {
  const subRows = getSubRows?.(r);
  const hasChildren = !!subRows?.length;

  const rowAndAllOpenedSubRows = [
    {
      ...r,
      ...(parentId && {
        [TREE_ID_KEY]: `${parentId}`
      }),
      // Записываем ключ родителя для вычисления parentKey в allRowsMap.
      // Для root-строк parentRowKey === undefined → поле не добавляется.
      ...(parentRowKey != null && {
        [PARENT_ROW_KEY]: parentRowKey
      }),
      // Кеш уровня вложенности. Записываем только для subRows (lvl > 0),
      // чтобы root-строки не мутировались. getTreeIdAndLvlOfRow для root
      // возвращает 0 без split, поэтому кеш на root не нужен.
      ...(lvl > 0 && {
        [TREE_LVL_KEY]: lvl
      })
    }
  ] as RowType[];

  if (!hasChildren) {
    return rowAndAllOpenedSubRows;
  }
  if (!rowKeyGetter) {
    return rowAndAllOpenedSubRows;
  }

  const keyOfRow = rowKeyGetter(r);

  if (keyOfRow === null || keyOfRow === undefined) {
    return rowAndAllOpenedSubRows;
  }

  const rowIsExpanded = getRowIsExpanded(keyOfRow);

  if (!rowIsExpanded) {
    return rowAndAllOpenedSubRows;
  }

  subRows.forEach((subRow, i) => {
    const arr2 = getRecursivelyRowAndOpenedSubRows({
      r: subRow,
      getRowIsExpanded,
      rowKeyGetter,
      getSubRows,
      // keyOfRow текущей строки = parentRowKey для дочерних (любая глубина)
      parentRowKey: keyOfRow,
      lvl: lvl + 1,
      parentId: `${
        parentId ? `${parentId}` : `${keyOfRow.toString()}`
      }.${SUBROWS_KEY}.${i}`
    });
    rowAndAllOpenedSubRows.push(...arr2);
  });

  return rowAndAllOpenedSubRows;
};

export const useFlattenedRows = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  rows,
  tableConfig,
  groupedCols
}: {
  rows: readonly RowType[];

  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  groupedCols: string[] | undefined;
}) => {
  const localExpandedRowsIdsStateAndSetter = useState(
    new Set<string | number>()
  );
  const expandedRowsIdsStateAndSetter =
    tableConfig.subRows?.expandedIdsState ?? localExpandedRowsIdsStateAndSetter;

  const [expandedRowsIds, setExpandedRowsIds] = expandedRowsIdsStateAndSetter;

  // reseting expanded after reGrouping Cols
  useEffect(() => {
    if (groupedCols) {
      setExpandedRowsIds(new Set());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupedCols]);

  const tableConfigSubRowsBoolean = !!tableConfig.subRows;

  // Полный обход дерева (все ветки "развёрнуты").
  // expandedAllRowsIds — Set всех ключей (для toggleExpandAll).
  // allRowsMap — Map<rowKey, AllRowsMapEntry> для стабильной нумерации rowMarkers.
  const { expandedAllRowsIds, allRowsMap } = useMemo(() => {
    if (!tableConfigSubRowsBoolean) {
      return { expandedAllRowsIds: null, allRowsMap: null };
    }
    const rowKeyGetter = tableConfig.subRows?.rowKeyGetter;
    const getSubRows = tableConfig.subRows?.getSubRows;

    const ids = new Set<string | number>();
    const map = new Map<string | number, AllRowsMapEntry<RowType>>();
    let index = 0;
    let rootCount = 0;
    // Счётчик дочерних по ключу родителя: parentKey → текущий siblingIndex
    const siblingCounters = new Map<string | number | null, number>();

    rows.forEach((currRow) => {
      const rowAndAllOpenedSubRows = getRecursivelyRowAndOpenedSubRows({
        r: currRow,
        getRowIsExpanded: () => true,
        rowKeyGetter,
        getSubRows
      });

      rowAndAllOpenedSubRows.forEach((r) => {
        const rowKey = rowKeyGetter?.(r);
        if (rowKey == null) {
          index += 1;
          return;
        }

        const { lvl } = getTreeIdAndLvlOfRow(r as RowType);
        const isRoot = lvl === 0;

        // parentKey: для корневых — null, для дочерних — rowKey родительской строки.
        // PARENT_ROW_KEY записывается в объект строки рекурсивной функцией
        // getRecursivelyRowAndOpenedSubRows. Работает для любой глубины вложенности.
        const parentKey: string | number | null = isRoot
          ? null
          : (r as { [PARENT_ROW_KEY]?: string | number })?.[PARENT_ROW_KEY] ??
            null;

        // siblingIndex: порядковый номер среди siblings одного родителя
        const siblingKey = parentKey;
        const currentSiblingIndex = siblingCounters.get(siblingKey) ?? 0;
        siblingCounters.set(siblingKey, currentSiblingIndex + 1);

        ids.add(rowKey);
        map.set(rowKey, {
          row: r,
          index,
          rootIndex: isRoot ? rootCount : null,
          siblingIndex: currentSiblingIndex,
          parentKey
        });

        if (isRoot) {
          rootCount += 1;
        }
        index += 1;
      });
    });

    return { expandedAllRowsIds: ids, allRowsMap: map };
    /**
     * ⚠️ В зависимостях стоит tableConfigSubRowsBoolean, а НЕ сами функции
     * getSubRows/rowKeyGetter. Причина: пользователи обычно передают их инлайн
     * без useCallback, что вызывает пересчёт полного дерева на каждый рендер.
     *
     * Следствие: если getSubRows/rowKeyGetter динамически изменятся (другая
     * структура дерева) при том же subRows === true — allRowsMap и
     * expandedAllRowsIds НЕ пересчитаются и будут содержать устаревшие данные.
     *
     * Функции getSubRows и rowKeyGetter должны быть чистыми и стабильными.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    rows,
    // tableConfig.subRows?.getSubRows, - вместо данного стейта вписан в зависимости tableConfigSubRowsBoolean
    // tableConfig.subRows?.rowKeyGetter, - вместо данного стейта вписан в зависимости tableConfigSubRowsBoolean
    tableConfigSubRowsBoolean
  ]);

  const flattenedRows = useMemo(() => {
    if (!tableConfigSubRowsBoolean || expandedRowsIds.size === 0) {
      return rows;
    }
    const rowKeyGetter = tableConfig.subRows?.rowKeyGetter;
    const getSubRows = tableConfig.subRows?.getSubRows;

    return rows.reduce((acc, currRow) => {
      const rowAndAllOpenedSubRows = getRecursivelyRowAndOpenedSubRows({
        r: currRow,
        getRowIsExpanded(keyOfRow) {
          return expandedRowsIds.has(keyOfRow);
        },
        rowKeyGetter,
        getSubRows
      });

      acc.push(...rowAndAllOpenedSubRows);

      return acc;
    }, [] as RowType[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    expandedRowsIds,
    rows,
    // tableConfig.subRows?.getSubRows, - вместо данного стейта вписан в зависимости tableConfigSubRowsBoolean
    // tableConfig.subRows?.rowKeyGetter, - вместо данного стейта вписан в зависимости tableConfigSubRowsBoolean
    tableConfigSubRowsBoolean
  ]);

  const isExpandedAllRows =
    tableConfigSubRowsBoolean &&
    !!expandedAllRowsIds &&
    expandedAllRowsIds.size === flattenedRows.length;

  const externalIsExpandedAllRows = useMemo(() => {
    const getExpandedAll = tableConfig.rowsGrouping?.expandAllBtn?.expandedAll;
    if (!(tableConfigSubRowsBoolean && getExpandedAll)) {
      return null;
    }
    return getExpandedAll({
      allRowsIds: expandedAllRowsIds,
      shownRows: flattenedRows,
      expandedRowsIds
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    expandedAllRowsIds,
    flattenedRows,
    // tableConfig.rowsGrouping?.expandAllBtn?.expandedAll, // функция должна быть чистой, поэтому ее можно не актуализировать
    tableConfigSubRowsBoolean
  ]);

  const resultExpandedAll = externalIsExpandedAllRows ?? isExpandedAllRows;

  const toggleExpandAllButton = useCallback(() => {
    if (resultExpandedAll) {
      setExpandedRowsIds(new Set());
      return;
    }

    if (expandedAllRowsIds) {
      setExpandedRowsIds(expandedAllRowsIds);
    }
  }, [expandedAllRowsIds, resultExpandedAll, setExpandedRowsIds]);

  return {
    flattenedRows,
    expandedRowsIdsStateAndSetter,
    expandedRowsIds,
    isExpandedAllRows: resultExpandedAll,
    toggleExpandAllButton,
    allRowsMap
  };
};
