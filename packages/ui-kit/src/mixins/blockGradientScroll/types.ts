export type BlockGradientScrollResolvedPadding = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

/**
 * Паддинги для компенсации градиента.
 *
 * @remarks
 * Приоритет значений (от низкого к высокому):
 * 1. `inline` — применяется к `left` и `right`, если они не указаны явно
 * 2. `left`, `right`, `top`, `bottom` — имеют приоритет над `inline`
 *
 * Правила разрешения:
 * - Если передан `number` — применяется ко всем сторонам (`top`, `left`, `right`, `bottom`)
 * - `left` и `right` имеют приоритет над `inline`
 * - Если `left` не указан — используется `inline`, иначе `0`
 * - Если `right` не указан — используется `inline`, иначе `0`
 * - `top` и `bottom` независимы, по умолчанию `0`
 *
 * @example
 * ```ts
 * // Все стороны одинаковые
 * padding: 24
 *
 * // inline применяется к left и right
 * padding: { inline: 32, bottom: 24 }
 *
 * // left и right имеют приоритет над inline
 * padding: { inline: 32, left: 16, right: 16, bottom: 24 }
 * ```
 */
export type BlockGradientScrollPadding =
  | number
  | {
      /** Верхний отступ */
      top?: number;
      /** Shorthand для left и right (применяется если left/right не указаны) */
      inline?: number;
      /** Левый отступ (приоритет над inline) */
      left?: number;
      /** Правый отступ (приоритет над inline) */
      right?: number;
      /** Нижний отступ */
      bottom?: number;
    };

export type BlockGradientScrollVariant = 'white' | 'gray';

export type BlockGradientScrollOptions = {
  padding?: BlockGradientScrollPadding;
  variant?: BlockGradientScrollVariant;
};
