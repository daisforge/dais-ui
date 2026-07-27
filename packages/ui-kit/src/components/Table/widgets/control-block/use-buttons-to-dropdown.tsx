import { DropdownItemOption } from '@ui-kit/components/Dropdown';
import { Switch } from '@ui-kit/components/Switch';
import { IconViewScreen4Outline, IconViewSplit4Outline } from '@ui-kit/icons';
import { processDropdownItems } from '@ui-kit/utils/dropdownUtils';
import { useMemo } from 'react';
import { CSSObject } from 'styled-components';

import { useHeaderContext } from '../../contexts';
import { getCurrentSizeIcon } from '../../feature-row-size/handlers';
import {
  ITEM_ID_GROUPED_ROWS,
  NAME_TRIGGER_DROPDOWN_GROUPED_ROWS
} from '../../feature-rows-grouping/constants';
import { ControlBlockButtonProps } from './control-block-button.types';
import { isFeatureItem } from './typeGuards';
import { FeatureDetails, FeatureItem } from './types';

const proceedFeatureItem = (
  featureItem: FeatureItem,
  handlerMap: Map<
    string,
    (item: DropdownItemOption, event: React.SyntheticEvent) => void
  >
): DropdownItemOption | null => {
  if (!('details' in featureItem) || !featureItem.details) {
    return null;
  }

  const { details } = featureItem;
  const baseItem: DropdownItemOption = {
    value: featureItem.value,
    label: 'label' in details ? details.label : featureItem.value
  };

  switch (details.type) {
    case 'button': {
      const buttonDetails = details as Extract<
        FeatureDetails,
        { type: 'button' }
      >;
      handlerMap.set(featureItem.value, (_, e) => {
        e.preventDefault();
        buttonDetails.onClick();
      });
      return {
        ...baseItem,
        contentLeft: buttonDetails.icon
      };
    }

    case 'switch': {
      const switchDetails = details as Extract<
        FeatureDetails,
        { type: 'switch' }
      >;
      return {
        ...baseItem,
        contentRight: (
          <Switch
            checked={switchDetails.checked}
            onChange={switchDetails.onChange}
          />
        )
      };
    }

    case 'select': {
      const selectDetails = details as Extract<
        FeatureDetails,
        { type: 'select' }
      >;

      // Обрабатываем опции аналогично dropdown.items
      const [processedItems, itemHandlers] = processDropdownItems(
        selectDetails.options.map((option) => ({
          label: option.label,
          value: option.value
        })),
        (item, e) => {
          e.preventDefault();
          selectDetails.onChange(item.value as string);
        }
      );

      // Регистрируем обработчики для всех опций
      itemHandlers.forEach((handler, key) => handlerMap.set(key, handler));

      return {
        ...baseItem,
        contentLeft: selectDetails.icon,
        items: processedItems
      };
    }

    case 'custom': {
      const customDetails = details as Extract<
        FeatureDetails,
        { type: 'custom' }
      >;
      return {
        ...baseItem,
        contentLeft: customDetails.render()
      };
    }

    default:
      return null;
  }
};

