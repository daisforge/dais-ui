import {
  BUTTON_PADDING_Y,
  type ButtonSize,
  type ButtonView,
  ICON_SIZE_ADJUSTMENT,
  SIZE_CONFIG,
} from '../cells/buttons';
import { drawCheckbox } from '../cells/buttons/drawCheckbox';
import type { ButtonIcon } from '../cells/iconSprites';
import { CanvasLeaf } from '../core/CanvasLeaf';
import { CanvasEvent, CanvasFlexStyle } from '../core/CanvasNode';
import { DrawBatcher } from '../core/DrawBatcher';
import type { GlideThemeForRender } from '../../../theming/types';

const DEFAULT_HEIGHT = 28;
const DEFAULT_VIEW: ButtonView = 'default';
const DEFAULT_SIZE: ButtonSize = 's';
const DEFAULT_CURSOR = 'pointer';
const MAX_ICON_SIZE = 20;

export const CHECKBOX_ICONS = {
  indeterminateIcon:
    '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke-linecap="round" stroke-width="2" stroke="currentColor" d="m5.09449,9.0315l8,0"></path></svg>',
  checkedIcon:
    '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="m5.70711,8.15582c-0.39053,-0.39052 -1.02369,-0.39052 -1.41422,0c-0.39052,0.39053 -0.39052,1.02369 0,1.41422l3.70666,3.70666l6.71095,-6.70248c0.3908,-0.39027 0.3912,-1.02344 0.0009,-1.41421c-0.3903,-0.39077 -1.02344,-0.39117 -1.41421,-0.00089l-5.29674,5.29004l-2.29334,-2.29334z"></path></svg>',
};
export const CHECKBOX_ICONS_ARR = Object.values(CHECKBOX_ICONS);

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

export interface CanvasCheckboxOptions {
  /** @deprecated Use `buttonSize` with ButtonSize type instead */
  size?: number | 'auto';
  theme?: GlideThemeForRender;

  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  buttonSize?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: CanvasEvent) => void;
}

export class CanvasCheckbox extends CanvasLeaf {
  icon: ButtonIcon;

  /** @deprecated Use `buttonSize` instead */
  size: number | 'auto';

  checked: boolean;

  indeterminate: boolean;

  view: ButtonView = DEFAULT_VIEW;

  buttonSize: ButtonSize = DEFAULT_SIZE;

  disabled: boolean;

  isHovered = false;

  // FIXME СОЗДАНО ПОСКОЛЬКУ НИЖЕ ИМЕЛАСЬ ССЫЛКА НА НЕ this.useNewApi
  useNewApi = false;

  theme: GlideThemeForRender | undefined;

  constructor(
    id: string,
    icon: ButtonIcon,
    checked = false,
    indeterminate = false,
    options?: CanvasCheckboxOptions
  ) {
    super(id);
    this.icon = icon;
    this.checked = checked;
    this.indeterminate = indeterminate;
    this.size = options?.size ?? 'auto';
    this.theme = options?.theme;
    this.view = options?.view ?? 'primary';
    this.disabled = options?.disabled ?? false;
    super.style = {
      ...super.style,
      cursor: this.disabled ? 'auto' : DEFAULT_CURSOR,
    };

    // if (options?.buttonSize !== undefined) {
    //   this.buttonSize = options.buttonSize;
    //   this.useNewApi = true;
    // }
    if (!this.disabled && options?.onClick) {
      this.onClick = (event) => options.onClick?.(event);
    }
  }

  override set style(value: CanvasFlexStyle) {
    super.style = { ...super.style, ...value };
  }

  override get style(): CanvasFlexStyle {
    const baseStyle = super.style;
    if (!baseStyle.cursor) {
      baseStyle.cursor = DEFAULT_CURSOR;
    }
    return baseStyle;
  }

  measure(_ctx: CanvasRenderingContext2D) {
    if (this.useNewApi) {
      const sizeConfig = SIZE_CONFIG[this.buttonSize];
      this.rect.height = sizeConfig.height;
      this.rect.width = sizeConfig.height; // Square button
    } else {
      const metrics = resolveButtonMetrics(this.size);
      this.rect.height = metrics.height;
      this.rect.width = metrics.width;
    }
  }

  onPaint(batcher: DrawBatcher, _ctx: CanvasRenderingContext2D) {
    const { x, y, width, height } = this.rect;

    drawCheckbox(
      batcher,
      x,
      y,
      this.checked,
      this.indeterminate,
      width,
      height,
      this.icon,
      this.theme ?? BUTTON_THEME,
      this.view,
      this.disabled,
      this.isHovered
    );
  }

  override onMouseEnter() {
    this.isHovered = true;
  }

  override onMouseLeave() {
    this.isHovered = false;
  }

  // hitTest(x: number, y: number): CanvasNode[] {
  //   if (this.useNewApi) {
  //     const sizeConfig = SIZE_CONFIG[this.buttonSize];
  //     const bounds = {
  //       x: this.rect.x,
  //       y: this.rect.y,
  //       width: sizeConfig.height,
  //       height: sizeConfig.height,
  //     };
  //     if (isPointInBounds(x, y, bounds)) {
  //       return [this];
  //     }
  //     return [];
  //   }

  //   const metrics = resolveButtonMetrics(this.size, this.rect.height);
  //   const bounds = getInteractiveBounds(this.rect.x, this.rect.y, metrics);

  //   if (isPointInBounds(x, y, bounds)) {
  //     return [this];
  //   }

  //   return [];
  // }
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getInteractiveBounds(x: number, y: number, metrics: ButtonMetrics) {
  return {
    x: x + metrics.paddingX,
    y: y + metrics.paddingY,
    width: metrics.width - metrics.paddingX * 2,
    height: metrics.height - metrics.paddingY * 2,
  };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
