import { IconResizeCorneredFill } from '@ui-kit/icons';
import { textTertiary } from '@ui-kit/tokens';
import type { CSSProperties } from 'react';

import {
  DEFAULT_MIN_HEIGHT,
  DEFAULT_MIN_WIDTH,
  FALLBACK_POSITION_INDENT,
} from './AiAgentPopup.constants';
import type {
  AiAgentPopupDragBoundary,
  AiAgentPopupPosition,
  AiAgentPopupResizableConfig,
  AiAgentPopupResizeCorner,
  AiAgentPopupSize,
} from './AiAgentPopup.types';

/**
 * Зажимает позицию так, чтобы окно целиком оставалось в границах вьюпорта
 * с учётом отступов boundary.
 */
export const validatePosition = (
  position: AiAgentPopupPosition,
  elementSize: AiAgentPopupSize = { width: 0, height: 0 },
  boundary: AiAgentPopupDragBoundary = {},
): AiAgentPopupPosition => {
  const { innerWidth, innerHeight } = window;
  const { top = 0, right = 0, bottom = 0, left = 0 } = boundary;

  return {
    x: Math.max(
      left,
      Math.min(position.x, innerWidth - elementSize.width - right),
    ),
    y: Math.max(
      top,
      Math.min(position.y, innerHeight - elementSize.height - bottom),
    ),
  };
};

/**
 * Позиция справа от target-элемента, верхние края выровнены.
 */
export const getPositionFromTarget = (
  target: HTMLElement,
  gap: number,
): AiAgentPopupPosition => {
  const rect = target.getBoundingClientRect();

  return { x: rect.right + gap, y: rect.top };
};

export const getFallbackPosition = (): AiAgentPopupPosition => ({
  x: FALLBACK_POSITION_INDENT,
  y: FALLBACK_POSITION_INDENT,
});

type ResizeIconSize = NonNullable<AiAgentPopupResizableConfig['iconSize']>;

const defaultResizeIconSize: ResizeIconSize = 's';

const defaultResizeCorner: AiAgentPopupResizeCorner = 'bottom-right';

const allCorners: AiAgentPopupResizeCorner[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

const getResizeIcon = (
  corner: AiAgentPopupResizeCorner,
  iconSize: ResizeIconSize = defaultResizeIconSize,
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
  icons?: AiAgentPopupResizableConfig['icons'],
  iconSize?: AiAgentPopupResizableConfig['iconSize'],
): NonNullable<AiAgentPopupResizableConfig['icons']> => ({
  topLeft: icons?.topLeft || getResizeIcon('top-left', iconSize),
  topRight: icons?.topRight || getResizeIcon('top-right', iconSize),
  bottomLeft: icons?.bottomLeft || getResizeIcon('bottom-left', iconSize),
  bottomRight: icons?.bottomRight || getResizeIcon('bottom-right', iconSize),
});

/**
 * Собирает конфигурацию resizable для атомарного Popup: по умолчанию ресайз
 * за правый нижний угол с нашей иконкой, переданная частичная конфигурация
 * мержится с дефолтной.
 */
export const buildResizableConfig = (
  resizable: boolean | Partial<AiAgentPopupResizableConfig> | undefined,
): AiAgentPopupResizableConfig | undefined => {
  if (!resizable) {
    return undefined;
  }

  const defaultConfig: AiAgentPopupResizableConfig = {
    directions: [defaultResizeCorner],
    icons: getResizeIcons(undefined, defaultResizeIconSize),
    hiddenIcons: allCorners.filter((corner) => corner !== defaultResizeCorner),
    minWidth: DEFAULT_MIN_WIDTH,
    minHeight: DEFAULT_MIN_HEIGHT,
    iconSize: defaultResizeIconSize,
  };

  if (resizable === true) {
    return defaultConfig;
  }

  const directions = resizable.directions ?? defaultConfig.directions;
  const hiddenIcons =
    resizable.hiddenIcons ??
    (resizable.directions
      ? allCorners.filter((corner) => !directions?.includes(corner))
      : defaultConfig.hiddenIcons);

  return {
    ...defaultConfig,
    ...resizable,
    directions,
    hiddenIcons,
    icons: getResizeIcons(resizable.icons, resizable.iconSize),
    iconSize: resizable.iconSize ?? defaultConfig.iconSize,
  };
};
