import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import type { KeyTextMap } from '../../feature-key-text/types';
import { useColumnsControl } from '../useColumnsControl';
import { useHiddenColumnsIndicator } from '../useHiddenColumnsIndicator';

const pair = { keyKey: 'idKey', textKey: 'id' };
const pairMap: KeyTextMap = new Map([
  [pair.keyKey, pair],
  [pair.textKey, pair],
]);

/** Скрытие таблицы и индикатор вместе, как в TableCanvas. */
const renderIndicator = (order: string[], withHiddenState: boolean) =>
  renderHook(() => {
    const hiddenState = useState(['id']);
    const control = useColumnsControl({
      tableConfigColumnsControl: withHiddenState
        ? { enable: true, hiddenState }
        : { enable: true, hiddenDefault: ['id'] },
      tableConfigKeyTextBoolean: true,
      colsWithKeyTextMap: pairMap,
      columnsGroupingIsActive: false,
    });
    const hiddenSet = new Set(control.hiddenCols);
    const indicator = useHiddenColumnsIndicator({
      enabled: true,
      fullColumnsOrder: order,
      hiddenCols: control.hiddenCols,
      pinnedCols: [],
      setHiddenCols: control.setHiddenCols,
      renderColKeys: order.filter((key) => !hiddenSet.has(key)),
      groupPathByKey: new Map(),
      colsWithKeyTextMap: pairMap,
      tableConfigKeyTextBoolean: true,
    });
    return { control, indicator };
  });

// Порядок столбцов в каждом режиме пары: в «Ключ» и «Текст» на экране один
// столбец из двух.
describe.each([
  ['Ключ и текст', ['a', 'idKey', 'id', 'b']],
  ['Текст', ['a', 'id', 'b']],
  ['Ключ', ['a', 'idKey', 'b']],
])('useHiddenColumnsIndicator: пара key/text в режиме «%s»', (_mode, order) => {
  it.each([
    ['внутреннее состояние', false],
    ['hiddenState', true],
  ])(
    'двойной клик по индикатору раскрывает пару, %s',
    (_state, withHiddenState) => {
      const { result } = renderIndicator(order, withHiddenState);
      expect(result.current.control.hiddenCols).toEqual(['idKey', 'id']);

      act(() => result.current.indicator.onHiddenColumnsIndicatorClicked(1));
      expect(result.current.control.hiddenCols).toEqual([]);
    },
  );
});
