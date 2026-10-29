import { POPOVER_Z_INDEX } from '../feature-popover-table/constants';
import type { ResolvedCanvasPopoverConfig } from './types';

/** Значения по умолчанию, когда ни конфиг элемента, ни tableConfig.popover их не задали. */
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

/** Запас вокруг зоны «якорь и поповер» при проверке положения курсора (px). */
export const HOVER_ANCHOR_GAP = 4;
