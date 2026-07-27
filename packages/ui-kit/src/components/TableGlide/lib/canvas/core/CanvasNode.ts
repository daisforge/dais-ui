/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { FlexStyle } from '../miniflex/types';
import type { CanvasNodeTooltipConfig } from '../utils/portalHoverEvents';
import {
  CanvasEvent,
  CanvasFlexStyle,
  ICanvasNode,
  PositionType,
  PositionValue,
  Rect,
} from './CanvasNode.type';
import type { ResolvedCanvasInteractionConfig } from './canvasInteraction';
import { DrawBatcher } from './DrawBatcher';

export * from './CanvasNode.type';

// Кандидат hit-test хранит ноду, накопленный слой и source-order.
// После сбора кандидаты сортируются так же, как команды paint.
interface HitCandidate {
  node: CanvasNode;
  cumulativeZIndex: number;
  order: number;
}

interface HitOrderCounter {
  value: number;
}

export abstract class CanvasNode implements ICanvasNode {
  debugColor = 'magenta';

  id: string;

  parent: CanvasNode | null = null;

  children: CanvasNode[] = [];

  rect: Rect = { x: 0, y: 0, width: 0, height: 0 };

  zIndex = 0;

  protected _intrinsicWidth = 0;

  protected _intrinsicHeight = 0;

  protected _layoutDirty = true;

  protected _measureDirty = true;

  private _style: CanvasFlexStyle = {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 0,
    alignSelf: 'auto',
  };

  private _position: PositionType = 'static';

  private _left: PositionValue | undefined;

  private _top: PositionValue | undefined;

  private _right: PositionValue | undefined;

  private _bottom: PositionValue | undefined;

  get style(): CanvasFlexStyle {
    return this._style;
  }

  set style(value: CanvasFlexStyle) {
    this._style = value;
    this.markLayoutDirty();
  }

  get position(): PositionType {
    return this._position;
  }

  set position(value: PositionType) {
    if (this._position !== value) {
      this._position = value;
      this.markLayoutDirty();
    }
  }

  get left(): PositionValue | undefined {
    return this._left;
  }

  set left(value: PositionValue | undefined) {
    if (this._left !== value) {
      this._left = value;
      this.markLayoutDirty();
    }
  }

  get top(): PositionValue | undefined {
    return this._top;
  }

  set top(value: PositionValue | undefined) {
    if (this._top !== value) {
      this._top = value;
      this.markLayoutDirty();
    }
  }

  get right(): PositionValue | undefined {
    return this._right;
  }

  set right(value: PositionValue | undefined) {
    if (this._right !== value) {
      this._right = value;
      this.markLayoutDirty();
    }
  }

  get bottom(): PositionValue | undefined {
    return this._bottom;
  }

  set bottom(value: PositionValue | undefined) {
    if (this._bottom !== value) {
      this._bottom = value;
      this.markLayoutDirty();
    }
  }

  isAbsolute(): boolean {
    return this._position === 'absolute';
  }

  // Positioning context нужен только для прямых absolute-детей.
  // Сейчас это relative/absolute контейнеры, но не static-промежуточные узлы.
  isPositioningContext(): boolean {
    return this._position !== 'static';
  }

  static DEBUG = false;

  backgroundColor = 'transparent';

  borderColor = 'transparent';

  borderWidth = 0;

  portalHoverEnabled = false;

  /** Конфиг тултипа с ноды (проп tooltip на Canvas-элементе). */
  tooltip?: CanvasNodeTooltipConfig;

  interaction?: ResolvedCanvasInteractionConfig;

  constructor(id: string) {
    this.id = id;
  }

  markLayoutDirty() {
    if (!this._layoutDirty) {
      this._layoutDirty = true;
      this.parent?.markLayoutDirty();
    }
  }

  markMeasureDirty() {
    if (!this._measureDirty) {
      this._measureDirty = true;
      this.markLayoutDirty();
    }
  }

  isLayoutDirty(): boolean {
    return this._layoutDirty;
  }

  isMeasureDirty(): boolean {
    return this._measureDirty;
  }

  protected clearLayoutDirty() {
    this._layoutDirty = false;
  }

