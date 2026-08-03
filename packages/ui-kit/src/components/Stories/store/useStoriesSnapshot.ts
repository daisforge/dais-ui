import { useSyncExternalStore } from 'react';

import { StoriesSnapshot, StoriesStore } from './createStoriesStore';

/**
 * Подписка на стор через нативный `useSyncExternalStore`. Возвращает весь
 * снимок целиком — ссылка стабильна между изменениями, поэтому лишних
 * ре-рендеров нет: компонент перерисуется только когда что-то реально поменялось.
 */
export const useStoriesSnapshot = (store: StoriesStore): StoriesSnapshot =>
  useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
