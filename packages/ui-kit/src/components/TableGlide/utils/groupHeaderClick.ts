import type { GroupHeaderClickedEventArgs } from '@glideappsfinal/glide-data-grid';

import type { CellCanvasRoot } from '../lib/canvas';

// Путь групп колонки: строку оборачиваем в массив, массив берём как есть, иначе [].
export const getColumnGroupPath = (group: unknown): string[] =>
  Array.isArray(group)
    ? group.filter((g): g is string => typeof g === 'string')
    : typeof group === 'string'
    ? [group]
    : [];

interface GroupHeaderColumn {
  id: string;
  group?: unknown;
  isServiceColumn?: boolean;
}

export interface GroupHeaderClickParams {
  colIndex: number;
  event: GroupHeaderClickedEventArgs;
  /** Canvas-содержимое кликнутой шапки группы, если она нарисована через renderGroupHeader. */
  groupRoot: Pick<
    CellCanvasRoot,
    'getInteractionAtPoint' | 'dispatchPointerEvent'
  > | undefined;
  columns: readonly (GroupHeaderColumn | undefined)[];
  enableColumnSelection: boolean;
  selectColumnsByKeys: (keys: string[]) => void;
  onGroupHeaderClicked?: (
    colIndex: number,
    event: GroupHeaderClickedEventArgs
  ) => void;
}

// Клик по шапке группы выделяет все листовые колонки этой группы.
//
// У каждой колонки есть путь групп: имена групп сверху вниз (например,
// ['Метрики','Продажи']). Берём путь кликнутой колонки, обрезаем до уровня, по
// которому кликнули: это префикс, однозначно задающий группу. Колонки одной
// группы всегда идут в ряд, поэтому от кликнутой расширяем диапазон влево и
// вправо, пока у соседа тот же префикс; листья диапазона выделяем разом.
//
// Префикс сравниваем как строку: путь склеиваем через '\0' (символ NUL). NUL
// взят разделителем, потому что он не может встретиться в имени группы, и склейка
// получается без коллизий: пути ['A','B'] и ['AB'] дают разные ключи ('A\0B' и
// 'AB'), тогда как join('/') или join('') их бы схлопнули в один.
export function handleGroupHeaderClick({
  colIndex,
  event,
  groupRoot,
  columns,
  enableColumnSelection,
  selectColumnsByKeys,
  onGroupHeaderClicked
}: GroupHeaderClickParams): void {
  // Клик сначала получает содержимое шапки группы (кнопки, Popover), как у
  // шапки колонки: клик по интерактивному элементу группу не выделяет.
  if (groupRoot) {
    const interaction = groupRoot.getInteractionAtPoint(
      event.localEventX,
      event.localEventY
    );
    groupRoot.dispatchPointerEvent(
      'click',
      event.localEventX,
      event.localEventY,
      undefined,
      { button: event.button, cellBounds: event.bounds }
    );
    if (interaction) {
      onGroupHeaderClicked?.(colIndex, event);
      return;
    }
  }

  const clickedColumn = columns[colIndex];
  if (!enableColumnSelection || !clickedColumn) {
    onGroupHeaderClicked?.(colIndex, event);
    return;
  }

  // путь кликнутой колонки и уровень клика
  const clickedPath = getColumnGroupPath(clickedColumn.group);
  const clickedLevel = Math.max(0, clickedPath.indexOf(event.group));
  // ключ группы: префикс пути до уровня клика (про '\0' см. выше)
  const prefixKey = clickedPath.slice(0, clickedLevel + 1).join('\0');

  // у колонки тот же префикс, что у кликнутой?
  const hasSamePrefix = (index: number): boolean => {
    const column = columns[index];
    return (
      column !== undefined &&
      getColumnGroupPath(column.group)
        .slice(0, clickedLevel + 1)
        .join('\0') === prefixKey
    );
  };

  // растим диапазон влево и вправо, пока префикс совпадает
  let start = colIndex;
  let end = colIndex;
  while (start - 1 >= 0 && hasSamePrefix(start - 1)) start -= 1;
  while (end + 1 < columns.length && hasSamePrefix(end + 1)) end += 1;

  // выделяем листья диапазона, кроме служебных колонок
  const keys: string[] = [];
  for (let i = start; i <= end; i += 1) {
    const column = columns[i];
    if (column && !column.isServiceColumn) keys.push(column.id);
  }
  if (keys.length > 0) selectColumnsByKeys(keys);

  onGroupHeaderClicked?.(colIndex, event);
}
