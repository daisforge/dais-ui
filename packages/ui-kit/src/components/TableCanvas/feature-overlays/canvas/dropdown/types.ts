import type {
  CanvasNodeDropdownConfig,
  CanvasNodeDropdownProps,
} from '@ui-kit/components/TableGlide';

/** Конфиг Dropdown с подставленными значениями по умолчанию, его получает CanvasDropdown. */
export type ResolvedCanvasDropdownConfig = Required<
  Pick<
    CanvasNodeDropdownProps,
    | 'trigger'
    | 'mouseEnterDelay'
    | 'mouseLeaveDelay'
    | 'placement'
    | 'offset'
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
    | 'variant'
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
