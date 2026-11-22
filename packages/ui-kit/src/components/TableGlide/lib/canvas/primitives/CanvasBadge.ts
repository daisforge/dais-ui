import type { Theme } from '../../../theming/types';
import type { Tokens } from '../../../tokens';
import {
  type ButtonIcon,
  drawIcon,
  getCachedTextWidth,
} from '../cells/buttons';
import { CanvasLeaf } from '../core/CanvasLeaf';
import { DrawBatcher } from '../core/DrawBatcher';
import { resolveOverflowText } from '../utils/textOverflow';
import { type CanvasTextMark, paintTextMarks } from './textMarks';

// Badge view types based on sdds_finai__light theme
export type BadgeView =
  | 'default'
  | 'accent'
  | 'positive'
  | 'warning'
  | 'negative'
  | 'dark'
  | 'light';

// Badge size types
export type BadgeSize = 'xs' | 's' | 'm' | 'l';

const BADGE_SIZE_BY_ROW_SIZE: Record<Theme['rowSize'], BadgeSize> = {
  small: 'xs',
  medium: 'm',
  big: 'l',
};

export function resolveBadgeSize(
  size?: BadgeSize,
  rowSize?: Theme['rowSize'],
): BadgeSize {
  return size ?? (rowSize ? BADGE_SIZE_BY_ROW_SIZE[rowSize] : 's');
}

// Size configuration
interface SizeConfig {
  height: number;
  fontSize: number;
  paddingX: number;
  borderRadius: number;
}

const SIZE_CONFIG: Record<BadgeSize, SizeConfig> = {
  xs: { height: 16, fontSize: 10, paddingX: 4, borderRadius: 4 },
  s: { height: 20, fontSize: 11, paddingX: 6, borderRadius: 5 },
  m: { height: 24, fontSize: 12, paddingX: 8, borderRadius: 6 },
  l: { height: 28, fontSize: 13, paddingX: 10, borderRadius: 7 },
};

// View colors based on sdds_finai__light theme
interface ViewColors {
  bgColor: string;
  bgColorTransparent: string;
  textColor: string;
  textColorOnTransparent: string;
}

function buildBadgeViewColors(tokens: Tokens): Record<BadgeView, ViewColors> {
  return {
    default: {
      bgColor: tokens.surfaceSolidDefault,
      bgColorTransparent: tokens.surfaceTransparentSecondary,
      textColor: tokens.inverseTextPrimary,
      textColorOnTransparent: tokens.textPrimary,
    },
    accent: {
      bgColor: tokens.surfaceAccent,
      bgColorTransparent: tokens.surfaceTransparentAccent,
      textColor: tokens.onDarkTextPrimary,
      textColorOnTransparent: tokens.textAccent,
    },
    positive: {
      bgColor: tokens.surfacePositive,
      bgColorTransparent: tokens.surfaceTransparentPositive,
      textColor: tokens.onDarkTextPrimary,
      textColorOnTransparent: tokens.textPositive,
    },
    warning: {
      bgColor: tokens.surfaceWarning,
      bgColorTransparent: tokens.surfaceTransparentWarning,
      textColor: tokens.onDarkTextPrimary,
      textColorOnTransparent: tokens.textWarning,
    },
    negative: {
      bgColor: tokens.surfaceNegative,
      bgColorTransparent: tokens.surfaceTransparentNegative,
      textColor: tokens.onDarkTextPrimary,
      textColorOnTransparent: tokens.textNegative,
    },
    dark: {
      bgColor: tokens.onLightSurfaceSolidDefault,
      bgColorTransparent: tokens.onLightSurfaceTransparentDeep,
      textColor: tokens.onDarkTextPrimary,
      textColorOnTransparent: tokens.onLightTextPrimary,
    },
    light: {
      bgColor: tokens.onDarkSurfaceSolidDefault,
      bgColorTransparent: tokens.onDarkSurfaceTransparentCard,
      textColor: tokens.onLightTextPrimary,
      textColorOnTransparent: tokens.onDarkTextPrimary,
    },
  };
}

const ICON_TEXT_SPACING = 6;
/** Высота пластины `Canvas.Mark` относительно размера шрифта бейджа */
const MARK_HEIGHT_TO_FONT_SIZE = 1.4;

// Icon sizes for each badge size
const ICON_SIZE_CONFIG: Record<BadgeSize, number> = {
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
};

export function getBadgeIconSize(size: BadgeSize): number {
  return ICON_SIZE_CONFIG[size];
}

export interface CanvasBadgeOptions {
  view?: BadgeView;
  /** Явный размер имеет приоритет. По умолчанию: small → xs (16), medium → m (24), big → l (28); без rowSize — s (20). */
  size?: BadgeSize;
  transparent?: boolean;
  clear?: boolean;
  leftIcon?: ButtonIcon;
  rightIcon?: ButtonIcon;
  pilled?: boolean;
  theme?: Theme;
  /** Кастомный цвет текста (аналог customColor в базовом Badge из sdds-finai).
   * Принимает конкретные значения цвета: hex (#0B7ECB), rgb(), rgba().
   * CSS-переменные (var(--...)) не поддерживаются — Canvas API работает только с конкретными цветами. */
  customColor?: string;
  /** Кастомный цвет фона (аналог customBackgroundColor в базовом Badge из sdds-finai).
   * Принимает конкретные значения цвета: hex (#0B7ECB), rgb(), rgba().
   * CSS-переменные (var(--...)) не поддерживаются — Canvas API работает только с конкретными цветами. */
  customBackgroundColor?: string;
  /** Подсветка фрагментов текста (`Canvas.Mark`) */
  marks?: readonly CanvasTextMark[];
}

