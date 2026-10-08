import type { ActiveThemeGlobal } from '@ui-kit/utils/getActiveTheme';

import type { TableColorTheme } from './table-colors.generated';

/**
 * Шесть тем, для которых посчитана палитра таблицы
 * (generators/table-token-states).
 * Для тёмной контрастной темы (highContrastDark) у дизайнера своих значений
 * палитры нет: она — копия обычной тёмной (так договорились с
 * дизайн-системой).
 */
export type ActiveTheme = TableColorTheme;

type Equals<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

/**
 * Проверка при сборке: список тем палитры (генератор) и список тем, которые
 * распознаёт getActiveTheme, должны совпадать. Добавили тему в одном месте и
 * забыли в другом — TypeScript покажет ошибку в этой строке.
 */
const _themesInSync: Equals<ActiveTheme, ActiveThemeGlobal> = true;
void _themesInSync;
