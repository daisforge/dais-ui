import { PopoverBeta } from '@ui-kit/components/PopoverBeta';
import React, { useCallback, useMemo, useRef } from 'react';

import type { TablePopoverRenderParams } from '../../feature-popover-table/context';
import type { CanvasPopoverRenderApi } from '../../TableGlideInstance';
import { HOVER_ANCHOR_GAP } from '../constants';
import { useEscapeClose } from '../hooks/useEscapeClose';
import { useHoverLeaveClose } from '../hooks/useHoverLeaveClose';
import { usePopoverFocusGuard } from '../hooks/usePopoverFocusGuard';
import type { ResolvedCanvasPopoverConfig } from '../types';
import { CanvasAnchor } from './styled';

/** Сколько после Esc внутри поповера считать его закрытие закрытием по Esc (мс). */
const ESCAPE_TOGGLE_WINDOW_MS = 100;

export interface CanvasPopoverProps {
  config: ResolvedCanvasPopoverConfig;
  close: TablePopoverRenderParams['close'];
  /** Контейнер таблицы: Esc закрывает поповер, только если пришёл из неё. */
  tableContainer?: HTMLElement | null;
}

/**
 * Переходник между конфигом canvas-поповера и атомарным компонентом.
 * Единственное место, где таблица знает, что под капотом PopoverBeta: при
 * замене компонента меняется только этот файл, публичный конфиг остаётся.
 *
 * Поповер управляемый: открыт, пока он есть в TablePopoverState. Закрытие по
 * клику мимо приходит через onToggle(false) и помечается как outsidePress,
 * чтобы повторный клик по тому же якорю работал как toggle.
 *
 * Фокус при открытии остаётся в таблице (usePopoverFocusGuard), Esc из
 * таблицы ловит useEscapeClose.
 *
 * Поповер по наведению закрывается, когда курсор уходит с якоря и с поповера
 * (useHoverLeaveClose). Клик мимо его не закрывает: клик по самому якорю для
 * floating-ui тоже клик мимо, ведь якорь пропускает клики на canvas.
 */
export const CanvasPopover = ({
  config,
  close,
  tableContainer,
}: CanvasPopoverProps) => {
  const isHover = config.trigger === 'hover';
  const anchorRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const api = useMemo<CanvasPopoverRenderApi>(
    () => ({ close: () => close() }),
    [close],
  );

  usePopoverFocusGuard(popoverRef);

  const lastEscapeRef = useEscapeClose({
    enabled: config.closeOnEsc,
    onClose: close,
    tableContainer,
    popoverRef,
  });

  const handleToggle = useCallback(
    (opened: boolean) => {
      if (opened) return;
      // floating-ui закрывает по Esc на всём документе. Закрытие по Esc
      // принимаем, только если он законный (изнутри поповера или из таблицы)
      // и closeOnEsc включён; иначе поповер управляемый и останется открытым.
      const lastEscape = lastEscapeRef.current;
      const byEscape = Date.now() - lastEscape.at < ESCAPE_TOGGLE_WINDOW_MS;
      if (byEscape && (!config.closeOnEsc || !lastEscape.closes)) return;
      close(isHover || byEscape ? undefined : { outsidePress: true });
    },
    [close, config.closeOnEsc, isHover, lastEscapeRef],
  );

  useHoverLeaveClose({
    enabled: isHover,
    anchorRef,
    popoverRef,
    expand: HOVER_ANCHOR_GAP,
    delay: config.mouseLeaveDelay,
    onLeave: close,
  });

  const content = config.renderContent
    ? config.renderContent(api)
    : config.content;

  return (
    <PopoverBeta
      ref={popoverRef}
      opened
      trigger="click"
      target={<CanvasAnchor ref={anchorRef} aria-hidden="true" />}
      placement={config.placement}
      offset={config.offset}
      hasTail={config.hasTail}
      flip={config.flip}
      shift={config.shift}
      zIndex={config.zIndex}
      resizable={config.resizable}
      outsideClick={isHover ? false : config.closeOnOutsideClick}
      onToggle={handleToggle}
      aria-label={config.ariaLabel}
    >
      {content}
    </PopoverBeta>
  );
};
