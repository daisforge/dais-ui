import { getKeyTextCol } from '../../feature-key-text';
import { KeyText, KeyTextMap, KeyTextObj } from '../../feature-key-text/types';
import { ColumnConfig, ObjectForExtending } from '../../types';
import { ColumnsControlConfig } from '../types';

export const getColumnLabel = <RowType extends ObjectForExtending, SummaryRow>({
  columnsControlConfig,
  key,
  isHiddenColumn,
  isPinnedColumn,
  columnsConfigMap,
  isKeyText,
  keyText,
  tableConfigKeyTextBoolean
}: {
  columnsControlConfig: ColumnsControlConfig | undefined;
  key: string;
  isHiddenColumn: boolean;
  isPinnedColumn: boolean;
  columnsConfigMap: Map<string, ColumnConfig<RowType, SummaryRow>>;
  isKeyText: KeyTextObj | undefined;
  keyText: KeyText;
  tableConfigKeyTextBoolean: boolean;
}) => {
  const nameFromColumnsControlConfig =
    columnsControlConfig?.columnsLabel?.[key];

  if (nameFromColumnsControlConfig) {
    if (typeof nameFromColumnsControlConfig === 'function') {
      return nameFromColumnsControlConfig(isHiddenColumn, isPinnedColumn);
    }
    return nameFromColumnsControlConfig;
  }

  let currentCol = columnsConfigMap.get(key);

  if (tableConfigKeyTextBoolean && isKeyText) {
    const { keyKey, textKey } = isKeyText;
    if (key === keyKey) {
      const parentKey = textKey;
      const colWithKeyText = columnsConfigMap.get(parentKey);
      const keyCol = colWithKeyText?.keyText;
      if (keyCol) {
        const keyColAfterCheck = getKeyTextCol(keyCol, keyText) as ColumnConfig<
          RowType,
          SummaryRow
        >;

        currentCol = keyColAfterCheck;
      }
    }
  }

  const nameFromColumnsConfig = currentCol?.name;
  const nameAsString = currentCol?.nameAsString;

  return (
    (typeof nameFromColumnsConfig === 'string' && nameFromColumnsConfig) ||
    (typeof nameAsString === 'string' && nameAsString) ||
    key
  );
};

export const correctedDisabled = (
  disabledsSet: Set<string>,
  {
    currentKey,
    colsWithKeyTextMap,
    tableConfigKeyTextBoolean
  }: {
    currentKey: string;
    colsWithKeyTextMap: KeyTextMap;
    tableConfigKeyTextBoolean: boolean;
  }
) => {
  if (!tableConfigKeyTextBoolean) {
    return null;
  }
  const isKeyTextCol = colsWithKeyTextMap.get(currentKey);
  if (!isKeyTextCol) {
    return null;
  }
  const { keyKey, textKey } = isKeyTextCol;

  if (disabledsSet.has(keyKey) || disabledsSet.has(textKey)) {
    return true;
  }
  return null;
};
