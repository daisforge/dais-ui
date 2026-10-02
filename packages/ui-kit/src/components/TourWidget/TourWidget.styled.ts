import { Typography } from '@ui-kit/components/Typography';
import {
  onLightSurfaceSolidPrimary,
  outlineAccentGradient,
  surfaceTransparentTertiary,
  textPrimary,
} from '@ui-kit/tokens';
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { tourWidgetClassNames as cls } from './TourWidget.classNames';
import { tourWidgetThemePalettes } from './TourWidget.palette';
import type { TourWidgetOrientation } from './types';

type CssProp = string | CSSObject | FlattenSimpleInterpolation;

type StyledContainerProps = {
  $orientation: TourWidgetOrientation;
  $isDark: boolean;
  $css?: CssProp;
};

const LIGHT_PALETTE = tourWidgetThemePalettes.light;

const C = {
  radius: '14px',
  contentRadius: '6px',
  cardBg: () =>
    `var(--tour-widget-theme-background, ${onLightSurfaceSolidPrimary})`,
  titleColor: () => textPrimary,
  descriptionColor: () => textPrimary,
};

const verticalGradientPreset = css`
  --tour-widget-gradient-frame-height: 20%;
  --tour-widget-gradient-frame-left: 0;
  --tour-widget-gradient-frame-right: 0;
  --tour-widget-gradient-frame-bottom: 0;
  --tour-widget-gradient-frame-fade: 60%;

  --tour-widget-gradient-background: var(
    --tour-widget-theme-gradient-vertical,
    ${LIGHT_PALETTE['--tour-widget-theme-gradient-vertical']}
  );
  --tour-widget-gradient-width: 115%;
  --tour-widget-gradient-height: 100%;
  --tour-widget-gradient-left: -15%;
  --tour-widget-gradient-top: 60%;
  --tour-widget-gradient-blur: var(
    --tour-widget-theme-gradient-vertical-blur,
    45px
  );
  --tour-widget-gradient-opacity: var(
    --tour-widget-theme-gradient-opacity,
    0.53
  );

  --tour-widget-inline-oval-display: none;
  --tour-widget-oval-frame-display: block;
  --tour-widget-oval-frame-height: 32%;
  --tour-widget-oval-border-radius: 50%;
  --tour-widget-shape-gradient-mask-start: 84%;
  --tour-widget-shape-gradient-mask-middle: 94%;

  --tour-widget-oval-width: 45%;
  --tour-widget-oval-height: 100%;
  --tour-widget-oval-left: 78%;
  --tour-widget-oval-top: 35%;
  --tour-widget-oval-blur: var(--tour-widget-theme-oval-vertical-blur, 48px);
  --tour-widget-oval-opacity: var(
    --tour-widget-theme-oval-vertical-opacity,
    0.42
  );
`;

const horizontalGradientPreset = css`
  --tour-widget-gradient-frame-height: 30%;
  --tour-widget-gradient-frame-left: 0;
  --tour-widget-gradient-frame-right: 0;
  --tour-widget-gradient-frame-bottom: 0;
  --tour-widget-gradient-frame-fade: 78%;

  --tour-widget-gradient-background: var(
    --tour-widget-theme-gradient-horizontal,
    ${LIGHT_PALETTE['--tour-widget-theme-gradient-horizontal']}
  );
  --tour-widget-gradient-width: 115%;
  --tour-widget-gradient-height: 100%;
  --tour-widget-gradient-left: -10%;
  --tour-widget-gradient-top: 55%;
  --tour-widget-gradient-blur: var(
    --tour-widget-theme-gradient-horizontal-blur,
    45px
  );
  --tour-widget-gradient-opacity: var(
    --tour-widget-theme-gradient-opacity,
    0.53
  );

  --tour-widget-inline-oval-display: none;
  --tour-widget-oval-frame-display: block;
  --tour-widget-oval-frame-height: 42%;
  --tour-widget-oval-border-radius: 50%;
  --tour-widget-shape-gradient-mask-start: 76%;
  --tour-widget-shape-gradient-mask-middle: 88%;

  --tour-widget-oval-width: 30%;
  --tour-widget-oval-height: 120%;
  --tour-widget-oval-left: 84%;
  --tour-widget-oval-top: 20%;
  --tour-widget-oval-blur: var(--tour-widget-theme-oval-horizontal-blur, 48px);
  --tour-widget-oval-opacity: var(
    --tour-widget-theme-oval-horizontal-opacity,
    0.42
  );
`;

