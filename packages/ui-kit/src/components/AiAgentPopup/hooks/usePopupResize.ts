import { useEffect, useMemo, useRef, useState } from 'react';

import type {
  AiAgentPopupDragBoundary,
  AiAgentPopupPosition,
  AiAgentPopupResizableConfig,
  AiAgentPopupResizeCorner,
  AiAgentPopupSize,
} from '../AiAgentPopup.types';
import {
  buildResizableConfig,
  getCornerForSector,
  getViewportSector,
} from '../AiAgentPopup.utils';

type UsePopupResizeParams = {
  resizable: boolean | Partial<AiAgentPopupResizableConfig> | undefined;
  defaultSize?: AiAgentPopupSize;
  /** Размер, прочитанный из хранилища (localStorage) */
  savedSize?: AiAgentPopupSize;
  dragBoundary?: AiAgentPopupDragBoundary;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onSizeChange?: (size: AiAgentPopupSize) => void;
  /** Текущая позиция окна: от неё зависит активный угол ресайза */
  popupPosition: AiAgentPopupPosition | null;
  setPopupPosition: (position: AiAgentPopupPosition) => void;
};

/**
 * Размер окна и настройка ресайза.
 *
 * Хук собирает конфигурацию для атомарного Popup и добавляет поверх неё:
 * - активный угол ресайза подстраивается под положение окна на экране
 *   (шесть секторов): иконка всегда смотрит туда, где есть место расти;
 * - в начале каждого ресайза пересчитывается предельный размер, чтобы окно
 *   нельзя было растянуть за край экрана с учётом dragBoundary;
 * - при ресайзе за верхние и левые углы окно растёт вверх и влево:
 *   противоположный угол фиксируется, а позиция окна на каждый шаг
 *   пересчитывается от него (без этого окно с якорем в левом верхнем углу
 *   росло бы вниз при движении курсора вверх);
 * - в конце ресайза новый размер запоминается. При следующем открытии окно
 *   создаётся уже с ним (атомарный Popup применяет defaultSize при монтаже).
 */
