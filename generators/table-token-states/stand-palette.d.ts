export type HcTheme = 'highContrastLight' | 'highContrastDark';

export declare const HC_THEMES: readonly HcTheme[];

/** Множитель шага темы из настроек генератора (тёмная без своего значения: 1,2). */
export declare const defaultStepFactor: (theme: HcTheme) => number;

/** Цвета ключей палитры контрастных тем при заданных множителях шага. */
export declare const buildHcPalette: (
  factors: Record<HcTheme, number>,
) => Record<HcTheme, Record<string, string>>;
