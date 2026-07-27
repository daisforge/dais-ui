import { CanvasContainer } from '../core/CanvasContainer';
import { CanvasHoverController } from '../core/CanvasHoverController';
import type { ResolvedCanvasInteractionConfig } from '../core/canvasInteraction';
import { type CanvasEvent, CanvasNode, type Rect } from '../core/CanvasNode';
import { DrawBatcher } from '../core/DrawBatcher';
import {
  dispatchCanvasPortalHover,
  type TooltipContext,
} from '../utils/portalHoverEvents';

const PORTAL_SOURCE = 'cell' as const;

type PointerEventType = CanvasEvent['type'];

export interface CellCanvasPointerDispatchResult {
  propagationStopped: boolean;
  suppressGridDefault: boolean;
  /**
   * Interaction возвращается как дополнительный результат dispatch. Старые
   * потребители продолжают читать propagation/default flags, а новые могут
   * использовать уже посчитанный hit-test вместо второго обхода canvas tree.
   */
  interaction?: ResolvedCanvasInteractionConfig;
}

export class CellCanvasRoot {
  rootNode: CanvasNode;

  private bounds: Rect | null = null;

  private hoverController: CanvasHoverController;

  private batcher: DrawBatcher = new DrawBatcher();

  private portalEventTarget: EventTarget | null = null;

  private tooltipContext: TooltipContext | undefined = undefined;

  onCursorChange?: (cursor: string) => void;

  constructor(node: CanvasNode, _originId?: string) {
    this.rootNode = node;
    this.hoverController = new CanvasHoverController({
      onCursorChange: (cursor) => this.onCursorChange?.(cursor),
      portalHoverDispatch: dispatchCanvasPortalHover,
      getPortalEventTarget: () => this.portalEventTarget,
      portalSource: PORTAL_SOURCE,
      getTooltipContext: () => this.tooltipContext,
    });
  }

  setPortalEventTarget(target: EventTarget | null): void {
    this.portalEventTarget = target;
  }

  /**
   * Устанавливает контекст для тултипа (column, row, ctxs, refTable).
   * Аналогично контексту в контекстном меню.
   */
  setTooltipContext(context: TooltipContext | undefined): void {
    this.tooltipContext = context;
  }

  setRootNode(node: CanvasNode): void {
    this.rootNode = node;
  }

  // eslint-disable-next-line class-methods-use-this
  setOriginId(_originId: string): void {}

  render(
    ctx: CanvasRenderingContext2D,
    rect: Rect,
    hoverPos?: { x: number; y: number },
    absoluteBounds?: Rect,
    animationCtx?: { frameTime?: number; requestAnimationFrame?: () => void }
  ): void {
    this.bounds = { ...(absoluteBounds ?? rect) };
    this.hoverController.setAbsoluteBounds(this.bounds);

    ctx.save();
    ctx.translate(rect.x, rect.y);

    this.prepareRootNode(ctx, rect);

    if (hoverPos) {
      this.dispatchPointerEvent('mousemove', hoverPos.x, hoverPos.y);
    } else {
      this.handleMouseLeave();
    }

    this.batcher.clear();
    this.batcher.setAnimationContext(animationCtx);
    this.rootNode.paint(this.batcher, ctx);
    this.batcher.flush(ctx);

    ctx.restore();
  }

