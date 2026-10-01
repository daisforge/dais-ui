/**
 * Исходные данные для генератора table-token-states.ts: настройки шести тем, семантические токены
 * с hex по темам и карта цветов таблицы — какой токен и в каком состоянии стоит за каждым ключом кода.
 *
 * Источники hex: CSS тем @salutejs/sdds-themes 0.79.1 (light, dark) и
 * @salutejs-ds/sdds_finai_beta_core 0.1.0 (betaCoreLight, betaCoreDark); highContrastLight —
 * TableGlide/tokens.ts (в npm этой темы нет); highContrastDark — темы нет и не планируется,
 * заглушка: значения обычной тёмной темы.
 *
 * ЧЕРНОВИК ПРИВЯЗКИ: пары «токен + состояние» сверяются с дизайнером по списку table-tokens-list.md.
 */
import {
  type CellTokens,
  type SourceToken,
  type TableColorMap,
  type ThemeSettings,
  type ThemeValues,
} from './table-token-states';

/** hex по темам: light, dark, betaCoreLight, betaCoreDark, highContrastLight, highContrastDark (по умолчанию = dark, заглушка). */
const v = (
  light: string | null,
  dark: string | null,
  betaCoreLight: string | null,
  betaCoreDark: string | null,
  highContrastLight: string | null = null,
  highContrastDark: string | null = dark,
): ThemeValues => ({
  light,
  dark,
  betaCoreLight,
  betaCoreDark,
  highContrastLight,
  highContrastDark,
});

export const THEME_SETTINGS: ThemeSettings = {
  light: { mode: 'light' },
  dark: { mode: 'dark' },
  betaCoreLight: { mode: 'light' },
  betaCoreDark: { mode: 'dark' },
  highContrastLight: {
    mode: 'light',
    stepFactor: 1,
    note: 'множитель ступени подобрать глазами на стенде',
  },
  highContrastDark: {
    mode: 'dark',
    note: 'темы нет и не планируется — заглушка, копия dark',
  },
};

const src = <T extends Record<string, SourceToken>>(tokens: T) => tokens;

