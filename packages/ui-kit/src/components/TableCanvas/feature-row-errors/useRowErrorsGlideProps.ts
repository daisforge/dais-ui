import { useMemo } from 'react';

import { hideRowServiceKeysHandler } from '../data/hideServiceKeysHanlder';
import { SKELETON_ROW_KEY } from '../feature-infinity-scroll';
import { getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import type { ObjectForExtending } from '../types';
import type { RowErrorsConfig } from './types';

/**
 * Пропсы TableGlide для ошибок строки.
 *
 * `isErrorRow` оборачивает пользовательскую функцию так же, как `isErrorCell`
 * в useColumns: пропускает строки-скелетоны, передаёт уровень вложенности и
 * строку без служебных ключей. Без режима редактирования (или во время
 * загрузки) ошибок нет, поэтому оба пропса пустые.
 */
export const useRowErrorsGlideProps = <RowType extends ObjectForExtending>({
  rowErrorsConfig,
  editModeEnabled,
  isLoadingTable,
}: {
  rowErrorsConfig: RowErrorsConfig<RowType> | undefined;
  editModeEnabled: boolean;
  isLoadingTable: boolean;
}) => {
  const errorsActive = !!rowErrorsConfig && editModeEnabled && !isLoadingTable;
  const isErrorRowExternal = rowErrorsConfig?.isErrorRow;
  const collectRowErrors =
    errorsActive && rowErrorsConfig.indicatorColumn !== false;

  const isErrorRow = useMemo(() => {
    if (!errorsActive || !isErrorRowExternal) {
      return undefined;
    }
    return (row: RowType) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((row as any)?.[SKELETON_ROW_KEY]) {
        return false;
      }
      const { lvl } = getTreeIdAndLvlOfRow(row);
      return isErrorRowExternal(hideRowServiceKeysHandler(row), lvl);
    };
  }, [errorsActive, isErrorRowExternal]);

  return { isErrorRow, collectRowErrors };
};