const verticalStyles = css`
  ${verticalGradientPreset}

  display: flex;
  flex-direction: column;

  & .${cls.content} {
    padding: 12px 12px 0;
  }

  & .${cls.header} {
    padding-top: 24px;
    padding-inline: 12px;
  }

  & .${cls.footer} {
    padding: 24px 12px 12px;
  }
`;

const horizontalStyles = css`
  ${horizontalGradientPreset}

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: max-content minmax(0, 1fr) max-content;
  align-items: stretch;

  & .${cls.header} {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    padding: 12px 12px 0;
  }

  & .${cls.footer} {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    align-self: end;
    margin-top: 0;
    padding: 24px 12px 12px;
  }

  &:has(> .${cls.content}) {
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    column-gap: 24px;
  }

  &:has(> .${cls.content}) .${cls.content} {
    grid-column: 1;
    grid-row: 1 / 4;
    padding: 12px 0 12px 12px;
  }

  &:has(> .${cls.content}) .${cls.header} {
    grid-column: 2;
    grid-row: 1;
    padding: 12px 12px 0 0;
  }

  &:has(> .${cls.content}) .${cls.footer} {
    grid-column: 2;
    grid-row: 3;
    padding: 0 12px 12px 0;
  }
`;

const getContainerLayoutStyles = ({ $orientation }: StyledContainerProps) => {
  if ($orientation === 'vertical') {
    return verticalStyles;
  }

  return horizontalStyles;
};

export const StyledContainer = styled.div.attrs({
  className: cls.root as string,
})<StyledContainerProps>`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  box-sizing: border-box;
  min-width: var(--tour-widget-min-width, auto);
  width: fit-content;
  color: ${C.titleColor};
  border: 4px solid transparent;
  background: linear-gradient(
        var(--tour-widget-background, ${C.cardBg}),
        var(--tour-widget-background, ${C.cardBg})
      )
      padding-box,
    ${outlineAccentGradient} border-box;
  border-radius: var(--tour-widget-border-radius, ${C.radius});

  & > :not(.${cls.gradient}):not(.${cls.shapeGradient}) {
    position: relative;
    z-index: 1;
  }

  ${({ $isDark }) => tourWidgetThemePalettes[$isDark ? 'dark' : 'light']}

  ${getContainerLayoutStyles}

  ${({ $css }) => $css}
`;

export const StyledShapeGradient = styled.svg.attrs({
  className: cls.shapeGradient as string,
  focusable: 'false',
  preserveAspectRatio: 'none',
})`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  clip-path: inset(
    0 round max(0px, calc(var(--tour-widget-border-radius, ${C.radius}) - 4px))
  );
  opacity: var(
    --tour-widget-shape-gradient-opacity,
    var(--tour-widget-theme-shape-opacity, 0.32)
  );

  /* Маска оставляет SVG-хвост видимым только в нижней части карточки,
     чтобы диагональная фигура не перекрывала основной фон сверху. */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent var(--tour-widget-shape-gradient-mask-start, 42%),
    rgba(0, 0, 0, 0.55) var(--tour-widget-shape-gradient-mask-middle, 58%),
    #000 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent var(--tour-widget-shape-gradient-mask-start, 42%),
    rgba(0, 0, 0, 0.55) var(--tour-widget-shape-gradient-mask-middle, 58%),
    #000 100%
  );

  & path {
    opacity: var(--tour-widget-shape-gradient-path-opacity, 0.86);
  }
`;

