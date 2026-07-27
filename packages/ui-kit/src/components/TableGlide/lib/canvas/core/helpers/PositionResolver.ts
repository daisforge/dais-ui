/* eslint-disable class-methods-use-this */
import { PaddingBox } from '../../miniflex';
import { ICanvasNode, PositionValue, Rect } from '../CanvasNode.type';

/**
 * PositionResolver обрабатывает логику absolute-позиционирования в стиле CSS.
 *
 * Разрешает значения позиций (числа и проценты) и применяет
 * absolute-позиционирование относительно позиционного контекста (контейнера
 * с position="relative" или position="absolute").
 */
export class PositionResolver {
  /**
   * Разрешает значение позиции в конкретное пиксельное значение.
   * @param value - Значение позиции (число, процентная строка или undefined)
   * @param parentSize - Размер родителя для вычисления процентов
   * @returns Разрешённое пиксельное значение или undefined
   */
  static resolvePositionValue(
    value: PositionValue | undefined,
    parentSize: number
  ): number | undefined {
    if (value === undefined) return undefined;
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value.endsWith('%')) {
      return (parseFloat(value) / 100) * parentSize;
    }
    return undefined;
  }

  /**
   * Применяет позиционирование вдоль одной оси.
   * Обрабатывает четыре комбинации: start+end, только start, только end или ни одного.
   *
   * @param childRect - Прямоугольник дочернего элемента для изменения
   * @param ref - Эталонный прямоугольник (позиционный контекст)
   * @param start - Начальное смещение (left или top)
   * @param end - Конечное смещение (right или bottom)
   * @param isHorizontal - True для горизонтального (left/right), false для вертикального (top/bottom)
   */
  private static applyAxisPositioning(
    childRect: Rect,
    ref: Rect,
    start: number | undefined,
    end: number | undefined,
    isHorizontal: boolean
  ): void {
    const refStart = isHorizontal ? ref.x : ref.y;
    const refEnd = refStart + (isHorizontal ? ref.width : ref.height);
    const refSize = isHorizontal ? ref.width : ref.height;

    if (start !== undefined && end !== undefined) {
      // Указаны и start, и end - позиционируем от start, вычисляем размер
      const newSize = Math.max(0, refSize - start - end);
      if (isHorizontal) {
        childRect.x = refStart + start;
        childRect.width = newSize;
      } else {
        childRect.y = refStart + start;
        childRect.height = newSize;
      }
    } else if (start !== undefined) {
      // Указан только start - позиционируем от start
      if (isHorizontal) {
        childRect.x = refStart + start;
      } else {
        childRect.y = refStart + start;
      }
    }

    if (end !== undefined && start === undefined) {
      // Указан только end - позиционируем от end
      if (isHorizontal) {
        childRect.x = refEnd - childRect.width - end;
      } else {
        childRect.y = refEnd - childRect.height - end;
      }
    } else if (end === undefined && start === undefined) {
      // Позиционирование не указано - используем start
      if (isHorizontal) {
        childRect.x = refStart;
      } else {
        childRect.y = refStart;
      }
    }
  }

  /**
   * Применяет absolute-позиционирование к дочернему узлу.
   *
   * @param child - Дочерний узел для позиционирования
   * @param referenceRect - Эталонный прямоугольник (границы позиционного контекста)
   */
  applyAbsolutePositioning(child: ICanvasNode, referenceRect: Rect): void {
    const left = PositionResolver.resolvePositionValue(
      child.left,
      referenceRect.width
    );
    const right = PositionResolver.resolvePositionValue(
      child.right,
      referenceRect.width
    );
    const top = PositionResolver.resolvePositionValue(
      child.top,
      referenceRect.height
    );
    const bottom = PositionResolver.resolvePositionValue(
      child.bottom,
      referenceRect.height
    );

    const childRect = child.rect;

    // Горизонтальное позиционирование (left/right)
    PositionResolver.applyAxisPositioning(
      childRect,
      referenceRect,
      left,
      right,
      true
    );

    // Вертикальное позиционирование (top/bottom)
    PositionResolver.applyAxisPositioning(
      childRect,
      referenceRect,
      top,
      bottom,
      false
    );
  }

  /**
   * Позиционирует все absolute-дочерние элементы внутри контейнера.
   *
   * Создаёт эталонный прямоугольник из границ и padding контейнера,
   * затем применяет absolute-позиционирование к каждому absolute-дочернему элементу.
   * Метод работает с прямыми absolute-детьми positioned parent; поиск ближайшего
   * позиционного предка через static-промежуточные контейнеры пока не поддержан.
   *
   * @param containerRect - Ограничивающий прямоугольник контейнера
   * @param containerPadding - Padding контейнера
   * @param absoluteChildren - Массив absolute-позиционированных дочерних элементов
   * @param measureFn - Функция для измерения дочернего элемента (чтобы убедиться, что у него есть размер)
   * @param layoutFn - Функция для раскладки subtree после назначения absolute-координат
   */
  positionAbsoluteChildren(
    containerRect: Rect,
    containerPadding: PaddingBox,
    absoluteChildren: ICanvasNode[],
    measureFn: (child: ICanvasNode) => void,
    layoutFn?: (child: ICanvasNode) => void
  ): void {
    const referenceRect: Rect = {
      x: containerRect.x + containerPadding.left,
      y: containerRect.y + containerPadding.top,
      width:
        containerRect.width - containerPadding.left - containerPadding.right,
      height:
        containerRect.height - containerPadding.top - containerPadding.bottom,
    };

    for (const child of absoluteChildren) {
      // Absolute layout идет в три шага: измерить child, назначить финальный
      // rect по offsets и только потом раскладывать его subtree.
      measureFn(child);
      this.applyAbsolutePositioning(child, referenceRect);
      layoutFn?.(child);
    }
  }
}
