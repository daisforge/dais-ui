import { shadowGradientDark, shadowGradientLight } from '@ui-kit/tokens';
import { throttleWithLastCall, useActiveTheme } from '@ui-kit/utils';
import type { CSSProperties } from 'react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  DEFAULT_TARGET_GAP,
  NO_DRAG_SELECTOR,
  RESIZE_THROTTLE_DELAY,
} from './AiAgentPopup.constants';
import { StyledContainer, StyledPopup } from './AiAgentPopup.styled';
import type {
  AiAgentPopupPosition,
  AiAgentPopupProps,
  AiAgentPopupSize,
} from './AiAgentPopup.types';
import {
  buildResizableConfig,
  getFallbackPosition,
  getPositionFromTarget,
  validatePosition,
} from './AiAgentPopup.utils';
import { useDrag } from './hooks/useDrag';
import { useStateStorage } from './hooks/useStateStorage';

/**
 * Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
 * перетаскивать и ресайзить в пределах вьюпорта. Наполнение окна полностью
 * на стороне потребителя.
 *
 * Позиция окна определяется в порядке приоритета: сохранённая в localStorage
 * (useStorage), затем defaultPosition, затем справа от targetRef, иначе
 * отступ от левого верхнего угла экрана.
 *
 * Тема (light / dark) подхватывается автоматически: обводка через
 * CSS-переменную токена, тень через подписку на data-theme.
 */
