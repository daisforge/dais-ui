import { DropdownProps } from '@ui-kit/components/Dropdown';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { ContextMenuDropdownItem } from '../feature-context-menu';
import { TablePopoverContextValue } from '../feature-popover-table/context/TablePopoverContext';
import {
  ColumnOrColumnGroupGlideInstance,
  TableGlideInstanceProps,
  TableInfoBase,
  TableInfoWithRow
} from '../TableGlideInstance/type';
import { ColumnConfig, ObjectForExtending, TableConfig } from '../types';

interface ContextMenuState<
  RowType extends ObjectForExtending,
  SummaryRowType,
  /* eslint-disable @typescript-eslint/ban-types */

  CustomCtxs extends ObjectForExtending = {}
> {
  isOpen: boolean;
  items: DropdownProps['items'] | null;
  position: { x: number; y: number } | null;
  // В async-режиме храним тег header/cell + параметры для соответствующего
  // getDropdownItems. Тег — литеральный дискриминант: по нему TS сужает тип,
  // и getDropdownItems вызывается без приведения.
  asyncParams?:
    | {
        type: 'header';
        params: TableInfoBase<RowType, SummaryRowType, ObjectForExtending>;
      }
    | {
        type: 'cell';
        params: TableInfoWithRow<RowType, SummaryRowType, ObjectForExtending>;
      };
  context?: {
    type: 'header' | 'cell';
    data: {
      header?: {
        column: ColumnOrColumnGroupGlideInstance<
          RowType,
          SummaryRowType,
          CustomCtxs
        >;
        ctxs: CustomCtxs;
      };
      cell?: {
        row: RowType;
        column: ColumnOrColumnGroupGlideInstance<
          RowType,
          SummaryRowType,
          CustomCtxs
        >;
        ctxs: CustomCtxs;
      };
    };
  };
}

export type CellClickArgs<R extends ObjectForExtending, SR> = {
  row: R;
  column: ColumnConfig<R, SR>;
  selectCell: (enableEditor?: boolean) => void;
};

