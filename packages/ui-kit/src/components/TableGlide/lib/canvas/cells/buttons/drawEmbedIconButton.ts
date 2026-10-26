import { DrawBatcher } from '../../core/DrawBatcher';
import { isHoveringBounds } from '../helpers';
import type { ButtonIcon } from '../iconSprites';
import type { HoverState } from '../types';
import {
  resolveButtonColors,
  resolveEmbedIconButtonColors,
} from './colorResolvers';
import {
  BUTTON_PADDING_Y,
  DEFAULT_BORDER_WIDTH,
  DEFAULT_BUTTON_RADIUS,
  DEFAULT_SIZE,
  DEFAULT_VIEW,
  getEmbedIconButtonViewColors,
  ICON_SIZE_ADJUSTMENT,
  MAX_ICON_SIZE,
  resolveTokens,
  SIZE_CONFIG,
} from './constants';
import { drawIcon } from './drawIcon';
import type {
  ButtonBounds,
  ButtonSize,
  ButtonVariant,
  ButtonView,
  EmbedViewColors,
  GlideThemeForRender,
} from './types';

/**
 * Кнопка-иконка старого способа подключения (`variant`): рисуется с
 * подложкой, цвета — те же виды из токенов темы, что у новых кнопок.
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

  const hasBorder = colors.borderColor !== 'transparent';
  batcher.roundedRect(
    x,
    buttonY,
    actualSize,
    buttonHeight,
    DEFAULT_BUTTON_RADIUS,
    {
      fillStyle: colors.bgColor,
      strokeStyle: hasBorder ? colors.borderColor : undefined,
      lineWidth: hasBorder ? DEFAULT_BORDER_WIDTH : 0,
    }
  );

  drawIcon(batcher, icon, iconX, iconY, iconSize, colors.iconColor);

  return { x, y: buttonY, width: actualSize, height: buttonHeight };
}

/**
 * Кнопка-иконка без подложки по виду и размеру: иконка красится токенами
 * текста своей темы (viewColorsMap), без карты — токены светлой темы.
 * Недоступная — цвет покоя на 40 %, без hover.
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
  },
  viewColorsMap?: Record<ButtonView, EmbedViewColors>
): ButtonBounds {
  const sizeConfig = SIZE_CONFIG[size];
  const viewColors = (
    viewColorsMap ?? getEmbedIconButtonViewColors(resolveTokens(undefined))
  )[view];
  const buttonSize = overrides?.overrideSquareSize ?? sizeConfig.height;
  const iconSizeFinal = overrides?.overrideIconSize ?? sizeConfig.iconSize;
  const isHovered = isHoveringBounds(hovered, {
    x,
    y,
    width: buttonSize,
    height: buttonSize,
  });
  const colors = resolveEmbedIconButtonColors(
    viewColors,
    disabled,
    isHovered,
    overrides
  );

  const centerX = x + buttonSize * 0.5;
  const centerY = y + buttonSize * 0.5;
  const iconX = centerX - iconSizeFinal * 0.5;
  const iconY = centerY - iconSizeFinal * 0.5;

  // Фон у кнопки без подложки — surface-clear (прозрачный): подложку не рисуем.
  if (colors.borderColor !== 'transparent') {
    batcher.roundedRect(x, y, buttonSize, buttonSize, sizeConfig.borderRadius, {
      fillStyle: colors.bgColor,
      strokeStyle: colors.borderColor,
      lineWidth: DEFAULT_BORDER_WIDTH,
    });
  }

  drawIcon(batcher, icon, iconX, iconY, iconSizeFinal, colors.iconColor);

  return { x, y, width: buttonSize, height: buttonSize };
}
