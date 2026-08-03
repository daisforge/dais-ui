/* eslint-disable @typescript-eslint/no-use-before-define */
import { Modal } from '@ui-kit/components/Modal';
import { PopupProvider } from '@ui-kit/components/Popup';
import { forwardRef } from 'react';

import { cls } from './classNames';
import { BackIconButton } from './components/BackIconButton';
import { Divider } from './components/Divider';
import { DotsIconButton } from './components/DotsIconButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ServiceButtons } from './components/ServiceButtons';
import { defProps } from './constants';
import { CtxsProviders } from './ctxs';
import { hasLeftAndMainHandler } from './handlers/hasLeftAndMainHandler';
import { useFullScreened } from './hooks/useFullScreened';
import {
  StyledContainer,
  StyledContent,
  StyledLeft,
  StyledMain,
} from './styled';
import type { ModalDFProps } from './types';

const ModalDFWithRef = forwardRef<HTMLDivElement, ModalDFProps>(
  (props, ref) => {
    const { fullScreen, contentContainerProps, children, ...rest } = props;

    const { fullScreened, toggleFullScreen } = useFullScreened(
      fullScreen,
      rest.opened,
    );

    const hasLeftAndMain = hasLeftAndMainHandler(children);

    const contProps = hasLeftAndMain
      ? ({ split: true, view: '30/70' } as const)
      : { stretch: true };

    // доп обертка <div> - нужна для появления скролла у нужного элемента (Main)
    const content = hasLeftAndMain ? children : <div>{children}</div>;

    return (
      <PopupProvider>
        <CtxsProviders
          {...{
            onClose: rest.onClose,
            fullScreened,
            toggleFullScreen,
          }}
        >
          <Modal ref={ref} {...{ ...defProps(props), ...rest }}>
            <StyledContainer
              className={cls.container}
              $fullScreened={!!fullScreened}
              roundedInner={false}
              {...contProps}
              {...contentContainerProps}
            >
              {/* as never - из-за строгой типизации Container */}
              {content as never}
            </StyledContainer>
          </Modal>
        </CtxsProviders>
      </PopupProvider>
    );
  },
);

export const ModalDF = Object.assign(ModalDFWithRef, {
  Left: StyledLeft,
  Main: StyledMain,
  Header,
  Footer,
  Content: StyledContent,
  Divider,
  ServiceButtons,
  DotsIconButton,
  BackIconButton,
});

ModalDF.displayName = 'ModalDF';
