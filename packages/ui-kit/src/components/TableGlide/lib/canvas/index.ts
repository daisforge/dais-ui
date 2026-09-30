// Core exports
export type {
  CanvasEvent,
  CanvasFlexStyle,
  CanvasHoverControllerOptions,
  CanvasInteractionConfig,
  CanvasInteractionOptions,
  DimensionValue,
  DrawCommand,
  Rect,
  RegistryListener,
  ResolvedCanvasInteractionConfig,
  TextAlign,
  TextBaseline,
} from './core';
export {
  CanvasAbsoluteContainer,
  CanvasContainer,
  CanvasHoverController,
  CanvasLeaf,
  CanvasNode,
  CanvasRegistry,
  CanvasRoot,
  createNormalCanvasInteraction,
  defaultBatcher,
  DrawBatcher,
  normalizeCanvasInteraction,
  resolvePaddingBox,
} from './core';

// Primitives
export type {
  AvatarContent,
  AvatarGroupItemClick,
  AvatarGroupOverflowClick,
  AvatarSize,
  BadgeSize,
  BadgeView,
  CanvasAvatarGroupOptions,
  CanvasAvatarItem,
  CanvasAvatarOptions,
  CanvasBadgeOptions,
  CanvasButtonOptions,
  CanvasChevronOptions,
  CanvasIconButtonOptions,
  CanvasIconOptions,
  CanvasImageOptions,
  CanvasLinkOptions,
  CanvasTextAutoTooltip,
  CanvasTextOptions,
  ImageFit,
  LinkView,
} from './primitives';
export {
  CanvasAvatar,
  CanvasAvatarGroup,
  CanvasBadge,
  CanvasButton,
  CanvasChevron,
  CanvasEmbedIconButton,
  CanvasIcon,
  CanvasIconButton,
  CanvasImage,
  CanvasLink,
  CanvasRect,
  CanvasText,
} from './primitives';

// Cells
export type {
  ButtonIcon,
  ButtonSize,
  ButtonView,
  CanvasCell,
  CanvasCellData,
  CanvasCellRendererConfig,
  CanvasClickDispatchResult,
  CanvasPointerIntentResult,
  CanvasRenderResult,
  CellIndices,
  HoverMeta,
  HoverState,
  IconDefinition,
  IconSpriteOptions,
  IconSpriteStats,
  Point,
  RectBounds,
  RenderClickHandler,
  SizeConfig,
  ViewColors,
} from './cells';
export {
  buildCellId,
  BUTTON_PADDING_Y,
  CANVAS_CELL_KIND,
  canvasCellRenderer,
  CellCanvasRoot,
  createCanvasCell,
  createCanvasCellRenderer,
  drawButton,
  drawButtonWithView,
  drawIcon,
  drawIconButton,
  drawIconButtonWithView,
  getCellIndices,
  getHoverState,
  getIconImageDirect,
  getIconSprite,
  getIconSpriteStats,
  ICON_SIZE_ADJUSTMENT,
  isCanvasCell,
  isHoveringBounds,
  isPointInArea,
  normalizeHoverPoint,
  onAnyIconLoad,
  performCanvasClick,
  performCanvasPointerDownIntent,
  preloadIconSprites,
  registerIconDefinitions,
  resetIconSpriteCache,
  resolveClickPoint,
  retrieveRenderData,
  SIZE_CONFIG,
  storeRenderData,
  toRelativePoint,
  updateHoverState,
  VIEW_COLORS,
} from './cells';

// Utils
export type {
  CanvasNodeTooltipConfig,
  CanvasNodeTooltipProps,
  CanvasPortalHoverDetail,
  CanvasPortalHoverListener,
  CanvasPortalSource,
} from './utils';
export {
  CANVAS_PORTAL_EVENT,
  clearIconCache,
  dispatchCanvasPortalHover,
  getIconCacheSize,
  isPortalHoverLocked,
  isReactIcon,
  lockPortalHover,
  normalizeIcon,
  // Icon utilities
  reactIconToSvg,
  subscribeToCanvasPortalHover,
  subscribeToPortalHoverLock,
} from './utils';

// Miniflex
export type {
  Align,
  AlignContent,
  Direction,
  FlexBoxItem,
  FlexBoxOptions,
  FlexStyle,
  Justify,
  PaddingBox,
  Position,
  Size,
} from './miniflex';
export {
  FlexBox,
  flexBoxLayout,
  FlexElement,
  resolvePaddingBox as resolveFlexPaddingBox,
  RootFlexBox,
} from './miniflex';

// Components
export type {
  CanvasAvatarGroupProps,
  CanvasAvatarProps,
  CanvasBadgeProps,
  CanvasButtonProps,
  CanvasContainerProps,
  CanvasEmbedIconButtonProps,
  CanvasIconButtonProps,
  CanvasIconProps,
  CanvasImageProps,
  CanvasLinkProps,
  CanvasRectProps,
  CanvasTextProps,
  RootBridgeProps,
} from './components';
export { buildCanvasTree, Canvas, RootBridge } from './components';

// Hooks
export { useCanvasRegistry } from './hooks';
