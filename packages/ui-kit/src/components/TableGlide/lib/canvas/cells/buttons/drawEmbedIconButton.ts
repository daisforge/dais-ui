import { DrawBatcher } from '../../core/DrawBatcher';
import { isHoveringBounds } from '../helpers';
import type { ButtonIcon } from '../iconSprites';
import type { HoverState } from '../types';
import { resolveButtonColors } from './colorResolvers';
import {
  BUTTON_PADDING_Y,
  DEFAULT_BORDER_WIDTH,
  DEFAULT_BUTTON_RADIUS,
  DEFAULT_SIZE,
  DEFAULT_VIEW,
  ICON_SIZE_ADJUSTMENT,
  MAX_ICON_SIZE,
  SIZE_CONFIG,
  VIEW_COLORS,
} from './constants';
import { drawIcon } from './drawIcon';
import type {
  ButtonBounds,
  ButtonSize,
  ButtonVariant,
  ButtonView,
  GlideThemeForRender,
  ViewColors,
} from './types';

/**
 * Draw an icon-only button with theme-based styling
 */
export function drawEmbedIconButton(
  batcher: DrawBatcher,
  x: number,
  y: number,
  size: number | 'auto',
  height: number,
  icon: ButtonIcon,
  theme: GlideThemeForRender,
  variant: ButtonVariant = 'primary',
  disabled = false,
  hovered: HoverState = false
): ButtonBounds {
  const paddingY = BUTTON_PADDING_Y;
  const buttonHeight = height - paddingY * 2;
  const iconSize = Math.min(buttonHeight - ICON_SIZE_ADJUSTMENT, MAX_ICON_SIZE);
  const actualSize = size === 'auto' ? iconSize : size;
  const buttonY = y + paddingY;
  const isHovered = isHoveringBounds(hovered, {
    x,
    y,
    width: actualSize,
    height,
  });
  const colors = resolveButtonColors(theme, variant, disabled, isHovered);

  const centerX = x + actualSize * 0.5;
  const centerY = buttonY + buttonHeight * 0.5;
  const iconX = centerX - iconSize * 0.5;
  const iconY = centerY - iconSize * 0.5;

  batcher.roundedRect(
    x,
    buttonY,
    actualSize,
    buttonHeight,
    DEFAULT_BUTTON_RADIUS,
    {
      fillStyle: colors.bgColor,
      strokeStyle: colors.borderColor,
      lineWidth: DEFAULT_BORDER_WIDTH,
    }
  );

  drawIcon(batcher, icon, iconX, iconY, iconSize, colors.iconColor);

  return { x, y: buttonY, width: actualSize, height: buttonHeight };
}
const hexOpacityObj = {
  100: 'FF',
  90: 'E6',
  80: 'CC',
  75: 'BF',
  70: 'B3',
  60: '99',
  50: '80',
  40: '66',
  30: '4D',
  25: '40',
  20: '33',
  10: '1A',
  0: '00',
};
const getColorWithOpacityHex = (
  hex6length: string,
  opacity: keyof typeof hexOpacityObj
) => {
  if (hex6length.length !== 6) {
    return hex6length;
  }
  return hex6length.slice(0, 4) + hexOpacityObj[opacity];
};
const TRANSP = 'transparent';
type EmbedViewColors = ViewColors & { iconColorHovered: string };

const VIEW_COLORS_EMBED = Object.fromEntries(
  Object.entries(VIEW_COLORS).map(
    ([key, value]): [ButtonView, EmbedViewColors] => {
      if (key === 'secondary') {
        return [
          key,
          {
            bgColor: TRANSP,
            borderColor: TRANSP,
            textColor: '#485056B0',
            bgColorHover: TRANSP,
            iconColor: '#485056B0',
            iconColorHovered: '#485056FF',
          },
        ];
      }
      return [
        key as ButtonView,
        {
          bgColor: TRANSP,
          borderColor: TRANSP,
          textColor: value.bgColor,
          bgColorHover: TRANSP,
          iconColor: value.bgColor,
          iconColorHovered: value.bgColorHover,
        },
      ];
    }
  )
) as Record<ButtonView, EmbedViewColors>;

/**
 * Draw an icon-only button with view and size support (sdds_finai__light theme)
 */
export function drawEmbedIconButtonWithView(
  batcher: DrawBatcher,
  x: number,
  y: number,
  icon: ButtonIcon,
  view: ButtonView = DEFAULT_VIEW,
  size: ButtonSize = DEFAULT_SIZE,
  disabled = false,
  hovered: HoverState = false,
  overrides?: {
    overrideSquareSize?: number;
    overrideIconSize?: number;
    /** Переопределяет цвет иконки в покое (иначе — цвет из view-палитры). */
    iconColor?: string;
    /** Переопределяет цвет иконки при hover (иначе — iconColor override или view). */
    iconColorHovered?: string;
  }
): ButtonBounds {
  const sizeConfig = SIZE_CONFIG[size];
  const viewColors = VIEW_COLORS_EMBED[view];
  const buttonSize = overrides?.overrideSquareSize ?? sizeConfig.height;
  const iconSizeFinal = overrides?.overrideIconSize ?? sizeConfig.iconSize;
  const isHovered = isHoveringBounds(hovered, {
    x,
    y,
    width: buttonSize,
    height: buttonSize,
  });
  // const colors = resolveViewColors(viewColors, disabled, isHovered);
  const colors = viewColors;

  const centerX = x + buttonSize * 0.5;
  const centerY = y + buttonSize * 0.5;
  const iconX = centerX - iconSizeFinal * 0.5;
  const iconY = centerY - iconSizeFinal * 0.5;

  if (colors.bgColor !== 'transparent') {
    batcher.roundedRect(x, y, buttonSize, buttonSize, sizeConfig.borderRadius, {
      fillStyle: colors.bgColor,
      strokeStyle:
        colors.borderColor !== 'transparent' ? colors.borderColor : undefined,
      lineWidth:
        colors.borderColor !== 'transparent' ? DEFAULT_BORDER_WIDTH : 0,
    });
  } else if (colors.borderColor !== 'transparent') {
    batcher.roundedRect(x, y, buttonSize, buttonSize, sizeConfig.borderRadius, {
      fillStyle: colors.bgColor,
      strokeStyle: colors.borderColor,
      lineWidth: DEFAULT_BORDER_WIDTH,
    });
  }
  // iconColor-override (напр. акцент активной сортировки) приоритетнее view-палитры.
  // hover-override опционален: если не задан, при hover берём базовый override.
  const baseIconColor = overrides?.iconColor ?? colors.iconColor;
  const hoverIconColor =
    overrides?.iconColorHovered ??
    overrides?.iconColor ??
    colors.iconColorHovered;
  // eslint-disable-next-line no-nested-ternary
  const calculatedIconColor = disabled
    ? getColorWithOpacityHex(baseIconColor, 40)
    : isHovered
    ? hoverIconColor
    : baseIconColor;

  drawIcon(batcher, icon, iconX, iconY, iconSizeFinal, calculatedIconColor);

  return { x, y, width: buttonSize, height: buttonSize };
}
