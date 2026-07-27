import React, { FC, useMemo } from 'react';

import emptyStateFallbackImage from '../../../images/empty-state/no-content-m@3x.webp';
import errorFallbackImage from '../../../images/error-page/unidentified@3x.webp';
import { EmptyStateImageVariant, EmptyStateProps } from '../EmptyState.types';
import { getImageDimensions, isErrorPageVariant } from '../EmptyState.utils';
import { EmptyStateImage } from '../styled';

/**
 * Получает fallback изображение в зависимости от variant
 */
const getFallbackImage = (variant?: EmptyStateImageVariant): string => {
  if (variant && isErrorPageVariant(variant)) {
    return errorFallbackImage;
  }
  return emptyStateFallbackImage;
};

/**
 * Компонент для рендеринга изображения EmptyState с поддержкой fallback
 */
export const EmptyStateImageRenderer: FC<{
  variant?: EmptyStateImageVariant;
  size: EmptyStateProps['size'];
  imageData: { src: string; srcSet: string } | null;
  className?: string;
  alt?: string;
}> = ({ variant, size, imageData, className, alt }) => {
  const fallbackImage = useMemo(() => getFallbackImage(variant), [variant]);
  const imageDimensions = useMemo(() => getImageDimensions(size), [size]);

  // Обработчик ошибки загрузки изображения
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    // Предотвращаем бесконечный цикл, если fallback тоже не загрузится
    if (img.src !== fallbackImage) {
      img.src = fallbackImage;
      // Пока не используем srcSet
      // img.srcset = '';
    }
  };

  // Использую imageData если есть, иначе fallback
  const imageSrc = imageData?.src || fallbackImage;
  // Пока не использую srcSet
  // const imageSrcSet = imageData?.srcSet || '';
  const imageAlt = alt || variant || 'empty-state';

  return (
    <EmptyStateImage size={size} className={className}>
      <img
        // Пока не использую srcSet
        // srcSet={imageSrcSet}
        src={imageSrc}
        width={imageDimensions.width}
        height={imageDimensions.height}
        alt={imageAlt}
        onError={handleImageError}
      />
    </EmptyStateImage>
  );
};
