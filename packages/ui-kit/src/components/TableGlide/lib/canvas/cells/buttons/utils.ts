import type { ButtonIcon } from '../iconSprites';
import {
  CACHE_SEPARATOR,
  HEX_COLOR_CHAR_CODE,
  HEX_COLOR_PREFIX,
} from './constants';

// Caches for performance
const textMeasureCache = new Map<string, number>();

/**
 * Цвет с непрозрачностью, умноженной на `factor` (0..1): для недоступного
 * контрола, который рисуется своими цветами на 40 %. Понимает #RGB, #RGBA,
 * #RRGGBB, #RRGGBBAA, rgb(), rgba() и `transparent`; прочие значения
 * возвращаются как есть.
 */
export function withOpacity(color: string, factor: number): string {
  const clamped = Math.min(1, Math.max(0, factor));
  if (color === 'transparent') {
    return color;
  }
  if (color.charCodeAt(0) === HEX_COLOR_CHAR_CODE) {
    let hex = color.slice(1);
    if (hex.length === 3 || hex.length === 4) {
      hex = hex
        .split('')
        .map((c) => c + c)
        .join('');
    }
    if (hex.length !== 6 && hex.length !== 8) {
      return color;
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const alpha = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
    return `rgba(${r}, ${g}, ${b}, ${roundAlpha(alpha * clamped)})`;
  }
  const rgbMatch = color.match(
    /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/i
  );
  if (rgbMatch) {
    const [, r, g, b, a] = rgbMatch;
    const alpha = a === undefined ? 1 : parseFloat(a);
    return `rgba(${r}, ${g}, ${b}, ${roundAlpha(alpha * clamped)})`;
  }
  return color;
}

const roundAlpha = (alpha: number) => Math.round(alpha * 1000) / 1000;

/**
 * Get cached text width for performance
 */
export function getCachedTextWidth(
  ctx: CanvasRenderingContext2D,
  text: string,
  font: string
): number {
  const key = `${font}${CACHE_SEPARATOR}${text}`;
  let width = textMeasureCache.get(key);
  if (width === undefined) {
    ctx.font = font;
    width = ctx.measureText(text).width;
    textMeasureCache.set(key, width);
  }
  return width;
}

/**
 * Calculate button width based on content
 */
export function calculateButtonWidth(
  width: number | 'auto',
  textWidth: number,
  iconSize: number,
  iconSpacing: number,
  leftIcon?: ButtonIcon,
  rightIcon?: ButtonIcon
): number {
  if (width !== 'auto') {
    return width;
  }

  let iconsWidth = 0;
  if (leftIcon) iconsWidth += iconSize + iconSpacing;
  if (rightIcon) iconsWidth += iconSize + iconSpacing;

  // Add some padding for text
  const DEFAULT_TEXT_PADDING = 4;
  return textWidth + iconsWidth + DEFAULT_TEXT_PADDING;
}

/**
 * Calculate content width for centering
 */
export function calculateContentWidth(
  textWidth: number,
  iconSize: number,
  iconSpacing: number,
  leftIcon?: ButtonIcon,
  rightIcon?: ButtonIcon
): number {
  let contentWidth = textWidth;
  if (leftIcon) contentWidth += iconSize + iconSpacing;
  if (rightIcon) contentWidth += iconSize + iconSpacing;
  return contentWidth;
}

/**
 * Clear all caches (useful for testing or memory management)
 */
export function clearButtonCaches(): void {
  textMeasureCache.clear();
}
