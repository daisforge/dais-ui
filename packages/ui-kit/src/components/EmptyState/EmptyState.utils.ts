import {
  EMPTY_STATE_IMAGE_NAMES,
  ERROR_PAGE_IMAGE_NAMES,
  ERROR_PAGE_VARIANTS,
} from './EmptyState.constants';
import type {
  EmptyStateImageVariant,
  EmptyStateProps,
  EmptyStateVariant,
  ErrorPageVariant,
} from './EmptyState.types';

// ============================================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================================

/**
 * Формирует CDN URL для изображения EmptyState
 * @param imageName - имя файла изображения (например, 'loading-l')
 * @returns полный CDN URL
 */
function getEmptyStateImageUrl(imageName: string): string {
  return `/pl/static-res/finportal_icons/images/empty-state/${imageName}.webp`;
}

/**
 * Формирует CDN URL для изображения ErrorPage
 * @param imageName - имя файла изображения (например, '400')
 * @returns полный CDN URL
 */
function getErrorPageImageUrl(imageName: string): string {
  return `/pl/static-res/finportal_icons/images/error-page/${imageName}.webp`;
}

// ============================================================================
// УТИЛИТЫ
// ============================================================================

/**
 * Проверяет, является ли variant вариантом ErrorPage
 * @param variant - вариант изображения
 * @returns true, если variant является ErrorPage вариантом
 */
export function isErrorPageVariant(
  variant: EmptyStateImageVariant,
): variant is ErrorPageVariant {
  return ERROR_PAGE_VARIANTS.includes(variant as ErrorPageVariant);
}

// ============================================================================
// МАППИНГИ ДАННЫХ
// ============================================================================

/**
 * Маппинг изображений EmptyState - возвращает CDN URL
 */
const emptyStateImages: Record<
  EmptyStateVariant,
  Record<EmptyStateProps['size'], { src: string; srcSet: string }>
> = {
  loading: {
    s: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES.loading.s3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES.loading.s,
      )} 1x, ${getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES.loading.s3x)} 2x`,
    },
    m: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES.loading.m3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES.loading.m,
      )} 1x, ${getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES.loading.m3x)} 2x`,
    },
    l: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES.loading.l3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES.loading.l,
      )} 1x, ${getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES.loading.l3x)} 2x`,
    },
  },
  'life-circle': {
    s: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['life-circle'].s3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['life-circle'].s3x,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['life-circle'].s3x,
      )} 2x`,
    },
    m: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['life-circle'].m3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['life-circle'].m3x,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['life-circle'].m3x,
      )} 2x`,
    },
    l: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['life-circle'].l3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['life-circle'].l3x,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['life-circle'].l3x,
      )} 2x`,
    },
  },
  'need-access': {
    s: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['need-access'].s3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['need-access'].s,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['need-access'].s3x,
      )} 2x`,
    },
    m: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['need-access'].m3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['need-access'].m,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['need-access'].m2x,
      )} 2x`,
    },
    l: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['need-access'].l3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['need-access'].l,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['need-access'].l3x,
      )} 2x`,
    },
  },
  'no-access': {
    s: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['no-access'].s3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-access'].s,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-access'].s3x,
      )} 2x`,
    },
    m: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['no-access'].m3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-access'].m,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-access'].m3x,
      )} 2x`,
    },
    l: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['no-access'].l3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-access'].l,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-access'].l3x,
      )} 2x`,
    },
  },
  'no-content': {
    s: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['no-content'].s3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-content'].s,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-content'].s3x,
      )} 2x`,
    },
    m: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['no-content'].m3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-content'].m,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-content'].m3x,
      )} 2x`,
    },
    l: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['no-content'].l3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-content'].l,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['no-content'].l3x,
      )} 2x`,
    },
  },
  'not-found': {
    s: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['not-found'].s3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-found'].s,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-found'].s3x,
      )} 2x`,
    },
    m: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['not-found'].m3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-found'].m,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-found'].m3x,
      )} 2x`,
    },
    l: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['not-found'].l3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-found'].l,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-found'].l3x,
      )} 2x`,
    },
  },
  'not-result': {
    s: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['not-result'].s3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-result'].s,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-result'].s3x,
      )} 2x`,
    },
    m: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['not-result'].m3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-result'].m,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-result'].m3x,
      )} 2x`,
    },
    l: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['not-result'].l3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-result'].l,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['not-result'].l3x,
      )} 2x`,
    },
  },
  success: {
    s: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['success'].s3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['success'].s3x,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['success'].s3x,
      )} 2x`,
    },
    m: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['success'].m3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['success'].m3x,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['success'].m3x,
      )} 2x`,
    },
    l: {
      src: getEmptyStateImageUrl(EMPTY_STATE_IMAGE_NAMES['success'].l3x),
      srcSet: `${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['success'].l3x,
      )} 1x, ${getEmptyStateImageUrl(
        EMPTY_STATE_IMAGE_NAMES['success'].l3x,
      )} 2x`,
    },
  },
};

// ============================================================================
// ПУБЛИЧНЫЕ ФУНКЦИИ
// ============================================================================

/**
 * Получение изображения для EmptyState
 * @param variant - вариант изображения
 * @param size - размер компонента
 * @returns объект с CDN URL (src и srcSet)
 */
export function getEmptyStateImage(
  variant: EmptyStateVariant,
  size: EmptyStateProps['size'],
): { src: string; srcSet: string } {
  return emptyStateImages[variant][size];
}

/**
 * Получение изображения для ErrorPage
 * @param variant - вариант изображения (код ошибки)
 * @param size - размер компонента (по умолчанию 'l')
 * @returns объект с CDN URL (src и srcSet)
 */
export function getErrorPageImage(
  variant: ErrorPageVariant,
  size: EmptyStateProps['size'] = 'l',
): { src: string; srcSet: string } {
  const src = getErrorPageImageUrl(ERROR_PAGE_IMAGE_NAMES[variant][size]);
  // Используется только @3x, поэтому srcSet ссылается на него для всех плотностей
  return { src, srcSet: `${src} 1x, ${src} 2x` };
}

/**
 * Получение изображения (универсальная функция)
 * @param variant - вариант изображения
 * @param size - размер компонента (только для EmptyState вариантов)
 * @returns объект с CDN URL (src и srcSet)
 */
export function getImage(
  variant: EmptyStateImageVariant,
  size?: EmptyStateProps['size'],
): { src: string; srcSet: string } {
  // Проверяем, является ли variant вариантом ErrorPage
  if (isErrorPageVariant(variant)) {
    return getErrorPageImage(variant, size);
  }

  // Для EmptyState вариантов size обязателен
  if (!size) {
    throw new Error(
      `Size is required for EmptyState variants. Variant: ${variant}`,
    );
  }

  return getEmptyStateImage(variant as EmptyStateVariant, size);
}

/**
 * Получает размеры изображения по размеру компонента
 * @param size - размер компонента
 * @returns объект с width и height
 */
export function getImageDimensions(size: EmptyStateProps['size']): {
  width: number;
  height: number;
} {
  const dimensions = {
    s: { width: 68, height: 55 },
    m: { width: 170, height: 150 },
    l: { width: 250, height: 230 },
  };
  return dimensions[size];
}

/**
 * Получает размер кнопки на основе размера компонента
 * @param componentSize - размер компонента
 * @returns размер кнопки ('xs' или 's')
 */
export function getButtonSize(
  componentSize: EmptyStateProps['size'],
): 's' | 'm' | 'xs' {
  return componentSize === 's' ? 'xs' : 's';
}
