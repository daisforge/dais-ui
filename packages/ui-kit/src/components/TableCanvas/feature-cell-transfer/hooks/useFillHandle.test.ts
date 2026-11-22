import { act, renderHook } from '@testing-library/react';
import { expect, it } from 'vitest';

import { EMPTY_SELECTION } from '../../../TableGlide/hooks/selection/useNativeGridSelection';
import { useFillHandle } from './useFillHandle';

it('возвращает маркер после загрузки без повторного выбора ячейки', () => {
  const rows = [{ id: 1 }];
  const hook = renderHook(
    ({ loading }) =>
      useFillHandle({
        editModeEnabled: true,
        flattenedRows: rows,
        columns: [{ key: 'value', name: 'Значение', editable: !loading }],
        cellTransferConfig: { enabled: !loading },
      }),
    { initialProps: { loading: true } },
  );
  act(() =>
    hook.result.current.onSelectionChangeForFill({
      ...EMPTY_SELECTION,
      current: {
        cell: [0, 0],
        range: { x: 0, y: 0, width: 1, height: 1 },
        rangeStack: [],
      },
    }),
  );
  expect(hook.result.current.fillHandleProps).toBeUndefined();
  hook.rerender({ loading: false });
  expect(hook.result.current.fillHandleProps?.fillHandle).toBe(true);
});
