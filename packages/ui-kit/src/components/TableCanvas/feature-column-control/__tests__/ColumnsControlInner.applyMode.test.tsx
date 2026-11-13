import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React, { useCallback, useState } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

// Список колонок с dnd и виртуализацией в тесте не нужен: достаточно кнопок,
// которые скрывают колонку «b» и пару key/text через тот же сеттер, что и
// реальный свитч.
vi.mock('../ColumnsList', () => ({
  ColumnsList: ({
    setHiddenCols,
  }: {
    setHiddenCols: React.Dispatch<React.SetStateAction<string[]>>;
  }) => (
    <>
      <button
        type="button"
        onClick={() => setHiddenCols((prev) => [...prev, 'b'])}
      >
        скрыть b
      </button>
      <button
        type="button"
        onClick={() => setHiddenCols((prev) => [...prev, 'name_key', 'name'])}
      >
        скрыть пару name
      </button>
    </>
  ),
}));

// eslint-disable-next-line import/first
import type { KeyTextMap } from '../../feature-key-text/types';
// eslint-disable-next-line import/first
import { ColumnsControlInner } from '../ColumnsControlInner';
// eslint-disable-next-line import/first
import { ColumnsControlConfig } from '../types';
// eslint-disable-next-line import/first
import { useColumnsControl } from '../useColumnsControl';

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
const Harness = ({
  config,
  applyHidden,
}: {
  config: ColumnsControlConfig;
  /** Сеттер скрытых решает, что записать, как стор с проверками. */
  applyHidden?: (prev: string[], next: string[]) => string[];
}) => {
  const [columnsOrder, setColumnsOrder] = useState(['a', 'b', 'c']);
  const [pinnedCols, setPinnedCols] = useState<string[]>([]);
  const [hiddenCols, setHiddenColsState] = useState<string[]>([]);
  const setHiddenCols = useCallback<
    React.Dispatch<React.SetStateAction<string[]>>
  >(
    (action) =>
      setHiddenColsState((prev) => {
        const next = typeof action === 'function' ? action(prev) : action;
        return applyHidden ? applyHidden(prev, next) : next;
      }),
    [applyHidden],
  );

  return (
    <>
      <div data-testid="table-hidden">{hiddenCols.join(',')}</div>
      {/* Изменение снаружи панели: так потребитель меняет hiddenState. */}
      <button
        type="button"
        onClick={() => setHiddenCols((prev) => [...prev, 'c'])}
      >
        скрыть c снаружи
      </button>
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

const pair = { keyKey: 'name_key', textKey: 'name' };
const pairMap: KeyTextMap = new Map([
  [pair.keyKey, pair],
  [pair.textKey, pair],
]);

/** Таблица с парой key/text и hiddenState потребителя, как в TableCanvas. */
const PairHarness = ({ config }: { config: ColumnsControlConfig }) => {
  const hiddenState = useState<string[]>([]);
  const { hiddenCols, setHiddenCols } = useColumnsControl({
    tableConfigColumnsControl: { ...config, hiddenState },
    tableConfigKeyTextBoolean: true,
    colsWithKeyTextMap: pairMap,
    columnsGroupingIsActive: false,
  });
  const [columnsOrder, setColumnsOrder] = useState(['a', 'name_key', 'name']);
  const [pinnedCols, setPinnedCols] = useState<string[]>([]);

  return (
    <>
      <div data-testid="state-hidden">{hiddenState[0].join(',')}</div>
      <ColumnsControlInner
        opened
        onClose={() => {}}
        columnsOrder={columnsOrder}
        getDefaultColumnsOrder={() => ['a', 'name_key', 'name']}
        setColumnsOrder={setColumnsOrder}
        pinnedCols={pinnedCols}
        setPinnedCols={setPinnedCols}
        hiddenCols={hiddenCols}
        setHiddenCols={setHiddenCols}
        columnConfig={columnConfig}
        columnsControlConfig={config}
        colsWithKeyTextMap={pairMap}
        keyText="keyText"
        tableConfigKeyTextBoolean
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

  it('в режиме instant изменение снаружи панели не вызывает onConfirm', () => {
    const onConfirm = vi.fn();
    render(
      <Harness config={{ ...baseConfig, applyMode: 'instant', onConfirm }} />,
    );

    fireEvent.click(screen.getByText('скрыть c снаружи'));
    expect(screen.getByTestId('table-hidden').textContent).toBe('c');
    expect(onConfirm).not.toHaveBeenCalled();

    // После внешнего изменения действие в панели по-прежнему доходит до onConfirm.
    fireEvent.click(screen.getByText('скрыть b'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onConfirm.mock.calls[0][0]).toMatchObject({
      hidden: ['c', 'b'],
      changed: { hidden: 'hidden' },
    });
  });

  it('в режиме instant отказ сеттера не даёт ложный onConfirm на следующее внешнее изменение', () => {
    const onConfirm = vi.fn();
    render(
      <Harness
        config={{ ...baseConfig, applyMode: 'instant', onConfirm }}
        applyHidden={(prev, next) => (next.includes('b') ? prev : next)}
      />,
    );

    fireEvent.click(screen.getByText('скрыть b'));
    expect(screen.getByTestId('table-hidden').textContent).toBe('');
    expect(onConfirm).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText('скрыть c снаружи'));
    expect(screen.getByTestId('table-hidden').textContent).toBe('c');
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it('в режиме instant onConfirm не приходит, если сеттер записал не то, что просила панель', () => {
    const onConfirm = vi.fn();
    render(
      <Harness
        config={{ ...baseConfig, applyMode: 'instant', onConfirm }}
        applyHidden={(_prev, next) => next.filter((key) => key !== 'name_key')}
      />,
    );

    fireEvent.click(screen.getByText('скрыть пару name'));
    expect(screen.getByTestId('table-hidden').textContent).toBe('name');
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it('в режиме instant скрытие пары key/text через hiddenState вызывает onConfirm', () => {
    const onConfirm = vi.fn();
    render(
      <PairHarness
        config={{ ...baseConfig, applyMode: 'instant', onConfirm }}
      />,
    );

    fireEvent.click(screen.getByText('скрыть пару name'));
    expect(screen.getByTestId('state-hidden').textContent).toBe('name');
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onConfirm.mock.calls[0][0]).toMatchObject({
      hidden: ['name_key', 'name'],
      changed: { hidden: 'hidden' },
    });
  });

  it('в режиме instant без onConfirm изменение всё равно применяется', () => {
    render(<Harness config={{ ...baseConfig, applyMode: 'instant' }} />);

    fireEvent.click(screen.getByText('скрыть b'));
    expect(screen.getByTestId('table-hidden').textContent).toBe('b');
  });
});
