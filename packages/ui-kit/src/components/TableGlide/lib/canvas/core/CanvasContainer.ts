/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-underscore-dangle */
import { PaddingBox, FlexBoxOptions, RootFlexBox } from '../miniflex';
import { ICanvasContainer } from './CanvasContainer.type';
import type { ICanvasNode } from './CanvasNode.type';

import { CanvasNode } from './CanvasNode';
import { DrawBatcher } from './DrawBatcher';
import { FlexTreeBuilder, LayoutReconciler, PositionResolver } from './helpers';
import { SizeAccumulator } from './helpers/SizeAccumulator';
export * from './CanvasContainer.type';
const MAX_LAYOUT_PASSES = 3;

const ZERO_PADDING: PaddingBox = { top: 0, right: 0, bottom: 0, left: 0 };

const isRowDirection = (
  direction: FlexBoxOptions['direction'] | undefined
): boolean =>
  direction === undefined || direction === 'row' || direction === 'row-reverse';

export const resolvePaddingBox = (
  padding: FlexBoxOptions['padding'] | undefined
): PaddingBox => {
  if (padding === undefined) {
    return ZERO_PADDING;
  }
  if (typeof padding === 'number') {
    return { top: padding, right: padding, bottom: padding, left: padding };
  }
  return {
    top: padding.top ?? 0,
    right: padding.right ?? 0,
    bottom: padding.bottom ?? 0,
    left: padding.left ?? 0,
  };
};

export class CanvasContainer extends CanvasNode implements ICanvasContainer {
  private flexOptionsValue: FlexBoxOptions;

  // Нормализованный padding контейнера. Его используют flex-layout и
  // absolute positioning, чтобы считать reference box от content area.
  cachedPadding: PaddingBox = ZERO_PADDING;

  cachedIsRow = true;

  cachedGap = 0;

  private optionsCacheValid = false;

  private readonly positionResolver: PositionResolver;

  private readonly flexTreeBuilder: FlexTreeBuilder;

  private readonly layoutReconciler: LayoutReconciler;

  constructor(
    id: string,
    flexOptions: FlexBoxOptions = {},
    backgroundColor = 'transparent'
  ) {
    super(id);
    this.flexOptionsValue = flexOptions;
    this.positionResolver = new PositionResolver();
    this.flexTreeBuilder = new FlexTreeBuilder();
    this.layoutReconciler = new LayoutReconciler(this.positionResolver);
    this.invalidateOptionsCache();
    this.backgroundColor = backgroundColor;
  }

  get flexOptions(): FlexBoxOptions {
    return this.flexOptionsValue;
  }

  set flexOptions(value: FlexBoxOptions) {
    this.flexOptionsValue = value;
    this.invalidateOptionsCache();
    this.markLayoutDirty();
  }

  setFlexOptions(options: Partial<FlexBoxOptions>) {
    Object.assign(this.flexOptionsValue, options);
    this.invalidateOptionsCache();
    this.markLayoutDirty();
  }

  private invalidateOptionsCache() {
    this.optionsCacheValid = false;
  }

  private ensureOptionsCache() {
    if (this.optionsCacheValid) return;
    const opts = this.flexOptionsValue;
    this.cachedIsRow = isRowDirection(opts.direction);
    this.cachedGap = this.cachedIsRow ? opts.columnGap ?? 0 : opts.rowGap ?? 0;
    this.cachedPadding = resolvePaddingBox(opts.padding);
    this.optionsCacheValid = true;
  }

  measure(ctx: CanvasRenderingContext2D) {
    this.measureChildren(ctx);
    this.computeIntrinsicSize();
    this.applySizeConstraints();
    this.clearMeasureDirty();
  }

  private measureChildren(ctx: CanvasRenderingContext2D): void {
    const { children } = this;
    for (let i = 0; i < children.length; i += 1) {
      children[i]!.measure(ctx);
    }
  }

  private computeIntrinsicSize(): void {
    this.ensureOptionsCache();
    const { layoutChildren } = this.separateChildrenByLayoutMode();
    const childRects = layoutChildren.map((c) => c.rect);
    const { width: contentWidth, height: contentHeight } =
      SizeAccumulator.computeIntrinsicSize(
        childRects,
        this.cachedIsRow,
        this.cachedGap
      );
    const padding = this.cachedPadding;
    this._intrinsicWidth = contentWidth + padding.left + padding.right;
    this._intrinsicHeight = contentHeight + padding.top + padding.bottom;
  }

  private applySizeConstraints(): void {
    const { style } = this;
    const resolvedWidth = this.resolveStyleDimension(style.width, 'width');
    const resolvedHeight = this.resolveStyleDimension(style.height, 'height');

    this.rect.width = resolvedWidth ?? this._intrinsicWidth;
    this.rect.height = resolvedHeight ?? this._intrinsicHeight;
    if (resolvedWidth === undefined) {
      this.clampWidthToParent();
    }
  }

