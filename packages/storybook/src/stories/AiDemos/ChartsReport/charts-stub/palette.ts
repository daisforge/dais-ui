/**
 * Категориальная палитра заглушки Charts UI. Порядок цветов проверен
 * на различимость при дальтонизме (соседние пары) для светлой и тёмной
 * темы. Когда приедет Charts UI, палитра придёт из его токенов.
 */
export type ChartTheme = 'light' | 'dark';

export const SERIES_COLORS: Record<ChartTheme, string[]> = {
  light: [
    '#2a78d6',
    '#eb6834',
    '#1baf7a',
    '#eda100',
    '#e87ba4',
    '#008300',
    '#6250d6',
    '#e34948',
  ],
  dark: [
    '#3987e5',
    '#d95926',
    '#199e70',
    '#c98500',
    '#d55181',
    '#0ca30c',
    '#9085e9',
    '#e66767',
  ],
};

/** Цвет следует за сущностью: индекс серии фиксирован её порядком в данных */
export const seriesColor = (theme: ChartTheme, index: number) =>
  SERIES_COLORS[theme][index % SERIES_COLORS[theme].length];
