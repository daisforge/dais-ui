export type TGetValue<
  O,
  K extends string
> = K extends `${infer Key}.${infer Rest}`
  ? Key extends keyof O
    ? TGetValue<O[Key], Rest>
    : undefined
  : K extends keyof O
  ? O[K]
  : undefined;

// Этот тип рекурсивно разбивает строку пути на ключи и проверяет наличие каждого ключа в объекте. Если ключ не существует, возвращает undefined

export const getValue = <O extends Record<string, unknown>, K extends string>(
  obj: O,
  path: K
): TGetValue<O, K> => {
  const keys = path.split('.') as Array<keyof O>;
  let currentObj: unknown = obj;

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    if (
      typeof currentObj === 'object' &&
      currentObj !== null &&
      key in (currentObj as Record<string, unknown>)
    ) {
      currentObj = (currentObj as Record<string, unknown>)[key as string];
    } else {
      return undefined as TGetValue<O, K>;
    }
  }

  return currentObj as TGetValue<O, K>;
};
