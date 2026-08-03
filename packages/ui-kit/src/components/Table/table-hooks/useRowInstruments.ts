import { useState } from 'react';

import { RowInstrumentsType } from '../feature-row-instruments/types';
import { ObjectForExtending } from '../types';

export const useRowInstruments = <
  RowType extends ObjectForExtending,
>(rowInstrumentsConfig?: {
  getRowDropdownConfig?: RowInstrumentsType<RowType>;
  defaultOpened?: boolean;
  openedState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) => {
  const [internalShowRowInstruments, setInternalShowRowInstruments] = useState(
    rowInstrumentsConfig?.defaultOpened ?? false,
  );

  const showRowInstruments =
    rowInstrumentsConfig?.openedState?.[0] !== undefined
      ? rowInstrumentsConfig.openedState[0]
      : internalShowRowInstruments;

  const setShowRowInstruments: React.Dispatch<React.SetStateAction<boolean>> = (
    value,
  ) => {
    if (rowInstrumentsConfig?.openedState?.[1]) {
      return rowInstrumentsConfig.openedState?.[1](value);
    }
    return setInternalShowRowInstruments(value);
  };

  return {
    showRowInstruments,
    setShowRowInstruments,
    getRowDropdownConfig: rowInstrumentsConfig?.getRowDropdownConfig ?? null,
  };
};
