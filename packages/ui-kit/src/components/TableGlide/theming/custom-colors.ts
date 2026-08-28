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
// betaCoreLight: первый проход — тинты выделения/редактирования/hover наследуют
// значения light (прямых токенов в beta-теме у них нет). Каркас таблицы
// (текст/акцент/шапка/границы) уже отражает beta через glide-colors.
// TODO: уточнить у дизайнера beta-значения для выделения/редактируемых ячеек.
const CUSTOM_COLORS = {
  bgEditableCell: {
    light: '#FFF6E5',
    dark: '#211807',
    highContrastLight: '#F1DDB8',
    betaCoreLight: '#FFF6E5',
  },
  bgEditableCellHovered: {
    light: '#FFF4E0',
    dark: '#2A1F09',
    highContrastLight: '#E8D4AD',
    betaCoreLight: '#FFF4E0',
  },
  selectionCheckboxBg: {
    light: '#ECF6FC',
    dark: '#ECF6FC',
    highContrastLight: '#CFE5F2',
    betaCoreLight: '#EFF8FF',
  },
  selectionActiveBg: {
    light: '#E2F1FB',
    dark: '#E2F1FB',
    highContrastLight: '#BFDDF4',
    betaCoreLight: '#E2F1FB',
  },
  selectionActiveCheckboxBg: {
    light: '#D1E9F8',
    dark: '#D1E9F8',
    highContrastLight: '#9BCAEA',
    betaCoreLight: '#D1E9F8',
  },
  selectionServiceBg: {
    light: '#ECF6FC',
    dark: '#ECF6FC',
    highContrastLight: '#CFE5F2',
    betaCoreLight: '#EFF8FF',
  },
  selectionServiceActiveBg: {
    light: '#D4E7F2',
    dark: '#D4E7F2',
    highContrastLight: '#B9D6E7',
    betaCoreLight: '#D4E7F2',
  },
  errorOutlineColor: {
    light: '#FF3D51',
    dark: '#FF3D51',
    highContrastLight: '#E9203F',
    betaCoreLight: '#F81C42',
  },
  // Фон строки под курсором (hoverEffects.row) — аналог rowHoverColor
  // (surfaceSolidPrimary) старой Table.
  bgRowHovered: {
    light: '#F7F9FB',
    dark: '#F7F9FB',
    highContrastLight: '#E8EEF2',
    betaCoreLight: '#F7F9FB',
  },
  // Служебные колонки (нумерация/чекбокс/инструменты) в hovered-строке —
  // то же затемнение, что у сервис-зоны под активным диапазоном
  // (selectionServiceActiveBg), а не серый hover данных.
  bgServiceRowHovered: {
    light: '#D4E7F2',
    dark: '#D4E7F2',
    highContrastLight: '#B9D6E7',
    betaCoreLight: '#D4E7F2',
  },
  // Checkbox-selected строка под курсором: вся строка темнеет
  // (как hover шапки — bgHeaderHovered), вместо серого hover.
  bgSelectedRowHovered: {
    light: '#DEECF5',
    dark: '#DEECF5',
    highContrastLight: '#C2DCEB',
    betaCoreLight: '#DEECF5',
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
