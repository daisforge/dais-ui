import { css } from 'styled-components';

import { COLORS } from './styles.constants';

export const dividerStyles = css`
  content: '';
  position: absolute;
  right: 0px;
  width: 1px;
  background-color: ${COLORS.border};
`;

// headerDividerForAll
export const headerCellDividerStyles = (columnsGroupingIsActive: boolean) =>
  columnsGroupingIsActive
    ? css`
        & .rdg-cell {
          border-right: 1px solid ${COLORS.border};
        }
      `
    : css`
        & .rdg-cell:not(:last-of-type):not(:only-of-type)::after {
          ${dividerStyles}
          top: 50%;
          transform: translate(0, -50%);
          height: calc(100% - 15px);
          border-radius: 2px;
        }
      `;
// старые стили для многоуровневой шапки
// &:has(+ .rdg-header-row):first-of-type:not(:only-of-type) {
//     & .rdg-cell {
//         z-index: calc(var(--current-z-index) + 2);
//         &::after {
//             ${dividerStyles}
//             top: calc(7.5px);
//             transform: none;
//             height: calc(100% + 1px);
//             border-radius: 2px 2px 0px 0px;
//         }
//     }
// }
// // headerDividerForNotFirstNotLast
// &:has(+ .rdg-header-row):not(:last-of-type):not(:only-of-type):not(
//         :first-of-type
//     ) {
//     & .rdg-cell {
//         z-index: calc(var(--current-z-index) + 1);
//         &::after {
//             ${dividerStyles}
//             transform: none;
//             top: 7.5px;
//             height: calc(100% + 1px);
//             border-radius: 0px;
//         }
//     }
// }
