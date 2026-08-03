import { useCallback, useMemo } from 'react';

import { Group, Item, ItemOrGroup } from './types';

type Option = { label: string | number; value: string | number };

const getLabelForValue = (value: unknown): string => {
  if (value === undefined || value === null) return '';
  if (value instanceof Date) return value.toLocaleDateString();
  if (Array.isArray(value)) {
    return value
      .map((v) =>
        v instanceof Date ? v.toLocaleDateString() : String(v ?? ''),
      )
      .join(', ');
  }
  return String(value);
};

export const useFiltersList = <
  FilterKey extends string,
  OrderKey extends string = FilterKey,
>({
  filters,
  filtersInfo,
  options,
  updateFilters,
  order,
}: {
  filters: Record<FilterKey, unknown>;
  filtersInfo: Record<
    FilterKey,
    {
      label: string;
      clearedValue: unknown;
    }
  >;
  options: Record<FilterKey, Option[]>;
  updateFilters: (updatedKey: FilterKey, value: unknown) => void;
  order?: 'default' | OrderKey[] | ((groups: ItemOrGroup[]) => ItemOrGroup[]);
}) => {
  const { labelFromValueMaps } = useMemo(() => {
    // Map-ы  для того, чтобы искать label, зная value
    const labelFromValueMaps = {} as Record<
      string,
      Map<string | number, string | number>
    >;
    // eslint-disable-next-line no-restricted-syntax
    for (const option of Object.entries(options)) {
      const [key, value] = option as [FilterKey, Option[]];
      labelFromValueMaps[key] = new Map(
        value.map((el) => [String(el.value), el.label]),
      );
    }
    return { labelFromValueMaps };
  }, [options]);

  const clearAll = useCallback(() => {
    // eslint-disable-next-line no-restricted-syntax
    for (const option of Object.entries<(typeof filtersInfo)[FilterKey]>(
      filtersInfo,
    )) {
      const [key, value] = option;
      updateFilters(key as FilterKey, value.clearedValue);
    }
  }, [filtersInfo, updateFilters]);

  const filterListData = useMemo(() => {
    const filterList = Object.entries(filters).reduce(
      (acc, curr) => {
        const currKey = curr[0] as FilterKey;
        const currV = curr[1];

        const currVIsArray = Array.isArray(currV);
        const currIsEmpty = !(
          (currVIsArray && currV.length) ||
          (!currVIsArray && currV && currV !== false)
        );

        if (currIsEmpty) {
          return acc;
        }

        const isCurrVEqualCleared = currV === filtersInfo[currKey].clearedValue;

        if (isCurrVEqualCleared) {
          return acc;
        }

        const isBooleanValue = typeof currV === 'boolean';
        if (isBooleanValue) {
          const item: Item = {
            id: currKey,
            label: filtersInfo[currKey].label,
            onClick: () => {
              updateFilters(currKey, filtersInfo[currKey].clearedValue);
            },
          };
          acc.push(item);
          return acc;
        }

        const groupObj: Group = {
          groupId: currKey,
          groupLabel: filtersInfo[currKey].label,
          items: [],
        };
        if (currVIsArray) {
          groupObj.items = currV.map((elValue) => ({
            id: elValue,
            label:
              labelFromValueMaps?.[currKey]?.get?.(elValue) ??
              elValue.toString(),
            onClick: () => {
              updateFilters(
                currKey,
                currV.filter((fElV) => fElV !== elValue),
              );
            },
          }));
        } else {
          const otherLabelOptions = labelFromValueMaps?.[currKey];

          const label = // если это - single select, combobox; (имеют свои label), то otherLabelOptions имеется.
            otherLabelOptions?.get?.(currV as string) ??
            getLabelForValue(currV);

          groupObj.items = [
            {
              id: currV.toString(),
              label,
              onClick: () => {
                updateFilters(
                  currKey,
                  'clearedValue' in filtersInfo[currKey]
                    ? filtersInfo[currKey].clearedValue
                    : '',
                );
              },
            },
          ];
        }
        acc.push(groupObj);

        return acc;
      },

      [] as ItemOrGroup[],
    );

    // --- УНИВЕРСАЛЬНАЯ СОРТИРОВКА ДЛЯ ItemOrGroup ---
    let orderedFilterList = filterList;

    if (order && order !== 'default') {
      if (typeof order === 'function') {
        // Случай: Функция получает ВЕСЬ массив (и Group, и Item)
        orderedFilterList = order(filterList);
      } else if (Array.isArray(order)) {
        // Случай: Явный массив ключей.
        // Создаем Map для быстрого поиска элемента по его ключу.
        const elementMap = new Map<string, ItemOrGroup>();

        // Заполняем Map. Ключом для Group является groupId, для Item - id (строка).
        filterList.forEach((element) => {
          const key =
            'groupId' in element ? element.groupId : String(element.id);
          elementMap.set(key, element);
        });

        orderedFilterList = [];
        // Идем по массиву предпочтительного порядка (order)
        order.forEach((orderKey) => {
          const element = elementMap.get(orderKey);
          if (element) {
            orderedFilterList.push(element);
            elementMap.delete(orderKey);
          }
        });

        // Добавляем оставшиеся элементы (которых не было в порядке `order`) в конец.
        // Их можно добалять в том порядке, в котором они были исходно, или отсортировав по ключу.
        if (elementMap.size > 0) {
          // Создаем массив из оставшихся ключей и сортируем их для предсказуемости
          const remainingKeys = Array.from(elementMap.keys()).sort();
          remainingKeys.forEach((key) => {
            const element = elementMap.get(key);
            if (element) {
              orderedFilterList.push(element);
            }
          });
        }
      }
    }

    return {
      filterListOpened: filterList.length > 0,
      filterList: orderedFilterList,
    };
  }, [filters, filtersInfo, labelFromValueMaps, updateFilters, order]);

  return { ...filterListData, clearAll, labelFromValueMaps };
};
// TODO: если нужно сохранять порядок изменения, то понадобится (вместо filterListData)
// const [list, setList] = useState<Group[]>([]);

