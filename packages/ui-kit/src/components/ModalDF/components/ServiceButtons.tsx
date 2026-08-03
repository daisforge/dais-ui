import { Box } from '@ui-kit/components/Box';
import { IconButton } from '@ui-kit/components/IconButton';
import { s } from '@ui-kit/constants';
import { IconClose, IconFullscreenOff, IconFullscreenOn } from '@ui-kit/icons';
import { surfaceSolidCard } from '@ui-kit/tokens';
import React, { ComponentProps, useContext } from 'react';
import styled from 'styled-components';

import { cls } from '../classNames';
import { FullScreenedCtx, FullScreenedToggleCtx, OnCloseCtx } from '../ctxs';

/** компонент скрывается, если компонент вставлен внутрь [`StyledLeft`](../styled.ts) */
export const StyledServiceButtons = styled(Box).attrs({
  className: cls.serviceButtons,
})<{ hasBackground?: boolean }>`
  display: inline-flex;
  column-gap: ${s.x2};
  background-color: ${({ hasBackground }) =>
    hasBackground ? surfaceSolidCard : 'transparent'};
`;
export type ModalDFServiceButtonsProps = ComponentProps<
  typeof StyledServiceButtons
>;

export const ServiceButtons = ({
  hasBackground = true,
  ...restProps
}: ModalDFServiceButtonsProps) => {
  const fullScreened = useContext(FullScreenedCtx);
  const toggleFullScreened = useContext(FullScreenedToggleCtx);
  const onClose = useContext(OnCloseCtx);

  const fullScreenEnabled = fullScreened !== null;

  const IconFullS = fullScreened ? IconFullscreenOff : IconFullscreenOn;

  return (
    <StyledServiceButtons hasBackground={hasBackground} {...restProps}>
      {fullScreenEnabled && (
        <IconButton
          onClick={toggleFullScreened ?? undefined}
          size="xs"
          view="secondary"
          pin="circle-circle"
          title={
            fullScreened ? 'Выйти из полноэкранного режима' : 'На весь экран'
          }
        >
          <IconFullS size="xs" />
        </IconButton>
      )}
      <IconButton
        onClick={onClose ?? undefined}
        size="xs"
        view="secondary"
        pin="circle-circle"
        title="Закрыть"
      >
        <IconClose size="xs" />
      </IconButton>
    </StyledServiceButtons>
  );
};
