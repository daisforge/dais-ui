import { useCallback, useEffect, useMemo, useState } from 'react';

import { ColumnsControlConfig } from '../feature-column-control/types';
import { KeyText, KeyTextMap } from '../feature-key-text/types';
import { ColumnConfig, ObjectForExtending } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import {
  orderWithUpdatedDefaultColsDeleteDuplicates,
  sortedInOrder,
  updateOrderWithKeyText
} from './handlers';
import { reorderHandler } from './reorderHandler';

/**
 * Если фича активирована, то данные измененные(reorderedColumns!==columns) и работающая функция(onColumnsReorder).
 *
 * Если фича выключена, то данные без изменений(reorderedColumns===columns) и функция-пустышка(onColumnsReorder).
 */
export const useReorderDragable = <
  RowType extends ObjectForExtending,
  SummaryRowType
>({
  columns,
  reorderIsActive,
  tableConfigColumnsControl,
  columnConfig,
  selectingRowsIsActive,
  rowMarkersIsActive,
  rowsGroupingIsActive,
  showRowInstruments,
  tableConfigKeyTextBoolean,
  keyText,
  colsWithKeyTextMap,
  pinnedCols
}: {
  columns: readonly ColumnConfigInternal<RowType, SummaryRowType>[];
  reorderIsActive: boolean;
  tableConfigColumnsControl: ColumnsControlConfig | undefined;
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  rowMarkersIsActive: boolean;
  selectingRowsIsActive: boolean;
  rowsGroupingIsActive: boolean;
  showRowInstruments: boolean;
  tableConfigKeyTextBoolean: boolean;
  keyText: KeyText;
  colsWithKeyTextMap: KeyTextMap;
  pinnedCols: string[];
}) => {
  const tableConfigDefaultOrder = tableConfigColumnsControl?.orderDefault;

  const [columnsOrder, setColumnsOrder] = useState(() =>
    reorderIsActive
      ? sortedInOrder({
          columnConfig,
          tableConfigDefaultOrder,
          rowMarkersIsActive,
          selectingRowsIsActive,
          colsWithKeyTextMap,
          keyText,
          rowsGroupingIsActive,
          showRowInstruments
        })
      : []
  );

  const getDefaultColumnsOrder = () =>
    sortedInOrder({
      columnConfig,
      tableConfigDefaultOrder,
      rowMarkersIsActive,
      selectingRowsIsActive,
      rowsGroupingIsActive,
      colsWithKeyTextMap,
      keyText,
      showRowInstruments
    });

  // обновление columnsOrder при обновлении columns
  useEffect(() => {
    setColumnsOrder((prev) => {
      const prevAsSet = new Set(prev);

      const copyOfPrev = [...prev];

      getDefaultColumnsOrder().forEach((key) => {
        const isNewCol = !prevAsSet.has(key);

        if (isNewCol) {
          copyOfPrev.push(key);
        }
      });

      // keyText mutation -  после всех других обработок
      updateOrderWithKeyText({
        keyText,
        orderArrayForChanging: copyOfPrev,
        colsWithKeyTextMap
      });

      const resultСopyOfPrevWithoutDouble =
        orderWithUpdatedDefaultColsDeleteDuplicates({
          orderArrayForChanging: copyOfPrev
        });

      return resultСopyOfPrevWithoutDouble;
    });
    // массив зависимостей специально оставлен, т.к. columns меняется при обновление columnConfig/hiddenCols/keyText. getDefaultColumnsOrder - берет всегда актуальные значения
    // исключен keyText - уже имеется в зависимостях у columns,
    // исключен colsWithKeyTextMap - не должен вызывать рендер новый. изменения columns достаточно для расчета.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

  const reorderedColumns = useMemo(() => {
    if (!reorderIsActive) {
      return columns;
    }

    const columnsMap = new Map(columns.map((col) => [col.key, col]));

    return columnsOrder.reduce((acc, currKey) => {
      const currInNewColumns = columnsMap.get(currKey);

      if (currInNewColumns) {
        acc.push(currInNewColumns);
      }

      return acc;
    }, [] as (typeof columns)[number][]);

    // columns зависимость убрана из-за того, что columnsOrder уже всегда меняется при измении сolumns
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnsOrder, reorderIsActive]);

  const onColumnsReorder = useCallback(
    (sourceKey: string, targetKey: string) => {
      reorderHandler({
        sourceKey,
        targetKey,
        reorderIsActive,
        setColumnsOrder,
        onReorderingHeader: tableConfigColumnsControl?.onReorderingHeader,
        tableConfigKeyTextBoolean,
        keyText,
        colsWithKeyTextMap,
        pinnedCols
      });
    },
    [
      colsWithKeyTextMap,
      keyText,
      reorderIsActive,
      tableConfigColumnsControl?.onReorderingHeader,
      tableConfigKeyTextBoolean,
      pinnedCols
    ]
  );

  return {
    reorderedColumns,
    colsWithKeyTextMap,
    columnsOrder,
    setColumnsOrder,
    onColumnsReorder,
    getDefaultColumnsOrder
  };
};
