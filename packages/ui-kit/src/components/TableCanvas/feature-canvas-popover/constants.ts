import { POPOVER_Z_INDEX } from '../feature-popover-table/constants';
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

/** Запас вокруг элемента и Popover при проверке, где курсор (px). */
export const HOVER_ANCHOR_GAP = 4;
