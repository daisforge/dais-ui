import { Box } from '@ui-kit/components/Box';
import React from 'react';
import styled from 'styled-components';

import { Popover } from '../../Popover';
import { useRefTableContainerContext } from '../contexts';

const StyledPopover = styled(Popover)`
  & .popover-root {
    border-radius: 8px;
  }
`;

export const PopoverX = ({
  isOpen,
  setIsOpen,
  children,
  popoverInnerCss,
  ...restPopoverProps
}: Omit<Parameters<typeof Popover>[0], 'ref'> & {
  setIsOpen: (v: boolean) => void;
  popoverInnerCss?: string;
}) => {
  const refTableContainer = useRefTableContainerContext();

  return (
    <StyledPopover
      usePortal
      frame={refTableContainer}
      isOpen={isOpen}
      onToggle={(is) => setIsOpen(is)}
      role="presentation"
      id="popover"
      offset={[0, 6]}
      placement="bottom"
      trigger="click"
      closeOnOverlayClick
      closeOnEsc
      isFocusTrapped
      hasArrow={false}
      {...restPopoverProps}
    >
      <Box $css={popoverInnerCss}>{children}</Box>
    </StyledPopover>
  );
};
