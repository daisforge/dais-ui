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
 * Конфиг поповера после наложения дефолтов из tableConfig.popover.
 * Именно его получает переходник на PopoverBeta (CanvasPopover).
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
 * Что открывается на canvas-элементе: поповер (проп `popover`) или дропдаун
 * (проп `dropdown`). Открытие, якорь и закрытие у них общие, различается
 * только переходник на атомарный компонент.
 */
export type ResolvedCanvasOverlay =
  | { kind: 'popover'; config: ResolvedCanvasPopoverConfig }
  | { kind: 'dropdown'; config: ResolvedCanvasDropdownConfig };

/** Дефолты из tableConfig для обоих видов оверлея. */
export interface CanvasOverlayDefaults {
  popover?: TableConfigPopover;
  dropdown?: TableConfigDropdown;
}

export const CANVAS_POPOVER_CONTENT_KIND = 'canvas-popover' as const;

/** Данные открытого canvas-поповера или дропдауна в TablePopoverState.contentData. */
export interface CanvasPopoverContentData {
  kind: typeof CANVAS_POPOVER_CONTENT_KIND;
  overlay: ResolvedCanvasOverlay;
  /**
   * Строка под якорем на момент открытия. Если на этом месте окажется другая
   * строка (сортировка, новые данные), содержимое устарело и поповер закрывается.
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

/** Данные открытого canvas-поповера или дропдауна из стейта, или null. */
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

/** Открытый поповер или дропдаун по наведению из стейта, или null. */
export function getOpenHoverPopover(
  state: Parameters<typeof getOpenCanvasPopover>[0],
): CanvasPopoverContentData | null {
  const open = getOpenCanvasPopover(state);
  return open?.overlay.config.trigger === 'hover' ? open : null;
}
