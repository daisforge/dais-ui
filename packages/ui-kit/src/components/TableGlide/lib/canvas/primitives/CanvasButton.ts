import {
  type ButtonIcon,
  type ButtonSize,
  type ButtonView,
  type ViewColors,
  drawButton,
  drawButtonWithView,
  FALLBACK_THEME,
  getButtonViewColors,
  type GlideThemeForRender,
  resolveTokens,
  SIZE_CONFIG,
} from '../cells/buttons';
import { CanvasLeaf } from '../core/CanvasLeaf';
import { CanvasEvent, CanvasFlexStyle } from '../core/CanvasNode';
import { DrawBatcher } from '../core/DrawBatcher';

const DEFAULT_VIEW: ButtonView = 'default';
const DEFAULT_SIZE: ButtonSize = 's';
const DEFAULT_CURSOR = 'pointer';
const ICON_TEXT_SPACING = 8;

const textWidthCache = new Map<string, number>();

export interface CanvasButtonOptions {
  /** @deprecated Use `view` instead */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  size?: ButtonSize;
  /** Left icon (SVG string or image) */
  leftIcon?: ButtonIcon;
  /** Right icon (SVG string or image) */
  rightIcon?: ButtonIcon;
  disabled?: boolean;
  onClick?: (event: CanvasEvent) => void;
  /** Тема таблицы: из её токенов берутся цвета видов. */
  theme?: GlideThemeForRender;
}

export class CanvasButton extends CanvasLeaf {
  text: string;

  /** @deprecated Use `view` instead */
  variant: 'primary' | 'secondary' | 'danger' = 'primary';

  view: ButtonView = DEFAULT_VIEW;

  size: ButtonSize = DEFAULT_SIZE;

  leftIcon?: ButtonIcon;

  rightIcon?: ButtonIcon;

  disabled = false;

  isHovered = false;

  private useNewApi = false;

  private theme: GlideThemeForRender = FALLBACK_THEME;

  private viewColors: Record<ButtonView, ViewColors> = getButtonViewColors(
    resolveTokens(FALLBACK_THEME),
  );

  constructor(id: string, text: string, options?: CanvasButtonOptions) {
    super(id);
    this.text = text;
    super.style = { ...super.style, cursor: DEFAULT_CURSOR };
    if (options) {
      if (options.view !== undefined) {
        this.view = options.view;
        this.useNewApi = true;
      } else if (options.variant !== undefined) {
        this.variant = options.variant;
      }
      if (options.size !== undefined) {
        this.size = options.size;
        this.useNewApi = true;
      }
      this.leftIcon = options.leftIcon;
      this.rightIcon = options.rightIcon;

      if (options.disabled !== undefined) this.disabled = options.disabled;
      if (options.onClick) this.onClick = options.onClick;
      if (options.theme) {
        this.theme = options.theme;
        this.viewColors = getButtonViewColors(resolveTokens(options.theme));
      }
    }
  }

  override set style(value: CanvasFlexStyle) {
    super.style = { ...super.style, cursor: DEFAULT_CURSOR, ...value };
  }

  override get style(): CanvasFlexStyle {
    const baseStyle = super.style;
    if (!baseStyle.cursor) {
      baseStyle.cursor = DEFAULT_CURSOR;
    }
    return baseStyle;
  }

  measure(ctx: CanvasRenderingContext2D) {
    const sizeConfig = SIZE_CONFIG[this.size];
    const font = `${sizeConfig.fontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    const textWidth = getCachedTextWidth(ctx, this.text, font);

    let iconsWidth = 0;
    if (this.leftIcon) iconsWidth += sizeConfig.iconSize + ICON_TEXT_SPACING;
    if (this.rightIcon) iconsWidth += sizeConfig.iconSize + ICON_TEXT_SPACING;

    this.rect.width = textWidth + iconsWidth + sizeConfig.paddingX * 2;
    this.rect.height = sizeConfig.height;
  }

  onPaint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D) {
    const { x, y, width } = this.rect;

    if (this.useNewApi) {
      drawButtonWithView(
        batcher,
        x,
        y,
        width,
        this.text,
        this.view,
        this.size,
        this.disabled,
        this.isHovered,
        this.leftIcon,
        this.rightIcon,
        ctx,
        ICON_TEXT_SPACING,
        this.viewColors
      );
    } else {
      // Старый способ подключения (variant): цвета берутся из токенов темы.
      const sizeConfig = SIZE_CONFIG[this.size];
      drawButton(
        batcher,
        x,
        y,
        width,
        sizeConfig.height,
        this.text,
        this.theme,
        this.variant,
        this.disabled,
        this.isHovered,
        this.leftIcon,
        this.rightIcon,
        ctx,
        ICON_TEXT_SPACING
      );
    }
  }

  override onMouseEnter() {
    this.isHovered = true;
  }

  override onMouseLeave() {
    this.isHovered = false;
  }
}

function getCachedTextWidth(
  ctx: CanvasRenderingContext2D,
  text: string,
  font: string
): number {
  const key = `${font}|${text}`;
  let width = textWidthCache.get(key);
  if (width === undefined) {
    ctx.font = font;
    width = ctx.measureText(text).width;
    textWidthCache.set(key, width);
  }
  return width;
}
