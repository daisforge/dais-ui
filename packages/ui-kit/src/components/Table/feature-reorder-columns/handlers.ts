import { getCols } from '../feature-key-text';
import { KeyText, KeyTextMap } from '../feature-key-text/types';
import {
  isRowInstrumentsColumn,
  ROW_I_COLUMN_KEY
} from '../feature-row-instruments';
import { KEY_GROUPED_COL } from '../feature-rows-grouping';
import { CHECKBOX_COLUMN_KEY } from '../feature-select-row';
import { ColumnConfig, ObjectForExtending } from '../types';
import {
  removeAllFromArray,
  replaceAllFromArray,
  swapItemsByIndex
} from '../utils/arrayMutationHandlers';
/**
 * Функция для добавления вперед колонок CHECKBOX_COLUMN_KEY, KEY_GROUPED_COL, для удаления дубликатов
 */
export const orderWithUpdatedDefaultColsDeleteDuplicates = ({
  orderArrayForChanging
}: {
  orderArrayForChanging: string[];
}): Array<string> => {
  const set = new Set(orderArrayForChanging);
  const newSet = new Set<string>();
  [CHECKBOX_COLUMN_KEY, ROW_I_COLUMN_KEY, KEY_GROUPED_COL].forEach((k) => {
    if (set.has(k)) {
      set.delete(k);
      newSet.add(k);
    }
  });

  set.forEach((v) => {
    newSet.add(v);
  });

  return Array.from(newSet);
};

export const updateOrderWithKeyText = ({
  keyText,
  orderArrayForChanging,
  colsWithKeyTextMap
}: {
  orderArrayForChanging: string[];
  keyText: KeyText;
  colsWithKeyTextMap: KeyTextMap;
}) => {
  const mapForKeyText = new Map(orderArrayForChanging.map((k, i) => [k, i]));
  // формат объектов для удаления дублирований ( при проходе по массиву проходимся и по ключу и по тексту - дважды заполняем одну и ту же связку)
  const replaceObj: Record<string, (arrForChanging: string[]) => void> = {};
  const deleteAndReplaceObj: Record<
    string,
    (arrForChanging: string[]) => void
  > = {};
  const swapObj: Record<string, (arrForChanging: string[]) => void> = {};
  const moveObj: Record<string, (arrForChanging: string[]) => void> = {};

  // обработка keyText
  orderArrayForChanging.forEach((k) => {
    const isKeyText = colsWithKeyTextMap.get(k);

    if (!isKeyText) {
      return;
    }

    const { keyKey, textKey } = isKeyText;
    const id = `${keyKey}${textKey}`;

    // skip - если связка была заполнена ранее
    if (
      replaceObj[id] ||
      deleteAndReplaceObj[id] ||
      swapObj[id] ||
      moveObj[id]
    ) {
      return;
    }

    const keyIndex = mapForKeyText.get(keyKey);
    const textIndex = mapForKeyText.get(textKey);

    const isHaveKey = typeof keyIndex === 'number';
    const isHaveText = typeof textIndex === 'number';

    const isHaveOnlyOne = !(isHaveKey && isHaveText);

    // имеется только ключ или текст --- кейс при первом рендере, в остальных случаях оба ключа имеются
    if (isHaveOnlyOne) {
      const existInd = keyIndex ?? textIndex;
      if (typeof existInd === 'undefined') {
        return;
      }

      const existKey = orderArrayForChanging[existInd];
      const correct = getCols({
        keyText,
        key: keyKey,
        text: textKey
      });

      replaceObj[id] = (arr) => {
        const ind = arr.findIndex((k) => k === existKey);
        arr.splice(ind, 1, ...correct);
      };

      return;
    }

    // ---------------------------- имеется и ключ, и текст
    const correctVersion = getCols({
      keyText,
      key: keyKey,
      text: textKey
    });

    const isShouldHaveOnlyOne = keyText === 'key' || keyText === 'text';
    if (isShouldHaveOnlyOne) {
      const keyForDelete = keyText === 'key' ? textKey : keyKey;
      const keyForSave = keyText === 'key' ? keyKey : textKey;

      deleteAndReplaceObj[id] = (arr) => {
        removeAllFromArray(arr, (item) => item === keyForSave);
        replaceAllFromArray(arr, (item) => item === keyForDelete, [keyForSave]);
      };

      return;
    }

    const minInd = Math.min(keyIndex, textIndex);
    const maxInd = Math.max(keyIndex, textIndex);

    const current = [
      orderArrayForChanging[minInd] as string,
      orderArrayForChanging[maxInd] as string
    ];
    const isAlreadyCorrect = correctVersion.every((el, i) => el === current[i]);

    const isSideBySide = maxInd - minInd <= 1;

    if (isSideBySide) {
      if (isAlreadyCorrect) {
        return;
      }
      const minValue = orderArrayForChanging[minInd] as string;
      const maxValue = orderArrayForChanging[maxInd] as string;

      swapObj[id] = (arr) => {
        arr[minInd] = maxValue as string;
        arr[maxInd] = minValue as string;
      };

      return;
    }
    const fromKey = orderArrayForChanging[maxInd];
    const toKey = orderArrayForChanging[minInd];

    moveObj[id] = (arr) => {
      const fromInd = arr.findIndex((k) => k === fromKey);
      const toInd = arr.findIndex((k) => k === toKey);

      const isHaveOnlyOne =
        typeof fromInd === 'undefined' || typeof toInd === 'undefined';

      if (isHaveOnlyOne) {
        return;
      }

      // example: [to, from] -  paste after to - (toInd + 1)
      if (isAlreadyCorrect) {
        arr.splice(toInd + 1, 0, arr.splice(fromInd, 1)[0] as string);
        return;
      }
      // example: [from, to] -  paste before to - (toInd)
      arr.splice(toInd, 0, arr.splice(fromInd, 1)[0] as string);
    };
  });

  Object.values(replaceObj).forEach((replaceFunc) => {
    replaceFunc(orderArrayForChanging);
  });
  Object.values(deleteAndReplaceObj).forEach((deleteAndReplaceFunc) => {
    deleteAndReplaceFunc(orderArrayForChanging);
  });
  Object.values(swapObj).forEach((swapFunc) => {
    swapFunc(orderArrayForChanging);
  });
  Object.values(moveObj).forEach((moveFunc) => {
    moveFunc(orderArrayForChanging);
  });
};

