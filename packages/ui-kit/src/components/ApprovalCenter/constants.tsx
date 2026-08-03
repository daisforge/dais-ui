import {
  IconCloseCircleFill,
  IconDoneCircleFill,
  IconFocusOutline,
  IconInProgressFill,
} from '@ui-kit/icons';
import {
  surfacePositive,
  surfaceTransparentSecondary,
  textNegative,
  textWarning,
} from '@ui-kit/tokens';
import { ReactElement } from 'react';

import {
  HistoryItemStatus,
  LifeCycleStatus,
  StepsItemView,
  StepStatus,
} from './ApprovalCenter.types';

export const iconByHistoryItemStatus: Record<HistoryItemStatus, ReactElement> =
  {
    DEFAULT: (
      <IconDoneCircleFill size="xs" color={surfaceTransparentSecondary} />
    ),
    WAIT: <IconFocusOutline size="xs" color={textWarning} />,
    SUCCESSFUL: <IconDoneCircleFill size="xs" color={surfacePositive} />,
    FAILURE: <IconCloseCircleFill size="xs" color={textNegative} />,
  };

export const iconByStageStatus = {
  DEFAULT: <IconDoneCircleFill size="xs" color={surfaceTransparentSecondary} />,
  WAIT: <IconInProgressFill size="xs" color={textWarning} />,
  SUCCESSFUL: <IconDoneCircleFill size="xs" color={surfacePositive} />,
  FAILURE: <IconCloseCircleFill size="xs" color={textNegative} />,
};

export const stepStatusByLifeCycleStatus: Record<LifeCycleStatus, StepStatus> =
  {
    DEFAULT: 'inactive',
    WAIT: 'active',
    SUCCESSFUL: 'completed',
    FAILURE: 'completed',
  };

export const itemViewByLifeCycleStatus: Record<LifeCycleStatus, StepsItemView> =
  {
    DEFAULT: 'default',
    WAIT: 'warning',
    SUCCESSFUL: 'positive',
    FAILURE: 'negative',
  };

export const tabNameByType = {
  LIFE_CYCLE: 'Жизненный цикл',
  HISTORY: 'История изменений',
};

export const text = {
  add: 'Добавить',
};
