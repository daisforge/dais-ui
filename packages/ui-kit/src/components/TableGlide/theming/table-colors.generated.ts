/**
 * АВТОГЕНЕРИРОВАНО из generators/table-token-states — НЕ ПРАВИТЬ РУКАМИ.
 * Перегенерация из корня: npm run table-colors:palette
 *
 * Модель: каждый цвет таблицы = семантический токен темы × состояние
 * (rest / hover / hover2 / active / hoverActive). Расчёт в OKLCH идёт при
 * генерации, здесь — только готовые непрозрачные цвета. Подробности:
 * generators/table-token-states/README.md.
 * Значения с пометкой «временно» подставлены вместо токенов, которых пока
 * нет в темах (generators/table-token-states/INTEGRATION-STATUS.md,
 * «Открытые вопросы»).
 */

export const TABLE_COLOR_THEMES = ['light', 'dark', 'betaCoreLight', 'betaCoreDark', 'highContrastLight', 'highContrastDark'] as const;

export type TableColorTheme = (typeof TABLE_COLOR_THEMES)[number];

export const TABLE_STATE_COLORS = {
  /** surface-solid-card · rest — фон ячейки */
  bgCell: {
    light: '#FFFFFF',
    dark: '#060A0C',
    betaCoreLight: '#FFFFFF',
    betaCoreDark: '#060A0D',
    highContrastLight: '#FFFFFF',
    highContrastDark: '#060A0C',
  },
  /** surface-solid-card · hover — строка под курсором */
  bgRowHovered: {
    light: '#F5F7F9',
    dark: '#0C1013',
    betaCoreLight: '#F4F8FA',
    betaCoreDark: '#0C1013',
    highContrastLight: '#E8EEF2', // временно: в HC нет surface-solid-primary, текущее ручное значение
    highContrastDark: '#0C1013',
  },
  /** surface-accent-minor · rest — шапка, итоговая строка */
  bgHeader: {
    light: '#ECF6FC',
    dark: '#071A26',
    betaCoreLight: '#EFF8FF',
    betaCoreDark: '#0C1A24',
    highContrastLight: '#CFE5F2',
    highContrastDark: '#071A26',
  },
  /** surface-accent-minor · rest — шапка в фокусе */
  bgHeaderHasFocus: {
    light: '#ECF6FC',
    dark: '#071A26',
    betaCoreLight: '#EFF8FF',
    betaCoreDark: '#0C1A24',
    highContrastLight: '#CFE5F2',
    highContrastDark: '#071A26',
  },
  /** surface-accent-minor · rest — групповая шапка */
  bgGroupHeader: {
    light: '#ECF6FC',
    dark: '#071A26',
    betaCoreLight: '#EFF8FF',
    betaCoreDark: '#0C1A24',
    highContrastLight: '#CFE5F2',
    highContrastDark: '#071A26',
  },
  /** surface-accent-minor · hover — шапка под курсором */
  bgHeaderHovered: {
    light: '#DEF0FA',
    dark: '#0A212F',
    betaCoreLight: '#E1F2FF',
    betaCoreDark: '#11212D',
    highContrastLight: '#C2DEEE',
    highContrastDark: '#0A212F',
  },
  /** surface-accent-minor · hover — групповая шапка под курсором */
  bgGroupHeaderHovered: {
    light: '#DEF0FA',
    dark: '#0A212F',
    betaCoreLight: '#E1F2FF',
    betaCoreDark: '#11212D',
    highContrastLight: '#C2DEEE',
    highContrastDark: '#0A212F',
  },
  /** surface-accent-minor · active — шапка и служебная зона при выделении */
  selectionServiceActiveBg: {
    light: '#D1E9F8',
    dark: '#09314B',
    betaCoreLight: '#D2EBFB',
    betaCoreDark: '#0A3248',
    highContrastLight: '#B6D8EE',
    highContrastDark: '#09314B',
  },
  /** surface-accent-minor · hoverActive — выделенная шапка под курсором */
  bgHeaderSelectedHovered: {
    light: '#C3E3F6',
    dark: '#0C3956',
    betaCoreLight: '#C4E5FA',
    betaCoreDark: '#0D3A53',
    highContrastLight: '#A9D1EB',
    highContrastDark: '#0C3956',
  },
  /** surface-accent-minor · rest — отмеченная строка; выбранная строка (highlightActiveType = row) */
  selectionCheckboxBg: {
    light: '#ECF6FC',
    dark: '#071A26',
    betaCoreLight: '#EFF8FF',
    betaCoreDark: '#0C1A24',
    highContrastLight: '#CFE5F2',
    highContrastDark: '#071A26',
  },
  /** surface-accent-minor · rest — служебные колонки в покое */
  selectionServiceBg: {
    light: '#ECF6FC',
    dark: '#071A26',
    betaCoreLight: '#EFF8FF',
    betaCoreDark: '#0C1A24',
    highContrastLight: '#CFE5F2',
    highContrastDark: '#071A26',
  },
  /** surface-accent-minor · hover — отмеченная строка под курсором; выбранная строка под курсором; выбранная строка с нажатым чекбоксом */
  bgSelectedRowHovered: {
    light: '#DEF0FA',
    dark: '#0A212F',
    betaCoreLight: '#E1F2FF',
    betaCoreDark: '#11212D',
    highContrastLight: '#C2DEEE',
    highContrastDark: '#0A212F',
  },
  /** surface-accent-minor · hover2 — выбранная строка с нажатым чекбоксом под курсором */
  bgSelectedRowActiveHovered: {
    light: '#D0EAF8',
    dark: '#0E2839',
    betaCoreLight: '#D3ECFF',
    betaCoreDark: '#162836',
    highContrastLight: '#B5D7EA',
    highContrastDark: '#0E2839',
  },
  /** surface-accent-minor · hover — служебные колонки строки под курсором */
  bgServiceRowHovered: {
    light: '#DEF0FA',
    dark: '#0A212F',
    betaCoreLight: '#E1F2FF',
    betaCoreDark: '#11212D',
    highContrastLight: '#C2DEEE',
    highContrastDark: '#0A212F',
  },
  /** surface-accent-minor · hoverActive — выделенная служебная зона под курсором */
  selectionServiceActiveHoveredBg: {
    light: '#C3E3F6',
    dark: '#0C3956',
    betaCoreLight: '#C4E5FA',
    betaCoreDark: '#0D3A53',
    highContrastLight: '#A9D1EB',
    highContrastDark: '#0C3956',
  },
  /** surface-solid-card · active — активная ячейка, выделенные колонка/строка на белом */
  selectionActiveBg: {
    light: '#E2F1FB',
    dark: '#082436',
    betaCoreLight: '#E0F2FB',
    betaCoreDark: '#052536',
    highContrastLight: '#E0EEFA',
    highContrastDark: '#082436',
  },
  /** surface-solid-card · active — заливка диапазона Glide на белом */
  accentLight: {
    light: '#E2F1FB',
    dark: '#082436',
    betaCoreLight: '#E0F2FB',
    betaCoreDark: '#052536',
    highContrastLight: '#E0EEFA',
    highContrastDark: '#082436',
  },
  /** surface-accent-minor · active — активная ячейка в отмеченной строке */
  selectionActiveCheckboxBg: {
    light: '#D1E9F8',
    dark: '#09314B',
    betaCoreLight: '#D2EBFB',
    betaCoreDark: '#0A3248',
    highContrastLight: '#B6D8EE',
    highContrastDark: '#09314B',
  },
  /** surface-solid-card · hoverActive — выделение в строке под курсором (= выделение) */
  selectionActiveHoveredBg: {
    light: '#D5EBF9',
    dark: '#0B2B40',
    betaCoreLight: '#D2ECF9',
    betaCoreDark: '#072D40',
    highContrastLight: '#D3E7F8',
    highContrastDark: '#0B2B40',
  },
  /** surface-accent-minor · hoverActive — выделение в отмеченной строке под курсором */
  selectionActiveCheckboxHoveredBg: {
    light: '#C3E3F6',
    dark: '#0C3956',
    betaCoreLight: '#C4E5FA',
    betaCoreDark: '#0D3A53',
    highContrastLight: '#A9D1EB',
    highContrastDark: '#0C3956',
  },
  /** data-yellow-light · rest — редактируемая ячейка */
  bgEditableCell: {
    light: '#FFF6E5', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    dark: '#211807',
    betaCoreLight: '#FFF5E7', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    betaCoreDark: '#211607', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastLight: '#F1DDB8', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastDark: '#211807',
  },
  /** data-yellow-light · hover — редактируемая ячейка под курсором */
  bgEditableCellHovered: {
    light: '#FFEFD2', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    dark: '#291F0A',
    betaCoreLight: '#FFEDD5', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    betaCoreDark: '#291C0A', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastLight: '#EED5A8', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastDark: '#291F0A',
  },
  /** data-yellow-light · active — редактируемая ячейка в диапазоне выделения */
  bgEditableCellActive: {
    light: '#E2E9E4', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    dark: '#1E2F32',
    betaCoreLight: '#E0E9E5', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    betaCoreDark: '#1A2E31', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastLight: '#D4D0BB', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastDark: '#1E2F32',
  },
  /** data-yellow-light · hoverActive — редактируемая ячейка в выделении под курсором */
  bgEditableCellActiveHovered: {
    light: '#D8E2DB', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    dark: '#24373A',
    betaCoreLight: '#D6E2DC', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    betaCoreDark: '#1F3639', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastLight: '#CDC8B0', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastDark: '#24373A',
  },
  /** data-yellow-light · hover2 — редактируемая ячейка выбранной строки под курсором */
  bgEditableCellRowActiveHovered: {
    light: '#FFE8BF', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    dark: '#31260E',
    betaCoreLight: '#FFE5C3', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    betaCoreDark: '#32230E', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastLight: '#EBCD97', // временно: data-yellow-light (light amber-100; beta Amber/100|950; HC — текущее значение)
    highContrastDark: '#31260E',
  },
  /** data-blue-light · rest — успешно сохранённая ячейка */
  editedSuccessfullyCellColor: {
    light: '#EDF8FF',
    dark: '#0A1924',
    betaCoreLight: '#EFF8FF', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    betaCoreDark: '#0C1A24', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastLight: '#DAE8F1', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastDark: '#0A1924',
  },
  /** data-blue-light · hover — сохранённая ячейка под курсором */
  editedSuccessfullyCellHoverColor: {
    light: '#DEF2FF',
    dark: '#0E202D',
    betaCoreLight: '#E1F2FF', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    betaCoreDark: '#11212D', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastLight: '#CEE1ED', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastDark: '#0E202D',
  },
  /** data-blue-light · active — сохранённая ячейка в диапазоне выделения */
  editedSuccessfullyCellActiveColor: {
    light: '#D2EBFB',
    dark: '#0B3049',
    betaCoreLight: '#D2EBFB', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    betaCoreDark: '#0A3248', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastLight: '#BFDAED', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastDark: '#0B3049',
  },
  /** data-blue-light · hoverActive — сохранённая ячейка в выделении под курсором */
  editedSuccessfullyCellActiveHoverColor: {
    light: '#C4E5FA',
    dark: '#0E3854',
    betaCoreLight: '#C4E5FA', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    betaCoreDark: '#0D3A53', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastLight: '#B3D3E9', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastDark: '#0E3854',
  },
  /** data-blue-light · hover2 — сохранённая ячейка выбранной строки под курсором */
  editedSuccessfullyCellRowActiveHoverColor: {
    light: '#CFECFF',
    dark: '#122736',
    betaCoreLight: '#D3ECFF', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    betaCoreDark: '#162836', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastLight: '#C2DAE9', // временно: data-blue-light (beta Blue/100|950; HC — текущее значение)
    highContrastDark: '#122736',
  },
  /** surface-transparent-positive · rest — ячейка со статусом positive */
  bgCellPositive: {
    light: '#E3F3E6',
    dark: '#0A2814',
    betaCoreLight: '#E4F3E7',
    betaCoreDark: '#0B2816',
    highContrastLight: '#E3F1E0',
    highContrastDark: '#0A2814',
  },
  /** surface-transparent-positive · hover — positive под курсором */
  bgCellPositiveHovered: {
    light: '#D7EEDB',
    dark: '#0E3019',
    betaCoreLight: '#D8EEDC',
    betaCoreDark: '#0F301B',
    highContrastLight: '#D8EBD4',
    highContrastDark: '#0E3019',
  },
  /** surface-transparent-positive · active — positive в выделении */
  bgCellPositiveActive: {
    light: '#C9E6E5',
    dark: '#0B3C3D',
    betaCoreLight: '#C8E7E5',
    betaCoreDark: '#093D3D',
    highContrastLight: '#C7E2DE',
    highContrastDark: '#0B3C3D',
  },
  /** surface-transparent-positive · hoverActive — positive в выделении под курсором */
  bgCellPositiveActiveHovered: {
    light: '#BBE0DF',
    dark: '#0E4546',
    betaCoreLight: '#BAE1DF',
    betaCoreDark: '#0C4646',
    highContrastLight: '#BADCD7',
    highContrastDark: '#0E4546',
  },
  /** surface-transparent-positive · hover2 — positive в выбранной строке под курсором */
  bgCellPositiveRowActiveHovered: {
    light: '#CBE9D0',
    dark: '#12381E',
    betaCoreLight: '#CCE9D1',
    betaCoreDark: '#133821',
    highContrastLight: '#CDE5C8',
    highContrastDark: '#12381E',
  },
  /** surface-negative-minor · rest — ячейка со статусом negative */
  bgCellNegative: {
    light: '#FFE0E3',
    dark: '#4A0D13',
    betaCoreLight: '#FEDFDE',
    betaCoreDark: '#480B11',
    highContrastLight: '#FFE0E3', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#4A0D13',
  },
  /** surface-negative-minor · hover — negative под курсором */
  bgCellNegativeHovered: {
    light: '#FED6DA',
    dark: '#561117',
    betaCoreLight: '#FDD5D4',
    betaCoreDark: '#540E15',
    highContrastLight: '#FED6DA', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#561117',
  },
  /** surface-negative-minor · active — negative в выделении */
  bgCellNegativeActive: {
    light: '#E2D6E3',
    dark: '#3F263C',
    betaCoreLight: '#DFD5DE',
    betaCoreDark: '#3A2639',
    highContrastLight: '#E2D6E3', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#3F263C',
  },
  /** surface-negative-minor · hoverActive — negative в выделении под курсором */
  bgCellNegativeActiveHovered: {
    light: '#DCCDDD',
    dark: '#482C45',
    betaCoreLight: '#D8CCD7',
    betaCoreDark: '#432C42',
    highContrastLight: '#DCCDDD', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#482C45',
  },
  /** surface-negative-minor · hover2 — negative в выбранной строке под курсором */
  bgCellNegativeRowActiveHovered: {
    light: '#FDCCD1',
    dark: '#62151B',
    betaCoreLight: '#FCCBCA',
    betaCoreDark: '#601119',
    highContrastLight: '#FDCCD1', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#62151B',
  },
  /** surface-transparent-warning · rest — ячейка со статусом warning */
  bgCellWarning: {
    light: '#FEECE1',
    dark: '#371B0B',
    betaCoreLight: '#FBEAE0',
    betaCoreDark: '#32190A',
    highContrastLight: '#FAEBE0',
    highContrastDark: '#371B0B',
  },
  /** surface-transparent-warning · hover — warning под курсором */
  bgCellWarningHovered: {
    light: '#FDE3D3',
    dark: '#41210F',
    betaCoreLight: '#F9E1D2',
    betaCoreDark: '#3C1F0E',
    highContrastLight: '#F8E2D2',
    highContrastDark: '#41210F',
  },
  /** surface-transparent-warning · active — warning в выделении */
  bgCellWarningActive: {
    light: '#E1E0E1',
    dark: '#2F3235',
    betaCoreLight: '#DCDFDF',
    betaCoreDark: '#283134',
    highContrastLight: '#DCDDDE',
    highContrastDark: '#2F3235',
  },
  /** surface-transparent-warning · hoverActive — warning в выделении под курсором */
  bgCellWarningActiveHovered: {
    light: '#CFDAE5',
    dark: '#363A3D',
    betaCoreLight: '#C7D9E7',
    betaCoreDark: '#2F393C',
    highContrastLight: '#D4D5D6',
    highContrastDark: '#363A3D',
  },
  /** surface-transparent-warning · hover2 — warning в выбранной строке под курсором */
  bgCellWarningRowActiveHovered: {
    light: '#FCDAC5',
    dark: '#4B2713',
    betaCoreLight: '#F7D8C4',
    betaCoreDark: '#462512',
    highContrastLight: '#F6D9C4',
    highContrastDark: '#4B2713',
  },
  /** surface-info-minor · rest — ячейка со статусом info */
  bgCellInfo: {
    light: '#CFECFF',
    dark: '#0C283B',
    betaCoreLight: '#D3EBFF',
    betaCoreDark: '#09283D',
    highContrastLight: '#CFECFF', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#0C283B',
  },
  /** surface-info-minor · hover — info под курсором */
  bgCellInfoHovered: {
    light: '#C0E6FF',
    dark: '#103045',
    betaCoreLight: '#C5E5FF',
    betaCoreDark: '#0C3048',
    highContrastLight: '#C0E6FF', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#103045',
  },
  /** surface-info-minor · active — info в выделении */
  bgCellInfoActive: {
    light: '#B8E0FB',
    dark: '#0D3C5C',
    betaCoreLight: '#B9E0FB',
    betaCoreDark: '#073D5C',
    highContrastLight: '#B8E0FB', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#0D3C5C',
  },
  /** surface-info-minor · hoverActive — info в выделении под курсором */
  bgCellInfoActiveHovered: {
    light: '#AADAFA',
    dark: '#104467',
    betaCoreLight: '#ABDAFA',
    betaCoreDark: '#094567',
    highContrastLight: '#AADAFA', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#104467',
  },
  /** surface-info-minor · hover2 — info в выбранной строке под курсором */
  bgCellInfoRowActiveHovered: {
    light: '#B1E0FF',
    dark: '#14384F',
    betaCoreLight: '#B7DFFF',
    betaCoreDark: '#0F3853',
    highContrastLight: '#B1E0FF', // временно: в HC нет минорного токена статуса, копия light
    highContrastDark: '#14384F',
  },
  /** text-primary · rest — текст ячеек */
  textDark: {
    light: '#13181BF5',
    dark: '#F2F5F8F5',
    betaCoreLight: '#14191DF5',
    betaCoreDark: '#F3F7FAF5',
    highContrastLight: '#13181BF5',
    highContrastDark: '#F2F5F8F5',
  },
  /** text-primary · rest — текст шапки */
  textHeader: {
    light: '#13181BF5',
    dark: '#F2F5F8F5',
    betaCoreLight: '#14191DF5',
    betaCoreDark: '#F3F7FAF5',
    highContrastLight: '#13181BF5',
    highContrastDark: '#F2F5F8F5',
  },
  /** text-primary · rest — текст выделенной шапки */
  textHeaderSelected: {
    light: '#13181BF5',
    dark: '#F2F5F8F5',
    betaCoreLight: '#14191DF5',
    betaCoreDark: '#F3F7FAF5',
    highContrastLight: '#13181BF5',
    highContrastDark: '#F2F5F8F5',
  },
  /** text-primary · rest — текст групповой шапки */
  textGroupHeader: {
    light: '#13181BF5',
    dark: '#F2F5F8F5',
    betaCoreLight: '#14191DF5',
    betaCoreDark: '#F3F7FAF5',
    highContrastLight: '#13181BF5',
    highContrastDark: '#F2F5F8F5',
  },
  /** outline-solid-primary · rest — сетка */
  borderColor: {
    light: '#D5DFE6',
    dark: '#23292D',
    betaCoreLight: '#CFDBE4',
    betaCoreDark: '#262626',
    highContrastLight: '#C4CFD7',
    highContrastDark: '#23292D',
  },
  /** outline-accent · rest — рамка выделения и редактора */
  accentColor: {
    light: '#0B7ECB',
    dark: '#199AF0',
    betaCoreLight: '#0087CD',
    betaCoreDark: '#1F9EEB',
    highContrastLight: '#0058A2',
    highContrastDark: '#199AF0',
  },
  /** outline-accent · rest — индикатор скрытых столбцов */
  hiddenColumnsIndicatorColor: {
    light: '#0B7ECB',
    dark: '#199AF0',
    betaCoreLight: '#0087CD',
    betaCoreDark: '#1F9EEB',
    highContrastLight: '#0058A2',
    highContrastDark: '#199AF0',
  },
  /** surface-negative · rest — рамка ячейки с ошибкой */
  errorOutlineColor: {
    light: '#FF293E',
    dark: '#FF293E',
    betaCoreLight: '#F81C42',
    betaCoreDark: '#F81C42',
    highContrastLight: '#E7002F',
    highContrastDark: '#FF293E',
  },
  /** surface-solid-card · rest — затухание на белом блоке */
  fadeWhite: {
    light: '#FFFFFF',
    dark: '#060A0C',
    betaCoreLight: '#FFFFFF',
    betaCoreDark: '#060A0D',
    highContrastLight: '#FFFFFF',
    highContrastDark: '#060A0C',
  },
  /** background-primary · rest — затухание на сером блоке */
  fadeGray: {
    light: '#F2F5F8',
    dark: '#060A0C',
    betaCoreLight: '#F3F7FA',
    betaCoreDark: '#060A0D',
    highContrastLight: '#F2F5F8', // временно: в HC нет background-primary, копия light
    highContrastDark: '#060A0C',
  },
} as const;

