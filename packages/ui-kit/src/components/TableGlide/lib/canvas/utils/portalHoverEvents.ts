import type { CanvasNode } from '../core/CanvasNode';
import type { TooltipProps } from '@ui-kit/components/Tooltip';
import type { CanvasNodeDropdownConfig } from './dropdownConfig';
import type {
  CanvasNodePopoverConfig,
  CanvasPortalPriority,
} from './portalClickEvents';

// ─────────────────────────────────────────────────────────────────────────────
// Interaction Lock (pauses portal hover during drag/resize)
// ─────────────────────────────────────────────────────────────────────────────

type InteractionLockListener = (locked: boolean) => void;

/**
 * Таблица, к которой относится блокировка, подписка или проверка. Без таблицы
 * (`undefined` или `null`) смысл у них разный, и он описан у каждой функции:
 * блокировка без таблицы действует на всю страницу, подписка и проверка без
 * таблицы учитывают блокировку любой таблицы.
 */
type LockTarget = EventTarget | null | undefined;

/** Ключ блокировки на всю страницу. */
const PAGE_LOCK = null;

/** Сколько блокировок взято на каждую таблицу и на всю страницу (PAGE_LOCK). */
const lockCounts = new Map<EventTarget | typeof PAGE_LOCK, number>();

interface LockSubscription {
  listener: InteractionLockListener;
  target: LockTarget;
  locked: boolean;
}
const lockSubscriptions = new Set<LockSubscription>();

/** Заблокирована ли таблица (своей блокировкой или блокировкой страницы). Без таблицы: есть ли блокировка хоть где-то. */
function isLocked(target: LockTarget): boolean {
  if (target === undefined || target === null) return lockCounts.size > 0;
  return lockCounts.has(target) || lockCounts.has(PAGE_LOCK);
}

function notifyLockListeners(): void {
  lockSubscriptions.forEach((subscription) => {
    const locked = isLocked(subscription.target);
    if (locked === subscription.locked) return;
    subscription.locked = locked;
    subscription.listener(locked);
  });
}

/**
 * Выключает тултипы и открытие по наведению, пока колонку тянут или меняют ей
 * ширину.
 * @param target контейнер таблицы: блокировка действует только на неё. Без
 * него блокируется вся страница: так бывает у TableGlide без контейнера
 * событий (`portalEventTargetRef` не передан), его ресайз выключает наведение
 * во всех таблицах страницы.
 * @returns функция снятия блокировки, повторный вызов ничего не делает.
 */
export function lockPortalHover(target?: LockTarget): () => void {
  const key = target ?? PAGE_LOCK;
  lockCounts.set(key, (lockCounts.get(key) ?? 0) + 1);
  notifyLockListeners();

  let released = false;
  return () => {
    if (released) return;
    released = true;
    const count = (lockCounts.get(key) ?? 1) - 1;
    if (count > 0) lockCounts.set(key, count);
    else lockCounts.delete(key);
    notifyLockListeners();
  };
}

/**
 * @param target контейнер таблицы: заблокирована ли она (своей блокировкой
 * или блокировкой всей страницы). Без него: есть ли блокировка хоть где-то.
 */
export function isPortalHoverLocked(target?: LockTarget): boolean {
  return isLocked(target);
}

/**
 * Подписка на блокировку наведения. Слушателя зовут только при смене
 * состояния, текущее состояние на момент подписки берите из
 * `isPortalHoverLocked(target)`.
 * @param target контейнер таблицы: слушаем её блокировку и блокировку всей
 * страницы. Без него слушаем блокировку любой таблицы.
 */
export function subscribeToPortalHoverLock(
  listener: InteractionLockListener,
  target?: LockTarget
): () => void {
  const subscription: LockSubscription = {
    listener,
    target,
    locked: isLocked(target)
  };
  lockSubscriptions.add(subscription);
  return () => {
    lockSubscriptions.delete(subscription);
  };
}

export const CANVAS_PORTAL_RESET_EVENT = 'basic-grid-canvas-portal-reset';

/**
 * Сообщает, что тултипы и Popover таблицы привязаны к старым координатам:
 * начали менять ширину колонки или переставили колонки. Действует только на
 * таблицу, в контейнер которой отправлено.
 * @param target контейнер таблицы. Если не передан, событие отправляется на window.
 */
