import { Q_PARAMS } from './constants';

/**
 * виды query-параметров
 */
export type ContractQueryParams = {
  /**
   * Значение ключа колонки, по которому выбрана сортировка.
   *
   * Пример: '-columnKey' or 'column2Key'. Минус впереди значит DESC.
   */
  [Q_PARAMS.sort]?: string | null;
  /**
   * Значение текущей выбранной страницы.
   * `Тип = number as string`.
   *
   * Пример: '2' или '3'.
   */
  [Q_PARAMS.page]?: string | null;
  /**
   * Значение выбранного количества строк на каждой странице.
   * `Тип = number as string`.
   *
   * Пример: '25' или '50'.
   */
  [Q_PARAMS.pageSize]?: string | null;
  /**
   * Значение введенного пользователем текста в поле поиска.
   *
   * Пример: 'Блок Технологии' или '15'.
   */
  [Q_PARAMS.q]?: string | null;
};
export type ParamKey = keyof typeof Q_PARAMS;

export type PaginationParams = {
  [Q_PARAMS.page]?: number;
  [Q_PARAMS.pageSize]?: number;
};
