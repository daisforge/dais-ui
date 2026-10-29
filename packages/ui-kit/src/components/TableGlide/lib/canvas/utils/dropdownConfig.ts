import type {
  DropdownItemOption,
  DropdownProps,
} from '@ui-kit/components/Dropdown';
import type { ReactNode } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Конфиг дропдауна на canvas-ноде
// ─────────────────────────────────────────────────────────────────────────────

/** Пункт дропдауна: тот же тип, что у контекстного меню таблицы. */
export type CanvasDropdownItem = DropdownItemOption;

/** Что получают колбэки дропдауна: закрыть его из своего кода. */
export interface CanvasDropdownApi {
  close: () => void;
}

/** Что получает `renderError`: ошибка загрузки, повтор запроса и закрытие. */
export interface CanvasDropdownErrorApi extends CanvasDropdownApi {
  error: unknown;
  retry: () => void;
}

/**
 * Пропсы дропдауна, которые можно задать снаружи: на Canvas-элементе (проп
 * `dropdown`) или глобально (`tableConfig.dropdown`).
 *
 * Сквозные поля (`placement`, `offset`, `listWidth`, `listMaxHeight`,
 * `variant`, `zIndex`, `closeOnSelect`, `renderItem`, `beforeList`,
 * `afterList`) взяты из атомарного Dropdown и уходят в него как есть.
 * Остальное своё: открытие, закрытие, якорь и подгрузку пунктов делает
 * таблица. Тот же приём, что у тултипа (`CanvasNodeTooltipProps`).
 */
export type CanvasNodeDropdownProps = Pick<
  DropdownProps,
  | 'placement'
  | 'offset'
  | 'listWidth'
  | 'listMaxHeight'
  | 'variant'
  | 'zIndex'
  | 'closeOnSelect'
  | 'renderItem'
  | 'beforeList'
  | 'afterList'
> & {
  /**
   * Чем открывать дропдаун.
   * - `click` — левый клик по элементу;
   * - `hover` — наведение. Дропдаун держится, пока курсор над элементом или
   *   над списком.
   * @default 'click'
   */
  trigger?: 'click' | 'hover';
  /** Задержка перед показом при `trigger: 'hover'` (мс). @default 300 */
  mouseEnterDelay?: number;
  /**
   * Задержка перед скрытием при `trigger: 'hover'` (мс): сколько курсор может
   * пробыть вне элемента и списка, прежде чем дропдаун закроется.
   * @default 200
   */
  mouseLeaveDelay?: number;
  /** Размер пунктов. По умолчанию зависит от размера строк таблицы. */
  size?: 'xs' | 's' | 'm';
  /**
   * Закрывать при скролле таблицы по любой оси.
   * Якорь нарисован на canvas и за скроллом не едет, поэтому по умолчанию
   * дропдаун закрывается.
   * @default true
   */
  closeOnScroll?: boolean;
  /**
   * Закрывать по клику вне списка. При `trigger: 'hover'` не действует:
   * дропдаун закрывается, когда уходит курсор.
   * @default true
   */
  closeOnOutsideClick?: boolean;
  /** Закрывать по Esc. @default true */
  closeOnEsc?: boolean;
  /**
   * Пункты, пока `getItems` загружает настоящие. По умолчанию один
   * неактивный пункт «Загрузка...»; для скелетонов задайте свои пункты и
   * `renderItem`.
   */
  loadingItems?: CanvasDropdownItem[];
  /**
   * Что показать вместо списка, если `getItems` завершился ошибкой.
   * По умолчанию один неактивный пункт «Не удалось загрузить».
   */
  renderError?: (api: CanvasDropdownErrorApi) => ReactNode;
  /** Выбор пункта. Для пункта с вложенными пунктами тоже вызывается. */
  onItemSelect?: (item: CanvasDropdownItem, api: CanvasDropdownApi) => void;
  /** Подпись списка для экранных дикторов (aria-label). */
  ariaLabel?: string;
  /** Вызывается после открытия дропдауна. */
  onOpen?: () => void;
  /** Вызывается после закрытия дропдауна любым способом. */
  onClose?: () => void;
};

/**
 * Пункты дропдауна: готовый массив (`items`) или функция (`getItems`), которая
 * возвращает пункты сразу или промисом. Промис — асинхронная подгрузка: пока
 * он не разрешился, список показывает `loadingItems`, при ошибке `renderError`.
 * Задаётся что-то одно.
 */
export type CanvasNodeDropdownItems =
  | {
      /** Готовые пункты. */
      items: CanvasDropdownItem[];
      getItems?: never;
    }
  | {
      /** Пункты по запросу: вызывается при каждом открытии. */
      getItems: () => CanvasDropdownItem[] | Promise<CanvasDropdownItem[]>;
      items?: never;
    };

/**
 * Проп `dropdown` на Canvas-элементах. Открывается по клику или наведению
 * на ноду, см. `trigger`.
 */
export type CanvasNodeDropdownConfig = CanvasNodeDropdownProps &
  CanvasNodeDropdownItems;

/** Конфиг похож на конфиг дропдауна: объект с `items` или `getItems`. */
export function isCanvasNodeDropdownConfig(
  value: unknown,
): value is CanvasNodeDropdownConfig {
  if (!value || typeof value !== 'object') return false;
  const config = value as Record<string, unknown>;
  return (
    Array.isArray(config['items']) || typeof config['getItems'] === 'function'
  );
}
