import { createContext } from 'react';

import { EventBus } from './types';

type TEventBusContext = EventBus | null;

const EVENT_BUS_CONTEXT_DEFAULT_VALUES: TEventBusContext = null;

export const EventBusContext = createContext<TEventBusContext>(
  EVENT_BUS_CONTEXT_DEFAULT_VALUES,
);
