import type { DropdownItemOption } from '@ui-kit/components/Dropdown';
import { useCallback } from 'react';

/**
 * Обрабатывает вложенные dropdown items рекурсивно
 * Генерирует уникальные значения для элементов без value и регистрирует обработчики
 *
 * @param items - массив dropdown items для обработки
 * @param parentHandler - обработчик событий для родительского элемента (применяется ко всем дочерним)
 * @param path - путь для генерации уникальных значений (используется рекурсивно)
 * @returns кортеж [обработанные items, Map обработчиков по value]
 */
export const processDropdownItems = (
  items: DropdownItemOption[],
  parentHandler?: (
    item: DropdownItemOption,
    event: React.SyntheticEvent,
  ) => void,
  path = '',
): [
  DropdownItemOption[],
  Map<string, (item: DropdownItemOption, event: React.SyntheticEvent) => void>,
] => {
  const processedItems: DropdownItemOption[] = [];
  const handlerMap = new Map<
    string,
    (item: DropdownItemOption, event: React.SyntheticEvent) => void
  >();

  items.forEach((item, index) => {
    const itemPath = `${path}-${index}`;
    const value = item.value || itemPath;
    const currentItem = { ...item, value };

    // Регистрируем обработчик для текущего элемента, если он есть
    if (parentHandler) {
      handlerMap.set(value.toString(), parentHandler);
    }

    // Если есть вложенные элементы, обрабатываем рекурсивно
    if (item.items) {
      const [nestedItems, nestedHandlers] = processDropdownItems(
        item.items,
        parentHandler,
        itemPath,
      );

      nestedHandlers.forEach((handler, key) => handlerMap.set(key, handler));
      currentItem.items = nestedItems;
    }

    processedItems.push(currentItem);
  });

  return [processedItems, handlerMap];
};

/**
 * Хук для создания обработчика кликов по dropdown items
 * Использует Map обработчиков для поиска нужного handler по value элемента
 *
 * @param handlerMap - Map обработчиков, где ключ - value элемента, значение - функция-обработчик
 * @returns функция-обработчик для onItemSelect dropdown
 */
export const useDropdownItemClickHandler = (
  handlerMap: Map<
    string,
    (item: DropdownItemOption, event: React.SyntheticEvent) => void
  >,
) =>
  useCallback(
    (item: DropdownItemOption, event: React.SyntheticEvent) => {
      const handler = handlerMap.get(item.value as string);
      handler?.(item, event);
    },
    [handlerMap],
  );
