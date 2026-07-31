import { createContext, useContext } from 'react';

import type { PopoverDFSize } from './types';

type PopoverDFContextValue = {
  onClose: (() => void) | null;
  size: PopoverDFSize;
};

export const PopoverDFContext = createContext<PopoverDFContextValue>({
  onClose: null,
  size: 'm',
});

export const usePopoverDFContext = () => useContext(PopoverDFContext);
