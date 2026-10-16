import { FlexStyle } from '../miniflex/types';
import { DrawBatcher } from './DrawBatcher';

// --- Вспомогательные типы данных ---
export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type DimensionValue = number | '100%';
export type PositionType = 'static' | 'relative' | 'absolute';
export type PositionValue = number | string;

// Это поле нужно только layout-движку, пользователь его не задает.
export type CanvasFlexStyle = Omit<
  Partial<FlexStyle>,
  'width' | 'height' | 'crossAxisSizing'
> & {
  width?: DimensionValue;
  height?: DimensionValue;
  cursor?: string;
  marginRight?: number;
};

export interface CanvasEvent<T = any> {
  type: string;
  x: number;
  y: number;
  originalEvent: MouseEvent | any;
  target?: any;
  currentTarget?: T;
  stopPropagation: () => void;
  preventDefault: () => void;
  cellBounds?: Rect | null;
}

// --- Полный интерфейс ноды ---
export interface ICanvasNode {
  // Публичные свойства (из полей класса)
  id: string;
  debugColor: string;
  parent: ICanvasNode | null;
  children: ICanvasNode[];
  rect: Rect;
  zIndex: number;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  portalHoverEnabled: boolean;
  tooltip?: string | { text: string; [key: string]: unknown };
  /**
   * Минимальная ширина, которую нода считает для себя сама по своему
   * содержимому. Нужна, чтобы при нехватке места содержимое не сжималось в
   * ноль: например, от текста с многоточием остаётся первая буква.
   *
   * Подробнее: заполняется нодой при измерении (measure) и читается
   * раскладкой как minWidth, если style.minWidth не задан явно. Явный
   * style.minWidth важнее. Действует только по главной оси при направлении
   * row. Сейчас значение считает только CanvasText с включённой опцией
   * minWidthByContent.
   */
  minContentWidth?: number;

  // Аксессоры (get/set описываются просто как свойства)
  style: CanvasFlexStyle;
  position: PositionType;
  left: PositionValue | undefined;
  top: PositionValue | undefined;
  right: PositionValue | undefined;
  bottom: PositionValue | undefined;

  // Методы состояния и флагов
  isAbsolute(): boolean;
  isPositioningContext(): boolean;
  isLayoutDirty(): boolean;
  isMeasureDirty(): boolean;

  // Методы управления деревом и жизненным циклом
  markLayoutDirty(): void;
  markMeasureDirty(): void;
  addChild(child: ICanvasNode): void;
  addChildStart(child: ICanvasNode): void;
  removeChild(child: ICanvasNode): void;
  requestLayout(): void;
  requestPaint(): void;

  // Отрисовка и расчеты
  measure(ctx: CanvasRenderingContext2D): void;
  paint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D): void;
  onPaint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D): void;
  hitTest(x: number, y: number): ICanvasNode[];

  // Обработчики событий
  onClick(event: CanvasEvent<ICanvasNode>): void;
  onMouseDown(event: CanvasEvent<ICanvasNode>): void;
  onMouseUp(event: CanvasEvent<ICanvasNode>): void;
  onMouseEnter(event: CanvasEvent<ICanvasNode>): void;
  onMouseLeave(event: CanvasEvent<ICanvasNode>): void;
  onMouseMove(event: CanvasEvent<ICanvasNode>): void;
  onDoubleClick(event: CanvasEvent<ICanvasNode>): void;
}
