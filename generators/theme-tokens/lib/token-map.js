/**
 * Контракт токенов «чернил» и карта их соответствий CSS-переменным тем.
 * Это единственный файл, который правится при добавлении/переименовании
 * токена; остальные модули — механика.
 *
 * KEYS — состав и порядок ключей типа `Tokens`
 * (packages/ui-kit/src/components/TableGlide/tokens.ts).
 *
 * MAPPING — исключения из правила «имя ключа в kebab-case = имя переменной»
 * (textPrimary → --text-primary). Четыре вида правил:
 *  1) без записи в MAPPING — kebab-case имени ключа;
 *  2) `var` — явное имя переменной (семантические алиасы команды, выведены
 *     по совпадению hex в light-теме 0.79.1);
 *  3) `alpha` — «RGB базовой переменной + альфа-байт» (производные …12/…20/…56);
 *  4) `pin` — ручные значения по темам: аналога в CSS нет или источник не
 *     подтверждён (помечаются в отчёте, ждут решения дизайнера).
 */

export const KEYS = [
  'textPrimary',
  'textPrimaryHover',
  'textPrimaryActive',
  'textSecondary',
  'textSecondaryHover',
  'textSecondaryActive',
  'textTertiary',
  'textTertiaryHover',
  'textTertiaryActive',
  'textTertiaryBase',
  'textTertiaryVariant',
  'textParagraph',
  'textParagraphHover',
  'textParagraphActive',
  'textAccent',
  'textAccentHover',
  'textAccentActive',
  'textAccentTransparent20',
  'textPositive',
  'textPositiveHover',
  'textPositiveActive',
  'textWarning',
  'textWarningHover',
  'textWarningActive',
  'textNegative',
  'textNegativeHover',
  'textNegativeActive',
  'inverseTextPrimary',
  'onDarkTextPrimary',
  'onDarkTextPrimaryHover',
  'onDarkTextPrimaryActive',
  'onDarkTextPrimary96',
  'onDarkTextPrimary56',
  'onDarkTextPrimary28',
  'onLightTextPrimary',
  'onLightTextPrimaryHover',
  'onLightTextPrimaryActive',
  'surfaceSolidCard',
  'surfaceAccentMinor',
  'surfaceSolidDefault',
  'surfaceSolidTertiary',
  'surfaceAccent',
  'surfaceAccentHover',
  'surfaceAccentActive',
  'surfaceTransparentSecondary',
  'surfaceTransparentSecondaryHover',
  'surfaceTransparentSecondaryActive',
  'surfaceTransparentTertiary',
  'surfaceTransparentDeep',
  'surfaceClear',
  'surfacePositive',
  'surfacePositiveHover',
  'surfacePositiveActive',
  'surfaceWarning',
  'surfaceWarningHover',
  'surfaceWarningActive',
  'surfaceWarningMinor56',
  'surfaceNegative',
  'surfaceNegativeHover',
  'surfaceNegativeActive',
  'surfaceTransparentAccent',
  'surfaceTransparentAccentActive',
  'surfaceTransparentAccent12',
  'surfaceTransparentAccent20',
  'surfaceTransparentPositive',
  'surfaceTransparentPositive12',
  'surfaceTransparentPositive20',
  'surfaceTransparentWarning',
  'surfaceTransparentWarning12',
  'surfaceTransparentWarning20',
  'surfaceTransparentNegative',
  'surfaceTransparentNegative12',
  'surfaceTransparentNegative20',
  'onLightSurfaceSolidDefault',
  'onLightSurfaceTransparentDeep',
  'onDarkSurfaceSolidDefault',
  'onDarkSurfaceTransparentCard',
  'outlineAccent',
  'outlineSolidPrimary',
  'outlineSolidPrimary26',
  'dataBlueMinor',
  'dataBlueMinorActive',
  'dataBlue',
  'dataAccentMinorHover',
  'dataPositive',
  'dataPositiveMinor',
  'dataNegative',
  'dataNegativeMinor',
  'dataWarning',
  'dataWarningMinor',
  'dataOrange',
  'dataOrangeMinor',
  'dataViolet',
  'dataVioletMinor',
  'dataPink',
  'dataMagenta',
  'dataCyan',
  'dataCyanDark',
  'dataLime',
  'dataTeal',
];

export const MAPPING = {
  // data-палитра: имена команды → имена атомарки (по значению)
  dataBlue: { var: 'data-electric-blue-minor' },
  dataAccentMinorHover: { var: 'data-blue-mild' },
  dataPositive: { var: 'data-green-minor' },
  dataPositiveMinor: { var: 'surface-positive-minor' },
  dataNegative: { var: 'data-red-minor' },
  dataNegativeMinor: { var: 'data-red-light' },
  dataWarning: { var: 'data-orange-minor' },
  dataWarningMinor: { var: 'data-orange-light' },
  dataOrange: { var: 'data-yellow' },
  dataOrangeMinor: { var: 'data-yellow-minor' },
  dataViolet: { var: 'data-orchid' },
  dataVioletMinor: { var: 'data-orchid-minor' },
  dataMagenta: { var: 'data-fuchsia-minor' },
  dataCyan: { var: 'data-malachite-minor' },
  dataCyanDark: { var: 'data-malachite' },
  dataLime: { var: 'data-spring' },
  dataBlueMinorActive: { var: 'data-blue-minor-active' },

  // исторические синонимы text-tertiary: свои значения не подтверждены
  // дизайнером, по решению v1.2 оба читают семантический --text-tertiary
  textTertiaryBase: { var: 'text-tertiary' },
  textTertiaryVariant: { var: 'text-tertiary' },

  // альфа-производные: RGB базовой переменной + альфа-байт
  textAccentTransparent20: { alpha: ['text-accent', '33'] },
  surfaceTransparentAccent12: { alpha: ['surface-transparent-accent', '1E'] },
  surfaceTransparentAccent20: { alpha: ['surface-transparent-accent', '33'] },
  surfaceTransparentPositive12: {
    alpha: ['surface-transparent-positive', '1E'],
  },
  surfaceTransparentPositive20: {
    alpha: ['surface-transparent-positive', '33'],
  },
  surfaceTransparentWarning12: { alpha: ['surface-transparent-warning', '1E'] },
  surfaceTransparentWarning20: { alpha: ['surface-transparent-warning', '33'] },
  surfaceTransparentNegative12: {
    alpha: ['surface-transparent-negative', '1E'],
  },
  surfaceTransparentNegative20: {
    alpha: ['surface-transparent-negative', '33'],
  },
  outlineSolidPrimary26: { alpha: ['outline-solid-primary', '42'] },
  surfaceWarningMinor56: { alpha: ['data-yellow', '8E'] },

  // пины: аналога в CSS нет или соответствие не подтверждено — значения из
  // текущего tokens.ts по темам (тёмные без данных наследуют light, TODO дизайнеру)
  onDarkTextPrimary96: {
    pin: { light: '#F7F9FBF4' },
    why: 'RGB не совпадает с on-dark-text-primary текущей темы — источник не найден',
  },
  onDarkTextPrimary56: {
    pin: { light: '#F7F9FB8E' },
    why: 'RGB не совпадает с on-dark-text-primary текущей темы — источник не найден',
  },
  onDarkTextPrimary28: {
    pin: { light: '#F7F9FB47' },
    why: 'RGB не совпадает с on-dark-text-primary текущей темы — источник не найден',
  },
  dataTeal: {
    pin: { light: '#14CC98', highContrastLight: '#00B082' },
    why: 'ближайший в теме data-arctic #00AC7B — замену должен подтвердить дизайнер',
  },
};
