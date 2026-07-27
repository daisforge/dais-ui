/* eslint-disable no-console */
import type { PopoverProps } from '@ui-kit/components/Popover';

import {
  DEFAULT_POSITION,
  ELEMENT_INDENTATION
} from './AiAgentPopover.constants';
import {
  AiAgentPopoverCustomPlacement,
  AiAgentPopoverDragBoundary,
  AiAgentPopoverDragSector,
  AiAgentPopoverPlacement
} from './AiAgentPopover.types';

// Проверяем, является ли placement кастомным
export const isCustomPlacement = (
  placement?: AiAgentPopoverPlacement
): placement is AiAgentPopoverCustomPlacement => {
  if (!placement) return false;
  return (
    typeof placement === 'string' &&
    ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(placement)
  );
};

/**
 *Преобразует кастомные placement в стандартные
 */
export const normalizePlacement = (
  placement: AiAgentPopoverPlacement
): PopoverProps['placement'] => {
  if (!isCustomPlacement(placement))
    return placement as PopoverProps['placement'];
  return placement.split('-')[0] as PopoverProps['placement'];
};

interface GetCurrentSectorParams {
  /** Текущая позиция элемента (например, левый верхний угол). */
  position: { x: number; y: number };
  /** Размеры элемента (ширина и высота). */
  size?: { width: number; height: number };
  /** Границы области, в которой определяется сектор. */
  boundary?: AiAgentPopoverDragBoundary;
  /** Включить логирование для отладки. */
  enableLogs?: boolean;
}

/**
 * Определяет, в каком секторе находится элемент, учитывая его позицию и размеры.
 * Секторы:
 * 1 | 2 | 3
 * ---------
 * 4 | 5 | 6
 */
export const getCurrentSector = ({
  position,
  size = { width: 0, height: 0 },
  boundary = {},
  enableLogs = false
}: GetCurrentSectorParams): AiAgentPopoverDragSector => {
  const { innerWidth, innerHeight } = window;
  const { left = 0, right = 0, top = 0, bottom = 0 } = boundary;

  // Вычисляем доступную область
  const availableWidth = innerWidth - left - right;
  const availableHeight = innerHeight - top - bottom;

  // Размеры секторов
  const sectorWidth = availableWidth / 3;
  const sectorHeight = availableHeight / 2;

  // Координаты элемента с учетом границ
  const x = position.x - left;
  const y = position.y - top;

  // Если размеры не переданы, работаем только с позицией
  if (size.width === 0 || size.height === 0) {
    if (y < sectorHeight) {
      if (x < sectorWidth) return 1;
      if (x < 2 * sectorWidth) return 2;
      return 3;
    }
    if (x < sectorWidth) return 4;
    if (x < 2 * sectorWidth) return 5;
    return 6;
  }

  // Рассчитываем, какая часть элемента попадает в каждый сектор
  const sectorCoverage: Record<AiAgentPopoverDragSector, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  // Проверяем пересечение элемента с каждым сектором
  for (let i = 1; i <= 6; i += 1) {
    const sectorX = ((i - 1) % 3) * sectorWidth;
    const sectorY = i <= 3 ? 0 : sectorHeight;
    const sectorRight = sectorX + sectorWidth;
    const sectorBottom = sectorY + sectorHeight;

    // Координаты элемента
    const elemRight = x + size.width;
    const elemBottom = y + size.height;

    // Вычисляем площадь пересечения
    const overlapX = Math.max(
      0,
      Math.min(elemRight, sectorRight) - Math.max(x, sectorX)
    );
    const overlapY = Math.max(
      0,
      Math.min(elemBottom, sectorBottom) - Math.max(y, sectorY)
    );
    const overlapArea = overlapX * overlapY;

    sectorCoverage[i as AiAgentPopoverDragSector] = overlapArea;
  }

  if (enableLogs) {
    console.group('getCurrentSector (advanced)');
    console.log('Sector coverage:', sectorCoverage);
    console.groupEnd();
  }

  let maxSector: AiAgentPopoverDragSector = 1;
  let maxArea = sectorCoverage[1];

  for (let i = 1; i <= 6; i += 1) {
    const sector = i as AiAgentPopoverDragSector;
    if (sectorCoverage[sector] > maxArea) {
      maxArea = sectorCoverage[sector];
      maxSector = sector;
    }
  }

  return maxSector;
};

// Определение placement по сектору
export const getPlacementForSector = (
  sector: AiAgentPopoverDragSector
): AiAgentPopoverPlacement => {
  switch (sector) {
    case 1:
      return 'bottom-right';
    case 2:
      return 'bottom';
    case 3:
      return 'bottom-left';
    case 4:
      return 'top-right';
    case 5:
      return 'top';
    case 6:
      return 'top-left';
    default:
      return 'auto';
  }
};

