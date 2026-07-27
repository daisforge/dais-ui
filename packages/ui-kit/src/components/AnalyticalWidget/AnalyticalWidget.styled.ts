import { BodyM } from '@ui-kit/components/Typography';
import { surfaceSolidCard } from '@ui-kit/tokens';
import { media } from '@ui-kit/utils';
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  ANALYTICAL_WIDGET_STYLES,
  analyticalWidgetClassNames as cls
} from './AnalyticalWidget.constants';
import { AnalyticalWidgetSize } from './AnalyticalWidget.types';

const getSizeStyles = (size: AnalyticalWidgetSize) => {
  const styles = ANALYTICAL_WIDGET_STYLES[size];

  return {
    xl: `
      --analytical-widget-padding: ${styles.xl.padding};
      --analytical-widget-br: ${styles.xl.borderRadius};
      --analytical-widget-min-height: ${styles.xl.minHeight};
      --analytical-widget-min-width: ${styles.xl.minWidth || 'unset'};
      --analytical-widget-max-width: ${styles.xl.maxWidth || 'unset'};

      width: ${styles.xl.width};
      min-height: var(--analytical-widget-min-height);
      height: 100%;
      min-width: var(--analytical-widget-min-width);
      max-width: var(--analytical-widget-max-width);
      padding: var(--analytical-widget-padding);
      border-radius: var(--analytical-widget-br);
    `,
    lg: `
      --analytical-widget-padding: ${styles.lg.padding};
      --analytical-widget-br: ${styles.lg.borderRadius};
      --analytical-widget-min-height: ${styles.lg.minHeight};
      --analytical-widget-min-width: ${styles.lg.minWidth || 'unset'};
      --analytical-widget-max-width: ${styles.lg.maxWidth || 'unset'};

      width: ${styles.lg.width};
      min-height: var(--analytical-widget-min-height);
      height: 100%;
      min-width: var(--analytical-widget-min-width);
      max-width: var(--analytical-widget-max-width);
      padding: var(--analytical-widget-padding);
      border-radius: var(--analytical-widget-br);
    `,
    md: `
      --analytical-widget-padding: ${styles.md.padding};
      --analytical-widget-br: ${styles.md.borderRadius};
      --analytical-widget-min-height: ${styles.md.minHeight};
      --analytical-widget-min-width: ${styles.md.minWidth || 'unset'};
      --analytical-widget-max-width: ${styles.md.maxWidth || 'unset'};

      width: ${styles.md.width};
      min-height: var(--analytical-widget-min-height);
      height: 100%;
      min-width: var(--analytical-widget-min-width);
      max-width: var(--analytical-widget-max-width);
      padding: var(--analytical-widget-padding);
      border-radius: var(--analytical-widget-br);
    `
  };
};

export const StyledWidget = styled.article<{
  $size: AnalyticalWidgetSize;
  $css: string | CSSObject | FlattenSimpleInterpolation | undefined;
}>`
  --analytical-widget-bg: ${surfaceSolidCard};

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  background: var(--analytical-widget-bg);

  &:hover {
    .${cls.headerActions} {
      opacity: 1;
    }
  }

  ${({ $size }) => {
    const styles = getSizeStyles($size);
    return css`
      ${media.exact(0, 1439)(styles.md)} // 0-1439px
      ${media.exact(1440, 1919)(styles.lg)} // 1440-1919px
      ${media.exact(1920, 100000)(styles.xl)} // 1920px+
    `;
  }}
  ${({ $css }) => $css}
`;

export const StyledTopSlot = styled(BodyM)`
  overflow: hidden;
`;

export const StyledMiddleSlot = styled.div`
  overflow: hidden;
  padding-top: 4px;
`;

interface StyledContentProps {
  scrollable?: boolean;
}

export const StyledContent = styled.div<StyledContentProps>`
  position: relative;
  flex: 1;
  min-height: 30px;
  margin-top: 4px;
  overflow-y: ${({ scrollable }) => (scrollable ? 'auto' : 'visible')};
`;
