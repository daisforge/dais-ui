import { Box } from '@ui-kit/components/Box';
import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { useTableCollapse } from '../contexts';
import {
  COLORS,
  DURATION,
  HEIGHT_CONTROL_BLOCK,
  TABLE_BORDER_RADIUS,
} from '../styles';
import { ActiveViewModsType } from '../types';
import { CollapseTableButton } from './CollapseTableButton';

const CollapseBlockAboveStyled = styled(Box)<{
  $activeView: ActiveViewModsType;
  $borderTopRounded: boolean;
  $collapsedTable: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 8px;

  height: ${HEIGHT_CONTROL_BLOCK}px;
  max-height: ${HEIGHT_CONTROL_BLOCK}px;

  border: 1px solid;
  border-bottom: ${({ $collapsedTable }) =>
    $collapsedTable ? '1px solid' : 'none'};

  // Скругления: при открытой таблице - сверху, при закрытой - везде
  border-radius: ${({ $borderTopRounded, $collapsedTable }) => {
    const topBorder = $borderTopRounded ? TABLE_BORDER_RADIUS : 0;
    const bottomBorder = $collapsedTable ? TABLE_BORDER_RADIUS : 0;

    return css`
      ${topBorder}px
      ${topBorder}px 
      ${bottomBorder}px 
      ${bottomBorder}px
    `;
  }};

  transition: all ${DURATION}s ease;

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

export type CollapseBlockAboveProps = {
  activeView: ActiveViewModsType;
  $borderTopRounded: boolean;
  rightSlot?: ReactNode;
};

/**
 * Отдельный блок для кнопки коллапсинга таблицы, размещаемый сверху контрол-блока
 * Используется когда collapseButtonPlacement = 'above'
 */
export const CollapseBlockAbove: FC<CollapseBlockAboveProps> = ({
  activeView,
  $borderTopRounded,
  rightSlot,
}) => {
  const { isCollapsed, enableCollapse } = useTableCollapse();

  // Не рендерим если коллапс отключен
  if (!enableCollapse) return null;

  return (
    <CollapseBlockAboveStyled
      $activeView={activeView}
      $borderTopRounded={$borderTopRounded}
      $collapsedTable={isCollapsed}
    >
      <CollapseTableButton />
      {rightSlot && rightSlot}
    </CollapseBlockAboveStyled>
  );
};
