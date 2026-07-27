import { Box } from '@ui-kit/components/Box';
import { media } from '@ui-kit/utils/breakpoint';
import styled, { css } from 'styled-components';

import { cls } from './Layout.classNames';
import { LAYOUT_SPACING } from './Layout.constants';
import { LayoutProps, LayoutVariant } from './Layout.types';

export const LayoutRoot = styled(Box)<{
  $variant: LayoutVariant;
  $customSpacing: LayoutProps['customSpacing'];
  $marginTop?: string;
  $marginBottom?: string;
  $paddingTop?: string;
  $paddingBottom?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $paddingLeft?: string;
  $paddingRight?: string;
}>`
  // Инициализация CSS переменных
  --layout-margin-horizontal: ${LAYOUT_SPACING.XL.horizontal};
  --layout-margin-top: ${LAYOUT_SPACING.XL.vertical.top};
  --layout-margin-bottom: ${LAYOUT_SPACING.XL.vertical.bottom};
  --layout-gutter: ${LAYOUT_SPACING.XL.gutter};
  --layout-header-height: ${LAYOUT_SPACING.XL.headerHeight};

  --layout-max-width: 1856px;
  --layout-grid-template-columns: 1fr;

  // [deprecated] Переопределение через customSpacing
  ${({ $customSpacing }) =>
    $customSpacing?.horizontal &&
    css`
      --layout-margin-horizontal: ${$customSpacing.horizontal};
    `}

  ${({ $customSpacing }) => {
    if (!$customSpacing?.vertical) return '';

    if (typeof $customSpacing.vertical === 'string') {
      return css`
        --layout-margin-top: ${$customSpacing.vertical};
        --layout-margin-bottom: ${$customSpacing.vertical};
      `;
    }

    const parts: string[] = [];
    if ($customSpacing.vertical.top !== undefined) {
      parts.push(`--layout-margin-top: ${$customSpacing.vertical.top};`);
    }
    if ($customSpacing.vertical.bottom !== undefined) {
      parts.push(`--layout-margin-bottom: ${$customSpacing.vertical.bottom};`);
    }
    return parts.join('\n');
  }}

  ${({ $customSpacing }) =>
    $customSpacing?.gutter &&
    css`
      --layout-gutter: ${$customSpacing.gutter};
    `}

  ${({ $customSpacing }) =>
    $customSpacing?.headerHeight &&
    css`
      --layout-header-height: ${$customSpacing.headerHeight};
    `}

  // Прямые пропсы (приоритет над customSpacing)
  ${({ $marginTop }) =>
    $marginTop !== undefined &&
    css`
      --layout-margin-top: ${$marginTop};
    `}

  ${({ $marginBottom }) =>
    $marginBottom !== undefined &&
    css`
      --layout-margin-bottom: ${$marginBottom};
    `}

  ${({ $marginLeft }) =>
    $marginLeft !== undefined &&
    css`
      --layout-margin-left: ${$marginLeft};
    `}

  ${({ $marginRight }) =>
    $marginRight !== undefined &&
    css`
      --layout-margin-right: ${$marginRight};
    `}

  // Основная разметка
  display: grid;
  width: 100%;
  max-width: var(--layout-max-width);
  margin-top: var(--layout-margin-top);
  margin-bottom: var(--layout-margin-bottom);
  margin-inline: var(--layout-margin-horizontal);

  ${({ $marginLeft }) =>
    $marginLeft !== undefined &&
    css`
      margin-left: var(--layout-margin-left);
    `}

  ${({ $marginRight }) =>
    $marginRight !== undefined &&
    css`
      margin-right: var(--layout-margin-right);
    `}

  ${({ $paddingTop }) =>
    $paddingTop !== undefined &&
    css`
      padding-top: ${$paddingTop};
    `}

  ${({ $paddingBottom }) =>
    $paddingBottom !== undefined &&
    css`
      padding-bottom: ${$paddingBottom};
    `}

  ${({ $paddingLeft }) =>
    $paddingLeft !== undefined &&
    css`
      padding-left: ${$paddingLeft};
    `}

  ${({ $paddingRight }) =>
    $paddingRight !== undefined &&
    css`
      padding-right: ${$paddingRight};
    `}

  grid-template-rows: var(--layout-header-height) 1fr;
  grid-template-columns: var(--layout-grid-template-columns);
  gap: var(--layout-gutter);

  // Адаптивные отступы для <1920px
  // Прямые пропсы и customSpacing отключают адаптивное поведение для соответствующего свойства
  ${({ $customSpacing, $marginTop, $marginBottom }) => {
    const hasCustomVertical = !!$customSpacing?.vertical;
    const hasCustomGutter = !!$customSpacing?.gutter;
    const hasDirectTop = $marginTop !== undefined;
    const hasDirectBottom = $marginBottom !== undefined;
    const skipVertical = hasCustomVertical || (hasDirectTop && hasDirectBottom);

    if (skipVertical && hasCustomGutter) return '';

    const lines: string[] = [];
    if (!hasCustomGutter) lines.push('--layout-gutter: 16px;');
    if (!skipVertical) {
      if (!hasDirectTop) lines.push('--layout-margin-top: 16px;');
      if (!hasDirectBottom) lines.push('--layout-margin-bottom: 24px;');
    }

    if (lines.length === 0) return '';
    const styles = lines.join('\n');
    return media.down('xl')(styles);
  }}
`;

