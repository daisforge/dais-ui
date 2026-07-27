import { DomMetadata } from '../types/additional.type';

/**
 * Типы конфигурации.
 */
export type KeyText = 'key' | 'text' | 'keyText' | 'textKey';
export type KeyTextConfig = {
  showInControl?: boolean;
  defaultActiveOption?: KeyText;
  controlBlock: {
    /**
     * Метки для автоматизированного тестирования и аналитики
     * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
     */
    domMetadata?: DomMetadata;
  };
  sidebar: {
    /**
     * Метки для автоматизированного тестирования и аналитики
     * Добавляет data-атрибуты и CSS-классы к элементам RightSidebar
     */
    domMetadata?: DomMetadata;
  };
};

export type KeyTextObj = { keyKey: string; textKey: string };
export type KeyTextMap = Map<string, KeyTextObj>;