export class CanvasBadge extends CanvasLeaf {
  text: string;

  view: BadgeView = 'default';

  size: BadgeSize = 's';

  transparent = false;

  clear = false;

  pilled = false;

  leftIcon?: ButtonIcon;

  rightIcon?: ButtonIcon;

  private viewColors: Partial<Record<BadgeView, ViewColors>> = {};

  customColor?: string;

  customBackgroundColor?: string;

  marks?: readonly CanvasTextMark[];

  constructor(id: string, text: string, options?: CanvasBadgeOptions) {
    super(id);
    this.text = text;
    this.size = resolveBadgeSize(options?.size, options?.theme?.rowSize);
    if (options) {
      if (options.view !== undefined) this.view = options.view;
      if (options.transparent !== undefined)
        this.transparent = options.transparent;
      if (options.clear !== undefined) this.clear = options.clear;
      if (options.pilled !== undefined) this.pilled = options.pilled;
      this.leftIcon = options.leftIcon;
      this.rightIcon = options.rightIcon;
      this.customColor = options.customColor;
      this.customBackgroundColor = options.customBackgroundColor;
      this.marks = options.marks;
      if (options.theme?.tokens) {
        this.viewColors = buildBadgeViewColors(options.theme.tokens);
      }
    }
  }

  measure(ctx: CanvasRenderingContext2D) {
    const sizeConfig = SIZE_CONFIG[this.size];
    const iconSize = getBadgeIconSize(this.size);
    const font = `${sizeConfig.fontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    const textWidth = getCachedTextWidth(ctx, this.text, font);

    // Отступ между иконкой и текстом нужен, только когда текст есть.
    // Для бейджа без текста (одна иконка) отступ дал бы пустоту сбоку,
    // из-за неё иконка выглядела прижатой к краю, а не по центру.
    const hasText = this.text.length > 0;
    let iconsWidth = 0;
    if (this.leftIcon)
      iconsWidth += iconSize + (hasText ? ICON_TEXT_SPACING : 0);
    if (this.rightIcon)
      iconsWidth += iconSize + (hasText ? ICON_TEXT_SPACING : 0);

    this.rect.width = textWidth + iconsWidth + sizeConfig.paddingX * 2;
    this.rect.height = sizeConfig.height;
  }

  onPaint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D) {
    const { x, y, width, height } = this.rect;
    const sizeConfig = SIZE_CONFIG[this.size];
    const iconSize = getBadgeIconSize(this.size);
    const viewColors = this.viewColors[this.view];

    if (!viewColors) return;

    const font = `${sizeConfig.fontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;

    // Determine colors based on transparent/clear mode
    // customColor/customBackgroundColor имеют приоритет (аналогично базовому Badge из sdds-finai)
    let bgColor: string;
    let textColor: string;

    if (this.clear) {
      bgColor = 'transparent';
      textColor = this.customColor ?? viewColors.textColorOnTransparent;
    } else if (this.transparent) {
      bgColor = this.customBackgroundColor ?? viewColors.bgColorTransparent;
      textColor = this.customColor ?? viewColors.textColorOnTransparent;
    } else {
      bgColor = this.customBackgroundColor ?? viewColors.bgColor;
      textColor = this.customColor ?? viewColors.textColor;
    }

    // Draw background (only if not clear)
    if (!this.clear) {
      const radius = this.pilled ? height / 2 : sizeConfig.borderRadius;

      batcher.roundedRect(x, y, width, height, radius, {
        fillStyle: bgColor,
      });
    }

    const centerY = y + height / 2;
    let currentX = x + sizeConfig.paddingX;
    const iconSpacing = this.text.length > 0 ? ICON_TEXT_SPACING : 0;

    // Draw left icon
    if (this.leftIcon) {
      const iconY = centerY - iconSize / 2;
      drawIcon(batcher, this.leftIcon, currentX, iconY, iconSize, textColor);
      currentX += iconSize + iconSpacing;
    }

    // Layout мог сжать бейдж: резервируем место под отступы и обе иконки.
    const iconsWidth =
      (this.leftIcon ? iconSize + iconSpacing : 0) +
      (this.rightIcon ? iconSize + iconSpacing : 0);
    const textWidth = Math.max(0, width - sizeConfig.paddingX * 2 - iconsWidth);
    const ellipsis = '…';
    const resolvedText = resolveOverflowText({
      ctx,
      text: this.text,
      font,
      maxWidth: textWidth,
      textOverflow: 'ellipsis',
      ellipsis,
    });

    if (this.marks) {
      const markHeight = Math.min(
        height,
        Math.round(sizeConfig.fontSize * MARK_HEIGHT_TO_FONT_SIZE),
      );
      paintTextMarks(
        batcher,
        this.marks,
        {
          text: this.text,
          start: 0,
          shownLength: resolvedText.didTruncate
            ? Math.max(0, resolvedText.text.length - ellipsis.length)
            : this.text.length,
          x: currentX,
          y: centerY - markHeight / 2,
          height: markHeight,
        },
        (text) => getCachedTextWidth(ctx, text, font),
      );
    }

    if (resolvedText.text.length > 0) {
      batcher.fillTextClipped(
        resolvedText.text,
        currentX,
        centerY,
        font,
        textColor,
        { x: currentX, y, width: textWidth, height },
        'middle',
      );
    }

    // Draw right icon
    if (this.rightIcon) {
      const rightIconX = currentX + resolvedText.width + iconSpacing;
      const iconY = centerY - iconSize / 2;
      drawIcon(batcher, this.rightIcon, rightIconX, iconY, iconSize, textColor);
    }
  }
}
