import {
  TypographyWithAutoTooltip,
  TypographyWithAutoTooltipProps,
} from '@ui-kit/components/Typography';
import type { TypographyVariant } from '@ui-kit/components/Typography/Typography';
import { textPrimary } from '@ui-kit/tokens/color';
import { preloadImage } from '@ui-kit/utils/hooks';
import { ReactNode } from 'react';

import { useStoriesContext } from '../../store/StoriesContext';
import { useStoriesSnapshot } from '../../store/useStoriesSnapshot';
import {
  STORIES_PREVIEW_DATA_COMPONENT,
  STORIES_SIZES,
  storiesClassNames,
} from '../../Stories.constants';
import {
  StyledBody,
  StyledPreview,
  StyledRing,
  StyledTitle,
  StyledTrigger,
} from './StoriesPreview.styled';
import { StoriesPreviewInternalProps } from './StoriesPreview.types';

export const StoriesPreview = (
  props: StoriesPreviewInternalProps,
): JSX.Element => {
  const {
    slides,
    shape = 'circle',
    title,
    titleProps,
    image,
    viewed = false,
    size = STORIES_SIZES.circle,
    width,
    height,
    renderTrigger,
    className,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __index = 0,
  } = props;

  const { store, controller, preloadOnHover } = useStoriesContext();
  const snapshot = useStoriesSnapshot(store);
  const isActive = snapshot.isOpen && snapshot.groupIndex === __index;

  const triggerWidth = shape === 'rect' ? width ?? size : size;
  const triggerHeight = shape === 'rect' ? height ?? size : size;

  const handleClick = (): void => controller.open(__index);
  const handleEnter = (): void => {
    if (preloadOnHover && slides[0]) {
      preloadImage(slides[0].src);
    }
  };

  const renderInner = (): ReactNode => {
    if (renderTrigger) {
      return renderTrigger({ index: __index, viewed, isActive });
    }
    return (
      <>
        {viewed ? null : (
          <StyledRing
            className={storiesClassNames.previewRing}
            $shape={shape}
          />
        )}
        <StyledBody
          className={storiesClassNames.previewBody}
          $shape={shape}
          $viewed={viewed}
          $image={image}
        />
      </>
    );
  };

  // Дефолты подписи + пользовательские titleProps поверх них.
  const titleContent: TypographyWithAutoTooltipProps<TypographyVariant> = {
    variant: 'BodyXXS',
    bold: true,
    lines: 2,
    tooltipText: title,
    color: textPrimary,
    ...titleProps,
    children: title,
  };
  const titleAlign = titleProps?.style?.textAlign ?? 'center';

  return (
    <StyledPreview
      className={[storiesClassNames.preview, className]
        .filter(Boolean)
        .join(' ')}
      data-component={STORIES_PREVIEW_DATA_COMPONENT}
      $width={triggerWidth}
    >
      <StyledTrigger
        type="button"
        aria-label={title}
        $width={triggerWidth}
        $height={triggerHeight}
        $shape={shape}
        onClick={handleClick}
        onMouseEnter={handleEnter}
      >
        {renderInner()}
      </StyledTrigger>

      {title ? (
        <StyledTitle
          className={storiesClassNames.previewTitle}
          style={{ maxWidth: triggerWidth }}
          $align={titleAlign}
        >
          <TypographyWithAutoTooltip {...titleContent} />
        </StyledTitle>
      ) : null}
    </StyledPreview>
  );
};