  protected clearMeasureDirty() {
    this._measureDirty = false;
  }

  addChild(child: CanvasNode) {
    this.attachChild(child, (list, node) => list.push(node));
  }

  addChildStart(child: CanvasNode) {
    this.attachChild(child, (list, node) => list.unshift(node));
  }

  removeChild(child: CanvasNode) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      child.parent = null;
      this.markLayoutDirty();
    }
  }

  /**
   * Эффективный конфиг тултипа ноды для hover-контроллера.
   * База отдаёт `tooltip` как есть; наследники (CanvasText) могут переопределить —
   * например, показывать авто-тултип только при обрезке текста в многоточие.
   */
  getTooltip(): CanvasNodeTooltipConfig | undefined {
    return this.tooltip;
  }

  abstract measure(ctx: CanvasRenderingContext2D): void;

  // Локальный zIndex суммируется с родительским на время paint. Так вложенные
  // overlay-ноды получают честный cumulative слой внутри canvas-root.
  paint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D): void {
    const prevZ = batcher.getZIndex();
    batcher.setZIndex(prevZ + this.zIndex);

    this.onPaint(batcher, ctx);

    if (CanvasNode.DEBUG) {
      batcher.strokeRect(
        this.rect.x,
        this.rect.y,
        this.rect.width,
        this.rect.height,
        this.debugColor,
        1
      );
    }

    batcher.setZIndex(prevZ);
  }

  abstract onPaint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D): void;

  hitTest(x: number, y: number): CanvasNode[] {
    const candidates: HitCandidate[] = [];
    this.collectHitCandidates(x, y, 0, { value: 0 }, candidates);

    // Порядок кликов синхронизирован с накопленным порядком слоев при paint.
    // Выход за границы parent пока не расширяет область hit-test.
    candidates.sort(
      (a, b) => b.cumulativeZIndex - a.cumulativeZIndex || b.order - a.order
    );

    return candidates.map(({ node }) => node);
  }

  requestLayout() {
    if (this.parent) {
      this.parent.requestLayout();
    }
  }

  requestPaint() {
    if (this.parent) {
      this.parent.requestPaint();
    }
  }

  onClick(_event: CanvasEvent<CanvasNode>) {}

  onMouseDown(_event: CanvasEvent<CanvasNode>) {}

  onMouseUp(_event: CanvasEvent<CanvasNode>) {}

  onMouseEnter(_event: CanvasEvent<CanvasNode>) {}

  onMouseLeave(_event: CanvasEvent<CanvasNode>) {}

  onMouseMove(_event: CanvasEvent<CanvasNode>) {}

  onDoubleClick(_event: CanvasEvent<CanvasNode>) {}

  private attachChild(
    child: CanvasNode,
    insert: (list: CanvasNode[], node: CanvasNode) => void
  ) {
    child.parent = this;
    insert(this.children, child);
    this.markLayoutDirty();
  }

  private collectHitCandidates(
    x: number,
    y: number,
    parentZIndex: number,
    orderCounter: HitOrderCounter,
    candidates: HitCandidate[]
  ): void {
    // containsHitPoint отвечает только за bounds конкретной ноды. Порядок
    // кликов по zIndex/source-order считается уже после сбора кандидатов.
    if (!this.containsHitPoint(x, y)) {
      return;
    }

    const cumulativeZIndex = parentZIndex + this.zIndex;
    candidates.push({
      node: this,
      cumulativeZIndex,
      order: orderCounter.value,
    });
    orderCounter.value += 1;

    for (const child of this.children) {
      child.collectHitCandidates(
        x,
        y,
        cumulativeZIndex,
        orderCounter,
        candidates
      );
    }
  }

  protected containsHitPoint(x: number, y: number): boolean {
    // Базовая модель hit-test режет traversal по rect parent. Поэтому child,
    // нарисованный за bounds parent, может быть виден, но не попадет в hit.
    return (
      x >= this.rect.x &&
      x <= this.rect.x + this.rect.width &&
      y >= this.rect.y &&
      y <= this.rect.y + this.rect.height
    );
  }
}
