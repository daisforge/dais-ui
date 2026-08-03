/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
import type { Layout } from 'react-grid-layout';

/**
 * Сортирует брейкпоинты по убыванию ширины экрана
 * @param breakpoints - объект с брейкпоинтами и их ширинами
 * @returns массив названий брейкпоинтов от самого широкого к самому узкому
 * @example
 * orderBreakpointsDesc({ lg: 1200, md: 768, sm: 480 })
 * // возвращает: ['lg', 'md', 'sm']
 */
export function orderBreakpointsDesc(
  breakpoints: Record<string, number>,
): string[] {
  return Object.keys(breakpoints).sort(
    (a, b) => (breakpoints[b] || 0) - (breakpoints[a] || 0),
  );
}

/**
 * Определяет подходящий брейкпоинт для заданной ширины экрана
 * @param bps - объект с брейкпоинтами и их минимальными ширинами
 * @param width - текущая ширина экрана
 * @returns название брейкпоинта, который подходит для данной ширины
 * @example
 * getBreakpointFromWidth({ lg: 1200, md: 768, sm: 480 }, 900)
 * // возвращает: 'md' (так как 900 >= 768)
 */
export function getBreakpointFromWidth(
  bps: Record<string, number>,
  width: number,
) {
  const ordered = Object.keys(bps).sort((a, b) => {
    const valA = bps[a] || 0;
    const valB = bps[b] || 0;
    return valB - valA;
  });

  for (const k of ordered) {
    const breakpointWidth = bps[k];
    if (breakpointWidth !== undefined && width >= breakpointWidth) return k;
  }

  return ordered[ordered.length - 1]; // самый маленький (xxs)
}

/**
 * Находит ближайший брейкпоинт с существующим layout для использования в качестве донора
 * Сначала ищет в сторону более широких экранов, затем в сторону более узких
 * @param target - целевой брейкпоинт, для которого ищем донора
 * @param allLayouts - все существующие layouts по брейкпоинтам
 * @param ordered - упорядоченный массив брейкпоинтов (от широкого к узкому)
 * @returns название брейкпоинта-донора или null, если не найден
 * @example
 * findNearestSourceBp('md', { lg: [layout1], sm: [layout2] }, ['lg', 'md', 'sm'])
 * // возвращает: 'lg' (ближайший с layout)
 */
export function findNearestSourceBp(
  target: string,
  allLayouts: Record<string, Layout[] | undefined>,
  ordered: string[],
): string | null {
  const idx = ordered.indexOf(target);
  if (idx === -1) return null;

  for (let i = idx - 1; i >= 0; i--) {
    const bp = ordered[i];
    if (bp && allLayouts[bp]?.length) return bp;
  }

  for (let i = idx + 1; i < ordered.length; i++) {
    const bp = ordered[i];
    if (bp && allLayouts[bp]?.length) return bp;
  }

  return null;
}

/**
 * Переносит элементы сетки на новое количество колонок по принципу "как текст"
 *
 * Алгоритм работает аналогично переносу слов в тексте:
 * 1. Элементы сортируются в порядке чтения (сверху вниз, слева направо)
 * 2. Для каждого элемента пытается найти место на текущей "строке"
 * 3. Если элемент не помещается, переносит на следующую строку
 * 4. Ищет первое свободное место слева направо, сверху вниз
 *
 * @param source - исходный массив элементов layout
 * @param targetCols - целевое количество колонок
 * @returns новый массив элементов с пересчитанными позициями
 *
 * @example
 * const source = [
 *   { i: 'a', x: 0, y: 0, w: 2, h: 1 },
 *   { i: 'b', x: 2, y: 0, w: 1, h: 1 }
 * ];
 * gridWrapWordLike(source, 2) // переносит на 2 колонки
 * // результат: элементы перераспределены по 2 колонкам
 */
