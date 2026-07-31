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
    preloadGroup,
  } = useStoriesContext();
  const { isOpen, groupIndex } = useStoriesSnapshot(store);
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

  const hasPrev = groupIndex > 0;
  const hasNext = groupIndex < groups.length - 1;
  const showArrows =
    arrows === 'always' || (arrows === 'auto' && groups.length > 1);

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
        {showArrows ? (
          <StyledArrow
            className={storiesClassNames.arrowPrev}
            $side="prev"
            $closing={closing}
            onClick={stopClick}
          >
            <IconButton
              size="s"
              view="default"
              pin="circle-circle"
              aria-label="Предыдущая группа"
              disabled={!hasPrev}
              onClick={() => controller.prevGroup()}
            >
              <IconDisclosureLeftOutline size="s" />
            </IconButton>
          </StyledArrow>
        ) : null}

        <StoriesBanner closing={closing} onAnimationEnd={handleAnimationEnd} />

        {showArrows ? (
          <StyledArrow
            className={storiesClassNames.arrowNext}
            $side="next"
            $closing={closing}
            onClick={stopClick}
          >
            <IconButton
              size="s"
              view="default"
              pin="circle-circle"
              aria-label="Следующая группа"
              disabled={!hasNext}
              onClick={() => controller.nextGroup()}
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
            view="default"
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
