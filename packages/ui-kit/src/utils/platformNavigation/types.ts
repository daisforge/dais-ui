/**
 * Контракт навигации, передаваемый платформой микрофронтам.
 */
export interface PlatformNavigation {
  /**
   * Базовый путь платформы, например / или /pl/static-res/finportal_root/.
   */
  readonly baseUrl: string;

  /**
   * Выполняет переход через Single-SPA, не изменяя переданный URL.
   * @param url — адрес перехода; baseUrl автоматически не добавляется.
   */
  navigateToUrl(url: string): void;

  /**
   * Добавляет baseUrl к пути и выполняет переход через Single-SPA.
   * @param path — путь от корня платформы без baseUrl, например /services/tasks.
   */
  navigateToPlatformUrl(path: string): void;

  /**
   * Переходит на главную платформы без сохранения query-параметров и hash.
   */
  navigateToHome(): void;
}
