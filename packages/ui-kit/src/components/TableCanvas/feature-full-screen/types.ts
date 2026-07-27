import { DomMetadata } from '../types/additional.type';

export type FullScreenObj = {
  /**
   * @default false
   */
  defaultOpened?: boolean;
  state?: [boolean, (arg: (prev: boolean) => typeof prev) => void];
  /**
   * @default true
   */
  showInControl?: boolean;
  /**
   * @default document.body
   */
  portal?: Element | DocumentFragment | false;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};
export type FullScreen = boolean | FullScreenObj;
