import { useCallback, useMemo, useState } from 'react';

import { KeyTextMap } from '../feature-key-text/types';
import {
  isPinningDisabled,
  PinningActionCtx,
  unpinColumns,
} from '../widgets/control-block/pinning-menu/pinning-actions';
import { expandKeyTextKeys } from './expandKeyTextKeys';
import { ColumnsControlConfig } from './types';

export const useColumnsControl = ({
  tableConfigColumnsControl,
  tableConfigKeyTextBoolean,
  colsWithKeyTextMap,
  columnsGroupingIsActive,
}: {
  tableConfigColumnsControl: ColumnsControlConfig | undefined;
  columnsGroupingIsActive: boolean;
  tableConfigKeyTextBoolean: boolean;
  colsWithKeyTextMap: KeyTextMap;
}) => {
  const columnsControlEnable = !!tableConfigColumnsControl?.enable;

  const columnsControlConfig: ColumnsControlConfig = {
    ...{
      enable: columnsControlEnable,
      reorderingAside: columnsControlEnable,
      reorderingHeader: columnsControlEnable,
      pinning: columnsControlEnable && !columnsGroupingIsActive,
      hiding: columnsControlEnable,
    },
    ...tableConfigColumnsControl,
  };

  const columnsControlInControlBlockBoolean =
    columnsControlEnable &&
    (columnsControlConfig.hiding ||
      columnsControlConfig.pinning ||
      columnsControlConfig.reorderingAside);

  const reorderInHeaderIsActive =
    columnsControlEnable && !!columnsControlConfig.reorderingHeader;

  const reorderIsActive =
    columnsControlEnable &&
    !!(
      columnsControlConfig.reorderingHeader ||
      columnsControlConfig.reorderingAside
    );

  const [pinnedCols, setPinnedCols] = useState(() =>
    expandKeyTextKeys(
      (columnsControlConfig.pinning &&
        tableConfigColumnsControl?.pinnedDefault) ||
        [],
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    ),
  );

  const innerHiddenState = useState(() =>
    expandKeyTextKeys(
      (columnsControlConfig.hiding &&
        tableConfigColumnsControl?.hiddenDefault) ||
        [],
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    ),
  );
  // Внешнее состояние читаем всегда, когда оно передано: флаг hiding отвечает
  // только за элементы интерфейса (свитчи, индикатор).
  const [hiddenColsRaw, setHiddenCols] =
    tableConfigColumnsControl?.hiddenState ?? innerHiddenState;
  // Снаружи могут прийти исходные ключи столбцов с парой key/text. Для
  // внутреннего состояния (уже развёрнутого) вернётся та же ссылка.
  const hiddenCols = useMemo(
    () =>
      expandKeyTextKeys(
        hiddenColsRaw,
        colsWithKeyTextMap,
        tableConfigKeyTextBoolean,
      ),
    [hiddenColsRaw, colsWithKeyTextMap, tableConfigKeyTextBoolean],
  );

  const [openControlModal, setOpenControlModal] = useState(false);

  // Контекст для чистых pin/unpin-хелперов (учёт disablePinning и пар key/text).
  // Тот же набор полей, что собирает use-feature-array для меню закрепления.
  const pinningActionCtx = useMemo<PinningActionCtx>(
    () => ({
      disablePinningSet: new Set(columnsControlConfig.disablePinning ?? []),
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    }),
    [
      columnsControlConfig.disablePinning,
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    ],
  );

  // Открепление одной колонки по клику на пин-иконку в шапке.
  const onUnpinColumn = useCallback(
    (key: string) => {
      setPinnedCols((prev) => unpinColumns(prev, [key], pinningActionCtx));
    },
    [pinningActionCtx],
  );

  // Закрепление колонки менять нельзя (напр. запинена по умолчанию и в
  // disablePinning) — в шапке рисуем индикатор без кнопки/действия.
  const getColumnPinningDisabled = useCallback(
    (key: string) => isPinningDisabled(key, pinningActionCtx),
    [pinningActionCtx],
  );

  return {
    columnsControlEnable,
    columnsControlConfig,
    columnsControlInControlBlockBoolean,
    reorderInHeaderIsActive,
    reorderIsActive,
    pinnedCols,
    setPinnedCols,
    hiddenCols,
    setHiddenCols,
    openControlModal,
    setOpenControlModal,
    colsWithKeyTextMap,
    onUnpinColumn,
    getColumnPinningDisabled,
  };
};
