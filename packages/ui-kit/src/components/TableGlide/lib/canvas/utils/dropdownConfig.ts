import type {
  DropdownItemOption,
  DropdownProps,
} from '@ui-kit/components/Dropdown';
import type { ReactNode } from 'react';

export type CanvasDropdownItem = DropdownItemOption;

/** Что получают колбэки Dropdown: функция закрытия. */
export interface CanvasDropdownApi {
  close: () => void;
}

/** Что получает `renderError`: ошибка загрузки, повтор запроса и закрытие. */
export interface CanvasDropdownErrorApi extends CanvasDropdownApi {
  error: unknown;
  retry: () => void;
}

/**
 * Настройки Dropdown: на Canvas-элементе (проп `dropdown`) или для всей таблицы
 * (`tableConfig.dropdown`). Поля `placement`, `offset`, `listWidth`,
 * `listMaxHeight`, `variant`, `zIndex`, `closeOnSelect`, `renderItem`,
 * `beforeList`, `afterList` передаются в атомарный Dropdown как есть.
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
   * Как открывать Dropdown.
   * - `click`: левый клик по элементу;
   * - `hover`: наведение. Dropdown открыт, пока курсор над элементом или
   *   над списком.
   * @default 'click'
   */
  trigger?: 'click' | 'hover';
  /** Задержка перед показом при `trigger: 'hover'` (мс). @default 300 */
  mouseEnterDelay?: number;
  /**
   * Задержка перед скрытием при `trigger: 'hover'` (мс): сколько курсор может
   * пробыть вне элемента и списка, прежде чем Dropdown закроется.
   * @default 200
   */
  mouseLeaveDelay?: number;
  /** Размер пунктов. По умолчанию зависит от размера строк таблицы. */
  size?: 'xs' | 's' | 'm';
  /**
   * Закрывать при скролле таблицы по любой оси.
   * Элемент нарисован на canvas, и список за ним при скролле не двигается,
   * поэтому по умолчанию Dropdown закрывается.
   * @default true
   */
  closeOnScroll?: boolean;
  /**
   * Закрывать по клику вне списка. При `trigger: 'hover'` не действует:
   * Dropdown закрывается, когда уходит курсор.
   * @default true
   */
  closeOnOutsideClick?: boolean;
  /** Закрывать по Esc. @default true */
  closeOnEsc?: boolean;
  /**
   * Пункты, которые видны, пока `getItems` загружает настоящие. По умолчанию
   * один неактивный пункт «Загрузка...». Для скелетонов задайте свои пункты и
   * `renderItem`.
   */
  loadingItems?: CanvasDropdownItem[];
  /**
   * Что показать вместо списка, если `getItems` завершился ошибкой.
   * По умолчанию один неактивный пункт «Не удалось загрузить».
   */
  renderError?: (api: CanvasDropdownErrorApi) => ReactNode;
  /** Выбор пункта, в том числе пункта с вложенными пунктами. */
  onItemSelect?: (item: CanvasDropdownItem, api: CanvasDropdownApi) => void;
  /** Подпись списка для экранных дикторов (aria-label). */
  ariaLabel?: string;
  /** Вызывается после открытия Dropdown. */
  onOpen?: () => void;
  /** Вызывается после закрытия Dropdown любым способом. */
  onClose?: () => void;
};

/**
 * Пункты Dropdown: готовый массив (`items`) или функция (`getItems`), которая
 * возвращает пункты сразу или промисом. Пока промис не выполнился, список
 * показывает `loadingItems`, при ошибке `renderError`. Задаётся что-то одно.
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

/** Проп `dropdown` на Canvas-элементах. */
export type CanvasNodeDropdownConfig = CanvasNodeDropdownProps &
  CanvasNodeDropdownItems;

export function isCanvasNodeDropdownConfig(
  value: unknown,
): value is CanvasNodeDropdownConfig {
  if (!value || typeof value !== 'object') return false;
  const config = value as Record<string, unknown>;
  return (
    Array.isArray(config['items']) || typeof config['getItems'] === 'function'
  );
}
