import type { ColumnConfig, ObjectForExtending } from '../types';
import type { ColumnConfigInternal } from '../types/column-config-internal.type';

export const isServiceEditableColumn = <
  RowType extends ObjectForExtending,
  SummaryRowType,
>(
  col: ColumnConfig<RowType, SummaryRowType>,
): col is ColumnConfigInternal<RowType, SummaryRowType> => {
  const colX = col as ColumnConfigInternal<RowType, SummaryRowType>;
  return typeof colX?.editable === 'boolean' && !!colX.editable;
};
export const isEditableCell = <
  RowType extends ObjectForExtending,
  SummaryRowType,
>(
  editingCellConfig: ColumnConfig<RowType, SummaryRowType>['editingCell'],
  row: RowType,
  tableConfigRowEditable: ((r: RowType) => boolean) | undefined,
) => {
  if (!editingCellConfig) {
    return false;
  }

  if (editingCellConfig.editable === undefined) {
    // конфигурация колонки более приоритетная, чем конфигурации таблицы
    if (tableConfigRowEditable) {
      return tableConfigRowEditable(row);
    }

    return true; // true (проверка выше) - смотрим только на наличие editingCellConfig
  }

  if (typeof editingCellConfig.editable === 'boolean') {
    return editingCellConfig.editable;
  }

  return editingCellConfig.editable(row);
};
