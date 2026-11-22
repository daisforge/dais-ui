import { CanvasContainer } from '../core/CanvasContainer';
import type { CanvasEvent, CanvasFlexStyle } from '../core/CanvasNode';
import type { DrawBatcher } from '../core/DrawBatcher';
import type { CanvasNodeTooltipConfig } from '../utils/portalHoverEvents';
import { AVATAR_GROUP_GEOMETRY } from './avatar/geometry';
import {
  type AvatarContent,
  CanvasAvatar,
  type CanvasAvatarOptions,
} from './CanvasAvatar';

export interface CanvasAvatarItem extends AvatarContent {
  /** Стабильный уникальный идентификатор участника внутри группы; используется в ID canvas-ноды. */
  id: string;
  /** Подсказка при наведении на этого участника. */
  tooltip?: CanvasNodeTooltipConfig;
}
export interface AvatarGroupItemClick {
  /** Участник, по аватару которого нажали. */
  item: CanvasAvatarItem;
  /** Индекс участника в исходном массиве items, начиная с нуля. */
  index: number;
  /** Canvas-событие клика по аватару с координатами и управлением всплытием. */
  event: CanvasEvent<CanvasAvatar>;
}
export interface AvatarGroupOverflowClick {
  /** Число участников за счётчиком +N, включая отсутствующих в items. */
  hiddenCount: number;
  /** Известные скрытые участники: часть items после видимых аватаров. */
  hiddenItems: readonly CanvasAvatarItem[];
  /** Общее число участников после нормализации; не меньше длины items. */
  totalCount: number;
  /** Canvas-событие клика по счётчику +N. */
  event: CanvasEvent<CanvasAvatar>;
}
export interface CanvasAvatarGroupOptions
  extends Pick<CanvasAvatarOptions, 'size' | 'theme'> {
  /** Известные участники в порядке отображения; id должны быть уникальны внутри группы. */
  items: readonly CanvasAvatarItem[];
  /** Максимум видимых участников без учёта +N. По умолчанию 3, но не больше длины items. */
  visibleCount?: number;
  /** Общее число участников, включая ещё не загруженных. По умолчанию длина items; меньшие значения игнорируются. */
  totalCount?: number;
  /** Обработчик клика по видимому участнику. */
  onItemClick?: (args: AvatarGroupItemClick) => void;
  /** Обработчик клика по счётчику скрытых участников +N. */
  onOverflowClick?: (args: AvatarGroupOverflowClick) => void;
  /** Подсказка счётчика; по умолчанию текст +N. */
  overflowTooltip?: CanvasNodeTooltipConfig;
}

function count(value: number | undefined, fallback: number) {
  return value === undefined || !Number.isFinite(value)
    ? fallback
    : Math.min(Number.MAX_SAFE_INTEGER, Math.max(0, Math.floor(value)));
}

export function avatarGroupCounts(
  length: number,
  visibleCount?: number,
  totalCount?: number,
) {
  const visible = Math.min(length, count(visibleCount, 3));
  const total = Math.max(length, count(totalCount, length));
  const hidden = total - visible;
  return { visible, total, hidden, slots: visible + (hidden > 0 ? 1 : 0) };
}

export class CanvasAvatarGroup extends CanvasContainer {
  private activeIndex = -1;

  readonly avatars: CanvasAvatar[] = [];

  constructor(id: string, public options: CanvasAvatarGroupOptions) {
    super(id);
    const model = avatarGroupCounts(
      options.items.length,
      options.visibleCount,
      options.totalCount,
    );
    const visible = options.items.slice(0, model.visible);
    const ids = new Set(options.items.map((item) => item.id));
    if (ids.size !== options.items.length)
      throw new Error('Canvas.AvatarGroup items must have unique ids');
    visible.forEach((item, index) => {
      const avatar = new CanvasAvatar(`${id}:item:${item.id}`, {
        ...item,
        size: options.size,
        theme: options.theme,
      });
      avatar.tooltip = item.tooltip;
      avatar.onClick = (event) => {
        if (event.target === avatar)
          options.onItemClick?.({
            item,
            index,
            event: event as CanvasEvent<CanvasAvatar>,
          });
      };
      if (options.onItemClick) avatar.style.cursor = 'pointer';
      this.appendAvatar(avatar);
    });
    if (model.hidden > 0) {
      const avatar = new CanvasAvatar(`${id}:overflow`, {
        customText: `+${model.hidden}`,
        size: options.size,
        theme: options.theme,
      });
      avatar.tooltip = options.overflowTooltip ?? `+${model.hidden}`;
      avatar.onClick = (event) => {
        if (event.target === avatar)
          options.onOverflowClick?.({
            hiddenCount: model.hidden,
            hiddenItems: options.items.slice(model.visible),
            totalCount: model.total,
            event: event as CanvasEvent<CanvasAvatar>,
          });
      };
      if (options.onOverflowClick) avatar.style.cursor = 'pointer';
      this.appendAvatar(avatar);
    }
    const d = this.avatars[0]?.metrics.diameter ?? 0;
    this.position = 'relative';
    this.style = {
      width: model.slots
        ? d + (model.slots - 1) * AVATAR_GROUP_GEOMETRY.step * d
        : 0,
      height: d,
      flexShrink: 0,
    };
  }

  override set style(value: CanvasFlexStyle) {
    super.style = { ...super.style, ...value };
  }

  override get style(): CanvasFlexStyle {
    return super.style;
  }

  private appendAvatar(avatar: CanvasAvatar) {
    const index = this.avatars.length;
    avatar.position = 'absolute';
    avatar.left = index * AVATAR_GROUP_GEOMETRY.step * avatar.metrics.diameter;
    avatar.top = 0;
    avatar.portalHoverEnabled = avatar.tooltip !== undefined;
    avatar.onMouseEnter = () => {
      this.activeIndex = index;
    };
    avatar.onMouseLeave = () => {
      if (this.activeIndex === index) this.activeIndex = -1;
    };
    this.avatars.push(avatar);
    this.addChild(avatar);
  }

  override onPaint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D) {
    this.avatars.forEach((avatar, index) => {
      avatar.groupClip = this.rect;
      // При наведении раскрываем аватар, а у следующего делаем вырез слева.
      avatar.cutRight =
        index < this.avatars.length - 1 && index !== this.activeIndex;
      avatar.cutLeft = this.activeIndex >= 0 && index === this.activeIndex + 1;
      avatar.paint(batcher, ctx);
    });
  }
}
