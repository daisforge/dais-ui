type ThemeSettings = Record<string, { mode: string; stepFactor?: number }>;

/** Множитель шага темы: свой из настроек, иначе умолчание формулы. */
export declare const themeStepFactor: (
  theme: string,
  settings?: ThemeSettings,
) => number;

/** Цвета всех ключей палитры по темам при заданных настройках тем. */
export declare const buildIntegrationPalette: (
  settings?: ThemeSettings,
) => Record<string, Record<string, string | null | undefined>>;
