/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  FlexBox,
  FlexElement,
  type PaddingBox,
  RootFlexBox,
} from '../../miniflex';
import type { ICanvasContainer } from '../CanvasContainer.type';
import type { ICanvasNode, Rect } from '../CanvasNode.type';
import { PositionResolver } from './PositionResolver';

const LAYOUT_EPSILON = 0.5;

/**
 * LayoutReconciler синхронизирует позиции ICanvasNode с вычисленным flex-лайаутом FlexBox.
 *
 * После вычисления flex-лайаута этот реконцилятор:
 * 1. Обновляет позиции узлов из результатов flex
 * 2. Рекурсивно реконцилирует дочерние элементы
 * 3. Обновляет размеры контейнеров на основе контента
 * 4. Обрабатывает переизмерение листовых узлов
 * 5. Позиционирует absolute-дочерние элементы во вложенных контейнерах
 */
export class LayoutReconciler {
  constructor(private positionResolver: PositionResolver) {}

  /**
   * Реконцилирует лайаут для узла и его дочерних элементов.
   *
   * @param ctx - Canvas rendering context
   * @param canvasNode - Canvas-узел для реконциляции
   * @param flexNode - Соответствующий flex-элемент/бокс
   * @param flowChildren - Опционально предфильтрованные flow-дочерние элементы
   * @param rootRect - Прямоугольник корневого контейнера для позиционирования
   * @param preserveCurrentRect - Не расширять rect, уже выставленный PositionResolver
   * @returns True, если лайаут изменился и нужен ещё один проход
   */
  reconcile(
    ctx: CanvasRenderingContext2D,
    canvasNode: ICanvasNode,
    flexNode: FlexElement | FlexBox,
    flowChildren?: ICanvasNode[],
    rootRect?: Rect,
    preserveCurrentRect = false
  ): boolean {
    let dirty = false;

    const { parent } = canvasNode;
    const parentRect = parent !== null ? parent.rect : rootRect;

    // Обновляем позицию и размер узла из результата flex
    dirty = this.updateNodePosition(
      canvasNode,
      flexNode,
      parentRect ?? canvasNode.rect
    );

    // Фильтруем только flow-дочерние элементы для реконциляции
    const cChildren =
      flowChildren ?? canvasNode.children.filter((c) => !c.isAbsolute());
    const hasChildren = cChildren.length > 0;

    if (hasChildren && flexNode instanceof FlexBox) {
      // Рекурсивно реконцилируем дочерние элементы
      const childDirty = this.reconcileChildLayouts(
        ctx,
        cChildren,
        flexNode,
        rootRect
      );
      dirty = dirty || childDirty;

      // В preserve-режиме absolute-root сохраняет rect от PositionResolver:
      // дети раскладываются внутри него, но контент не расширяет внешние границы.
      if (this.isContainer(canvasNode) && !preserveCurrentRect) {
        const sizeDirty = this.updateContainerFromContent(canvasNode, flexNode);
        dirty = dirty || sizeDirty;
      }
    } else if (!hasChildren) {
      // Листовые узлы: переизмеряем и обновляем, если размер изменился
      const leafDirty = this.remeasureAndUpdateLeaf(ctx, canvasNode, flexNode);
      dirty = dirty || leafDirty;
    }

    // Absolute-ноды не живут во flex-flow: после reconcile flow-детей
    // отдельно позиционируем прямых absolute-детей positioning context.
    this.positionNestedAbsoluteChildren(ctx, canvasNode);

    return dirty;
  }

  /**
   * Обновляет позицию и размер узла из результата вычисления flex.
   */
  private updateNodePosition(
    canvasNode: ICanvasNode,
    flexNode: FlexElement | FlexBox,
    parentRect: Rect
  ): boolean {
    const cRect = canvasNode.rect;
    const fPos = flexNode.position;
    const fSize = flexNode.size;

    // Обновляем позицию (пропускаем для корня, который имеет absolute позицию)
    // Примечание: Сравниваем с parentRect для относительного позиционирования
    cRect.x = parentRect.x + fPos.x;
    cRect.y = parentRect.y + fPos.y;

    // Обновляем размер
    const widthChanged = cRect.width !== fSize.width;
    const heightChanged = cRect.height !== fSize.height;

    cRect.width = fSize.width;
    cRect.height = fSize.height;

    return widthChanged || heightChanged;
  }

