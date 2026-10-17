export interface Size {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Align = 'flex-start' | 'flex-end' | 'center' | 'stretch';
// 100% применится позже, когда layout узнает доступный размер.
export type CrossAxisSizing = 'auto' | 'deferred-percent-stretch';
export type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';

export interface FlexStyle {
  id?: string;
  flexGrow: number;
  flexShrink: number;
  flexBasis: number;
  alignSelf?: Align | 'auto';
  width?: number;
  height?: number;
  /**
   * Минимальная ширина элемента в раскладке. Когда места в строке не хватает,
   * элемент сжимается только до неё. Например, текст с многоточием так
   * сохраняет хотя бы первую букву.
   *
   * Подробнее: действует только по главной оси при направлении row. Применяется
   * после распределения сжатия между детьми, остальные дети при этом заново не
   * ужимаются, поэтому сумма ширин может превысить контейнер, и лишнее выходит
   * за его границу. Если не задано, ограничения нет.
   */
  minWidth?: number;
  crossAxisSizing?: CrossAxisSizing;
  metadata?: unknown;
}

export interface FlexBoxOptions {
  id?: string;
  direction?: Direction;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  columnGap?: number;
  rowGap?: number;
  justifyContent?: Justify;
  alignItems?: Align;
  alignContent?: AlignContent;
  padding?:
    | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
      }
    | number;
}
