import { ActiveTheme } from './activeTheme.type';
import { TABLE_STATE_COLORS } from './table-colors.generated';

/**
 * Цвета Glide Data Grid canvas: фоны ячеек, заголовков, текст, обводки.
 * Эти значения передаются напрямую в <DataEditor theme={...}>.
 *
 * Источник — палитра «токен × состояние» (table-colors.generated.ts),
 * руками значения не поддерживаются: перегенерация в generators/table-token-states.
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
  // Цвет полосы индикатора скрытых столбцов. Это акцентный синий, поэтому берём тот
  // же accentColor: один источник цвета и адаптация под тему (в форке был только
  // фиксированный fallback, который не подхватывал high-contrast).
  hiddenColumnsIndicatorColor:
    TABLE_STATE_COLORS.hiddenColumnsIndicatorColor[activeTheme],
});
