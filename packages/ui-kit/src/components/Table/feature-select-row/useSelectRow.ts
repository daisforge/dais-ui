import { useMemo, useState } from 'react';

import { SUBROWS_KEY } from '../feature-tree/constants';
import {
  FlattenedRowsArrAndMap,
  ObjectForExtending,
  Prettify,
  SelectingRowConfig,
  TableConfig
} from '../types';
import { flatten, getCustomOrDefaultSelectingRules } from './handlers';

export interface Props {
  direction: 'ltr' | 'rtl';
}

export function useSelectRow<
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  tableConfig = {},

  rows
}: {
  rows: RowType[];

  tableConfig?: Prettify<
    TableConfig<
      RowType,
      SummaryRowType,
      RowIdType,
      FilterStateType
      // SubRowType
    >
  >;
}) {
  const externalSelectingRowsIsActive = tableConfig.selecting?.showState;
  const innerSelectingRowsIsActive = useState(
    // TODO не готова иконка
    !!tableConfig.selecting && (tableConfig.selecting?.showDefault ?? true)
  );

  const [selectingRowsIsActive, setSelectingRowsIsActive] =
    externalSelectingRowsIsActive ?? innerSelectingRowsIsActive;

  // состояния для видимости лейбла и счетчика в ControlBlock
  const [isSelectingRowLabelVisible, setIsSelectingRowLabelVisible] =
    useState(true);
  const [isSelectingRowCounterVisible, setIsSelectingRowCounterVisible] =
    useState(true);

  const [selectedRows, setSelectedRows] = tableConfig.selecting?.state ?? [];

  const selectingRowConfig = useMemo(() => {
    // state - исключаем, selectingRules - нужен для переопределения
    const { state, selectingRules, ...rest } = tableConfig.selecting ?? {};
    return {
      selectingRules: getCustomOrDefaultSelectingRules(selectingRules),
      selectingRowsIsActive,

      ...rest
    } as SelectingRowConfig<RowType, RowIdType> & {
      selectingRowsIsActive: boolean;
    };
  }, [selectingRowsIsActive, tableConfig.selecting]);

  const flattenedRowsArrAndMap: FlattenedRowsArrAndMap<
    RowType,
    RowIdType
  > | null = useMemo(() => {
    const rowKeyGetter = tableConfig.selecting?.rowKeyGetter;

    if (!selectingRowsIsActive || !tableConfig.selecting || !rowKeyGetter) {
      return null;
    }

    const flattenedRowsArray = flatten(
      rows,
      // eslint-disable-next-line @typescript-eslint/dot-notation
      (r) => r?.[SUBROWS_KEY],
      (r) => r
    );

    const mp = new Map(flattenedRowsArray.map((r) => [rowKeyGetter(r), r]));

    return {
      flattenedRows: flattenedRowsArray,
      flattenedRowsMap: mp
    };

    // исключен - tableConfig.selecting?.rowKeyGetter - не должен меняться по смыслу
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, selectingRowsIsActive]);

  return {
    selectingRowsIsActive,
    setSelectingRowsIsActive,
    selectedRows,
    setSelectedRows,
    selectingRowConfig,
    flattenedRowsArrAndMap,
    isSelectingRowLabelVisible,
    setIsSelectingRowLabelVisible,
    isSelectingRowCounterVisible,
    setIsSelectingRowCounterVisible,
    controlBlock: {
      domMetadata: {
        className: tableConfig.selecting?.controlBlock?.domMetadata?.className,
        dataAttributes:
          tableConfig.selecting?.controlBlock?.domMetadata?.dataAttributes
      }
    },
    sidebar: {
      domMetadata: {
        className: tableConfig.selecting?.sidebar?.domMetadata?.className,
        dataAttributes:
          tableConfig.selecting?.sidebar?.domMetadata?.dataAttributes
      }
    }
  };
}
