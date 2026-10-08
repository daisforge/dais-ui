/**
 * Какие цвета нужны таблице и где их искать в темах атомарной команды.
 * Это единственный файл, который правят руками: добавили токен — дописали
 * его сюда и перезапустили генератор. Остальные файлы lib/ — механика.
 *
 * KEYS — список цветов, которые получат canvas-рендеры таблицы (текст,
 * бейджи, кнопки внутри ячеек). Из него строится тип `Tokens`
 * (packages/ui-kit/src/components/TableGlide/tokens.ts) — то, что приходит
 * потребителю в `theme.tokens` в кастомных рендерах. Убрать ключ отсюда =
 * сломать код потребителя, который его читает.
 *
 * MAPPING — как найти цвет ключа в CSS темы. По умолчанию имя ключа
 * переводится в имя CSS-переменной: textPrimary → --text-primary. Записи в
 * MAPPING нужны только там, где это правило не работает. Их четыре вида:
 *
 *  1) записи нет — переменная ищется по имени ключа (см. выше);
 *  2) `var` — переменная называется иначе, чем ключ. Наши старые имена
 *     и имена атомарной команды разошлись (dataPositive у нас =
 *     --data-green-minor у них); пары найдены сравнением цветов;
 *  3) `alpha` — цвет переменной с другой прозрачностью. Пример:
 *     surfaceTransparentAccent20 = цвет --surface-transparent-accent с
 *     прозрачностью 20%. Число в конце имени ключа — процент непрозрачности,
 *     в записи он задан двумя hex-цифрами: 1E ≈ 12%, 33 = 20%, 42 ≈ 26%,
 *     8E ≈ 56%;
 *  4) `pin` — цвет задан руками: в CSS тем подходящей переменной нет или
 *     соответствие не подтвердил дизайнер. Такие значения не обновляются
 *     при обновлении пакетов и все попадают в report.md с причиной.
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
  // Цвета данных (графики, бейджи): наше старое имя → имя переменной у
  // атомарной команды. Пары найдены сравнением цветов в светлой теме.
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

  // Два старых ключа третичного текста. Своих значений у них в темах нет,
  // по решению дизайнера оба берут обычный --text-tertiary.
  textTertiaryBase: { var: 'text-tertiary' },
  textTertiaryVariant: { var: 'text-tertiary' },

  // Цвет переменной с другой прозрачностью (подробно — в шапке файла).
  // Второе значение — непрозрачность двумя hex-цифрами: 1E ≈ 12%, 33 = 20%,
  // 42 ≈ 26%, 8E ≈ 56%. Число в конце ключа — тот же процент.
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

  // Цвета, заданные руками. Значения перенесены из старого, написанного
  // руками tokens.ts. Темы без своего значения берут значение светлой темы.
  // Ни один из этих ключей сейчас не используется в коде таблицы; они
  // оставлены, чтобы не сломать потребителей, читающих theme.tokens.
  // Решение — за дизайнером: подтвердить замену или убрать ключ.
  onDarkTextPrimary96: {
    pin: { light: '#F7F9FBF4' },
    why: 'похожий --on-dark-text-primary другого оттенка (#F2F5F8, а не #F7F9FB) — откуда взят этот цвет, неизвестно',
  },
  onDarkTextPrimary56: {
    pin: { light: '#F7F9FB8E' },
    why: 'похожий --on-dark-text-primary другого оттенка (#F2F5F8, а не #F7F9FB) — откуда взят этот цвет, неизвестно',
  },
  onDarkTextPrimary28: {
    pin: { light: '#F7F9FB47' },
    why: 'похожий --on-dark-text-primary другого оттенка (#F2F5F8, а не #F7F9FB) — откуда взят этот цвет, неизвестно',
  },
  dataTeal: {
    pin: { light: '#14CC98', highContrastLight: '#00B082' },
    why: 'переменной data-teal в темах нет; самый похожий --data-arctic (#00AC7B) — другой цвет, замену должен подтвердить дизайнер',
  },
};