export const getPositionFromPlacement = (
  placement: AiAgentPopoverCustomPlacement,
  boundary?: AiAgentPopoverDragBoundary,
  elementSize: { width: number; height: number } = { width: 0, height: 0 }
): { x: number; y: number } => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const {
    top: marginTop = 0,
    right: marginRight = 0,
    bottom: marginBottom = 0,
    left: marginLeft = 0
  } = boundary || {};

  const offset = ELEMENT_INDENTATION;
  const { width: elementWidth, height: elementHeight } = elementSize;

  // Функция для определения эффективного отступа
  const getEffectiveMargin = (boundaryValue: number, defaultOffset: number) =>
    boundaryValue > defaultOffset ? boundaryValue : defaultOffset;

  // Вычисляем эффективные отступы
  const effectiveLeft = getEffectiveMargin(marginLeft, offset);
  const effectiveRight = getEffectiveMargin(marginRight, offset);
  const effectiveTop = getEffectiveMargin(marginTop, offset);
  const effectiveBottom = getEffectiveMargin(marginBottom, offset);

  const safeArea = {
    top: effectiveTop,
    right: windowWidth - effectiveRight,
    bottom: windowHeight - effectiveBottom,
    left: effectiveLeft
  };

  // Может быть полезно для debug в будущем
  // console.group('getPositionFromPlacement');
  // console.debug('boundary:', boundary);
  // console.debug('effective margins:', {
  //   left: effectiveLeft,
  //   right: effectiveRight,
  //   top: effectiveTop,
  //   bottom: effectiveBottom,
  // });
  // console.debug('elementSize:', elementSize);
  // console.debug('safeArea:', safeArea);
  // console.debug('windowSize:', { width: windowWidth, height: windowHeight });
  // console.groupEnd();

  switch (placement) {
    case 'top-left':
      return {
        x: Math.min(safeArea.left, windowWidth - elementWidth - effectiveRight),
        y: Math.min(
          safeArea.top,
          windowHeight - elementHeight - effectiveBottom
        )
      };
    case 'top-right':
      return {
        x: Math.max(safeArea.right - elementWidth, effectiveLeft),
        y: Math.min(
          safeArea.top,
          windowHeight - elementHeight - effectiveBottom
        )
      };
    case 'bottom-left':
      return {
        x: Math.min(safeArea.left, windowWidth - elementWidth - effectiveRight),
        y: Math.max(safeArea.bottom - elementHeight, effectiveTop)
      };
    case 'bottom-right':
      return {
        x: Math.max(safeArea.right - elementWidth, effectiveLeft),
        y: Math.max(safeArea.bottom - elementHeight, effectiveTop)
      };
    default:
      return DEFAULT_POSITION;
  }
};

/**
 * Определяет угол для иконки ресайза на основе текущего placement.
 *
 * Логика: иконка ресайза располагается в углу, диагонально противоположном target-элементу.
 * - bottom-right → bottom-right (target вверху слева)
 * - bottom-left  → bottom-left  (target вверху справа)
 * - top-right    → top-right    (target внизу слева)
 * - top-left     → top-left     (target внизу справа)
 * - bottom       → bottom-right (сектор 2, контент раскрывается вниз)
 * - top          → top-right    (сектор 5, контент раскрывается вверх)
 */
export const getResizableCorner = (
  placement: AiAgentPopoverPlacement | undefined
): AiAgentPopoverCustomPlacement => {
  if (!placement || typeof placement !== 'string') return 'bottom-right';

  switch (placement) {
    case 'top-left':
      return 'top-left';
    case 'top-right':
      return 'top-right';
    case 'bottom-left':
      return 'bottom-left';
    case 'bottom-right':
      return 'bottom-right';
    case 'top':
      return 'top-right';
    case 'bottom':
      return 'bottom-right';
    default:
      return 'bottom-right';
  }
};

export const isOffsetsEqual = (a: [number, number], b: [number, number]) =>
  a[0] === b[0] && a[1] === b[1];

export const isVerticalPlacement = (
  placement: AiAgentPopoverPlacement | string
): placement is
  | 'top'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right' =>
  typeof placement === 'string' &&
  [
    'top',
    'bottom',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right'
  ].includes(placement);

export const validatePosition = (
  position: { x: number; y: number },
  elementSize = { width: 0, height: 0 },
  boundary = { top: 0, right: 0, bottom: 0, left: 0 }
) => {
  const { innerWidth, innerHeight } = window;
  return {
    x: Math.max(
      boundary.left,
      Math.min(position.x, innerWidth - elementSize.width - boundary.right)
    ),
    y: Math.max(
      boundary.top,
      Math.min(position.y, innerHeight - elementSize.height - boundary.bottom)
    )
  };
};
