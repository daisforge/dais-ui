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
import { tourWidgetTokens as tokens } from './TourWidget.tokens';
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
  cardBg: () => `var(${tokens.themeBackground}, ${onLightSurfaceSolidPrimary})`,
  titleColor: () => textPrimary,
  descriptionColor: () => textPrimary,
};

const verticalGradientPreset = css`
  ${tokens.gradientFrameHeight}: 10%;
  ${tokens.gradientFrameLeft}: 0;
  ${tokens.gradientFrameRight}: 0;
  ${tokens.gradientFrameBottom}: 0;
  ${tokens.gradientFrameFade}: 60%;

  ${tokens.gradientBackground}: var(
    ${tokens.themeGradientVertical},
    ${LIGHT_PALETTE[tokens.themeGradientVertical]}
  );
  ${tokens.gradientWidth}: 115%;
  ${tokens.gradientHeight}: 70%;
  ${tokens.gradientLeft}: -15%;
  ${tokens.gradientTop}: 110%;
  ${tokens.gradientBlur}: var(
    ${tokens.themeGradientVerticalBlur},
    25px
  );
  ${tokens.gradientOpacity}: var(
    ${tokens.themeGradientOpacity},
    1
  );

  ${tokens.inlineOvalDisplay}: none;
  ${tokens.ovalFrameDisplay}: block;
  ${tokens.ovalFrameHeight}: 32%;
  ${tokens.ovalBorderRadius}: 50%;
  ${tokens.shapeGradientMaskStart}: 84%;
  ${tokens.shapeGradientMaskMiddle}: 94%;

  ${tokens.ovalWidth}: 45%;
  ${tokens.ovalHeight}: 100%;
  ${tokens.ovalLeft}: 90%;
  ${tokens.ovalTop}: 60%;
  ${tokens.ovalBlur}: var(${tokens.themeOvalVerticalBlur}, 48px);
  ${tokens.ovalOpacity}: var(
    ${tokens.themeOvalVerticalOpacity},
    0.42
  );
`;

const horizontalGradientPreset = css`
  ${tokens.gradientFrameHeight}: 30%;
  ${tokens.gradientFrameLeft}: 0;
  ${tokens.gradientFrameRight}: 0;
  ${tokens.gradientFrameBottom}: 0;
  ${tokens.gradientFrameFade}: 78%;

  ${tokens.gradientBackground}: var(
    ${tokens.themeGradientHorizontal},
    ${LIGHT_PALETTE[tokens.themeGradientHorizontal]}
  );
  ${tokens.gradientWidth}: 115%;
  ${tokens.gradientHeight}: 50%;
  ${tokens.gradientLeft}: -10%;
  ${tokens.gradientTop}: 100%;
  ${tokens.gradientBlur}: var(
    ${tokens.themeGradientHorizontalBlur},
    25px
  );
  ${tokens.gradientOpacity}: var(
    ${tokens.themeGradientOpacity},
    1
  );

  ${tokens.inlineOvalDisplay}: none;
  ${tokens.ovalFrameDisplay}: block;
  ${tokens.ovalFrameHeight}: 42%;
  ${tokens.ovalBorderRadius}: 50%;
  ${tokens.shapeGradientMaskStart}: 76%;
  ${tokens.shapeGradientMaskMiddle}: 88%;

  ${tokens.ovalWidth}: 30%;
  ${tokens.ovalHeight}: 120%;
  ${tokens.ovalLeft}: 90%;
  ${tokens.ovalTop}: 20%;
  ${tokens.ovalBlur}: var(${tokens.themeOvalHorizontalBlur}, 15px);
  ${tokens.ovalOpacity}: var(
    ${tokens.themeOvalHorizontalOpacity},
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
  min-width: var(${tokens.minWidth}, auto);
  width: fit-content;
  color: ${C.titleColor};
  border: 4px solid transparent;
  background: linear-gradient(
        var(${tokens.background}, ${C.cardBg}),
        var(${tokens.background}, ${C.cardBg})
      )
      padding-box,
    ${outlineAccentGradient} border-box;
  border-radius: var(${tokens.borderRadius}, ${C.radius});

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
    0 round max(0px, calc(var(${tokens.borderRadius}, ${C.radius}) - 4px))
  );
  opacity: var(
    ${tokens.shapeGradientOpacity},
    var(${tokens.themeShapeOpacity}, 0.32)
  );

  /* Маска оставляет SVG-хвост видимым только в нижней части карточки,
     чтобы диагональная фигура не перекрывала основной фон сверху. */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent var(${tokens.shapeGradientMaskStart}, 42%),
    rgba(0, 0, 0, 0.55) var(${tokens.shapeGradientMaskMiddle}, 58%),
    #000 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent var(${tokens.shapeGradientMaskStart}, 42%),
    rgba(0, 0, 0, 0.55) var(${tokens.shapeGradientMaskMiddle}, 58%),
    #000 100%
  );

  & path {
    opacity: var(${tokens.shapeGradientPathOpacity}, 0.86);
  }
`;

