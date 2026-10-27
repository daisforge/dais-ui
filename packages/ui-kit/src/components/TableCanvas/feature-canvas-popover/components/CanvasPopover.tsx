import { PopoverBeta } from '@ui-kit/components/PopoverBeta';
import React, { useCallback, useMemo, useRef } from 'react';

import { HOVER_ANCHOR_GAP } from '../../feature-canvas-overlay/constants';
import {
  isEscapeInProgress,
  useEscapeClose,
} from '../../feature-canvas-overlay/hooks/useEscapeClose';
import { useHoverLeaveClose } from '../../feature-canvas-overlay/hooks/useHoverLeaveClose';
import type { TablePopoverRenderParams } from '../../feature-popover-table/context';
import type { CanvasPopoverRenderApi } from '../../TableGlideInstance';
import { usePopoverFocusGuard } from '../hooks/usePopoverFocusGuard';
import type { ResolvedCanvasPopoverConfig } from '../types';
import { CanvasAnchor } from './styled';

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

  useEscapeClose({
    enabled: config.closeOnEsc,
    onClose: close,
    tableContainer,
    popoverRef,
  });

  const handleToggle = useCallback(
    (opened: boolean) => {
      // floating-ui ловит Esc по всей странице. Esc решает useEscapeClose.
      if (opened || isEscapeInProgress()) return;
      close(isHover ? undefined : { outsidePress: true });
    },
    [close, isHover],
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
