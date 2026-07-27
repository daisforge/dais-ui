import {
  bodyL,
  bodyM,
  bodyS,
  bodySBold,
  h2Bold,
  h4Bold,
  spacing2x,
  spacing4x,
  spacing6x,
  spacing8x,
  spacing16x,
  textPrimary,
  textSecondary
} from '@ui-kit/tokens';
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation
} from 'styled-components';

// Маппер для container
const containerStylesMapper = {
  s: () => ({
    maxWidth: 'unset'
  }),
  m: () => ({
    maxWidth: '560px'
  }),
  l: () => ({
    maxWidth: '785px'
  })
};

// Маппер для заголовков (Title)
const titleStylesMapper = {
  s: () => ({
    ...bodySBold,
    margin: 0,
    padding: 0,
    marginBottom: spacing4x,
    color: textSecondary
  }),
  m: () => ({
    ...h4Bold,
    margin: 0,
    padding: 0,
    marginBottom: spacing2x,
    color: textPrimary
  }),
  l: () => ({
    ...h2Bold,
    margin: 0,
    padding: 0,
    marginBottom: spacing8x,
    color: textPrimary
  })
};

// Маппер для подзаголовков (Subtitle)
const subtitleStylesMapper = {
  s: () => ({
    ...bodyS,
    margin: 0,
    padding: 0,
    marginBottom: spacing4x,
    color: textSecondary
  }),
  m: () => ({
    ...bodyM,
    margin: 0,
    padding: 0,
    marginBottom: spacing6x,
    color: textSecondary
  }),
  l: () => ({
    ...bodyL,
    margin: 0,
    padding: 0,
    marginBottom: spacing16x,
    color: textSecondary
  })
};

export const EmptyStateContainer = styled.div<{
  size: 's' | 'm' | 'l';
  centered?: boolean;
  $css?: string | CSSObject | FlattenSimpleInterpolation;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  ${({ centered }) =>
    centered &&
    css`
      width: 100%;
      height: 100%;
      justify-content: center;
    `}

  ${({ $css }) => $css}
`;

export const EmptyStateContentInner = styled.div<{ size: 's' | 'm' | 'l' }>`
  ${({ size }) => css(containerStylesMapper[size]())}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const EmptyStateIcon = styled.div`
  margin-bottom: 8px;
`;

// Маппер для размеров контейнера изображения
const imageContainerStylesMapper = {
  s: () => ({
    width: '68px',
    height: '55px'
  }),
  m: () => ({
    width: '170px',
    height: '150px'
  }),
  l: () => ({
    width: '250px',
    height: '230px'
  })
};

export const EmptyStateImage = styled.div<{ size: 's' | 'm' | 'l' }>`
  ${({ size }) => css(imageContainerStylesMapper[size]())}
  margin-bottom: ${({ size }) => {
    if (size === 's') return spacing4x;
    if (size === 'm') return spacing6x;
    return spacing16x;
  }};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
  }
`;

export const EmptyStateTitle = styled.h2<{ size: 's' | 'm' | 'l' }>`
  ${({ size }) => css(titleStylesMapper[size]())}
`;

export const EmptyStateSubtitle = styled.p<{ size: 's' | 'm' | 'l' }>`
  ${({ size }) => css(subtitleStylesMapper[size]())}
`;

export const EmptyStateButtons = styled.div`
  display: flex;
  gap: ${spacing4x};
  margin-bottom: ${spacing4x};
`;
export const EmptyStateExtraButton = styled.div``;
