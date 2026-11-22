import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

// Список колонок с dnd и виртуализацией в тесте не нужен: достаточно кнопки,
// которая скрывает колонку «b» через тот же сеттер, что и реальный свитч.
vi.mock('../ColumnsList', () => ({
  ColumnsList: ({
    setHiddenCols,
  }: {
    setHiddenCols: React.Dispatch<React.SetStateAction<string[]>>;
  }) => (
    <button
      type="button"
      onClick={() => setHiddenCols((prev) => [...prev, 'b'])}
    >
      скрыть b
    </button>
  ),
}));

// eslint-disable-next-line import/first
import { ColumnsControlInner } from '../ColumnsControlInner';
// eslint-disable-next-line import/first
import { ColumnsControlConfig } from '../types';

afterEach(() => cleanup());

const columnConfig = [
  { key: 'a', name: 'A' },
  { key: 'b', name: 'B' },
  { key: 'c', name: 'C' },
];

/**
 * Обёртка с настоящим состоянием таблицы: так проверяется весь путь
 * «действие в панели → состояние таблицы → onConfirm».
 */
const Harness = ({ config }: { config: ColumnsControlConfig }) => {
  const [columnsOrder, setColumnsOrder] = useState(['a', 'b', 'c']);
  const [pinnedCols, setPinnedCols] = useState<string[]>([]);
  const [hiddenCols, setHiddenCols] = useState<string[]>([]);

  return (
    <>
      <div data-testid="table-hidden">{hiddenCols.join(',')}</div>
      <ColumnsControlInner
        opened
        onClose={() => {}}
        columnsOrder={columnsOrder}
        getDefaultColumnsOrder={() => ['a', 'b', 'c']}
        setColumnsOrder={setColumnsOrder}
        pinnedCols={pinnedCols}
        setPinnedCols={setPinnedCols}
        hiddenCols={hiddenCols}
        setHiddenCols={setHiddenCols}
        columnConfig={columnConfig}
        columnsControlConfig={config}
        colsWithKeyTextMap={new Map()}
        keyText="text"
        tableConfigKeyTextBoolean={false}
      />
    </>
  );
};

const baseConfig: ColumnsControlConfig = {
  enable: true,
  hiding: true,
  pinning: true,
  reorderingAside: true,
};

describe('ColumnsControlInner: режим применения', () => {
  it('в режиме confirm изменение попадает в таблицу только по кнопке «Применить»', () => {
    const onConfirm = vi.fn();
    render(<Harness config={{ ...baseConfig, onConfirm }} />);

    fireEvent.click(screen.getByText('скрыть b'));
    expect(screen.getByTestId('table-hidden').textContent).toBe('');
    expect(onConfirm).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText('Применить'));
    expect(screen.getByTestId('table-hidden').textContent).toBe('b');
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onConfirm.mock.calls[0][0]).toMatchObject({
      hidden: ['b'],
      changed: { hidden: 'hidden' },
    });
  });

  it('в режиме instant кнопок нет, а изменение сразу уходит в таблицу и в onConfirm', () => {
    const onConfirm = vi.fn();
    render(
      <Harness config={{ ...baseConfig, applyMode: 'instant', onConfirm }} />,
    );

    expect(screen.queryByText('Применить')).toBeNull();
    expect(screen.queryByText('Отменить')).toBeNull();

    fireEvent.click(screen.getByText('скрыть b'));
    expect(screen.getByTestId('table-hidden').textContent).toBe('b');
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onConfirm.mock.calls[0][0]).toEqual({
      order: ['a', 'b', 'c'],
      pinned: [],
      hidden: ['b'],
      changed: { hidden: 'hidden' },
    });
  });

  it('в режиме instant без onConfirm изменение всё равно применяется', () => {
    render(<Harness config={{ ...baseConfig, applyMode: 'instant' }} />);

    fireEvent.click(screen.getByText('скрыть b'));
    expect(screen.getByTestId('table-hidden').textContent).toBe('b');
  });
});
