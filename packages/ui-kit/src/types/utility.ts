/**
 * Проверка на этапе сборки, что два типа одинаковые: `true`, если A и B
 * состоят из одних и тех же значений, иначе `false`.
 *
 * Пример — два списка тем должны совпадать:
 * ```ts
 * const themesInSync: Equals<ThemesA, ThemesB> = true; // ошибка, если разошлись
 * ```
 */
export type Equals<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false;