/** Семантические токены, от которых считается таблица. Имена — как в CSS темы. */
export const SEMANTIC = src({
  surfaceSolidCard: {
    name: 'surface-solid-card',
    values: v('#FFFFFFFF', '#060A0C', '#FFFFFF', '#060A0D', '#FFFFFF'),
  },
  // TODO HC: --surface-solid-primary контрастной темы
  surfaceSolidPrimary: {
    name: 'surface-solid-primary',
    values: v('#F2F5F8', '#13181B', '#F3F7FA', '#14191D'),
  },
  // TODO HC: --background-primary контрастной темы
  backgroundPrimary: {
    name: 'background-primary',
    values: v('#F2F5F8', '#060A0C', '#F3F7FA', '#060A0D'),
  },
  surfaceAccentMinor: {
    name: 'surface-accent-minor',
    values: v('#ECF6FCFF', '#071A26FF', '#EFF8FF', '#0C1A24', '#CFE5F2FF'),
  },
  surfaceAccent: {
    name: 'surface-accent',
    values: v('#199AF0', '#199AF0', '#1F9EEB', '#1F9EEB', '#0076D2'),
  },
  outlineAccent: {
    name: 'outline-accent',
    values: v('#0B7ECB', '#199AF0', '#0087CD', '#1F9EEB', '#0058A2'),
  },
  outlineSolidPrimary: {
    name: 'outline-solid-primary',
    values: v('#D5DFE6', '#23292D', '#CFDBE4', '#262626', '#C4CFD7'),
  },
  surfaceNegative: {
    name: 'surface-negative',
    values: v('#FF293E', '#FF293E', '#F81C42', '#F81C42', '#E7002F'),
  },
  // выделение: полупрозрачная акцентная заливка, накладывается на цвет покоя (макет «Выделение ячеек»)
  surfaceTransparentAccent: {
    name: 'surface-transparent-accent',
    values: v('#118CDF1F', '#118CDF33', '#0090DA1F', '#0090DA33', '#0076D21F'),
  },
  // статусные заливки: в макете positive и warning — полупрозрачные surface-transparent-*, negative — surface-negative-minor
  surfaceTransparentPositive: {
    name: 'surface-transparent-positive',
    values: v('#1A9E321F', '#1A9E3233', '#21A0381F', '#21A03833', '#198A001F'),
  },
  surfaceTransparentWarning: {
    name: 'surface-transparent-warning',
    values: v('#FA5F051F', '#FA5F0533', '#E154001F', '#E1540033', '#D958001F'),
  },
  // минорные статусные заливки — есть во всех четырёх темах; HC light в tokens.ts их нет
  surfacePositiveMinor: {
    name: 'surface-positive-minor',
    values: v('#9EFAAF', '#0A2B10', '#AFFFB1', '#0F2D11'),
  },
  surfaceNegativeMinor: {
    name: 'surface-negative-minor',
    values: v('#FFE0E3', '#4A0D13', '#FEDFDE', '#480B11'),
  },
  surfaceWarningMinor: {
    name: 'surface-warning-minor',
    values: v('#FEE2D2', '#3D1D0A', '#FEE1D6', '#3C1C0F'),
  },
  surfaceInfoMinor: {
    name: 'surface-info-minor',
    values: v('#CFECFF', '#0C283B', '#D3EBFF', '#09283D'),
  },
  // в beta-темах токенов *-light нет — значения null, пока их не добавят или не выберут другой токен
  dataYellowLight: {
    name: 'data-yellow-light',
    values: v('#FFE4AE', '#211807', null, null, null),
  },
  dataBlueLight: {
    name: 'data-blue-light',
    values: v('#EDF8FF', '#0A1924', null, null, null),
  },
  // TODO HC: в tokens.ts значение названо dataOrange — подтвердить, что это data-yellow контрастной темы
  dataYellow: {
    name: 'data-yellow',
    values: v('#F3A912', '#A16B00', '#E9A431', '#9A6700', '#D49100'),
  },
  textPrimary: {
    name: 'text-primary',
    values: v('#13181BF5', '#F2F5F8F5', '#14191DF5', '#F3F7FAF5', '#13181BF5'),
    hover: v('#13181B93', '#F2F5F893', '#151A1E93', '#F4F8FA93', '#13181B93'),
    active: v('#13181BC4', '#F2F5F8C4', '#151A1EC4', '#F4F8FAC4', '#13181BC4'),
  },
});

/** Фон ячейки, surface-solid-primary и заливка выделения — из той же таблицы, отдельно ничего передавать не нужно. */
export const CELL: CellTokens = {
  card: SEMANTIC.surfaceSolidCard,
  primary: SEMANTIC.surfaceSolidPrimary,
  selection: SEMANTIC.surfaceTransparentAccent,
};

/**
 * Цвета таблицы: ключ как в glide-colors.ts / custom-colors.ts → семантический токен + состояние.
 * Состояния заливки: rest — токен; hover — +δ по лучу; active — выделение, наложение
 * surface-transparent-accent на цвет покоя; hoverActive = +1δ по лучу от цвета выделения (hover на выделении
 * показывается; макет «Выделение ячеек» здесь ошибался, правится 18.09).
 */