  /**
   * Рекурсивно реконцилирует лайауты дочерних элементов.
   */
  private reconcileChildLayouts(
    ctx: CanvasRenderingContext2D,
    canvasChildren: ICanvasNode[],
    flexBox: FlexBox,
    rootRect?: Rect
  ): boolean {
    let dirty = false;
    const flexChildren = flexBox.children;
    const len = canvasChildren.length;

    for (let i = 0; i < len; i += 1) {
      const childDirty = this.reconcile(
        ctx,
        canvasChildren[i]!,
        flexChildren[i] as FlexElement | FlexBox,
        undefined,
        rootRect
      );
      dirty = dirty || childDirty;
    }

    return dirty;
  }

  /**
   * Обновляет размер контейнера на основе контента (для auto-sizing).
   *
   * Для row-лайаутов: высота может расти на основе дочерних элементов
   * Для column-лайаутов: ширина и auto-height могут расти по дочерним элементам
   */
  private updateContainerFromContent(
    container: ICanvasContainer,
    flexBox: FlexBox | RootFlexBox
  ): boolean {
    // Получаем закэшированное состояние лайаута контейнера
    const rowLayout = this.getContainerCachedIsRow(container);
    const padding = this.getContainerCachedPadding(container);

    const boxChildren = flexBox.children;
    const len = boxChildren.length;
    let maxExtent = 0;

    if (rowLayout) {
      // Row-лайаут: высота растёт на основе дочерних элементов
      for (let i = 0; i < len; i += 1) {
        const child = boxChildren[i]!;
        const end = child.position.y + child.size.height;
        if (end > maxExtent) maxExtent = end;
      }

      const contentHeight = maxExtent > 0 ? maxExtent + padding.bottom : 0;
      const styleHeight = container.style.height;

      // 100% уже получил доступную высоту от flex layout.
      if (styleHeight === '100%') {
        return false;
      }

      const minHeight = typeof styleHeight === 'number' ? styleHeight : 0;
      const targetHeight =
        contentHeight > minHeight ? contentHeight : minHeight;

      if (targetHeight > container.rect.height + LAYOUT_EPSILON) {
        container.rect.height = targetHeight;
        this.syncFlexNodeSizeFromRect(container, flexBox, false, true);
        return true;
      }
    } else {
      // Column-лайаут: ширина и auto-height растут по дочерним элементам
      let maxMainExtent = 0;
      for (let i = 0; i < len; i += 1) {
        const child = boxChildren[i]!;
        const crossEnd = child.position.x + child.size.width;
        const mainEnd = child.position.y + child.size.height;
        if (crossEnd > maxExtent) maxExtent = crossEnd;
        if (mainEnd > maxMainExtent) maxMainExtent = mainEnd;
      }

      const contentWidth = maxExtent > 0 ? maxExtent + padding.right : 0;
      const styleWidth = container.style.width;
      let sizeChanged = false;
      let widthChanged = false;
      let heightChanged = false;

      // 100% уже получил доступную ширину от flex layout.
      if (styleWidth !== '100%') {
        const minWidth = typeof styleWidth === 'number' ? styleWidth : 0;
        const targetWidth = contentWidth > minWidth ? contentWidth : minWidth;

        if (targetWidth > container.rect.width + LAYOUT_EPSILON) {
          container.rect.width = targetWidth;
          sizeChanged = true;
          widthChanged = true;
        }
      }

      const contentHeight =
        maxMainExtent > 0 ? maxMainExtent + padding.bottom : 0;
      const styleHeight = container.style.height;

      if (styleHeight !== '100%') {
        const minHeight = typeof styleHeight === 'number' ? styleHeight : 0;
        const targetHeight =
          contentHeight > minHeight ? contentHeight : minHeight;

        if (targetHeight > container.rect.height + LAYOUT_EPSILON) {
          container.rect.height = targetHeight;
          sizeChanged = true;
          heightChanged = true;
        }
      }

      if (sizeChanged) {
        this.syncFlexNodeSizeFromRect(
          container,
          flexBox,
          widthChanged,
          heightChanged
        );
      }

      return sizeChanged;
    }

    return false;
  }

