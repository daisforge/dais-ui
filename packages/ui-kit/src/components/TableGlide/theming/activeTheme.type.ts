import type { Equals } from '@ui-kit/types';
import type { ActiveThemeGlobal } from '@ui-kit/utils/getActiveTheme';

import type { TableColorTheme } from './table-colors.generated';

/**
 * Темы, которые понимает таблица. Это ровно шесть тем, для которых
 * посчитана палитра (generators/table-token-states).
 *
 * Подробнее: для тёмной контрастной темы (highContrastDark) у дизайнера
 * своих значений палитры нет — она копия обычной тёмной (так договорились
 * с дизайн-системой).
 */
export type ActiveTheme = TableColorTheme;

/**
 * Защита от рассинхрона: темы таблицы (ActiveTheme) и темы, которые
 * распознаёт вся библиотека (ActiveThemeGlobal из utils/getActiveTheme),
 * должны совпадать. Добавили тему в одном месте и забыли в другом —
 * TypeScript покажет ошибку в этой строке.
 */
const themesInSync: Equals<ActiveTheme, ActiveThemeGlobal> = true;
void themesInSync;
