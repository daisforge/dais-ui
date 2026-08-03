import { PopoverBeta } from '@ui-kit/components/PopoverBeta';
import { IconResizeCorneredFill } from '@ui-kit/icons';
import { textTertiary } from '@ui-kit/tokens';
import type { ComponentProps, CSSProperties } from 'react';

type PopoverBetaResizableProp = ComponentProps<typeof PopoverBeta>['resizable'];
type PopoverBetaResizableConfig = Exclude<
  PopoverBetaResizableProp,
  boolean | undefined
>;
type ResizeCorner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type PopoverDFResizeIconSize = NonNullable<
  PopoverBetaResizableConfig['iconSize']
>;

const defaultResizeIconSize: PopoverDFResizeIconSize = 's';

const allCorners: ResizeCorner[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

const getResizableCorner = (
  placement?: ComponentProps<typeof PopoverBeta>['placement'],
): ResizeCorner => {
  switch (placement) {
    case 'top-end':
      return 'top-left';
    case 'top':
    case 'top-start':
      return 'top-right';
    case 'bottom-end':
      return 'bottom-left';
    case 'bottom':
    case 'bottom-start':
    case undefined:
      return 'bottom-right';
    case 'left-end':
      return 'top-left';
    case 'left':
    case 'left-start':
      return 'bottom-left';
    case 'right-end':
      return 'top-right';
    case 'right':
    case 'right-start':
      return 'bottom-right';
    default:
      return 'bottom-right';
  }
};

const getDirectionsByCorner = (
  corner: ResizeCorner,
): NonNullable<PopoverBetaResizableConfig['directions']> => [corner];

const getResizeIcon = (
  corner: ResizeCorner,
  iconSize: PopoverDFResizeIconSize = defaultResizeIconSize,
) => {
  const style: CSSProperties = {};

  if (corner.includes('left')) {
    style.transform = 'scaleX(-1)';
  }

  if (corner.includes('top')) {
    style.transform = style.transform ? 'scale(-1, -1)' : 'scaleY(-1)';
  }

  return (
    <IconResizeCorneredFill
      color={textTertiary}
      size={iconSize}
      style={style}
    />
  );
};

const getResizeIcons = (
  icons?: PopoverBetaResizableConfig['icons'],
  iconSize?: PopoverBetaResizableConfig['iconSize'],
): NonNullable<PopoverBetaResizableConfig['icons']> => ({
  topLeft: icons?.topLeft || getResizeIcon('top-left', iconSize),
  topRight: icons?.topRight || getResizeIcon('top-right', iconSize),
  bottomLeft: icons?.bottomLeft || getResizeIcon('bottom-left', iconSize),
  bottomRight: icons?.bottomRight || getResizeIcon('bottom-right', iconSize),
});

const getDefaultConfig = (
  corner: ResizeCorner,
): PopoverBetaResizableConfig => ({
  directions: getDirectionsByCorner(corner),
  icons: getResizeIcons(undefined, defaultResizeIconSize),
  hiddenIcons: allCorners.filter((item) => item !== corner),
  minWidth: 240,
  minHeight: 120,
  iconSize: defaultResizeIconSize,
});

const mergeResizableConfig = (
  resizable: PopoverBetaResizableProp,
  corner: ResizeCorner,
): PopoverBetaResizableProp => {
  if (!resizable) {
    return resizable;
  }

  if (resizable === true) {
    return getDefaultConfig(corner);
  }

  const resizableConfig = resizable;
  const defaultConfig = getDefaultConfig(corner);
  const directions =
    resizableConfig.directions ??
    defaultConfig.directions ??
    getDirectionsByCorner(corner);
  const hiddenIcons =
    resizableConfig.hiddenIcons ??
    (resizableConfig.directions
      ? allCorners.filter((item) => !directions.includes(item))
      : defaultConfig.hiddenIcons);

  return {
    ...defaultConfig,
    ...resizableConfig,
    directions,
    icons: getResizeIcons(resizableConfig.icons, resizableConfig.iconSize),
    hiddenIcons,
    iconSize: resizableConfig.iconSize ?? defaultConfig.iconSize,
  };
};

export const getPopoverDFResizableConfig = (
  resizable: PopoverBetaResizableProp,
  placement?: ComponentProps<typeof PopoverBeta>['placement'],
): PopoverBetaResizableProp =>
  mergeResizableConfig(resizable, getResizableCorner(placement));
