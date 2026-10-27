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
  CanvasDropdownApi,
  CanvasDropdownErrorApi,
  CanvasDropdownItem,
  CanvasNodeDropdownConfig,
  CanvasNodeDropdownItems,
  CanvasNodeDropdownProps,
  CanvasNodePopoverConfig,
  CanvasNodePopoverContent,
  CanvasNodePopoverProps,
  CanvasNodeTooltipConfig,
  CanvasNodeTooltipProps,
  CanvasPopoverRenderApi,
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

// Omit по каждой ветке объединения: иначе теряется запрет задавать popover и dropdown вместе.
type OmitInteraction<T> = T extends unknown ? Omit<T, 'interaction'> : never;

type CanvasMemberWithoutInteraction<T> = T extends {
  __canvasType: infer CanvasType;
}
  ? T extends (props: infer Props) => infer Result
    ? ((props: OmitInteraction<Props>) => Result) & {
        __canvasType: CanvasType;
      }
    : T
  : T;

type PublicCanvas = {
  [K in keyof typeof InternalCanvas]: CanvasMemberWithoutInteraction<
    (typeof InternalCanvas)[K]
  >;
};

type PublicCanvasProps<T> = OmitInteraction<T>;

export const Canvas = InternalCanvas as PublicCanvas;

export type CanvasBadgeProps = PublicCanvasProps<InternalCanvasBadgeProps>;
export type CanvasButtonProps = PublicCanvasProps<InternalCanvasButtonProps>;
export type CanvasContainerProps =
  PublicCanvasProps<InternalCanvasContainerProps>;
export type CanvasEmbedIconButtonProps =
  PublicCanvasProps<InternalCanvasEmbedIconButtonProps>;
export type CanvasIconButtonProps =
  PublicCanvasProps<InternalCanvasIconButtonProps>;
export type CanvasIconProps = PublicCanvasProps<InternalCanvasIconProps>;
export type CanvasTextProps = PublicCanvasProps<InternalCanvasTextProps>;

export type CanvasImageProps = PublicCanvasProps<InternalCanvasImageProps>;
export type CanvasAvatarProps = PublicCanvasProps<InternalCanvasAvatarProps>;
export type CanvasAvatarGroupProps =
  PublicCanvasProps<InternalCanvasAvatarGroupProps>;
