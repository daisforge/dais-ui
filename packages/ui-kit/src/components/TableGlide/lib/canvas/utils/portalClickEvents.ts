import type { PopoverBetaCompProps } from '@ui-kit/components/PopoverBeta';
import type { ReactNode } from 'react';

import type { CanvasNodeDropdownConfig } from './dropdownConfig';
import type {
  CanvasPortalSource,
  TooltipContextShape,
} from './portalHoverEvents';

/**
 * Приоритет событий наведения и клика. Событие canvas-элемента важнее события
 * ячейки или шапки: его тултип и Popover не перебиваются настройками колонки.
 */
export const CANVAS_PORTAL_PRIORITY = {
  /** Ячейка или шапка колонки целиком (cellTooltip, headerCellTooltip). */
  COLUMN: 0,
  /** Canvas-элемент с пропом tooltip, popover или dropdown. */
  NODE: 1,
} as const;

export type CanvasPortalPriority =
  (typeof CANVAS_PORTAL_PRIORITY)[keyof typeof CANVAS_PORTAL_PRIORITY];

/**
 * Настройки Popover на Canvas-элементе (проп `popover`) или для всей таблицы
 * (`tableConfig.popover`).
 *
 * Поля `placement`, `offset`, `hasTail`, `flip`, `shift`, `zIndex`, `resizable`
 * передаются в PopoverBeta без изменений. Остальные поля обрабатывает таблица:
 * она сама открывает и закрывает Popover и считает, к чему его привязать.
 */
export type CanvasNodePopoverProps = Pick<
  PopoverBetaCompProps,
  'placement' | 'offset' | 'hasTail' | 'flip' | 'shift' | 'zIndex' | 'resizable'
> & {
  /**
   * Как открывать Popover.
   * - `click`: по клику на элемент;
   * - `hover`: по наведению. Popover остаётся открытым, пока курсор над
   *   элементом или над самим Popover, поэтому в него можно перевести курсор
   *   и нажать кнопку или ссылку. С клавиатуры и на сенсорном экране так
   *   не открыть, поэтому действия, нужные всем, вешайте на `click`.
   * @default 'click'
   */
  trigger?: 'click' | 'hover';
  /** Задержка перед показом при `trigger: 'hover'` (мс). @default 300 */
  mouseEnterDelay?: number;
  /**
   * Задержка перед скрытием при `trigger: 'hover'` (мс): сколько курсор может
   * пробыть вне элемента и Popover, прежде чем Popover закроется.
   * @default 200
   */
  mouseLeaveDelay?: number;
  /**
   * Закрывать Popover при прокрутке таблицы в любую сторону.
   * Элемент нарисован на canvas, и Popover не может следовать за ним при
   * прокрутке, поэтому по умолчанию он закрывается.
   * @default true
   */
  closeOnScroll?: boolean;
  /**
   * Закрывать по клику вне Popover. При `trigger: 'hover'` не действует:
   * Popover закрывается, когда уходит курсор.
   * @default true
   */
  closeOnOutsideClick?: boolean;
  /** Закрывать по Esc. @default true */
  closeOnEsc?: boolean;
  /** Подпись Popover для программ чтения с экрана (aria-label). */
  ariaLabel?: string;
  /** Вызывается после открытия Popover. */
  onOpen?: () => void;
  /** Вызывается после закрытия Popover любым способом. */
  onClose?: () => void;
};

/** Что получает функция `renderContent`: `close`, чтобы закрыть Popover из его содержимого. */
export interface CanvasPopoverRenderApi {
  close: () => void;
}

/**
 * Содержимое Popover: готовая разметка (`content`) или функция (`renderContent`),
 * если содержимому нужен `close`. Задаётся что-то одно.
 */
export type CanvasNodePopoverContent =
  | {
      /** Готовое содержимое Popover. */
      content: ReactNode;
      renderContent?: never;
    }
  | {
      /** Содержимое Popover с доступом к `close`. */
      renderContent: (api: CanvasPopoverRenderApi) => ReactNode;
      content?: never;
    };

/** Проп `popover` на Canvas-элементах. Открывается по клику или наведению, смотря по `trigger`. */
export type CanvasNodePopoverConfig = CanvasNodePopoverProps &
  CanvasNodePopoverContent;

export function isCanvasNodePopoverConfig(
  value: unknown,
): value is CanvasNodePopoverConfig {
  if (!value || typeof value !== 'object') return false;
  const config = value as Record<string, unknown>;
  return (
    config['content'] !== undefined ||
    typeof config['renderContent'] === 'function'
  );
}

/** Прямоугольник в координатах окна браузера. */
export interface CanvasPortalRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Клик по canvas-элементу с Popover или Dropdown. Координаты элемента считаются
 * от окна браузера, как в событии наведения.
 */
export interface CanvasPortalClickDetail<
  TContext extends TooltipContextShape = TooltipContextShape,
> extends CanvasPortalRect {
  /** Id canvas-элемента. */
  originId: string;
  nodeId?: string;
  source?: CanvasPortalSource;
  /**
   * column, row, ctxs, refTable, colInd, rowInd, theme. Поле названо так же, как
   * в событии наведения, чтобы один и тот же код читал оба события.
   */
  tooltipContext?: TContext;
  /** Проп popover с Canvas-элемента. */
  popoverFromNode?: CanvasNodePopoverConfig;
  /** Проп dropdown с Canvas-элемента. */
  dropdownFromNode?: CanvasNodeDropdownConfig;
  /** Приоритет события, см. CANVAS_PORTAL_PRIORITY. @default COLUMN */
  priority?: CanvasPortalPriority;
}

export type CanvasPortalClickListener = (
  detail: CanvasPortalClickDetail,
) => void;

export const CANVAS_PORTAL_CLICK_EVENT = 'basic-grid-canvas-portal-click';

/**
 * Сообщает о клике по canvas-элементу.
 * @param detail координаты элемента и настройки Popover или Dropdown
 * @param target контейнер таблицы. Если передан, событие отправляется на нём, иначе на window.
 */
export function dispatchCanvasPortalClick(
  detail: CanvasPortalClickDetail,
  target?: EventTarget | null,
): void {
  if (typeof window === 'undefined') return;

  const event = new CustomEvent<CanvasPortalClickDetail>(
    CANVAS_PORTAL_CLICK_EVENT,
    { detail },
  );
  (target ?? window).dispatchEvent(event);
}

/**
 * Подписка на клик по canvas-элементу.
 * @param target контейнер таблицы. Если передан, слушаем только его, иначе window.
 */
export function subscribeToCanvasPortalClick(
  listener: CanvasPortalClickListener,
  target?: EventTarget | null,
): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const eventTarget = target ?? window;

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<CanvasPortalClickDetail>;
    if (customEvent.detail) {
      listener(customEvent.detail);
    }
  };

  eventTarget.addEventListener(CANVAS_PORTAL_CLICK_EVENT, handler);

  return () => {
    eventTarget.removeEventListener(CANVAS_PORTAL_CLICK_EVENT, handler);
  };
}
