import { useState } from 'react';

import { KeyTextMap } from '../feature-key-text/types';
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

  const [pinnedCols, setPinnedCols] = useState(() => {
    const def =
      (columnsControlConfig.pinning &&
        tableConfigColumnsControl?.pinnedDefault) ||
      [];

    const res = def.reduce((acc, val) => {
      if (tableConfigKeyTextBoolean) {
        const isKeyText = colsWithKeyTextMap.get(val);
        if (isKeyText) {
          acc.push(...Object.values(isKeyText));
          return acc;
        }
      }
      acc.push(val);
      return acc;
    }, [] as string[]);

    return res;
  });

  const [hiddenCols, setHiddenCols] = useState(() => {
    const def =
      (columnsControlConfig.hiding &&
        tableConfigColumnsControl?.hiddenDefault) ||
      [];

    const res = def.reduce((acc, val) => {
      if (tableConfigKeyTextBoolean) {
        const isKeyText = colsWithKeyTextMap.get(val);
        if (isKeyText) {
          acc.push(...Object.values(isKeyText));
          return acc;
        }
      }
      acc.push(val);
      return acc;
    }, [] as string[]);

    return res;
  });

  const [openControlModal, setOpenControlModal] = useState(false);

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
  };
};
