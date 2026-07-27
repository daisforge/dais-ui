import type { ResolvedCanvasInteractionConfig } from '../../core/canvasInteraction';
import { resolveInteractionDecision } from '../../interaction/interactionManager';
import { CellCanvasRoot } from '../CellCanvasRoot';
import type { CanvasRenderResult } from '../types';
import type { RelativePoint } from './types';

export interface CanvasPointerIntentResult {
  /**
   * Нашли ли мы под курсором canvas-зону со своим interaction-контрактом.
   *
   * Это не обязательно означает, что мы что-то отменяем. Например,
   * зона может запрещать только поздний `onCellClicked`, но не трогать
   * ранний selection path.
   */
  handled: boolean;
  /** Нужно ли остановить ранний select path таблицы. */
  suppressEarlyGridSelect: boolean;
  /** Нормализованный interaction-контракт найденного canvas-узла. */
  interaction?: ResolvedCanvasInteractionConfig;
}

/**
 * Ранняя проверка ownership на pointer/select-фазе.
 *
 * Здесь нельзя вызывать onClick canvas-ноды: нам нужно только понять, есть ли
 * под курсором interaction policy и надо ли остановить ранний selection path.
 */
export function performCanvasPointerDownIntent({
  renderData,
  relativePoint,
}: {
  renderData: CanvasRenderResult | undefined;
  relativePoint: RelativePoint;
}): CanvasPointerIntentResult {
  // На ранней фазе pointerdown/select мы не запускаем onClick.
  // Здесь нам нужно только понять, есть ли под курсором canvas-элемент,
  // который хочет забрать interaction себе полностью или частично.
  const interaction =
    renderData?.canvasRoot instanceof CellCanvasRoot
      ? renderData.canvasRoot.getInteractionAtPoint(
          relativePoint.x,
          relativePoint.y
        )
      : undefined;

  if (!interaction) {
    return {
      handled: false,
      suppressEarlyGridSelect: false,
    };
  }

  // На pointer/select-фазе нам нужна только ранняя часть decision: можно ли
  // отдавать этот pointerdown стандартному selection path Glide. Click/editor
  // решения применяются позже в TableGlide bridge.
  const decision = resolveInteractionDecision(interaction);

  return {
    handled: true,
    suppressEarlyGridSelect: decision.suppressEarlyGridSelect,
    interaction,
  };
}
