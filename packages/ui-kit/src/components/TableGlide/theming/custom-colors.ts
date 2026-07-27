import type { ActiveTheme } from './activeTheme.type';
import type { GlideSizeConfig, SIZE } from '../constants';

import { fontMetrics, fontStyles } from '../fonts';
import { getTokens } from '../tokens';

export type ThemeCustoms = ReturnType<typeof getCustomColors> & {
  rowSize: SIZE;
  activeSizes: GlideSizeConfig;
};

/**
 * Кастомные цвета TableGlide — не входят в стандартный Theme библиотеки Glide Data Grid.
 * Используются в наших рендерерах: выделение строк, редактируемые ячейки, ошибки.
 */
const CUSTOM_COLORS = {
  bgEditableCell: {
    light: '#FFF6E5',
    dark: '#211807',
    highContrastLight: '#F1DDB8',
  },
  bgEditableCellHovered: {
    light: '#FFF4E0',
    dark: '#2A1F09',
    highContrastLight: '#E8D4AD',
  },
  selectionCheckboxBg: {
    light: '#ECF6FC',
    dark: '#ECF6FC',
    highContrastLight: '#CFE5F2',
  },
  selectionActiveBg: {
    light: '#E2F1FB',
    dark: '#E2F1FB',
    highContrastLight: '#BFDDF4',
  },
  selectionActiveCheckboxBg: {
    light: '#D1E9F8',
    dark: '#D1E9F8',
    highContrastLight: '#9BCAEA',
  },
  selectionServiceBg: {
    light: '#ECF6FC',
    dark: '#ECF6FC',
    highContrastLight: '#CFE5F2',
  },
  selectionServiceActiveBg: {
    light: '#D4E7F2',
    dark: '#D4E7F2',
    highContrastLight: '#B9D6E7',
  },
  errorOutlineColor: {
    light: '#FF3D51',
    dark: '#FF3D51',
    highContrastLight: '#E9203F',
  },
  // Фон строки под курсором (hoverEffects.row) — аналог rowHoverColor
  // (surfaceSolidPrimary) старой Table.
  bgRowHovered: {
    light: '#F7F9FB',
    dark: '#F7F9FB',
    highContrastLight: '#E8EEF2',
  },
  // Служебные колонки (нумерация/чекбокс/инструменты) в hovered-строке —
  // то же затемнение, что у сервис-зоны под активным диапазоном
  // (selectionServiceActiveBg), а не серый hover данных.
  bgServiceRowHovered: {
    light: '#D4E7F2',
    dark: '#D4E7F2',
    highContrastLight: '#B9D6E7',
  },
  // Checkbox-selected строка под курсором: вся строка темнеет
  // (как hover шапки — bgHeaderHovered), вместо серого hover.
  bgSelectedRowHovered: {
    light: '#DEECF5',
    dark: '#DEECF5',
    highContrastLight: '#C2DCEB',
  },
} as const;

export const getCustomColors = (activeTheme: ActiveTheme) => ({
  /**
   * Токены для canvas-рендереров (бейджи, статусы, кнопки внутри ячеек).
   * Пример: theme.tokens.textSecondary
   */
  tokens: getTokens(activeTheme),
  /**
   * Строки шрифтов для компонентов.
   * Пример: theme.fonts.bodyS
   */
  fonts: fontStyles,
  /**
   * Числовые метрики тех же шрифтов для canvas layout.
   */
  fontMetrics,

  bgEditableCell: CUSTOM_COLORS.bgEditableCell[activeTheme],
  bgEditableCellHovered: CUSTOM_COLORS.bgEditableCellHovered[activeTheme],
  selectionCheckboxBg: CUSTOM_COLORS.selectionCheckboxBg[activeTheme],
  selectionActiveBg: CUSTOM_COLORS.selectionActiveBg[activeTheme],
  selectionActiveCheckboxBg:
    CUSTOM_COLORS.selectionActiveCheckboxBg[activeTheme],
  selectionServiceBg: CUSTOM_COLORS.selectionServiceBg[activeTheme],
  selectionServiceActiveBg: CUSTOM_COLORS.selectionServiceActiveBg[activeTheme],
  errorOutlineColor: CUSTOM_COLORS.errorOutlineColor[activeTheme],
  bgRowHovered: CUSTOM_COLORS.bgRowHovered[activeTheme],
  bgServiceRowHovered: CUSTOM_COLORS.bgServiceRowHovered[activeTheme],
  bgSelectedRowHovered: CUSTOM_COLORS.bgSelectedRowHovered[activeTheme],
});
