import { IconButton } from '@ui-kit/components/IconButton';
import {
  IconClose,
  IconDisclosureLeftOutline,
  IconDisclosureRightOutline,
} from '@ui-kit/icons';
import {
  MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { useStoriesContext } from '../../store/StoriesContext';
import { useStoriesSnapshot } from '../../store/useStoriesSnapshot';
import { storiesClassNames } from '../../Stories.constants';
import { StoriesBanner } from '../StoriesBanner';
import {
  StyledArrow,
  StyledClose,
  StyledOverlay,
  StyledRoot,
  StyledStage,
} from './StoriesViewer.styled';
import { StoriesViewTransitionStyle } from './StoriesViewTransitionStyle';

export const StoriesViewer = (): JSX.Element | null => {
  const {
    store,
    controller,
    groups,
    overlay,
    overlayColor,
    zIndex,
    groupTransition,
    arrows,
    hideDisabledArrows,
    preloadGroup,
  } = useStoriesContext();
  const { isOpen, groupIndex, slideIndex } = useStoriesSnapshot(store);
  const [mounted, setMounted] = useState(isOpen);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setMounted(true);
  }, [isOpen]);

  // Переносим фокус внутрь вьюера при открытии: Escape ловится, а триггер не остаётся выделенным.
  useEffect(() => {
    if (isOpen) stageRef.current?.focus();
  }, [isOpen]);

  // Предзагрузка ассетов активной группы (+ первый следующей) при открытии/смене группы.
  useEffect(() => {
    if (isOpen) preloadGroup(groupIndex);
  }, [isOpen, groupIndex, preloadGroup]);

  const closing = mounted && !isOpen;

  const handleAnimationEnd = useCallback(() => {
    if (closing) setMounted(false);
  }, [closing]);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  // Навигация сквозная: сначала сегменты внутри группы, на границе — соседняя группа.
  const slidesInGroup = groups[groupIndex]?.slides.length ?? 0;
  const canPrev = groupIndex > 0 || slideIndex > 0;
  const canNext =
    slideIndex + 1 < slidesInGroup || groupIndex + 1 < groups.length;
  const totalSlides = groups.reduce(
    (sum, group) => sum + group.slides.length,
    0,
  );
  const showArrows =
    arrows === 'always' || (arrows === 'auto' && totalSlides > 1);
  // Прятать недоступную стрелку (по умолчанию) либо показывать её disabled.
  const showPrev = showArrows && (canPrev || !hideDisabledArrows);
  const showNext = showArrows && (canNext || !hideDisabledArrows);

  // Клики по стрелкам/крестику не должны закрывать вьюер (включая disabled-стрелки).
  const stopClick = (event: ReactMouseEvent): void => event.stopPropagation();

  const node = (
    <StyledRoot
      className={storiesClassNames.viewer}
      $zIndex={zIndex}
      onClick={() => controller.close()}
    >
      {overlay ? (
        <StyledOverlay
          className={storiesClassNames.overlay}
          $color={overlayColor}
          $closing={closing}
        />
      ) : null}

      {groupTransition === 'slide' ? <StoriesViewTransitionStyle /> : null}

      <StyledStage
        ref={stageRef}
        tabIndex={-1}
        className={storiesClassNames.stage}
      >
        {showPrev ? (
          <StyledArrow
            className={storiesClassNames.arrowPrev}
            $side="prev"
            $closing={closing}
            onClick={stopClick}
          >
            <IconButton
              size="s"
              view="white"
              pin="circle-circle"
              aria-label="Назад"
              disabled={!canPrev}
              onClick={() => controller.prev()}
            >
              <IconDisclosureLeftOutline size="s" />
            </IconButton>
          </StyledArrow>
        ) : null}

        <StoriesBanner closing={closing} onAnimationEnd={handleAnimationEnd} />

        {showNext ? (
          <StyledArrow
            className={storiesClassNames.arrowNext}
            $side="next"
            $closing={closing}
            onClick={stopClick}
          >
            <IconButton
              size="s"
              view="white"
              pin="circle-circle"
              aria-label="Вперёд"
              disabled={!canNext}
              onClick={() => controller.next()}
            >
              <IconDisclosureRightOutline size="s" />
            </IconButton>
          </StyledArrow>
        ) : null}

        <StyledClose
          className={storiesClassNames.close}
          $closing={closing}
          onClick={stopClick}
        >
          <IconButton
            size="s"
            view="white"
            pin="circle-circle"
            aria-label="Закрыть"
            onClick={() => controller.close()}
          >
            <IconClose size="s" />
          </IconButton>
        </StyledClose>
      </StyledStage>
    </StyledRoot>
  );

  return createPortal(node, document.body);
};
