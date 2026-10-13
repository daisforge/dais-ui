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

import { useLoggerContext } from '../Logger.context';
import type { LoggerItem, LoggerStatus } from '../Logger.types';

const defaultStatusIcons: Record<LoggerStatus, ReactNode> = {
  error: <IconCloseCircleFill size="xs" color={textNegative} />,
  warning: <IconAttentionTriangleFill size="xs" color={textWarning} />,
  success: <IconDoneCircleFill size="xs" color={textPositive} />,
  info: <IconInfoCircleFill size="xs" color={textTertiary} />,
};

export type LoggerStatusIconProps = {
  status: LoggerStatus;
  item?: LoggerItem;
};

export const LoggerStatusIcon: FC<LoggerStatusIconProps> = ({
  status,
  item,
}) => {
  const { statusIcons, renderStatusIcon } = useLoggerContext();

  if (renderStatusIcon && item) return renderStatusIcon(status, item);
  return statusIcons?.[status] ?? defaultStatusIcons[status];
};
