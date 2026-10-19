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
import type {
  TableCanvasLoggerItem,
  TableCanvasLoggerStatus,
} from '../TableCanvasLogger.types';

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
  item?: TableCanvasLoggerItem;
};

export const TableCanvasLoggerStatusIcon: FC<
  TableCanvasLoggerStatusIconProps
> = ({ status, item }) => {
  const { statusIcons, renderStatusIcon } = useTableCanvasLoggerContext();

  if (renderStatusIcon && item) return renderStatusIcon(status, item);
  return statusIcons?.[status] ?? getDefaultStatusIcon(status);
};
