import { PinningMenuItem } from '../types';

/**
 * Дефолтный order для пунктов без явного order — уходят в конец списка,
 * сохраняя исходный порядок (стабильная сортировка).
 */
const DEFAULT_ORDER = Number.MAX_SAFE_INTEGER;

/**
 * Мёржит нативные пункты меню закрепления с продуктовыми и возвращает
 * итоговый упорядоченный список.
 *
 * Правила:
 * - override по value: если продуктовый пункт совпадает по value с нативным,
 *   его поля перекрывают нативные (undefined-поля продукта не затирают
 *   нативные значения);
 * - новые продуктовые пункты добавляются в общий список;
 * - сортировка по возрастанию order; пункты без order идут в конец,
 *   сохраняя относительный порядок появления (стабильно).
 *
 * Функция чистая — не зависит от рендера и стейта таблицы.
 */
export function resolvePinningMenuItems(
  nativeItems: PinningMenuItem[],
  productItems: PinningMenuItem[] = [],
): PinningMenuItem[] {
  const merged: PinningMenuItem[] = nativeItems.map((item) => ({ ...item }));
  const indexByValue = new Map<string, number>();
  merged.forEach((item, index) => indexByValue.set(item.value, index));

  productItems.forEach((productItem) => {
    const existingIndex = indexByValue.get(productItem.value);

    if (existingIndex !== undefined) {
      // override: продуктовые поля перекрывают нативные, undefined не затирает
      const base = merged[existingIndex];
      if (base === undefined) {
        return;
      }
      const overridden: PinningMenuItem = { ...base };
      (Object.keys(productItem) as Array<keyof PinningMenuItem>).forEach(
        (key) => {
          if (productItem[key] !== undefined) {
            (overridden[key] as PinningMenuItem[keyof PinningMenuItem]) =
              productItem[key];
          }
        },
      );
      merged[existingIndex] = overridden;
      return;
    }

    indexByValue.set(productItem.value, merged.length);
    merged.push({ ...productItem });
  });

  return merged
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const orderA = a.item.order ?? DEFAULT_ORDER;
      const orderB = b.item.order ?? DEFAULT_ORDER;
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      // стабильность: при равном order сохраняем исходный порядок
      return a.index - b.index;
    })
    .map(({ item }) => item);
}