//     useEffect(() => {
//         const emptyKeysSet = new Set<FilterKey>();
//         const notEmptyKeysMap = new Map<FilterKey, Group>();
//         // обновление на основе актуальных значений фильтров (filters)
//         Object.entries(filters).forEach((curr) => {
//             const currKey = curr[0] as FilterKey;
//             const currV = curr[1];

//             const currVIsArray = Array.isArray(currV);
//             const currIsEmpty = !(
//                 (currVIsArray && currV.length) ||
//                 (!currVIsArray && currV)
//             );
//             // если текущая группа пустая в активных фильтрах - то удаляем из list группу
//             if (currIsEmpty) {
//                 emptyKeysSet.add(currKey);
//                 return;
//             }

//             const groupObj: Group = {
//                 groupId: currKey,
//                 groupLabel: filtersInfo[currKey].label,
//                 items: [],
//             };
//             if (currVIsArray) {
//                 groupObj.items = currV.map((elValue) => ({
//                     id: elValue,
//                     label: labelFromValueMaps?.[currKey]?.get?.(elValue) ?? '',
//                     onClick: () => {
//                         updateFilters(
//                             currKey,
//                             currV.filter((fElV) => fElV !== elValue)
//                         );
//                     },
//                 }));
//             } else {
//                 const otherLabelOptions = labelFromValueMaps?.[currKey];

//                 const label = otherLabelOptions
//                     ? // если это - single select, combobox; (имеют свои label), то otherLabelOptions имеется.
//                       otherLabelOptions?.get?.(currV as string) ?? ''
//                     : currV.toString();

//                 groupObj.items = [
//                     {
//                         id: currV.toString(),
//                         label,
//                         onClick: () => {
//                             updateFilters(
//                                 currKey,
//                                 'clearedValue' in filtersInfo[currKey]
//                                     ? filtersInfo[currKey].clearedValue
//                                     : ''
//                             );
//                         },
//                     },
//                 ];
//             }
//             notEmptyKeysMap.set(currKey, groupObj);
//         });

//         setList((prev) => {
//             const newV = prev.reduce((acc, curr) => {
//                 if (emptyKeysSet.has(curr.groupId as FilterKey)) {
//                     return acc;
//                 }
//                 const newV = notEmptyKeysMap.get(curr.groupId as FilterKey);

//                 if (!newV) {
//                     return acc;
//                 }
//                 acc.push(newV);
//                 notEmptyKeysMap.delete(curr.groupId as FilterKey);

//                 return acc;
//             }, [] as typeof prev);

//             notEmptyKeysMap.forEach((v) => {
//                 newV.push(v);
//             });

//             console.log(':::newV: ', { newV, emptyKeysSet, notEmptyKeysMap });

//             return newV;
//         });

//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [...Object.values(filters)]);

//     useEffect(
//         () => () => {
//             setList([]);
//         },
//         []
//     );
