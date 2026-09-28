import { Popup } from '@ui-kit/components/Popup';
import {
  buildPopupResizableConfig,
  ResizableCorner,
} from '@ui-kit/shared/utils/resizable';
import type { ComponentProps } from 'react';

type PopupResizableProp = ComponentProps<typeof Popup>['resizable'];

const getResizableCornerFromPopupPlacement = (
  placement?: ComponentProps<typeof Popup>['placement'],
): ResizableCorner => {
  switch (placement) {
    case 'top-left':
    case 'top':
    case 'left':
      return 'bottom-right';
    case 'top-right':
    case 'right':
      return 'bottom-left';
    case 'bottom-left':
    case 'bottom':
      return 'top-right';
    case 'bottom-right':
      return 'top-left';
    case 'center':
    case undefined:
    default:
      return 'bottom-right';
  }
};

export const getPopupDFResizableConfig = (
  resizable: PopupResizableProp,
  placement?: ComponentProps<typeof Popup>['placement'],
): PopupResizableProp =>
  buildPopupResizableConfig(resizable, {
    corner: getResizableCornerFromPopupPlacement(placement),
    minWidth: 240,
    minHeight: 120,
  });
