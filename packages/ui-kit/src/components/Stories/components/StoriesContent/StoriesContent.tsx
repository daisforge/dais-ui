import { Spinner } from '@ui-kit/components/Spinner';
import { ImageLoaderStatus } from '@ui-kit/utils/hooks';
import { ReactNode } from 'react';

import { storiesClassNames } from '../../Stories.constants';
import { StorySlide } from '../../Stories.types';
import {
  StyledContent,
  StyledErrorSlot,
  StyledImage,
  StyledSpinner,
} from './StoriesContent.styled';

export interface StoriesContentProps {
  slide: StorySlide;
  /** Статус загрузки ассета текущего сегмента (владелец — StoriesBanner). */
  status: ImageLoaderStatus;
  /** Error-state при ошибке загрузки (готовит StoriesBanner: renderError или дефолтный EmptyState). */
  errorNode?: ReactNode;
}

/**
 * Контент баннера: ассет (картинка/GIF) + спиннер на время загрузки + error-state
 * при ошибке. Video пока не реализовано, но `slide.type` заложен в модель под будущее.
 */
export const StoriesContent = ({
  slide,
  status,
  errorNode,
}: StoriesContentProps): JSX.Element => {
  const objectFit = slide.objectFit ?? 'cover';
  const loaded = status === 'loaded';

  if (status === 'error') {
    return (
      <StyledContent className={storiesClassNames.content}>
        <StyledErrorSlot>{errorNode}</StyledErrorSlot>
      </StyledContent>
    );
  }

  return (
    <StyledContent className={storiesClassNames.content}>
      <StyledImage
        src={slide.src}
        alt=""
        draggable={false}
        $objectFit={objectFit}
        $loaded={loaded}
      />
      {status === 'loading' ? (
        <StyledSpinner>
          <Spinner view="default" size="l" />
        </StyledSpinner>
      ) : null}
    </StyledContent>
  );
};
