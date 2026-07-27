import { createContext, useContext } from 'react';

export const WidgetContainerTypeContext = createContext<
  'splitView' | 'modal' | 'default'
>('default');

export const useWidgetContainerTypeContext = () => {
  const ctx = useContext(WidgetContainerTypeContext);
  if (!ctx) throw new Error('useContextMenu used outside Provider');
  return ctx;
};
