import { ActiveTheme } from './activeTheme.type';
import { TABLE_STATE_COLORS } from './table-colors.generated';

/**
 * Цвета, которые понимает сам Glide Data Grid: фон ячеек и шапки, цвет
 * текста, линии сетки, цвет выделения. Передаются в <DataEditor theme={...}>.
 *
 * Значения берутся из палитры таблицы (table-colors.generated.ts) — руками
 * их не правят: палитру пересчитывает npm run table-colors:palette.
 */
export const getGlideColors = (activeTheme: ActiveTheme) => ({
  accentColor: TABLE_STATE_COLORS.accentColor[activeTheme],
  accentLight: TABLE_STATE_COLORS.accentLight[activeTheme],
  textDark: TABLE_STATE_COLORS.textDark[activeTheme],
  textHeader: TABLE_STATE_COLORS.textHeader[activeTheme],
  textHeaderSelected: TABLE_STATE_COLORS.textHeaderSelected[activeTheme],
  textGroupHeader: TABLE_STATE_COLORS.textGroupHeader[activeTheme],
  bgCell: TABLE_STATE_COLORS.bgCell[activeTheme],
  bgHeader: TABLE_STATE_COLORS.bgHeader[activeTheme],
  bgHeaderHasFocus: TABLE_STATE_COLORS.bgHeaderHasFocus[activeTheme],
  bgHeaderHovered: TABLE_STATE_COLORS.bgHeaderHovered[activeTheme],
  borderColor: TABLE_STATE_COLORS.borderColor[activeTheme],
  bgGroupHeader: TABLE_STATE_COLORS.bgGroupHeader[activeTheme],
  bgGroupHeaderHovered: TABLE_STATE_COLORS.bgGroupHeaderHovered[activeTheme],
  // Цвет полоски-индикатора скрытых столбцов. Это тот же акцентный синий,
  // поэтому берём accentColor: цвет меняется вместе с темой. (Своё значение по
  // умолчанию у Glide Data Grid одно на все темы и в контрастной теме не
  // подходит.)
  hiddenColumnsIndicatorColor:
    TABLE_STATE_COLORS.hiddenColumnsIndicatorColor[activeTheme],
});
