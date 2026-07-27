import { Overlay } from '@ui-kit/components/Overlay';
import React, { ReactNode } from 'react';

import { DrawerDFPropsForStyles, DrawerProps } from '../types';
import { c as constants, StyledDrawer } from './styled';

type DrawerXProps = Omit<DrawerProps, 'ref'> &
  DrawerDFPropsForStyles & { children: ReactNode };

export const DrawerX = ({
  children,
  onOverlayClick,
  className,
  ...restProps
}: DrawerXProps) => {
  const closeOnOverlayClick = restProps.closeOnOverlayClick ?? true;

  return (
    <StyledDrawer
      className={`${className ?? ''}`}
      placement="right"
      overlay={
        <Overlay
          onOverlayClick={(e) => {
            if (closeOnOverlayClick) {
              restProps.onClose?.();
            }
            onOverlayClick?.(e);
          }}
          zIndex="9000"
          backgroundColorProperty="#060A0C47"
        />
      }
      offset={[`${constants.drawerOffset}px`, '0px']}
      asModal
      height="calc(100dvh - 32px)"
      closeOnEsc
      closeOnOverlayClick={closeOnOverlayClick}
      width="576px"
      {...restProps}
    >
      {children}
    </StyledDrawer>
  );
};
