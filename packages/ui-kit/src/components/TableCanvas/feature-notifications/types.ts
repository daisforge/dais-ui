/**
 * Модуль нотификаций TableCanvas.
 *
 * Стандартизированный канал событий для внешних потребителей: таблица НЕ рисует
 * UI сама, а вызывает `onNotification` — потребитель показывает тост/модалку на
 * своей стороне. Типы событий фиксированы (см. `TableNotificationType` / `code`).
 */

/**
 * Аргумент события `onNotification` — одна нотификация таблицы.
 *
 * Объявлен ПЕРВЫМ намеренно: экстрактор типов для документации
 * (`copy-types-as-string`) ищет объявление через `indexOf`, а имя
 * `TableNotification` является префиксом `TableNotificationType/Level/Code`.
 * Если поставить его после них — в API вместо интерфейса подхватится
 * `TableNotificationType`. Держим интерфейс выше префиксных union-типов.
 */
export interface TableNotification {
  /** Категория: с какой операцией связано событие. */
  type: TableNotificationType;
  /** Серьёзность. */
  level: TableNotificationLevel;
  /** Машинный код причины. */
  code: TableNotificationCode;
  /** Дефолтный текст (RU). Потребитель может показать свой. */
  message: string;
  /** Детали события (напр. кол-во пропущенных ячеек). */
  meta?: Record<string, unknown>;
}

/**
 * Категория события — операция таблицы, с которой оно связано.
 * Серьёзность несёт отдельное поле `level`, поэтому здесь только операция.
 */
export type TableNotificationType = 'copy' | 'paste' | 'fill' | 'pin';

/** Уровень серьёзности — потребитель может фильтровать/раскрашивать по нему. */
export type TableNotificationLevel = 'error' | 'warning' | 'info';

/** Уточняющий машинный код причины (стабильный, для switch на стороне потребителя). */
export type TableNotificationCode =
  | 'multi-range-scattered'
  | 'readonly-abort'
  | 'overflow-abort'
  | 'validation-skipped'
  | 'no-selection';

/**
 * Конфиг модуля нотификаций. Передаётся через `tableConfig.notifications`.
 */
export interface TableNotificationsConfig {
  /** Вызывается на каждое событие таблицы (ошибки copy/paste и т.д.). */
  onNotification: (event: TableNotification) => void;
}
