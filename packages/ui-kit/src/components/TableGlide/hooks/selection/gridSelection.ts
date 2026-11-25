import {
  CompactSelection,
  type GridSelection,
} from '@daisforge/glide-data-grid';

export const EMPTY_SELECTION: GridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: undefined,
};

/** Одно и то же выделение по содержимому: потребитель мог положить в state копию объекта */
export const sameSelection = (a: GridSelection, b: GridSelection): boolean => {
  if (a === b) return true;
  if (!a.rows.equals(b.rows) || !a.columns.equals(b.columns)) return false;
  const ca = a.current;
  const cb = b.current;
  if (ca === undefined || cb === undefined) return ca === cb;
  return (
    ca.cell[0] === cb.cell[0] &&
    ca.cell[1] === cb.cell[1] &&
    ca.range.x === cb.range.x &&
    ca.range.y === cb.range.y &&
    ca.range.width === cb.range.width &&
    ca.range.height === cb.range.height &&
    ca.rangeStack.length === cb.rangeStack.length &&
    ca.rangeStack.every((r, i) => {
      const o = cb.rangeStack[i];
      return (
        o !== undefined &&
        r.x === o.x &&
        r.y === o.y &&
        r.width === o.width &&
        r.height === o.height
      );
    })
  );
};
