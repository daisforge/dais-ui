import { Box } from '@ui-kit/components/Box';
import styled, { css } from 'styled-components';

import { SIZE, SIZES } from '../styles';
import { overflowDotsStyle } from '../utils';
import { CLASS, CSS_VARIABLES } from './constants';
import { getSubRowLvlIndent } from './styleConstants';

const containerStyles = css`
  height: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  overflow-x: hidden;
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
// Тот же шаг, что и в canvas-рендере, чтобы редактор не смещал контент
const getPaddingLeft = ({ $lvl, $editingMode }: SubRowContainerProps) =>
  getSubRowLvlIndent($lvl, $editingMode ? $editingMode.$rowSize : undefined);

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
  $editingMode:
    | false
    | {
        $columnHasArrow: boolean | undefined;
        $rowSize: SIZE;
      };
};
export const SubRowContainer = styled.div<SubRowContainerProps>`
  ${containerStyles}
  ${CSS_VARIABLES.subrowContainerPaddingLeft}: calc(${getPaddingLeft}px + ${getPaddingLeftForArrowColumnInEditingMode});
  padding-left: var(${CSS_VARIABLES.subrowContainerPaddingLeft});
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
