import type { CanvasInteractionConfig as InternalCanvasInteractionConfig } from '../../TableGlide';
import type {
  CanvasAvatarGroupProps as InternalCanvasAvatarGroupProps,
  CanvasAvatarProps as InternalCanvasAvatarProps,
  CanvasBadgeProps as InternalCanvasBadgeProps,
  CanvasButtonProps as InternalCanvasButtonProps,
  CanvasContainerProps as InternalCanvasContainerProps,
  CanvasEmbedIconButtonProps as InternalCanvasEmbedIconButtonProps,
  CanvasIconButtonProps as InternalCanvasIconButtonProps,
  CanvasIconProps as InternalCanvasIconProps,
  CanvasImageProps as InternalCanvasImageProps,
  CanvasTextProps as InternalCanvasTextProps,
} from './index';
import { Canvas as InternalCanvas } from './index';

export type {
  CanvasMarkProps,
  CanvasNodeTooltipConfig,
  CanvasNodeTooltipProps,
  CanvasPortalHoverDetail,
  CanvasPortalSource,
} from '../../TableGlide';
export {
  createEmptyCellGlide,
  createTextCellGlide,
  isCanvasContent,
  isCanvasEl,
  isCanvasString,
  isGlideGridCellObj,
  subscribeToCanvasPortalHover,
  subscribeToPortalHoverLock,
  TABLE_GLIDE_SIZES,
  fontStyles as tableCanvasFonts,
  THEME as tableCanvasTheme,
} from '../../TableGlide';
export { TableGlideInstance } from './TableGlideInstance';
export type * from './type';
export type { Rectangle } from '@glideappsfinal/glide-data-grid';
export { TextCellEntry } from '@glideappsfinal/glide-data-grid';

/**
 * Как клик по элементу внутри ячейки влияет на таблицу: можно не переносить
 * выделение и не доходить до `onCellClicked` (шеврон дерева, действие в строке)
 */
export type CanvasInteractionConfig = Pick<
  InternalCanvasInteractionConfig,
  'selection' | 'cellClick'
>;

type PublicInteractionProps = { interaction?: CanvasInteractionConfig };

type PublicCanvasMember<T, Extra> = T extends {
  __canvasType: infer CanvasType;
}
  ? T extends (props: infer Props) => infer Result
    ? ((props: Omit<Props, 'interaction'> & Extra) => Result) & {
        __canvasType: CanvasType;
      }
    : T
  : T;

/** Кликабельные элементы принимают `interaction`, остальным он снаружи не нужен */
type CanvasMemberWithInteraction =
  | 'Button'
  | 'IconButton'
  | 'EmbedIconButton'
  | 'Link'
  | 'Container';

type PublicCanvas = {
  [K in keyof typeof InternalCanvas]: PublicCanvasMember<
    (typeof InternalCanvas)[K],
    K extends CanvasMemberWithInteraction ? PublicInteractionProps : unknown
  >;
};

type PublicCanvasProps<T> = Omit<T, 'interaction'>;

type PublicClickableProps<T> = PublicCanvasProps<T> & PublicInteractionProps;

export const Canvas = InternalCanvas as PublicCanvas;

export type CanvasBadgeProps = PublicCanvasProps<InternalCanvasBadgeProps>;
export type CanvasButtonProps = PublicClickableProps<InternalCanvasButtonProps>;
export type CanvasContainerProps =
  PublicClickableProps<InternalCanvasContainerProps>;
export type CanvasEmbedIconButtonProps =
  PublicClickableProps<InternalCanvasEmbedIconButtonProps>;
export type CanvasIconButtonProps =
  PublicClickableProps<InternalCanvasIconButtonProps>;
export type CanvasIconProps = PublicCanvasProps<InternalCanvasIconProps>;
export type CanvasTextProps = PublicCanvasProps<InternalCanvasTextProps>;

export type CanvasImageProps = PublicCanvasProps<InternalCanvasImageProps>;
export type CanvasAvatarProps = PublicCanvasProps<InternalCanvasAvatarProps>;
export type CanvasAvatarGroupProps =
  PublicCanvasProps<InternalCanvasAvatarGroupProps>;
