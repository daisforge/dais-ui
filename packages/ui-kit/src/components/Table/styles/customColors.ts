import { TABLE_STATE_COLORS } from '../../TableGlide/theming/table-colors.generated';
import { ActiveTheme } from '../types/utils.type';

// Цвета устаревшей Table по темам.
// light / dark / highContrastLight / betaCoreLight — прежние значения, не
// меняются (чтобы у тех, кто на них сидит, ничего не поменялось).
// betaCoreDark и highContrastDark добавлены позже: betaCoreDark берётся из
// палитры TableCanvas, highContrastDark повторяет dark (своих значений у
// дизайнера для неё нет).
//
// betaCoreLight: headerColor привязан к токену surface-accent-minor (beta #EFF8FF),
// остальные цвета редактируемых/сохранённых ячеек в теме токенов не имеют —
// повторяют light.
const CUSTOM_COLORS = {
  headerColor: {
    light: '#ECF6FC',
    dark: '#071A26',
    highContrastLight: '#CFE5F2',
    betaCoreLight: '#EFF8FF',
    highContrastDark: '#071A26',
    betaCoreDark: TABLE_STATE_COLORS.bgHeader.betaCoreDark,
  },
  editableCellColor: {
    light: '#FFF6E5',
    dark: '#211807',
    highContrastLight: '#F1DDB8',
    betaCoreLight: '#FFF6E5',
    highContrastDark: '#211807',
    betaCoreDark: TABLE_STATE_COLORS.bgEditableCell.betaCoreDark,
  },
  editableCellHoverColor: {
    light: '#FFF4E0',
    dark: '#2A1F09',
    highContrastLight: '#E8D4AD',
    betaCoreLight: '#FFF4E0',
    highContrastDark: '#2A1F09',
    betaCoreDark: TABLE_STATE_COLORS.bgEditableCellHovered.betaCoreDark,
  },
  editedSuccessfullyCellColor: {
    light: '#EDF8FF',
    dark: '#0A1924',
    highContrastLight: '#DAE8F1',
    betaCoreLight: '#EDF8FF',
    highContrastDark: '#0A1924',
    betaCoreDark: TABLE_STATE_COLORS.editedSuccessfullyCellColor.betaCoreDark,
  },
  editedSuccessfullyCellHoverColor: {
    light: '#E6F5FF',
    dark: '#0C1E2C',
    highContrastLight: '#D0E0ED',
    betaCoreLight: '#E6F5FF',
    highContrastDark: '#0C1E2C',
    betaCoreDark:
      TABLE_STATE_COLORS.editedSuccessfullyCellHoverColor.betaCoreDark,
  },
} as const;
/**
 * Функция для автоматического создания css-токенов на основе объекта CUSTOM_COLORS с сохранением типов
 */
export const getCustomColors = () => {
  type Key = keyof typeof CUSTOM_COLORS;

  const customColorTokensKeys = Object.fromEntries(
    Object.keys(CUSTOM_COLORS).map((k) => [k, `--${k}`]),
  ) as { [K in Key]: `--${K}` };

  const customColorTokensAsArr = Object.keys(customColorTokensKeys).map(
    (k) => [k as Key, `var(${customColorTokensKeys[k as Key]})`] as const,
  );

  const customColorTokens = Object.fromEntries(customColorTokensAsArr) as {
    [K in keyof typeof customColorTokensKeys]: `var(${(typeof customColorTokensKeys)[K]})`;
  };

  // type GlobalVars<K extends Key, Theme extends ActiveTheme> = Record<
  //   (typeof customColorTokensKeys)[K],
  //   (typeof CUSTOM_COLORS)[K][Theme]
  // >;

  const customColorGlobalVars = (theme: ActiveTheme) => {
    const vars = customColorTokensAsArr.map(([k]) => {
      const key = k as Key;
      return `${customColorTokensKeys[key]}: ${CUSTOM_COLORS[key][theme]};` as const;
    });

    return vars.join('\n');
  };
  return { customColorTokensKeys, customColorTokens, customColorGlobalVars };
  /* ${CUSTOM_TOKENS_KEYS.headerColorKey}: ${CUSTOM_COLORS.headerColor[theme]}; */
};
