import {
  deleteDetailPanelServiceKeys,
  isDetailPanelRow,
  rowIsHaveDetailPanel,
} from '../feature-row-detail/handlers';
import {
  deleteSubRowKeys,
  deleteTreeFlattenKeys,
  isSubRow,
  isTreeFlattenRow,
} from '../feature-tree/handlers';
import { ObjectForExtending } from '../types';

/**
 * @returns возвращает новую строку (объект типа Row) без сервисных
 */
export function hideRowServiceKeysHandler<Row extends ObjectForExtending>(
  r: Row,
) {
  // detail panel checking 1
  if (isDetailPanelRow(r)) {
    return { ...r.SERVICE_ROW_DATA };
  }
  // важно мутировать копию, поскольку для других внутренних хендлеров и тд, нужны строки с сервисными данными
  const clearedRow = { ...r };

  if (isTreeFlattenRow(clearedRow)) {
    deleteTreeFlattenKeys(clearedRow);
  }
  if (isSubRow(clearedRow)) {
    deleteSubRowKeys(clearedRow);
  }

  // detail panel checking 2
  if (rowIsHaveDetailPanel(clearedRow)) {
    deleteDetailPanelServiceKeys(clearedRow);
  }

  return clearedRow;
}
