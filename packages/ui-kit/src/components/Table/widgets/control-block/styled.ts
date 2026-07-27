import { Box } from '@ui-kit/components/Box';
import { getTextWidth } from '@ui-kit/utils';
import styled, { css } from 'styled-components';

import {
  COLORS,
  DURATION,
  HEIGHT_CONTROL_BLOCK,
  TABLE_BORDER_RADIUS
} from '../../styles';
import { ActiveViewModsType } from '../../types';
import { controlBlockClassNames as cls } from './control-block.classnames';
import { CONTROL_BLOCK } from './control-block.constants';

export const ControlBlockStyled = styled(Box)<{
  $activeView: ActiveViewModsType;
  $borderTopRounded: boolean;
  $isVisibleSearching: boolean | undefined;
  $calculatedSearchQuery: string | undefined;
  $placeholderSearchBlock: string;
  $collapsedTable: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${HEIGHT_CONTROL_BLOCK}px;
  max-height: ${HEIGHT_CONTROL_BLOCK}px;
  padding-inline: ${CONTROL_BLOCK.paddingInline}px;

  border: 1px solid;
  border-bottom: ${({ $collapsedTable }) =>
    $collapsedTable ? '1px solid' : 'none'};
  border-radius: ${({ $borderTopRounded, $collapsedTable }) => {
    const border = $borderTopRounded ? TABLE_BORDER_RADIUS : 0;

    return css`
      ${border}px
      ${border}px 
      ${$collapsedTable ? TABLE_BORDER_RADIUS : 0}px 
      ${$collapsedTable ? TABLE_BORDER_RADIUS : 0}px
    `;
  }};
  transition: all ${DURATION}s ease;
  ${({ $activeView }) =>
    css({
      ...($activeView === 'rows' && {
        backgroundColor: COLORS.white,
        borderColor: COLORS.border
      }),
      ...($activeView === 'cards' && {
        borderColor: 'transparent'
      })
      // ...($collapsedTable && {
      //   boxSizing: 'content-box',
      // }),
    })}

  overflow-y: hidden;

  ${({ $isVisibleSearching, $calculatedSearchQuery }) =>
    $isVisibleSearching &&
    css`
      justify-content: unset;

      & .${cls.searchControlBlock} {
        margin-left: 6px;
        ${() => {
          const { font, indent, letterSpacing } = CONTROL_BLOCK.searching;
          const text = $calculatedSearchQuery || '';
          const textWidth = getTextWidth(text, font, letterSpacing);

          if (!$calculatedSearchQuery || $calculatedSearchQuery.length === 0) {
            return css`
              width: 100%;
              min-width: 250px;
            `;
          }
          const currentIndent = indent;
          return css`
            width: min(calc(${textWidth + 25}px + ${currentIndent}px), 100%);
            min-width: 40px;
          `;
        }}
      }

      & .${cls.rightControlBlock} {
        margin-left: auto;
      }
    `}
`;
export const LefSideStyled = styled(Box).attrs({
  className: cls.leftControlBlock
})`
  display: flex;
`;
