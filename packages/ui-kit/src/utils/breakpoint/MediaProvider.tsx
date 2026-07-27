import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { DEFAULT_BREAKPOINT_CONFIG } from './const';
import { MediaProviderProps } from './types';
import { mediaUtils } from './utils';

export const MediaProvider: FC<MediaProviderProps> = ({
  breakpointConfig = DEFAULT_BREAKPOINT_CONFIG,
  children
}) => (
  <ThemeProvider
    theme={{
      media: mediaUtils(breakpointConfig)
    }}
  >
    {children}
  </ThemeProvider>
);
