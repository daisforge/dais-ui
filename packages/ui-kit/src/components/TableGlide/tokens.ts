import { ActiveTheme } from './theming/activeTheme.type';
import {
  TOKENS_BETA_DARK,
  TOKENS_BETA_LIGHT,
  TOKENS_DARK,
  TOKENS_HC_DARK,
  TOKENS_HC_LIGHT,
  TOKENS_LIGHT,
} from './theme-tokens.generated';

/**
 * Токены тем для canvas-рендереров (текст, бейджи, кнопки, статусы внутри ячеек).
 *
 * Значения собираются генератором generators/theme-tokens из CSS-переменных
 * пакетов атомарной команды — руками не поддерживаются. Карта соответствий
 * имён и ручные пины — в generate-theme-tokens.js, происхождение каждого
 * нестандартного значения — в generators/theme-tokens/report.md.
 */

// Тип по ключам TOKENS_LIGHT, значения — любые строки (hex разных тем)
export type Tokens = { [K in keyof typeof TOKENS_LIGHT]: string };

const TOKENS_BY_THEME: Record<ActiveTheme, Tokens> = {
  light: TOKENS_LIGHT,
  dark: TOKENS_DARK,
  highContrastLight: TOKENS_HC_LIGHT,
  highContrastDark: TOKENS_HC_DARK,
  betaCoreLight: TOKENS_BETA_LIGHT,
  betaCoreDark: TOKENS_BETA_DARK,
};

export const getTokens = (activeTheme: ActiveTheme = 'light'): Tokens =>
  TOKENS_BY_THEME[activeTheme];
