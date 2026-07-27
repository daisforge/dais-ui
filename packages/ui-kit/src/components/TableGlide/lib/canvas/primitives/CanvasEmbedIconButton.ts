import {
  BUTTON_PADDING_Y,
  type ButtonView,
  drawEmbedIconButtonWithView,
  drawIconButton,
  EmbedIconButtonSize,
  ICON_SIZE_ADJUSTMENT,
  SIZE_CONFIG,
} from '../cells/buttons';
import type { ButtonIcon } from '../cells/iconSprites';
import { CanvasLeaf } from '../core/CanvasLeaf';
import { CanvasEvent, CanvasFlexStyle, CanvasNode } from '../core/CanvasNode';
import { DrawBatcher } from '../core/DrawBatcher';

const DEFAULT_HEIGHT = 28;
const DEFAULT_VIEW: ButtonView = 'default';
const DEFAULT_SIZE: EmbedIconButtonSize = 's';
const DEFAULT_CURSOR = 'pointer';
const MAX_ICON_SIZE = 20;

// Legacy theme for backward compatibility
const BUTTON_THEME = {
  accentColor: '#1e88e5',
  accentLight: 'rgba(30, 136, 229, 0.16)',
  accentFg: '#ffffff',
  bgCell: '#ffffff',
  borderColor: '#e0e0e0',
  textLight: '#9e9e9e',
  textDark: '#1f1f1f',
  baseFontFull:
    "13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

interface ButtonMetrics {
  height: number;
  width: number;
  paddingX: number;
  paddingY: number;
  iconSize: number;
}

export interface CanvasEmbedIconButtonOptions {
  /** @deprecated Use `buttonSize` with EmbedIconButtonSize type instead */
  size?: number | 'auto';
  /** @deprecated Use `view` instead */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  buttonSize?: EmbedIconButtonSize;
  /** Переопределяет размер квадратной кнопки (px), приоритет над SIZE_CONFIG */
  overrideSquareSize?: number;
  /** Переопределяет размер иконки внутри кнопки (px), приоритет над SIZE_CONFIG */
  overrideIconSize?: number;
  /** Переопределяет цвет иконки в покое (иначе — цвет из view-палитры) */
  iconColor?: string;
  /** Переопределяет цвет иконки при hover (иначе — iconColor override или view) */
  iconColorHovered?: string;
  disabled?: boolean;
  onClick?: (event: CanvasEvent) => void;
}

export class CanvasEmbedIconButton extends CanvasLeaf {
  icon: ButtonIcon;

  /** @deprecated Use `buttonSize` instead */
  size: number | 'auto';

  /** @deprecated Use `view` instead */
  variant: 'primary' | 'secondary' | 'danger';

  view: ButtonView = DEFAULT_VIEW;

  buttonSize: EmbedIconButtonSize = DEFAULT_SIZE;

  disabled: boolean;

  overrideSquareSize?: number;

  overrideIconSize?: number;

  iconColor?: string;

  iconColorHovered?: string;

  isHovered = false;

  private useNewApi = false;

  private getDisabled = () => (this.disabled ? 'default' : DEFAULT_CURSOR);

  constructor(
    id: string,
    icon: ButtonIcon,
    options?: CanvasEmbedIconButtonOptions
  ) {
    super(id);
    this.icon = icon;
    this.size = options?.size ?? 'auto';
    this.variant = options?.variant ?? 'primary';
    this.disabled = options?.disabled ?? false;
    super.style = {
      ...super.style,
      cursor: this.getDisabled(),
    };

    if (options?.view !== undefined) {
      this.view = options.view;
      this.useNewApi = true;
    }
    if (options?.buttonSize !== undefined) {
      this.buttonSize = options.buttonSize;
      this.useNewApi = true;
    }
    if (options?.overrideSquareSize !== undefined) {
      this.overrideSquareSize = options.overrideSquareSize;
    }
    if (options?.overrideIconSize !== undefined) {
      this.overrideIconSize = options.overrideIconSize;
    }
    if (options?.iconColor !== undefined) {
      this.iconColor = options.iconColor;
    }
    if (options?.iconColorHovered !== undefined) {
      this.iconColorHovered = options.iconColorHovered;
    }
    if (options?.onClick) {
      this.onClick = (event) => options.onClick?.(event);
    }
  }

  override set style(value: CanvasFlexStyle) {
    super.style = {
      ...super.style,
      cursor: this.getDisabled(),
      ...value,
    };
  }

  override get style(): CanvasFlexStyle {
    const baseStyle = super.style;
    if (!baseStyle.cursor) {
      baseStyle.cursor = this.getDisabled();
    }
    return baseStyle;
  }

  measure(_ctx: CanvasRenderingContext2D) {
    if (this.useNewApi) {
      const sizeConfig = SIZE_CONFIG[this.buttonSize];
      const h = this.overrideSquareSize ?? sizeConfig.height;
      this.rect.height = h;
      this.rect.width = h; // Square button
    } else {
      const metrics = resolveButtonMetrics(this.size);
      this.rect.height = metrics.height;
      this.rect.width = metrics.width;
    }
  }

  onPaint(batcher: DrawBatcher, _ctx: CanvasRenderingContext2D) {
    const { x, y, width, height } = this.rect;

    if (this.useNewApi) {
      const overrides =
        this.overrideSquareSize !== undefined ||
        this.overrideIconSize !== undefined ||
        this.iconColor !== undefined ||
        this.iconColorHovered !== undefined
          ? {
              overrideSquareSize: this.overrideSquareSize,
              overrideIconSize: this.overrideIconSize,
              iconColor: this.iconColor,
              iconColorHovered: this.iconColorHovered,
            }
          : undefined;
      drawEmbedIconButtonWithView(
        batcher,
        x,
        y,
        this.icon,
        this.view,
        this.buttonSize,
        this.disabled,
        this.isHovered,
        overrides
      );
      if (CanvasNode.DEBUG) {
        const sizeConfig = SIZE_CONFIG[this.buttonSize];
        const btnSize = this.overrideSquareSize ?? sizeConfig.height;
        const iconSz = this.overrideIconSize ?? sizeConfig.iconSize;
        const iconX = x + (btnSize - iconSz) * 0.5;
        const iconY = y + (btnSize - iconSz) * 0.5;
        batcher.strokeRect(iconX, iconY, iconSz, iconSz, 'cyan', 1);
      }
    } else {
      drawIconButton(
        batcher,
        x,
        y,
        width,
        height,
        this.icon,
        BUTTON_THEME,
        this.variant,
        this.disabled,
        this.isHovered
      );
    }
  }

  override onMouseEnter() {
    this.isHovered = true;
  }

  override onMouseLeave() {
    this.isHovered = false;
  }

  // Сохраняем кастомную кликабельную область embed-кнопки, но общий hit-test
  // теперь сам сортирует найденные ноды по zIndex/source-order.
  protected override containsHitPoint(x: number, y: number): boolean {
    if (this.useNewApi) {
      const sizeConfig = SIZE_CONFIG[this.buttonSize];
      const h = this.overrideSquareSize ?? sizeConfig.height;
      const bounds = {
        x: this.rect.x,
        y: this.rect.y,
        width: h,
        height: h,
      };
      return isPointInBounds(x, y, bounds);
    }

    const metrics = resolveButtonMetrics(this.size, this.rect.height);
    const bounds = getInteractiveBounds(this.rect.x, this.rect.y, metrics);

    return isPointInBounds(x, y, bounds);
  }
}

function resolveButtonMetrics(
  size: number | 'auto',
  currentHeight?: number
): ButtonMetrics {
  const height =
    typeof size === 'number' ? size : currentHeight ?? DEFAULT_HEIGHT;
  const paddingX = 0;
  const paddingY = BUTTON_PADDING_Y;
  const iconSize = Math.min(
    height - paddingY * 2 - ICON_SIZE_ADJUSTMENT,
    MAX_ICON_SIZE
  );
  const width = typeof size === 'number' ? size : iconSize + paddingX * 2;

  return { height, width, paddingX, paddingY, iconSize };
}

function getInteractiveBounds(x: number, y: number, metrics: ButtonMetrics) {
  return {
    x: x + metrics.paddingX,
    y: y + metrics.paddingY,
    width: metrics.width - metrics.paddingX * 2,
    height: metrics.height - metrics.paddingY * 2,
  };
}

function isPointInBounds(
  x: number,
  y: number,
  bounds: { x: number; y: number; width: number; height: number }
): boolean {
  return (
    x >= bounds.x &&
    x <= bounds.x + bounds.width &&
    y >= bounds.y &&
    y <= bounds.y + bounds.height
  );
}
