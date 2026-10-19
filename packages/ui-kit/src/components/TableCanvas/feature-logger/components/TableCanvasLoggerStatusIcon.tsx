import {
  IconAttentionTriangleFill,
  IconCloseCircleFill,
  IconDoneCircleFill,
  IconInfoCircleFill,
} from '@ui-kit/icons';
import {
  textNegative,
  textPositive,
  textTertiary,
  textWarning,
} from '@ui-kit/tokens';
import React, { FC, ReactNode } from 'react';

import { useTableCanvasLoggerContext } from '../TableCanvasLogger.context';
import { StyledTableCanvasLoggerStatusIcon } from '../TableCanvasLogger.styled';
import type { TableCanvasLoggerStatus } from '../TableCanvasLogger.types';

const getDefaultStatusIcon = (status: TableCanvasLoggerStatus): ReactNode => {
  switch (status) {
    case 'error':
      return <IconCloseCircleFill size="xs" color={textNegative} />;
    case 'warning':
      return <IconAttentionTriangleFill size="xs" color={textWarning} />;
    case 'success':
      return <IconDoneCircleFill size="xs" color={textPositive} />;
    default:
      return <IconInfoCircleFill size="xs" color={textTertiary} />;
  }
};

export type TableCanvasLoggerStatusIconProps = {
  status: TableCanvasLoggerStatus;
  className?: string;
};

/** Иконка статуса с подписью для скринридера (`labels[status]`) */
export const TableCanvasLoggerStatusIcon: FC<
  TableCanvasLoggerStatusIconProps
> = ({ status, className }) => {
  const { statusIcons, labels } = useTableCanvasLoggerContext();

  return (
    <StyledTableCanvasLoggerStatusIcon
      role="img"
      aria-label={labels[status]}
      className={className}
    >
      {statusIcons?.[status] ?? getDefaultStatusIcon(status)}
    </StyledTableCanvasLoggerStatusIcon>
  );
};