export const usePopupResize = ({
  resizable,
  defaultSize,
  savedSize,
  dragBoundary,
  containerRef,
  onSizeChange,
  popupPosition,
  setPopupPosition,
}: UsePopupResizeParams) => {
  const [popupSize, setPopupSize] = useState<AiAgentPopupSize | undefined>(
    () => savedSize ?? defaultSize,
  );

  // Предельные размеры до краёв экрана, считаются на старте каждого ресайза
  const [viewportLimits, setViewportLimits] = useState<{
    maxWidth?: number;
    maxHeight?: number;
  }>({});

  // Пока идёт ресайз, угол заморожен: компенсация позиции меняет сектор
  // окна, и без заморозки угол мог бы переключиться посреди ресайза
  const [frozenCorner, setFrozenCorner] =
    useState<AiAgentPopupResizeCorner | null>(null);

  // Угол по сектору экрана: пересчитывается при каждом сдвиге окна
  const sectorCorner = useMemo(() => {
    if (!popupPosition) return 'bottom-right' as const;
    const element = containerRef.current;
    const size = {
      width: element?.offsetWidth ?? 0,
      height: element?.offsetHeight ?? 0,
    };
    return getCornerForSector(
      getViewportSector(popupPosition, size, dragBoundary),
    );
  }, [popupPosition, dragBoundary, containerRef]);

  const activeCorner = frozenCorner ?? sectorCorner;

  // Зафиксированные на старте ресайза края окна: при росте вверх или влево
  // позиция пересчитывается так, чтобы противоположный угол стоял на месте
  const anchorRef = useRef<{
    left: number;
    top: number;
    right: number;
    bottom: number;
    corner: AiAgentPopupResizeCorner;
  } | null>(null);
  const anchorObserverRef = useRef<ResizeObserver | null>(null);
  useEffect(
    () => () => {
      anchorObserverRef.current?.disconnect();
    },
    [],
  );

  const baseConfig = useMemo(
    () => buildResizableConfig(resizable, activeCorner),
    [resizable, activeCorner],
  );

  const resizableConfig = useMemo(() => {
    if (!baseConfig) return undefined;

    const handleResizeStart: NonNullable<typeof baseConfig.onResizeStart> = (
      resizableContainer,
    ) => {
      const element = containerRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const corner = activeCorner;
        setFrozenCorner(corner);

        // Предел роста в сторону, куда тянется активный угол
        const { top = 0, right = 0, bottom = 0, left = 0 } = dragBoundary ?? {};
        const availableWidth = corner.includes('left')
          ? rect.right - left
          : window.innerWidth - rect.left - right;
        const availableHeight = corner.includes('top')
          ? rect.bottom - top
          : window.innerHeight - rect.top - bottom;

        setViewportLimits({
          maxWidth: baseConfig.maxWidth
            ? Math.min(baseConfig.maxWidth, availableWidth)
            : availableWidth,
          maxHeight: baseConfig.maxHeight
            ? Math.min(baseConfig.maxHeight, availableHeight)
            : availableHeight,
        });

        // Рост вверх или влево: противоположный край окна должен стоять
        // на месте, поэтому позицию пересчитываем от зафиксированных краёв.
        // Наблюдатель даёт живое обновление по ходу ресайза, а финальный
        // пересчёт делает handleResizeEnd: наблюдатель срабатывает
        // с задержкой на кадр и короткий ресайз может целиком пропустить
        if (corner.includes('top') || corner.includes('left')) {
          const anchor = {
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            corner,
          };
          anchorRef.current = anchor;
          anchorObserverRef.current = new ResizeObserver(() => {
            const node = containerRef.current;
            if (!node) return;
            setPopupPosition({
              x: corner.includes('left')
                ? anchor.right - node.offsetWidth
                : anchor.left,
              y: corner.includes('top')
                ? anchor.bottom - node.offsetHeight
                : anchor.top,
            });
          });
          anchorObserverRef.current.observe(element);
        }
      }
      baseConfig.onResizeStart?.(resizableContainer);
    };

    const handleResizeEnd: NonNullable<typeof baseConfig.onResizeEnd> = (
      resizableContainer,
    ) => {
      anchorObserverRef.current?.disconnect();
      anchorObserverRef.current = null;
      setFrozenCorner(null);

      const element =
        resizableContainer?.current?.resizable ?? containerRef.current;
      if (element) {
        const nextSize = {
          width: element.offsetWidth,
          height: element.offsetHeight,
        };

        // Финальный пересчёт позиции от зафиксированных краёв
        const anchor = anchorRef.current;
        if (anchor) {
          setPopupPosition({
            x: anchor.corner.includes('left')
              ? anchor.right - nextSize.width
              : anchor.left,
            y: anchor.corner.includes('top')
              ? anchor.bottom - nextSize.height
              : anchor.top,
          });
        }

        setPopupSize(nextSize);
        onSizeChange?.(nextSize);
      }
      anchorRef.current = null;
      baseConfig.onResizeEnd?.(resizableContainer);
    };

    return {
      ...baseConfig,
      defaultSize: popupSize ?? baseConfig.defaultSize,
      maxWidth: viewportLimits.maxWidth ?? baseConfig.maxWidth,
      maxHeight: viewportLimits.maxHeight ?? baseConfig.maxHeight,
      onResizeStart: handleResizeStart,
      onResizeEnd: handleResizeEnd,
    };
  }, [
    baseConfig,
    activeCorner,
    dragBoundary,
    popupSize,
    viewportLimits,
    onSizeChange,
    containerRef,
    setPopupPosition,
  ]);

  return {
    /** Текущий размер окна (после ресайза), undefined если не менялся */
    popupSize,
    /** Готовая конфигурация resizable для атомарного Popup */
    resizableConfig,
  };
};
