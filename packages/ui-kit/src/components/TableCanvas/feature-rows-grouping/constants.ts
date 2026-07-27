import { ObjectForExtending } from '../types';
import type { RenderGroupCellProps } from './types';

export const KEYS_ROW_GROUPED: {
  [K in keyof RenderGroupCellProps<ObjectForExtending>]: K;
} = {
  childGroups: 'childGroups',
  groupKey: 'groupKey',
  groupByKey: 'groupByKey',
  groupParents: 'groupParents',
  childRows: 'childRows',
  column: 'column',
  tabIndex: 'tabIndex'
};
/**
 * KEY_GROUPED_COL - ключ колонки, которая создается при группировке строк (при группировке данных).
 */
export const KEY_GROUPED_COL = '_group-col';

/**
 * ITEMID элемента дропдауна фичи группировки
 */
export const ITEM_ID_GROUPED_ROWS = 'groupingRows';

/**
 * Кнопка группировать при сжатии таблицы может быть скрыта как элемент дропдауна. Чтобы при клике на item этого дропдауна с именем Группировать не отрабатывал процесс группировки - используем эту переменную. (см. useGetRowsGrouping и useButtonsToDropdown)
 */
export const NAME_TRIGGER_DROPDOWN_GROUPED_ROWS = 'GROUPING_ROWS_TRIGGER';
