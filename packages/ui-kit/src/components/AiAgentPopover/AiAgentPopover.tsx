/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
import { IconMagic, IconResizeCorneredFill } from '@ui-kit/icons';
import { textTertiary } from '@ui-kit/tokens';
import { createSafeResizeObserver, throttleWithLastCall } from '@ui-kit/utils';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { AiAgentPopoverClassNames as cls } from './AiAgentPopover.classnames';
import { SAFETY_MARGIN, X_DEFAULT_OFFSET } from './AiAgentPopover.constants';
import {
  AiAgentPopoverStyled,
  MagicButtonStyled
} from './AiAgentPopover.styled';
import {
  AiAgentPopoverCustomPlacement,
  AiAgentPopoverPlacement,
  AiAgentPopoverProps,
  AiAgentPopoverResizableConfig
} from './AiAgentPopover.types';
import {
  getCurrentSector,
  getPlacementForSector,
  getPositionFromPlacement,
  getResizableCorner,
  isCustomPlacement,
  isOffsetsEqual,
  isVerticalPlacement,
  normalizePlacement
} from './AiAgentPopover.utils';
import { useDrag } from './hooks/useDrag';
import { usePositionStorage } from './hooks/usePositionStorage';

export const AiAgentPopover = ({
  opened: externalOpened,
  onToggle,
  children,
  target,
  offset: defaultOffset = [0, 14],
  placement = 'auto',
  trigger = 'click',
  contentContainerClassNames,
  dragBoundary,
  draggable = false,
  positionState: externalPositionState,
  ignoreToggleOnDrag = true,
  defaultPosition = 'bottom-right',
  onPositionChange,
  calculateOffset = true,
  calculatePlacement = true,
  useStorage = false,
  resizable,
  onResizeStart,
  onResizeEnd,
  targetDataAttributes,
  ...rest
}: AiAgentPopoverProps) => {
  // ---------- Refs ----------
  const contentRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const placementRef = useRef(placement);

  const [elementSize, setElementSize] = useState({ width: 0, height: 0 });

  // ---------- Open state ----------
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = externalOpened !== undefined ? externalOpened : internalOpen;

  // ---------- Placement ----------
  const [currentPlacement, setCurPlacement] = useState(placement);

  // Эффект синхронизации внешнего placement. Например, он будет обновлен динамически извне -> надо синхронизировать это действие
  useEffect(() => {
    placementRef.current = placement;
    setCurPlacement(placement); // нужен только для rerender
  }, [placement]);

  // ---------- Position  ----------

  // Вычисляем initialPosition без учета localStorage
  const computedInitialPosition = useMemo(
    () =>
      typeof defaultPosition === 'string'
        ? getPositionFromPlacement(defaultPosition, dragBoundary, elementSize)
        : defaultPosition,
    [defaultPosition, dragBoundary, elementSize]
  );

  // Подключаем логику localStorage
  const { savedPosition, savePosition } = usePositionStorage(
    useStorage,
    computedInitialPosition,
    elementSize,
    dragBoundary
  );

  // Если передан externalPositionState - используем его, иначе - внутренний стейт
  const [internalPosition, setInternalPosition] = useState(savedPosition);
  const [position, setPosition] = externalPositionState || [
    internalPosition,
    setInternalPosition
  ];

  // Сохраняем позицию при изменении (только для внутреннего стейта)
  useEffect(() => {
    if (!externalPositionState && useStorage) {
      savePosition(position);
    }
  }, [position, externalPositionState, useStorage, savePosition]);

  // Если изменился externalPositionState - синхронизируем
  useEffect(() => {
    if (externalPositionState) {
      setInternalPosition(externalPositionState[0]);
    }
  }, [externalPositionState]);

  // Синхронизируем internalPosition при изменении savedPosition
  useEffect(() => {
    if (!externalPositionState) {
      setInternalPosition(savedPosition);
    }
  }, [savedPosition, externalPositionState]);

  // ---------- Offset state ----------
  const [computedOffset, setComputedOffset] =
    useState<[number, number]>(defaultOffset);

  // Функция для проверки, влазит ли контент при заданном placement
  const checkContentFitsY = useCallback(
    (placement: AiAgentPopoverPlacement): boolean => {
      if (!contentRef.current) return false;

      const contentRect = contentRef.current.getBoundingClientRect();
      const { height } = contentRect;
      const { y } = position;

      // Рассчитываем будущие координаты по Y
      let futureTop;
      let futureBottom;

      switch (placement) {
        case 'top':
        case 'top-left':
        case 'top-right':
          futureTop = y - height;
          futureBottom = y;
          break;

        case 'bottom':
        case 'bottom-left':
        case 'bottom-right':
          futureTop = y;
          futureBottom = y + height;
          break;

        default: // 'auto'
          return true; // Popover сам решает
      }

      // Проверяем только вертикальные границы
      return (
        futureTop >= SAFETY_MARGIN &&
        futureBottom <= window.innerHeight - SAFETY_MARGIN
      );
    },
    [position]
  );

  // Функция обновления placement. Регулируется параметром calculatePlacement.
  const updatePlacement = useCallback(() => {
    if (!contentRef.current || !calculatePlacement || !isOpen) return;

    const targetRect = popoverRef.current?.getBoundingClientRect();
    const sector = getCurrentSector({
      position,
      size: { width: targetRect?.width ?? 0, height: targetRect?.height ?? 0 },
      boundary: dragBoundary
    });

    const suggestedPlacement = getPlacementForSector(sector);
    const isCenterSector = sector === 2 || sector === 5;
    const newPlacement = isCenterSector
      ? sector === 2
        ? 'bottom'
        : 'top'
      : suggestedPlacement;

    // Проверяем только для вертикальных позиций
    if (isVerticalPlacement(newPlacement) && !checkContentFitsY(newPlacement)) {
      placementRef.current = 'auto';
      setCurPlacement('auto'); // нужен только для rerender
      return;
    }

    if (placementRef.current !== newPlacement && newPlacement) {
      placementRef.current = newPlacement;
      setCurPlacement(newPlacement); // нужен только для rerender
    }
  }, [calculatePlacement, isOpen, position, dragBoundary, checkContentFitsY]);

  // Функция обновления offset
  const updateOffset = useCallback(() => {
    if (!contentRef.current || !isOpen || !calculateOffset) return;
    const contentWidth = contentRef.current.offsetWidth;
    const currentPlacementValue = placementRef.current;

    if (currentPlacementValue === 'top' || currentPlacementValue === 'bottom') {
      setComputedOffset((prev) =>
        isOffsetsEqual(prev, defaultOffset) ? prev : defaultOffset
      );
      return;
    }

    if (isCustomPlacement(currentPlacementValue)) {
      const offsetDirection = currentPlacementValue.includes('left') ? 1 : -1;
      const newOffset = [
        offsetDirection * (-contentWidth / 2 + X_DEFAULT_OFFSET),
        defaultOffset[1]
      ] as [number, number];
      setComputedOffset((prev: [number, number]) => {
        const nextOffset: [number, number] = [newOffset[0], newOffset[1]];
        return isOffsetsEqual(prev, nextOffset) ? prev : nextOffset;
      });
    } else {
      setComputedOffset((prev) =>
        isOffsetsEqual(prev, defaultOffset) ? prev : defaultOffset
      );
    }
  }, [calculateOffset, isOpen, defaultOffset]);

  // Resize window with throttling
  useEffect(() => {
    const throttledHandleResize = throttleWithLastCall(() => {
      setPosition((prev) => ({
        x: Math.max(
          dragBoundary?.left || 0,
          Math.min(
            prev.x,
            window.innerWidth - elementSize.width - (dragBoundary?.right || 0)
          )
        ),
        y: Math.max(
          dragBoundary?.top || 0,
          Math.min(
            prev.y,
            window.innerHeight -
              elementSize.height -
              (dragBoundary?.bottom || 0)
          )
        )
      }));
    }, 200); // Задержка в 200 мс

    window.addEventListener('resize', throttledHandleResize);

    return () => {
      throttledHandleResize.cancel(); // Отменяем отложенный вызов при размонтировании
      window.removeEventListener('resize', throttledHandleResize);
    };
  }, [elementSize, dragBoundary, setPosition]);

  // Эффект для обновления позиционирования
  useLayoutEffect(() => {
    if (!isOpen) return;
    updatePlacement();
    updateOffset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, position]);

  // Эффект для отслеживания размеров
  useLayoutEffect(() => {
    if (!popoverRef.current) return;

    const updateSize = () => {
      const rect = popoverRef.current?.getBoundingClientRect();
      if (rect) {
        setElementSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    const observer = createSafeResizeObserver(updateSize);
    if (popoverRef.current) {
      observer.observe(popoverRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Эффект для ResizeObserver (изменения ширины/высоты контента popover)
  useLayoutEffect(() => {
    if (!contentRef.current || !isOpen) return;
    const observer = createSafeResizeObserver(() => {
      updateOffset();
    });
    observer.observe(contentRef.current);
    updateOffset();
    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Drag logic
  const { handleMouseDown, wasDragged, touchHandlers } = useDrag(
    [position, setPosition],
    popoverRef,
    dragBoundary,
    onPositionChange,
    updatePlacement
  );

  // Toggle handler
  const handleToggle = useCallback(
    (newState: boolean, event: React.SyntheticEvent | Event) => {
      if (externalOpened === undefined) {
        setInternalOpen(newState);
      }
      onToggle?.(newState, event);
    },
    [externalOpened, onToggle]
  );

  // Click handler
  const handleTargetClick = useCallback(
    (e: React.MouseEvent) => {
      if (draggable && wasDragged && ignoreToggleOnDrag) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      handleToggle(!isOpen, e);
    },
    [draggable, wasDragged, isOpen, handleToggle, ignoreToggleOnDrag]
  );

  // Popover styles
  const popoverStyle = useMemo(
    () => ({
      position: 'fixed' as const,
      left: `${position.x}px`,
      top: `${position.y}px`,
      zIndex: 9999,
      transform: 'none'
    }),
    [position]
  );

  // ---------- Resizable ----------
  const computedResizable = useMemo<
    AiAgentPopoverResizableConfig | undefined
  >(() => {
    if (!resizable) return undefined;

    const corner = getResizableCorner(currentPlacement);
    const allCorners: AiAgentPopoverCustomPlacement[] = [
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right'
    ];

    const iconStyle: React.CSSProperties = {};
    if (corner.includes('left')) iconStyle.transform = 'scaleX(-1)';
    if (corner.includes('top'))
      iconStyle.transform = iconStyle.transform
        ? 'scale(-1, -1)'
        : 'scaleY(-1)';

    const resizeIcon = (
      <IconResizeCorneredFill color={textTertiary} style={iconStyle} />
    );

    const defaultConfig: AiAgentPopoverResizableConfig = {
      icons: {
        topLeft: corner === 'top-left' ? resizeIcon : null,
        topRight: corner === 'top-right' ? resizeIcon : null,
        bottomLeft: corner === 'bottom-left' ? resizeIcon : null,
        bottomRight: corner === 'bottom-right' ? resizeIcon : null
      },
      hiddenIcons: allCorners.filter((c) => c !== corner),
      minHeight: 135,
      minWidth: 235
    };

    if (typeof resizable === 'function') {
      // resizable — функция, вызываем и мержим с дефолтами
      const userConfig = resizable(currentPlacement);
      return {
        ...defaultConfig,
        ...userConfig,
        icons: { ...defaultConfig.icons, ...userConfig?.icons },
        hiddenIcons: userConfig?.hiddenIcons ?? defaultConfig.hiddenIcons
      };
    }

    // resizable === true, используем дефолтный конфиг
    return defaultConfig;
  }, [resizable, currentPlacement]);

  return (
    <div ref={popoverRef} style={popoverStyle} {...touchHandlers}>
      <AiAgentPopoverStyled
        opened={isOpen}
        onToggle={handleToggle}
        role="presentation"
        target={
          <MagicButtonStyled
            size="s"
            className={cls.popoverIconTrigger}
            onMouseDown={draggable ? handleMouseDown : undefined}
            onClick={handleTargetClick}
            style={{ cursor: 'pointer' }}
            {...targetDataAttributes}
          >
            <IconMagic size="m" />
          </MagicButtonStyled>
        }
        offset={computedOffset}
        placement={normalizePlacement(placementRef.current)}
        trigger={trigger}
        hasArrow
        closeOnOverlayClick
        closeOnEsc
        isFocusTrapped
        animated
        view="default"
        resizable={computedResizable}
        onResizeStart={onResizeStart}
        onResizeEnd={onResizeEnd}
        $draggable={draggable}
        $position={
          typeof defaultPosition === 'string' ? defaultPosition : undefined
        }
        {...rest}
      >
        <div
          ref={contentRef}
          className={`${cls.popoverContentContainer} ${
            contentContainerClassNames ?? ''
          }`}
        >
          {children}
        </div>
      </AiAgentPopoverStyled>
    </div>
  );
};
