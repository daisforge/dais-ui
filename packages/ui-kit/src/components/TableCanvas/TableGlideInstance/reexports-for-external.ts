import type {
  CanvasBadgeProps as InternalCanvasBadgeProps,
  CanvasButtonProps as InternalCanvasButtonProps,
  CanvasContainerProps as InternalCanvasContainerProps,
  CanvasEmbedIconButtonProps as InternalCanvasEmbedIconButtonProps,
  CanvasIconButtonProps as InternalCanvasIconButtonProps,
  CanvasIconProps as InternalCanvasIconProps,
  CanvasTextProps as InternalCanvasTextProps
} from './index';
import { Canvas as InternalCanvas } from './index';

export type {
  CanvasNodeTooltipConfig,
  CanvasNodeTooltipProps,
  CanvasPortalHoverDetail,
  CanvasPortalSource
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
  THEME as tableCanvasTheme
} from '../../TableGlide';
export { TableGlideInstance } from './TableGlideInstance';
export type * from './type';
export type { Rectangle } from '@glideappsfinal/glide-data-grid';
export { TextCellEntry } from '@glideappsfinal/glide-data-grid';

type CanvasMemberWithoutInteraction<T> = T extends {
  __canvasType: infer CanvasType;
}
  ? T extends (props: infer Props) => infer Result
    ? ((props: Omit<Props, 'interaction'>) => Result) & {
        __canvasType: CanvasType;
      }
    : T
  : T;

type PublicCanvas = {
  [K in keyof typeof InternalCanvas]: CanvasMemberWithoutInteraction<
    (typeof InternalCanvas)[K]
  >;
};

type PublicCanvasProps<T> = Omit<T, 'interaction'>;

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
