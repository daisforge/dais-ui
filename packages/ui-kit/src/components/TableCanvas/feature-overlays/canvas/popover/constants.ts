import { POPOVER_Z_INDEX } from '../../constants';
import type { ResolvedCanvasPopoverConfig } from './types';

/** Значения по умолчанию, если их не задали ни на элементе, ни в tableConfig.popover. */
export const POPOVER_DEFAULTS: Omit<
  ResolvedCanvasPopoverConfig,
  'content' | 'renderContent' | 'resizable' | 'ariaLabel' | 'onOpen' | 'onClose'
> = {
  placement: 'bottom-start',
  offset: 4,
  hasTail: false,
  flip: true,
  shift: true,
  zIndex: POPOVER_Z_INDEX,
  closeOnScroll: true,
  closeOnOutsideClick: true,
  closeOnEsc: true,
  trigger: 'click',
  mouseEnterDelay: 300,
  mouseLeaveDelay: 200,
};
