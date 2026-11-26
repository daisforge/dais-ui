import { Box } from '@ui-kit/components/Box';
import { TextFieldSearch, textFieldTokens } from '@ui-kit/components/TextField';
import {
  bodyM,
  bodyS,
  bodyXS,
  surfaceTransparentSecondaryHover,
} from '@ui-kit/tokens';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { COLORS, type SIZE } from '../../styles';

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
    lineHeight: '16px',
    columnGap: '6px',
    minHeight: 24,
    padding: '4px 8px',
    borderRadius: '6px',
  }),
  medium: () => ({
    ...bodyS,
    lineHeight: '20px',
    columnGap: '6px',
    minHeight: 40,
    padding: '10px 12px',
    borderRadius: '8px',
  }),
  big: () => ({
    ...bodyM,
    lineHeight: '24px',
    columnGap: '8px',
    minHeight: 48,
    padding: '12px 14px',
    borderRadius: '10px',
  }),
};
export const StyledList = styled.ul<{ $maxHeight?: string }>`
  * {
    box-sizing: border-box;
  }
  padding: 0px;
  margin: 0px;
  max-height: ${({ $maxHeight }) => $maxHeight || '360px'};
  overflow-y: auto;
  overflow-x: hidden;
`;
export const StyledListItem = styled.li<{
  $css?: FlattenSimpleInterpolation;
  $size?: SIZE;
  $selected?: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: 0;
  overflow-wrap: anywhere;

  ${({ $size = 'medium', $selected }) =>
    css({
      ...listStylesMapper[$size](),
      ...($selected && {
        backgroundColor: COLORS.headerColor,
      }),
      ...(!$selected && {
        '&:hover': {
          backgroundColor: surfaceTransparentSecondaryHover,
        },
      }),
    })}
  ${({ $css }) => $css}
`;

export const StyledSearchBlockFilter = styled(TextFieldSearch)`
  && .input-wrapper {
    ${textFieldTokens.leftContentMargin}: 0 4px 0 0;
    padding-inline: 12px;
    border-radius: 8px;
  }
`;
