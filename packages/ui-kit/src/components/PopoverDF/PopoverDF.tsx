import type { ComponentProps } from 'react';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';

import { PopoverBeta } from '../PopoverBeta';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PopoverDFContext } from './ctxs';
import { StyledContainer, StyledPopover } from './styled';
import type { PopoverDFProps } from './types';
import { getPopoverDFResizableConfig } from './utils';

type PopoverBetaCompProps = ComponentProps<typeof PopoverBeta>;

const PopoverDFWithRef = forwardRef<HTMLDivElement, PopoverDFProps>(
  (
    {
      children,
      opened: openedExternal,
      defaultOpened = false,
      onToggle,
      size = 'm',
      placement,
      hasTail = true,
      resizable,
      target,
      ...rest
    },
    ref
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
      [onToggle, openedExternal]
    );

    const handleClose = useCallback(() => {
      handleToggle(false);
    }, [handleToggle]);

    const resolvedPlacement = (placement ??
      'bottom') as PopoverBetaCompProps['placement'];

    const computedResizable = useMemo(
      () => getPopoverDFResizableConfig(resizable, resolvedPlacement),
      [resizable, resolvedPlacement]
    );

    const contextOnClose =
      openedExternal === undefined || onToggle ? handleClose : null;
    const contextValue = useMemo(
      () => ({ onClose: contextOnClose, size }),
      [contextOnClose, size]
    );

    const content = <StyledContainer $size={size}>{children}</StyledContainer>;

    return (
      <PopoverDFContext.Provider value={contextValue}>
        <StyledPopover
          {...rest}
          ref={ref}
          target={target}
          opened={opened}
          onToggle={handleToggle}
          size={size}
          placement={resolvedPlacement}
          resizable={computedResizable as PopoverBetaCompProps['resizable']}
          hasTail={hasTail}
        >
          {content}
        </StyledPopover>
      </PopoverDFContext.Provider>
    );
  }
);

export const PopoverDF = Object.assign(PopoverDFWithRef, {
  Header,
  Body,
  Footer
});

PopoverDF.displayName = 'PopoverDF';
