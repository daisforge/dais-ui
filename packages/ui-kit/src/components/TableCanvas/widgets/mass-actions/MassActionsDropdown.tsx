import { DropdownItemOption } from '@ui-kit/components/Dropdown';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { CSSObject } from 'styled-components';

import { TableDropdown } from '../../components/TableDropdown';
import { TableDropdownConfigProps } from '../../components/TableDropdown/types';
import { MassActionButtonProps } from './types';

const getProcessDropdownItems = (
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
      const [nestedItems, nestedHandlers] = getProcessDropdownItems(
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

const useMassActionsButtonsToDropdownItems = (
  buttons: MassActionButtonProps[] = [],
) =>
  useMemo(() => {
    const items: DropdownItemOption[] = [];
    const $summaryCSS: CSSObject = {};
    const globalHandlerMap = new Map<
      string,
      (item: DropdownItemOption, event: React.SyntheticEvent) => void
    >();

    buttons.forEach((button) => {
      if (button.dropdown) {
        const groupValue = `group-${button.key || button.text || Date.now()}`;

        // Регистрируем обработчик для самой группы
        if (button.dropdown.onItemSelect) {
          globalHandlerMap.set(
            groupValue.toString(),
            button.dropdown.onItemSelect,
          );
        }

        const [processedItems, itemHandlers] = getProcessDropdownItems(
          button.dropdown.items || [],
          button.dropdown.onItemSelect,
        );

        itemHandlers.forEach((handler, key) =>
          globalHandlerMap.set(key, handler),
        );

        if (button.dropdown?.$css) {
          Object.assign($summaryCSS, button.dropdown?.$css);
        }

        items.push({
          label: button.text ?? '',
          value: groupValue,
          contentLeft: button.contentLeft,
          items: processedItems,
          className: button.className,
          disabled: button.disabled,
        });
      } else {
        // Обработка обычных кнопок
        const value = button.key || button.text || `btn-${Date.now()}`;
        const item: DropdownItemOption = {
          label: button.text || 'Кнопка',
          value: value.toString(),
          disabled: button.disabled,
          contentLeft: button.contentLeft,
        };

        if (button.onClick) {
          globalHandlerMap.set(value.toString(), (_, event) => {
            const mouseEvent = {
              ...event,
              nativeEvent: event.nativeEvent,
              preventDefault: event.preventDefault,
              stopPropagation: event.stopPropagation,
              target: event.target as EventTarget & HTMLElement,
              currentTarget: event.currentTarget as EventTarget & HTMLElement,
            } as unknown as React.MouseEvent<HTMLElement>;

            button.onClick?.(
              mouseEvent as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
            );
          });
        }

        items.push(item);
      }
    });

    return {
      dropdownItems: items,
      handlerMap: globalHandlerMap,
      $summaryCSS,
    };
  }, [buttons]);

const useDropdownItemClickHandler = (
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

export const MassActionsDropdown = ({
  buttons = [],
  dividerIndexes = [],
  triggerSlot,
  dropdownProps,
}: {
  buttons: MassActionButtonProps[];
  dividerIndexes?: Array<number>;
  triggerSlot?: ReactNode;
  dropdownProps?: TableDropdownConfigProps;
}) => {
  const { dropdownItems, handlerMap, $summaryCSS } =
    useMassActionsButtonsToDropdownItems(buttons);
  const handleItemSelect = useDropdownItemClickHandler(handlerMap);
  const [_, setIsOpenDropDown] = useState(false);

  return (
    <TableDropdown
      $css={$summaryCSS}
      closeOnSelect
      {...dropdownProps}
      onItemSelect={handleItemSelect}
      items={dropdownItems.map((item, index) => {
        if (dividerIndexes.includes(index)) {
          item.dividerAfter = true;
        }
        return item;
      })}
      onToggle={(state) => setIsOpenDropDown(state)}
    >
      {triggerSlot}
    </TableDropdown>
  );
};
