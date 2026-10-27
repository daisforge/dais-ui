import type { FC, RefObject } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';

import { CanvasDropdown } from '../../feature-canvas-dropdown';
import { CanvasPopover } from '../../feature-canvas-popover';
import { useTablePopover } from '../../feature-popover-table/context';
import { tableClassNames } from '../../styles';
import {
  type CanvasPortalClickDetail,
  subscribeToCanvasPortalClick,
  subscribeToCanvasPortalReset,
} from '../../TableGlideInstance';
import type {
  TableConfigDropdown,
  TableConfigPopover,
} from '../../types/table-config.type';
import {
  type OpenCanvasOverlay,
  useHoverOverlayOpen,
} from '../hooks/useHoverOverlayOpen';
import {
  CANVAS_OVERLAY_CONTENT_KIND,
  type CanvasOverlayContentData,
  type CanvasOverlayDefaults,
  getOpenCanvasOverlay,
} from '../types';
import { clipAnchorRect, getOverlaySourceKey } from '../utils/anchor';
import { resolveCanvasOverlay } from '../utils/resolveCanvasOverlay';

export interface CanvasOverlayListenerProps {
  /** Контейнер таблицы: на нём слушаем клики и наведение на canvas-элементы. */
  containerRef: RefObject<HTMLElement | null>;
  /** Значения по умолчанию для Popover: tableConfig.popover. */
  config?: TableConfigPopover;
  /** Значения по умолчанию для Dropdown: tableConfig.dropdown. */
  dropdownConfig?: TableConfigDropdown;
  /**
   * Строки, которые рисует таблица. Если на месте строки, где открыт Popover,
   * оказалась другая (сортировка, новые данные), он закрывается.
   */
  rows?: readonly unknown[];
  /**
   * Ключ строки. С ним та же строка в новом объекте (данные пришли заново,
   * правка ячейки) Popover не закрывает. Без него строки сравниваются по ссылке.
   */
  rowKeyGetter?: (row: never) => unknown;
}

/** Та же ли строка: по ссылке, иначе по ключу. У служебных строк ключа может не быть. */
const isSameRow = (
  prev: unknown,
  next: unknown,
  rowKeyGetter: CanvasOverlayListenerProps['rowKeyGetter'],
) => {
  if (prev === next) return true;
  if (!rowKeyGetter || next === undefined) return false;
  try {
    return rowKeyGetter(prev as never) === rowKeyGetter(next as never);
  } catch {
    return false;
  }
};

/** Видимая на экране область таблицы: по ней обрезаем прямоугольник элемента. */
const getGridViewport = (container: HTMLElement | null) =>
  container
    ?.querySelector(`.${tableClassNames.tableAndTableScroller}`)
    ?.getBoundingClientRect() ?? null;

/**
 * Слушает клики и наведение на canvas-элементы с пропом popover или dropdown
 * и открывает Popover или Dropdown через общий TablePopoverContext. Сам ничего
 * не рисует: содержимое рисует `render`, правила закрытия задаёт `behavior`.
 */
