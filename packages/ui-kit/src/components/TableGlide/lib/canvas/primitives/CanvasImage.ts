import { CanvasLeaf } from '../core/CanvasLeaf';
import type { CanvasFlexStyle } from '../core/CanvasNode';
import { DrawBatcher } from '../core/DrawBatcher';
import { getImage, type ImageFit, paintImage } from './image/image';

export interface CanvasImageOptions {
  /** URL изображения, передаваемый загрузчику Glide. */
  src: string;
  /** Масштабирование в границах элемента: cover — обрезка, contain — вписывание, fill — растяжение. По умолчанию cover. */
  fit?: ImageFit;
}

export class CanvasImage extends CanvasLeaf {
  constructor(id: string, public options: CanvasImageOptions) {
    super(id);
    this.style = { flexShrink: 0 };
  }

  override set style(value: CanvasFlexStyle) {
    super.style = { ...super.style, ...value };
  }

  override get style(): CanvasFlexStyle {
    return super.style;
  }

  measure() {
    if (typeof this.style.width === 'number')
      this.rect.width = this.style.width;
    if (typeof this.style.height === 'number')
      this.rect.height = this.style.height;
  }

  onPaint(batcher: DrawBatcher) {
    const image = getImage(this.options.src, batcher.imageResources);
    if (!image) return;
    const rect = { ...this.rect };
    batcher.custom((ctx) => {
      ctx.save();
      try {
        ctx.beginPath();
        ctx.rect(rect.x, rect.y, rect.width, rect.height);
        ctx.clip();
        paintImage(ctx, image, rect, this.options.fit ?? 'cover');
      } finally {
        ctx.restore();
      }
    });
  }
}
