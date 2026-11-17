import { HTMLAttributes } from 'react';

export type PageLoaderProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'title' | 'children'
> & {
  /** Заголовок загрузки. @default 'Загрузка страницы' */
  title?: string;
  /**
   * Описание загрузки. Передайте null или пустую строку, чтобы скрыть описание.
   * @default 'Данные обрабатываются, обычно это занимает не более 10 секунд'
   */
  subtitle?: string | null;
};
