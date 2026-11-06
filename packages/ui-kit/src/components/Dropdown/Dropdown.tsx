/* eslint-disable no-restricted-imports -- Адаптер и его контракт проверяются непосредственно относительно SDDS. */
import {
  Dropdown as SDDSDropdown,
  type DropdownItemOption as SDDSItemOption,
} from '@salutejs/sdds-finai';
import {
  type ForwardedRef,
  forwardRef,
  type ReactElement,
  useMemo,
} from 'react';

import type { DropdownItemOption, DropdownProps } from './Dropdown.types';

// SDDS клонирует родительские пункты в getVisibleItems через {...item, items}.
// Enumerable Symbol переносится вместе с клоном и не конфликтует с полями
// пользователя; WeakMap по ссылке на нормализованный пункт здесь недостаточно.
const originalItemKey = Symbol('daisDropdownOriginalItem');
type NormalizedItem = SDDSItemOption & {
  [originalItemKey]: DropdownItemOption;
};

// Совместимость с dais-ui до SDDS 0.367: upstream убрал placement без суффикса из типов.
// Они означали именно *-start, а не *-center. Сохраняем старый API, включая items.
// TODO(SDDS): ждём решения команды Атомарки по совместимости placement.
// До этого сохраняем адаптер; после обновления upstream повторно сверить типы и поведение.
const normalizePlacement = (
  placement: DropdownProps['placement'],
): SDDSItemOption['placement'] => {
  switch (placement) {
    case 'top':
    case 'bottom':
    case 'left':
    case 'right':
      return `${placement}-start`;
    default:
      return placement;
  }
};

function DropdownComponent<T extends DropdownItemOption>(
  {
    items,
    placement,
    renderItem,
    onHover,
    onItemSelect,
    ...props
  }: DropdownProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { normalizedItems, originalItem } = useMemo(() => {
    const normalize = (item: DropdownItemOption): NormalizedItem => {
      const normalized: NormalizedItem = {
        ...item,
        [originalItemKey]: item,
        placement: normalizePlacement(item.placement),
        items: item.items?.map(normalize),
      };
      return normalized;
    };
    return {
      normalizedItems: items.map(normalize),
      // Как и upstream, callbacks параметризованы T. Возвращаем исходный объект:
      // пользовательские поля, placement и ссылочная идентичность сохраняются.
      originalItem: (item: SDDSItemOption) =>
        ((item as NormalizedItem)[originalItemKey] ?? item) as T,
    };
  }, [items]);

  return (
    <SDDSDropdown
      {...props}
      ref={ref}
      items={normalizedItems}
      placement={normalizePlacement(placement)}
      renderItem={renderItem && ((item) => renderItem(originalItem(item)))}
      onHover={onHover && ((index, item) => onHover(index, originalItem(item)))}
      onItemSelect={
        onItemSelect &&
        ((item, event) => onItemSelect(originalItem(item), event))
      }
    />
  );
}

export const Dropdown = forwardRef(DropdownComponent) as <
  T extends DropdownItemOption,
>(
  props: DropdownProps<T>,
) => ReactElement | null;
