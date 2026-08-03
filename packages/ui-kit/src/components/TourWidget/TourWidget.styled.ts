import { Typography } from '@ui-kit/components/Typography';
import {
  onDarkSurfaceSolidCardBrightness,
  onDarkSurfaceTransparentTertiary,
  onDarkTextPrimary,
  onDarkTextSecondary,
} from '@ui-kit/tokens';
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { tourWidgetClassNames as cls } from './TourWidget.classNames';
import type { TourWidgetOrientation } from './types';

type CssProp = string | CSSObject | FlattenSimpleInterpolation;

type StyledContainerProps = {
  $orientation: TourWidgetOrientation;
  $css?: CssProp;
};

const GRADIENT_COLORS = {
  verticalGreen: '56 255 62',
  horizontalGreen: '56 255 136',
  cyanSolid: '0 224 255',
  verticalBlue: '16 194 219',
  horizontalBlue: '16 138 219',
  verticalSlateBlue: '110 135 219',
  horizontalSlateBlue: '90 117 207',
  cyan: '0, 224, 255',
  blue: '25, 154, 240',
  periwinkle: '153, 176, 254',
  slateBlue: '90, 117, 207',
  green: '#56ff71',
  greenTransparent: 'rgba(86, 255, 113, 0)',
} as const;

const TOUR_WIDGET_GRADIENT = {
  vertical: `linear-gradient(
    -45.68deg,
    rgb(${GRADIENT_COLORS.verticalGreen}) 16.982%,
    rgb(${GRADIENT_COLORS.cyanSolid}) 16.982%,
    rgb(${GRADIENT_COLORS.verticalBlue}) 44.903%,
    rgb(${GRADIENT_COLORS.verticalSlateBlue}) 69.826%
  )`,
  horizontal: `linear-gradient(
    -45.68deg,
    rgb(${GRADIENT_COLORS.horizontalGreen}) 16.982%,
    rgb(${GRADIENT_COLORS.cyanSolid}) 16.982%,
    rgb(${GRADIENT_COLORS.horizontalBlue}) 44.903%,
    rgb(${GRADIENT_COLORS.horizontalSlateBlue}) 69.826%
  )`,
  fallback: `linear-gradient(
    90deg,
    rgba(${GRADIENT_COLORS.periwinkle}, 0.56) 0%,
    rgba(${GRADIENT_COLORS.blue}, 0.76) 50%,
    rgba(${GRADIENT_COLORS.cyan}, 0.84) 100%
  )`,
  oval: `linear-gradient(
    180deg,
    ${GRADIENT_COLORS.green} 0%,
    ${GRADIENT_COLORS.greenTransparent} 100%
  )`,
} as const;

const C = {
  radius: '14px',
  contentRadius: '6px',
  cardBg: () => onDarkSurfaceSolidCardBrightness,
  titleColor: () => onDarkTextPrimary,
  descriptionColor: () => onDarkTextSecondary,
};

const verticalGradientPreset = css`
  --tour-widget-gradient-frame-height: 42%;
  --tour-widget-gradient-frame-left: 0;
  --tour-widget-gradient-frame-right: 0;
  --tour-widget-gradient-frame-bottom: 0;
  --tour-widget-gradient-frame-fade: 60%;

  --tour-widget-gradient-background: ${TOUR_WIDGET_GRADIENT.vertical};
  --tour-widget-gradient-width: 115%;
  --tour-widget-gradient-height: 100%;
  --tour-widget-gradient-left: -15%;
  --tour-widget-gradient-top: 80%;
  --tour-widget-gradient-blur: 34px;
  --tour-widget-gradient-opacity: 1;

  --tour-widget-oval-width: 50%;
  --tour-widget-oval-height: 90%;
  --tour-widget-oval-left: 90%;
  --tour-widget-oval-top: 70%;
  --tour-widget-oval-blur: 37px;
  --tour-widget-oval-opacity: 1;
`;

