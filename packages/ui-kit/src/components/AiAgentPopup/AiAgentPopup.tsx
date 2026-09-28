import type { CSSProperties } from 'react';
import { forwardRef, useEffect, useMemo } from 'react';

import { DEFAULT_TARGET_GAP } from './AiAgentPopup.constants';
import { StyledPopup } from './AiAgentPopup.styled';
import type { AiAgentPopupProps } from './AiAgentPopup.types';
import { AiAgentSurface } from './AiAgentSurface';
import { useDrag } from './hooks/useDrag';
import { usePopupPosition } from './hooks/usePopupPosition';
import { usePopupResize } from './hooks/usePopupResize';
import { useStateStorage } from './hooks/useStateStorage';

/**
 * Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
 * перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
 * на стороне потребителя.
 *
 * Позиция окна определяется в порядке приоритета: сохранённая в localStorage
 * (useStorage), затем defaultPosition, затем справа от targetRef, иначе
 * отступ от левого верхнего угла экрана.
 *
 * Тема (светлая / тёмная) подхватывается автоматически: обводка через
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
      glow = false,
      frame = 'document',
      style: externalStyle,
      className,
      ...rest
    } = props;

    // Сохранённые позиция и размер из localStorage (читаются один раз)
    const { savedState, saveState } = useStateStorage(useStorage, dragBoundary);

    // Позиция окна: вычисление при открытии, зажим в границах экрана,
    // возврат в видимую область при изменении размеров окна браузера
    const {
      popupPosition,
      setPopupPosition,
      positionForStorage,
      containerRef,
      setContainerRef,
    } = usePopupPosition({
      opened,
      targetRef,
      targetGap,
      defaultPosition,
      savedPosition: savedState?.position,
      externalPositionState,
      dragBoundary,
      frame,
    });

    // Перетаскивание окна за контейнер
    const { dragActive, dragHandlers } = useDrag({
      elementRef: containerRef,
      setPosition: setPopupPosition,
      dragBoundary,
      onPositionChange,
      ignoreSelector: dragIgnoreSelector,
      frame,
    });

    // Размер окна и конфигурация ресайза: активный угол подстраивается под
    // положение окна на экране, рост ограничен краями экрана
    const { popupSize, resizableConfig } = usePopupResize({
      resizable,
      defaultSize,
      savedSize: savedState?.size,
      dragBoundary,
      containerRef,
      onSizeChange,
      popupPosition,
      setPopupPosition,
      frame,
    });

    // Запись позиции и размера в localStorage при их изменении
    useEffect(() => {
      if (!useStorage) return;
      saveState({ position: positionForStorage, size: popupSize });
    }, [useStorage, positionForStorage, popupSize, saveState]);

    // Позиция окна задаётся напрямую через left/top: атомарному Popup
    // выставлен placement="top-left", то есть нулевая точка экрана
    const popupStyle = useMemo<CSSProperties>(
      () => ({
        left: popupPosition ? `${popupPosition.x}px` : 0,
        top: popupPosition ? `${popupPosition.y}px` : 0,
        // Пока позиция не вычислена, прячем окно, чтобы оно не мигало в углу
        ...(popupPosition ? null : { visibility: 'hidden' as const }),
        ...externalStyle,
      }),
      [popupPosition, externalStyle],
    );

    return (
      <StyledPopup
        {...rest}
        ref={ref}
        opened={opened}
        frame={frame}
        placement="top-left"
        resizable={resizableConfig}
        style={popupStyle}
        className={
          dragActive
            ? `${className ?? ''} ai-agent-popup-dragging`.trim()
            : className
        }
      >
        <AiAgentSurface
          variant="floating"
          glow={glow}
          ref={setContainerRef}
          {...(draggable ? dragHandlers : null)}
        >
          {children}
        </AiAgentSurface>
      </StyledPopup>
    );
  },
);

AiAgentPopup.displayName = 'AiAgentPopup';
