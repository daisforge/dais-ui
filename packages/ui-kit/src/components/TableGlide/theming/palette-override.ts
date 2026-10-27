import { createContext } from 'react';

import type {
  TableColorTheme,
  TableStateColorKey,
} from './table-colors.generated';

/**
 * Подмена палитры одной темы на лету. Только для стенда подбора цветов в
 * Storybook (ColoringStates): там палитра контрастных тем пересчитывается
 * генератором с другим множителем шага, и таблица сразу показывает результат.
 * В библиотеке наружу не экспортируется; без подмены таблица берёт
 * сгенерированную палитру (table-colors.generated.ts).
 */
export type TablePaletteOverride = {
  /** Цвета ключей палитры, которые заменяют сгенерированные. */
  colors: Partial<Record<TableStateColorKey, string>>;
  /** Множитель шага для цветов потребителя (fill-states.ts). */
  stepFactor?: number;
};

export type TablePaletteOverrides = Partial<
  Record<TableColorTheme, TablePaletteOverride>
>;

/** Подмена палитры по темам для таблиц внутри провайдера. */
export const TablePaletteOverrideContext = createContext<
  TablePaletteOverrides | undefined
>(undefined);
