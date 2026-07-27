import React, { FC, PropsWithChildren } from 'react';

import { EventBusContext } from './context';
import { EventBus } from './types';

interface IEventBusProviderProps extends PropsWithChildren {
  busInstance: EventBus;
}

export const EventBusProvider: FC<IEventBusProviderProps> = ({
  children,
  busInstance
}) => (
  <EventBusContext.Provider value={busInstance}>
    {children}
  </EventBusContext.Provider>
);
