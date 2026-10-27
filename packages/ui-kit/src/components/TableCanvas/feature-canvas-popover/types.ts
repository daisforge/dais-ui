import type {
  CanvasNodePopoverConfig,
  CanvasNodePopoverProps,
} from '@ui-kit/components/TableGlide';

import type { ResolvedCanvasDropdownConfig } from '../feature-canvas-dropdown/types';
import type {
  TableConfigDropdown,
  TableConfigPopover,
} from '../types/table-config.type';

/**
 * Настройки Popover вместе со значениями по умолчанию из tableConfig.popover.
 * Их получает CanvasPopover.
 */
export type ResolvedCanvasPopoverConfig = Required<
  Pick<
    CanvasNodePopoverProps,
    | 'placement'
    | 'offset'
    | 'hasTail'
    | 'flip'
    | 'shift'
    | 'zIndex'
    | 'closeOnScroll'
    | 'closeOnOutsideClick'
    | 'closeOnEsc'
    | 'trigger'
    | 'mouseEnterDelay'
    | 'mouseLeaveDelay'
  >
> &
  Pick<
    CanvasNodePopoverProps,
    'resizable' | 'ariaLabel' | 'onOpen' | 'onClose'
  > & {
    content?: CanvasNodePopoverConfig['content'];
    renderContent?: CanvasNodePopoverConfig['renderContent'];
  };

/**
 * Что открывается на canvas-элементе: Popover (проп `popover`) или Dropdown
 * (проп `dropdown`). Открытие, привязка к элементу и закрытие у них общие,
 * отличается только компонент, который рисует содержимое.
 */
export type ResolvedCanvasOverlay =
  | { kind: 'popover'; config: ResolvedCanvasPopoverConfig }
  | { kind: 'dropdown'; config: ResolvedCanvasDropdownConfig };

/** Значения по умолчанию из tableConfig для Popover и Dropdown. */
export interface CanvasOverlayDefaults {
  popover?: TableConfigPopover;
  dropdown?: TableConfigDropdown;
}

export const CANVAS_POPOVER_CONTENT_KIND = 'canvas-popover' as const;

/** Данные открытого Popover или Dropdown в TablePopoverState.contentData. */
export interface CanvasPopoverContentData {
  kind: typeof CANVAS_POPOVER_CONTENT_KIND;
  overlay: ResolvedCanvasOverlay;
  /**
   * Строка, на которой открыли. Если на её месте окажется другая строка
   * (сортировка, новые данные), содержимое устарело и Popover закрывается.
   */
  anchorRow?: { rowInd: number; row: unknown };
}

export function isCanvasPopoverContentData(
  value: unknown,
): value is CanvasPopoverContentData {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as { kind?: unknown }).kind === CANVAS_POPOVER_CONTENT_KIND
  );
}

export function getOpenCanvasPopover(state: {
  isOpen: boolean;
  contentType: string | null;
  contentData?: unknown;
}): CanvasPopoverContentData | null {
  if (!state.isOpen || state.contentType !== 'custom') return null;
  return isCanvasPopoverContentData(state.contentData)
    ? state.contentData
    : null;
}

export function getOpenHoverPopover(
  state: Parameters<typeof getOpenCanvasPopover>[0],
): CanvasPopoverContentData | null {
  const open = getOpenCanvasPopover(state);
  return open?.overlay.config.trigger === 'hover' ? open : null;
}
