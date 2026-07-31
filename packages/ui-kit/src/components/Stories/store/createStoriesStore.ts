/**
 * Внутренний снимок состояния вьюера. `direction` нужен только для анимации
 * перехода между группами. Прогресс сегмента здесь НЕ живёт — он тикает
 * императивно (rAF + ref), чтобы не перерисовывать дерево на каждый кадр.
 */
export interface StoriesSnapshot {
  isOpen: boolean;
  groupIndex: number;
  slideIndex: number;
  isPlaying: boolean;
  direction: 'next' | 'prev';
}

export interface StoriesStore {
  getSnapshot: () => StoriesSnapshot;
  subscribe: (listener: () => void) => () => void;
  setState: (patch: Partial<StoriesSnapshot>) => void;
}

const INITIAL: StoriesSnapshot = {
  isOpen: false,
  groupIndex: 0,
  slideIndex: 0,
  isPlaying: true,
  direction: 'next'
};

/**
 * Минимальный стор без внешних зависимостей: get/subscribe/set.
 * `getSnapshot` возвращает СТАБИЛЬНУЮ ссылку между изменениями — можно
 * безопасно скармливать в `useSyncExternalStore` целиком.
 */
export const createStoriesStore = (
  initial?: Partial<StoriesSnapshot>
): StoriesStore => {
  let state: StoriesSnapshot = { ...INITIAL, ...initial };
  const listeners = new Set<() => void>();

  return {
    getSnapshot: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    setState: (patch) => {
      const keys = Object.keys(patch) as (keyof StoriesSnapshot)[];
      const changed = keys.some((key) => state[key] !== patch[key]);
      if (!changed) return;

      state = { ...state, ...patch };
      listeners.forEach((listener) => listener());
    }
  };
};
