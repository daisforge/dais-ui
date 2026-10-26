import type {
  CanvasNodeDropdownConfig,
  CanvasNodeDropdownProps,
} from '@ui-kit/components/TableGlide';

/**
 * Конфиг дропдауна после наложения дефолтов из tableConfig.dropdown.
 * Именно его получает переходник на атомарный Dropdown (CanvasDropdown).
 */
export type ResolvedCanvasDropdownConfig = Required<
  Pick<
    CanvasNodeDropdownProps,
    | 'trigger'
    | 'mouseEnterDelay'
    | 'mouseLeaveDelay'
    | 'placement'
    | 'offset'
    | 'variant'
    | 'zIndex'
    | 'closeOnSelect'
    | 'closeOnScroll'
    | 'closeOnOutsideClick'
    | 'closeOnEsc'
    | 'loadingItems'
  >
> &
  Pick<
    CanvasNodeDropdownProps,
    | 'listWidth'
    | 'listMaxHeight'
    | 'size'
    | 'renderItem'
    | 'beforeList'
    | 'afterList'
    | 'renderError'
    | 'onItemSelect'
    | 'ariaLabel'
    | 'onOpen'
    | 'onClose'
  > & {
    items?: CanvasNodeDropdownConfig['items'];
    getItems?: CanvasNodeDropdownConfig['getItems'];
  };
