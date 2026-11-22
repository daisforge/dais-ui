import { describe, expect, it } from 'vitest';

import { KEY_GROUPED_COL } from '../../feature-rows-grouping';
import {
  getOwnRenderCellByKey,
  getSubRowHasOwnRenderCell,
} from '../getOwnRenderCellByKey';

const renderCell = () => null;

describe('getOwnRenderCellByKey', () => {
  it('признак по настройкам колонок, а не по renderCell после группировки', () => {
    const byKey = getOwnRenderCellByKey(
      [{ key: 'name' }, { key: 'custom', renderCell }],
      undefined,
    );
    expect(byKey.get('name')).toBe(false);
    expect(byKey.get('custom')).toBe(true);
  });

  it('колонка группировки: по renderCell из groupedColumnProps', () => {
    expect(getOwnRenderCellByKey([], undefined).get(KEY_GROUPED_COL)).toBe(
      false,
    );
    expect(getOwnRenderCellByKey([], renderCell).get(KEY_GROUPED_COL)).toBe(
      true,
    );
  });

  it('служебных колонок нет в настройках: признака нет', () => {
    expect(
      getOwnRenderCellByKey([{ key: 'name' }], undefined).get('_checkbox'),
    ).toBe(undefined);
  });
});

describe('getSubRowHasOwnRenderCell', () => {
  const ownRenderCellByKey = getOwnRenderCellByKey(
    [{ key: 'name' }, { key: 'custom', renderCell }],
    undefined,
  );

  it('без группировки: по renderSubRowCell колонки', () => {
    const base = { columnsRegrouped: false, ownRenderCellByKey, key: 'name' };
    expect(
      getSubRowHasOwnRenderCell({ ...base, renderSubRowCell: renderCell }),
    ).toBe(true);
    expect(
      getSubRowHasOwnRenderCell({ ...base, renderSubRowCell: undefined }),
    ).toBe(false);
  });

  it('при группировке её renderSubRowCell не в счёт, признак по настройкам', () => {
    const base = {
      columnsRegrouped: true,
      ownRenderCellByKey,
      renderSubRowCell: renderCell,
    };
    expect(getSubRowHasOwnRenderCell({ ...base, key: 'name' })).toBe(false);
    expect(getSubRowHasOwnRenderCell({ ...base, key: 'custom' })).toBe(true);
    expect(getSubRowHasOwnRenderCell({ ...base, key: '_checkbox' })).toBe(
      false,
    );
  });
});
