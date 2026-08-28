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
    betaCoreLight: '#0087CD',
  },
  accentLight: {
    light: '#E2F1FB',
    dark: '#E2F1FB',
    highContrastLight: '#DAE8F1',
    betaCoreLight: '#E2F1FB',
  },
  textDark: {
    light: '#13181BF5',
    dark: '#13181BF5',
    highContrastLight: '#13181BF5',
    betaCoreLight: '#14191DF5',
  },
  textHeader: {
    light: '#13181BF5',
    dark: '#13181BF5',
    highContrastLight: '#13181BF5',
    betaCoreLight: '#14191DF5',
  },
  textHeaderSelected: {
    light: '#13181BF5',
    dark: '#13181BF5',
    highContrastLight: '#13181BF5',
    betaCoreLight: '#14191DF5',
  },
  textGroupHeader: {
    light: '#13181BF5',
    dark: '#13181BF5',
    highContrastLight: '#13181BF5',
    betaCoreLight: '#14191DF5',
  },
  bgCell: {
    light: '#FFFFFF',
    dark: '#FFFFFF',
    highContrastLight: '#FFFFFF',
    betaCoreLight: '#FFFFFF',
  },
  bgHeader: {
    light: '#ECF6FCFF',
    dark: '#ECF6FCFF',
    highContrastLight: '#CFE5F2FF',
    betaCoreLight: '#EFF8FF',
  },
  bgHeaderHasFocus: {
    light: '#ECF6FCFF',
    dark: '#ECF6FCFF',
    highContrastLight: '#B9D6E7',
    betaCoreLight: '#EFF8FF',
  },
  bgHeaderHovered: {
    light: '#DEECF5',
    dark: '#DEECF5',
    highContrastLight: '#C2DCEB',
    betaCoreLight: '#DEECF5',
  },
  borderColor: {
    light: '#D5DFE6',
    dark: '#D5DFE6',
    highContrastLight: '#C4CFD7',
    betaCoreLight: '#CFDBE4',
  },
  bgGroupHeader: {
    light: '#ECF6FCFF',
    dark: '#ECF6FCFF',
    highContrastLight: '#CFE5F2FF',
    betaCoreLight: '#EFF8FF',
  },
  bgGroupHeaderHovered: {
    light: '#DEECF5',
    dark: '#DEECF5',
    highContrastLight: '#C2DCEB',
    betaCoreLight: '#DEECF5',
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
