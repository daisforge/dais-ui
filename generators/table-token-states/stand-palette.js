/**
 * Палитра контрастных тем с заданными множителями шага: тот же расчёт, что у
 * генератора (npm run table-colors:palette), только на лету. Нужна стенду
 * ColoringStates в Storybook, где множитель подбирается ползунком. Файл на JS
 * с объявлением типов рядом (stand-palette.d.ts): Storybook проверяет типы
 * строже, чем код генератора в code/, а его не правим.
 *
 * Временных значений слоя интеграции у контрастных тем нет, поэтому результат
 * совпадает со сгенерированной палитрой при тех же множителях.
 */
import { CLEAN_VIEW_COLORS, CLEAN_VIEW_SEMANTIC } from './clean-view-colors';
import {
  CELL,
  SEMANTIC,
  TABLE_COLORS,
  THEME_SETTINGS,
} from './code/table-token-sources';
import { buildTableColors } from './code/table-token-states';

export const HC_THEMES = ['highContrastLight', 'highContrastDark'];

export const defaultStepFactor = (theme) => {
  const setting = THEME_SETTINGS[theme];
  return setting.stepFactor ?? (setting.mode === 'dark' ? 1.2 : 1);
};

export const buildHcPalette = (factors) => {
  const settings = { ...THEME_SETTINGS };
  HC_THEMES.forEach((theme) => {
    settings[theme] = { ...THEME_SETTINGS[theme], stepFactor: factors[theme] };
  });
  const byKey = buildTableColors(
    { ...TABLE_COLORS, ...CLEAN_VIEW_COLORS },
    { ...SEMANTIC, ...CLEAN_VIEW_SEMANTIC },
    settings,
    CELL,
  );
  const pick = (theme) =>
    Object.fromEntries(
      Object.entries(byKey)
        .map(([key, record]) => [key, record[theme]])
        .filter(([, hex]) => typeof hex === 'string'),
    );
  return Object.fromEntries(HC_THEMES.map((theme) => [theme, pick(theme)]));
};
