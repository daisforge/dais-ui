import { Box } from '@ui-kit/components/Box';
import { bodySBold, bodyXSBold } from '@ui-kit/tokens';
import React, { FC, ReactNode } from 'react';
import styled, { css, CSSObject } from 'styled-components';

import { COLORS, HEIGHT_CONTROL_BLOCK, TABLE_BORDER_RADIUS } from '../styles';
import { ActiveViewModsType, ControlBlockSize } from '../types';

const TitleBlockStyled = styled(Box)<{
  $activeView: ActiveViewModsType;
  $borderTopRounded: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 16px;

  height: ${HEIGHT_CONTROL_BLOCK}px;
  max-height: ${HEIGHT_CONTROL_BLOCK}px;

  border: 1px solid;
  border-bottom: none;

  border-radius: ${({ $borderTopRounded }) => {
    const r = $borderTopRounded ? TABLE_BORDER_RADIUS : 0;
    return css`
      ${r}px ${r}px 0px 0px
    `;
  }};

  ${({ $activeView }) =>
    css({
      ...($activeView === 'rows' && {
        backgroundColor: COLORS.white,
        borderColor: COLORS.border,
      }),
      ...($activeView === 'cards' && {
        borderColor: 'transparent',
      }),
    })}

  overflow-y: hidden;
`;

const TITLE_TYPOGRAPHY: Record<ControlBlockSize, CSSObject> = {
  m: bodySBold as unknown as CSSObject,
  s: bodySBold as unknown as CSSObject,
  xs: bodyXSBold as unknown as CSSObject,
};

const TitleText = styled.span<{ $size: ControlBlockSize }>`
  ${({ $size }) => css(TITLE_TYPOGRAPHY[$size])}
`;

export type TitleBlockProps = {
  activeView: ActiveViewModsType;
  $borderTopRounded: boolean;
  text: ReactNode;
  rightSlot?: ReactNode;
  size?: ControlBlockSize;
};

export const TitleBlock: FC<TitleBlockProps> = ({
  activeView,
  $borderTopRounded,
  text,
  rightSlot,
  size = 'm',
}) => (
  <TitleBlockStyled
    $activeView={activeView}
    $borderTopRounded={$borderTopRounded}
  >
    <TitleText $size={size}>{text}</TitleText>
    {rightSlot && rightSlot}
  </TitleBlockStyled>
);
