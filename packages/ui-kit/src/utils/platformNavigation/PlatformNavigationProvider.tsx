import React, { FC, PropsWithChildren } from 'react';

import { PlatformNavigationContext } from './context';
import type { PlatformNavigation } from './types';

interface IPlatformNavigationProviderProps extends PropsWithChildren {
  navigation: PlatformNavigation;
}

export const PlatformNavigationProvider: FC<
  IPlatformNavigationProviderProps
> = ({ children, navigation }) => (
  <PlatformNavigationContext.Provider value={navigation}>
    {children}
  </PlatformNavigationContext.Provider>
);
