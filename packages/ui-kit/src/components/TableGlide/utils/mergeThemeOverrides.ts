import type { GlideThemePartial } from '../theming/types';

/**
 * Темы ячейки одна поверх другой; undefined, если переопределять нечего: с пустой темой
 * glide копирует тему таблицы на каждую ячейку при каждой отрисовке.
 */
export const mergeThemeOverrides = (
  ...overrides: readonly (GlideThemePartial | undefined)[]
): GlideThemePartial | undefined => {
  const merged: GlideThemePartial = Object.assign({}, ...overrides);
  return Object.keys(merged).length > 0 ? merged : undefined;
};
