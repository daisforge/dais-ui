/**
 * Режим разработки. Сборщик приложения подставляет вместо
 * `process.env.NODE_ENV` строку, поэтому обращение записано именно так.
 * Если сборщик его не подставил и `process` нет, считаем, что это не разработка.
 */
export function isDevMode(): boolean {
  try {
    return (process.env as { NODE_ENV?: string }).NODE_ENV !== 'production';
  } catch {
    return false;
  }
}
