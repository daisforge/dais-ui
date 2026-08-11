import { createContext, ReactNode, useContext } from 'react';

import {
  StoriesArrows,
  StoriesController,
  StoriesGroupMeta,
  StoriesGroupTransition,
  StoriesMode,
  StoryErrorContext,
} from '../Stories.types';
import { StoriesStore } from './createStoriesStore';

export interface StoriesContextValue {
  store: StoriesStore;
  controller: StoriesController;
  /** Нормализованные данные всех групп (для вьюера и расчёта длительностей). */
  groups: StoriesGroupMeta[];
  /** Дефолтная длительность сегмента, мс. */
  defaultDuration: number;
  /** Порог удержания указателя для паузы, мс. */
  pauseHoldDelay: number;
  /** Доля ширины баннера слева под переход к предыдущему сегменту. */
  tapPrevZone: number;
  /** Предзагрузить ассеты группы целиком + первый ассет следующей (вызывает вьюер при открытии). */
  preloadGroup: (index: number) => void;
  /** Предзагружать первый ассет группы при наведении на её триггер. */
  preloadOnHover: boolean;
  /** Искусственная задержка перед показом ассета, мс (демо/тесты). */
  loadingDelay: number;
  overlay: boolean;
  overlayColor: string;
  zIndex: number;
  groupTransition: StoriesGroupTransition;
  /** Режим видимости стрелок навигации. */
  arrows: StoriesArrows;
  /** Прятать недоступную по направлению стрелку вместо disabled-состояния. */
  hideDisabledArrows: boolean;
  /** Явный режим темы; если не задан — читается из useActiveTheme. */
  mode?: StoriesMode;
  /** Колбэк ошибки загрузки ассета. */
  onError?: (ctx: StoryErrorContext) => void;
  /** Кастомный error-state при ошибке загрузки ассета. */
  renderError?: (ctx: StoryErrorContext) => ReactNode;
}

const StoriesContext = createContext<StoriesContextValue | null>(null);

export const StoriesProvider = StoriesContext.Provider;

export const useStoriesContext = (): StoriesContextValue => {
  const value = useContext(StoriesContext);
  if (!value) {
    throw new Error(
      'Компоненты Stories должны использоваться внутри <Stories>.',
    );
  }
  return value;
};
