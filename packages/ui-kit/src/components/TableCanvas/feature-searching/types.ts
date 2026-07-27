import { type AutocompleteProps } from '@ui-kit/components/Autocomplete/Autocomplete.types';
import { TextField } from '@ui-kit/components/TextField';
import { IconProps } from '@ui-kit/icons';
import { ComponentProps } from 'react';

import { DomMetadata } from '../types/additional.type';

/**
 * Конфигурация автокомплита для поиска.
 * Позволяет показывать подсказки (например, историю поиска) при взаимодействии с полем поиска.
 */
export type SearchAutocompleteConfig = Pick<
  AutocompleteProps,
  | 'suggestions'
  | 'onSuggestionSelect'
  | 'threshold'
  | 'renderList'
  | 'renderListEnd'
  | 'beforeList'
  | 'listMaxHeight'
  | 'listWidth'
  | 'portal'
  | 'hasDivider'
  | 'beforeList'
  | 'afterList'
  | 'virtual'
  | 'hasDivider'
  | 'onScroll'
  | 'zIndex'
  | 'filter'
  | 'renderItem'
>;

type TProps = Omit<
  ComponentProps<typeof TextField>,
  'value' | 'onChange' | 'onKeyDown' | 'contentLeft' | 'contentRight' | 'clear'
>;

export interface SearchBlockProps extends TProps {
  isVisible?: boolean;
  iconSize?: IconProps['size'];
  $isFullHeight?: boolean;
}

/**
 * Пропсы для управления поиском в компоненте
 */
export type SearchingProps = {
  /**
   * Активация функционала поиска (обязательный параметр)
   */
  enabled: boolean;

  /**
   * Если true - поиск НЕ будет работать на фронте (ручное управление)
   * Полезно когда поисковая логика полностью управляется на бэкенде
   */
  manualSearching?: boolean;

  /**
   * Начальное значение поискового запроса
   */
  defaultSearchQuery?: string;

  /**
   * Видимость UI блока поиска
   */
  showSearchBlock?: boolean;

  /**
   * Состояние и сеттер для контролируемого режима
   * [текущее значение, функция установки значения]
   */
  searchQueryState?: [string, React.Dispatch<React.SetStateAction<string>>];

  /**
   * Обработчик изменения с debounce
   * Вызывается с задержкой после окончания ввода
   * @param value - текущее значение поискового запроса
   */
  onDebouncedChange?: (value: string) => void;

  /**
   * Мгновенный обработчик изменений
   * Вызывается при каждом изменении input
   * @param value - текущее значение поискового запроса
   */
  onChange?: (value: string) => void;

  /**
   * Задержка для debounce (в миллисекундах)
   * @default 300
   */
  debounceDelay?: number;

  /**
   * Активация debounce механизма
   * @default true
   */
  isDebounceActive?: boolean;

  /**
   * Дополнительные классы для контейнера поиска
   */
  searchClasses?: string;

  /**
   * Placeholder для поискового input
   * @default "Поиск"
   */
  placeholder?: string;

  /**
   * DOM метаданные для аналитики и онбординга
   */
  domMetadata?: DomMetadata;

  /**
   * Режим запуска поиска
   * - true: поиск запускается автоматически при вводе текста (по умолчанию)
   * - false: поиск запускается только по клику на иконку поиска или нажатию Enter
   */
  searchOnType?: boolean;

  /**
   * Конфигурация автокомплита для поиска.
   * При передаче поле поиска заменяется на Autocomplete с подсказками.
   */
  autocomplete?: SearchAutocompleteConfig;
};
