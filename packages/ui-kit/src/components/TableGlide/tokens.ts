import { ActiveTheme } from './theming/activeTheme.type';
import {
  TOKENS_BETA_DARK,
  TOKENS_BETA_LIGHT,
  TOKENS_DARK,
  TOKENS_HC_DARK,
  TOKENS_HC_LIGHT,
  TOKENS_LIGHT,
} from './content-tokens.generated';

/**
 * Токены тем для canvas-рендереров (текст, бейджи, кнопки, статусы внутри ячеек).
 *
 * Значения собирает генератор generators/table-content-tokens из тем атомарной
 * команды — руками не правятся (перегенерация: npm run table-colors:content).
 * Какие цвета нужны и где их искать — generators/table-content-tokens/lib/token-map.js;
 * цвета, взятые не напрямую из своей темы, — generators/table-content-tokens/report.md.
 */

// Тип по ключам TOKENS_LIGHT, значения — любые строки (hex разных тем)
export type Tokens = { [K in keyof typeof TOKENS_LIGHT]: string } & {
  /** Производный surfaceAccent с прозрачностью 20%, если нужен вместо библиотечного фона. */
  surfaceAccent20?: string;
};

const TOKENS_BY_THEME: Record<ActiveTheme, Tokens> = {
  light: {
    ...TOKENS_LIGHT,
    // SDDS FinAI light: surfaceAccent (#199AF0) с прозрачностью 20%.
    surfaceAccent20: '#199AF033',
  },
  dark: TOKENS_DARK,
  highContrastLight: TOKENS_HC_LIGHT,
  highContrastDark: TOKENS_HC_DARK,
  betaCoreLight: TOKENS_BETA_LIGHT,
  betaCoreDark: TOKENS_BETA_DARK,
};

export const getTokens = (activeTheme: ActiveTheme = 'light'): Tokens =>
  TOKENS_BY_THEME[activeTheme];
