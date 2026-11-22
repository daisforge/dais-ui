import { useContext } from 'react';

import { PlatformNavigationContext } from './context';

export const usePlatformNavigation = () => {
  const navigation = useContext(PlatformNavigationContext);
  if (!navigation) {
    throw new Error(
      'Ошибка. Приложение необходимо обернуть в PlatformNavigationProvider',
    );
  }
  return navigation;
};
