import { CanvasLeaf } from '../core/CanvasLeaf';
import { DrawBatcher } from '../core/DrawBatcher';

export interface CanvasRectOptions {
  /** Цвет заливки */
  color?: string;
  /** Цвет рамки */
  borderColor?: string;
  /** Толщина рамки */
  borderWidth?: number;
}

const TRANSPARENT = 'transparent';
const DEFAULT_BORDER_WIDTH = 0;

export class CanvasRect extends CanvasLeaf {
  color: string = TRANSPARENT;

  override borderColor: string = TRANSPARENT;

  override borderWidth: number = DEFAULT_BORDER_WIDTH;

  constructor(id: string, color: string = TRANSPARENT) {
    super(id);
    this.color = color;
  }

  measure(_ctx: CanvasRenderingContext2D) {
    // Layout читает размер leaf-ноды из child.rect (FlexTreeBuilder, CanvasContainer).
    // Переносим фиксированные numeric-размеры из style в rect.
    // Процентные размеры ('100%') обрабатываются отдельно flex-логикой.
    const { style, rect } = this;
    if (typeof style.width === 'number') rect.width = style.width;
    if (typeof style.height === 'number') rect.height = style.height;
  }

  onPaint(batcher: DrawBatcher, _ctx: CanvasRenderingContext2D) {
    const { x, y, width, height } = this.rect;

    if (this.color !== TRANSPARENT) {
      batcher.fillRect(x, y, width, height, this.color);
    }

    if (this.borderWidth > 0 && this.borderColor !== TRANSPARENT) {
      const halfBorder = this.borderWidth / 2;
      batcher.strokeRect(
        x + halfBorder,
        y + halfBorder,
        width - this.borderWidth,
        height - this.borderWidth,
        this.borderColor,
        this.borderWidth
      );
    }
  }
}
