import { useContext } from 'react';

import { ClickStreamContext } from './context';

export const useClickStream = () => {
  const clickStream = useContext(ClickStreamContext);
  if (!clickStream) {
    throw new Error(
      'Ошибка. Приложение необходимо обернуть в ClickStreamProvider',
    );
  }
  return clickStream;
};