export const StyledGradient = styled.div.attrs({
  className: cls.gradient as string,
})`
  position: absolute;
  z-index: 0;
  left: var(${tokens.gradientFrameLeft}, 0);
  right: var(${tokens.gradientFrameRight}, 0);
  bottom: var(${tokens.gradientFrameBottom}, 0);
  height: var(${tokens.gradientFrameHeight}, 36%);
  overflow: hidden;
  border-radius: max(0px, calc(var(${tokens.borderRadius}, ${C.radius}) - 4px));
  pointer-events: none;

  /* Маска плавно проявляет нижний gradient-frame и срезает верхнюю часть blur,
     иначе размытие уходит слишком высоко поверх контента. */
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000 var(${tokens.gradientFrameFade}, 24%),
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
    width: var(${tokens.gradientWidth});
    height: var(${tokens.gradientHeight});
    left: var(${tokens.gradientLeft});
    top: var(${tokens.gradientTop});

    background: var(
      ${tokens.gradientBackground},
      ${LIGHT_PALETTE[tokens.themeGradientHorizontal]}
    );

    filter: blur(var(${tokens.gradientBlur}, 69px));
    opacity: var(${tokens.gradientOpacity}, 1);
  }

  /* ::after — отдельный зеленый овал справа. Его blur смешивается с
     прямоугольником и дает зеленую подсветку, как в Figma-композиции. */
  &::after {
    display: var(${tokens.inlineOvalDisplay}, block);
    width: var(${tokens.ovalWidth});
    height: var(${tokens.ovalHeight});
    left: var(${tokens.ovalLeft});
    top: var(${tokens.ovalTop});
    border-radius: var(${tokens.ovalBorderRadius}, 0);

    background: var(
      ${tokens.ovalBackground},
      var(
        ${tokens.themeOvalBackground},
        ${LIGHT_PALETTE[tokens.themeOvalBackground]}
      )
    );

    filter: blur(var(${tokens.ovalBlur}, 127px));
    opacity: var(${tokens.ovalOpacity}, 1);
  }
`;

// Овал проявляется выше узкой нижней полосы в обеих темах.
// Отдельная область сохраняет её маску и положение без изменений.
export const StyledOvalGradient = styled(StyledGradient)`
  display: var(${tokens.ovalFrameDisplay}, none);
  height: var(${tokens.ovalFrameHeight}, 0%);
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
    border-radius: var(${tokens.contentBorderRadius}, ${C.contentRadius});
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
  width: var(${tokens.bulletsWidth}, auto);
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
  transform: translateX(var(${tokens.bulletsOffset}, 0px));
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
  background: var(${tokens.bulletBackground}, ${surfaceTransparentTertiary});
  transform: scale(1);
  transform-origin: center;
  transition: background-color 300ms ease, opacity 300ms ease,
    transform 300ms ease;

  &.${cls.bulletActive} {
    background: var(${tokens.bulletActiveBackground}, ${textPrimary});
  }

  &.${cls.bulletEdge} {
    transform: scale(0.75);
  }

  ${({ $css }) => $css}
`;
