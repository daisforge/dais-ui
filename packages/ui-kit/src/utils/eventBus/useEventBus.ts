import { useContext } from 'react';

import { EventBusContext } from './context';

export const useEventBus = () => {
  const eventBus = useContext(EventBusContext);
  if (!eventBus) {
    throw new Error(
      'Ошибка. Приложение необходимо обернуть в EventBusProvider'
    );
  }
  return eventBus;
};
