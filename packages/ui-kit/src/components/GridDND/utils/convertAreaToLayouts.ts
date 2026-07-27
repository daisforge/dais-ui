/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
import type { Layout } from 'react-grid-layout';

import { isEmptyCell } from './isEmptyCell';

/**
 * Преобразует grid-template-areas в массив Layout элементов для react-grid-layout
 *
 * Анализирует двумерный массив строк (grid-template-areas) и создает Layout объекты
 * для каждого уникального элемента. Определяет размеры каждого элемента по его
 * занимаемой области в сетке.
 *
 * @param areas - двумерный массив строк, представляющий grid-template-areas
 * @param breakpoint - название брейкпоинта для которого создается layout
 * @param colsMap - карта количества колонок для каждого брейкпоинта
 * @param isResizable - можно ли изменять размер элементов
 * @returns массив Layout объектов для react-grid-layout
 *
 * @example
 * const areas = [
 *   ['header', 'header', 'sidebar'],
 *   ['content', 'content', 'sidebar']
 * ];
 * convertAreaToLayoutsInit(areas, 'lg', { lg: 3 }, true)
 * // возвращает: [
 * //   { i: 'header', x: 0, y: 0, w: 2, h: 1, ... },
 * //   { i: 'sidebar', x: 2, y: 0, w: 1, h: 2, ... },
 * //   { i: 'content', x: 0, y: 1, w: 2, h: 1, ... }
 * // ]
 */
export function convertAreaToLayoutsInit(
  areas: string[][],
  breakpoint: string,
  colsMap: Record<string, number>,
  isResizable: boolean
): Layout[] {
  const newLayouts: Layout[] = [];
  const columns = colsMap[breakpoint];
  const processed = new Set<string>(); // Отслеживаем уже обработанные элементы

  // Проходим по всем ячейкам сетки
  for (let y = 0; y < areas.length; y++) {
    const row = areas[y];
    if (!row) return newLayouts;
    for (let x = 0; x < row.length; x++) {
      const cell = row[x];

      // Пропускаем пустые ячейки (точки, тире, пробелы)
      if (!cell || isEmptyCell(cell)) continue;
      // Пропускаем уже обработанные элементы
      if (processed.has(`${cell}`)) continue;

      // Определяем ширину элемента: считаем непрерывные ячейки с тем же именем
      let w = 0;
      for (let dx = x; dx < row.length && row[dx] === cell; dx++) {
        w++;
      }

      // Определяем высоту элемента: проверяем все строки на соответствие ширине
      let h = 0;
      for (let dy = y; dy < areas.length; dy++) {
        let ok = true;
        // Проверяем, что все ячейки в диапазоне [x, x+w) имеют то же имя
        for (let dx = x; dx < x + w; dx++) {
          if (!areas[dy]?.[dx] || areas[dy]?.[dx] !== cell) {
            ok = false;
            break;
          }
        }
        if (!ok) break; // Прерываем, если нашли несоответствие
        h++;
      }

      // Помечаем все ячейки этого прямоугольника как обработанные
      for (let dy = y; dy < y + h; dy++) {
        for (let dx = x; dx < x + w; dx++) {
          processed.add(`${cell}`);
        }
      }

      // Создаем Layout объект для элемента
      newLayouts.push({
        i: cell, // ID элемента (имя из grid-template-areas)
        x, // X координата
        y, // Y координата
        w, // Ширина в колонках
        h, // Высота в строках
        minW: 1, // Минимальная ширина
        maxW: columns, // Максимальная ширина (ограничена количеством колонок)
        minH: 1, // Минимальная высота
        isResizable, // Можно ли изменять размер
        static: false // Элемент не статичный (можно перемещать)
      });
    }
  }
  return newLayouts;
}
