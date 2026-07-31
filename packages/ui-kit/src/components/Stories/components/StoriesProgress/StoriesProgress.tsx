import {
  onDarkSurfaceTransparentDeep,
  onDarkSurfaceTransparentTertiary,
  onLightSurfaceTransparentDeep,
  onLightSurfaceTransparentTertiary
} from '@ui-kit/tokens/color';
import { useActiveTheme } from '@ui-kit/utils/hooks';
import { useRef } from 'react';

import { useTimeline } from '../../hooks/useTimeline';
import { useStoriesContext } from '../../store/StoriesContext';
import { useStoriesSnapshot } from '../../store/useStoriesSnapshot';
import { storiesClassNames } from '../../Stories.constants';
import {
  StyledFill,
  StyledItem,
  StyledProgress
} from './StoriesProgress.styled';

export interface StoriesProgressProps {
  /** Ассет текущего сегмента загружен — иначе таймер стоит (крутится спиннер). */
  isReady: boolean;
}

export const StoriesProgress = ({
  isReady
}: StoriesProgressProps): JSX.Element => {
  const { store, controller, groups, defaultDuration, mode } =
    useStoriesContext();
  const { groupIndex, slideIndex, isPlaying, isOpen } =
    useStoriesSnapshot(store);
  const activeTheme = useActiveTheme();

  // onDark*/onLight* не флипаются сами — выбираем пару по активной теме.
  const resolvedMode = mode ?? activeTheme;
  const useOnLight = resolvedMode === 'dark';
  const trackColor = useOnLight
    ? onLightSurfaceTransparentTertiary
    : onDarkSurfaceTransparentTertiary;
  const fillColor = useOnLight
    ? onLightSurfaceTransparentDeep
    : onDarkSurfaceTransparentDeep;

  const group = groups[groupIndex];
  const slides = group?.slides ?? [];
  const fillRef = useRef<HTMLSpanElement>(null);

  const duration =
    slides[slideIndex]?.duration ?? group?.defaultDuration ?? defaultDuration;

  useTimeline({
    fillRef,
    active: isOpen,
    duration,
    isPlaying,
    isReady,
    resetKey: `${groupIndex}-${slideIndex}`,
    onComplete: controller.next
  });

  return (
    <StyledProgress className={storiesClassNames.progress}>
      {slides.map((slide, index) => {
        const key = slide.id ?? `${groupIndex}-${index}`;
        const isPast = index < slideIndex;
        const isCurrent = index === slideIndex;

        return (
          <StyledItem
            key={key}
            className={storiesClassNames.progressItem}
            $bg={isPast ? fillColor : trackColor}
          >
            {isCurrent ? <StyledFill ref={fillRef} $color={fillColor} /> : null}
          </StyledItem>
        );
      })}
    </StyledProgress>
  );
};
