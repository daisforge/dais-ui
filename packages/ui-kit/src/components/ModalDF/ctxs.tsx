import { createContext, ReactNode } from 'react';

export const FullScreenedCtx = createContext<boolean | null>(false);
export const FullScreenedToggleCtx = createContext<(() => void) | null>(null);
export const OnCloseCtx = createContext<(() => void) | null>(null);

export const CtxsProviders = ({
  children,
  fullScreened,
  toggleFullScreen,
  onClose,
}: {
  children: ReactNode;

  fullScreened: boolean | null;
  toggleFullScreen: () => void;
  onClose: (() => void) | undefined;
}) => (
  <OnCloseCtx.Provider value={onClose ?? null}>
    {/* fullScreenCtxs */}
    <FullScreenedCtx.Provider value={fullScreened}>
      <FullScreenedToggleCtx.Provider value={toggleFullScreen}>
        {children}
      </FullScreenedToggleCtx.Provider>
    </FullScreenedCtx.Provider>
  </OnCloseCtx.Provider>
);
