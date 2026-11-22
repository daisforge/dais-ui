/**
 * Вычисление границ для индикатора скрытых столбцов.
 *
 * Форк glide спрашивает про границы номерами: граница N это щель слева от
 * колонки с индексом N в видимом порядке грида (N, равное числу видимых колонок,
 * это правый край таблицы). Обёртка же хранит скрытые столбцы ключами.
 *
 * Считаем в ПОРЯДКЕ ОТРИСОВКИ (frozen-first), куда виртуально вставлены и скрытые
 * столбцы. Благодаря этому полоса встаёт ровно там, где столбец появится при
 * раскрытии: закрепление колонки-соседа больше не «рвёт» промежуток, а реордер и
 * слияние подряд скрытых работают сами собой. Подряд идущие скрытые копятся в одну
 * границу (одна полоса на весь промежуток).
 */
export const computeHiddenBoundaries = ({
  fullRenderOrder,
  hiddenCols,
}: {
  /**
   * Полный порядок отрисовки: видимые и скрытые ключи вместе, закреплённые в
   * начале (frozen-first). Тот же порядок, в котором колонки реально рисует glide.
   * Фантомные ключи (не видимые и не скрытые) сюда попадать не должны.
   */
  fullRenderOrder: readonly string[];
  /** Ключи скрытых столбцов. */
  hiddenCols: readonly string[];
}): Map<number, string[]> => {
  const result = new Map<number, string[]>();
  if (hiddenCols.length === 0) return result;

  const hiddenSet = new Set(hiddenCols);

  // visibleIndex растёт только на видимых ключах, поэтому в каждый момент равен
  // номеру границы у левого края очередной видимой колонки в гриде.
  let visibleIndex = 0;
  let pending: string[] = [];
  fullRenderOrder.forEach((key) => {
    if (hiddenSet.has(key)) {
      pending.push(key);
      return;
    }
    if (pending.length > 0) {
      result.set(visibleIndex, [
        ...(result.get(visibleIndex) ?? []),
        ...pending,
      ]);
      pending = [];
    }
    visibleIndex += 1;
  });
  // Скрытые после последней видимой колонки прижимаются к правому краю таблицы
  // (граница === числу видимых колонок).
  if (pending.length > 0) {
    result.set(visibleIndex, [...(result.get(visibleIndex) ?? []), ...pending]);
  }

  return result;
};
