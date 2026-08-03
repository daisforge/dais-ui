import { DropdownItemOption } from '@ui-kit/components/Dropdown';
import { Switch } from '@ui-kit/components/Switch';
import {
  IconSb,
  IconViewScreen4Outline,
  IconViewSplit4Outline,
} from '@ui-kit/icons';
import { ReactNode, useCallback, useMemo } from 'react';
import { CSSObject } from 'styled-components';

import { useHeaderContext } from '../../contexts';
// getCurrentSizeIcon нужен только закомментированной ветке rowSize ниже
// import { getCurrentSizeIcon } from '../../feature-row-size/handlers';
import {
  ITEM_ID_GROUPED_ROWS,
  NAME_TRIGGER_DROPDOWN_GROUPED_ROWS,
} from '../../feature-rows-grouping/constants';
import { ControlBlockButtonProps } from './control-block-button.types';
import { isFeatureItem } from './typeGuards';
import {
  DropdownRenderCtx,
  FeatureDetails,
  FeatureItem,
  FeatureItemWithIcon,
} from './types';

// Размер иконки пункта дропдауна под текущий rowSize. На маленьком rowSize
// дропдаун мельче, поэтому и иконки берём на ступень меньше. Экспортируется,
// чтобы наши кнопки (ключ-текст, группировка) задавали тот же размер в
// своём dropdownIconRender.
export const getDropdownIconSize = (rowSize: DropdownRenderCtx['rowSize']) =>
  rowSize === 'small' ? ('xs' as const) : ('s' as const);

// Иконка может быть готовым узлом или функцией от контекста. Функцию
// вызываем с контекстом (потребитель сам подбирает размер), узел отдаём
// как есть. Используется и в дропдауне, и в панели фич (FeaturesSidebarBlock).
export const resolveFeatureIcon = (
  icon: ReactNode | ((ctx: DropdownRenderCtx) => ReactNode),
  ctx: DropdownRenderCtx,
): ReactNode => (typeof icon === 'function' ? icon(ctx) : icon);

// Плейсхолдер-иконка (opacity 0): держит левый отступ, чтобы тексты пунктов
// без иконки были выровнены по одной линии с пунктами, у которых иконка есть.
// Размер берём под текущий rowSize, иначе на маленьком rowSize пустое место
// резервируется по большой иконке и отступ не совпадает с реальными иконками.
const getIconPlaceholder = (size: 'xs' | 's') => (
  <span style={{ display: 'inline-flex', opacity: 0 }}>
    <IconSb size={size} />
  </span>
);

const processDropdownItems = (
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

// Собирает value всех пунктов (включая вложенные) в множество. Нужно, чтобы
// отметить листы конкретной группы (например группировки) как keep-open и не
// закрывать по ним дропдаун.
const collectItemValues = (
  items: DropdownItemOption[],
  acc: Set<string>,
): void => {
  items.forEach((item) => {
    if (item.value !== undefined && item.value !== null) {
      acc.add(String(item.value));
    }
    if (item.items?.length) {
      collectItemValues(item.items, acc);
    }
  });
};

const proceedFeatureItem = (
  featureItem: FeatureItem,
  handlerMap: Map<
    string,
    (item: DropdownItemOption, event: React.SyntheticEvent) => void
  >,
  ctx: DropdownRenderCtx,
): DropdownItemOption | null => {
  if (!('details' in featureItem) || !featureItem.details) {
    return null;
  }

  const { details } = featureItem;
  const baseItem: DropdownItemOption = {
    value: featureItem.value,
    label: 'label' in details ? details.label : featureItem.value,
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
        contentLeft: resolveFeatureIcon(buttonDetails.icon, ctx),
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
            toggleSize="s"
            checked={switchDetails.checked}
            onChange={switchDetails.onChange}
          />
        ),
      };
    }

    case 'select': {
      const selectDetails = details as Extract<
        FeatureDetails,
        { type: 'select' }
      >;

      // Обрабатываем опции аналогично dropdown.items. Контент пункта
      // (contentLeft/contentRight/disabled) прокидываем как есть — это данные
      // разработчика, библиотека их не навязывает и не дорисовывает.
      const [processedItems, itemHandlers] = processDropdownItems(
        selectDetails.options.map((option) => ({
          label: option.label,
          value: option.value,
          contentLeft: option.contentLeft,
          contentRight: option.contentRight,
          disabled: option.disabled,
          dividerAfter: option.dividerAfter,
        })),
        (item, e) => {
          e.preventDefault();
          selectDetails.onChange(item.value as string);
        },
      );

      // Регистрируем обработчики для всех опций
      itemHandlers.forEach((handler, key) => handlerMap.set(key, handler));

      return {
        ...baseItem,
        contentLeft: resolveFeatureIcon(selectDetails.icon, ctx),
        items: processedItems,
      };
    }

    case 'custom': {
      const customDetails = details as Extract<
        FeatureDetails,
        { type: 'custom' }
      >;
      return {
        ...baseItem,
        contentLeft: customDetails.render(ctx),
      };
    }

    default:
      return null;
  }
};

