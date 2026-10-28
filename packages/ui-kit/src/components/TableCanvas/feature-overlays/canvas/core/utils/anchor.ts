import type {
  CanvasPortalClickDetail,
  CanvasPortalRect,
} from '@ui-kit/components/TableGlide/lib/canvas/utils/portalClickEvents';

import type { PopoverRect } from './geometry';

type AnchorDetail = Pick<
  CanvasPortalClickDetail,
  'originId' | 'nodeId' | 'tooltipContext'
>;

/**
 * Ключ элемента, на котором открыт Popover: id элемента плюс колонка и строка.
 * `id` одинаковый во всех строках, и без координат кнопки разных строк
 * считались бы одной.
 */
export function getOverlaySourceKey(detail: AnchorDetail): string | null {
  const originId = detail.originId ?? detail.nodeId;
  if (!originId) return null;
  const ctx = detail.tooltipContext;
  const column = ctx?.column as { id?: unknown } | undefined;
  const col = column?.id ?? ctx?.colInd ?? '';
  const row = ctx?.rowInd ?? 'header';
  return `${originId}|${String(col)}|${String(row)}`;
}

/**
 * Обрезает прямоугольник элемента по видимой области таблицы, чтобы Popover
 * у частично скрытой ячейки не заходил за край. Если пересечения нет,
 * возвращает прямоугольник как есть.
 */
export function clipAnchorRect(
  rect: CanvasPortalRect,
  viewport?: PopoverRect | null,
): CanvasPortalRect {
  if (!viewport) return rect;

  const left = Math.max(rect.x, viewport.x);
  const top = Math.max(rect.y, viewport.y);
  const right = Math.min(rect.x + rect.width, viewport.x + viewport.width);
  const bottom = Math.min(rect.y + rect.height, viewport.y + viewport.height);

  if (right <= left || bottom <= top) return rect;
  return { x: left, y: top, width: right - left, height: bottom - top };
}
