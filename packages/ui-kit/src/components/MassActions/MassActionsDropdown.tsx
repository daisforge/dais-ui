import { Dropdown, DropdownItemOption } from '@ui-kit/components/Dropdown';
import {
  processDropdownItems,
  useDropdownItemClickHandler
} from '@ui-kit/utils/dropdownUtils';
import React, { ReactNode, useMemo, useState } from 'react';
import { CSSObject } from 'styled-components';

import { TableDropdown } from '../Table/components/TableDropdown';
import { TableDropdownConfigProps } from '../Table/components/TableDropdown/types';
import { MassActionsButtonProps } from './types';

const useMassActionsButtonsToDropdownItems = (
  buttons: MassActionsButtonProps[] = []
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

        // Проверяем наличие items и onItemSelect (могут отсутствовать в некоторых типах)
        const dropdownItems =
          'items' in button.dropdown ? button.dropdown.items || [] : [];
        const onItemSelect =
          'onItemSelect' in button.dropdown
            ? button.dropdown.onItemSelect
            : undefined;

        // Регистрируем обработчик для самой группы
        if (onItemSelect) {
          globalHandlerMap.set(groupValue.toString(), onItemSelect);
        }

        const [processedItems, itemHandlers] = processDropdownItems(
          dropdownItems,
          onItemSelect
        );

        itemHandlers.forEach((handler, key) =>
          globalHandlerMap.set(key, handler)
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
          disabled: button.disabled
        });
      } else {
        // Обработка обычных кнопок
        const value = button.key || button.text || `btn-${Date.now()}`;
        const item: DropdownItemOption = {
          label: button.text || 'Кнопка',
          value: value.toString(),
          disabled: button.disabled,
          contentLeft: button.contentLeft
        };

        if (button.onClick) {
          globalHandlerMap.set(value.toString(), (_, event) => {
            const mouseEvent = {
              ...event,
              nativeEvent: event.nativeEvent,
              preventDefault: event.preventDefault,
              stopPropagation: event.stopPropagation,
              target: event.target as EventTarget & HTMLElement,
              currentTarget: event.currentTarget as EventTarget & HTMLElement
            } as unknown as React.MouseEvent<HTMLElement>;

            button.onClick?.(
              mouseEvent as React.MouseEvent<HTMLAnchorElement, MouseEvent>
            );
          });
        }

        items.push(item);
      }
    });

    return {
      dropdownItems: items,
      handlerMap: globalHandlerMap,
      $summaryCSS
    };
  }, [buttons]);

/**
 * Компонент dropdown для массовых действий
 * Поддерживает как обычный Dropdown, так и TableDropdown для таблиц
 */
export const MassActionsDropdown = ({
  buttons = [],
  dividerIndexes = [],
  triggerSlot,
  dropdownProps,
  useTableDropdown = false
}: {
  buttons: MassActionsButtonProps[];
  dividerIndexes?: Array<number>;
  triggerSlot?: ReactNode;
  dropdownProps?: TableDropdownConfigProps;
  /** Использовать TableDropdown (для таблиц) вместо обычного Dropdown */
  useTableDropdown?: boolean;
}) => {
  const { dropdownItems, handlerMap, $summaryCSS } =
    useMassActionsButtonsToDropdownItems(buttons);
  const handleItemSelect = useDropdownItemClickHandler(handlerMap);
  const [_, setIsOpenDropDown] = useState(false);

  const items = dropdownItems.map((item: DropdownItemOption, index: number) => {
    if (dividerIndexes.includes(index)) {
      item.dividerAfter = true;
    }
    return item;
  });

  const commonProps = {
    closeOnSelect: true,
    ...dropdownProps,
    onItemSelect: handleItemSelect,
    items,
    onToggle: (state: boolean) => setIsOpenDropDown(state),
    portal: 'document',
    view: dropdownProps?.['view'] || 'default'
  };

  const { portal, ...forTable } = commonProps;

  // Для таблицы используем TableDropdown
  if (useTableDropdown) {
    return (
      <TableDropdown $css={$summaryCSS} {...forTable}>
        {triggerSlot}
      </TableDropdown>
    );
  }

  // Для standalone используем обычный Dropdown
  return <Dropdown {...commonProps}>{triggerSlot}</Dropdown>;
};
