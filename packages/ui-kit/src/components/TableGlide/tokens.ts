import { ActiveTheme } from './theming/activeTheme.type';

const TOKENS_LIGHT = {
  // Text tokens (--text-*)
  textPrimary: '#13181BF5',
  textPrimaryHover: '#13181B93',
  textPrimaryActive: '#13181BC4',
  textSecondary: '#485056B0',
  textSecondaryHover: '#485056FF',
  textSecondaryActive: '#485056D3',
  textTertiary: '#707C847A',
  textTertiaryHover: '#717C84FF',
  textTertiaryActive: '#717C8493',
  textTertiaryBase: '#8A959D',
  textTertiaryVariant: '#657179',
  textParagraph: '#13181BCC',
  textParagraphHover: '#13181B7A',
  textParagraphActive: '#13181BA3',
  textAccent: '#0B7ECB',
  textAccentHover: '#0D96F2FF',
  textAccentActive: '#0966A5FF',
  textAccentTransparent20: '#0B7ECB33',
  textPositive: '#108E26',
  textPositiveHover: '#14B32EFF',
  textPositiveActive: '#0C6A1BFF',
  textWarning: '#FA5F05',
  textWarningHover: '#FB782DFF',
  textWarningActive: '#D25004FF',
  textNegative: '#E31227',
  textNegativeHover: '#EE2F43FF',
  textNegativeActive: '#BD0F21FF',

  // Inverse/onDark/onLight text tokens
  inverseTextPrimary: '#F2F5F8F5',
  onDarkTextPrimary: '#F2F5F8F5',
  onDarkTextPrimaryHover: '#F2F5F893',
  onDarkTextPrimaryActive: '#F2F5F8C4',
  onDarkTextPrimary96: '#F7F9FBF4',
  onDarkTextPrimary56: '#F7F9FB8E',
  onDarkTextPrimary28: '#F7F9FB47',
  onLightTextPrimary: '#13181BF5',
  onLightTextPrimaryHover: '#13181B93',
  onLightTextPrimaryActive: '#13181BC4',

  // Surface tokens (--surface-*)
  surfaceSolidCard: '#FFFFFF',
  surfaceAccentMinor: '#ECF6FCFF',
  surfaceSolidDefault: '#060A0C',
  surfaceSolidTertiary: '#E8EEF2',
  surfaceAccent: '#118CDF',
  surfaceAccentHover: '#1798EEFF',
  surfaceAccentActive: '#0F81CCFF',
  surfaceTransparentSecondary: '#ADB9C238',
  surfaceTransparentSecondaryHover: '#ADB9C247',
  surfaceTransparentSecondaryActive: '#ADB9C24D',
  surfaceTransparentTertiary: '#8A959D47',
  surfaceTransparentDeep: '#30373CC6',
  surfaceClear: '#FFFFFF00',
  surfacePositive: '#1A9E32',
  surfacePositiveHover: '#1EB83AFF',
  surfacePositiveActive: '#178C2CFF',
  surfaceWarning: '#FA5F05',
  surfaceWarningHover: '#FB782DFF',
  surfaceWarningActive: '#E65705FF',
  surfaceWarningMinor56: '#F3A9128E',
  surfaceNegative: '#FF293E',
  surfaceNegativeHover: '#FF5263FF',
  surfaceNegativeActive: '#FF142CFF',
  disabled: '#DDDDDD',

  // Surface transparent (Badge/Status)
  surfaceTransparentAccent: '#118CDF1F',
  surfaceTransparentAccent12: '#118CDF1E',
  surfaceTransparentAccent20: '#118CDF33',
  surfaceTransparentPositive: '#1A9E321F',
  surfaceTransparentPositive12: '#1A9E321E',
  surfaceTransparentPositive20: '#1A9E3233',
  surfaceTransparentWarning: '#FA5F051F',
  surfaceTransparentWarning12: '#FA5F051E',
  surfaceTransparentWarning20: '#FA5F0533',
  surfaceTransparentNegative: '#FF293E1F',
  surfaceTransparentNegative12: '#FF293E1E',
  surfaceTransparentNegative20: '#FF293E33',

  // onLight/onDark surface tokens
  onLightSurfaceSolidDefault: '#060A0C',
  onLightSurfaceTransparentDeep: '#30373CC7',
  onDarkSurfaceSolidDefault: '#F7F9FB',
  onDarkSurfaceTransparentCard: '#FFFFFF0F',

  // Outline
  outlineAccent: '#0B7ECB',
  outlineSolidPrimary: '#D5DFE6',
  outlineSolidPrimary26: '#D5DFE642',

  // Data colors
  dataBlueMinor: '#CFECFF',
  dataBlueMinorActive: '#C2E7FFFF',
  dataBlue: '#8BB2FC',
  dataAccentMinorHover: '#52BAFF',
  dataPositive: '#28D247',
  dataPositiveMinor: '#9EFAAF',
  dataNegative: '#FF8F9A',
  dataNegativeMinor: '#FFE0E3',
  dataWarning: '#FD9C68',
  dataWarningMinor: '#FEE2D2',
  dataOrange: '#F3A912',
  dataOrangeMinor: '#FFD37A',
  dataViolet: '#AD42F5',
  dataVioletMinor: '#DEB7F7',
  dataPink: '#FF8FBC',
  dataMagenta: '#F391E2',
  dataCyan: '#00DDE0',
  dataCyanDark: '#04C6C9',
  dataLime: '#93E006',
  dataTeal: '#14CC98',
} as const;

