import { media } from '@ui-kit/utils/breakpoint';
import styled, { css } from 'styled-components';

import type { CSSValue } from './PageLayout.types';

const toCss = (value: CSSValue): string =>
  typeof value === 'number' ? `${value}px` : value;

export const StyledPageLayout = styled.div<{
  $paddingTop?: CSSValue;
  $paddingBottom?: CSSValue;
  $minHeight?: CSSValue;
}>`
  --page-layout-padding-top: ${({ $paddingTop }) =>
    $paddingTop !== undefined
      ? toCss($paddingTop)
      : 'var(--global-header-height, 72px)'};
  --page-layout-padding-inline: 24px;
  --page-layout-padding-bottom: ${({ $paddingBottom }) =>
    $paddingBottom !== undefined ? toCss($paddingBottom) : '24px'};

  ${({ $paddingBottom }) =>
    $paddingBottom === undefined &&
    media.up('l')(`--page-layout-padding-bottom: 32px;`)}

  ${media.up('l')`
    --page-layout-padding-inline: 32px;
  `}

  display: flex;
  max-width: 1920px;
  margin-inline: auto;
  padding-top: var(--page-layout-padding-top);
  padding-inline: var(--page-layout-padding-inline);
  padding-bottom: var(--page-layout-padding-bottom);
  box-sizing: border-box;

  ${({ $minHeight }) => {
    if ($minHeight !== undefined) {
      const val = toCss($minHeight);
      return val === '0px' || val === '0' || val === 'auto'
        ? ''
        : css`
            min-height: ${val};
          `;
    }
    return css`
      min-height: 100dvh;
    `;
  }}
`;
