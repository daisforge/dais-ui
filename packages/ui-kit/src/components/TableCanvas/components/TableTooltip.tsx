import { Tooltip, TooltipProps } from '@ui-kit/components/Tooltip';

import { TABLE_TOOLTIP_MOUSE_ENTER_DELAY } from '../constants';
import { useRefTableContainerContext } from '../contexts';

interface TableTooltipProps extends Omit<TooltipProps, 'frame' | 'usePortal'> {
  children?: React.ReactNode;
}

export const TableTooltip = ({ children, ...props }: TableTooltipProps) => {
  const tableContainerRef = useRefTableContainerContext();
  return (
    <Tooltip
      trigger="hover"
      usePortal
      hasArrow
      frame={tableContainerRef}
      mouseEnterDelay={TABLE_TOOLTIP_MOUSE_ENTER_DELAY}
      {...props}
    >
      {children}
    </Tooltip>
  );
};
