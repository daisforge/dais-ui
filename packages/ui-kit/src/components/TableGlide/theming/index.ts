import type { ActiveTheme } from './activeTheme.type';
import type { SIZE } from '../constants';
import type { AppearanceVariant, Theme } from '../types';

import { getCustomColors } from './custom-colors';
import { getGlideColors } from './glide-colors';
import type { TablePaletteOverride } from './palette-override';
import { getSizeProps } from './sizes';

/**
 * «Чистый» вид (appearance.variant = 'clean'): шапка, групповая шапка и
 * служебные колонки на фоне обычных ячеек, текст шапки — text-secondary.
 * Итоговая строка не меняется: по решению дизайнера она остаётся голубой,
 * как в обычном виде (ключ bgSummaryRow). Состояния берутся из уже посчитанных ключей белого фона:
 * hover — bgRowHovered, выделение — selectionActiveBg, выделение под курсором
 * — selectionActiveHoveredBg. Цвет линий (borderColor) прозрачный: линии
 * сетки в этом виде выключены через borders, но форк Glide рисует ещё линию
 * под шапкой, разделители в шапке, границу итоговых и закреплённых строк и
 * колонок независимо от borders, и все они берут цвет из borderColor.
 */
const withCleanAppearance = (theme: Theme): Theme => {
  // Ключи палитры типизированы литералами hex, поэтому подмена идёт через
  // строковый словарь и приведение к Theme.
  const overrides: Partial<Record<keyof Theme, string>> = {
    bgHeader: theme.bgCell,
    bgHeaderHasFocus: theme.bgCell,
    bgHeaderHovered: theme.bgRowHovered,
    bgGroupHeader: theme.bgCell,
    bgGroupHeaderHovered: theme.bgRowHovered,
    borderColor: 'transparent',
    horizontalBorderColor: 'transparent',
    headerBottomBorderColor: 'transparent',
    textHeader: theme.textHeaderClean,
    textHeaderSelected: theme.textHeaderClean,
    textGroupHeader: theme.textHeaderClean,
    // служебные колонки (нумерация, чекбокс) в покое и под курсором
    selectionServiceBg: theme.bgCell,
    bgServiceRowHovered: theme.bgRowHovered,
    // шапка и служебная зона при выделении
    selectionServiceActiveBg: theme.selectionActiveBg,
    selectionServiceActiveHoveredBg: theme.selectionActiveHoveredBg,
    bgHeaderSelectedHovered: theme.selectionActiveHoveredBg,
  };
  return { ...theme, ...overrides } as Theme;
};

/**
 * Подмена палитры для стенда подбора цветов (palette-override.ts). Имена
 * ключей темы совпадают с ключами палитры; итоговая строка берёт цвет шапки.
 */
const withPaletteOverride = (
  theme: Theme,
  override: TablePaletteOverride,
): Theme => {
  const colors: Record<string, string | undefined> = override.colors;
  const next: Record<string, unknown> = { ...theme };
  Object.keys(colors).forEach((key) => {
    if (key in next && colors[key] !== undefined) {
      next[key] = colors[key];
    }
  });
  if (override.colors.bgHeader !== undefined) {
    next['bgSummaryRow'] = override.colors.bgHeader;
  }
  return next as unknown as Theme;
};

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
 * const theme = getTheme(rowSize, activeTheme, appearance?.variant);
 * ```
 */
export const getTheme = (
  rowSize: SIZE | undefined = 'big',
  activeTheme: ActiveTheme = 'light',
  variant: AppearanceVariant = 'default',
  paletteOverride?: TablePaletteOverride,
): Theme => {
  const generated = {
    ...getGlideColors(activeTheme),
    ...getSizeProps(rowSize),
    ...getCustomColors(activeTheme),
    rowSize,
  } as Theme;
  const theme = paletteOverride
    ? withPaletteOverride(generated, paletteOverride)
    : generated;

  return variant === 'clean' ? withCleanAppearance(theme) : theme;
};

/**
 * Готовая тема «светлая, большая строка» — для мест вне отрисовки таблицы,
 * где текущая тема не нужна. В компонентах используйте getTheme: он учитывает
 * текущую тему приложения.
 */
export const THEME = getTheme();