export const CanvasOverlayListener: FC<CanvasOverlayListenerProps> = ({
  containerRef,
  config,
  dropdownConfig,
  rows,
  rowKeyGetter,
}) => {
  const { state, open, close } = useTablePopover();

  // Дефолты и состояние читаем через ref, чтобы не переподписываться на каждый рендер.
  const configRef = useRef<CanvasOverlayDefaults>({});
  configRef.current = { popover: config, dropdown: dropdownConfig };
  const stateRef = useRef(state);
  stateRef.current = state;

  const openOverlay = useCallback<OpenCanvasOverlay>(
    (detail, overlay, sourceKey) => {
      const container = containerRef.current;
      const rect = clipAnchorRect(detail, getGridViewport(container));
      const ctx = detail.tooltipContext;
      const anchorRow =
        typeof ctx?.rowInd === 'number' && ctx.row !== undefined
          ? { rowInd: ctx.rowInd, row: ctx.row }
          : undefined;
      const contentData: CanvasOverlayContentData = {
        kind: CANVAS_OVERLAY_CONTENT_KIND,
        overlay,
        anchorRow,
      };

      open({
        position: { x: rect.x, y: rect.y },
        anchorSize: { width: rect.width, height: rect.height },
        contentType: 'custom',
        contentData,
        sourceKey,
        behavior: {
          closeOnScroll: overlay.config.closeOnScroll ? 'xy' : false,
          closeOnTableResize: true,
        },
        // Для другого элемента новый key: Popover создаётся заново со своей позицией и фокусом.
        render: ({ close: closePopover }) =>
          overlay.kind === 'dropdown' ? (
            <CanvasDropdown
              key={sourceKey}
              config={overlay.config}
              close={closePopover}
              tableContainer={container}
            />
          ) : (
            <CanvasPopover
              key={sourceKey}
              config={overlay.config}
              close={closePopover}
              tableContainer={container}
            />
          ),
      });
    },
    [containerRef, open],
  );

  useEffect(() => {
    const target = containerRef.current;

    const unsubscribeClick = subscribeToCanvasPortalClick(
      (detail: CanvasPortalClickDetail) => {
        const overlay = resolveCanvasOverlay(detail, configRef.current);
        // Popover по наведению открывает useHoverOverlayOpen, клик его не трогает.
        if (!overlay || overlay.config.trigger === 'hover') return;
        const sourceKey = getOverlaySourceKey(detail);
        if (!sourceKey) return;

        // Повторный клик по тому же элементу закрывает. Если closeOnOutsideClick
        // включён, Popover уже закрылся при нажатии, здесь случай, когда выключен.
        const { current } = stateRef;
        if (getOpenCanvasOverlay(current) && current.sourceKey === sourceKey) {
          close();
          return;
        }

        openOverlay(detail, overlay, sourceKey);
      },
      target,
    );

    // Ширину колонки поменяли или колонку переставили: элемент сдвинется.
    const unsubscribeReset = subscribeToCanvasPortalReset(() => {
      if (getOpenCanvasOverlay(stateRef.current)) close();
    }, target);

    return () => {
      unsubscribeClick();
      unsubscribeReset();
    };
  }, [containerRef, openOverlay, close]);

  useHoverOverlayOpen({
    containerRef,
    configRef,
    stateRef,
    isOpen: state.isOpen,
    rows,
    openOverlay,
  });

  const rowKeyGetterRef = useRef(rowKeyGetter);
  rowKeyGetterRef.current = rowKeyGetter;

  // На месте строки, где открыт Popover, другая строка: содержимое устарело.
  useEffect(() => {
    const anchorRow = getOpenCanvasOverlay(stateRef.current)?.anchorRow;
    if (
      anchorRow &&
      rows &&
      !isSameRow(anchorRow.row, rows[anchorRow.rowInd], rowKeyGetterRef.current)
    ) {
      close();
    }
  }, [rows, close]);

  // onOpen / onClose конфига: ровно по одному на каждое открытие.
  const openedRef = useRef<CanvasOverlayContentData | null>(null);
  useEffect(() => {
    const next = getOpenCanvasOverlay(state);
    const prev = openedRef.current;
    if (prev === next) return;

    prev?.overlay.config.onClose?.();
    next?.overlay.config.onOpen?.();
    openedRef.current = next;
  }, [state]);

  // Таблицу убирают со страницы (смена вида, загрузка): закрываем Popover и
  // вызываем onClose, иначе после возвращения таблицы он всплыл бы на старом месте.
  useEffect(
    () => () => {
      openedRef.current?.overlay.config.onClose?.();
      openedRef.current = null;
      if (getOpenCanvasOverlay(stateRef.current)) close();
    },
    [close],
  );

  return null;
};
