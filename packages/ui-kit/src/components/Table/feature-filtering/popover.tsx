import { Box } from '@ui-kit/components/Box';
import { PopoverBeta } from '@ui-kit/components/PopoverBeta';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';

const StyledPopover = styled(PopoverBeta)`
  &.popover-root {
    padding: 0;
  }
`;

export const PopoverX = ({
  opened,
  setIsOpen,
  children,
  popoverInnerCss,
  ...restPopoverProps
}: ComponentProps<typeof StyledPopover> & {
  setIsOpen: (v: boolean) => void;
  popoverInnerCss?: string;
}) => (
  <StyledPopover
    opened={opened}
    onToggle={setIsOpen}
    id="popover"
    flip
    shift
    offset={6}
    hasArrow={false}
    {...restPopoverProps}
  >
    <Box $css={popoverInnerCss}>{children}</Box>
  </StyledPopover>
);
