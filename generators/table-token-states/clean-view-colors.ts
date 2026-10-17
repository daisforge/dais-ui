/**
 * Цвета «чистого» вида таблицы и зебры (tableConfig.appearance) — наш слой.
 *
 * Зачем отдельный файл: code/table-token-sources.ts — эталон дизайнера и
 * заменяется 1-в-1 при обновлениях, поэтому свои токены и ключи туда не
 * пишем. Здесь — только то, чего в карте дизайнера нет; считается это той же
 * формулой состояний через buildTableColors (см. emit-table-colors.ts).
 *
 * Статус: ключи с дизайнером не согласованы (макеты чистого вида дают только
 * токены светлой темы). Когда дизайн-система добавит их в свою карту, этот
 * файл удаляется, а emit берёт значения из code/.
 *
 * Источники hex: CSS тем @salutejs/sdds-themes 0.83.0 (light, dark),
 * @salutejs-ds/sdds_finai_beta_core 0.1.0, @salutejs-ds/sdds_finai_high_contrast 0.1.0.
 */
import type {
  SourceToken,
  TableColorMap,
  ThemeValues,
} from './code/table-token-states';

/** hex по темам: light, dark, betaCoreLight, betaCoreDark, highContrastLight, highContrastDark (= dark). */
const v = (
  light: string,
  dark: string,
  betaCoreLight: string,
  betaCoreDark: string,
  highContrastLight: string,
  highContrastDark: string = dark,
): ThemeValues => ({
  light,
  dark,
  betaCoreLight,
  betaCoreDark,
  highContrastLight,
  highContrastDark,
});

/** Токены темы, которых нет в SEMANTIC дизайнера. */
export const CLEAN_VIEW_SEMANTIC = {
  // текст шапки в чистом виде: серый, а не чёрный
  textSecondary: {
    name: 'text-secondary',
    values: v('#485056B0', '#D5DFE69E', '#475158B0', '#CFDBE49E', '#03070CB0'),
    hover: v('#485056FF', '#D5DFE6FF', '#475158FF', '#CFDBE4FF', '#03070CFF'),
    active: v('#485056D3', '#D5DFE6D3', '#475158D3', '#CFDBE4D3', '#03070CD3'),
  },
  // зебра: полупрозрачная серая заливка строк с чётным индексом, в палитру
  // попадает сплющенной на фон ячейки
  surfaceTransparentPrimary: {
    name: 'surface-transparent-primary',
    values: v('#D5DFE642', '#FFFFFF0F', '#CFDBE442', '#FFFFFF0F', '#AFC0CB4D'),
  },
} satisfies Record<string, SourceToken>;

/**
 * Ключи таблицы для чистого вида и зебры. Фон шапки и служебных колонок в
 * чистом виде берётся из ключей белого фона карты дизайнера (bgCell,
 * bgRowHovered, selectionActiveBg, selectionActiveHoveredBg), свой нужен
 * только цвет текста шапки и четыре состояния зебры.
 */
export const CLEAN_VIEW_COLORS: TableColorMap<
  keyof typeof CLEAN_VIEW_SEMANTIC
> = {
  textHeaderClean: {
    source: 'textSecondary',
    state: 'rest',
    paints: 'чистый вид: текст шапки, групповой и выделенной шапки',
  },
  // отмеченная чекбоксом и выбранная строка сильнее зебры и красятся своими
  // цветами; hover и выделение считаются от цвета зебры той же формулой
  bgZebraRow: {
    source: 'surfaceTransparentPrimary',
    state: 'rest',
    paints: 'зебра: строка с чётным индексом',
  },
  bgZebraRowHovered: {
    source: 'surfaceTransparentPrimary',
    state: 'hover',
    paints: 'зебра: строка с чётным индексом под курсором',
  },
  bgZebraRowActive: {
    source: 'surfaceTransparentPrimary',
    state: 'active',
    paints: 'зебра: выделенные ячейки строки с чётным индексом',
  },
  bgZebraRowActiveHovered: {
    source: 'surfaceTransparentPrimary',
    state: 'hoverActive',
    paints: 'зебра: выделенные ячейки строки с чётным индексом под курсором',
  },
};
