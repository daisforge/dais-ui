/**
 * Преобразует значение формы в массив строк для SegmentProvider
 * @param value - значение из формы
 * @param isMultiple - режим множественного выбора
 */
function toArray(value: unknown, isMultiple: boolean): string[] {
  if (value == null || value === '') return [];
  if (Array.isArray(value)) return value.map(String);
  return isMultiple ? [String(value)] : [String(value)];
}

/**
 * Преобразует выбранные элементы в значение для формы
 * @param selected - массив выбранных значений
 * @param isMultiple - режим множественного выбора
 */
function fromArray(selected: string[], isMultiple: boolean): string[] {
  if (isMultiple) return selected;
  return selected.length > 0 ? [selected[0] ?? ''] : [];
}

/**
 * Удаляет все значения из массива, у которых были найдены дубликаты
 * @param items
 */
function removeItemsIfFindCopy(items: Array<string>): Array<string> {
  const countMap: Record<string, number> = {};
  items.forEach((item) => {
    countMap[item] = (countMap[item] || 0) + 1;
  });
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return items.filter((item) => countMap[item]! <= 1);
}

/**
 * Преобразует значение формы в массив для defaultSelected
 */
function toDefaultSelected(value: unknown): string[] {
  if (value == null || value === '') return [];
  if (Array.isArray(value)) return value.map(String);
  return [String(value)];
}

export { fromArray, removeItemsIfFindCopy, toArray, toDefaultSelected };
