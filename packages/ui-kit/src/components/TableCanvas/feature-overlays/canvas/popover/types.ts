import type {
  CanvasNodePopoverConfig,
  CanvasNodePopoverProps,
} from '@ui-kit/components/TableGlide';

/**
 * Настройки Popover вместе со значениями по умолчанию из tableConfig.popover.
 * Их получает CanvasPopover.
 */
export type ResolvedCanvasPopoverConfig = Required<
  Pick<
    CanvasNodePopoverProps,
    | 'placement'
    | 'offset'
    | 'hasTail'
    | 'flip'
    | 'shift'
    | 'zIndex'
    | 'closeOnScroll'
    | 'closeOnOutsideClick'
    | 'closeOnEsc'
    | 'trigger'
    | 'mouseEnterDelay'
    | 'mouseLeaveDelay'
  >
> &
  Pick<
    CanvasNodePopoverProps,
    'resizable' | 'ariaLabel' | 'onOpen' | 'onClose'
  > & {
    content?: CanvasNodePopoverConfig['content'];
    renderContent?: CanvasNodePopoverConfig['renderContent'];
  };
