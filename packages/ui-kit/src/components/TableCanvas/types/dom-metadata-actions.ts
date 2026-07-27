/**
 * Константы действий для `DomMetadata.onClick` — второй аргумент `detail.action`.
 *
 * Используются для идентификации типа взаимодействия в обработчике аналитики.
 *
 * @example
 * domMetadata: {
 *   onClick: (e, detail) => {
 *     if (detail?.action === DOM_METADATA_ACTIONS.TOGGLE_GROUP) {
 *       analytics.track('grouping', { columnKey: detail.columnKey });
 *     }
 *   }
 * }
 */
export const DOM_METADATA_ACTIONS = {
  /** Включение/выключение группировки по столбцу. detail.columnKey — ключ столбца */
  TOGGLE_GROUP: 'toggle-group',
  /** Сброс всех группировок */
  RESET_GROUPS: 'reset-groups',
  /** Выбор пункта в кастомном onItemSelect группировки. detail.columnKey — ключ */
  CUSTOM_ITEM_SELECT: 'custom-item-select',
  /** Переключение размера строки. detail.size — новый размер ('small' | 'medium' | 'big') */
  CHANGE_ROW_SIZE: 'change-row-size',
  /** Клик по табу сайдбара (шестерёнка и др.). detail.tabId — id таба */
  TOGGLE_SIDEBAR_TAB: 'toggle-sidebar-tab',
  /** Закрытие сайдбара (крестик) */
  CLOSE_SIDEBAR: 'close-sidebar',
  /** Закрепление столбца. detail.columnKey — ключ столбца */
  PIN_COLUMN: 'pin-column',
  /** Открепление столбца. detail.columnKey — ключ столбца */
  UNPIN_COLUMN: 'unpin-column',
  /** Скрытие столбца. detail.columnKey — ключ столбца */
  HIDE_COLUMN: 'hide-column',
  /** Показ столбца. detail.columnKey — ключ столбца */
  SHOW_COLUMN: 'show-column'
} as const;

export type DomMetadataAction =
  (typeof DOM_METADATA_ACTIONS)[keyof typeof DOM_METADATA_ACTIONS];