  private resolveStyleDimension(
    value: CanvasNode['style']['width'],
    axis: 'width' | 'height'
  ): number | undefined {
    if (typeof value === 'number') {
      return value;
    }

    if (value !== '100%') {
      return undefined;
    }

    // В canvas нет DOM-resize, поэтому 100% явно переводим в размер parent.
    // Это держит paint-bounds и hit-test-bounds в одной системе координат.
    const parentSize = this.resolveParentContentSize(axis);
    if (parentSize !== undefined) {
      return parentSize;
    }

    return this.rect[axis] > 0 ? this.rect[axis] : undefined;
  }

  private resolveParentContentSize(
    axis: 'width' | 'height'
  ): number | undefined {
    const { parent } = this;
    if (!(parent instanceof CanvasContainer)) {
      return parent?.rect[axis] && parent.rect[axis] > 0
        ? parent.rect[axis]
        : undefined;
    }

    parent.ensureOptionsCache();
    const padding = parent.cachedPadding;
    const inset =
      axis === 'width'
        ? padding.left + padding.right
        : padding.top + padding.bottom;
    const size = parent.rect[axis] - inset;

    return size > 0 ? size : undefined;
  }

  performLayout(ctx: CanvasRenderingContext2D, preserveCurrentRect = false) {
    // preserveCurrentRect нужен absolute-контейнерам: PositionResolver уже
    // выставил им внешний rect, а layout детей не должен его расширять.
    if (preserveCurrentRect) {
      this.measureChildren(ctx);
      this.clearMeasureDirty();
    } else {
      this.measure(ctx);
    }

    if (this.children.length === 0) {
      this.clearLayoutDirty();
      return;
    }
    const { layoutChildren, absoluteChildren } =
      this.separateChildrenByLayoutMode();
    if (layoutChildren.length > 0) {
      this.layoutPhase1Flexbox(ctx, layoutChildren, preserveCurrentRect);
    }
    if (absoluteChildren.length > 0 && this.isPositioningContext()) {
      this.layoutPhase2Absolute(ctx, absoluteChildren);
    }
    this.clearLayoutDirty();
  }

  private layoutPhase1Flexbox(
    ctx: CanvasRenderingContext2D,
    layoutChildren: CanvasNode[],
    preserveCurrentRect = false
  ): void {
    const root = new RootFlexBox(
      this.rect.width,
      this.rect.height,
      this.flexOptionsValue
    );
    this.flexTreeBuilder.build(this, root, layoutChildren);
    let pass = 0;
    let needsAnotherPass: boolean;
    do {
      root.build();
      needsAnotherPass = this.layoutReconciler.reconcile(
        ctx,
        this,
        root,
        layoutChildren,
        this.rect,
        preserveCurrentRect
      );
      pass += 1;
    } while (needsAnotherPass && pass < MAX_LAYOUT_PASSES);
  }

  private layoutPhase2Absolute(
    ctx: CanvasRenderingContext2D,
    absoluteChildren: CanvasNode[]
  ): void {
    this.ensureOptionsCache();
    // Порядок важен: сначала measure child, потом финальный absolute rect,
    // затем layout subtree уже внутри назначенных координат.
    this.positionResolver.positionAbsoluteChildren(
      this.rect,
      this.cachedPadding,
      absoluteChildren,
      (child) => child.measure(ctx),
      (child) => this.layoutAbsoluteChildSubtree(ctx, child)
    );
  }

  private layoutAbsoluteChildSubtree(
    ctx: CanvasRenderingContext2D,
    child: ICanvasNode
  ): void {
    if (!(child instanceof CanvasContainer)) {
      return;
    }

    // После absolute-позиционирования контейнер уже получил финальный rect.
    // Временно раскладываем его как root, чтобы layout детей не сбросил x/y.
    const parent = child.parent;
    child.parent = null;
    try {
      child.performLayout(ctx, true);
    } finally {
      child.parent = parent;
    }
  }

  private clampWidthToParent() {
    const { parent } = this;
    if (parent === null || parent.rect.width <= 0) return;
    let availableWidth = parent.rect.width;
    if (parent instanceof CanvasContainer) {
      parent.ensureOptionsCache();
      availableWidth -= parent.cachedPadding.left + parent.cachedPadding.right;
    }
    availableWidth = Math.max(0, availableWidth);
    if (this.rect.width > availableWidth) {
      this.rect.width = availableWidth;
    }
  }

  separateChildrenByLayoutMode(): {
    layoutChildren: CanvasNode[];
    absoluteChildren: CanvasNode[];
  } {
    const layoutChildren: CanvasNode[] = [];
    const absoluteChildren: CanvasNode[] = [];
    for (const child of this.children) {
      // Absolute-ноды не участвуют во flex-flow, их позиционирует Phase 2.
      if (child.isAbsolute()) {
        absoluteChildren.push(child);
      } else {
        layoutChildren.push(child);
      }
    }
    return { layoutChildren, absoluteChildren };
  }

  onPaint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D) {
    if (this.backgroundColor !== 'transparent') {
      batcher.fillRect(
        this.rect.x,
        this.rect.y,
        this.rect.width,
        this.rect.height,
        this.backgroundColor
      );
    }
    for (const child of this.children) {
      child.paint(batcher, ctx);
    }
  }
}
