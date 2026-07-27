import styled from 'styled-components';

import { Tooltip } from '../Tooltip';

export const StyledTooltip = styled(Tooltip)`
  &.popover-target {
    width: 100%;
  }
`;

export const StyleTooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;

  & .popover-target {
    width: 100%;
  }

  & .popover-wrapper {
    overflow: hidden;
    width: 100%;
    display: flex;
  }
`;
