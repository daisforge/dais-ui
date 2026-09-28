import { buildPopupResizableConfig } from '@ui-kit/shared/utils/resizable';

import {
  DEFAULT_MIN_HEIGHT,
  DEFAULT_MIN_WIDTH,
  FALLBACK_POSITION_INDENT,
} from './AiAgentPopup.constants';
import type {
  AiAgentPopupDragBoundary,
  AiAgentPopupFrame,
  AiAgentPopupFrameMetrics,
  AiAgentPopupPosition,
  AiAgentPopupResizableConfig,
  AiAgentPopupResizeCorner,
  AiAgentPopupSize,
} from './AiAgentPopup.types';

/**
 * Элемент, в котором живёт окно. null означает документ: окно поверх
 * всего, координаты от вьюпорта.
 */
export const resolveFrameElement = (
  frame: AiAgentPopupFrame,
): HTMLElement | null => {
  if (!frame || frame === 'document') return null;
  if (typeof frame === 'string') return document.getElementById(frame);
  return frame.current ?? null;
};

/**
 * Метрики области, в которой окно позиционируется и двигается:
 * вьюпорт или элемент из пропса frame. left и top нужны для перевода
 * координат мыши и таргета (они всегда от вьюпорта) в систему frame:
 * это точка начала содержимого, поэтому прокрутка frame вычитается,
 * ведь окно позиционируется absolute и скроллится вместе с содержимым.
 * Размеры содержимого, а не видимой части, по той же причине.
 */
export const getFrameMetrics = (
  frame: AiAgentPopupFrame,
): AiAgentPopupFrameMetrics => {
  const frameElement = resolveFrameElement(frame);
  if (!frameElement) {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const rect = frameElement.getBoundingClientRect();
  return {
    left: rect.left + frameElement.clientLeft - frameElement.scrollLeft,
    top: rect.top + frameElement.clientTop - frameElement.scrollTop,
    width: frameElement.scrollWidth,
    height: frameElement.scrollHeight,
  };
};

const documentMetrics = (): AiAgentPopupFrameMetrics => ({
  left: 0,
  top: 0,
  width: window.innerWidth,
  height: window.innerHeight,
});

/**
 * Зажимает позицию так, чтобы окно целиком оставалось в границах области
 * (вьюпорт или frame) с учётом отступов boundary.
 */
export const validatePosition = (
  position: AiAgentPopupPosition,
  elementSize: AiAgentPopupSize = { width: 0, height: 0 },
  boundary: AiAgentPopupDragBoundary = {},
  frameMetrics?: AiAgentPopupFrameMetrics,
): AiAgentPopupPosition => {
  const { width, height } = frameMetrics ?? documentMetrics();
  const { top = 0, right = 0, bottom = 0, left = 0 } = boundary;

  return {
    x: Math.max(left, Math.min(position.x, width - elementSize.width - right)),
    y: Math.max(
      top,
      Math.min(position.y, height - elementSize.height - bottom),
    ),
  };
};

/**
 * Позиция справа от target-элемента, верхние края выровнены.
 * Координаты переводятся из вьюпортных в систему области окна.
 */
export const getPositionFromTarget = (
  target: HTMLElement,
  gap: number,
  frameMetrics?: AiAgentPopupFrameMetrics,
): AiAgentPopupPosition => {
  const rect = target.getBoundingClientRect();
  const { left, top } = frameMetrics ?? documentMetrics();

  return { x: rect.right + gap - left, y: rect.top - top };
};

export const getFallbackPosition = (): AiAgentPopupPosition => ({
  x: FALLBACK_POSITION_INDENT,
  y: FALLBACK_POSITION_INDENT,
});

export type AiAgentPopupViewportSector = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Номер сектора экрана, в котором находится окно. Экран делится на шесть
 * частей (три колонки, два ряда), сектором окна считается тот, с которым
 * у него наибольшая площадь пересечения:
 * 1 | 2 | 3
 * ---------
 * 4 | 5 | 6
 */
export const getViewportSector = (
  position: AiAgentPopupPosition,
  size: AiAgentPopupSize,
  boundary: AiAgentPopupDragBoundary = {},
  frameMetrics?: AiAgentPopupFrameMetrics,
): AiAgentPopupViewportSector => {
  const { width, height } = frameMetrics ?? {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const { left = 0, right = 0, top = 0, bottom = 0 } = boundary;

  const sectorWidth = (width - left - right) / 3;
  const sectorHeight = (height - top - bottom) / 2;

  const x = position.x - left;
  const y = position.y - top;

  let bestSector: AiAgentPopupViewportSector = 1;
  let bestOverlap = -1;

  for (let sector = 1; sector <= 6; sector += 1) {
    const sectorX = ((sector - 1) % 3) * sectorWidth;
    const sectorY = sector <= 3 ? 0 : sectorHeight;

    const overlapX = Math.max(
      0,
      Math.min(x + size.width, sectorX + sectorWidth) - Math.max(x, sectorX),
    );
    const overlapY = Math.max(
      0,
      Math.min(y + size.height, sectorY + sectorHeight) - Math.max(y, sectorY),
    );
    const overlap = overlapX * overlapY;

    if (overlap > bestOverlap) {
      bestOverlap = overlap;
      bestSector = sector as AiAgentPopupViewportSector;
    }
  }

  return bestSector;
};

/**
 * Угол ресайз-иконки для сектора: иконка смотрит туда, где есть место
 * расти. Окно в верхней половине экрана растёт вниз, в нижней вверх,
 * в левой части вправо, в правой влево.
 */
export const getCornerForSector = (
  sector: AiAgentPopupViewportSector,
): AiAgentPopupResizeCorner => {
  switch (sector) {
    case 1:
    case 2:
      return 'bottom-right';
    case 3:
      return 'bottom-left';
    case 4:
    case 5:
      return 'top-right';
    case 6:
      return 'top-left';
    default:
      return 'bottom-right';
  }
};

/**
 * Конфигурация resizable для атомарного Popup: ресайз за один угол
 * (activeCorner, зависит от положения окна на экране). Сборка общая
 * с PopupDF, отличаются только угол и минимальные размеры.
 */
export const buildResizableConfig = (
  resizable: boolean | Partial<AiAgentPopupResizableConfig> | undefined,
  activeCorner: AiAgentPopupResizeCorner = 'bottom-right',
): AiAgentPopupResizableConfig | undefined =>
  buildPopupResizableConfig(resizable, {
    corner: activeCorner,
    minWidth: DEFAULT_MIN_WIDTH,
    minHeight: DEFAULT_MIN_HEIGHT,
  });
