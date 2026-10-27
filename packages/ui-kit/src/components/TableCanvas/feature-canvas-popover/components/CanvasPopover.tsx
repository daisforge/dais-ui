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

/** Сколько мс после нажатия Esc закрытие Popover считается закрытием по Esc. */
const ESCAPE_TOGGLE_WINDOW_MS = 100;

export interface CanvasPopoverProps {
  config: ResolvedCanvasPopoverConfig;
  close: TablePopoverRenderParams['close'];
  /** Контейнер таблицы: Esc закрывает Popover, только если нажат в ней. */
  tableContainer?: HTMLElement | null;
}

/**
 * Рисует Popover canvas-элемента через PopoverBeta. Только этот файл знает,
 * какой компонент внутри, поэтому его можно заменить, не меняя настройки.
 *
 * Popover открыт, пока он записан в TablePopoverState. Закрытие кликом мимо
 * помечаем как outsidePress, чтобы повторный клик по тому же элементу закрыл
 * Popover, а не открыл заново.
 *
 * Popover по наведению закрывается, когда курсор уходит и с элемента, и с
 * Popover. Клик мимо его не закрывает: клик по самому элементу тоже считается
 * кликом мимо, потому что проходит насквозь на canvas.
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
      // floating-ui ловит Esc по всей странице. Закрываем, только если Esc
      // нажат внутри Popover или в таблице и closeOnEsc включён.
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
