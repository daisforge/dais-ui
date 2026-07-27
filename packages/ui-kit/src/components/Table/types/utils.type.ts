// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ObjectForExtending = Record<string | number, any>;

export type Key = string | number | bigint;

export type Maybe<T> = T | undefined | null;

export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

export type RequiredOnly<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type DataAttributes = {
  [K in `data-${string}`]?: string;
};

export type ActiveTheme = 'light' | 'dark' | 'highContrastLight';
