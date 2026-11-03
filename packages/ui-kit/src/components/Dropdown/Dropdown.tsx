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

// Совместимость с dais-ui до SDDS 0.367: upstream удалил placement без суффикса.
// Они означали именно *-start, а не *-center. Сохраняем старый API, включая items.
// TODO(review): на ревью решить, оставляем адаптер или объявляем миграцию API.
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
    const originals = new WeakMap<SDDSItemOption, DropdownItemOption>();
    const normalize = (item: DropdownItemOption): SDDSItemOption => {
      const normalized: SDDSItemOption = {
        ...item,
        placement: normalizePlacement(item.placement),
        items: item.items?.map(normalize),
      };
      originals.set(normalized, item);
      return normalized;
    };
    return {
      normalizedItems: items.map(normalize),
      // Как и upstream, callbacks параметризованы T. Возвращаем исходный объект:
      // пользовательские поля, placement и ссылочная идентичность сохраняются.
      originalItem: (item: SDDSItemOption) => originals.get(item) as T,
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
