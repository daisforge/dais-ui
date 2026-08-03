import { Overlay } from '@ui-kit/components/Overlay';

import { ModalDFProps } from './types';

export const defProps = (props: ModalDFProps) => {
  const closeOnOverlayClick = props.closeOnOverlayClick ?? true;
  return {
    closeOnOverlayClick,
    closeOnEsc: true,
    overlay: (
      <Overlay
        onOverlayClick={(e) => {
          // Если передан специфический обработчик onOverlayClick, вызываем только его.
          // Иначе используем общий onClose.
          if (props?.onOverlayClick) {
            props.onOverlayClick(e);
          } else if (closeOnOverlayClick) {
            props?.onClose?.();
          }
        }}
        zIndex={props.zIndexOverlay ?? '9000'}
        backgroundColorProperty="#060A0C47"
      />
    ),

    hasBody: false as true,
  } as const;
};
