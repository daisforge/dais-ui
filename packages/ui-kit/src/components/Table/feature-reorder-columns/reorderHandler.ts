import { Dispatch, SetStateAction } from 'react';

import { KeyText, KeyTextMap } from '../feature-key-text/types';
import { isRowInstrumentsColumn } from '../feature-row-instruments';
import { keyTextUpdateAfterReorder } from './handlers';

const toSpliced = <T>(
  array: Array<T>,
  indexToStart: number,
  counntForDelete: number
) => {
  const result = [...array];
  result.splice(indexToStart, counntForDelete);

  return result;
};

export const reorderHandler = ({
  sourceKey,
  targetKey,
  reorderIsActive,
  setColumnsOrder,
  onReorderingHeader,
  tableConfigKeyTextBoolean,
  keyText,
  colsWithKeyTextMap
}: {
  sourceKey: string;
  targetKey: string;
  reorderIsActive: boolean;
  setColumnsOrder: Dispatch<SetStateAction<string[]>>;
  onReorderingHeader?: (params: {
    newOrder: string[];
    sourceKey: string;
    targetKey: string;
  }) => void;
  tableConfigKeyTextBoolean: boolean;
  keyText: KeyText;
  colsWithKeyTextMap: KeyTextMap;
}) => {
  if (!reorderIsActive) {
    return;
  }
  // дефолтный frozen справа не имеется, поэтому здесь отключаем reordering для rowInstrumentsColumn
  if (isRowInstrumentsColumn(sourceKey) || isRowInstrumentsColumn(targetKey)) {
    return;
  }

  setColumnsOrder((columnsOrder) => {
    const sourceColumnOrderIndex = columnsOrder.findIndex(
      (key) => key === sourceKey
    );
    const targetColumnOrderIndex = columnsOrder.findIndex(
      (key) => key === targetKey
    );

    const newColumnsOrder = toSpliced(columnsOrder, sourceColumnOrderIndex, 1);
    newColumnsOrder.splice(targetColumnOrderIndex, 0, sourceKey);

    if (tableConfigKeyTextBoolean) {
      // newColumnsOrder updating with keyText
      keyTextUpdateAfterReorder({
        keyText,
        sourceKey,
        targetKey,
        colsWithKeyTextMap,
        sourceColumnOrderIndex,
        targetColumnOrderIndex,
        orderArrayForChanging: newColumnsOrder
      });
    }

    if (onReorderingHeader) {
      onReorderingHeader({
        newOrder: newColumnsOrder,
        sourceKey,
        targetKey
      });
    }

    return newColumnsOrder;
  });
};
