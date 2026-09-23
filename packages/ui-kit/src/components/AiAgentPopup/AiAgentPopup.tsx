import { shadowGradientDark, shadowGradientLight } from '@ui-kit/tokens';
import type { CSSProperties } from 'react';
import { forwardRef, useEffect, useMemo } from 'react';

import { DEFAULT_TARGET_GAP } from './AiAgentPopup.constants';
import {
  StyledContainer,
  StyledContent,
  StyledPopup,
} from './AiAgentPopup.styled';
import type { AiAgentPopupProps } from './AiAgentPopup.types';
import { useDrag } from './hooks/useDrag';
import { useIsDarkTheme } from './hooks/useIsDarkTheme';
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
      style: externalStyle,
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
    });

    // Перетаскивание окна за контейнер
    const { dragActive, dragHandlers } = useDrag({
      elementRef: containerRef,
      setPosition: setPopupPosition,
      dragBoundary,
      onPositionChange,
      ignoreSelector: dragIgnoreSelector,
    });

    // Размер окна и конфигурация ресайза с ограничением краями экрана
    const { popupSize, resizableConfig } = usePopupResize({
      resizable,
      defaultSize,
      savedSize: savedState?.size,
      dragBoundary,
      containerRef,
      onSizeChange,
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

    // Обводку и фон тема переключает сама через CSS-переменные, а тени
    // в атомарке заведены двумя отдельными токенами (light и dark с разными
    // значениями в макетах), поэтому тёмную тень выбираем по активной теме
    const isDarkTheme = useIsDarkTheme();
    const shadow = isDarkTheme ? shadowGradientDark : shadowGradientLight;

    return (
      <StyledPopup
        {...rest}
        ref={ref}
        opened={opened}
        placement="top-left"
        resizable={resizableConfig}
        style={popupStyle}
      >
        <StyledContainer
          ref={setContainerRef}
          $shadow={shadow}
          $draggable={draggable}
          $dragActive={dragActive}
          {...(draggable ? dragHandlers : null)}
        >
          <StyledContent>{children}</StyledContent>
        </StyledContainer>
      </StyledPopup>
    );
  },
);

AiAgentPopup.displayName = 'AiAgentPopup';
