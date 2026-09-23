import { useMemo, useState } from 'react';

import type {
  AiAgentPopupDragBoundary,
  AiAgentPopupResizableConfig,
  AiAgentPopupSize,
} from '../AiAgentPopup.types';
import { buildResizableConfig } from '../AiAgentPopup.utils';

type UsePopupResizeParams = {
  resizable: boolean | Partial<AiAgentPopupResizableConfig> | undefined;
  defaultSize?: AiAgentPopupSize;
  /** Размер, прочитанный из хранилища (localStorage) */
  savedSize?: AiAgentPopupSize;
  dragBoundary?: AiAgentPopupDragBoundary;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onSizeChange?: (size: AiAgentPopupSize) => void;
};

/**
 * Размер окна и настройка ресайза.
 *
 * Хук собирает конфигурацию для атомарного Popup (дефолт: ресайз за правый
 * нижний угол с нашей иконкой) и добавляет два поведения поверх неё:
 * - в начале каждого ресайза пересчитывает предельный размер, чтобы окно
 *   нельзя было растянуть за край экрана с учётом dragBoundary;
 * - в конце ресайза запоминает новый размер. При следующем открытии окно
 *   создаётся уже с ним (атомарный Popup применяет defaultSize при монтаже).
 */
export const usePopupResize = ({
  resizable,
  defaultSize,
  savedSize,
  dragBoundary,
  containerRef,
  onSizeChange,
}: UsePopupResizeParams) => {
  const [popupSize, setPopupSize] = useState<AiAgentPopupSize | undefined>(
    () => savedSize ?? defaultSize,
  );

  // Предельные размеры до краёв экрана, считаются на старте каждого ресайза
  const [viewportLimits, setViewportLimits] = useState<{
    maxWidth?: number;
    maxHeight?: number;
  }>({});

  // Конфигурация из пропса, дополненная дефолтами (иконка, углы, минимумы)
  const baseConfig = useMemo(
    () => buildResizableConfig(resizable),
    [resizable],
  );

  const resizableConfig = useMemo(() => {
    if (!baseConfig) return undefined;

    const handleResizeStart: NonNullable<typeof baseConfig.onResizeStart> = (
      resizableContainer,
    ) => {
      const element = containerRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const { right = 0, bottom = 0 } = dragBoundary ?? {};
        const availableWidth = window.innerWidth - rect.left - right;
        const availableHeight = window.innerHeight - rect.top - bottom;

        setViewportLimits({
          maxWidth: baseConfig.maxWidth
            ? Math.min(baseConfig.maxWidth, availableWidth)
            : availableWidth,
          maxHeight: baseConfig.maxHeight
            ? Math.min(baseConfig.maxHeight, availableHeight)
            : availableHeight,
        });
      }
      baseConfig.onResizeStart?.(resizableContainer);
    };

    const handleResizeEnd: NonNullable<typeof baseConfig.onResizeEnd> = (
      resizableContainer,
    ) => {
      const element =
        resizableContainer?.current?.resizable ?? containerRef.current;
      if (element) {
        const nextSize = {
          width: element.offsetWidth,
          height: element.offsetHeight,
        };
        setPopupSize(nextSize);
        onSizeChange?.(nextSize);
      }
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
    dragBoundary,
    popupSize,
    viewportLimits,
    onSizeChange,
    containerRef,
  ]);

  return {
    /** Текущий размер окна (после ресайза), undefined если не менялся */
    popupSize,
    /** Готовая конфигурация resizable для атомарного Popup */
    resizableConfig,
  };
};
