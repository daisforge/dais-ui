import { PaddingBox, FlexBoxOptions } from '../miniflex';
import { ICanvasNode } from './CanvasNode.type';
import { DrawBatcher } from './DrawBatcher';

export interface ICanvasContainer extends ICanvasNode {
  /**
   * Свойства кеша (публичные, так как используются в CanvasNode для clampWidth)
   */
  cachedPadding: PaddingBox;
  cachedIsRow: boolean;
  cachedGap: number;

  /**
   * Геттер/Сеттер flexOptions.
   * В интерфейсе описывается как обычное свойство.
   */
  flexOptions: FlexBoxOptions;

  /**
   * Публичные методы управления
   */
  setFlexOptions(options: Partial<FlexBoxOptions>): void;

  /**
   * Методы жизненного цикла лайаута
   */
  measure(ctx: CanvasRenderingContext2D): void;
  performLayout(
    ctx: CanvasRenderingContext2D,
    preserveCurrentRect?: boolean
  ): void;

  /**
   * Вспомогательные методы
   * Обратите внимание: возвращает массив ICanvasNode, чтобы избежать циклов
   */
  separateChildrenByLayoutMode(): {
    layoutChildren: ICanvasNode[];
    absoluteChildren: ICanvasNode[];
  };

  /**
   * Отрисовка
   */
  onPaint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D): void;
}
