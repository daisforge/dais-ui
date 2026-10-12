import type { ActiveTheme } from './activeTheme.type';
import type { SIZE } from '../constants';
import type { Theme } from '../types';

import { getCustomColors } from './custom-colors';
import { getGlideColors } from './glide-colors';
import { getSizeProps } from './sizes';

/**
 * Собирает тему таблицы — один объект со всеми цветами и размерами, который
 * получают отрисовка таблицы и кастомные рендеры (`cellInfo.theme`).
 *
 * Состоит из трёх частей:
 *  - цвета, которые понимает сам Glide Data Grid (glide-colors.ts);
 *  - размеры и шрифты для выбранной высоты строки (sizes.ts);
 *  - наши дополнительные цвета: состояния выделения, редактируемые и
 *    статусные ячейки, цвета содержимого ячеек (custom-colors.ts).
 *
 * Используется в TableGlide.tsx:
 * ```ts
 * const theme = getTheme(rowSize, activeTheme);
 * ```
 */
export const getTheme = (
  rowSize: SIZE | undefined = 'big',
  activeTheme: ActiveTheme = 'light'
): Theme =>
  ({
    ...getGlideColors(activeTheme),
    ...getSizeProps(rowSize),
    ...getCustomColors(activeTheme),
    rowSize,
  } as Theme);

/**
 * Готовая тема «светлая, большая строка» — для мест вне отрисовки таблицы,
 * где текущая тема не нужна. В компонентах используйте getTheme: он учитывает
 * текущую тему приложения.
 */
export const THEME = getTheme();