export const TABLE_COLORS: TableColorMap<keyof typeof SEMANTIC> = {
  // фон ячейки и строка под курсором
  bgCell: { source: 'surfaceSolidCard', state: 'rest', paints: 'фон ячейки' },
  bgRowHovered: {
    source: 'surfaceSolidCard',
    state: 'hover',
    paints: 'строка под курсором',
  },

  // шапка
  bgHeader: {
    source: 'surfaceAccentMinor',
    state: 'rest',
    paints: 'шапка, итоговая строка',
  },
  bgHeaderHasFocus: {
    source: 'surfaceAccentMinor',
    state: 'rest',
    paints: 'шапка в фокусе',
  },
  bgGroupHeader: {
    source: 'surfaceAccentMinor',
    state: 'rest',
    paints: 'групповая шапка',
  },
  bgHeaderHovered: {
    source: 'surfaceAccentMinor',
    state: 'hover',
    paints: 'шапка под курсором',
  },
  bgGroupHeaderHovered: {
    source: 'surfaceAccentMinor',
    state: 'hover',
    paints: 'групповая шапка под курсором',
  },
  selectionServiceActiveBg: {
    source: 'surfaceAccentMinor',
    state: 'active',
    paints: 'шапка и служебная зона при выделении',
  },
  bgHeaderSelectedHovered: {
    source: 'surfaceAccentMinor',
    state: 'hoverActive',
    paints: 'выделенная шапка под курсором',
  },

  // отмеченная строка и служебные колонки
  selectionCheckboxBg: {
    source: 'surfaceAccentMinor',
    state: 'rest',
    paints: 'отмеченная строка',
  },
  selectionServiceBg: {
    source: 'surfaceAccentMinor',
    state: 'rest',
    paints: 'служебные колонки в покое',
  },
  bgSelectedRowHovered: {
    source: 'surfaceAccentMinor',
    state: 'hover',
    paints: 'отмеченная строка под курсором',
  },
  bgServiceRowHovered: {
    source: 'surfaceAccentMinor',
    state: 'hover',
    paints: 'служебные колонки строки под курсором',
  },
  selectionServiceActiveHoveredBg: {
    source: 'surfaceAccentMinor',
    state: 'hoverActive',
    paints: 'выделенная служебная зона под курсором',
  },

  // выделение = наложение surface-transparent-accent на подложку: на белом #E2F1FB (light), на отмеченной строке #D1E9F8
  selectionActiveBg: {
    source: 'surfaceSolidCard',
    state: 'active',
    paints: 'активная ячейка, выделенные колонка/строка на белом',
  },
  accentLight: {
    source: 'surfaceSolidCard',
    state: 'active',
    paints: 'заливка диапазона Glide на белом',
  },
  selectionActiveCheckboxBg: {
    source: 'surfaceAccentMinor',
    state: 'active',
    paints: 'активная ячейка в отмеченной строке',
  },
  selectionActiveHoveredBg: {
    source: 'surfaceSolidCard',
    state: 'hoverActive',
    paints: 'выделение в строке под курсором (= выделение)',
  },
  selectionActiveCheckboxHoveredBg: {
    source: 'surfaceAccentMinor',
    state: 'hoverActive',
    paints: 'выделение в отмеченной строке под курсором',
  },

  // редактирование — токены data-yellow-light / data-blue-light (в beta их нет)
  bgEditableCell: {
    source: 'dataYellowLight',
    state: 'rest',
    paints: 'редактируемая ячейка',
  },
  bgEditableCellHovered: {
    source: 'dataYellowLight',
    state: 'hover',
    paints: 'редактируемая ячейка под курсором',
  },
  bgEditableCellActive: {
    source: 'dataYellowLight',
    state: 'active',
    paints: 'редактируемая ячейка в диапазоне выделения',
  },
  bgEditableCellActiveHovered: {
    source: 'dataYellowLight',
    state: 'hoverActive',
    paints: 'редактируемая ячейка в выделении под курсором',
  },
  editedSuccessfullyCellColor: {
    source: 'dataBlueLight',
    state: 'rest',
    paints: 'успешно сохранённая ячейка',
  },
  editedSuccessfullyCellHoverColor: {
    source: 'dataBlueLight',
    state: 'hover',
    paints: 'сохранённая ячейка под курсором',
  },
  editedSuccessfullyCellActiveColor: {
    source: 'dataBlueLight',
    state: 'active',
    paints: 'сохранённая ячейка в диапазоне выделения',
  },
  editedSuccessfullyCellActiveHoverColor: {
    source: 'dataBlueLight',
    state: 'hoverActive',
    paints: 'сохранённая ячейка в выделении под курсором',
  },

  // ячейки, окрашенные статусом — потребитель задаёт bgCell через themeOverride; четыре стандартных заливки
  bgCellPositive: {
    source: 'surfaceTransparentPositive',
    state: 'rest',
    paints: 'ячейка со статусом positive',
  },
  bgCellPositiveHovered: {
    source: 'surfaceTransparentPositive',
    state: 'hover',
    paints: 'positive под курсором',
  },
  bgCellPositiveActive: {
    source: 'surfaceTransparentPositive',
    state: 'active',
    paints: 'positive в выделении',
  },
  bgCellPositiveActiveHovered: {
    source: 'surfaceTransparentPositive',
    state: 'hoverActive',
    paints: 'positive в выделении под курсором',
  },
  bgCellNegative: {
    source: 'surfaceNegativeMinor',
    state: 'rest',
    paints: 'ячейка со статусом negative',
  },
  bgCellNegativeHovered: {
    source: 'surfaceNegativeMinor',
    state: 'hover',
    paints: 'negative под курсором',
  },
  bgCellNegativeActive: {
    source: 'surfaceNegativeMinor',
    state: 'active',
    paints: 'negative в выделении',
  },
  bgCellNegativeActiveHovered: {
    source: 'surfaceNegativeMinor',
    state: 'hoverActive',
    paints: 'negative в выделении под курсором',
  },
  bgCellWarning: {
    source: 'surfaceTransparentWarning',
    state: 'rest',
    paints: 'ячейка со статусом warning',
  },
  bgCellWarningHovered: {
    source: 'surfaceTransparentWarning',
    state: 'hover',
    paints: 'warning под курсором',
  },
  bgCellWarningActive: {
    source: 'surfaceTransparentWarning',
    state: 'active',
    paints: 'warning в выделении',
  },
  bgCellWarningActiveHovered: {
    source: 'surfaceTransparentWarning',
    state: 'hoverActive',
    paints: 'warning в выделении под курсором',
  },
  bgCellInfo: {
    source: 'surfaceInfoMinor',
    state: 'rest',
    paints: 'ячейка со статусом info',
  },
  bgCellInfoHovered: {
    source: 'surfaceInfoMinor',
    state: 'hover',
    paints: 'info под курсором',
  },
  bgCellInfoActive: {
    source: 'surfaceInfoMinor',
    state: 'active',
    paints: 'info в выделении',
  },
  bgCellInfoActiveHovered: {
    source: 'surfaceInfoMinor',
    state: 'hoverActive',
    paints: 'info в выделении под курсором',
  },

  // текст, обводки, акцент — пока из темы (правило для «чернил» отдельно)
  textDark: { source: 'textPrimary', state: 'rest', paints: 'текст ячеек' },
  textHeader: { source: 'textPrimary', state: 'rest', paints: 'текст шапки' },
  textHeaderSelected: {
    source: 'textPrimary',
    state: 'rest',
    paints: 'текст выделенной шапки',
  },
  textGroupHeader: {
    source: 'textPrimary',
    state: 'rest',
    paints: 'текст групповой шапки',
  },
  borderColor: {
    source: 'outlineSolidPrimary',
    state: 'rest',
    paints: 'сетка',
  },
  accentColor: {
    source: 'outlineAccent',
    state: 'rest',
    paints: 'рамка выделения и редактора',
  },
  hiddenColumnsIndicatorColor: {
    source: 'outlineAccent',
    state: 'rest',
    paints: 'индикатор скрытых столбцов',
  },
  errorOutlineColor: {
    source: 'surfaceNegative',
    state: 'rest',
    usage: 'outline',
    paints: 'рамка ячейки с ошибкой',
  },

  // затухание при скролле — статично
  fadeWhite: {
    source: 'surfaceSolidCard',
    state: 'rest',
    usage: 'static',
    paints: 'затухание на белом блоке',
  },
  fadeGray: {
    source: 'backgroundPrimary',
    state: 'rest',
    paints: 'затухание на сером блоке',
  },
};
