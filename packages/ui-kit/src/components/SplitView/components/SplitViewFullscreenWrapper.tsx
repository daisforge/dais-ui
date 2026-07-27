import { ModalDF, ModalDFProps } from '@ui-kit/components/ModalDF';
import React from 'react';

type FullscreenWrapperProps = {
  children: React.ReactNode;
  isFullScreened: boolean | null | undefined;
  fullScreenedModalDFProps: ModalDFProps | undefined;
};
export const SplitViewFullscreenWrapper = ({
  children,
  isFullScreened,
  fullScreenedModalDFProps
}: FullscreenWrapperProps) => {
  if (!isFullScreened) {
    return children;
  }
  const modalDFFullScreenPropsObj =
    typeof fullScreenedModalDFProps?.fullScreen === 'object'
      ? fullScreenedModalDFProps.fullScreen
      : undefined;

  return (
    <ModalDF
      opened
      closeOnOverlayClick={false}
      {...fullScreenedModalDFProps}
      fullScreen={{
        ...modalDFFullScreenPropsObj,
        defaultEnabled: true
      }}
    >
      {children}
    </ModalDF>
  );
};
