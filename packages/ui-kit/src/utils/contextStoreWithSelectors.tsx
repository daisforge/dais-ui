import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

export function createStore<Store>(initialState: Store) {
  function useStoreData(): {
    get: () => Store;
    set: (value: Partial<Store>) => void;
    subscribe: (callback: () => void) => () => void;
  } {
    const store = useRef(initialState);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => callback());
    }, []);

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return {
      get,
      set,
      subscribe
    };
  }

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<UseStoreDataReturnType | null>(null);

  function Provider({ children }: { children: React.ReactNode }) {
    return (
      <StoreContext.Provider value={useStoreData()}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput
  ): [SelectorOutput, (value: Partial<Store>) => void] {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error('Store not found');
    }

    const [state, setState] = useState(store.get());

    useEffect(() => {
      const unsubscribe = store.subscribe(() => setState(store.get()));
      return unsubscribe;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [selector(state), store.set];
  }

  // версия для react 18+
  // function useStore2() {
  // 	const store = useContext(StoreContext);
  // 	if (!store) {
  // 		throw new Error("Store not found");
  // 	}
  // 	function useSelector<SelectorOutput>(
  // 		selector: (store: Store) => SelectorOutput
  // 	) {
  // 		if (!store) {
  // 			throw new Error("Store not found");
  // 		}
  // 		return useSyncExternalStore(
  // 			store.subscribe,
  // 			() => selector(store.get()),
  // 			() => selector(initialState)
  // 		);
  // 	}
  // 	const dispatch = store.set;
  // 	return { useSelector, dispatch };
  // }

  function useDispatch(): (value: Partial<Store>) => void {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error('Store not found');
    }
    const dispatch = store.set;
    return dispatch;
  }

  function useSelector<SelectorOutput>(
    selector: (store: Store) => SelectorOutput
  ): SelectorOutput {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error('Store not found');
    }

    const [state, setState] = useState(store.get());

    useEffect(() => {
      const unsubscribe = store.subscribe(() => setState(store.get()));
      return unsubscribe;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return selector(state);
  }

  return {
    Provider,
    useStore,
    useSelector,
    useDispatch
  };
}
