import { css } from 'styled-components';

import { tableClassNames as cls } from './classNames';
import { COLORS, DEFAULT_TABLE_TRANSITION } from './styles.constants';

const RIGHT_ICONS = `.${cls.headerCellRightIcons}` as const;
const FILTER_ACTIVE = `.${cls.headerCellFilterIsActive}` as const;
const FILTER_AVAIL = `.${cls.headerCellFilterIsAvailable}` as const;
const SORT_ACTIVE = `.${cls.headerCellSortingIsActive}` as const;
const SORT_AVAIL = `.${cls.headerCellSortingIsAvailable}` as const;

/**
 * Базовые стили headerCellRightIcons + логика отображения при активном фильтре/сортировке (без hover).
 * Интерполируется внутри контекста `& .rdg-header-row { & .rdg-cell { ... } }`.
 */
export const headerCellRightIconsBaseStyle = css`
  ${RIGHT_ICONS} {
    flex-shrink: 0;
    display: flex;
    opacity: 0;
    width: 0;
    transition: ${DEFAULT_TABLE_TRANSITION};
    margin-left: auto;
    gap: 4px;
    background-color: ${COLORS.headerColor};
    min-width: 0;

    /* Активная сортировка или активная фильтрация */
    &:has(${FILTER_ACTIVE}, ${SORT_ACTIVE}) {
      opacity: 1;

      /* Обе фичи доступны */
      &:has(${FILTER_AVAIL}):has(${SORT_AVAIL}) {
        width: 36px;
        & ${FILTER_ACTIVE}, & ${SORT_ACTIVE} {
          opacity: 1;
          width: 16px;
        }
      }

      /* Только фильтр активен */
      &:has(${FILTER_ACTIVE}):not(:has(${SORT_ACTIVE})) {
        width: 16px;
        gap: 0;
        & ${SORT_AVAIL} {
          opacity: 0;
          width: 0;
        }
      }

      /* Только сортировка активна */
      &:has(${SORT_ACTIVE}):not(:has(${FILTER_ACTIVE})) {
        width: 16px;
        gap: 0;
        transition: none;
        & ${FILTER_AVAIL} {
          transition: none;
          opacity: 0;
          width: 0;
        }
      }
    }
  }
`;

/**
 * Стили headerCellRightIcons при hover / aria-selected.
 * Интерполируется внутри контекста `& .rdg-header-row { & .rdg-cell { ... } }`.
 */
export const headerCellRightIconsHoverStyle = css`
  &:hover,
  &[aria-selected='true'] {
    ${RIGHT_ICONS} {
      opacity: 1;

      /* Обе иконки доступны */
      &:has(${FILTER_AVAIL}):has(${SORT_AVAIL}) {
        width: 36px;
        gap: 4px;
        & ${FILTER_AVAIL}, & ${SORT_AVAIL} {
          opacity: 1;
          width: 16px;
        }
      }

      /* Только сортировка доступна */
      &:has(${SORT_AVAIL}):not(:has(${FILTER_AVAIL})) {
        width: 16px;
        gap: 0;
      }

      /* Только фильтр доступен */
      &:has(${FILTER_AVAIL}):not(:has(${SORT_AVAIL})) {
        width: 16px;
        gap: 0;
      }
    }
  }
`;
