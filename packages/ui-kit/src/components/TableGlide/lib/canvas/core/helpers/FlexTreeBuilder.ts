/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FlexBox, FlexStyle } from '../../miniflex';
import type { ICanvasContainer } from '../CanvasContainer.type';
import type { ICanvasNode } from '../CanvasNode.type';

/**
 * Свойства flex, извлечённые из дочернего узла.
 */
interface ChildFlexProperties {
  width: number | undefined;
  height: number | undefined;
  flexGrow: number;
  flexShrink: number;
  flexBasis: number;
  alignSelf: FlexStyle['alignSelf'];
  crossAxisSizing: FlexStyle['crossAxisSizing'];
}

/**
 * FlexTreeBuilder строит дерево miniflex из иерархии ICanvasNode.
 *
 * Преобразует дочерние элементы ICanvasNode в структуру FlexBox/FlexElement,
 * обрабатывая особые случаи, такие как размеры 100% и вложенность контейнеров.
 */
export class FlexTreeBuilder {
  private defaultFlexStyle: FlexStyle = {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 0,
    alignSelf: 'auto',
    width: undefined,
    height: undefined,
    // По умолчанию размер считаем сразу.
    crossAxisSizing: 'auto',
  };

  /**
   * Строит flex-дерево для canvas-узла.
   *
   * @param canvasNode - Canvas-узел, дочерние элементы которого нужно построить
   * @param flexBox - Родительский flex-бокс для добавления дочерних элементов
   * @param flowChildren - Опционально предфильтрованные flow-дочерние элементы (для вызова верхнего уровня)
   */
  build(
    canvasNode: ICanvasNode,
    flexBox: FlexBox,
    flowChildren?: ICanvasNode[]
  ): void {
    // Используем переданные flowChildren для верхнего уровня, иначе фильтруем дочерние элементы
    const children =
      flowChildren ?? canvasNode.children.filter((c) => !c.isAbsolute());
    const len = children.length;
    const dir = flexBox.direction;
    const isHorizontal = dir === 'row' || dir === 'row-reverse';

    for (let i = 0; i < len; i += 1) {
      const child = children[i]!;
      const childStyle = child.style;

      // Извлекаем и обрабатываем flex-свойства
      const props = this.extractChildFlexProperties(child, childStyle);

      // Обрабатываем особые случаи размеров 100%
      this.handlePercentageDimensions(
        props,
        childStyle.width,
        childStyle.height,
        isHorizontal,
        child.rect
      );

      // Обновляем объект стиля по умолчанию
      this.defaultFlexStyle.flexGrow = props.flexGrow;
      this.defaultFlexStyle.flexShrink = props.flexShrink;
      this.defaultFlexStyle.flexBasis = props.flexBasis;
      this.defaultFlexStyle.alignSelf = props.alignSelf;
      this.defaultFlexStyle.width = props.width;
      this.defaultFlexStyle.height = props.height;
      this.defaultFlexStyle.crossAxisSizing = props.crossAxisSizing;

      // Добавляем дочерний элемент в flex-дерево
      if (this.isContainer(child)) {
        this.addContainerChild(child, flexBox);
      } else {
        this.addLeafChild(child, flexBox);
      }
    }
  }

  /**
   * Извлекает flex-свойства из дочернего узла.
   */
  private extractChildFlexProperties(
    _child: ICanvasNode,
    childStyle: ICanvasNode['style']
  ): ChildFlexProperties {
    const flexGrow = childStyle.flexGrow ?? 0;
    const flexShrink = childStyle.flexShrink ?? 1;
    const flexBasis = childStyle.flexBasis ?? 0;

    return {
      width:
        typeof childStyle.width === 'number' ? childStyle.width : undefined,
      height:
        typeof childStyle.height === 'number' ? childStyle.height : undefined,
      flexGrow,
      flexShrink,
      flexBasis,
      alignSelf: childStyle.alignSelf ?? 'auto',
      crossAxisSizing: 'auto',
    };
  }

  /**
   * Обрабатывает особые случаи размеров 100%.
   *
   * - 100% ширина в row-лайауте: становится flex-grow
   * - 100% ширина в column-лайауте: растягивается по финальной ширине родителя
   * - 100% высота в column-лайауте: становится flex-grow
   * - 100% высота в row-лайауте: растягивается по финальной высоте родителя
   */
  private handlePercentageDimensions(
    props: ChildFlexProperties,
    width: ICanvasNode['style']['width'],
    height: ICanvasNode['style']['height'],
    isHorizontal: boolean,
    childRect: { width: number; height: number }
  ): void {
    if (width === '100%') {
      if (isHorizontal) {
        // Row-лайаут: 100% ширина становится flex-grow
        props.width = undefined;
        if (props.flexGrow === 0) {
          props.flexGrow = 1;
        }
      } else {
        // 100% применим позже, когда будет известна ширина.
        props.width = undefined;
        props.alignSelf = 'stretch';
        props.crossAxisSizing = 'deferred-percent-stretch';
      }
    }

    if (height === '100%') {
      if (!isHorizontal) {
        // Column-лайаут: 100% высота становится flex-grow
        props.height = undefined;
        if (props.flexGrow === 0) {
          props.flexGrow = 1;
        }
      } else {
        // 100% применим позже, когда будет известна высота.
        props.height = undefined;
        props.alignSelf = 'stretch';
        props.crossAxisSizing = 'deferred-percent-stretch';
      }
    }

    // Устанавливаем flexBasis на основе направления и размера контента
    // Когда flexBasis равен 0, он принимает размер контента вдоль главной оси
    if (props.flexBasis === 0) {
      props.flexBasis = isHorizontal ? childRect.width : childRect.height;
    }
  }

  /**
   * Проверяет, является ли узел контейнером (имеет flex-опции).
   */
  private isContainer(node: ICanvasNode): node is ICanvasContainer {
    return 'flexOptions' in node;
  }

  /**
   * Добавляет дочерний элемент-контейнер в flex-дерево.
   */
  private addContainerChild(
    child: ICanvasContainer,
    parentFlexBox: FlexBox
  ): void {
    const childBox = new FlexBox(0, 0, child.flexOptions);
    childBox.size.width = child.rect.width;
    childBox.size.height = child.rect.height;

    parentFlexBox.addChild(childBox, this.defaultFlexStyle);

    // Рекурсивно строим flex-дерево дочернего элемента
    this.build(child, childBox);
  }

  /**
   * Добавляет дочерний элемент-лист в flex-дерево.
   */
  private addLeafChild(child: ICanvasNode, parentFlexBox: FlexBox): void {
    const leaf = parentFlexBox.addChild(this.defaultFlexStyle);
    leaf.size.width = child.rect.width;
    leaf.size.height = child.rect.height;
  }
}
