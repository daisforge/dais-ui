import { Box } from '@ui-kit/components/Box';
import styled, { css } from 'styled-components';

import { SIZE, SIZES } from '../styles';
import { overflowDotsStyle } from '../utils';
import { CLASS } from './constants';

const containerStyles = css`
  height: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
`;

const cellContentStyles = css({
  ...overflowDotsStyle,
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 0,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'inline-block',
});

const expandButtonStyles = css`
  margin-left: auto;
  flex-shrink: 0;
`;
const DEF_PADDING_LVL = 24;
const WIDTH_ICON_AND_PADDINGRIGHT = 8;

const getPaddingLeft = ({ $lvl, $hasChildren }: SubRowContainerProps) =>
  DEF_PADDING_LVL * $lvl + ($hasChildren ? 0 : WIDTH_ICON_AND_PADDINGRIGHT);

const getPaddingLeftForArrowColumnInEditingMode = ({
  $editingMode,
}: SubRowContainerProps) => {
  if (!$editingMode) {
    return '0px';
  }
  const { $rowSize, $columnHasArrow } = $editingMode;
  return $columnHasArrow ? SIZES?.[$rowSize]?.cell?.['padding-inline'] : '0px';
};

type SubRowContainerProps = {
  $lvl: number; // уровни вложенности начинаются с 0
  $hasChildren: boolean | undefined;
  $editingMode:
    | false
    | {
        $columnHasArrow: boolean | undefined;
        $rowSize: SIZE;
      };
};
export const SubRowContainer = styled.div<SubRowContainerProps>`
  ${containerStyles}
  padding-left: calc(${getPaddingLeft}px + ${getPaddingLeftForArrowColumnInEditingMode});
  & span.${CLASS.cellContent} {
    ${cellContentStyles}
  }

  & .${CLASS.cellContent}.${CLASS.subRowCell} {
    display: inline-flex;
  }

  & .${CLASS.expandDetailButton} {
    ${expandButtonStyles}
  }
`;

export const StyledCellContainer = styled(Box)`
  ${containerStyles}
  justify-content: space-between;

  & span.${CLASS.cellContent} {
    ${cellContentStyles}
  }

  & .${CLASS.cellContent}.${CLASS.subRowCell} {
    display: inline-flex;
  }

  & .${CLASS.expandDetailButton} {
    ${expandButtonStyles}
  }
`;
