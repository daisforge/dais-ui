import type { Rect } from '../CanvasNode';

/**
 * SizeAccumulator вычисляет внутренние размеры для flex-лайаутов.
 *
 * Накапливает размеры дочерних элементов вдоль главной и поперечной осей,
 * обрабатывая различия между row и column лайаутами.
 */
export class SizeAccumulator {
  private width = 0;

  private height = 0;

  private maxCrossSize = 0;

  private childCount = 0;

  private isRow = true;

  /**
   * Сбрасывает аккумулятор для нового вычисления.
   */
  reset(): void {
    this.width = 0;
    this.height = 0;
    this.maxCrossSize = 0;
    this.childCount = 0;
    this.isRow = true;
  }

  /**
   * Накапливает размеры дочернего элемента.
   *
   * Для row-лайаутов:
   * - Ширина накапливается (главная ось)
   * - Высота отслеживает максимум (поперечная ось)
   *
   * Для column-лайаутов:
   * - Высота накапливается (главная ось)
   * - Ширина отслеживает максимум (поперечная ось)
   *
   * @param childRect - Прямоугольник дочернего элемента для накопления
   * @param isRow - True для row-лайаута, false для column-лайаута
   */
  accumulate(childRect: Rect, isRow: boolean): void {
    this.isRow = isRow;
    if (isRow) {
      // Row: ширина накапливается, высота берёт максимум
      this.width += childRect.width;
      this.maxCrossSize = Math.max(this.maxCrossSize, childRect.height);
    } else {
      // Column: высота накапливается, ширина берёт максимум
      this.height += childRect.height;
      this.maxCrossSize = Math.max(this.maxCrossSize, childRect.width);
    }
    this.childCount += 1;
  }

  /**
   * Добавляет отступы между дочерними элементами.
   *
   * @param gap - Размер отступа в пикселях
   * @param isRow - True для row-лайаута, false для column-лайаута
   */
  addGap(gap: number, isRow: boolean): void {
    if (this.childCount > 1) {
      const totalGap = gap * (this.childCount - 1);
      if (isRow) {
        this.width += totalGap;
      } else {
        this.height += totalGap;
      }
    }
  }

  /**
   * Возвращает вычисленный размер.
   *
   * @returns Накопленные ширина и высота
   */
  getSize(): { width: number; height: number } {
    // Для row: ширина накоплена, высота - максимум поперечного размера
    // Для column: высота накоплена, ширина - максимум поперечного размера
    if (this.isRow) {
      return {
        width: this.width,
        height: this.maxCrossSize,
      };
    }
    return {
      width: this.maxCrossSize,
      height: this.height,
    };
  }

  /**
   * Вычисляет внутренний размер из массива дочерних элементов.
   *
   * Это удобный метод, объединяющий reset, accumulate, addGap и getSize.
   *
   * @param children - Массив прямоугольников дочерних элементов
   * @param isRow - True для row-лайаута, false для column-лайаута
   * @param gap - Размер отступа в пикселях
   * @returns Вычисленный внутренний размер
   */
  static computeIntrinsicSize(
    children: Rect[],
    isRow: boolean,
    gap: number
  ): { width: number; height: number } {
    const accumulator = new SizeAccumulator();

    for (const childRect of children) {
      accumulator.accumulate(childRect, isRow);
    }

    accumulator.addGap(gap, isRow);
    return accumulator.getSize();
  }
}
