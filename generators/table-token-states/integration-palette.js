/**
 * Расчёт палитры таблицы слоем интеграции: карта дизайнера плюс наши ключи
 * чистого вида и зебры (clean-view-colors.ts), одна формула генератора.
 * Общий для записи палитры (emit-table-colors.ts) и стенда подбора цветов
 * (stand-palette.js). Файл на JS с объявлением типов рядом: Storybook
 * проверяет типы строже, чем код генератора в code/, а его не правим.
 */
import { CLEAN_VIEW_COLORS, CLEAN_VIEW_SEMANTIC } from './clean-view-colors';
import {
  CELL,
  SEMANTIC,
  TABLE_COLORS,
  THEME_SETTINGS,
} from './code/table-token-sources';
import { buildTableColors, STEP_FACTOR } from './code/table-token-states';

/** Множитель шага темы: свой из настроек, иначе умолчание формулы для светлых и тёмных. */
export const themeStepFactor = (theme, settings = THEME_SETTINGS) => {
  const setting = settings[theme];
  return setting.stepFactor ?? STEP_FACTOR[setting.mode];
};

/** Цвета всех ключей палитры по темам при заданных настройках тем. */
export const buildIntegrationPalette = (settings = THEME_SETTINGS) =>
  buildTableColors(
    { ...TABLE_COLORS, ...CLEAN_VIEW_COLORS },
    { ...SEMANTIC, ...CLEAN_VIEW_SEMANTIC },
    settings,
    CELL,
  );
