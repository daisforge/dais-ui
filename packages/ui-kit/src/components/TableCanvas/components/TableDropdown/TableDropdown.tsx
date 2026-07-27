import { Dropdown, DropdownItemOption } from '@ui-kit/components/Dropdown';
import { tableClassNames } from '@ui-kit/components/TableCanvas/styles';
import React, { useEffect, useRef } from 'react';
import styled, { CSSObject } from 'styled-components';

import {
  useHeaderContext,
  useRefTableGlobalContainerContext
} from '../../contexts';
import { LIST_WIDTH, SIZES } from '../../styles/styles.constants';
import { TableDropdownProps } from './types';

const StyledDropdown: typeof Dropdown = styled(Dropdown)<{ $css?: CSSObject }>(
  ({ $css }) => $css
);

// Закрываем неуправляемый Plasma-дропдаун его же путём: диспатчим mousedown на
// document. Его ловит внутренний useOutsideClick Plasma (target=document вне
// меню) и закрывает штатно, со своей анимацией и onToggle(false), без ремаунта.
// Один механизм на оба случая: клик в canvas и ручное закрытие по выбору пункта.
const closeTableDropdown = () => {
  document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
};

export const TableDropdown = (
  props: TableDropdownProps & {
    isOpen?: boolean;
    // Если задан, TableDropdown сам управляет закрытием по выбору пункта:
    // выключает Plasma-овский closeOnSelect и закрывает вручную только листовые
    // пункты, на которых предикат вернул true. Так можно держать меню открытым
    // на части пунктов (например тоггл колонок группировки).
    shouldCloseOnItemSelect?: (item: DropdownItemOption) => boolean;
  }
) => {
  const refTableGlobalContainer = useRefTableGlobalContainerContext();
  const { rowSize } = useHeaderContext();

  const {
    onToggle: onToggleProp,
    onItemSelect: onItemSelectProp,
    closeOnSelect: closeOnSelectProp,
    shouldCloseOnItemSelect,
    ...restProps
  } = props;

  // Закрытие по клику в canvas-грид.
  // Plasma ловит outside-click через mousedown (document, bubble). Glide на
  // клик мышью по canvas зовёт preventDefault на pointerdown, что подавляет
  // совместимостный mousedown, и до слушателя Plasma он не доходит: дропдаун
  // над таблицей не закрывается (по обычному DOM закрывается штатно). Снаружи
  // Plasma неуправляем, но закрыть его можно его же путём: ловим pointerdown в
  // capture-фазе (оно не подавляется), и если клик внутри грида, сами диспатчим
  // mousedown на document. Plasma отрабатывает свой outside-click и закрывается
  // штатно (своя анимация меню + onToggle(false)), а потребитель доигрывает флип
  // шеврона на живом элементе, без ремаунта. target=document вне меню, поэтому
  // Plasma считает клик снаружи.
  const isOpenRef = useRef(false);

  useEffect(() => {
    const handlePointerDownCapture = (event: PointerEvent) => {
      if (!isOpenRef.current) return;
      const target = event.target as HTMLElement | null;
      // Меню Plasma рендерится в портал вне .gdg-table, так что клики по пунктам
      // сюда не попадают: реагируем только на клик внутри грида.
      if (target?.closest?.(`.${tableClassNames.tableAndTableScroller}`)) {
        closeTableDropdown();
      }
    };

    document.addEventListener('pointerdown', handlePointerDownCapture, {
      capture: true
    });
    return () =>
      document.removeEventListener('pointerdown', handlePointerDownCapture, {
        capture: true
      });
  }, []);

  // Ручное закрытие по выбору пункта включается только при заданном предикате.
  // Тогда выключаем closeOnSelect Plasma и закрываем сами: для ЛИСТОВЫХ пунктов
  // (родители-раскрывашки не закрывают, как и Plasma по !hasDescendants), на
  // которых предикат вернул true. onItemSelect Plasma зовёт ДО ветки закрытия,
  // поэтому сам выбор (тоггл) отрабатывает в любом случае.
  const manualCloseOnSelect = shouldCloseOnItemSelect !== undefined;
  const handleItemSelect = manualCloseOnSelect
    ? (item: DropdownItemOption, event: React.SyntheticEvent) => {
        onItemSelectProp?.(item, event);
        const isLeaf = !item.items?.length;
        if (isLeaf && shouldCloseOnItemSelect?.(item)) {
          closeTableDropdown();
        }
      }
    : onItemSelectProp;

  return (
    <StyledDropdown
      portal={refTableGlobalContainer}
      listWidth={LIST_WIDTH[rowSize]}
      size={SIZES[rowSize].input}
      {...restProps}
      closeOnSelect={manualCloseOnSelect ? false : closeOnSelectProp}
      onItemSelect={handleItemSelect}
      onToggle={(opened, event) => {
        isOpenRef.current = opened;
        onToggleProp?.(opened, event);
      }}
    />
  );
};

export const TableDropdownWithCustomClickOutside = ({
  onClose,
  isOpen,
  portal,
  ...props
}: TableDropdownProps & { isOpen?: boolean; onClose?: () => void }) => {
  const refTableGlobalContainer = useRefTableGlobalContainerContext();
  const { rowSize } = useHeaderContext();

  useEffect(() => {
    if (!isOpen) return undefined;

    const mountTime = Date.now();

    const handleClickOutside = (e: Event) => {
      if (Date.now() - mountTime < 200) return;

      let menuElement: HTMLElement | null = null;

      if (typeof portal === 'string') {
        // Сначала пытаемся найти элемент внутри контейнера этой конкретной таблицы
        // Это решает проблему дублирующихся ID, если таблиц несколько
        if (refTableGlobalContainer?.current) {
          menuElement = refTableGlobalContainer.current.querySelector(
            `[id="${portal}"]`
          ) as HTMLElement;
        }

        // Если не нашли локально, ищем глобально
        if (!menuElement) {
          menuElement = document.getElementById(portal);
        }
      } else if (portal && 'current' in portal) {
        menuElement = portal.current;
      } else if (refTableGlobalContainer?.current) {
        menuElement = refTableGlobalContainer.current;
      }

      if (menuElement && !menuElement.contains(e.target as Node) && onClose) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.addEventListener('pointerdown', handleClickOutside, {
      capture: true
    });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside, {
        capture: true
      });
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, portal, refTableGlobalContainer]);

  return (
    <StyledDropdown
      listWidth={LIST_WIDTH[rowSize]}
      size={SIZES[rowSize].input}
      closeOnOverlayClick={false}
      portal={portal}
      {...props}
    />
  );
};
