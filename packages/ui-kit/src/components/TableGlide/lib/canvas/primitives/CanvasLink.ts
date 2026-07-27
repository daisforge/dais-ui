import { ComponentProps } from 'react';
import type { Theme } from '../../../theming/types';
import type { Tokens } from '../../../tokens';
import { CanvasEvent, CanvasFlexStyle } from '../core/CanvasNode';
import { DrawBatcher } from '../core/DrawBatcher';
import { applyAlpha } from '../utils/colors';
import { CanvasText, CanvasTextOptions } from './CanvasText';
import { type Link } from '@ui-kit/components/Link';

type LinkAllProps = ComponentProps<typeof Link>;
export type LinkView = Extract<LinkAllProps['view'], string>;

interface LinkViewColors {
  color: string;
  colorHover: string;
  colorActive: string;
}

function buildLinkViewColors(tokens: Tokens): Record<LinkView, LinkViewColors> {
  return {
    default: {
      color: tokens.textPrimary,
      colorHover: tokens.textPrimaryHover,
      colorActive: tokens.textPrimaryActive,
    },
    accent: {
      color: tokens.textAccent,
      colorHover: tokens.textAccentHover,
      colorActive: tokens.textAccentActive,
    },
    secondary: {
      color: tokens.textSecondary,
      colorHover: tokens.textSecondaryHover,
      colorActive: tokens.textSecondaryActive,
    },
    tertiary: {
      color: tokens.textTertiary,
      colorHover: tokens.textTertiaryHover,
      colorActive: tokens.textTertiaryActive,
    },
    paragraph: {
      color: tokens.textParagraph,
      colorHover: tokens.textParagraphHover,
      colorActive: tokens.textParagraphActive,
    },
    positive: {
      color: tokens.textPositive,
      colorHover: tokens.textPositiveHover,
      colorActive: tokens.textPositiveActive,
    },
    warning: {
      color: tokens.textWarning,
      colorHover: tokens.textWarningHover,
      colorActive: tokens.textWarningActive,
    },
    negative: {
      color: tokens.textNegative,
      colorHover: tokens.textNegativeHover,
      colorActive: tokens.textNegativeActive,
    },
    // Компромиссный fallback для canvas: inherit здесь не поддержан,
    // используем цвета default
    clear: {
      color: tokens.textPrimary,
      colorHover: tokens.textPrimaryHover,
      colorActive: tokens.textPrimaryActive,
    },
  };
}

const DEFAULT_VIEW: LinkView = 'default';
const DEFAULT_CURSOR = 'pointer';
const DEFAULT_DISABLED_OPACITY = 0.4;
const UNDERLINE_OFFSET = 2;
const UNDERLINE_WIDTH = 1;

export interface CanvasLinkOptions extends CanvasTextOptions {
  href?: string;
  target?: string;
  rel?: string;
  view?: LinkView;
  disabled?: boolean;
  theme?: Theme;
}

export class CanvasLink extends CanvasText {
  href: string | undefined;

  target: string | undefined;

  rel: string | undefined;

  view: LinkView = DEFAULT_VIEW;

  disabled = false;

  isHovered = false;

  private isActive = false;

  private customClickHandler:
    | ((event: CanvasEvent<CanvasLink>) => void)
    | undefined;

  private hasCustomColor = false;

  private viewColors: Record<LinkView, LinkViewColors> | undefined;

  constructor(id: string, text: string, options?: CanvasLinkOptions) {
    super(id, text, options);
    super.style = { ...super.style, cursor: DEFAULT_CURSOR };

    if (options) {
      this.href = options.href;
      this.target = options.target;
      this.rel = options.rel;
      if (options.view !== undefined) this.view = options.view;
      if (options.disabled !== undefined) this.disabled = options.disabled;
      this.hasCustomColor = options.color !== undefined;

      if (options.theme?.tokens) {
        this.viewColors = buildLinkViewColors(options.theme.tokens);
      }
    }

    if (!this.hasCustomColor && this.viewColors) {
      this.color = this.viewColors[this.view].color;
    }
  }

  override set style(value: CanvasFlexStyle) {
    super.style = { ...super.style, cursor: DEFAULT_CURSOR, ...value };
  }

  override get style(): CanvasFlexStyle {
    const baseStyle = super.style;
    baseStyle.cursor = this.disabled ? 'not-allowed' : DEFAULT_CURSOR;
    return baseStyle;
  }

  setOnClick(handler: ((event: CanvasEvent<CanvasLink>) => void) | undefined) {
    this.customClickHandler = handler;
  }

  private resolveColor(): string {
    let color: string;

    if (this.hasCustomColor || !this.viewColors) {
      color = this.color;
    } else {
      const colors = this.viewColors[this.view];
      if (this.isActive) {
        color = colors.colorActive;
      } else if (this.isHovered) {
        color = colors.colorHover;
      } else {
        color = colors.color;
      }
    }

    if (this.disabled) {
      color = applyAlpha(color, DEFAULT_DISABLED_OPACITY);
    }

    return color;
  }

  override onPaint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D) {
    const originalColor = this.color;
    this.color = this.resolveColor();

    super.onPaint(batcher, ctx);

    const { view, isHovered, wordWrap } = this;
    // default, clear — underline always (even when disabled)
    // others — underline only on hover (hidden when disabled)
    // wordWrap — no underline (multiline not supported yet)
    const alwaysUnderline = view === 'default' || view === 'clear';
    const showUnderline =
      !wordWrap && (alwaysUnderline || (!this.disabled && isHovered));
    // CanvasText уже мог заменить строку на shortened + ellipsis.
    // Underline должен идти под видимой строкой, а не под исходным полным текстом.
    const underlineWidth = this.getLastPaintedTextWidth();

    if (showUnderline && underlineWidth > 0) {
      this.paintUnderline(batcher, underlineWidth);
    }

    this.color = originalColor;
  }

  private paintUnderline(batcher: DrawBatcher, underlineWidth: number) {
    const { x, y, height } = this.rect;
    const underlineY = y + height + UNDERLINE_OFFSET;
    const resolvedColor = this.resolveColor();

    batcher.custom((ctx) => {
      ctx.beginPath();
      ctx.moveTo(x, underlineY);
      ctx.lineTo(x + underlineWidth, underlineY);
      ctx.strokeStyle = resolvedColor;
      ctx.lineWidth = UNDERLINE_WIDTH;
      ctx.stroke();
    });
  }

  override onMouseEnter() {
    this.isHovered = true;
  }

  override onMouseLeave() {
    this.isHovered = false;
    this.isActive = false;
  }

  override onMouseDown() {
    if (!this.disabled) this.isActive = true;
  }

  override onMouseUp() {
    this.isActive = false;
  }

  override onClick(event: CanvasEvent) {
    if (this.disabled) return;

    let prevented = false;
    const originalPreventDefault = event.preventDefault;

    event.preventDefault = () => {
      prevented = true;
      originalPreventDefault.call(event);
    };

    if (this.customClickHandler) {
      this.customClickHandler(event as CanvasEvent<CanvasLink>);
      if (prevented) return;
    }

    this.navigate();
  }

  private navigate() {
    if (!this.href) return;

    const target = this.target || '_self';

    if (target === '_self') {
      window.location.href = this.href;
    } else {
      const rel =
        this.rel ?? (target === '_blank' ? 'noopener,noreferrer' : undefined);
      window.open(this.href, target, rel);
    }
  }
}
