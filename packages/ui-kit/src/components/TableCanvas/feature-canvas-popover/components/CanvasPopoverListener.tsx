import type { FC, RefObject } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';

import { CanvasDropdown } from '../../feature-canvas-dropdown/components/CanvasDropdown';
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
  type OpenCanvasPopover,
  useHoverPopoverOpen,
} from '../hooks/useHoverPopoverOpen';
import {
  CANVAS_POPOVER_CONTENT_KIND,
  type CanvasOverlayDefaults,
  type CanvasPopoverContentData,
  getOpenCanvasPopover,
} from '../types';
import {
  clipAnchorRect,
  getPopoverSourceKey,
  resolveCanvasOverlay,
} from '../utils';
import { CanvasPopover } from './CanvasPopover';

export interface CanvasPopoverListenerProps {
  /** Контейнер таблицы: на нём слушаем клики и наведение на canvas-якоря. */
  containerRef: RefObject<HTMLElement | null>;
  /** Дефолты поповеров: tableConfig.popover. */
  config?: TableConfigPopover;
  /** Дефолты дропдаунов: tableConfig.dropdown. */
  dropdownConfig?: TableConfigDropdown;
  /**
   * Строки, которые рисует грид. Если на месте строки под якорем оказалась
   * другая (сортировка, новые данные), поповер закрывается.
   */
  rows?: readonly unknown[];
  /**
   * Ключ строки. С ним та же строка в новом объекте (данные пришли заново,
   * правка ячейки) поповер не закрывает. Без него строки сравниваются по ссылке.
   */
  rowKeyGetter?: (row: never) => unknown;
}

/** Та же ли строка: по ссылке, иначе по ключу. Служебные строки ключа могут не иметь. */
const isSameRow = (
  prev: unknown,
  next: unknown,
  rowKeyGetter: CanvasPopoverListenerProps['rowKeyGetter'],
) => {
  if (prev === next) return true;
  if (!rowKeyGetter || next === undefined) return false;
  try {
    return rowKeyGetter(prev as never) === rowKeyGetter(next as never);
  } catch {
    return false;
  }
};

/** Видимая на экране область грида: по ней обрезается якорь. */
const getGridViewport = (container: HTMLElement | null) =>
  container
    ?.querySelector(`.${tableClassNames.tableAndTableScroller}`)
    ?.getBoundingClientRect() ?? null;

/**
 * Слушает клики и наведение на canvas-якоря (нода с пропом popover или
 * dropdown), резолвит конфиг и открывает поповер или дропдаун через общий
 * TablePopoverContext. Сам ничего не рисует: контент рисует `render`
 * (CanvasPopover или CanvasDropdown), правила закрытия передаются в `behavior`.
 */
export const CanvasPopoverListener: FC<CanvasPopoverListenerProps> = ({
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

  const openPopover = useCallback<OpenCanvasPopover>(
    (detail, overlay, sourceKey) => {
      const container = containerRef.current;
      const rect = clipAnchorRect(detail, getGridViewport(container));
      const ctx = detail.tooltipContext;
      const anchorRow =
        typeof ctx?.rowInd === 'number' && ctx.row !== undefined
          ? { rowInd: ctx.rowInd, row: ctx.row }
          : undefined;
      const contentData: CanvasPopoverContentData = {
        kind: CANVAS_POPOVER_CONTENT_KIND,
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
        // key: смена источника пересоздаёт поповер (позиция, фокус до открытия).
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
        // Поповер по наведению открывает useHoverPopoverOpen, клик его не трогает.
        if (!overlay || overlay.config.trigger === 'hover') return;
        const sourceKey = getPopoverSourceKey(detail);
        if (!sourceKey) return;

        // Повторный клик по тому же источнику закрывает. При
        // closeOnOutsideClick: true это делает защёлка в useTablePopoverState
        // (поповер уже закрылся на pointerdown), здесь — когда клик мимо выключен.
        const { current } = stateRef;
        if (getOpenCanvasPopover(current) && current.sourceKey === sourceKey) {
          close();
          return;
        }

        openPopover(detail, overlay, sourceKey);
      },
      target,
    );

    // Ресайз или перестановка колонки в этой таблице: якорь уедет.
    const unsubscribeReset = subscribeToCanvasPortalReset(() => {
      if (getOpenCanvasPopover(stateRef.current)) close();
    }, target);

    return () => {
      unsubscribeClick();
      unsubscribeReset();
    };
  }, [containerRef, openPopover, close]);

  useHoverPopoverOpen({
    containerRef,
    configRef,
    stateRef,
    isOpen: state.isOpen,
    rows,
    openPopover,
  });

  const rowKeyGetterRef = useRef(rowKeyGetter);
  rowKeyGetterRef.current = rowKeyGetter;

  // На месте строки под якорем другая строка: содержимое устарело.
  useEffect(() => {
    const anchorRow = getOpenCanvasPopover(stateRef.current)?.anchorRow;
    if (
      anchorRow &&
      rows &&
      !isSameRow(anchorRow.row, rows[anchorRow.rowInd], rowKeyGetterRef.current)
    ) {
      close();
    }
  }, [rows, close]);

  // onOpen / onClose конфига: ровно по одному на каждое открытие.
  const openedRef = useRef<CanvasPopoverContentData | null>(null);
  useEffect(() => {
    const next = getOpenCanvasPopover(state);
    const prev = openedRef.current;
    if (prev === next) return;

    prev?.overlay.config.onClose?.();
    next?.overlay.config.onOpen?.();
    openedRef.current = next;
  }, [state]);

  // Таблица размонтируется (смена вида, оверлей загрузки): поповер закрываем,
  // onClose вызываем. Иначе после возвращения таблицы поповер всплыл бы на
  // старом месте.
  useEffect(
    () => () => {
      openedRef.current?.overlay.config.onClose?.();
      openedRef.current = null;
      if (getOpenCanvasPopover(stateRef.current)) close();
    },
    [close],
  );

  return null;
};