export function dispatchCanvasPortalReset(target?: EventTarget | null): void {
  if (typeof window === 'undefined') return;
  (target ?? window).dispatchEvent(new CustomEvent(CANVAS_PORTAL_RESET_EVENT));
}

/**
 * Подписка на событие dispatchCanvasPortalReset.
 * @param target контейнер таблицы. Если не передан, слушаем window.
 */
export function subscribeToCanvasPortalReset(
  listener: () => void,
  target?: EventTarget | null,
): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const eventTarget = target ?? window;
  const handler = () => listener();
  eventTarget.addEventListener(CANVAS_PORTAL_RESET_EVENT, handler);

  return () => {
    eventTarget.removeEventListener(CANVAS_PORTAL_RESET_EVENT, handler);
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type CanvasPortalSource = 'header' | 'cell';

/** Форма контекста тултипа (column, row, ctxs, refTable + опциональные colInd, rowInd, theme). */
export interface TooltipContextShape<T = unknown> {
  column?: T;
  row?: T;
  ctxs?: T;
  refTable?: T;
  colInd?: T;
  rowInd?: T;
  theme?: T;
}

export interface TooltipContext<T = unknown> {
  column?: T;
  row?: T;
  ctxs?: T;
  refTable?: T;
  colInd?: T;
  rowInd?: T;
  theme?: T;
}
//FIXME: надо доработать в будущем
//TODO: надо определить что мы ренедрим как тултип. СТАРЫЙ тултип или новый popoverBeta или ждем когда tooltipBeta добавят opened поддержку?
/**
 * Пропсы для кастомизации тултипа с canvas-ноды.
 * Не завязан на TooltipProps — содержит только те поля, которые можно задать снаружи.
 * Строгая типизация будет добавлена позже, пока placement и view — строки.
 */
export type CanvasNodeTooltipProps = Pick<
  TooltipProps,
  'placement' | 'view' | 'minWidth' | 'maxWidth'
> & {
  /** Сохранять переносы строк (\n) в тексте тултипа через white-space: pre-line. @default false */
  preserveLineBreaks?: boolean;
  /**
   * Сдвиг тултипа по X (px) относительно центра ноды. Нужен, когда видимая
   * часть ноды смещена внутри неё (например, иконка прижата к краю кнопки).
   * @default 0
   */
  offsetX?: number;
};

/**
 * Проп tooltip на Canvas-элементах: строка (текст) или объект с text и опциональными пропсами Tooltip.
 * mouseEnterDelay / mouseLeaveDelay управляются оверлеем (per-node переопределение глобальных).
 */
export type CanvasNodeTooltipConfig =
  | string
  | (CanvasNodeTooltipProps & {
      /** Текст тултипа (только string, не ReactNode). */
      text: string;
      /** Задержка перед показом (мс). По умолчанию 0. */
      mouseEnterDelay?: number;
      /** Задержка перед скрытием после ухода мыши (мс). По умолчанию 0. */
      mouseLeaveDelay?: number;
    });

export interface CanvasPortalHoverDetail<
  TContext extends TooltipContextShape = TooltipContextShape
> {
  visible: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  node?: CanvasNode | null;
  nodeId?: string;
  source?: CanvasPortalSource;
  originId?: string;
  /** column, row, ctxs, refTable — тип задаётся generic TContext */
  tooltipContext?: TContext;
  /** Конфиг с ноды (проп tooltip на Canvas-элементе). */
  tooltipFromNode?: CanvasNodeTooltipConfig;
  /** Проп popover с Canvas-элемента, нужен для `trigger: 'hover'`. */
  popoverFromNode?: CanvasNodePopoverConfig;
  /** Проп dropdown с Canvas-элемента. */
  dropdownFromNode?: CanvasNodeDropdownConfig;
  /**
   * Приоритет события, см. CANVAS_PORTAL_PRIORITY. usePortalHover не заменяет
   * активный тултип с бо́льшим приоритетом.
   * @default COLUMN
   */
  priority?: CanvasPortalPriority;
}

export type CanvasPortalHoverListener = (
  detail: CanvasPortalHoverDetail
) => void;

export const CANVAS_PORTAL_EVENT = 'basic-grid-canvas-portal-hover';
const HIDE_DEBOUNCE_MS = 400;

let targetIdCounter = 0;
const TARGET_ID_PROP = '__canvasPortalTargetId';

function getTargetKey(target: EventTarget | null | undefined): string {
  if (!target) return 'window';
  const el = target as HTMLElement;
  if (el.dataset?.['portalTargetId']) return el.dataset['portalTargetId'];

  const record = target as unknown as Record<string, number>;
  if (!record[TARGET_ID_PROP]) {
    record[TARGET_ID_PROP] = ++targetIdCounter;
  }
  return String(record[TARGET_ID_PROP]);
}

const hideTimeouts = new Map<string, number>();

function getSourceKey(source?: CanvasPortalSource, originId?: string): string {
  return `${source ?? 'default'}:${originId ?? 'default'}`;
}

function dispatchEvent(
  detail: CanvasPortalHoverDetail,
  target: EventTarget | null | undefined
): void {
  const event = new CustomEvent<CanvasPortalHoverDetail>(CANVAS_PORTAL_EVENT, {
    detail,
  });
  if (target) {
    target.dispatchEvent(event);
  } else {
    window.dispatchEvent(event);
  }
}

function cancelPendingHide(key: string): void {
  const existingTimeout = hideTimeouts.get(key);
  if (existingTimeout !== undefined) {
    window.clearTimeout(existingTimeout);
    hideTimeouts.delete(key);
  }
}

/** Отменяет ВСЕ pending hide-таймеры для данного targetKey (любой source/originId). */
function cancelAllPendingHidesForTarget(targetKey: string): void {
  const prefix = `${targetKey}:`;
  for (const [key, timeoutId] of hideTimeouts.entries()) {
    if (key.startsWith(prefix)) {
      window.clearTimeout(timeoutId);
      hideTimeouts.delete(key);
    }
  }
}

function scheduleHide(
  key: string,
  detail: CanvasPortalHoverDetail,
  target: EventTarget | null | undefined
): void {
  const timeoutId = window.setTimeout(() => {
    hideTimeouts.delete(key);
    dispatchEvent(detail, target);
  }, HIDE_DEBOUNCE_MS);
  hideTimeouts.set(key, timeoutId);
}

// ─────────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Диспатчит portal hover событие.
 * @param detail — данные hover (visible, x, y, width, height, nodeId, source…)
 * @param target — контейнер таблицы (HTMLElement). Если передан — событие на нём; иначе на window.
 * @param immediate — если true, hide диспатчится без debounce (для onItemHovered, где Glide даёт точное событие)
 */
export function dispatchCanvasPortalHover(
  detail: CanvasPortalHoverDetail,
  target?: EventTarget | null,
  immediate?: boolean
): void {
  if (typeof window === 'undefined') return;

  const targetKey = getTargetKey(target);
  const key = `${targetKey}:${getSourceKey(detail.source, detail.originId)}`;

  if (detail.visible) {
    // Отменяем ВСЕ pending hides для этого target — не только для текущего originId.
    // Это предотвращает коллизию: hide старого элемента не сработает после show нового.
    cancelAllPendingHidesForTarget(targetKey);
    dispatchEvent(detail, target);
  } else if (immediate) {
    cancelPendingHide(key);
    dispatchEvent(detail, target);
  } else {
    cancelPendingHide(key);
    scheduleHide(key, detail, target);
  }
}

/**
 * Подписка на portal hover.
 * @param listener — колбэк при событии
 * @param target — контейнер таблицы. Если передан — слушаем только его; иначе window.
 */
export function subscribeToCanvasPortalHover(
  listener: CanvasPortalHoverListener,
  target?: EventTarget | null
): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const eventTarget = target ?? window;

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<CanvasPortalHoverDetail>;
    if (customEvent.detail) {
      listener(customEvent.detail);
    }
  };

  eventTarget.addEventListener(CANVAS_PORTAL_EVENT, handler as EventListener);

  return () => {
    eventTarget.removeEventListener(
      CANVAS_PORTAL_EVENT,
      handler as EventListener
    );
  };
}
