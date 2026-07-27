import { Box, BoxProps } from '@ui-kit/components/Box';
import { IconButton } from '@ui-kit/components/IconButton';
import { s } from '@ui-kit/constants';
import { IconClose, IconFullscreenOff, IconFullscreenOn } from '@ui-kit/icons';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import { widgetClassNames as cls } from '../Widget.classNames';
import { useWidgetContainerTypeContext } from '../Widget.ctx';

/** компонент скрывается, если компонент вставлен внутрь [`StyledLeft`](../styled.ts) */
export const StyledServiceButtons: typeof Box = styled(Box).attrs({
  className: cls.serviceButtons
})`
  display: inline-flex;
  column-gap: ${() => s.x2};
`;

export const WidgetServiceButtons = ({
  fullScreened,
  toggleFullScreened,
  onClose,
  iconButtonsPin,
  ...restProps
}: BoxProps & {
  iconButtonsPin?: ComponentProps<typeof IconButton>['pin'];
  fullScreened?: boolean | null;
  toggleFullScreened?: () => void;
  onClose?: undefined | (() => void);
}) => {
  const fullScreenEnabled = typeof fullScreened === 'boolean';

  const contextContainerType = useWidgetContainerTypeContext();

  const iconButtonPinLast: NonNullable<typeof iconButtonsPin> =
    iconButtonsPin ??
    (contextContainerType === 'splitView' ? 'square-square' : 'circle-circle');

  const IconFullS = fullScreened ? IconFullscreenOff : IconFullscreenOn;

  return (
    <StyledServiceButtons {...restProps}>
      {fullScreenEnabled && (
        <IconButton
          onClick={toggleFullScreened ?? undefined}
          size="xs"
          view="secondary"
          pin={iconButtonPinLast}
          title={
            fullScreened ? 'Выйти из полноэкранного режима' : 'На весь экран'
          }
        >
          <IconFullS size="xs" />
        </IconButton>
      )}
      {onClose && (
        <IconButton
          onClick={onClose}
          size="xs"
          view="secondary"
          pin={iconButtonPinLast}
          title="Закрыть"
        >
          <IconClose size="xs" />
        </IconButton>
      )}
    </StyledServiceButtons>
  );
};
