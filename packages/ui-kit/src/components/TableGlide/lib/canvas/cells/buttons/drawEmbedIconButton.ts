import { DrawBatcher } from '../../core/DrawBatcher';
import { isHoveringBounds } from '../helpers';
import type { ButtonIcon } from '../iconSprites';
import type { HoverState } from '../types';
import { resolveEmbedIconButtonColors } from './colorResolvers';
import {
  DEFAULT_SIZE,
  DEFAULT_VIEW,
  getEmbedIconButtonViewColors,
  LIGHT_THEME_TOKENS,
  SIZE_CONFIG,
} from './constants';
import { drawIcon } from './drawIcon';
import type {
  ButtonBounds,
  ButtonSize,
  ButtonView,
  EmbedViewColors,
} from './types';

/**
 * Кнопка-иконка без подложки по виду и размеру: иконка красится токенами
 * текста своей темы (viewColorsMap), без карты токенами светлой темы.
 * Недоступная: цвет покоя на 40 %, без hover. Фон у такой кнопки прозрачный
 * (surface-clear), подложку не рисуем.
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
    viewColorsMap ?? getEmbedIconButtonViewColors(LIGHT_THEME_TOKENS)
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

  drawIcon(batcher, icon, iconX, iconY, iconSizeFinal, colors.iconColor);

  return { x, y, width: buttonSize, height: buttonSize };
}