export const useContextMenuValues = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  tableConfig,
  popover
}: {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  popover: TablePopoverContextValue;
}) => {
  const {
    onHeaderContextMenu,
    onHeaderContextMenuDropdown,
    onCellContextMenu,
    onCellContextMenuDropdown
  } = tableConfig;

  const [state, setState] = useState<ContextMenuState<RowType, SummaryRowType>>(
    {
      isOpen: false,
      position: null,
      items: null
    }
  );

  // Блокировка открытия контекстного меню, если открыт поповер (или был открыт только что)
  // Это решает проблему, когда правый клик закрывает поповер, и тут же пытается открыть меню, вызывая глитчи.
  const blockContextMenuRef = React.useRef(false);

  useEffect(() => {
    if (popover.state.isOpen) {
      blockContextMenuRef.current = true;
    } else {
      // Используем два RAF вместо таймера
      let rafId1: number;
      let rafId2: number;

      // eslint-disable-next-line prefer-const
      rafId1 = requestAnimationFrame(() => {
        // Первый RAF - следующий кадр анимации
        rafId2 = requestAnimationFrame(() => {
          // Второй RAF - еще один кадр для гарантии
          blockContextMenuRef.current = false;
        });
      });

      return () => {
        if (rafId1) cancelAnimationFrame(rafId1);
        if (rafId2) cancelAnimationFrame(rafId2);
      };
    }
    return undefined;
  }, [popover.state.isOpen]);

  const open = useCallback(
    ({
      position,
      items = null,
      asyncParams,
      context
    }: {
      position: { x: number; y: number };
      items?: DropdownProps['items'] | null;
      asyncParams?: ContextMenuState<RowType, SummaryRowType>['asyncParams'];
      context?: ContextMenuState<RowType, SummaryRowType>['context'];
    }) => {
      setState({
        isOpen: true,
        position,
        items,
        asyncParams,
        context
      });
    },
    []
  );

  const close = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isOpen: false,
      items: null,
      asyncParams: undefined,
      context: undefined
    }));
  }, []);

  const openHeaderContextMenu = useCallback<
    NonNullable<
      TableGlideInstanceProps<RowType, SummaryRowType>['onHeaderContextMenu']
    >
  >(
    (colIndex, event, { column, ctxs, refTable }) => {
      // Если поповер активен (или был только что), блокируем открытие контекстного меню
      if (blockContextMenuRef.current) {
        event.preventDefault();
        return;
      }

      // Стандартная логика
      if (onHeaderContextMenu) {
        onHeaderContextMenu(colIndex, event, { column, ctxs, refTable });
      }

      if (!onHeaderContextMenuDropdown) return;

      const params = { column, refTable, ctxs };
      const itemsOptions = onHeaderContextMenuDropdown.getDropdownItems(params);

      const position = {
        x: event.bounds.x + event.localEventX,
        y: event.bounds.y + event.localEventY
      };
      const context = {
        type: 'header' as const,
        data: { header: { column, ctxs } }
      };

      if (itemsOptions && itemsOptions.length > 0) {
        event.preventDefault();
        open({ position, items: itemsOptions, context });
      } else if (onHeaderContextMenuDropdown.onOpen) {
        // Async-режим: открываем даже при пустых items, потребитель грузит сам
        event.preventDefault();
        open({ position, asyncParams: { type: 'header', params }, context });
        onHeaderContextMenuDropdown.onOpen(params);
      }
    },
    [onHeaderContextMenu, onHeaderContextMenuDropdown, open]
  );

  const openCellContextMenu = useCallback<
    NonNullable<
      TableGlideInstanceProps<RowType, SummaryRowType>['onCellContextMenu']
    >
  >(
    (args, event, { column, row, ctxs, refTable }) => {
      // Если поповер активен (или был только что), блокируем открытие контекстного меню
      if (blockContextMenuRef.current) {
        event.preventDefault();
        return;
      }

      if (onCellContextMenu)
        onCellContextMenu(args, event, { column, row, ctxs, refTable });
      if (!onCellContextMenuDropdown) return;

      const params = { row, column, refTable, ctxs };
      const itemsOptions = onCellContextMenuDropdown.getDropdownItems(params);

      const position = {
        x: event.bounds.x + event.localEventX,
        y: event.bounds.y + event.localEventY
      };
      const context = {
        type: 'cell' as const,
        data: { cell: { row, column, ctxs } }
      };

      if (itemsOptions && itemsOptions.length > 0) {
        event.preventDefault();
        open({ position, items: itemsOptions, context });
      } else if (onCellContextMenuDropdown.onOpen) {
        // Async-режим: открываем даже при пустых items, потребитель грузит сам
        event.preventDefault();
        open({ position, asyncParams: { type: 'cell', params }, context });
        onCellContextMenuDropdown.onOpen(params);
      }
    },
    [onCellContextMenu, onCellContextMenuDropdown, open]
  );

  // Извлекаем пропсы для Dropdown из конфигов контекстного меню
  // (всё кроме type, getDropdownItems, onItemSelect — они обрабатываются отдельно)
  const dropdownProps = useMemo(() => {
    const source = onCellContextMenuDropdown ?? onHeaderContextMenuDropdown;
    if (!source) return {};
    const {
      type: _type,
      getDropdownItems: _getItems,
      onItemSelect: _onSelect,
      onOpen: _onOpen,
      ...rest
    } = source;
    return rest;
  }, [onCellContextMenuDropdown, onHeaderContextMenuDropdown]);

  // items в async-режиме перечитываются реактивно из getDropdownItems (по
  // сохранённым asyncParams) на каждый рендер, пока меню открыто; в обычном
  // (синхронном) режиме используется снапшот из стейта.
  const items = useMemo<DropdownProps['items'] | null>(() => {
    if (!state.isOpen) return null;
    const pending = state.asyncParams;
    if (!pending) return state.items;
    // Тег header/cell сужает тип params — getDropdownItems вызываем без каста.
    if (pending.type === 'header') {
      return (
        onHeaderContextMenuDropdown?.getDropdownItems(pending.params) ?? null
      );
    }
    return onCellContextMenuDropdown?.getDropdownItems(pending.params) ?? null;
  }, [state, onHeaderContextMenuDropdown, onCellContextMenuDropdown]);

  return useMemo(
    () => ({
      ...state,
      ...dropdownProps,
      items,
      open,
      close,
      enableHeaderContextMenu:
        !!onHeaderContextMenu || !!onHeaderContextMenuDropdown,
      enableCellContextMenu: !!onCellContextMenu || !!onCellContextMenuDropdown,
      openHeaderContextMenu,
      openCellContextMenu,
      onItemSelect: (
        item: ContextMenuDropdownItem,
        event?: React.SyntheticEvent
      ) => {
        // Если контекст меню не определен (не должно происходить в нормальной работе),
        // закрываем меню и выходим
        if (!state.context) {
          close();
          return;
        }

        // Закрывает меню если нужно, учитывая closeOnSelect и вложенные пункты.
        // В атомарном Dropdown onItemSelect вызывается и для пунктов с подменю,
        // но Dropdown при этом сам не закрывается (даже с closeOnSelect: true).
        // Поскольку мы закрываем меню вручную через close() (псевдо-controlled-режим),
        // нужно повторить это поведение — не закрывать при клике на пункт с подменю.
        //
        // TODO: Табличный Dropdown (TableDropdownWithCustomClickOutside) работает
        // в псевдо-controlled-режиме: открывается через скрытую кнопку (HiddenTriggerButton),
        // управляется через isOpen из стейта + условный рендеринг. У атомарного Dropdown
        // нет controlled API, поэтому closeOnSelect и закрытие обрабатываются вручную.
        // Когда атомарная команда добавит controlled-режим, эту часть можно будет упростить.
        const closeIfNeeded = (closeOnSelect?: boolean) => {
          const hasNestedItems =
            'items' in item &&
            Array.isArray(item.items) &&
            item.items.length > 0;
          if (!hasNestedItems && closeOnSelect !== false) {
            close();
          }
        };

        // Обработка выбора пункта меню для заголовка таблицы (header)
        if (state.context.type === 'header') {
          if (state.context.data.header) {
            // Вызываем пользовательский обработчик для меню заголовка,
            // передавая выбранный пункт, данные заголовка и событие
            onHeaderContextMenuDropdown?.onItemSelect?.(
              item,
              state.context.data.header,
              event
            );
            closeIfNeeded(onHeaderContextMenuDropdown?.closeOnSelect);
            return;
          }
        }

        // Обработка выбора пункта меню для ячейки таблицы (cell)
        if (state.context.data.cell) {
          // Вызываем пользовательский обработчик для меню ячейки,
          // передавая выбранный пункт, данные ячейки и событие
          onCellContextMenuDropdown?.onItemSelect?.(
            item,
            state.context.data.cell,
            event
          );
          closeIfNeeded(onCellContextMenuDropdown?.closeOnSelect);
        }
      }
    }),
    [
      state,
      dropdownProps,
      items,
      open,
      close,
      onHeaderContextMenu,
      onHeaderContextMenuDropdown,
      onCellContextMenu,
      onCellContextMenuDropdown,
      openHeaderContextMenu,
      openCellContextMenu
    ]
  );
};
