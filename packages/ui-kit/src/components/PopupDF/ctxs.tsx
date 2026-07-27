import { createContext, useContext } from 'react';

import type { PopupDFSize } from './types';

type PopupDFContextValue = {
  onClose: (() => void) | null;
  size: PopupDFSize;
};

export const PopupDFContext = createContext<PopupDFContextValue>({
  onClose: null,
  size: 'm'
});

export const usePopupDFContext = () => useContext(PopupDFContext);