export const AiAgentPopup = forwardRef<HTMLDivElement, AiAgentPopupProps>(
  (props, ref) => {
    const {
      children,
      opened,
      targetRef,
      targetGap = DEFAULT_TARGET_GAP,
      defaultPosition,
      positionState: externalPositionState,
      onPositionChange,
      draggable = true,
      dragBoundary,
      dragIgnoreSelector,
      useStorage = false,
      resizable = true,
      defaultSize,
      onSizeChange,
      style: externalStyle,
      ...rest
    } = props;

    // Атомарный Popup монтирует содержимое отложенно, поэтому контейнер
    // отслеживаем callback-ref-ом: стейт будит эффект резолва позиции
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [containerElement, setContainerElement] =
      useState<HTMLDivElement | null>(null);
    const setContainerRef = useCallback((node: HTMLDivElement | null) => {
      containerRef.current = node;
      setContainerElement(node);
    }, []);
    const activeTheme = useActiveTheme();

    const { savedState, saveState } = useStateStorage(useStorage, dragBoundary);

    const [size, setSize] = useState<AiAgentPopupSize | undefined>(
      () => savedState?.size ?? defaultSize,
    );

    const [internalPosition, setInternalPosition] =
      useState<AiAgentPopupPosition | null>(
        () => savedState?.position ?? defaultPosition ?? null,
      );
    const isExternalPosition = Boolean(externalPositionState);
    const position = externalPositionState
      ? externalPositionState[0]
      : internalPosition;

    const setPosition = useCallback(
      (next: AiAgentPopupPosition) => {
        if (externalPositionState) {
          externalPositionState[1](next);
        } else {
          setInternalPosition(next);
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [externalPositionState?.[1]],
    );

    // При открытии вычисляем позицию (если её ещё нет) и зажимаем в границы
    // вьюпорта уже с известным размером отрендеренного окна
    useLayoutEffect(() => {
      if (!opened) return;
      const element = containerElement;
      if (!element) return;

      const elementSize = {
        width: element.offsetWidth,
        height: element.offsetHeight,
      };
      const rawPosition =
        position ??
        (targetRef?.current
          ? getPositionFromTarget(targetRef.current, targetGap)
          : getFallbackPosition());
      const validated = validatePosition(
        rawPosition,
        elementSize,
        dragBoundary,
      );

      if (
        !position ||
        validated.x !== position.x ||
        validated.y !== position.y
      ) {
        setPosition(validated);
      }
    }, [
      opened,
      containerElement,
      position,
      targetRef,
      targetGap,
      dragBoundary,
      setPosition,
    ]);

    const positionRef = useRef(position);
    useEffect(() => {
      positionRef.current = position;
    }, [position]);

    // Если вьюпорт уменьшился, возвращаем окно в видимую область
    useEffect(() => {
      if (!opened) return undefined;

      const handleWindowResize = throttleWithLastCall(() => {
        const element = containerRef.current;
        const { current } = positionRef;
        if (!element || !current) return;

        const validated = validatePosition(
          current,
          { width: element.offsetWidth, height: element.offsetHeight },
          dragBoundary,
        );
        if (validated.x !== current.x || validated.y !== current.y) {
          setPosition(validated);
        }
      }, RESIZE_THROTTLE_DELAY);

      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
        handleWindowResize.cancel();
      };
    }, [opened, dragBoundary, setPosition]);

    const { dragActive, handleMouseDown, touchHandlers } = useDrag({
      elementRef: containerRef,
      setPosition,
      dragBoundary,
      onPositionChange,
    });

    const noDragSelector = dragIgnoreSelector
      ? `${NO_DRAG_SELECTOR}, ${dragIgnoreSelector}`
      : NO_DRAG_SELECTOR;

    const handleContainerMouseDown = useCallback(
      (event: React.MouseEvent) => {
        if ((event.target as HTMLElement).closest(noDragSelector)) return;
        handleMouseDown(event);
      },
      [noDragSelector, handleMouseDown],
    );

    const handleContainerTouchStart = useCallback(
      (event: React.TouchEvent) => {
        if ((event.target as HTMLElement).closest(noDragSelector)) return;
        touchHandlers.onTouchStart(event);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [noDragSelector, touchHandlers.onTouchStart],
    );

    const [resizeLimits, setResizeLimits] = useState<{
      maxWidth?: number;
      maxHeight?: number;
    }>({});

    const baseResizableConfig = useMemo(
      () => buildResizableConfig(resizable),
      [resizable],
    );

    const computedResizable = useMemo(() => {
      if (!baseResizableConfig) return undefined;

      const handleResizeStart: NonNullable<
        typeof baseResizableConfig.onResizeStart
      > = (resizableContainer) => {
        const element = containerRef.current;
        if (element) {
          // Ограничиваем ресайз краями вьюпорта с учётом dragBoundary
          const rect = element.getBoundingClientRect();
          const { right = 0, bottom = 0 } = dragBoundary ?? {};
          const availableWidth = window.innerWidth - rect.left - right;
          const availableHeight = window.innerHeight - rect.top - bottom;

          setResizeLimits({
            maxWidth: baseResizableConfig.maxWidth
              ? Math.min(baseResizableConfig.maxWidth, availableWidth)
              : availableWidth,
            maxHeight: baseResizableConfig.maxHeight
              ? Math.min(baseResizableConfig.maxHeight, availableHeight)
              : availableHeight,
          });
        }
        baseResizableConfig.onResizeStart?.(resizableContainer);
      };

      const handleResizeEnd: NonNullable<
        typeof baseResizableConfig.onResizeEnd
      > = (resizableContainer) => {
        const element =
          resizableContainer?.current?.resizable ?? containerRef.current;
        if (element) {
          const nextSize = {
            width: element.offsetWidth,
            height: element.offsetHeight,
          };
          setSize(nextSize);
          onSizeChange?.(nextSize);
        }
        baseResizableConfig.onResizeEnd?.(resizableContainer);
      };

      return {
        ...baseResizableConfig,
        defaultSize: size ?? baseResizableConfig.defaultSize,
        maxWidth: resizeLimits.maxWidth ?? baseResizableConfig.maxWidth,
        maxHeight: resizeLimits.maxHeight ?? baseResizableConfig.maxHeight,
        onResizeStart: handleResizeStart,
        onResizeEnd: handleResizeEnd,
      };
    }, [baseResizableConfig, dragBoundary, size, resizeLimits, onSizeChange]);

    useEffect(() => {
      if (!useStorage) return;
      saveState({
        position: isExternalPosition
          ? undefined
          : internalPosition ?? undefined,
        size,
      });
    }, [useStorage, isExternalPosition, internalPosition, size, saveState]);

    const popupStyle = useMemo<CSSProperties>(
      () => ({
        left: position ? `${position.x}px` : 0,
        top: position ? `${position.y}px` : 0,
        // Пока позиция не вычислена, прячем окно, чтобы не мигало в углу
        ...(position ? null : { visibility: 'hidden' as const }),
        ...externalStyle,
      }),
      [position, externalStyle],
    );

    const shadow =
      activeTheme === 'dark' ? shadowGradientDark : shadowGradientLight;

    return (
      <StyledPopup
        {...rest}
        ref={ref}
        opened={opened}
        placement="top-left"
        resizable={computedResizable}
        style={popupStyle}
      >
        <StyledContainer
          ref={setContainerRef}
          $shadow={shadow}
          $draggable={draggable}
          $dragActive={dragActive}
          onMouseDown={draggable ? handleContainerMouseDown : undefined}
          onTouchStart={draggable ? handleContainerTouchStart : undefined}
          onTouchMove={draggable ? touchHandlers.onTouchMove : undefined}
          onTouchEnd={draggable ? touchHandlers.onTouchEnd : undefined}
        >
          {children}
        </StyledContainer>
      </StyledPopup>
    );
  },
);

AiAgentPopup.displayName = 'AiAgentPopup';
