import {
  borderRadiusXxs,
  onDarkSurfaceSolidTertiary,
  onDarkSurfaceSolidTertiaryHover,
  surfaceSolidTertiary,
  surfaceSolidTertiaryHover
} from '@ui-kit/tokens';
import { css } from 'styled-components';

import type { ScrollbarStylesProps } from './types';

const DEFAULTS = {
  width: '10px',
  height: '10px',
  borderRadius: `calc(${borderRadiusXxs}/1)`,
  isThin: true,
  theme: 'light' as 'light' | 'dark'
};

const resolveColors = ({
  thumbColor,
  thumbColorHover,
  trackColor,
  trackColorHover,
  theme = DEFAULTS.theme
}: Pick<
  ScrollbarStylesProps,
  'thumbColor' | 'thumbColorHover' | 'trackColor' | 'trackColorHover' | 'theme'
>) => {
  const thumb =
    thumbColor ??
    (theme === 'light' ? surfaceSolidTertiary : onDarkSurfaceSolidTertiary);

  const track = trackColor ?? 'transparent';
  const thumbHover =
    thumbColorHover ??
    (theme === 'light'
      ? surfaceSolidTertiaryHover
      : onDarkSurfaceSolidTertiaryHover);
  const trackHover = trackColorHover ?? track;

  return { thumb, thumbHover, track, trackHover };
};

const buildScrollbarCss = ({
  width = DEFAULTS.width,
  height = DEFAULTS.height,
  borderRadius = DEFAULTS.borderRadius,
  isThin = DEFAULTS.isThin,
  thumb,
  thumbHover,
  track,
  trackHover
}: {
  width?: string;
  height?: string;
  borderRadius?: string;
  isThin?: boolean;
  thumb: string;
  thumbHover: string;
  track: string;
  trackHover: string;
}) => css`
  /* Только для Firefox */
  @supports (scrollbar-width: thin) and (not selector(::-webkit-scrollbar)) {
    scrollbar-width: ${isThin ? 'thin' : 'auto'};
    scrollbar-color: ${thumb} ${track};
  }

  /* Для WebKit (Chrome, Safari, Edge). &[class] усиливает специфичность */
  &[class]::-webkit-scrollbar,
  &::-webkit-scrollbar {
    width: ${width};
    height: ${height};
  }

  &[class]::-webkit-scrollbar-track,
  &::-webkit-scrollbar-track {
    background: ${() => track};
    border-radius: ${borderRadius};
    margin-block: 6px;
  }

  &[class]::-webkit-scrollbar-track:hover,
  &::-webkit-scrollbar-track:hover {
    background: ${() => trackHover};
    border-radius: ${borderRadius};
    margin-block: 6px;
  }

  &[class]::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb {
    background: ${() => thumb};
    transition: background 0.2s ease;
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }

  &[class]::-webkit-scrollbar-thumb:hover,
  &::-webkit-scrollbar-thumb:hover {
    transition: background 0.2s ease;
    border: 2px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    background: ${() => thumbHover};
    background-clip: padding-box;
  }
`;

/**
 * Скроллбар с дефолтными стилями проекта.
 * Без параметров - просто вызывай `getDefaultScrollbar()`.
 */
export const getDefaultScrollbar = () => {
  const colors = resolveColors({});

  return buildScrollbarCss({ ...colors });
};

/**
 * Кастомизируемый скроллбар - все параметры опциональны,
 * дефолты совпадают с `getDefaultScrollbar`.
 */
export const getCustomScrollbar = ({
  width,
  height,
  borderRadius,
  isThin,
  thumbColor,
  thumbColorHover,
  trackColor,
  trackColorHover,
  theme
}: ScrollbarStylesProps = {}) => {
  const colors = resolveColors({
    thumbColor,
    thumbColorHover,
    trackColor,
    trackColorHover,
    theme
  });

  return buildScrollbarCss({
    width,
    height,
    borderRadius,
    isThin,
    ...colors
  });
};
