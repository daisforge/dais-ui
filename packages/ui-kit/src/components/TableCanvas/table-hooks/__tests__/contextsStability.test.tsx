import { renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import { describe, expect, it } from 'vitest';

import { useExpandedRowsContext } from '../../contexts';
import {
  SelectingContextProvider,
  useSelectingRowContext,
} from '../../feature-select-row/selecting-contexts';
import { useSelectRow } from '../../feature-select-row/useSelectRow';
import { usePrepareTableConfig } from '../usePrepareTableConfig';

// Эти объекты входят в контексты ячеек таблицы: новый объект при том же
// содержимом даёт glide новую функцию содержимого ячеек и полную перерисовку.

const noop = () => undefined;

const selectingProps = {
  rows: [{ id: 1 }],
  selectingRowConfig: {
    selectingRowsIsActive: true,
  } as never,
  flattenedRowsArrAndMap: null,
  selectedRows: new Set<number>(),
  setSelectedRows: noop,
  rowKeyGetter: undefined,
  rowsGroupingIsActive: false,
  isRowsGroupingLabelVisible: true,
  setIsRowsGroupingLabelVisible: noop,
  isRowsGroupingCounterVisible: true,
  setIsRowsGroupingCounterVisible: noop,
  isSelectingRowLabelVisible: true,
  setIsSelectingRowLabelVisible: noop,
  isSelectingRowCounterVisible: true,
  setIsSelectingRowCounterVisible: noop,
  controlBlock: { domMetadata: {} },
  sidebar: { domMetadata: {} },
};

// Обёртка renderHook пропсов не получает, поэтому поля провайдера берём из
// переменной и меняем её перед rerender.
let providerProps = selectingProps;

const SelectingWrapper = ({ children }: PropsWithChildren) => (
  <SelectingContextProvider {...providerProps}>
    {children}
  </SelectingContextProvider>
);

describe('стабильность контекстов таблицы между рендерами', () => {
  it('объект раскрытых строк прежний, пока поля прежние', () => {
    const { result, rerender } = renderHook(() => useExpandedRowsContext());
    const first = result.current;
    rerender();
    expect(result.current).toBe(first);
  });

  it('контекст отметки строк прежний при тех же полях и новый при смене поля', () => {
    providerProps = selectingProps;
    const { result, rerender } = renderHook(() => useSelectingRowContext(), {
      wrapper: SelectingWrapper,
    });
    const first = result.current;
    expect(first.rows).toBe(selectingProps.rows);

    providerProps = { ...selectingProps };
    rerender();
    expect(result.current).toBe(first);

    const selectedRows = new Set([1]);
    providerProps = { ...selectingProps, selectedRows };
    rerender();
    expect(result.current).not.toBe(first);
    expect(result.current.selectedRows).toBe(selectedRows);
  });

  it('классы блока управления и боковой панели не пересобираются без смены', () => {
    const tableConfig = {
      selecting: {
        controlBlock: { domMetadata: { className: 'control' } },
        sidebar: { domMetadata: { className: 'sidebar' } },
      },
    } as never;
    const rows = [{ id: 1 }];
    const { result, rerender } = renderHook(() =>
      useSelectRow({ tableConfig, rows }),
    );
    const { controlBlock, sidebar } = result.current;
    rerender();
    expect(result.current.controlBlock).toBe(controlBlock);
    expect(result.current.sidebar).toBe(sidebar);
    expect(controlBlock.domMetadata.className).toBe('control');
  });

  it('подготовленный tableConfig прежний, пока входной прежний', () => {
    const external = { rightSidebarConfig: { enabled: false } } as never;
    const { result, rerender } = renderHook(
      ({ config }: { config: never }) =>
        usePrepareTableConfig({ tableConfigExternal: config }),
      { initialProps: { config: external } },
    );
    const first = result.current.tableConfig;
    expect(first).not.toBe(external);

    rerender({ config: external });
    expect(result.current.tableConfig).toBe(first);

    rerender({ config: { rightSidebarConfig: { enabled: true } } as never });
    expect(result.current.tableConfig).not.toBe(first);
  });
});
