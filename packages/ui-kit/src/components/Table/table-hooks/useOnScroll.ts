import React, { useMemo } from 'react';

import { infinityscrollThrottle } from '../feature-infinity-scroll/infinity-scroll-throttle';
import { Maybe } from '../types';

export const useOnScroll = ({
  onScrollExternal,
  infinityScrollHandler,
  isHaveActiveInfinityScroll,
  onScrollInternal
}: {
  onScrollExternal: Maybe<(event: React.UIEvent<HTMLDivElement>) => void>;
  infinityScrollHandler: (event: React.UIEvent<HTMLDivElement>) => void;
  isHaveActiveInfinityScroll: boolean;
  /** Внутренние обработчики скролла (напр. закрытие контекстного меню) */
  onScrollInternal?: (event: React.UIEvent<HTMLDivElement>) => void;
}) => {
  const onScroll = useMemo(() => {
    const throttledInfinityScrollHandler = isHaveActiveInfinityScroll
      ? infinityscrollThrottle(infinityScrollHandler, 200)[0]
      : null;

    return (event: React.UIEvent<HTMLDivElement>) => {
      onScrollInternal?.(event);
      throttledInfinityScrollHandler?.(event);
      onScrollExternal?.(event);
    };
  }, [
    infinityScrollHandler,
    isHaveActiveInfinityScroll,
    onScrollExternal,
    onScrollInternal
  ]);
  return { onScroll };
};
