import { Box } from '@ui-kit/components/Box';
import { SIZE } from '@ui-kit/components/Table';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { bodyM, bodyS, bodyXS } from '@ui-kit/tokens';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { COLORS } from '../../styles';

export const StyledTotalListItemContainer = styled(Box)<{
  $listIsNonEmpty: boolean;
  $beforeList: boolean;
}>`
  background-color: ${COLORS.white};
  /* закомментировано, пока beforeList не sticky
  position: sticky;
  top: 0;
  z-index: 1; */
  position: relative;
  ${({ $listIsNonEmpty }) =>
    $listIsNonEmpty &&
    css`
      padding-bottom: 6px;
      &::after {
        content: '';
        position: absolute;
        bottom: 3px;
        left: 0;

        width: 100%;

        border-bottom: 1px solid ${COLORS.border};
      }
    `}
  ${({ $beforeList }) =>
    $beforeList &&
    css`
      padding-top: 6px;
      &::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 0;

        width: 100%;

        border-bottom: 1px solid ${COLORS.border};
      }
    `}
`;

const listStylesMapper = {
  small: () => ({
    ...bodyXS,
    padding: '10px 12px',
    borderRadius: '6px'
  }),
  medium: () => ({
    ...bodyS,
    padding: '10px 12px',
    borderRadius: '8px'
  }),
  big: () => ({
    ...bodyM,
    padding: '10px 12px',
    borderRadius: '10px'
  })
};
export const StyledList = styled.ul<{ $maxHeight?: string }>`
  * {
    box-sizing: border-box;
  }
  padding: 0px;
  margin: 0px;
  max-height: ${({ $maxHeight }) => $maxHeight || '360px'};
  overflow-y: auto;
`;
export const StyledListItem = styled.li<{
  $css?: FlattenSimpleInterpolation;
  $size?: SIZE;
  $selected?: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;

  ${({ $size = 'medium', $selected }) =>
    css({
      ...listStylesMapper[$size](),
      ...($selected && {
        backgroundColor: COLORS.headerColor
      }),
      ...(!$selected && {
        '&:hover': {
          backgroundColor: 'var(--surface-transparent-secondary-hover)'
        }
      })
    })}
  ${({ $css }) => $css}
`;

export const StyledSearchBlockFilter = styled(TextFieldSearch)`
  && .input-wrapper {
    border-radius: 8px;
  }
`;