export const sortedInOrder = <T extends ObjectForExtending, V>({
  columnConfig,
  tableConfigDefaultOrder,
  selectingRowsIsActive,
  rowsGroupingIsActive,
  showRowInstruments,
  colsWithKeyTextMap,
  keyText
}: {
  columnConfig: readonly ColumnConfig<T, V>[];
  tableConfigDefaultOrder: string[] | undefined;
  selectingRowsIsActive: boolean;
  rowsGroupingIsActive: boolean;
  showRowInstruments: boolean;
  colsWithKeyTextMap: KeyTextMap;
  keyText: KeyText;
}) => {
  const resultOrder: string[] = [];

  // ----------------------- добавляем в начало очереди -----------------------
  if (selectingRowsIsActive) {
    resultOrder.push(CHECKBOX_COLUMN_KEY);
  }
  if (showRowInstruments) {
    resultOrder.push(ROW_I_COLUMN_KEY);
  }
  if (rowsGroupingIsActive) {
    resultOrder.push(KEY_GROUPED_COL);
  }

  // ---------------------------------------------------------------------------

  if (tableConfigDefaultOrder) {
    tableConfigDefaultOrder.forEach((key) => {
      if (
        key === CHECKBOX_COLUMN_KEY ||
        isRowInstrumentsColumn(key) ||
        key === KEY_GROUPED_COL
      ) {
        return;
      }
      const isCorrectColKey =
        columnConfig.find((c) => c.key === key) || colsWithKeyTextMap.has(key);

      if (!isCorrectColKey) {
        return;
      }

      resultOrder.push(key);
    });
  }

  columnConfig.forEach((col) => {
    const indexInResultOrder = resultOrder.findIndex((el) => el === col.key);
    const colInResultOrder = indexInResultOrder >= 0;

    if (colInResultOrder) {
      return;
    }

    resultOrder.push(col.key);
  });

  // keyText mutation -  после всех других обработок
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  updateOrderWithKeyText({
    keyText,
    orderArrayForChanging: resultOrder,
    colsWithKeyTextMap
  });

  // СТАРАЯ ЛОГИКА, КОГДА ROW_INSTRUMENTS был в конце
  // const setForRemovingDoubles = new Set(resultOrder);

  // // ----------------------- добавляем в конец очереди -----------------------
  // if (showRowInstruments) {
  //   // добавляем обязательно в конец
  //   setForRemovingDoubles.delete(ROW_I_COLUMN_KEY);
  //   setForRemovingDoubles.add(ROW_I_COLUMN_KEY);
  // }
  // // ---------------------------------------------------------------------------

  // const resultOrderWithoutDouble = Array.from(setForRemovingDoubles);
  const resultOrderWithoutDouble = orderWithUpdatedDefaultColsDeleteDuplicates({
    orderArrayForChanging: resultOrder
  });

  return resultOrderWithoutDouble;
};

