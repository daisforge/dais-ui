import type { PopoverBetaCompProps } from '@ui-kit/components/PopoverBeta';
import type { ReactNode } from 'react';

import type { CanvasNodeDropdownConfig } from './dropdownConfig';
import type {
  CanvasPortalSource,
  TooltipContextShape,
} from './portalHoverEvents';

// ─────────────────────────────────────────────────────────────────────────────
// Приоритеты событий шины
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Приоритет события на шинах наведения и клика. Событие canvas-ноды важнее
 * события ячейки или шапки колонки: тултип и поповер ноды не перебиваются
 * колоночными.
 */
export const CANVAS_PORTAL_PRIORITY = {
  /** Ячейка или шапка колонки целиком (cellTooltip, headerCellTooltip). */
  COLUMN: 0,
  /** Canvas-нода (проп tooltip, popover или dropdown на Canvas-элементе). */
  NODE: 1,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Конфиг поповера на canvas-ноде / колонке
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Пропсы поповера, которые можно задать снаружи: на Canvas-элементе (проп
 * `popover`) или глобально (`tableConfig.popover`).
 *
 * Сквозные поля (`placement`, `offset`, `hasTail`, `flip`, `shift`, `zIndex`,
 * `resizable`) взяты из атомарного PopoverBeta и уходят в него как есть.
 * Остальное своё: открытие, закрытие и якорь делает таблица, атомарка про
 * них не знает. Тот же приём, что у тултипа (`CanvasNodeTooltipProps`).
 */
export type CanvasNodePopoverProps = Pick<
  PopoverBetaCompProps,
  'placement' | 'offset' | 'hasTail' | 'flip' | 'shift' | 'zIndex' | 'resizable'
> & {
  /**
   * Чем открывать поповер.
   * - `click` — клик по элементу;
   * - `hover` — наведение. Поповер держится, пока курсор над элементом или
   *   над самим поповером, поэтому в него можно перевести курсор и нажать
   *   кнопку или ссылку.
   * @default 'click'
   */
  trigger?: 'click' | 'hover';
  /** Задержка перед показом при `trigger: 'hover'` (мс). @default 300 */
  mouseEnterDelay?: number;
  /**
   * Задержка перед скрытием при `trigger: 'hover'` (мс): сколько курсор может
   * пробыть вне элемента и поповера, прежде чем поповер закроется.
   * @default 200
   */
  mouseLeaveDelay?: number;
  /**
   * Закрывать поповер при скролле таблицы по любой оси.
   * Якорь нарисован на canvas и за скроллом не едет, поэтому по умолчанию
   * поповер закрывается.
   * @default true
   */
  closeOnScroll?: boolean;
  /**
   * Закрывать по клику вне поповера. При `trigger: 'hover'` не действует:
   * поповер закрывается, когда уходит курсор.
   * @default true
   */
  closeOnOutsideClick?: boolean;
  /** Закрывать по Esc. @default true */
  closeOnEsc?: boolean;
  /** Подпись поповера для экранных дикторов (aria-label). */
  ariaLabel?: string;
  /** Вызывается после открытия поповера. */
  onOpen?: () => void;
  /** Вызывается после закрытия поповера любым способом. */
  onClose?: () => void;
};

/** Что получает функция `renderContent`: закрыть поповер из своего содержимого. */
export interface CanvasPopoverRenderApi {
  close: () => void;
}

/**
 * Содержимое поповера: готовый узел (`content`) или функция (`renderContent`),
 * которой нужен `close`. Задаётся что-то одно.
 */
export type CanvasNodePopoverContent =
  | {
      /** Готовое содержимое поповера. */
      content: ReactNode;
      renderContent?: never;
    }
  | {
      /** Содержимое поповера с доступом к `close`. */
      renderContent: (api: CanvasPopoverRenderApi) => ReactNode;
      content?: never;
    };

/**
 * Проп `popover` на Canvas-элементах. Открывается по клику или наведению
 * на ноду, см. `trigger`.
 */
export type CanvasNodePopoverConfig = CanvasNodePopoverProps &
  CanvasNodePopoverContent;

/** Конфиг похож на конфиг поповера: объект с `content` или `renderContent`. */
export function isCanvasNodePopoverConfig(
  value: unknown,
): value is CanvasNodePopoverConfig {
  if (!value || typeof value !== 'object') return false;
  const config = value as Record<string, unknown>;
  return 'content' in config || typeof config['renderContent'] === 'function';
}

// ─────────────────────────────────────────────────────────────────────────────
// Событие клика по canvas-якорю
// ─────────────────────────────────────────────────────────────────────────────

/** Прямоугольник во viewport. */
export interface CanvasPortalRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Клик по canvas-элементу, у которого есть поповер или дропдаун. Координаты
 * якоря во viewport, как у hover-события.
 */
export interface CanvasPortalClickDetail<
  TContext extends TooltipContextShape = TooltipContextShape,
> extends CanvasPortalRect {
  /** Id canvas-ноды. */
  originId: string;
  nodeId?: string;
  source?: CanvasPortalSource;
  /**
   * column, row, ctxs, refTable, colInd, rowInd, theme. Имя поля то же, что у
   * события наведения, чтобы резолверы работали с обоими. Дженерик стирается
   * CustomEvent-ом.
   */
  tooltipContext?: TContext;
  /** Конфиг с ноды (проп popover на Canvas-элементе). */
  popoverFromNode?: CanvasNodePopoverConfig;
  /** Конфиг с ноды (проп dropdown на Canvas-элементе). */
  dropdownFromNode?: CanvasNodeDropdownConfig;
  /** Приоритет события, см. CANVAS_PORTAL_PRIORITY. @default COLUMN */
  priority?: number;
}

export type CanvasPortalClickListener = (
  detail: CanvasPortalClickDetail,
) => void;

export const CANVAS_PORTAL_CLICK_EVENT = 'basic-grid-canvas-portal-click';

/**
 * Диспатчит клик по canvas-якорю.
 * @param detail — координаты якоря и конфиг поповера
 * @param target — контейнер таблицы. Если передан, событие идёт на нём, иначе на window.
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
 * Подписка на клик по canvas-якорю.
 * @param listener — колбэк при событии
 * @param target — контейнер таблицы. Если передан, слушаем только его, иначе window.
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
