import { ActiveTheme } from '../TableGlideInstance/type';

// betaCoreLight: headerColor привязан к токену surface-accent-minor (beta #EFF8FF),
// остальные тинты редактируемых/успешных ячеек в атомарке токенов не имеют —
// наследуют light до beta-значений от дизайнера.
const CUSTOM_COLORS = {
  headerColor: {
    light: '#ECF6FC',
    dark: '#071A26',
    highContrastLight: '#CFE5F2',
    betaCoreLight: '#EFF8FF',
  },
  editableCellColor: {
    light: '#FFF6E5',
    dark: '#211807',
    highContrastLight: '#F1DDB8',
    betaCoreLight: '#FFF6E5',
  },
  editableCellHoverColor: {
    light: '#FFF4E0',
    dark: '#2A1F09',
    highContrastLight: '#E8D4AD',
    betaCoreLight: '#FFF4E0',
  },
  editedSuccessfullyCellColor: {
    light: '#EDF8FF',
    dark: '#0A1924',
    highContrastLight: '#DAE8F1',
    betaCoreLight: '#EDF8FF',
  },
  editedSuccessfullyCellHoverColor: {
    light: '#E6F5FF',
    dark: '#0C1E2C',
    highContrastLight: '#D0E0ED',
    betaCoreLight: '#E6F5FF',
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
