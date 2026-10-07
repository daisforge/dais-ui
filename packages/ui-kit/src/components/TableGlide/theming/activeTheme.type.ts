import type { ActiveThemeGlobal } from '@ui-kit/utils/getActiveTheme';

import type { TableColorTheme } from './table-colors.generated';

/**
 * Темы таблицы — шесть, по палитре генератора (generators/table-token-states).
 * Примечание: highContrastDark — CSS-темы нет и не планируется, значения
 * палитры = копия dark (договорённость с дизайн-системой).
 */
export type ActiveTheme = TableColorTheme;

type Equals<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

/**
 * Статическая страховка: множество тем палитры (генератор) и множество тем
 * глобальной детекции (getActiveTheme) обязаны совпадать. Добавили тему в
 * одном месте и забыли в другом — здесь будет ошибка типов.
 */
const _themesInSync: Equals<ActiveTheme, ActiveThemeGlobal> = true;
void _themesInSync;
