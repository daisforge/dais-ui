import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import type { KeyTextMap } from '../../feature-key-text/types';
import type { ColumnsControlConfig } from '../types';
import { useColumnsControl } from '../useColumnsControl';

const pair = { keyKey: 'name_key', textKey: 'name' };
const keyTextMap: KeyTextMap = new Map([
  [pair.keyKey, pair],
  [pair.textKey, pair],
]);

const renderControl = (config: ColumnsControlConfig, keyText = false) =>
  renderHook(() =>
    useColumnsControl({
      tableConfigColumnsControl: config,
      tableConfigKeyTextBoolean: keyText,
      colsWithKeyTextMap: keyText ? keyTextMap : new Map(),
      columnsGroupingIsActive: false,
    }),
  );

/** Состояние потребителя и таблица в одном хуке, как в реальном использовании. */
const renderWithExternalState = (
  initialHidden: string[],
  config: Omit<ColumnsControlConfig, 'hiddenState'> = { enable: true },
  keyText = false,
) =>
  renderHook(() => {
    const hiddenState = useState(initialHidden);
    const control = useColumnsControl({
      tableConfigColumnsControl: { ...config, hiddenState },
      tableConfigKeyTextBoolean: keyText,
      colsWithKeyTextMap: keyText ? keyTextMap : new Map(),
      columnsGroupingIsActive: false,
    });
    return { hiddenState, control };
  });

describe('useColumnsControl: hiddenState', () => {
  it('без hiddenState работает hiddenDefault и внутреннее состояние', () => {
    const { result } = renderControl({ enable: true, hiddenDefault: ['a'] });
    expect(result.current.hiddenCols).toEqual(['a']);

    act(() => result.current.setHiddenCols((prev) => [...prev, 'b']));
    expect(result.current.hiddenCols).toEqual(['a', 'b']);
  });

  it('с hiddenState значение берётся из него, hiddenDefault не читается', () => {
    const { result } = renderWithExternalState(['b'], {
      enable: true,
      hiddenDefault: ['a'],
    });
    expect(result.current.control.hiddenCols).toEqual(['b']);
  });

  it('без пар key/text сеттер таблицы и есть сеттер потребителя', () => {
    const { result } = renderWithExternalState(['a']);
    expect(result.current.control.setHiddenCols).toBe(
      result.current.hiddenState[1],
    );

    act(() =>
      result.current.control.setHiddenCols((prev) =>
        prev.filter((k) => k !== 'a'),
      ),
    );
    expect(result.current.hiddenState[0]).toEqual([]);
    expect(result.current.control.hiddenCols).toEqual([]);
  });

  it('при hiding: false скрытие выключено, hiddenState не применяется', () => {
    const { result } = renderWithExternalState(['a'], {
      enable: true,
      hiding: false,
    });
    expect(result.current.control.hiddenCols).toEqual([]);
  });

  it('при hiding: false hiddenDefault тоже не применяется', () => {
    const { result } = renderControl({
      enable: true,
      hiding: false,
      hiddenDefault: ['a'],
    });
    expect(result.current.hiddenCols).toEqual([]);
  });

  it('исходный ключ столбца с парой key/text скрывает оба столбца пары', () => {
    const { result } = renderWithExternalState(
      ['name'],
      { enable: true },
      true,
    );
    expect(result.current.control.hiddenCols).toEqual(['name_key', 'name']);
  });

  it('свитч сайдбара показывает столбец, переданный исходным ключом пары', () => {
    const { result } = renderWithExternalState(
      ['name', 'a'],
      { enable: true },
      true,
    );

    // Так свитч в ColumnsList убирает столбец с парой key/text.
    act(() =>
      result.current.control.setHiddenCols((prev) =>
        prev.filter((k) => k !== pair.keyKey && k !== pair.textKey),
      ),
    );
    expect(result.current.control.hiddenCols).toEqual(['a']);
  });

  it('свитч сайдбара пишет в значение только исходный ключ пары', () => {
    const { result } = renderWithExternalState(['a'], { enable: true }, true);

    // Так свитч в ColumnsList скрывает столбец с парой key/text.
    act(() =>
      result.current.control.setHiddenCols((prev) => [
        ...prev,
        pair.keyKey,
        pair.textKey,
      ]),
    );
    expect(result.current.hiddenState[0]).toEqual(['a', 'name']);
    expect(result.current.control.hiddenCols).toEqual([
      'a',
      'name_key',
      'name',
    ]);
  });

  it('потребитель снимает скрытие пары одним исходным ключом', () => {
    const { result } = renderWithExternalState(['a'], { enable: true }, true);

    act(() =>
      result.current.control.setHiddenCols((prev) => [
        ...prev,
        pair.keyKey,
        pair.textKey,
      ]),
    );
    // Как в примере из документации к hiddenState.
    act(() =>
      result.current.hiddenState[1]((prev) =>
        prev.filter((key) => key !== 'name'),
      ),
    );
    expect(result.current.control.hiddenCols).toEqual(['a']);
  });

  it('значение сеттером без функции тоже сводится к исходному ключу', () => {
    const { result } = renderWithExternalState([], { enable: true }, true);

    act(() => result.current.control.setHiddenCols(['name_key', 'name']));
    expect(result.current.hiddenState[0]).toEqual(['name']);
  });

  it('при неизменном значении ссылка на hiddenCols не меняется', () => {
    const { result, rerender } = renderWithExternalState(
      ['name'],
      { enable: true },
      true,
    );
    const before = result.current.control.hiddenCols;
    rerender();
    expect(result.current.control.hiddenCols).toBe(before);
  });
});