export const useButtonsToDropdownItems = (
  buttons: Array<ControlBlockButtonProps | FeatureItem> = []
) => {
  const { rowSize, setRowSize, activeView, setActiveView, onRowSizeChange } =
    useHeaderContext();
  return useMemo(() => {
    const items: DropdownItemOption[] = [];
    const $summaryCSS: CSSObject = {};
    const globalHandlerMap = new Map<
      string,
      (item: DropdownItemOption, event: React.SyntheticEvent) => void
    >();
    buttons.forEach((button) => {
      if (isFeatureItem(button)) {
        const item = proceedFeatureItem(button, globalHandlerMap);
        if (item) items.push(item);
      } else if (button['value'] === 'rowSize') {
        const rowSizeOptions = [
          { label: 'Максимальная', value: 'big' },
          { label: 'Средняя', value: 'medium' },
          { label: 'Минимальная', value: 'small' }
        ];

        items.push({
          label: button['text'] || 'Высота строк',
          value: 'row-size-group',
          contentLeft: getCurrentSizeIcon(
            rowSize as 'big' | 'medium' | 'small'
          )({}),
          items: rowSizeOptions.map((option) => ({
            ...option,
            contentLeft: getCurrentSizeIcon(
              option.value as 'big' | 'medium' | 'small'
            )({})
          }))
        });

        rowSizeOptions.forEach((option) => {
          globalHandlerMap.set(option.value, () => {
            switch (option.value) {
              case 'big':
                setRowSize('big');
                onRowSizeChange?.('big');
                break;
              case 'small':
                setRowSize('small');
                onRowSizeChange?.('small');
                break;
              case 'medium':
                setRowSize('medium');
                onRowSizeChange?.('medium');
                break;
              default:
                break;
            }
          });
        });
      } else if (button['value'] === 'view-mode') {
        const viewModeOptions = [
          { label: 'Таблица', value: 'rows' },
          { label: 'Карточки', value: 'cards' }
        ];

        items.push({
          label: 'Вид отображения',
          value: 'view-mode-group',
          contentLeft:
            activeView === 'rows' ? (
              <IconViewSplit4Outline />
            ) : (
              <IconViewScreen4Outline />
            ),
          items: viewModeOptions.map((option) => ({
            ...option,
            contentLeft:
              option.value === 'rows' ? (
                <IconViewSplit4Outline />
              ) : (
                <IconViewScreen4Outline />
              )
          }))
        });

        viewModeOptions.forEach((option) => {
          globalHandlerMap.set(option.value, () => {
            switch (option.value) {
              case 'rows':
                setActiveView('rows');
                break;
              case 'cards':
                setActiveView('cards');
                break;
              default:
                break;
            }
          });
        });
      } else if (button.dropdown) {
        let groupValue: string;
        if (button['itemID'] === ITEM_ID_GROUPED_ROWS) {
          groupValue = NAME_TRIGGER_DROPDOWN_GROUPED_ROWS;
        } else {
          groupValue = `group-${button['key'] || button['text']}`;
        }

        // Регистрируем обработчик для самой группы
        if (button.dropdown['onItemSelect']) {
          globalHandlerMap.set(
            groupValue.toString(),
            button.dropdown['onItemSelect']
          );
        }

        const [processedItems, itemHandlers] = processDropdownItems(
          button.dropdown['items'] || [],
          button.dropdown['onItemSelect']
        );

        itemHandlers.forEach((handler, key) =>
          globalHandlerMap.set(key, handler)
        );

        if (button.dropdown?.$css) {
          Object.assign($summaryCSS, button.dropdown?.$css);
        }

        items.push({
          label: button['text'] ?? '',
          value: groupValue,
          contentLeft: button['contentLeft'],
          items: processedItems,
          className: button['className']
        });
      } else {
        // Обработка обычных кнопок остается без изменений
        const value = button['key'] || button['text'] || `btn-${Date.now()}`;
        const item: DropdownItemOption = {
          label: button['text'] || 'Кнопка',
          value: value.toString(),
          disabled: button['disabled'],
          contentLeft: button['contentLeft']
        };

        if (button['onClick']) {
          globalHandlerMap.set(value.toString(), (_, event) => {
            const mouseEvent = {
              ...event,
              nativeEvent: event.nativeEvent,
              preventDefault: event.preventDefault,
              stopPropagation: event.stopPropagation,
              target: event.target as EventTarget & HTMLElement,
              currentTarget: event.currentTarget as EventTarget & HTMLElement
            } as unknown as React.MouseEvent<HTMLElement>;

            button['onClick']?.(mouseEvent);
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

    // TODO Паша - проверить зависимости onRowSizeChange - должен ли быть в массиве или нет ? [Не должен быть]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeView, buttons, rowSize, setActiveView, setRowSize]);
};
