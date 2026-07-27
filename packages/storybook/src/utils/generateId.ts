/** Функция для генерации ID */
export function generateId() {
  if (typeof window !== 'undefined' && !window.crypto.randomUUID) {
    const getCustomRandomUUID = () =>
      'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const r = crypto.getRandomValues(new Uint8Array(1))[0]! % 16;
        // eslint-disable-next-line no-bitwise
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    return getCustomRandomUUID();
  }

  return crypto.randomUUID();
}
