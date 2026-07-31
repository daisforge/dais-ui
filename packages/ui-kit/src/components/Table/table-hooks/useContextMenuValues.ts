import { DropdownProps } from '@ui-kit/components/Dropdown';
import React, { useCallback, useMemo, useState } from 'react';
import {
  CalculatedColumn,
  CellClickArgs,
  CellMouseEvent,
  DataGridHandle,
} from 'react-data-grid';

import { ContextMenuDropdownItem } from '../feature-context-menu';
import { tableClassNames } from '../styles';
import { ObjectForExtending, TableConfig } from '../types';

const HEADER_COLUMN_SELECTOR = `[role="columnheader"]`;
const ATTR_NAMES = {
  row: 'aria-rowindex',
  col: 'aria-colindex',
};

interface ContextMenuState<RowType, SummaryRowType> {
  isOpen: boolean;
  items: DropdownProps['items'] | null;
  position: { x: number; y: number } | null;
  targetElement: HTMLElement | undefined;
  // В async-режиме храним тег header/cell + параметры для соответствующего
  // getDropDownItems (тег-дискриминант позволяет вызвать без приведения).
  asyncParams?:
    | { type: 'header'; params: { columnLabel: string | undefined } }
    | {
        type: 'cell';
        params: {
          row: RowType;
          column: CalculatedColumn<RowType, SummaryRowType>;
        };
      };
  context?: {
    type: 'header' | 'cell';
    data: {
      header?: { columnLabel: string | undefined };
      cell?: {
        row: RowType;
        column: CalculatedColumn<RowType, SummaryRowType>;
        selectCell: (enableEditor?: boolean) => void;
      };
    };
  };
}