const TOKENS_HC_LIGHT = {
  // Text tokens
  textPrimary: '#13181BF5',
  textPrimaryHover: '#13181B93',
  textPrimaryActive: '#13181BC4',
  textSecondary: '#03070CAF',
  textSecondaryHover: '#485056FF', // TODO: уточнить у дизайнера
  textSecondaryActive: '#485056D3', // TODO: уточнить
  textTertiary: '#000206A8',
  textTertiaryHover: '#717C84FF', // TODO: уточнить
  textTertiaryActive: '#717C8493', // TODO: уточнить
  textTertiaryBase: '#818C95',
  textTertiaryVariant: '#65717A',
  textParagraph: '#13181BCC',
  textParagraphHover: '#13181B7A',
  textParagraphActive: '#13181BA3',
  textAccent: '#0058A2',
  textAccentHover: '#0D96F2FF', // TODO: уточнить
  textAccentActive: '#0966A5FF', // TODO: уточнить
  textAccentTransparent20: '#0058A23F',
  textPositive: '#0F5E00',
  textPositiveHover: '#14B32EFF', // TODO: уточнить
  textPositiveActive: '#0C6A1BFF', // TODO: уточнить
  textWarning: '#D95800',
  textWarningHover: '#FB782DFF', // TODO: уточнить
  textWarningActive: '#D25004FF', // TODO: уточнить
  textNegative: '#A50016',
  textNegativeHover: '#EE2F43FF', // TODO: уточнить
  textNegativeActive: '#BD0F21FF', // TODO: уточнить

  // Inverse/onDark/onLight text tokens
  inverseTextPrimary: '#F2F5F8F5',
  onDarkTextPrimary: '#F2F5F8F5',
  onDarkTextPrimaryHover: '#F2F5F893',
  onDarkTextPrimaryActive: '#F2F5F8C4',
  onDarkTextPrimary96: '#F7F9FBF4',
  onDarkTextPrimary56: '#F7F9FB8E',
  onDarkTextPrimary28: '#F7F9FB47',
  onLightTextPrimary: '#13181BF5',
  onLightTextPrimaryHover: '#13181B93',
  onLightTextPrimaryActive: '#13181BC4',

  // Surface tokens
  surfaceSolidCard: '#FFFFFF',
  surfaceAccentMinor: '#CFE5F2FF',
  surfaceSolidDefault: '#060A0C',
  surfaceSolidTertiary: '#CFD9E0',
  surfaceAccent: '#0076D2',
  surfaceAccentHover: '#1798EEFF', // TODO: уточнить
  surfaceAccentActive: '#0F81CCFF', // TODO: уточнить
  surfaceTransparentSecondary: '#7D96A838',
  surfaceTransparentSecondaryHover: '#ADB9C247', // TODO: уточнить
  surfaceTransparentSecondaryActive: '#ADB9C24D', // TODO: уточнить
  surfaceTransparentTertiary: '#516E8347',
  surfaceTransparentDeep: '#30373DC6',
  surfaceClear: '#FFFFFF00',
  surfacePositive: '#198A00',
  surfacePositiveHover: '#1EB83AFF', // TODO: уточнить
  surfacePositiveActive: '#178C2CFF', // TODO: уточнить
  surfaceWarning: '#D95800',
  surfaceWarningHover: '#FB782DFF', // TODO: уточнить
  surfaceWarningActive: '#E65705FF', // TODO: уточнить
  surfaceWarningMinor56: '#D491008E',
  surfaceNegative: '#E7002F',
  surfaceNegativeHover: '#FF5263FF', // TODO: уточнить
  surfaceNegativeActive: '#FF142CFF', // TODO: уточнить
  disabled: '#DDDDDD',

  // Surface transparent (Badge/Status)
  surfaceTransparentAccent: '#0076D21F',
  surfaceTransparentAccent12: '#0076D21E',
  surfaceTransparentAccent20: '#0076D233',
  surfaceTransparentPositive: '#198A001F',
  surfaceTransparentPositive12: '#198A003F',
  surfaceTransparentPositive20: '#198A0033',
  surfaceTransparentWarning: '#D958001F',
  surfaceTransparentWarning12: '#D958003F',
  surfaceTransparentWarning20: '#D9580033',
  surfaceTransparentNegative: '#E7002F1F',
  surfaceTransparentNegative12: '#E7002F3F',
  surfaceTransparentNegative20: '#E7002F33',

  // onLight/onDark surface tokens
  onLightSurfaceSolidDefault: '#060A0C',
  onLightSurfaceTransparentDeep: '#30373DC7',
  onDarkSurfaceSolidDefault: '#D6DFE7',
  onDarkSurfaceTransparentCard: '#FFFFFF0F',

  // Outline
  outlineAccent: '#0058A2',
  outlineSolidPrimary: '#C4CFD7',
  outlineSolidPrimary26: '#AFC0CB42',

  // Data colors
  dataBlueMinor: '#9CD5FF',
  dataBlueMinorActive: '#C2E7FFFF', // TODO: уточнить
  dataBlue: '#6096FF',
  dataAccentMinorHover: '#0077C1',
  dataPositive: '#168600',
  dataPositiveMinor: '#96DAA1',
  dataNegative: '#BA5161',
  dataNegativeMinor: '#F8BDC4',
  dataWarning: '#B35B10',
  dataWarningMinor: '#F7C29D',
  dataOrange: '#D49100',
  dataOrangeMinor: '#F3B400',
  dataViolet: '#9A29E0',
  dataVioletMinor: '#D48BFF',
  dataPink: '#FB5AA5',
  dataMagenta: '#EB60D7',
  dataCyan: '#00C1C3',
  dataCyanDark: '#00AAAD',
  dataLime: '#7FC400',
  dataTeal: '#00B082',
} as const;

// Тип по ключам TOKENS_LIGHT, значения — любые строки (hex разных тем)
export type Tokens = { [K in keyof typeof TOKENS_LIGHT]: string };

// TODO: заменить на реальные значения от дизайнера
const TOKENS_DARK = { ...TOKENS_LIGHT } as const;
const TOKENS_BY_THEME: Record<ActiveTheme, Tokens> = {
  light: TOKENS_LIGHT,
  dark: TOKENS_DARK,
  highContrastLight: TOKENS_HC_LIGHT,
};

export const getTokens = (activeTheme: ActiveTheme = 'light'): Tokens =>
  TOKENS_BY_THEME[activeTheme];
