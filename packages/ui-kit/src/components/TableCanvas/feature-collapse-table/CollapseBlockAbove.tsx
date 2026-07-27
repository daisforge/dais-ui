import { Box } from '@ui-kit/components/Box';
import { bodySBold, bodyXSBold } from '@ui-kit/tokens';
import React, { FC, ReactNode } from 'react';
import styled, { css, CSSObject } from 'styled-components';

import { useTableCollapse } from '../contexts';
import {
  COLLAPSE_DECOR_DELAY,
  COLLAPSE_DECOR_FADE,
  COLORS,
  DURATION,
  TABLE_BORDER_RADIUS
} from '../styles';
import { ActiveViewModsType, ControlBlockSize } from '../types';
import {
  getControlBlockHeight,
  getControlBlockSizeMap
} from '../widgets/control-block/control-block.constants';
import { CollapseTableButton } from './CollapseTableButton';

const CollapseBlockAboveStyled = styled(Box)<{
  $activeView: ActiveViewModsType;
  $borderTopRounded: boolean;
  $collapsedTable: boolean;
  $height: number;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 8px;

  height: ${({ $height }) => $height}px;
  max-height: ${({ $height }) => $height}px;

  /* Бордер всегда 1px (стабильная геометрия, без дёрганья). Видимость нижнего
     бордера решаем цветом ниже, с задержкой. */
  border: 1px solid;

  border-radius: ${({ $borderTopRounded, $collapsedTable }) => {
    const top = $borderTopRounded ? TABLE_BORDER_RADIUS : 0;
    const bottom = $collapsedTable ? TABLE_BORDER_RADIUS : 0;

    return css`
      ${top}px ${top}px ${bottom}px ${bottom}px
    `;
  }};

  /* Декор кромки переключаем с задержкой при сворачивании (ждём, пока тело и
     контрл-блок схлопнутся, и блок станет нижней кромкой) и мгновенно при
     разворачивании. */
  transition: ${({ $collapsedTable }) => {
    const delay = $collapsedTable ? COLLAPSE_DECOR_DELAY : 0;
    return css`
      all ${DURATION}s ease,
      border-radius 0s linear ${delay}s,
      border-bottom-color ${COLLAPSE_DECOR_FADE}s ease ${delay}s
    `;
  }};

  ${({ $activeView }) =>
    css({
      ...($activeView === 'rows' && {
        backgroundColor: COLORS.white,
        borderColor: COLORS.border
      }),
      ...($activeView === 'cards' && {
        borderColor: 'transparent'
      })
    })}
  border-bottom-color: ${({ $collapsedTable, $activeView }) =>
    $collapsedTable && $activeView === 'rows' ? COLORS.border : 'transparent'};

  overflow-y: hidden;
`;

const TITLE_TYPOGRAPHY: Record<ControlBlockSize, CSSObject> = {
  m: bodySBold as unknown as CSSObject,
  s: bodySBold as unknown as CSSObject,
  xs: bodyXSBold as unknown as CSSObject
};

const TitleText = styled.div<{ $size: ControlBlockSize }>`
  display: inline-block;
  ${({ $size }) => css(TITLE_TYPOGRAPHY[$size])}
`;

export type CollapseBlockAboveProps = {
  activeView: ActiveViewModsType;
  $borderTopRounded: boolean;
  rightSlot?: ReactNode;
  size?: ControlBlockSize;
};

/**
 * Блок сверху контрол-блока. Рендерит кнопку коллапсинга и/или заголовок.
 * Используется когда collapseButtonPlacement = 'above'
 */
export const CollapseBlockAbove: FC<CollapseBlockAboveProps> = ({
  activeView,
  $borderTopRounded,
  rightSlot,
  size = 'm'
}) => {
  const { isCollapsed, enableCollapse, titleText, titleRender } =
    useTableCollapse();

  const hasTitle = !!(titleText || titleRender);
  const height = getControlBlockHeight(size);
  const sizeMap = getControlBlockSizeMap(size);

  if (!enableCollapse && !hasTitle) return null;

  return (
    <CollapseBlockAboveStyled
      $activeView={activeView}
      $borderTopRounded={$borderTopRounded}
      $collapsedTable={isCollapsed}
      $height={height}
    >
      {enableCollapse ? (
        <CollapseTableButton
          buttonSize={sizeMap.collapsingButton}
          iconSize={sizeMap.collapsingIcon}
        />
      ) : (
        titleRender || <TitleText $size={size}>{titleText}</TitleText>
      )}
      {rightSlot && rightSlot}
    </CollapseBlockAboveStyled>
  );
};
