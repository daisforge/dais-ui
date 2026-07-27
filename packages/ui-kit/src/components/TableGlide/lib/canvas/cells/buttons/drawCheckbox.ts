import { DrawBatcher } from '../../core/DrawBatcher';
import { isHoveringBounds } from '../helpers';
import type { ButtonIcon } from '../iconSprites';
import type { HoverState } from '../types';
import { resolveCheckboxColors } from './colorResolvers';
import { MAX_ICON_SIZE } from './constants';
import { drawIcon } from './drawIcon';
import type { ButtonBounds, GlideThemeForRender } from './types';

const CHECKBOX_MAP = {
  small: {
    radius: 4,
    stroke: 1.5,
  },
  medium: {
    radius: 4,
    stroke: 1.5,
  },
  big: {
    radius: 6,
    stroke: 2,
  },
};

/**
 * Draw an icon-only button with theme-based styling
 */
export function drawCheckbox(
  batcher: DrawBatcher,
  x: number,
  y: number,
  checked: boolean,
  indeterminate: boolean,
  size: number | 'auto',
  height: number,
  icon: ButtonIcon,
  theme: GlideThemeForRender,
  _variant: string,
  disabled = false,
  hovered: HoverState = false
): ButtonBounds {
  const paddingY = 0;
  const buttonHeight = height - paddingY * 2;
  const iconSizeAdjustment = 0;
  const iconSize = Math.min(buttonHeight - iconSizeAdjustment, MAX_ICON_SIZE);
  const actualSize = size === 'auto' ? iconSize : size;
  const buttonY = y + paddingY;
  const rowSize = theme?.rowSize || 'medium';

  const isHaveBorder = !checked && !indeterminate;
  const isHovered = isHoveringBounds(hovered, {
    x,
    y,
    width: actualSize,
    height,
  });
  const colors = resolveCheckboxColors(
    theme,
    checked,
    indeterminate,
    isHovered,
    disabled
  );

  const centerX = x + actualSize * 0.5;
  const centerY = buttonY + buttonHeight * 0.5;
  const iconX = centerX - iconSize * 0.5;
  const iconY = centerY - iconSize * 0.5;

  batcher.roundedRect(
    x,
    buttonY,
    actualSize,
    buttonHeight,
    CHECKBOX_MAP[rowSize].radius,
    {
      fillStyle: colors.bgColor,
      strokeStyle: colors.borderColor,
      lineWidth: isHaveBorder ? CHECKBOX_MAP[rowSize].stroke : undefined,
    }
  );

  drawIcon(batcher, icon, iconX, iconY, iconSize, colors.iconColor);

  return { x, y: buttonY, width: actualSize, height: buttonHeight };
}
