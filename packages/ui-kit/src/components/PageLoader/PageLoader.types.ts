import { HTMLAttributes } from 'react';

export type PageLoaderProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'title' | 'children'
> & {
  /** Заголовок загрузки. @default 'Загрузка страницы' */
  title?: string;
  /** Описание загрузки. Отображается, если передана непустая строка. */
  subtitle?: string;
};
