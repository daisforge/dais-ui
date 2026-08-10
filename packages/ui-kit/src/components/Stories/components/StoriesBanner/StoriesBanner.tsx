import { EmptyState } from '@ui-kit/components/EmptyState';
import { useImageLoader } from '@ui-kit/utils/hooks';
import {
  AnimationEvent as ReactAnimationEvent,
  MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
} from 'react';

import { useNavigation } from '../../hooks/useNavigation';
import { useStoriesContext } from '../../store/StoriesContext';
import { useStoriesSnapshot } from '../../store/useStoriesSnapshot';
import { storiesClassNames } from '../../Stories.constants';
import { StoriesContent } from '../StoriesContent';
import { StoriesProgress } from '../StoriesProgress';
import {
  StyledActionSlot,
  StyledBanner,
  StyledBottom,
  StyledTapLayer,
  StyledTop,
} from './StoriesBanner.styled';

export interface StoriesBannerProps {
  /** Идёт анимация закрытия (проигрывается popOut). */
  closing: boolean;
  /** Анимация баннера завершилась (вьюер размонтирует после закрытия). */
  onAnimationEnd: () => void;
}

export const StoriesBanner = ({
  closing,
  onAnimationEnd,
}: StoriesBannerProps): JSX.Element | null => {
  const {
    store,
    controller,
    groups,
    pauseHoldDelay,
    tapPrevZone,
    loadingDelay,
    onError,
    renderError,
  } = useStoriesContext();
  const { groupIndex, slideIndex, isOpen } = useStoriesSnapshot(store);

  const group = groups[groupIndex];
  const slide = group?.slides[slideIndex];
  const { status, reload } = useImageLoader(slide?.src, loadingDelay);

  const tapHandlers = useNavigation({
    controller,
    pauseHoldDelay,
    tapPrevZone,
    isOpen,
  });

  // Колбэк ошибки — не чаще одного раза на сегмент.
  const lastErrorKey = useRef<string>();
  useEffect(() => {
    if (status !== 'error' || !slide) return;
    const key = `${groupIndex}-${slideIndex}`;
    if (lastErrorKey.current === key) return;
    lastErrorKey.current = key;
    onError?.({ groupIndex, slideIndex, slide, retry: reload });
  }, [status, groupIndex, slideIndex, slide, onError, reload]);

  const stopClick = (event: ReactMouseEvent): void => event.stopPropagation();

  const handleAnimationEnd = (event: ReactAnimationEvent): void => {
    // Игнорируем всплывшие анимации потомков — реагируем только на анимацию самого баннера.
    if (event.target === event.currentTarget) {
      onAnimationEnd();
    }
  };

  if (!slide) return null;

  const { footer } = slide;

  // Error-state: либо кастомный (renderError), либо готовый EmptyState с ретраем.
  const errorNode = renderError ? (
    renderError({ groupIndex, slideIndex, slide, retry: reload })
  ) : (
    <EmptyState
      size="s"
      variant="loading"
      title="Не удалось загрузить"
      centered
      buttons={[
        {
          type: 'link',
          props: {
            text: 'Обновить',
            view: 'accent',
            onClick: reload,
          },
        },
      ]}
    />
  );

  return (
    <StyledBanner
      className={storiesClassNames.banner}
      $closing={closing}
      onClick={stopClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <StoriesContent slide={slide} status={status} errorNode={errorNode} />

      {status === 'error' ? null : <StyledTapLayer {...tapHandlers} />}

      <StyledTop>
        <StoriesProgress isReady={status === 'loaded'} />
      </StyledTop>

      {footer ? (
        <StyledBottom>
          <StyledActionSlot className={storiesClassNames.action}>
            {footer}
          </StyledActionSlot>
        </StyledBottom>
      ) : null}
    </StyledBanner>
  );
};