export type TableStateColorKey = keyof typeof TABLE_STATE_COLORS;

/**
 * Параметры формулы состояний по темам — вход для рантайм-fillStates
 * (состояния произвольных цветов потребителя). cardHex — фон ячейки,
 * primaryHex — луч для цвета без хромы, selectionHex — заливка выделения с альфой.
 */
export const TABLE_FILL_PARAMS = {
  light: { mode: 'light', stepFactor: 1, cardHex: '#FFFFFFFF', primaryHex: '#F2F5F8', selectionHex: '#118CDF1F' },
  dark: { mode: 'dark', stepFactor: 1.2, cardHex: '#060A0C', primaryHex: '#13181B', selectionHex: '#118CDF33' },
  betaCoreLight: { mode: 'light', stepFactor: 1, cardHex: '#FFFFFF', primaryHex: '#F3F7FA', selectionHex: '#0090DA1F' },
  betaCoreDark: { mode: 'dark', stepFactor: 1.2, cardHex: '#060A0D', primaryHex: '#14191D', selectionHex: '#0090DA33' },
  highContrastLight: { mode: 'light', stepFactor: 1, cardHex: '#FFFFFF', primaryHex: null, selectionHex: '#0076D21F' },
  highContrastDark: { mode: 'dark', stepFactor: 1.2, cardHex: '#060A0C', primaryHex: '#13181B', selectionHex: '#118CDF33' },
} as const;
