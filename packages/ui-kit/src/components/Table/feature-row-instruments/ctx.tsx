import React, { createContext, PropsWithChildren, useContext } from 'react';

import { ObjectForExtending } from '../types';
import { RowInstrumentsType } from './types';

const RowInstrumentsCtx =
  createContext<RowInstrumentsType<ObjectForExtending> | null>(null);

export const useRowInstrumentsCtx = () => {
  const ctx = useContext(RowInstrumentsCtx);
  if (typeof ctx === 'undefined') {
    throw new Error('useRowInstrumentsCtx должен вызываться внутри контекста');
  }
  return ctx;
};

export const RowInstrumentsCtxProvider = <RowType extends ObjectForExtending>({
  children,
  value,
}: PropsWithChildren & { value: RowInstrumentsType<RowType> | null }) => (
  <RowInstrumentsCtx.Provider
    value={value as RowInstrumentsType<ObjectForExtending> | null}
  >
    {children}
  </RowInstrumentsCtx.Provider>
);
