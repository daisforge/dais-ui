import { outlineNegative } from '@ui-kit/tokens';
import { css } from 'styled-components';

import { tableClassNames as cls } from './classNames';
import { COLORS } from './styles.constants';

export const selectionCellBeforeEl = (
  customColor?: string,
  pos?: 'left' | 'right' | 'block' | 'top' | 'bottom'
) => css`
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${() =>
      `border${pos ? `-${pos}` : ''}: 1px solid ${
        customColor ?? COLORS.selectCellColor
      };`}
    z-index: 1;
    pointer-events: none;
  }
`;

export const selectionStyleForCell = css`
  &[aria-selected='true'] {
    ${selectionCellBeforeEl()}
  }
`;

export const editableCellStyle = css`
  &.${cls.editableCell}:not(.${cls.editingCell}) {
    background-color: ${COLORS.editableCellColor};
  }

  &:hover.${cls.editableCell}:not(.${cls.editingCell}) {
    background-color: ${COLORS.editableCellHoverColor};
  }
`;
export const editedWithErrorCellStyle = css`
  &.${cls.editedWithErrorCell}:not(.${cls.editingCell}):not(
      [aria-selected='true']
    ) {
    ${() => selectionCellBeforeEl(outlineNegative)}
  }
`;

export const editedSuccessfullyCellStyle = css`
  &.${cls.editedSuccessfullyCell}:not(.${cls.editingCell}):not(
      [aria-selected='true']
    ) {
    background-color: ${COLORS.editedSuccessfullyCellColor};

    &:hover {
      background-color: ${COLORS.editedSuccessfullyCellHoverColor};
    }
  }
`;
