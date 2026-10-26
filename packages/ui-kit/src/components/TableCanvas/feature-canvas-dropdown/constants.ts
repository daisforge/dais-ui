import { POPOVER_Z_INDEX } from '../feature-popover-table/constants';
import type { ResolvedCanvasDropdownConfig } from './types';

/** Пункт-заглушка, пока getItems не разрешился. */
export const DROPDOWN_LOADING_ITEM_VALUE = '__canvas-dropdown-loading';

/** Пункт-заглушка, если getItems завершился ошибкой. */
export const DROPDOWN_ERROR_ITEM_VALUE = '__canvas-dropdown-error';

/** Значения по умолчанию, когда ни конфиг элемента, ни tableConfig.dropdown их не задали. */
export const DROPDOWN_DEFAULTS: Pick<
  ResolvedCanvasDropdownConfig,
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
> = {
  trigger: 'click',
  mouseEnterDelay: 300,
  mouseLeaveDelay: 200,
  placement: 'bottom',
  offset: [0, 4],
  variant: 'normal',
  zIndex: POPOVER_Z_INDEX,
  closeOnSelect: true,
  closeOnScroll: true,
  closeOnOutsideClick: true,
  closeOnEsc: true,
  loadingItems: [
    {
      value: DROPDOWN_LOADING_ITEM_VALUE,
      label: 'Загрузка...',
      disabled: true,
    },
  ],
};
