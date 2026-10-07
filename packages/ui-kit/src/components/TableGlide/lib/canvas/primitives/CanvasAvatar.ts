import type { GlideThemeForRender } from '../../../theming/types';
import { getTokens } from '../../../tokens';
import { CanvasLeaf } from '../core/CanvasLeaf';
import type { CanvasFlexStyle, Rect } from '../core/CanvasNode';
import { DrawBatcher } from '../core/DrawBatcher';
import { AVATAR_GROUP_GEOMETRY } from './avatar/geometry';
import { getImage, paintImage } from './image/image';

/** Доступные размеры аватара, определяющие его диаметр и размер текста. */
export type AvatarSize = 's' | 'm' | 'l' | 'xxl';
export interface AvatarContent {
  /** Имя участника для инициалов; также определяет, можно ли сохранить старое фото при смене URL. */
  name?: string;
  /** URL фотографии; пока фото недоступно, отображаются инициалы. */
  url?: string;
  /** Непустой текст вместо фотографии и инициалов, например счётчик +N. */
  customText?: string;
}
export interface CanvasAvatarOptions extends AvatarContent {
  /** Размер аватара: s — 24, m — 36, l — 48, xxl — 88 px. По умолчанию s. */
  size?: AvatarSize;
  /** Тема таблицы с цветами и шрифтом; в JSX передаётся автоматически. */
  theme?: GlideThemeForRender;
}
// Размеры и вес текста соответствуют конфигурации Avatar в SDDS FinAI.
const AVATAR_FONT_WEIGHT = 600;
export const AVATAR_METRICS = {
  s: { diameter: 24, fontSize: 8 },
  m: { diameter: 36, fontSize: 14 },
  l: { diameter: 48, fontSize: 20 },
  xxl: { diameter: 88, fontSize: 32 },
} as const;

export function avatarInitials(name = '') {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0] ?? '')
    .join('')
    .toUpperCase();
}

export class CanvasAvatar extends CanvasLeaf {
  /** Обрезка внутри группы не меняет прямоугольную область событий мыши. */
  groupClip?: Rect;

  cutLeft = false;

  cutRight = false;

  constructor(id: string, public options: CanvasAvatarOptions = {}) {
    super(id);
    const { diameter } = this.metrics;
    this.style = { width: diameter, height: diameter, flexShrink: 0 };
  }

  override set style(value: CanvasFlexStyle) {
    super.style = { ...super.style, ...value };
  }

  override get style(): CanvasFlexStyle {
    return super.style;
  }

  get metrics() {
    return AVATAR_METRICS[this.options.size ?? 's'];
  }

  measure() {
    this.rect.width = this.metrics.diameter;
    this.rect.height = this.metrics.diameter;
  }

  onPaint(batcher: DrawBatcher) {
    const { diameter: d, fontSize } = this.metrics;
    const rect = { x: this.rect.x, y: this.rect.y, width: d, height: d };
    const url = this.options.customText ? undefined : this.options.url;
    const image = batcher.imageTransitions.isActive
      ? batcher.imageTransitions.getAvatarImage(this.id, this.options.name, url)
      : getImage(url, batcher.imageResources);
    const text = this.options.customText || avatarInitials(this.options.name);
    const tokens = this.options.theme?.tokens ?? getTokens();
    const clip = this.groupClip && { ...this.groupClip };
    const { cutLeft, cutRight } = this;
    const { cutoutRadius, leftCutoutCenter, rightCutoutCenter } =
      AVATAR_GROUP_GEOMETRY;
    batcher.custom((ctx) => {
      ctx.save();
      try {
        if (clip) {
          ctx.beginPath();
          ctx.rect(clip.x, clip.y, clip.width, clip.height);
          ctx.clip();
        }
        // Вырезы применяем отдельно, чтобы их пересечение не стало видимым из-за evenodd.
        [
          cutLeft ? leftCutoutCenter : undefined,
          cutRight ? rightCutoutCenter : undefined,
        ].forEach((offset) => {
          if (offset === undefined) return;
          ctx.beginPath();
          ctx.rect(rect.x, rect.y, d, d);
          ctx.moveTo(rect.x + offset * d + cutoutRadius * d, rect.y + d / 2);
          ctx.arc(
            rect.x + offset * d,
            rect.y + d / 2,
            cutoutRadius * d,
            0,
            Math.PI * 2,
          );
          ctx.clip('evenodd');
        });
        ctx.beginPath();
        ctx.arc(rect.x + d / 2, rect.y + d / 2, d / 2, 0, Math.PI * 2);
        ctx.clip();
        // Прозрачность уже задана в цвете фона; текст и фото остаются непрозрачными.
        ctx.fillStyle =
          tokens.surfaceAccent20 ?? tokens.surfaceTransparentAccentActive;
        ctx.fillRect(rect.x, rect.y, d, d);
        if (image) {
          paintImage(ctx, image, rect, 'fill');
        } else {
          ctx.font = `${AVATAR_FONT_WEIGHT} ${fontSize}px ${
            this.options.theme?.fontFamily ||
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = tokens.textAccent;
          ctx.fillText(text, rect.x + d / 2, rect.y + d / 2);
        }
      } finally {
        ctx.restore();
      }
    });
  }
}
