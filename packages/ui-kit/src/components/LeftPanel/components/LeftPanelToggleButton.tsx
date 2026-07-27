import { IconArrowBarDown } from '@ui-kit/icons';

import { toggleButtonClassNames as cls } from '../LeftPanel.classname';
import type { ToggleButtonProps } from '../LeftPanel.types';
import { PanelIconButton } from '../styled';

export const LeftPanelToggleButton = ({
  onClick,
  collapsed = false,
  isAbsolute = false,
  isAdaptive1280 = false,
  ...rest
}: ToggleButtonProps) => (
  <PanelIconButton
    onClick={onClick}
    $isAdaptive1280={isAdaptive1280}
    collapsed={collapsed}
    isAbsolute={isAbsolute}
    view="secondary"
    size={isAdaptive1280 ? 's' : 'l'}
    {...rest}
  >
    <IconArrowBarDown className={cls.icon} />
  </PanelIconButton>
);
