import { Popup } from '@ui-kit/components/Popup';
import { IconResizeCorneredFill } from '@ui-kit/icons';
import { textTertiary } from '@ui-kit/tokens';
import type { ComponentProps, CSSProperties } from 'react';

type PopupResizableProp = ComponentProps<typeof Popup>['resizable'];

export type PopupResizableConfig = Exclude<
  PopupResizableProp,
  boolean | undefined
>;

export type PopupResizableCorner =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type PopupResizableIconSize = NonNullable<
  PopupResizableConfig['iconSize']
>;

export const POPUP_RESIZABLE_CORNERS: PopupResizableCorner[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

const defaultIconSize: PopupResizableIconSize = 's';

/** DF-иконка ресайза, повёрнутая под свой угол */
export const getPopupResizeIcon = (
  corner: PopupResizableCorner,
  iconSize: PopupResizableIconSize = defaultIconSize,
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

const getPopupResizeIcons = (
  icons?: PopupResizableConfig['icons'],
  iconSize?: PopupResizableConfig['iconSize'],
): NonNullable<PopupResizableConfig['icons']> => ({
  topLeft: icons?.topLeft || getPopupResizeIcon('top-left', iconSize),
  topRight: icons?.topRight || getPopupResizeIcon('top-right', iconSize),
  bottomLeft: icons?.bottomLeft || getPopupResizeIcon('bottom-left', iconSize),
  bottomRight:
    icons?.bottomRight || getPopupResizeIcon('bottom-right', iconSize),
});

export type PopupResizableConfigDefaults = {
  /** Активный угол ресайза по умолчанию */
  corner: PopupResizableCorner;
  minWidth: number;
  minHeight: number;
};

/**
 * Общая сборка конфигурации resizable атомарного Popup для DF-компонентов
 * (PopupDF, AiAgentPopup): один активный угол с DF-иконкой, скрытые иконки
 * остальных углов, частичная конфигурация потребителя мержится с дефолтной.
 */
export const buildPopupResizableConfig = (
  resizable: boolean | Partial<PopupResizableConfig> | undefined,
  defaults: PopupResizableConfigDefaults,
): PopupResizableConfig | undefined => {
  if (!resizable) {
    return undefined;
  }

  const defaultConfig: PopupResizableConfig = {
    directions: [defaults.corner],
    icons: getPopupResizeIcons(undefined, defaultIconSize),
    hiddenIcons: POPUP_RESIZABLE_CORNERS.filter(
      (corner) => corner !== defaults.corner,
    ),
    minWidth: defaults.minWidth,
    minHeight: defaults.minHeight,
    iconSize: defaultIconSize,
  };

  if (resizable === true) {
    return defaultConfig;
  }

  const directions = resizable.directions ?? defaultConfig.directions;
  const hiddenIcons =
    resizable.hiddenIcons ??
    (resizable.directions
      ? POPUP_RESIZABLE_CORNERS.filter(
          (corner) => !directions?.includes(corner),
        )
      : defaultConfig.hiddenIcons);

  return {
    ...defaultConfig,
    ...resizable,
    directions,
    hiddenIcons,
    icons: getPopupResizeIcons(resizable.icons, resizable.iconSize),
    iconSize: resizable.iconSize ?? defaultConfig.iconSize,
  };
};
