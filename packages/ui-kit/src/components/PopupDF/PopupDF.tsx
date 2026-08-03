import { forwardRef, useCallback, useMemo, useState } from 'react';

import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PopupDFContext } from './ctxs';
import { StyledContainer, StyledPopup } from './styled';
import type { PopupDFProps } from './types';
import { getPopupDFResizableConfig } from './utils';

const PopupDFWithRef = forwardRef<HTMLDivElement, PopupDFProps>(
  (
    {
      children,
      opened: openedExternal,
      defaultOpened = false,
      onToggle,
      size = 'm',
      placement = 'center',
      resizable,
      ...rest
    },
    ref,
  ) => {
    const [openedInternal, setOpenedInternal] = useState(defaultOpened);
    const opened =
      openedExternal === undefined ? openedInternal : openedExternal;

    const handleToggle = useCallback(
      (nextOpened: boolean) => {
        if (openedExternal === undefined) {
          setOpenedInternal(nextOpened);
        }

        onToggle?.(nextOpened);
      },
      [onToggle, openedExternal],
    );

    const handleClose = useCallback(() => {
      handleToggle(false);
    }, [handleToggle]);

    const computedResizable = useMemo(
      () => getPopupDFResizableConfig(resizable, placement),
      [placement, resizable],
    );

    const contextOnClose =
      openedExternal === undefined || onToggle ? handleClose : null;
    const contextValue = useMemo(
      () => ({ onClose: contextOnClose, size }),
      [contextOnClose, size],
    );

    return (
      <PopupDFContext.Provider value={contextValue}>
        <StyledPopup
          {...rest}
          ref={ref}
          isOpen={false}
          opened={opened}
          placement={placement}
          resizable={computedResizable}
        >
          <StyledContainer $size={size}>{children}</StyledContainer>
        </StyledPopup>
      </PopupDFContext.Provider>
    );
  },
);

export const PopupDF = Object.assign(PopupDFWithRef, {
  Header,
  Body,
  Footer,
});

PopupDF.displayName = 'PopupDF';
