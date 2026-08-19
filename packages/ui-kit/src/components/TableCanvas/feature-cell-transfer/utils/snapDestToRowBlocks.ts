import type { ObjectForExtending } from '../../types';
import type { Rectangle, TransferColumnConfig } from '../types';
import { readRowSpanBlock } from './resolveBlockOrigin';

/**
 * Снап fill-destination к целым rowSpan-блокам по ВЕРТИКАЛИ.
 *
 * Объединение — UI-фасад над повторяющимися данными; при протяжке нельзя залить
 * пол-блока (иначе блок «рвётся»). Проходим по колонкам dest, у верхней и нижней
 * строки спрашиваем `column.rowSpan(cellInfo)` — если ячейка на границе принадлежит
 * блоку, выходящему за rect, растягиваем rect до границ блока. Итеративно, пока
 * границы меняются (соседние блоки могут «цепляться»).
 *
 * Координаты те же, что у `applyValuesToRows`: `dest.x` — прямой индекс в `columns`
 * (форк уже снял rowMarkerOffset), `dest.y` — индекс в `rows` (flattenedRows).
 *
 * TODO(merged-cells): горизонтальный (colSpan) снап не делаем — завязан на резолв по
 * ключам под видимость/реордер колонок (отдельный под-таск фичи объединения).
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
  // Ограничитель на всякий случай — блоков не больше числа строк.
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
