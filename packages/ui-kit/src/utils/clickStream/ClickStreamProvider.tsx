import React, { FC, PropsWithChildren } from 'react';

import { ClickStreamContext } from './context';
import { ClickStream } from './types';

interface IClickStreamProviderProps extends PropsWithChildren {
  clickStreamInstance: ClickStream;
}

export const ClickStreamProvider: FC<IClickStreamProviderProps> = ({
  children,
  clickStreamInstance,
}) => (
  <ClickStreamContext.Provider value={clickStreamInstance}>
    {children}
  </ClickStreamContext.Provider>
);
