import { debounce } from '@ui-kit/utils';
import type { CSSProperties } from 'react';
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

import {
  DEFAULT_POPUP_SIZE,
  DEFAULT_TARGET_GAP,
  DRAGGING_CLASS,
  GLOW_BORDER,
  STORAGE_SAVE_DELAY,
} from './AiAgentPopup.constants';
import { StyledPopup } from './AiAgentPopup.styled';
import type { AiAgentPopupProps } from './AiAgentPopup.types';
import { inflateDragBoundary } from './AiAgentPopup.utils';
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
      leftPanel,
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
      defaultSize = DEFAULT_POPUP_SIZE,
      onSizeChange,
      frame = 'document',
      style: externalStyle,
      className,
      ...rest
    } = props;

    // Сохранённые позиция и размер из localStorage (читаются один раз)
    const { savedState, saveState } = useStateStorage(useStorage);

    // Светящаяся рамка нарисована снаружи контейнера и в его размеры
    // не входит. Чтобы она не вылезала за границы, все расчёты позиции
    // и ресайза используют границы, раздутые на толщину рамки
    const effectiveBoundary = useMemo(
      () => inflateDragBoundary(dragBoundary, GLOW_BORDER),
      [dragBoundary],
    );

    // Управление открытым разделом левой панели поднято сюда: от того,
    // открыт ли раздел, зависит минимальная ширина окна при ресайзе.
    // Если потребитель задал activeKey, режим управляемый; иначе ключ
    // хранится здесь (defaultActiveKey как начальное значение)
    const consumerActiveKey = leftPanel?.activeKey;
    const isSectionControlled = consumerActiveKey !== undefined;
    const [internalSectionKey, setInternalSectionKey] = useState<string | null>(
      leftPanel?.defaultActiveKey ?? null,
    );
    const sectionKey = isSectionControlled
      ? consumerActiveKey
      : internalSectionKey;
    const isSectionOpen = Boolean(
      leftPanel &&
        sectionKey != null &&
        leftPanel.items.some((item) => item.key === sectionKey),
    );

    const handleSectionChange = useCallback(
      (key: string | null) => {
        if (!isSectionControlled) {
          setInternalSectionKey(key);
        }
        leftPanel?.onActiveKeyChange?.(key);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isSectionControlled, leftPanel?.onActiveKeyChange],
    );

    // Левую панель отдаём в оболочку как управляемую: активный раздел
    // и его смену держит окно, чтобы отслеживать открытие для размеров
    const effectiveLeftPanel = useMemo(
      () =>
        leftPanel
          ? {
              ...leftPanel,
              activeKey: sectionKey,
              onActiveKeyChange: handleSectionChange,
            }
          : undefined,
      [leftPanel, sectionKey, handleSectionChange],
    );

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
      dragBoundary: effectiveBoundary,
      frame,
    });

    // Перетаскивание окна за контейнер
    const { dragActive, dragHandlers } = useDrag({
      elementRef: containerRef,
      setPosition: setPopupPosition,
      dragBoundary: effectiveBoundary,
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
      dragBoundary: effectiveBoundary,
      containerRef,
      onSizeChange,
      popupPosition,
      setPopupPosition,
      frame,
      isSectionOpen,
    });

    // Запись позиции и размера в localStorage при их изменении. С паузой:
    // во время перетаскивания позиция меняется на каждое движение мыши,
    // и синхронная запись на каждый шаг подтормаживала бы сам драг
    const saveStateDebounced = useMemo(
      () => debounce(saveState, STORAGE_SAVE_DELAY),
      [saveState],
    );
    useEffect(() => {
      if (!useStorage) return;
      saveStateDebounced({ position: positionForStorage, size: popupSize });
    }, [useStorage, positionForStorage, popupSize, saveStateDebounced]);

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
          dragActive ? `${className ?? ''} ${DRAGGING_CLASS}`.trim() : className
        }
      >
        <AiAgentSurface
          variant="floating"
          leftPanel={effectiveLeftPanel}
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
