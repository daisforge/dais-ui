import { mergeClasses } from '@ui-kit/utils';
import React, { FC, useMemo } from 'react';

import {
  EmptyStateButtonsGroup,
  EmptyStateExtraButtonWrapper,
  EmptyStateImageRenderer,
} from './components';
import { emptyStateClassNames as cls } from './EmptyState.constants';
import { EmptyStateProps } from './EmptyState.types';
import { getImage } from './EmptyState.utils';
import {
  EmptyStateContainer,
  EmptyStateContentInner,
  EmptyStateIcon,
  EmptyStateSubtitle,
  EmptyStateTitle,
} from './styled';

export const EmptyState: FC<EmptyStateProps> = ({
  size,
  title,
  subtitle,
  variant,
  icon: Icon,
  iconProps,
  buttons = [],
  extraButton,
  className = '',
  classes = {},
  centered = false,
  $css,
}) => {
  // Получаем CDN URL для изображения
  const imageData = useMemo(() => {
    if (variant) {
      return getImage(variant, size);
    }
    if (!Icon) {
      // Дефолтное изображение
      return getImage('no-content', size);
    }
    return null;
  }, [variant, size, Icon]);

  return (
    <EmptyStateContainer
      size={size}
      className={mergeClasses(cls.root, className, classes.root)}
      centered={centered}
      $css={$css}
    >
      <EmptyStateContentInner size={size}>
        {/* Отображение изображения по variant (приоритет над icon) */}
        {variant ? (
          <EmptyStateImageRenderer
            variant={variant}
            size={size}
            imageData={imageData}
            className={mergeClasses(cls.icon, classes.icon)}
            alt={variant}
          />
        ) : (
          <>
            {/* Режим M и S может быть с иконкой (deprecated, для обратной совместимости) */}
            {(size === 'm' || size === 's') && Icon && (
              <EmptyStateIcon className={mergeClasses(cls.icon, classes.icon)}>
                <Icon {...iconProps} size={size} />
              </EmptyStateIcon>
            )}
            {/* Дефолтное изображение, если нет ни variant, ни icon */}
            {!Icon && (
              <EmptyStateImageRenderer
                variant="no-content"
                size={size}
                imageData={imageData}
                className={mergeClasses(cls.icon, classes.icon)}
                alt="no-content"
              />
            )}
          </>
        )}
        {title && (
          <EmptyStateTitle
            size={size}
            className={mergeClasses(cls.title, classes.title)}
          >
            {title}
          </EmptyStateTitle>
        )}
        {subtitle && (
          <EmptyStateSubtitle
            size={size}
            className={mergeClasses(cls.subtitle, classes.subtitle)}
          >
            {subtitle}
          </EmptyStateSubtitle>
        )}
        <EmptyStateButtonsGroup
          buttons={buttons}
          size={size}
          className={mergeClasses(cls.buttons, classes.buttons)}
        />
        {extraButton && (
          <EmptyStateExtraButtonWrapper
            extraButton={extraButton}
            size={size}
            className={mergeClasses(cls.extraButton, classes.extraButton)}
          />
        )}
      </EmptyStateContentInner>
    </EmptyStateContainer>
  );
};
