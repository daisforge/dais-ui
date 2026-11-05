/**
 * Палитра контрастных тем с заданными множителями шага: тот же расчёт, что у
 * генератора (npm run table-colors:palette), только на лету. Нужна стенду
 * ColoringStates в Storybook, где множитель подбирается ползунком.
 *
 * Временных значений слоя интеграции у контрастных тем нет, поэтому результат
 * совпадает со сгенерированной палитрой при тех же множителях.
 */
import { THEME_SETTINGS } from './code/table-token-sources';
import {
  buildIntegrationPalette,
  themeStepFactor,
} from './integration-palette';

export const HC_THEMES = ['highContrastLight', 'highContrastDark'];

export const defaultStepFactor = (theme) => themeStepFactor(theme);

export const buildHcPalette = (factors) => {
  const settings = { ...THEME_SETTINGS };
  HC_THEMES.forEach((theme) => {
    settings[theme] = { ...THEME_SETTINGS[theme], stepFactor: factors[theme] };
  });
  const byKey = buildIntegrationPalette(settings);
  const pick = (theme) =>
    Object.fromEntries(
      Object.entries(byKey)
        .map(([key, record]) => [key, record[theme]])
        .filter(([, hex]) => typeof hex === 'string'),
    );
  return Object.fromEntries(HC_THEMES.map((theme) => [theme, pick(theme)]));
};
