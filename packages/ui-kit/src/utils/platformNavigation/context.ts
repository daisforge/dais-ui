import { createContext } from 'react';

import type { PlatformNavigation } from './types';

type TPlatformNavigationContext = PlatformNavigation | null;

const PLATFORM_NAVIGATION_CONTEXT_DEFAULT_VALUES: TPlatformNavigationContext =
  null;

export const PlatformNavigationContext =
  createContext<TPlatformNavigationContext>(
    PLATFORM_NAVIGATION_CONTEXT_DEFAULT_VALUES,
  );