const horizontalGradientPreset = css`
  --tour-widget-gradient-frame-height: 42%;
  --tour-widget-gradient-frame-left: 0;
  --tour-widget-gradient-frame-right: 0;
  --tour-widget-gradient-frame-bottom: 0;
  --tour-widget-gradient-frame-fade: 78%;

  --tour-widget-gradient-background: ${TOUR_WIDGET_GRADIENT.horizontal};
  --tour-widget-gradient-width: 115%;
  --tour-widget-gradient-height: 100%;
  --tour-widget-gradient-left: -10%;
  --tour-widget-gradient-top: 60%;
  --tour-widget-gradient-blur: 46px;
  --tour-widget-gradient-opacity: 1;

  --tour-widget-oval-width: 40%;
  --tour-widget-oval-height: 126%;
  --tour-widget-oval-left: 78%;
  --tour-widget-oval-top: 34%;
  --tour-widget-oval-blur: 86px;
  --tour-widget-oval-opacity: 0.82;
`;

const verticalStyles = css`
  ${verticalGradientPreset}

  display: flex;
  flex-direction: column;

  & .${cls.content} {
    padding: 10px 10px 0 10px;
  }

  & .${cls.header} {
    padding-top: 24px;
    padding-inline: 10px;
  }

  & .${cls.footer} {
    padding: 24px 10px 10px;
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
    padding: 10px 10px 0;
  }

  & .${cls.footer} {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    align-self: end;
    margin-top: 0;
    padding: 24px 10px 10px;
  }

  &:has(> .${cls.content}) {
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    column-gap: 24px;
  }

  &:has(> .${cls.content}) .${cls.content} {
    grid-column: 1;
    grid-row: 1 / 4;
    padding: 10px 0 10px 10px;
  }

  &:has(> .${cls.content}) .${cls.header} {
    grid-column: 2;
    grid-row: 1;
    padding: 10px 10px 0 0;
  }

  &:has(> .${cls.content}) .${cls.footer} {
    grid-column: 2;
    grid-row: 3;
    padding: 0 10px 10px 0;
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
  min-width: var(--tour-widget-min-width, auto);
  width: fit-content;
  color: ${C.titleColor};
  background: var(--tour-widget-background, ${C.cardBg});
  border-radius: var(--tour-widget-border-radius, ${C.radius});

  & > :not(.${cls.gradient}):not(.${cls.shapeGradient}) {
    position: relative;
    z-index: 1;
  }

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
  opacity: var(--tour-widget-shape-gradient-opacity, 0.84);

  /* Маска оставляет SVG-хвост видимым только в нижней части карточки,
     чтобы диагональная фигура не перекрывала основной темный фон сверху. */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 42%,
    rgba(0, 0, 0, 0.55) 58%,
    #000 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 42%,
    rgba(0, 0, 0, 0.55) 58%,
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
  border-radius: inherit;
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
      ${TOUR_WIDGET_GRADIENT.fallback}
    );

    filter: blur(var(--tour-widget-gradient-blur, 69px));
    opacity: var(--tour-widget-gradient-opacity, 1);
  }

  /* ::after — отдельный зеленый овал справа. Его blur смешивается с
     прямоугольником и дает зеленую подсветку, как в Figma-композиции. */
  &::after {
    width: var(--tour-widget-oval-width);
    height: var(--tour-widget-oval-height);
    left: var(--tour-widget-oval-left);
    top: var(--tour-widget-oval-top);

    background: var(
      --tour-widget-oval-background,
      ${TOUR_WIDGET_GRADIENT.oval}
    );

    filter: blur(var(--tour-widget-oval-blur, 127px));
    opacity: var(--tour-widget-oval-opacity, 1);
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
`;

export const StyledHeaderDescription = styled(Typography).attrs({
  className: cls.headerDescription as string,
})`
  min-width: 0;
  color: ${C.descriptionColor};
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
    ${onDarkSurfaceTransparentTertiary}
  );
  transform: scale(1);
  transform-origin: center;
  transition: background-color 300ms ease, opacity 300ms ease,
    transform 300ms ease;

  &.${cls.bulletActive} {
    background: var(
      --tour-widget-bullet-active-background,
      ${onDarkTextPrimary}
    );
  }

  &.${cls.bulletEdge} {
    transform: scale(0.75);
  }

  ${({ $css }) => $css}
`;
