/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import type { Layout } from 'react-grid-layout';

/**
 * Находит первое свободное место для размещения прямоугольника заданного размера
 *
 * Алгоритм "First Fit" - ищет первое подходящее место слева направо, сверху вниз.
 * Создает виртуальную карту занятых ячеек и ищет первое свободное окно w×h.
 *
 * @param existing - массив уже размещенных элементов
 * @param cols - количество колонок в сетке
 * @param w - ширина размещаемого элемента
 * @param h - высота размещаемого элемента
 * @param startX - начальная X координата для поиска (по умолчанию 0)
 * @param startY - начальная Y координата для поиска (по умолчанию 0)
 * @returns объект с координатами {x, y} для размещения элемента
 *
 * @example
 * const existing = [{ i: 'a', x: 0, y: 0, w: 1, h: 1 }];
 * placeRectFirstFit(existing, 3, 2, 1, 0, 0)
 * // возвращает: { x: 1, y: 0 } - первое свободное место для элемента 2x1
 */
export function placeRectFirstFit(
  existing: Layout[],
  cols: number,
  w: number,
  h: number,
  startX = 0,
  startY = 0,
) {
  // Находим максимальную Y координату среди существующих элементов
  const maxY = existing.reduce((m, l) => Math.max(m, l.y + l.h), 0);

  // Создаем двумерный массив для отслеживания занятых ячеек
  // Размер: достаточное количество строк + буфер для нового элемента
  const rows: boolean[][] = Array.from(
    { length: Math.max(maxY, startY) + h + 1 },
    () => Array(cols).fill(false),
  );

  // Помечаем все ячейки существующих элементов как занятые
  for (const { x, y, w: W, h: H } of existing) {
    for (let yy = y; yy < y + H; yy++) {
      // Гарантируем что строка существует
      if (!rows[yy]) {
        rows[yy] = Array(cols).fill(false);
      }
      const row = rows[yy]; // Сохраняем ссылку на строку

      for (let xx = x; xx < x + W; xx++) {
        // Проверяем границы и помечаем ячейку как занятую
        if (yy >= 0 && xx >= 0 && xx < cols && row) {
          row[xx] = true;
        }
      }
    }
  }

  // Проверяет, помещается ли прямоугольник w×h в позиции (x, y)
  const fits = (x: number, y: number) => {
    for (let yy = y; yy < y + h; yy++) {
      // Гарантируем что строка существует
      if (!rows[yy]) {
        rows[yy] = Array(cols).fill(false);
      }
      const row = rows[yy]; // Сохраняем ссылку на строку

      for (let xx = x; xx < x + w; xx++) {
        // Если выходим за границы колонок или ячейка занята - не помещается
        if (xx >= cols || (row && row[xx])) return false;
      }
    }
    return true;
  };

  // Помечает ячейки прямоугольника w×h как занятые
  const occupy = (x: number, y: number) => {
    for (let yy = y; yy < y + h; yy++) {
      // Гарантируем что строка существует
      if (!rows[yy]) {
        rows[yy] = Array(cols).fill(false);
      }
      const row = rows[yy]; // Сохраняем ссылку на строку

      for (let xx = x; xx < x + w; xx++) {
        // Устанавливаем ячейку как занятую (если в пределах колонок)
        if (xx < cols && row) {
          row[xx] = true;
        }
      }
    }
  };

  // Начинаем поиск с указанной стартовой позиции
  let y = startY;
  for (;;) {
    // Создаем строку если её еще нет
    rows[y] ||= Array(cols).fill(false);

    // Ищем слева направо в текущей строке
    // Если это стартовая строка - начинаем с startX, иначе с 0
    for (let x = y === startY ? startX : 0; x <= cols - w; x++) {
      if (fits(x, y)) {
        // Нашли подходящее место - помечаем как занятое и возвращаем координаты
        occupy(x, y);
        return { x, y };
      }
    }
    // Переходим к следующей строке
    y++;
  }
}