export const useContextMenuValues = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  tableConfig,
  refTableX,
}: {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  refTableX: React.RefObject<DataGridHandle>;
}) => {
  const {
    onHeaderContextMenu,
    onHeaderContextMenuDropDown,
    onCellContextMenu,
    onCellContextMenuDropDown,
  } = tableConfig;

  const [state, setState] = useState<ContextMenuState<RowType, SummaryRowType>>(
    {
      isOpen: false,
      position: null,
      items: null,
      targetElement: undefined,
    },
  );

  const open = useCallback(
    ({
      position,
      items = null,
      asyncParams,
      targetElement = undefined,
      context,
    }: {
      position: { x: number; y: number };
      items?: DropdownProps['items'] | null;
      asyncParams?: ContextMenuState<RowType, SummaryRowType>['asyncParams'];
      targetElement?: HTMLElement;
      context?: ContextMenuState<RowType, SummaryRowType>['context'];
    }) => {
      setState({
        isOpen: true,
        position,
        items,
        asyncParams,
        targetElement,
        context,
      });
    },
    [],
  );

  const close = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isOpen: false,
      items: null,
      asyncParams: undefined,
      targetElement: undefined,
      context: undefined,
    }));
  }, []);

  const getClosestColumn = useCallback((event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) return undefined;
    const columnHeader = event.target.closest(HEADER_COLUMN_SELECTOR);
    if (columnHeader) {
      if ('innerText' in columnHeader && columnHeader.innerText) {
        return {
          columnLabel: String(columnHeader.innerText),
          columnHeader,
        };
      }
      return undefined;
    }
    return undefined;
  }, []);

  const getCountRowsHeader = useCallback(
    () =>
      refTableX.current?.element?.querySelectorAll(
        `.${tableClassNames.headerRow}`,
      ).length || 0,
    [refTableX],
  );

  const getRowIdxAndIdxForHeaderCell = useCallback(
    (el: HTMLElement, countRowsHeader: number) => {
      const colIndexAttr = el.getAttribute(ATTR_NAMES.col);
      const rowIndexAttr = el?.parentElement?.getAttribute(ATTR_NAMES.row);
      if (colIndexAttr === null || rowIndexAttr === null) return null;
      const colIndex = parseInt(colIndexAttr, 10);
      const rowIndex = parseInt(rowIndexAttr ?? '1', 10);
      return {
        rowIdx: -(countRowsHeader - rowIndex + 1),
        idx: colIndex - 1,
      };
    },
    [],
  );

  const openHeaderContextMenu = useCallback(
    (event: React.MouseEvent) => {
      const columnLabel = getClosestColumn(event)?.columnLabel;
      const columnHeader = getClosestColumn(event)?.columnHeader;

      let targetElement;
      if (event.currentTarget instanceof HTMLElement) {
        targetElement = event.currentTarget;
      }
      if (!columnLabel) return;
      if (onHeaderContextMenu)
        onHeaderContextMenu(event, columnLabel, targetElement);
      if (!onHeaderContextMenuDropDown) return;
      const rect = targetElement?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
      };
      event.preventDefault();

      const params = { columnLabel };
      const itemsOptions = onHeaderContextMenuDropDown.getDropDownItems(params);

      const menuPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      const context = {
        type: 'header' as const,
        data: { header: { columnLabel } },
      };

      const selectHeaderCell = () => {
        if (columnHeader instanceof HTMLElement) {
          const position = getRowIdxAndIdxForHeaderCell(
            columnHeader,
            getCountRowsHeader(),
          );
          if (position) {
            refTableX.current?.selectCell(position);
          }
        }
      };

      if (itemsOptions && itemsOptions.length > 0) {
        open({
          position: menuPosition,
          items: itemsOptions,
          targetElement,
          context,
        });
        selectHeaderCell();
      } else if (onHeaderContextMenuDropDown.onOpen) {
        // Async-режим: открываем даже при пустых items, потребитель грузит сам
        open({
          position: menuPosition,
          asyncParams: { type: 'header', params },
          targetElement,
          context,
        });
        onHeaderContextMenuDropDown.onOpen(params);
        selectHeaderCell();
      }
    },
    [
      getClosestColumn,
      onHeaderContextMenu,
      onHeaderContextMenuDropDown,
      open,
      getRowIdxAndIdxForHeaderCell,
      getCountRowsHeader,
      refTableX,
    ],
  );

  const openCellContextMenu = useCallback(
    (args: CellClickArgs<RowType, SummaryRowType>, event: CellMouseEvent) => {
      if (onCellContextMenu) onCellContextMenu(args, event);
      if (!onCellContextMenuDropDown) return;
      event.preventDefault();

      const tableContainer = event.currentTarget.closest(
        `.${tableClassNames.table}`,
      );

      const params = { row: args.row, column: args.column };
      const itemsOptions = onCellContextMenuDropDown.getDropDownItems(params);

      const menuPosition = {
        x: event.clientX - (tableContainer?.getBoundingClientRect().left || 0),
        y: event.clientY - (tableContainer?.getBoundingClientRect().top || 0),
      };
      const context = {
        type: 'cell' as const,
        data: {
          cell: {
            row: args.row,
            column: args.column,
            selectCell: args.selectCell,
          },
        },
      };

      if (itemsOptions && itemsOptions.length > 0) {
        open({
          position: menuPosition,
          items: itemsOptions,
          targetElement: event.currentTarget as HTMLElement,
          context,
        });
      } else if (onCellContextMenuDropDown.onOpen) {
        // Async-режим: открываем даже при пустых items, потребитель грузит сам
        open({
          position: menuPosition,
          asyncParams: { type: 'cell', params },
          targetElement: event.currentTarget as HTMLElement,
          context,
        });
        onCellContextMenuDropDown.onOpen(params);
      }
    },
    [onCellContextMenu, onCellContextMenuDropDown, open],
  );

  // Пропсы Dropdown из конфига контекстного меню (всё кроме служебных полей),
  // чтобы beforeList/afterList/renderItem и т.п. доходили до Dropdown и были
  // реактивны — нужно для async-подгрузки (скелетоны, состояние ошибки).
  const dropdownProps = useMemo(() => {
    const source = onCellContextMenuDropDown ?? onHeaderContextMenuDropDown;
    if (!source) return {};
    const {
      type: _type,
      getDropDownItems: _getItems,
      onItemSelect: _onSelect,
      onOpen: _onOpen,
      ...rest
    } = source;
    return rest;
  }, [onCellContextMenuDropDown, onHeaderContextMenuDropDown]);

  // items в async-режиме перечитываются реактивно из getDropDownItems (по
  // сохранённым asyncParams) на каждый рендер, пока меню открыто; в синхронном
  // режиме — снапшот из стейта.
  const items = useMemo<DropdownProps['items'] | null>(() => {
    if (!state.isOpen) return null;
    const pending = state.asyncParams;
    if (!pending) return state.items;
    // Тег header/cell сужает тип params — getDropDownItems вызываем без каста.
    if (pending.type === 'header') {
      return (
        onHeaderContextMenuDropDown?.getDropDownItems(pending.params) ?? null
      );
    }
    return onCellContextMenuDropDown?.getDropDownItems(pending.params) ?? null;
  }, [state, onHeaderContextMenuDropDown, onCellContextMenuDropDown]);

  return useMemo(
    () => ({
      ...state,
      ...dropdownProps,
      items,
      open,
      close,
      enableHeaderContextMenu:
        !!onHeaderContextMenu || !!onHeaderContextMenuDropDown,
      enableCellContextMenu: !!onCellContextMenu || !!onCellContextMenuDropDown,
      openHeaderContextMenu,
      openCellContextMenu,
      getClosestColumn,
      onItemSelect: (
        item: ContextMenuDropdownItem,
        event?: React.SyntheticEvent,
      ) => {
        // Если контекст меню не определен (не должно происходить в нормальной работе),
        // закрываем меню и выходим
        if (!state.context) {
          close();
          return;
        }

        // Обработка выбора пункта меню для заголовка таблицы (header)
        if (state.context.type === 'header') {
          if (state.context.data.header) {
            // Вызываем пользовательский обработчик для меню заголовка,
            // передавая выбранный пункт, данные заголовка и событие
            onHeaderContextMenuDropDown?.onItemSelect?.(
              item,
              state.context.data.header,
              event,
            );
            return;
          }
        }

        // Обработка выбора пункта меню для ячейки таблицы (cell)
        if (state.context.data.cell) {
          // Вызываем пользовательский обработчик для меню ячейки,
          // передавая выбранный пункт, данные ячейки и событие
          onCellContextMenuDropDown?.onItemSelect?.(
            item,
            state.context.data.cell,
            event,
          );
        }
      },
    }),
    [
      state,
      dropdownProps,
      items,
      open,
      close,
      onHeaderContextMenu,
      onHeaderContextMenuDropDown,
      onCellContextMenu,
      onCellContextMenuDropDown,
      openHeaderContextMenu,
      openCellContextMenu,
      getClosestColumn,
    ],
  );
};
