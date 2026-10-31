import type { DrawBatcher } from '../core/DrawBatcher';

/**
 * Подсветка диапазона символов текста (поиск, выделение фрагмента).
 * `start` включительно, `end` исключительно, индексы по исходной строке текста.
 * Для текста с переносом пластина рисуется отдельно на каждой строке, куда попал диапазон.
 */
export interface CanvasTextMark {
  start: number;
  end: number;
  color: string;
}

/** Одна нарисованная строка текста и место под её пластины */
export interface MarkedLine {
  /** Текст строки */
  text: string;
  /** Смещение строки в исходном тексте */
  start: number;
  /** Сколько символов строки видно (без многоточия) */
  shownLength: number;
  x: number;
  y: number;
  height: number;
}

/**
 * Пластины под фрагментами `marks`, попавшими в видимую часть строки.
 * Рисуются до текста: текст ложится поверх пластины.
 */
export function paintTextMarks(
  batcher: DrawBatcher,
  marks: readonly CanvasTextMark[],
  line: MarkedLine,
  measureWidth: (text: string) => number,
): void {
  const { text, start, shownLength, x, y, height } = line;
  for (let i = 0, len = marks.length; i < len; i += 1) {
    const mark = marks[i]!;
    const from = Math.max(mark.start, start) - start;
    const to = Math.min(mark.end, start + shownLength) - start;
    if (to > from) {
      const left = measureWidth(text.slice(0, from));
      const right = measureWidth(text.slice(0, to));
      batcher.fillRect(x + left, y, right - left, height, mark.color);
    }
  }
}