  /**
   * Dispatch runtime pointer event по canvas tree.
   *
   * Метод выполняет hit-test, вызывает handlers найденных canvas-нод и
   * возвращает runtime-флаги stopPropagation/preventDefault. Interaction в
   * результате — additive metadata, она не меняет старый dispatch contract.
   */
  dispatchPointerEvent(
    type: PointerEventType,
    x: number,
    y: number,
    nativeEvent?: MouseEvent
  ): CellCanvasPointerDispatchResult {
    if (!this.bounds) {
      return {
        propagationStopped: false,
        suppressGridDefault: false,
      };
    }

    // Hit-test здесь был и раньше нужен для dispatch: по нему мы понимаем,
    // каким canvas-нодам отправлять pointer event. Interaction берется из тех
    // же hits, поэтому старое поведение event dispatch не меняется.
    const hits = this.rootNode.hitTest(x, y);
    const interaction = hits.find(
      (node) => node.interaction !== undefined
    )?.interaction;
    let propagationStopped = false;
    let suppressGridDefault = false;

    const canvasEvent: CanvasEvent = {
      type,
      x,
      y,
      originalEvent: nativeEvent ?? ({} as MouseEvent),
      target: hits[0],
      stopPropagation: () => {
        propagationStopped = true;
      },
      preventDefault: () => {
        // Canvas-нода может попросить TableGlide не продолжать стандартный
        // click path таблицы. Мы намеренно не смешиваем это с
        // `stopPropagation`: остановка всплытия и отмена table-default теперь
        // являются разными решениями.
        suppressGridDefault = true;
        nativeEvent?.preventDefault();
      },
    };

    if (hits.length === 0) {
      if (type === 'mousemove') {
        this.hoverController.handlePointerMove([], null);
      }
      return {
        propagationStopped: false,
        suppressGridDefault,
        ...(interaction ? { interaction } : {}),
      };
    }

    this.dispatchEventToNodes(hits, canvasEvent, type);

    if (type === 'mousemove') {
      this.hoverController.handlePointerMove(hits, canvasEvent);
    }

    return {
      propagationStopped,
      suppressGridDefault,
      ...(interaction ? { interaction } : {}),
    };
  }

  /**
   * Read-only resolve interaction policy под точкой.
   *
   * Нужен для фаз, где надо принять policy-решение без side effect-ов:
   * pointer/select ownership и contextmenu/click target resolving.
   */
  getInteractionAtPoint(
    x: number,
    y: number
  ): ResolvedCanvasInteractionConfig | undefined {
    if (!this.bounds) {
      return undefined;
    }

    // Read-only hit-test для фаз, где нужно только узнать ownership/policy
    // canvas-зоны. В отличие от dispatchPointerEvent, этот метод не вызывает
    // onClick/onMouseMove и не меняет runtime-состояние handlers.
    return this.rootNode.hitTest(x, y).find((node) => node.interaction)
      ?.interaction;
  }

  private dispatchEventToNodes(
    hits: CanvasNode[],
    canvasEvent: CanvasEvent,
    type: PointerEventType
  ): void {
    let propagationStopped = false;
    const eventWithStop = {
      ...canvasEvent,
      stopPropagation: () => {
        propagationStopped = true;
        canvasEvent.stopPropagation();
      },
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const node of hits) {
      if (propagationStopped) {
        break;
      }

      const nodeEvent = {
        ...eventWithStop,
        currentTarget: node,
      };
      this.invokeNodeHandler(node, type, nodeEvent);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private invokeNodeHandler(
    node: CanvasNode,
    type: PointerEventType,
    event: CanvasEvent
  ): void {
    // eslint-disable-next-line default-case
    switch (type) {
      case 'click':
        node.onClick({ ...event, cellBounds: this.bounds });
        break;
      case 'mousedown':
        node.onMouseDown(event);
        break;
      case 'mouseup':
        node.onMouseUp(event);
        break;
      case 'dblclick':
        node.onDoubleClick(event);
        break;
      case 'mousemove':
        node.onMouseMove(event);
        break;
      case 'mouseenter':
        node.onMouseEnter(event);
        break;
      case 'mouseleave':
        node.onMouseLeave(event);
        break;
    }
  }

  handleMouseLeave(): void {
    this.hoverController.handlePointerLeave();
  }

  private prepareRootNode(ctx: CanvasRenderingContext2D, rect: Rect): void {
    this.rootNode.rect.x = 0;
    this.rootNode.rect.y = 0;
    this.rootNode.rect.width = rect.width;
    this.rootNode.rect.height = rect.height;

    if (this.rootNode instanceof CanvasContainer) {
      this.rootNode.performLayout(ctx);
    } else {
      this.rootNode.measure(ctx);
    }
  }

  computeCursor(relativeX: number, relativeY: number): string {
    return this.hoverController.computeCursor(
      relativeX,
      relativeY,
      this.rootNode
    );
  }

  getCurrentCursor(): string {
    return this.hoverController.getCurrentCursor();
  }

  forcePortalHide(): void {
    this.hoverController.handlePortalReset();
  }
}