export const LayoutHeader = styled(Box)`
  overflow: hidden;
`;

export const LayoutGridContainer = styled(Box)<{ $variant: LayoutVariant }>`
  // Инициализация CSS переменных
  --pageLayout-container-grid-template-column: minmax(0, 1fr);

  // Основная разметка
  display: grid;
  height: 100%;
  grid-template-columns: var(--pageLayout-container-grid-template-column);
  gap: var(--layout-gutter);

  // Варианты раскладок

  /* V1_1 */
  ${({ $variant }) =>
    $variant === 'V1_1' &&
    css`
      --pageLayout-container-grid-template-column: minmax(0, 1fr);
    `}

  /* V2_1 */
  ${({ $variant }) =>
    $variant === 'V2_1' &&
    css`
      --pageLayout-container-grid-template-column: 1282px minmax(0, 1fr);
      ${media.only('xl')`
        --pageLayout-container-grid-template-column: minmax(0, 1fr) 360px;
      `}
      ${media.down('xl')`
        --pageLayout-container-grid-template-column: minmax(0, 1fr) 360px;
      `}
    `}

  /* V2_2 */
  ${({ $variant }) =>
    $variant === 'V2_2' &&
    css`
      --pageLayout-container-grid-template-column: minmax(0, 1fr) 1282px;
      ${media.only('xl')`
        --pageLayout-container-grid-template-column: 360px minmax(0, 1fr);
      `}
      ${media.down('xl')`
        --pageLayout-container-grid-template-column: 360px minmax(0, 1fr);
      `}
    `}

  /* V3_1 */
  ${({ $variant }) =>
    $variant === 'V3_1' &&
    css`
      --pageLayout-container-grid-template-column: minmax(0, 1fr) 360px;
    `}

  /* V3_2 */
  ${({ $variant }) =>
    $variant === 'V3_2' &&
    css`
      --pageLayout-container-grid-template-column: 360px minmax(0, 1fr);
    `}

  /* V3_3 */
  ${({ $variant }) =>
    $variant === 'V3_3' &&
    css`
      --pageLayout-container-grid-template-column: 360px minmax(0, 1fr) 360px;
      ${media.down('xl')`
        --pageLayout-container-grid-template-column: minmax(0, 1fr);
      `}
    `}

  /* V4_1 */
  ${({ $variant }) =>
    $variant === 'V4_1' &&
    css`
      --pageLayout-container-grid-template-column: repeat(2, minmax(0, 1fr));
      ${media.down('xl')`
        --pageLayout-container-grid-template-column: minmax(0, 1fr);
      `}
    `}

  /* V4_2 */
  ${({ $variant }) =>
    $variant === 'V4_2' &&
    css`
      --pageLayout-container-grid-template-column: repeat(3, minmax(0, 1fr));
      ${media.down('xl')`
        --pageLayout-container-grid-template-column: minmax(0, 1fr);
      `}
    `}

  /* V5_1 */
  ${({ $variant }) =>
    $variant === 'V5_1' &&
    css`
      --pageLayout-container-grid-template-column: 360px 840px;
      position: relative;
      & .${cls.centeredItem} {
        position: absolute;
        left: 50%;
        translate: -50% 0;
        width: 100%;
        max-width: 840px;
      }
      ${media.only('xl')`
        --pageLayout-container-grid-template-column: 360px minmax(0,1fr);
        & .layout__centeredItem {
          position: static;
          translate: 0 0;
          max-width: unset;
        } 
      `}
      ${media.down('xl')`
        --pageLayout-container-grid-template-column: 240px minmax(0,1fr);
        & .layout__centeredItem {
          position: static;
          translate: 0 0;
          max-width: unset;
        } 
      `}
    `}
`;

export const LayoutGridItem = styled(Box)`
  overflow-x: hidden;
  height: 100%;
`;
