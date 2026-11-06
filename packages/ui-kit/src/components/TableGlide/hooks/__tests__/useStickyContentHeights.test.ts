import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useStickyContentHeights } from '../useStickyContentHeights';

const rows = [{ id: 1 }];
const columns = [{ id: 'a' }];

const renderHeights = () =>
  renderHook(
    (props: { rows: unknown; columns: unknown }) =>
      useStickyContentHeights(props.rows, props.columns),
    { initialProps: { rows, columns } as { rows: unknown; columns: unknown } },
  );

describe('useStickyContentHeights', () => {
  it('те же строки и колонки: высоты сохраняются', () => {
    const { result, rerender } = renderHeights();
    result.current.current.set('a:0', 40);

    rerender({ rows, columns });

    expect(result.current.current.get('a:0')).toBe(40);
  });

  it('новые строки: старые высоты забыты', () => {
    const { result, rerender } = renderHeights();
    result.current.current.set('a:0', 40);

    rerender({ rows: [...rows], columns });

    expect(result.current.current.size).toBe(0);
  });

  it('новые колонки: старые высоты забыты', () => {
    const { result, rerender } = renderHeights();
    result.current.current.set('a:0', 40);

    rerender({ rows, columns: [...columns] });

    expect(result.current.current.size).toBe(0);
  });
});
