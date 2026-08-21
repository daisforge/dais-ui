declare module '*.mdx' {
  const value: string;
  export default value;
}

// Типы vite/client не подключены (types в tsconfig.lib.json ограничен),
// поэтому объявляем минимум, который реально используется в коде Storybook.
interface ImportMetaEnv {
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};
