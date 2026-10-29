import type {
  CanvasPortalClickDetail,
  CanvasPortalRect,
} from '../../TableGlideInstance';
import type { PopoverRect } from './geometry';

type AnchorDetail = Pick<
  CanvasPortalClickDetail,
  'originId' | 'nodeId' | 'tooltipContext'
>;

/**
 * Ключ источника поповера: id ноды плюс координата ячейки.
 * Явный `id` у Canvas-элемента одинаковый во всех строках, поэтому без
 * координаты кнопки разных строк считались бы одним источником: переключение
 * и toggle повторным кликом путали бы строки.
 */
export function getPopoverSourceKey(detail: AnchorDetail): string | null {
  const originId = detail.originId ?? detail.nodeId;
  if (!originId) return null;
  const ctx = detail.tooltipContext;
  const column = ctx?.column as { id?: unknown } | undefined;
  const col = column?.id ?? ctx?.colInd ?? '';
  const row = ctx?.rowInd ?? 'header';
  return `${originId}|${String(col)}|${String(row)}`;
}

/**
 * Обрезает якорь прямоугольником таблицы на экране: у элемента в частично
 * скрытой ячейке поповер и зона наведения не заходят за край таблицы.
 * Пустое пересечение — исходный якорь.
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