/**
 * Изменение очереди по действиям происходят в другом месте пораньше чем вызов данной функции.
 * Данная функция работает уже с измененной очередью, но до того, как отрендерить пользователю измененную очередь.
 * Данная функция работает по принципу: "Так, эта колонка встала сюда, была ли она ключом-текстом? Если да, то нужно сделать корректировки"
 */
export function keyTextUpdateAfterReorder({
  colsWithKeyTextMap,
  sourceKey,
  targetKey,
  orderArrayForChanging: newColumnsOrder,
  keyText,
  sourceColumnOrderIndex,
  targetColumnOrderIndex
}: {
  sourceKey: string;
  targetKey: string;
  colsWithKeyTextMap: KeyTextMap;
  orderArrayForChanging: string[];
  keyText: KeyText;
  sourceColumnOrderIndex: number;
  targetColumnOrderIndex: number;
}) {
  const sourceIsKeyText = colsWithKeyTextMap.get(sourceKey);
  const targetIsKeyText = colsWithKeyTextMap.get(targetKey);

  if (!sourceIsKeyText && !targetIsKeyText) {
    return;
  }

  if (sourceIsKeyText && !targetIsKeyText) {
    const { keyKey, textKey } = sourceIsKeyText;

    const deleteKey = sourceKey === keyKey ? textKey : keyKey;

    // deleteSecondKey - удаляем, чтобы в нужном месте вставить и не было дублей.
    removeAllFromArray(newColumnsOrder, (k) => k === deleteKey);

    const pastedIndex = newColumnsOrder.findIndex((k) => k === sourceKey);
    const isPastedCorrect = pastedIndex !== -1;
    if (!isPastedCorrect) {
      return;
    }

    const correct = getCols({
      keyText,
      key: keyKey,
      text: textKey
    });

    newColumnsOrder.splice(pastedIndex, 1, ...correct);

    return;
  }

  if (!sourceIsKeyText && targetIsKeyText) {
    const { keyKey, textKey } = targetIsKeyText;
    const pastedFromLeftToRight =
      sourceColumnOrderIndex < targetColumnOrderIndex;

    // предполагаем, что в списке порядок keyText был правильным
    const correct = getCols({ keyText, key: keyKey, text: textKey });
    const isHaveOnlyKeyOrText = correct.length <= 1;

    if (isHaveOnlyKeyOrText) {
      return;
    }

    const pastedToFirst = targetKey === correct[0];
    const pastedIndex = newColumnsOrder.findIndex((k) => k === sourceKey);

    if (pastedFromLeftToRight) {
      // если вставленый элемен начал разделять ключ-текст
      if (pastedToFirst) {
        swapItemsByIndex(newColumnsOrder, pastedIndex, pastedIndex - 1);
        return;
      }
      if (!pastedToFirst) {
        // if (pastedToFirst) - все итак правильно встанет если попытались вставить на второй элемент из ключ-текст
      }
      return;
    }
    if (!pastedFromLeftToRight) {
      // if (pastedFromRightToLeft)
      // если вставленый элемен начал разделять ключ-текст
      // eslint-disable-next-line no-lonely-if
      if (pastedToFirst) {
        // if (pastedToFirst) - все итак правильно встанет если попытались вставить на первый элемент из ключ-текст
        return;
      }
      if (!pastedToFirst) {
        // if (pastedToSecond)
        swapItemsByIndex(newColumnsOrder, pastedIndex, pastedIndex + 1);
      }
      return;
    }

    return;
  }

  if (sourceIsKeyText && targetIsKeyText) {
    const { keyKey: sourceKeyKey, textKey: sourceTextKey } = sourceIsKeyText;
    const { keyKey: targetKeyKey, textKey: targetTextKey } = targetIsKeyText;

    const isSameKeyText = sourceKeyKey === targetKeyKey;
    const isSwappedKeyAndText = isSameKeyText;

    /* source и target - один и тот же keyText, нужно обратно поменять. 
        Так как изменение keyText не было, то и колонки не должны меняться местами. */
    if (isSwappedKeyAndText) {
      newColumnsOrder[sourceColumnOrderIndex] = sourceKey;
      newColumnsOrder[targetColumnOrderIndex] = targetKey;
      return;
    }
    /* если активирован одиночный режим:
        Например, один ключ поменялся с другим ключим, то ничего обратно не меняем.
        Колонки должны вести себя как обычные и меняться друг с другом. 
        Никаких последующих корректировок не надо делать */
    if (keyText === 'key' || keyText === 'text') {
      return;
    }

    // source - один keyText, target - другой keyText
    // ------- у source  удалить вторую часть ключа текста
    const deleteKey = sourceKey === sourceKeyKey ? sourceTextKey : sourceKeyKey;

    // deleteSecondKey
    removeAllFromArray(newColumnsOrder, (k) => k === deleteKey);
    // --------------------------------------------------------

    const pastedIndex = newColumnsOrder.findIndex((k) => k === sourceKey);
    const ifPastedCorrect = pastedIndex !== -1;

    if (!ifPastedCorrect) {
      return;
    }

    const correctSourceKeyText = getCols({
      keyText,
      key: sourceKeyKey,
      text: sourceTextKey
    });
    const correctTargetKeyText = getCols({
      keyText,
      key: targetKeyKey,
      text: targetTextKey
    });

    const pastedFromLeftToRight =
      sourceColumnOrderIndex < targetColumnOrderIndex;

    const pastedToFirst = targetKey === correctTargetKeyText[0];

    if (pastedFromLeftToRight) {
      if (pastedToFirst) {
        swapItemsByIndex(newColumnsOrder, pastedIndex, pastedIndex - 1);

        newColumnsOrder.splice(pastedIndex - 1, 1, ...correctSourceKeyText);
        return;
      }
      if (!pastedToFirst) {
        newColumnsOrder.splice(pastedIndex, 1, ...correctSourceKeyText);
      }
      return;
    }
    if (!pastedFromLeftToRight) {
      // eslint-disable-next-line no-lonely-if
      if (pastedToFirst) {
        newColumnsOrder.splice(pastedIndex, 1, ...correctSourceKeyText);
        return;
      }
      if (!pastedToFirst) {
        swapItemsByIndex(newColumnsOrder, pastedIndex, pastedIndex + 1);

        newColumnsOrder.splice(pastedIndex + 1, 1, ...correctSourceKeyText);
      }
    }
  }
}

