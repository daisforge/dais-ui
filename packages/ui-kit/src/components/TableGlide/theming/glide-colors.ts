import { ActiveTheme } from './activeTheme.type';

/**
 * Цвета Glide Data Grid canvas: фоны ячеек, заголовков, текст, обводки.
 * Эти значения передаются напрямую в <DataEditor theme={...}>.
 */
const GLIDE_COLORS = {
  accentColor: {
    light: '#0b7ecb',
    dark: '#0b7ecb',
    highContrastLight: '#0058A2',
  },
  accentLight: {
    light: '#E2F1FB',
    dark: '#E2F1FB',
    highContrastLight: '#DAE8F1',
  },
  textDark: {
    light: '#13181BF5',
    dark: '#13181BF5',
    highContrastLight: '#13181BF5',
  },
  textHeader: {
    light: '#13181BF5',
    dark: '#13181BF5',
    highContrastLight: '#13181BF5',
  },
  textHeaderSelected: {
    light: '#13181BF5',
    dark: '#13181BF5',
    highContrastLight: '#13181BF5',
  },
  textGroupHeader: {
    light: '#13181BF5',
    dark: '#13181BF5',
    highContrastLight: '#13181BF5',
  },
  bgCell: {
    light: '#FFFFFF',
    dark: '#FFFFFF',
    highContrastLight: '#FFFFFF',
  },
  bgHeader: {
    light: '#ECF6FCFF',
    dark: '#ECF6FCFF',
    highContrastLight: '#CFE5F2FF',
  },
  bgHeaderHasFocus: {
    light: '#ECF6FCFF',
    dark: '#ECF6FCFF',
    highContrastLight: '#B9D6E7',
  },
  bgHeaderHovered: {
    light: '#DEECF5',
    dark: '#DEECF5',
    highContrastLight: '#C2DCEB',
  },
  borderColor: {
    light: '#D5DFE6',
    dark: '#D5DFE6',
    highContrastLight: '#C4CFD7',
  },
  bgGroupHeader: {
    light: '#ECF6FCFF',
    dark: '#ECF6FCFF',
    highContrastLight: '#CFE5F2FF',
  },
  bgGroupHeaderHovered: {
    light: '#DEECF5',
    dark: '#DEECF5',
    highContrastLight: '#C2DCEB',
  },
} as const;

export const getGlideColors = (activeTheme: ActiveTheme) => ({
  accentColor: GLIDE_COLORS.accentColor[activeTheme],
  accentLight: GLIDE_COLORS.accentLight[activeTheme],
  textDark: GLIDE_COLORS.textDark[activeTheme],
  textHeader: GLIDE_COLORS.textHeader[activeTheme],
  textHeaderSelected: GLIDE_COLORS.textHeaderSelected[activeTheme],
  textGroupHeader: GLIDE_COLORS.textGroupHeader[activeTheme],
  bgCell: GLIDE_COLORS.bgCell[activeTheme],
  bgHeader: GLIDE_COLORS.bgHeader[activeTheme],
  bgHeaderHasFocus: GLIDE_COLORS.bgHeaderHasFocus[activeTheme],
  bgHeaderHovered: GLIDE_COLORS.bgHeaderHovered[activeTheme],
  borderColor: GLIDE_COLORS.borderColor[activeTheme],
  bgGroupHeader: GLIDE_COLORS.bgGroupHeader[activeTheme],
  bgGroupHeaderHovered: GLIDE_COLORS.bgGroupHeaderHovered[activeTheme],
});
