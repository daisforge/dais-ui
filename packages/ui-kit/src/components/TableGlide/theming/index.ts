import type { ActiveTheme } from './activeTheme.type';
import type { SIZE } from '../constants';
import type { Theme } from '../types';

import { getCustomColors } from './custom-colors';
import { getGlideColors } from './glide-colors';
import { getSizeProps } from './sizes';

/**
 * Формирует полную тему для Glide Data Grid + наши кастомные расширения.
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

/** Статическая light-тема (big) для использования вне canvas-рендера */
export const THEME = getTheme();
