import { TABLE_STATE_COLORS } from '@ui-kit/components/TableGlide/theming/table-colors.generated';

import { ActiveTheme } from '../TableGlideInstance/type';

// Источник — палитра «токен × состояние» (generators/table-token-states):
// headerColor — surface-accent-minor, редактируемая ячейка — data-yellow-light,
// сохранённая — data-blue-light; руками значения не поддерживаются.
const CUSTOM_COLORS = {
  headerColor: TABLE_STATE_COLORS.bgHeader,
  editableCellColor: TABLE_STATE_COLORS.bgEditableCell,
  editableCellHoverColor: TABLE_STATE_COLORS.bgEditableCellHovered,
  editedSuccessfullyCellColor: TABLE_STATE_COLORS.editedSuccessfullyCellColor,
  editedSuccessfullyCellHoverColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellHoverColor,
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
