import { preloadImage } from '@ui-kit/utils/hooks';
import { useCallback, useRef } from 'react';

import { StoriesGroupMeta } from '../Stories.types';

/**
 * Возвращает `preloadGroup(index)` — прогревает все ассеты группы и первый
 * ассет следующей за ней. Вызывается вьюером при открытии/смене группы:
 * пока играет текущий сегмент, остальные подгружаются в фоне, а по завершении
 * группы следующая уже частично готова. Дедупликация — на уровне кэша preloadImage.
 */
export const useAssetPreloader = (
  groups: StoriesGroupMeta[],
): ((index: number) => void) => {
  const groupsRef = useRef(groups);
  groupsRef.current = groups;

  return useCallback((index: number) => {
    const group = groupsRef.current[index];
    if (!group) return;

    group.slides.forEach((slide) => preloadImage(slide.src));

    const nextGroup = groupsRef.current[index + 1];
    if (nextGroup?.slides[0]) {
      preloadImage(nextGroup.slides[0].src);
    }
  }, []);
};
