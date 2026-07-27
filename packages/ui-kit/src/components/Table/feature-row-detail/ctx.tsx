import React, { createContext, PropsWithChildren, useContext } from 'react';

import { ObjectForExtending } from '../types';
import { HandleExpandDetail } from './types';

export const RowDetailHandlerContext = createContext<null | {
  handleExpandRowDetail: HandleExpandDetail<ObjectForExtending>;
  expandButtonColumnKey: string | undefined;
}>(null);

export const RowDetailHandlerContextProvider = <
  RowType extends ObjectForExtending
>({
  children,
  value
}: PropsWithChildren & {
  value: {
    handleExpandRowDetail: HandleExpandDetail<RowType>;
    expandButtonColumnKey: string | undefined;
  };
}) => (
  <RowDetailHandlerContext.Provider
    value={
      value as {
        handleExpandRowDetail: HandleExpandDetail<ObjectForExtending>;
        expandButtonColumnKey: string | undefined;
      }
    }
  >
    {children}
  </RowDetailHandlerContext.Provider>
);

export const useRowDetailHandlerContext = () => {
  const ctx = useContext(RowDetailHandlerContext);
  if (!ctx) {
    throw new Error(
      'useSelectingCheckBoxCellContext must be used within DataGrid cells'
    );
  }
  return ctx;
};
