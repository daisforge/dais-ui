export function getNum(value: string | number | null) {
  const n = Number(value);
  // '' and null
  if (typeof value !== 'number' && n === 0) {
    return null;
  }
  if (Number.isNaN(n)) {
    return null;
  }
  return n;
}
