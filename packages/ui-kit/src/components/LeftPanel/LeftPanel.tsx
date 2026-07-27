import { useBreakpoint } from '@ui-kit/utils';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { LeftPanelToggleButton } from './components';
import { BREAKPOINT_COLLAPSED_WIDTH, MAX_WIDTH } from './constants';
import { useResize } from './hooks';
import type { LeftPanelProps } from './LeftPanel.types';
import {
  PanelCollapsedBody,
  PanelCollapsedContent,
  PanelContainer,
  PanelContent,
  PanelCrossfade,
  PanelSeparator
} from './styled';
import {
  getLeftPanelMinWidth,
  getLeftPanelSlotSizes,
  renderLeftPanelSlot
} from './utils';

export const LeftPanel = ({
  widthState,
  minWidth: minWidthProp,
  maxWidth = MAX_WIDTH,
  disableMediaAdaptive = false,
  collapseState,
  containerProps,
  contentProps,
  collapsedContentProps,
  expandedContent,
  collapsedContent,
  collapsedFooterContent,
  showToggleButton = true,
  showResizeable = true,
  onResize,
  onToggleCollapse
}: LeftPanelProps) => {
  const { down } = useBreakpoint();
  const isAdaptive1280 = !disableMediaAdaptive && down('xl');
  const minWidth = getLeftPanelMinWidth(isAdaptive1280, minWidthProp);
  const slotSizes = useMemo(
    () => getLeftPanelSlotSizes(isAdaptive1280),
    [isAdaptive1280]
  );
  const renderedExpandedContent = useMemo(
    () => renderLeftPanelSlot(expandedContent, slotSizes),
    [expandedContent, slotSizes]
  );
  const renderedCollapsedContent = useMemo(
    () => renderLeftPanelSlot(collapsedContent, slotSizes),
    [collapsedContent, slotSizes]
  );
  const renderedCollapsedFooterContent = useMemo(
    () => renderLeftPanelSlot(collapsedFooterContent, slotSizes),
    [collapsedFooterContent, slotSizes]
  );
  const innerState = useState(false);
  const [isCollapsed, setIsCollapsed] = collapseState ?? innerState;
  const innerWidthState = useState<number | undefined>(
    isCollapsed ? Number(minWidth) : Number(maxWidth)
  );
  const [width, setWidth] = widthState ?? innerWidthState;
  const panelRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLElement | null>(null);
  const isResizingRef = useRef(false);
  // Реактивный флаг ресайза для стилей: во время перетаскивания отключаем
  // transition ширины, чтобы панель следовала за курсором без инерции.
  const [isResizing, setIsResizing] = useState(false);

  const { startResizing } = useResize({
    setWidth,
    isResizingRef,
    setIsResizing,
    panelRef,
    minWidth,
    maxWidth,
    parentRef,
    isCollapsed,
    onResize
  });

  useEffect(() => {
    // Эффект следит за изменением ширины панели
    // Если ширина становится меньше порогового значения — панель автоматически сворачивается
    // Если больше — разворачивается обратно
    if (width !== undefined) {
      const shouldCollapse = width < BREAKPOINT_COLLAPSED_WIDTH; // порог, при котором считаем панель свернутой
      // Избегаем лишних setState, если состояние не изменилось
      if (shouldCollapse !== isCollapsed) {
        setIsCollapsed(shouldCollapse);
        // Уведомляем внешний код, если передан callback.
        // Во время активного ресайза колбэк НЕ дёргаем: потребитель обычно
        // сбрасывает в нём ширину в min/max (см. onToggleCollapse в сторях),
        // из-за чего панель на кадр прыгает к max и возвращается к курсору.
        // Само переключение collapsed оставляем живым — контент меняется
        // ровно на пороге; наружу состояние уже синхронизировано setIsCollapsed.
        if (onToggleCollapse && !isResizingRef.current) {
          onToggleCollapse(shouldCollapse);
        }
      }
    }
  }, [width, isCollapsed, onToggleCollapse, setIsCollapsed]);

  useEffect(() => {
    // Во время активного ресайза ширину не трогаем — иначе эффект дерётся
    // с перетаскиванием и создаёт «мёртвую зону» между minWidth и порогом
    // схлопывания (панель дёргается / не растягивается). Схлопывание в minWidth
    // в этом диапазоне отрабатывает «магнит» в stopResizing на отпускании мыши.
    const shouldSnap =
      !isResizingRef.current && isCollapsed && width !== minWidth;

    if (shouldSnap) {
      setWidth(minWidth);
    }
  }, [isCollapsed, minWidth, setWidth, width]);

  const togglePanel = useCallback(() => {
    // Ручное переключение состояния панели (по кнопке)
    setIsCollapsed((prev) => {
      const next = !prev;
      // Сообщаем наружу о смене состояния
      if (onToggleCollapse) {
        onToggleCollapse(next);
      }
      // При сворачивании ставим минимальную ширину,
      // при разворачивании — максимальную
      if (next) {
        setWidth(minWidth);
      } else {
        setWidth(maxWidth);
      }
      return next;
    });
  }, [onToggleCollapse, setIsCollapsed, setWidth, minWidth, maxWidth]);

  return (
    <PanelContainer
      ref={panelRef}
      collapsed={isCollapsed}
      maxWidth={maxWidth}
      minWidth={minWidth}
      width={width}
      $resizing={isResizing}
      showResizeable={showResizeable}
      {...containerProps}
    >
      <PanelCrossfade>
        {/* Оба слоя всегда в DOM и наложены (grid-стек) — кросс-фейд по opacity */}
        <PanelContent
          $active={!isCollapsed}
          aria-hidden={isCollapsed}
          {...contentProps}
        >
          {showToggleButton && (
            <LeftPanelToggleButton
              onClick={togglePanel}
              collapsed={isCollapsed}
              isAdaptive1280={isAdaptive1280}
              isAbsolute
            />
          )}
          {renderedExpandedContent}
        </PanelContent>
        <PanelCollapsedContent
          $active={isCollapsed}
          aria-hidden={!isCollapsed}
          $isAdaptive1280={isAdaptive1280}
          showResizeable={showResizeable}
          {...collapsedContentProps}
        >
          <PanelCollapsedBody>
            {showToggleButton && (
              <LeftPanelToggleButton
                onClick={togglePanel}
                collapsed={isCollapsed}
                isAdaptive1280={isAdaptive1280}
              />
            )}
            {renderedCollapsedContent}
          </PanelCollapsedBody>
          {renderedCollapsedFooterContent}
        </PanelCollapsedContent>
      </PanelCrossfade>
      {showResizeable && (
        <PanelSeparator
          onMouseDown={(e) => {
            e.preventDefault();
            if (panelRef.current?.parentElement) {
              parentRef.current = panelRef.current.parentElement;
            }
            startResizing();
          }}
        />
      )}
    </PanelContainer>
  );
};

LeftPanel.LeftPanelToggleButton = LeftPanelToggleButton;
