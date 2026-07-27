import type { ButtonIcon } from '../iconSprites';
import {
  CACHE_SEPARATOR,
  HEX_COLOR_CHAR_CODE,
  HEX_COLOR_PREFIX,
} from './constants';

// Caches for performance
const lightenColorCache = new Map<string, string>();
const textMeasureCache = new Map<string, number>();

/**
 * Lighten a hex color by a given amount
 */
export function lightenColor(color: string, amount: number): string {
  if (color.charCodeAt(0) === HEX_COLOR_CHAR_CODE) {
    const num = parseInt(color.slice(1), 16);
    const r = Math.min(255, ((num >> 16) & 0xff) + amount);
    const g = Math.min(255, ((num >> 8) & 0xff) + amount);
    const b = Math.min(255, (num & 0xff) + amount);
    return `${HEX_COLOR_PREFIX}${((r << 16) | (g << 8) | b)
      .toString(16)
      .padStart(6, '0')}`;
  }
  return color;
}

export function colorWithOpacity(color: string, opacity: number): string {
  // Нормализуем opacity в диапазон [0, 1]
  const clampedOpacity = Math.min(1, Math.max(0, opacity));

  if (color.charCodeAt(0) !== 35) {
    throw new Error('Only HEX color format is supported');
  }

  let hex = color.slice(1);

  let r: number;
  let g: number;
  let b: number;

  // Обработка коротких форм (#RGB и #RGBA)
  if (hex.length === 3 || hex.length === 4) {
    // Расширяем #RGB → #RRGGBB, #RGBA → #RRGGBBAA
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('');
  }

  // Теперь hex либо 6, либо 8 символов
  if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else if (hex.length === 8) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
    // Альфа-канал игнорируется — заменяется на переданный opacity
  } else {
    throw new Error(`Invalid HEX color format: ${color}`);
  }

  return `rgba(${r}, ${g}, ${b}, ${clampedOpacity})`;
}

/**
 * Lighten a color with caching for performance
 */
export function lightenColorCached(color: string, amount: number): string {
  const key = `${color}${CACHE_SEPARATOR}${amount}`;
  let result = lightenColorCache.get(key);
  if (result === undefined) {
    result = lightenColor(color, amount);
    lightenColorCache.set(key, result);
  }
  return result;
}

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
  lightenColorCache.clear();
  textMeasureCache.clear();
}
