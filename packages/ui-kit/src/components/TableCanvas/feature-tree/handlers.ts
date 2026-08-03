import { KeyText } from '../feature-key-text/types';
import { ObjectForExtending } from '../types/utils.type';
import {
  SUBROWS_KEY,
  TREE_FLATTEN_KEYS,
  TREE_ID_KEY,
  TREE_LVL_KEY,
} from './constants';

export function getLvlFromTreeId(treeId: string | undefined) {
  return !treeId ? 0 : treeId.split(`.${SUBROWS_KEY}.`).length - 1;
}

export function getTreeIdAndLvlOfRow<RowType extends ObjectForExtending>(
  row: RowType,
) {
  const treeId = (row as { [TREE_ID_KEY]?: string })?.[TREE_ID_KEY] as
    | string
    | undefined;

  // Кеш lvl записывается в useFlattenedRows при рекурсивном обходе дерева.
  // Для root-строк (без treeId) кеша нет, возвращаем 0 без split.
  const cachedLvl = (row as { [TREE_LVL_KEY]?: number })?.[TREE_LVL_KEY];
  const lvl =
    typeof cachedLvl === 'number' ? cachedLvl : getLvlFromTreeId(treeId);

  return { treeId, lvl };
}

export function getHasArrow(
  isColumnWithArrow:
    | boolean
    | ((props: { keyText: KeyText }) => boolean)
    | undefined,
  keyText: KeyText,
) {
  if (!isColumnWithArrow) {
    return false;
  }
  if (typeof isColumnWithArrow === 'boolean') {
    return isColumnWithArrow;
  }
  return isColumnWithArrow({ keyText });
}
// deleteSubRow - удаление строк - может понадобится для будущих разработок

// // function deleteSubRow(rows: Row[], id: string): Row[] {
// //     const row = rows.find((r) => r.id === id);
// //     if (row?.parentId === undefined) return rows;

// //     // Remove sub row from flattened rows.
// //     const newRows = rows.filter((r) => r.id !== id) as any;

// //     // Remove sub row from parent row.
// //     const parentRowIndex = newRows.findIndex(
// //         (r: { id: string | undefined }) => r.id === row.parentId
// //     );
// //     const { children } = newRows[parentRowIndex];
// //     if (children) {
// //         const newChildren = children.filter(
// //             (sr: { id: string }) => sr.id !== id
// //         );
// //         newRows[parentRowIndex] = {
// //             ...newRows[parentRowIndex],
// //             children: newChildren,
// //         };
// //     }

// //     return newRows;
// // }
export const isTreeFlattenRow = <Row extends ObjectForExtending>(r: Row) =>
  typeof r?.[TREE_FLATTEN_KEYS.level] !== 'undefined' ||
  typeof r?.[TREE_FLATTEN_KEYS.customProps] !== 'undefined';

export const isSubRow = <Row extends ObjectForExtending>(r: Row) =>
  [TREE_ID_KEY].some((key) => typeof r?.[key] !== 'undefined');
export const deleteSubRowKeys = <Row extends ObjectForExtending>(r: Row) => {
  [TREE_ID_KEY, TREE_LVL_KEY].forEach((key) => {
    delete r[key];
  });
};
export const deleteTreeFlattenKeys = <Row extends ObjectForExtending>(
  r: Row,
) => {
  Object.values(TREE_FLATTEN_KEYS).forEach((key) => {
    delete r[key];
  });
};