  private syncFlexNodeSizeFromRect(
    node: ICanvasNode,
    flexNode: FlexElement | FlexBox,
    widthChanged: boolean,
    heightChanged: boolean
  ): void {
    if (widthChanged) {
      flexNode.size.width = node.rect.width;
    }

    if (heightChanged) {
      flexNode.size.height = node.rect.height;
    }

    this.syncAutoMainAxisFlexBasis(node, flexNode, widthChanged, heightChanged);
  }

  private syncAutoMainAxisFlexBasis(
    node: ICanvasNode,
    flexNode: FlexElement | FlexBox,
    widthChanged: boolean,
    heightChanged: boolean
  ): void {
    const parent = node.parent;

    if (
      parent === null ||
      !this.isContainer(parent) ||
      (node.style.flexBasis !== undefined && node.style.flexBasis !== 0)
    ) {
      return;
    }

    const parentIsRow = this.getContainerCachedIsRow(parent);

    if (parentIsRow && widthChanged) {
      // В row главная ось - ширина, поэтому auto-basis обновляем по ширине.
      flexNode.style.flexBasis = node.rect.width;
    } else if (!parentIsRow && heightChanged) {
      // В column главная ось - высота, поэтому auto-basis обновляем по высоте.
      flexNode.style.flexBasis = node.rect.height;
    }
  }

  /**
   * Переизмеряет листовый узел и обновляет flex-размер, если он изменился.
   */
  private remeasureAndUpdateLeaf(
    ctx: CanvasRenderingContext2D,
    node: ICanvasNode,
    flexElement: FlexElement | FlexBox
  ): boolean {
    const prevHeight = node.rect.height;
    const enforcedWidth = node.rect.width;

    node.measure(ctx);
    node.rect.width = enforcedWidth;

    const heightDiff = node.rect.height - prevHeight;
    if (Math.abs(heightDiff) > LAYOUT_EPSILON) {
      this.syncFlexNodeSizeFromRect(node, flexElement, false, true);
      return true;
    }

    return false;
  }

  /**
   * Позиционирует absolute-дочерние элементы во вложенных контейнерах.
   *
   * Когда контейнер является позиционным контекстом (relative/absolute), его
   * absolute-дочерние элементы должны быть спозиционированы.
   */
  private positionNestedAbsoluteChildren(
    ctx: CanvasRenderingContext2D,
    canvasNode: ICanvasNode
  ): void {
    if (!this.isContainer(canvasNode) || !canvasNode.isPositioningContext()) {
      return;
    }

    const container = canvasNode;
    const allChildren = container.children;
    const absoluteChildren = allChildren.filter((c) => c.isAbsolute());

    if (absoluteChildren.length === 0) {
      return;
    }

    // Получаем padding контейнера и позиционируем absolute-дочерние элементы
    const padding = this.getContainerCachedPadding(container);

    this.positionResolver.positionAbsoluteChildren(
      container.rect,
      padding,
      absoluteChildren,
      (child) => child.measure(ctx),
      (child) => this.layoutAbsoluteChildSubtree(ctx, child)
    );
  }

  private layoutAbsoluteChildSubtree(
    ctx: CanvasRenderingContext2D,
    child: ICanvasNode
  ): void {
    if (!this.isContainer(child)) {
      return;
    }

    // Absolute-контейнер уже стоит в финальных координатах. На время layout
    // делаем его root, чтобы reconciler не сдвинул его обратно к parent.
    const parent = child.parent;
    child.parent = null;
    try {
      child.performLayout(ctx, true);
    } finally {
      child.parent = parent;
    }
  }

  /**
   * Проверяет, является ли узел контейнером.
   */
  private isContainer(node: ICanvasNode): node is ICanvasContainer {
    return 'flexOptions' in node;
  }

  /**
   * Получает закэшированное значение isRow из контейнера.
   */
  private getContainerCachedIsRow(container: ICanvasContainer): boolean {
    // Получаем закэшированное значение isRow контейнера
    return (
      (container as unknown as { cachedIsRow: boolean }).cachedIsRow ?? true
    );
  }

  /**
   * Получает закэшированный padding из контейнера.
   */
  private getContainerCachedPadding(container: ICanvasContainer): PaddingBox {
    // Получаем закэшированный padding контейнера
    return (
      (container as unknown as { cachedPadding: PaddingBox }).cachedPadding ?? {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }
    );
  }
}