export const StyledGradient = styled.div.attrs({
  className: cls.gradient as string,
})`
  position: absolute;
  z-index: 0;
  left: var(--tour-widget-gradient-frame-left, 0);
  right: var(--tour-widget-gradient-frame-right, 0);
  bottom: var(--tour-widget-gradient-frame-bottom, 0);
  height: var(--tour-widget-gradient-frame-height, 36%);
  overflow: hidden;
  border-radius: max(
    0px,
    calc(var(--tour-widget-border-radius, ${C.radius}) - 4px)
  );
  pointer-events: none;

  /* Маска плавно проявляет нижний gradient-frame и срезает верхнюю часть blur,
     иначе размытие уходит слишком высоко поверх контента. */
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000 var(--tour-widget-gradient-frame-fade, 24%),
    #000 100%
  );

  &::before,
  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
  }

  /* ::before — основной вытянутый прямоугольник с сине-голубым градиентом.
     Blur превращает его в мягкую нижнюю подсветку без жестких границ. */
  &::before {
    width: var(--tour-widget-gradient-width);
    height: var(--tour-widget-gradient-height);
    left: var(--tour-widget-gradient-left);
    top: var(--tour-widget-gradient-top);

    background: var(
      --tour-widget-gradient-background,
      ${LIGHT_PALETTE['--tour-widget-theme-gradient-horizontal']}
    );

    filter: blur(var(--tour-widget-gradient-blur, 69px));
    opacity: var(--tour-widget-gradient-opacity, 1);
  }

  /* ::after — отдельный зеленый овал справа. Его blur смешивается с
     прямоугольником и дает зеленую подсветку, как в Figma-композиции. */
  &::after {
    display: var(--tour-widget-inline-oval-display, block);
    width: var(--tour-widget-oval-width);
    height: var(--tour-widget-oval-height);
    left: var(--tour-widget-oval-left);
    top: var(--tour-widget-oval-top);
    border-radius: var(--tour-widget-oval-border-radius, 0);

    background: var(
      --tour-widget-oval-background,
      var(
        --tour-widget-theme-oval-background,
        ${LIGHT_PALETTE['--tour-widget-theme-oval-background']}
      )
    );

    filter: blur(var(--tour-widget-oval-blur, 127px));
    opacity: var(--tour-widget-oval-opacity, 1);
  }
`;

// Овал проявляется выше узкой нижней полосы в обеих темах.
// Отдельная область сохраняет её маску и положение без изменений.
export const StyledOvalGradient = styled(StyledGradient)`
  display: var(--tour-widget-oval-frame-display, none);
  height: var(--tour-widget-oval-frame-height, 0%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 40%, #000 100%);

  &::before {
    display: none;
  }

  &::after {
    display: block;
  }
`;

export const StyledHeader = styled.div.attrs({
  className: cls.header as string,
})<{ $css?: CssProp }>`
  min-width: 0;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  ${({ $css }) => $css}
`;

export const StyledHeaderTitle = styled(Typography).attrs({
  className: cls.headerTitle as string,
})`
  min-width: 0;
  color: ${C.titleColor};
  white-space: pre-line;
`;

export const StyledHeaderDescription = styled(Typography).attrs({
  className: cls.headerDescription as string,
})`
  min-width: 0;
  color: ${C.descriptionColor};
  white-space: pre-line;
`;

export const StyledContent = styled.div.attrs({
  className: cls.content as string,
})<{ $css?: CssProp }>`
  & img,
  & picture,
  & video,
  & canvas,
  & svg {
    display: block;
    object-fit: cover;
    border-radius: var(--tour-widget-content-border-radius, ${C.contentRadius});
  }

  ${({ $css }) => $css}
`;

export const StyledFooter = styled.div.attrs({
  className: cls.footer as string,
})<{ $css?: CssProp }>`
  min-width: 0;

  ${({ $css }) => $css}
`;

export const StyledBullets = styled.div.attrs({
  className: cls.bullets as string,
})<{ $css?: CssProp }>`
  display: inline-block;
  width: var(--tour-widget-bullets-width, auto);
  min-width: 0;
  overflow: hidden;

  ${({ $css }) => $css}
`;

export const StyledBulletsTrack = styled.div.attrs({
  className: cls.bulletsTrack as string,
})`
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateX(var(--tour-widget-bullets-offset, 0px));
  transition: transform 300ms ease;
  will-change: transform;
`;

export const StyledBullet = styled.span.attrs({
  className: cls.bullet as string,
})<{ $css?: CssProp }>`
  display: block;
  flex: 0 0 8px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: var(
    --tour-widget-bullet-background,
    ${surfaceTransparentTertiary}
  );
  transform: scale(1);
  transform-origin: center;
  transition: background-color 300ms ease, opacity 300ms ease,
    transform 300ms ease;

  &.${cls.bulletActive} {
    background: var(--tour-widget-bullet-active-background, ${textPrimary});
  }

  &.${cls.bulletEdge} {
    transform: scale(0.75);
  }

  ${({ $css }) => $css}
`;