export const useButtonsToDropdownItems = (
  buttons: Array<ControlBlockButtonProps | FeatureItem> = [],
) => {
  // setRowSize и onRowSizeChange нужны только закомментированной ветке
  // rowSize ниже, вернуть в деструктуризацию вместе с ней
  const { activeView, setActiveView, rowSize } = useHeaderContext();
  return useMemo(() => {
    // Иконки этих пунктов рисуются в overflow дропдауне
    const ctx: DropdownRenderCtx = { rowSize, isInDropdown: true };
    const dropdownIconSize = getDropdownIconSize(rowSize);

    const items: DropdownItemOption[] = [];
    // value пунктов, по которым дропдаун НЕ закрывается (мульти-тоггл):
    // листы группировки + switch-пункты. Свитч держим открытым, чтобы клик
    // тоглил его нативный onChange, а меню не схлопывалось в тот же клик (иначе
    // пункт размонтируется раньше, чем switch отдаст onChange).
    const keepOpenItemValues = new Set<string>();
    const $summaryCSS: CSSObject = {};
    const globalHandlerMap = new Map<
      string,
      (item: DropdownItemOption, event: React.SyntheticEvent) => void
    >();
    // Дивайдеры в дропдауне повторяют последовательность контрл-блока:
    // зонный (кнопки|иконки) + dividerLeft у иконок
    let pushedButtonZoneItem = false;
    let firstIconZoneItemPushed = false;

    buttons.forEach((button) => {
      const lenBefore = items.length;
      // Источники зоны иконок (FeatureItem-образные) имеют поле value
      const isIconZoneSource = 'value' in button;

      if (isFeatureItem(button)) {
        const item = proceedFeatureItem(button, globalHandlerMap, ctx);
        if (item) {
          items.push(item);
          // switch-фичу держим открытой: клик тоглит нативный onChange свитча,
          // дропдаун при этом не закрываем (см. keepOpenItemValues выше).
          if ('details' in button && button.details?.type === 'switch') {
            keepOpenItemValues.add(String(button.value));
          }
        }
        // Ветка rowSize сейчас мертва: rowSize больше никогда не уходит в
        // overflow дропдаун (связка с fullScreen, canBeCompressedInToolsMenu
        // false). Код оставлен на случай, если дизайн вернёт фичу в дропдаун.
        // } else if (button['value'] === 'rowSize') {
        //   const rowSizeOptions = [
        //     { label: 'Максимальная', value: 'big' },
        //     { label: 'Средняя', value: 'medium' },
        //     { label: 'Минимальная', value: 'small' },
        //   ];
        //
        //   items.push({
        //     label: button['text'] || 'Высота строк',
        //     value: 'row-size-group',
        //     contentLeft: getCurrentSizeIcon(
        //       rowSize as 'big' | 'medium' | 'small'
        //     )({}),
        //     items: rowSizeOptions.map((option) => ({
        //       ...option,
        //       contentLeft: getCurrentSizeIcon(
        //         option.value as 'big' | 'medium' | 'small'
        //       )({}),
        //     })),
        //   });
        //
        //   rowSizeOptions.forEach((option) => {
        //     globalHandlerMap.set(option.value, () => {
        //       switch (option.value) {
        //         case 'big':
        //           setRowSize('big');
        //           onRowSizeChange?.('big');
        //           break;
        //         case 'small':
        //           setRowSize('small');
        //           onRowSizeChange?.('small');
        //           break;
        //         case 'medium':
        //           setRowSize('medium');
        //           onRowSizeChange?.('medium');
        //           break;
        //         default:
        //           break;
        //       }
        //     });
        //   });
      } else if (button['value'] === 'view-mode') {
        const viewModeOptions = [
          { label: 'Таблица', value: 'rows' },
          { label: 'Карточки', value: 'cards' },
        ];

        items.push({
          label: 'Вид отображения',
          value: 'view-mode-group',
          contentLeft:
            activeView === 'rows' ? (
              <IconViewSplit4Outline size={dropdownIconSize} />
            ) : (
              <IconViewScreen4Outline size={dropdownIconSize} />
            ),
          items: viewModeOptions.map((option) => ({
            ...option,
            contentLeft:
              option.value === 'rows' ? (
                <IconViewSplit4Outline size={dropdownIconSize} />
              ) : (
                <IconViewScreen4Outline size={dropdownIconSize} />
              ),
          })),
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

        // Обработчик вешаем на саму группу ТОЛЬКО если у неё нет вложенных
        // пунктов (тогда это листовой пункт-действие). Если вложенные пункты
        // есть — родитель служит лишь раскрывашкой: клик по нему НЕ должен
        // вызывать onItemSelect. Иначе синтетический value группы
        // (group-...) уходит в обработчик фичи и ломает её состояние —
        // например, ключ-текст сбрасывал выбор при клике по родителю.
        const hasNestedItems = !!button.dropdown.items?.length;
        if (button.dropdown.onItemSelect && !hasNestedItems) {
          globalHandlerMap.set(
            groupValue.toString(),
            button.dropdown.onItemSelect,
          );
        }

        const [processedItems, itemHandlers] = processDropdownItems(
          button.dropdown.items || [],
          button.dropdown.onItemSelect,
        );

        itemHandlers.forEach((handler, key) =>
          globalHandlerMap.set(key, handler),
        );

        // Листы группировки помечаем keep-open: выбор колонки не закрывает
        // дропдаун, можно отметить несколько подряд.
        if (button['itemID'] === ITEM_ID_GROUPED_ROWS) {
          collectItemValues(processedItems, keepOpenItemValues);
        }

        if (button.dropdown?.$css) {
          Object.assign($summaryCSS, button.dropdown?.$css);
        }

        items.push({
          label: button['text'] ?? '',
          value: groupValue,
          // dropdownIconRender (если задан) позволяет кнопке подменить иконку
          // под дропдаун, иначе берём обычный contentLeft как есть
          contentLeft: button.dropdownIconRender
            ? button.dropdownIconRender(ctx)
            : button['contentLeft'],
          items: processedItems,
          className: button['className'],
        });
      } else {
        // Обычные кнопки + фичи-иконки без details (value/label/Icon/onClick).
        // isFeatureItem не покрывает FeatureItem без details/CustomIconRender —
        // рантаймом они попадают сюда, поэтому расширяем тип явно.
        const f = button as ControlBlockButtonProps &
          Partial<Pick<FeatureItemWithIcon, 'Icon' | 'label'>>;
        const value =
          button['key'] ||
          button['value'] ||
          button['text'] ||
          `btn-${Date.now()}`;
        const IconCmp = f.Icon;
        // Приоритет: явный dropdownIconRender кнопки, затем готовый
        // contentLeft (как есть, его размер не трогаем), затем Icon-компонент
        // фичи - его рисуем сами и задаём размер под дропдаун.
        let dropdownContentLeft: ReactNode;
        if (button.dropdownIconRender) {
          dropdownContentLeft = button.dropdownIconRender(ctx);
        } else if (button['contentLeft']) {
          dropdownContentLeft = button['contentLeft'];
        } else if (IconCmp) {
          dropdownContentLeft = (
            <IconCmp color="inherit" size={dropdownIconSize} />
          );
        }
        const item: DropdownItemOption = {
          label: button['text'] || f.label || 'Кнопка',
          value: value.toString(),
          disabled: button['disabled'],
          contentLeft: dropdownContentLeft,
        };

        if (button['onClick']) {
          globalHandlerMap.set(value.toString(), (_, event) => {
            const mouseEvent = {
              ...event,
              nativeEvent: event.nativeEvent,
              preventDefault: event.preventDefault,
              stopPropagation: event.stopPropagation,
              target: event.target as EventTarget & HTMLElement,
              currentTarget: event.currentTarget as EventTarget & HTMLElement,
            } as unknown as React.MouseEvent<HTMLElement>;

            button['onClick']?.(mouseEvent);
          });
        }

        items.push(item);
      }

      // ===== Дивайдеры (последовательность как в контрл-блоке) =====
      if (items.length > lenBefore) {
        const pushed = items[items.length - 1] as DropdownItemOption & {
          dividerBefore?: boolean;
          dividerAfter?: boolean;
        };
        if (isIconZoneSource) {
          // Зонный дивайдер (кнопки | иконки) → перед первым icon-пунктом
          if (!firstIconZoneItemPushed && pushedButtonZoneItem) {
            pushed.dividerBefore = true;
          }
          firstIconZoneItemPushed = true;
          // dividerLeft в CB (row-reverse): дивайдер между этой иконкой и
          // следующей по массиву → в вертикальном списке — ПОСЛЕ пункта.
          // in-проверка сужает union до FeatureItemWithIcon.
          if ('dividerLeft' in button && button.dividerLeft) {
            pushed.dividerAfter = true;
          }
        } else {
          pushedButtonZoneItem = true;
        }
      }
    });

    // Дивайдер после последнего пункта не рисуем (как в CB: у крайнего
    // элемента dividerLeft не рендерится)
    const lastItem = items[items.length - 1] as
      | (DropdownItemOption & { dividerAfter?: boolean })
      | undefined;
    if (lastItem?.dividerAfter) {
      delete lastItem.dividerAfter;
    }

    // Если у пункта нет иконки — подставляем прозрачный плейсхолдер того же
    // размера, что и реальные иконки, чтобы текст был выровнен по одной линии.
    const iconPlaceholder = getIconPlaceholder(dropdownIconSize);
    const dropdownItems = items.map((item) => ({
      ...item,
      contentLeft: item.contentLeft ?? iconPlaceholder,
    }));

    return {
      dropdownItems,
      handlerMap: globalHandlerMap,
      $summaryCSS,
      keepOpenItemValues,
    };

    // setRowSize вернётся в зависимости вместе с веткой rowSize
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeView, buttons, setActiveView, rowSize]);
};

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
