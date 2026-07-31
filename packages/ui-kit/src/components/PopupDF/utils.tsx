import { Popup } from '@ui-kit/components/Popup';
import { IconResizeCorneredFill } from '@ui-kit/icons';
import { textTertiary } from '@ui-kit/tokens';
import type { ComponentProps, CSSProperties } from 'react';

type PopupResizableProp = ComponentProps<typeof Popup>['resizable'];
type PopupResizableConfig = Exclude<PopupResizableProp, boolean | undefined>;
type ResizeCorner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type PopupDFResizeIconSize = NonNullable<PopupResizableConfig['iconSize']>;

const defaultResizeIconSize: PopupDFResizeIconSize = 's';

const allCorners: ResizeCorner[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

const getResizableCornerFromPopupPlacement = (
  placement?: ComponentProps<typeof Popup>['placement'],
): ResizeCorner => {
  switch (placement) {
    case 'top-left':
    case 'top':
    case 'left':
      return 'bottom-right';
    case 'top-right':
    case 'right':
      return 'bottom-left';
    case 'bottom-left':
    case 'bottom':
      return 'top-right';
    case 'bottom-right':
      return 'top-left';
    case 'center':
    case undefined:
    default:
      return 'bottom-right';
  }
};

const getDirectionsByCorner = (
  corner: ResizeCorner,
): NonNullable<PopupResizableConfig['directions']> => [corner];

const getResizeIcon = (
  corner: ResizeCorner,
  iconSize: PopupDFResizeIconSize = defaultResizeIconSize,
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
  icons?: PopupResizableConfig['icons'],
  iconSize?: PopupResizableConfig['iconSize'],
): NonNullable<PopupResizableConfig['icons']> => ({
  topLeft: icons?.topLeft || getResizeIcon('top-left', iconSize),
  topRight: icons?.topRight || getResizeIcon('top-right', iconSize),
  bottomLeft: icons?.bottomLeft || getResizeIcon('bottom-left', iconSize),
  bottomRight: icons?.bottomRight || getResizeIcon('bottom-right', iconSize),
});

export const getPopupDFResizableConfig = (
  resizable: PopupResizableProp,
  placement?: ComponentProps<typeof Popup>['placement'],
): PopupResizableProp => {
  if (!resizable) {
    return resizable;
  }

  const defaultCorner = getResizableCornerFromPopupPlacement(placement);
  const getDefaultConfig = (corner: ResizeCorner): PopupResizableConfig => ({
    directions: getDirectionsByCorner(corner),
    icons: getResizeIcons(undefined, defaultResizeIconSize),
    hiddenIcons: allCorners.filter((item) => item !== corner),
    minWidth: 240,
    minHeight: 120,
    iconSize: defaultResizeIconSize,
  });

  if (resizable === true) {
    return getDefaultConfig(defaultCorner);
  }

  const resizableConfig = resizable;
  const defaultConfig = getDefaultConfig(defaultCorner);
  const directions =
    resizableConfig.directions ??
    defaultConfig.directions ??
    getDirectionsByCorner(defaultCorner);
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
