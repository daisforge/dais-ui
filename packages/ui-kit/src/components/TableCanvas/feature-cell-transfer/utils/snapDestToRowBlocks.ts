import type { ObjectForExtending } from '../../types';
import type { Rectangle, TransferColumnConfig } from '../types';
import { readRowSpanBlock } from './resolveBlockOrigin';

/**
 * Растягивает область протяжки по вертикали до целых блоков: залить пол-блока
 * нельзя. Если верхняя или нижняя строка попадает в блок, выходящий за область,
 * двигаем границу до края блока. Повторяем, пока границы меняются, — соседние
 * блоки могут цепляться друг за друга.
 *
 * TODO(merged-cells): по горизонтали пока не растягиваем.
 */
export function snapDestToRowBlocks<R extends ObjectForExtending>(
  dest: Rectangle,
  columns: readonly TransferColumnConfig[],
  rows: readonly R[],
): Rectangle {
  if (dest.width <= 0 || dest.height <= 0) return dest;

  let top = dest.y;
  let bottom = dest.y + dest.height - 1;

  let changed = true;
  // Страховка от зацикливания: блоков не больше числа строк.
  let guard = rows.length + 1;
  while (changed && guard > 0) {
    changed = false;
    guard -= 1;

    for (let c = dest.x; c < dest.x + dest.width; c += 1) {
      const topBlock =
        top >= 0 && top < rows.length
          ? readRowSpanBlock(columns[c], rows, c, top)
          : null;
      if (topBlock && topBlock[0] < top) {
        top = topBlock[0];
        changed = true;
      }

      const bottomBlock =
        bottom >= 0 && bottom < rows.length
          ? readRowSpanBlock(columns[c], rows, c, bottom)
          : null;
      if (bottomBlock && bottomBlock[1] > bottom) {
        bottom = bottomBlock[1];
        changed = true;
      }
    }
  }

  return { x: dest.x, y: top, width: dest.width, height: bottom - top + 1 };
}