export function gridWrapWordLike(
  source: Layout[],
  targetCols: number,
): Layout[] {
  type L = Layout;

  // Подготавливаем элементы: ограничиваем ширину и сортируем в порядке чтения
  const items = [...source]
    .map((it) => ({
      ...it,
      // Ограничиваем ширину элемента количеством колонок
      w: Math.max(1, Math.min(it.w, targetCols)),
      // Старые координаты не важны - будем раскладывать заново
    }))
    .sort((a, b) => a.y - b.y || a.x - b.x); // Сортируем в порядке чтения (сверху вниз, слева направо)

  // Массив для отслеживания занятых ячеек
  const occupied: boolean[][] = [];

  // Создает необходимое количество строк в массиве occupied
  const ensureRows = (rows: number) => {
    while (occupied.length < rows) {
      occupied.push(Array(targetCols).fill(false));
    }
  };

  // Проверяет, помещается ли прямоугольник w×h в позиции (x, y)
  const fits = (x: number, y: number, w: number, h: number) => {
    ensureRows(y + h);
    for (let yy = y; yy < y + h; yy++) {
      const row = occupied[yy];
      if (!row) return false; // Если строки не существует

      for (let xx = x; xx < x + w; xx++) {
        // Если выходим за границы или ячейка занята - не помещается
        if (xx >= targetCols || row[xx]) return false;
      }
    }
    return true;
  };

  // Помечает ячейки прямоугольника w×h как занятые
  const occupy = (x: number, y: number, w: number, h: number) => {
    ensureRows(y + h);
    for (let yy = y; yy < y + h; yy++) {
      const row = occupied[yy];
      if (!row) continue; // Пропускаем несуществующие строки

      for (let xx = x; xx < x + w; xx++) {
        if (xx < row.length) {
          row[xx] = true;
        }
      }
    }
  };

  // Находит следующую строку с хотя бы одной свободной ячейкой
  const nextFreeRowBelow = (fromY: number) => {
    let y = fromY;
    for (;;) {
      ensureRows(y + 1);
      const row = occupied[y];
      // Если строка существует и в ней есть хотя бы одна свободная ячейка - возвращаем эту строку
      if (row && row.some((c) => !c)) return y;
      y++;
    }
  };

  // Текущая позиция "курсора" для размещения элементов
  let lineY = 0; // Текущая строка
  let cursorX = 0; // Позиция в текущей строке
  const placed: L[] = []; // Результат - размещенные элементы

  // Основной цикл размещения элементов
  for (const it of items) {
    // Этап 1: Пытаемся разместить элемент на текущей строке, начиная с cursorX
    let placedHere = false;
    for (let x = cursorX; x <= targetCols - it.w; x++) {
      if (fits(x, lineY, it.w, it.h)) {
        // Нашли место - размещаем элемент
        occupy(x, lineY, it.w, it.h);
        placed.push({ ...it, x, y: lineY });

        // Обновляем позицию курсора
        cursorX = x + it.w;
        // Если курсор вышел за границы строки - переходим к следующей строке
        if (cursorX > targetCols - 1) {
          lineY = nextFreeRowBelow(lineY);
          cursorX = 0;
        }
        placedHere = true;
        break;
      }
    }
    if (placedHere) continue; // Элемент размещен, переходим к следующему

    // Этап 2: Элемент не поместился на текущей строке
    // Переносимся на следующую свободную строку и ищем любое подходящее место
    lineY = nextFreeRowBelow(lineY);
    cursorX = 0;

    let y = lineY;
    for (;;) {
      let found = false;
      // Ищем слева направо в текущей строке
      for (let x = 0; x <= targetCols - it.w; x++) {
        if (fits(x, y, it.w, it.h)) {
          // Нашли место - размещаем элемент
          occupy(x, y, it.w, it.h);
          placed.push({ ...it, x, y });

          // Если разместили на текущей строке - обновляем курсор
          if (y === lineY) {
            cursorX = x + it.w;
            if (cursorX > targetCols - 1) {
              lineY = nextFreeRowBelow(lineY);
              cursorX = 0;
            }
          }
          found = true;
          break;
        }
      }
      if (found) break; // Элемент размещен
      y++; // Переходим к следующей строке
    }
  }

  return placed;
}