export function getKeyTextCorrectedBorderPlacement({
  colsWithKeyTextMap,
  keyText,
  currentId,
  borderPlacement,
  tableConfigKeyTextBoolean
}: {
  colsWithKeyTextMap: KeyTextMap;
  keyText: KeyText;
  currentId: string;
  borderPlacement: 'bottom' | 'top';
  tableConfigKeyTextBoolean: boolean;
}): 'bottom' | 'top' | null {
  if (!tableConfigKeyTextBoolean) {
    return null;
  }

  const currentIsKeyText = colsWithKeyTextMap.get(currentId);
  if (!currentIsKeyText) {
    return null;
  }
  if (keyText === 'key' || keyText === 'text') {
    return null;
  }
  const draggingIsHaveLowerIndex = borderPlacement === 'bottom';
  const { keyKey, textKey } = currentIsKeyText;

  const currentKeyTextPlacement = getCols({
    keyText,
    key: keyKey,
    text: textKey
  });

  if (draggingIsHaveLowerIndex) {
    if (currentId === currentKeyTextPlacement[0]) {
      return 'top';
    }
    return null;
  }
  if (currentId === currentKeyTextPlacement[1]) {
    return 'bottom';
  }
  return null;
}
export function getKeyTextCorrectedIsOvered({
  colsWithKeyTextMap,
  draggingId,
  currentIsDraggingOver,
  currentId,
  tableConfigKeyTextBoolean
}: {
  colsWithKeyTextMap: KeyTextMap;
  draggingId: string;
  currentId: string;
  currentIsDraggingOver: boolean;
  tableConfigKeyTextBoolean: boolean;
}): false | null {
  if (!tableConfigKeyTextBoolean) {
    return null;
  }

  if (!currentIsDraggingOver) {
    return null;
  }

  const draggingIsKeyText = colsWithKeyTextMap.get(draggingId);
  const currentIsKeyText = colsWithKeyTextMap.get(currentId);
  if (!currentIsKeyText || !draggingIsKeyText) {
    return null;
  }
  const { keyKey: currentKeyKey } = currentIsKeyText;
  const { keyKey: draggingKeyKey } = draggingIsKeyText;

  const isKeyAndTextOfOneColumn = currentKeyKey === draggingKeyKey;

  if (isKeyAndTextOfOneColumn) {
    return false;
  }
  return null;
}
