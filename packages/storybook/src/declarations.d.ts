declare module '*.mdx' {
  const value: string;
  export default value;
}

type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};
