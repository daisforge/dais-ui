export function removeAllFromArray<T>(
  arr: T[],
  isDeleteItem: (item: T) => boolean,
) {
  let i = 0;
  while (i < arr.length) {
    if (isDeleteItem(arr[i] as T)) {
      arr.splice(i, 1);
    } else {
      i += 1;
    }
  }
  return arr;
}
export function replaceAllFromArray<T>(
  arr: T[],
  isDeleteItem: (item: T) => boolean,
  add: T[],
) {
  let i = 0;
  while (i < arr.length) {
    if (isDeleteItem(arr[i] as T)) {
      arr.splice(i, 1, ...add);
    } else {
      i += 1;
    }
  }
  return arr;
}

export function swapItemsByIndex<T>(arr: T[], i1: number, i2: number) {
  const k1 = arr[i1];
  const k2 = arr[i2];

  if (!k1 || !k2) return;

  arr[i2] = k1;
  arr[i1] = k2;
}
