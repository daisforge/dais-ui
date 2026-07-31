import {
  Children,
  cloneElement,
  forwardRef,
  ForwardRefExoticComponent,
  isValidElement,
  ReactElement,
  Ref,
  RefAttributes,
  Suspense,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {
  StoriesPreview,
  StoriesPreviewInternalProps,
} from './components/StoriesPreview';
import { StoriesViewerLazy } from './components/StoriesViewer/StoriesViewer.lazy';
import { useAssetPreloader } from './hooks/useAssetPreloader';
import { createStoriesStore, StoriesStore } from './store/createStoriesStore';
import { StoriesProvider, useStoriesContext } from './store/StoriesContext';
import { useStoriesSnapshot } from './store/useStoriesSnapshot';
import { runViewTransition } from './store/viewTransition';
import { STORIES_DEFAULTS, storiesClassNames } from './Stories.constants';
import { StyledStories } from './Stories.styled';
import {
  StoriesController,
  StoriesGroupMeta,
  StoriesProps,
  StoriesRef,
} from './Stories.types';

type StoriesComponent = ForwardRefExoticComponent<
  StoriesProps & RefAttributes<StoriesRef>
> & {
  Preview: typeof StoriesPreview;
};

const isPreviewElement = (
  child: unknown,
): child is ReactElement<StoriesPreviewInternalProps> =>
  isValidElement(child) && child.type === StoriesPreview;

/**
 * Гейт ленивого вьюера: подтягивает и монтирует тяжёлый чанк только после
 * первого открытия и держит смонтированным дальше (ради анимации закрытия и
 * повторных открытий). До первого открытия в дереве только лёгкие триггеры.
 */
const ViewerGate = (): JSX.Element | null => {
  const { store } = useStoriesContext();
  const { isOpen } = useStoriesSnapshot(store);
  const [everOpened, setEverOpened] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setEverOpened(true);
  }, [isOpen]);

  if (!everOpened) return null;

  return (
    <Suspense fallback={null}>
      <StoriesViewerLazy />
    </Suspense>
  );
};

const StoriesRender = (
  props: StoriesProps,
  ref: Ref<StoriesRef>,
): JSX.Element => {
  const {
    children,
    defaultDuration = STORIES_DEFAULTS.duration,
    open,
    defaultOpen,
    activeGroupIndex,
    activeSlideIndex,
    onOpenChange,
    onGroupChange,
    onSlideChange,
    onComplete,
    onGroupComplete,
    onClose,
    onError,
    renderError,
    overlay = true,
    overlayColor = STORIES_DEFAULTS.overlayColor,
    zIndex = STORIES_DEFAULTS.zIndex,
    preloadOnHover = true,
    loadingDelay = 0,
    pauseHoldDelay = STORIES_DEFAULTS.pauseHoldDelay,
    groupTransition = 'slide',
    arrows = 'auto',
    mode,
    className,
  } = props;

  // Нормализуем группы из компаунд-детей: props каждого Stories.Preview — это данные.
  const childArray = Children.toArray(children).filter(isPreviewElement);
  const groups: StoriesGroupMeta[] = childArray.map((child) => ({
    slides: child.props.slides ?? [],
    defaultDuration: child.props.defaultDuration,
  }));

  // Стор и controller
  const storeRef = useRef<StoriesStore>();
  if (!storeRef.current) {
    storeRef.current = createStoriesStore({ isOpen: defaultOpen ?? false });
  }
  const store = storeRef.current;

  const groupsRef = useRef(groups);
  groupsRef.current = groups;
  const configRef = useRef({ groupTransition });
  configRef.current = { groupTransition };
  const handlersRef = useRef({
    onOpenChange,
    onGroupChange,
    onSlideChange,
    onComplete,
    onGroupComplete,
    onClose,
  });
  handlersRef.current = {
    onOpenChange,
    onGroupChange,
    onSlideChange,
    onComplete,
    onGroupComplete,
    onClose,
  };

  const controllerRef = useRef<StoriesController>();
  if (!controllerRef.current) {
    const setSlide = (index: number, direction: 'next' | 'prev'): void =>
      store.setState({ slideIndex: index, direction, isPlaying: true });

    const setGroup = (
      gi: number,
      si: number,
      direction: 'next' | 'prev',
    ): void =>
      runViewTransition(
        () =>
          store.setState({
            groupIndex: gi,
            slideIndex: si,
            direction,
            isPlaying: true,
          }),
        { direction, enabled: configRef.current.groupTransition !== 'none' },
      );

    const complete = (): void => {
      handlersRef.current.onComplete?.();
      store.setState({ isOpen: false, isPlaying: false });
    };

    controllerRef.current = {
      open: (groupIndex, slideIndex) => {
        const snap = store.getSnapshot();
        store.setState({
          isOpen: true,
          groupIndex: groupIndex ?? snap.groupIndex,
          slideIndex: slideIndex ?? 0,
          isPlaying: true,
          direction: 'next',
        });
      },
      close: () => store.setState({ isOpen: false, isPlaying: false }),
      next: () => {
        const snap = store.getSnapshot();
        const count = groupsRef.current[snap.groupIndex]?.slides.length ?? 0;
        if (snap.slideIndex + 1 < count) {
          setSlide(snap.slideIndex + 1, 'next');
        } else if (snap.groupIndex + 1 < groupsRef.current.length) {
          handlersRef.current.onGroupComplete?.(snap.groupIndex);
          setGroup(snap.groupIndex + 1, 0, 'next');
        } else {
          handlersRef.current.onGroupComplete?.(snap.groupIndex);
          complete();
        }
      },
      prev: () => {
        const snap = store.getSnapshot();
        if (snap.slideIndex > 0) {
          setSlide(snap.slideIndex - 1, 'prev');
        } else if (snap.groupIndex > 0) {
          setGroup(snap.groupIndex - 1, 0, 'prev');
        }
      },
      nextGroup: () => {
        const snap = store.getSnapshot();
        if (snap.groupIndex + 1 < groupsRef.current.length) {
          setGroup(snap.groupIndex + 1, 0, 'next');
        }
      },
      prevGroup: () => {
        const snap = store.getSnapshot();
        if (snap.groupIndex > 0) {
          setGroup(snap.groupIndex - 1, 0, 'prev');
        }
      },
      goTo: (groupIndex, slideIndex) => {
        const snap = store.getSnapshot();
        const direction = groupIndex < snap.groupIndex ? 'prev' : 'next';
        if (groupIndex === snap.groupIndex) {
          setSlide(slideIndex ?? 0, direction);
        } else {
          setGroup(groupIndex, slideIndex ?? 0, direction);
        }
      },
      pause: () => store.setState({ isPlaying: false }),
      resume: () => store.setState({ isPlaying: true }),
    };
  }
  const controller = controllerRef.current;

  const preloadGroup = useAssetPreloader(groups);

  // Публичные колбэки — по дифу снапшота (open/close/group/slide).
  const prevRef = useRef(store.getSnapshot());
  useEffect(
    () =>
      store.subscribe(() => {
        const prev = prevRef.current;
        const next = store.getSnapshot();
        prevRef.current = next;
        const handlers = handlersRef.current;

        if (prev.isOpen !== next.isOpen) {
          handlers.onOpenChange?.(next.isOpen, { groupIndex: next.groupIndex });
          if (next.isOpen) {
            handlers.onGroupChange?.(next.groupIndex);
            handlers.onSlideChange?.(next.groupIndex, next.slideIndex);
          } else {
            handlers.onClose?.();
          }
          return;
        }

        if (next.isOpen) {
          if (prev.groupIndex !== next.groupIndex) {
            handlers.onGroupChange?.(next.groupIndex);
          }
          if (
            prev.groupIndex !== next.groupIndex ||
            prev.slideIndex !== next.slideIndex
          ) {
            handlers.onSlideChange?.(next.groupIndex, next.slideIndex);
          }
        }
      }),
    [store],
  );

  // Контролируемые пропсы зеркалим в стор.
  useEffect(() => {
    if (open !== undefined) store.setState({ isOpen: open });
  }, [open, store]);
  useEffect(() => {
    if (activeGroupIndex !== undefined)
      store.setState({ groupIndex: activeGroupIndex });
  }, [activeGroupIndex, store]);
  useEffect(() => {
    if (activeSlideIndex !== undefined)
      store.setState({ slideIndex: activeSlideIndex });
  }, [activeSlideIndex, store]);

  useImperativeHandle(
    ref,
    () => ({
      ...controller,
      getState: () => {
        const snap = store.getSnapshot();
        return {
          isOpen: snap.isOpen,
          groupIndex: snap.groupIndex,
          slideIndex: snap.slideIndex,
          isPlaying: snap.isPlaying,
        };
      },
    }),
    [controller, store],
  );

  const contextValue = {
    store,
    controller,
    groups,
    defaultDuration,
    pauseHoldDelay,
    tapPrevZone: STORIES_DEFAULTS.tapPrevZone,
    preloadGroup,
    preloadOnHover,
    loadingDelay,
    overlay,
    overlayColor,
    zIndex,
    groupTransition,
    arrows,
    mode,
    onError,
    renderError,
  };

  return (
    <StoriesProvider value={contextValue}>
      <StyledStories
        className={[storiesClassNames.root, className]
          .filter(Boolean)
          .join(' ')}
      >
        {childArray.map((child, index) =>
          cloneElement(child, { __index: index }),
        )}
      </StyledStories>
      <ViewerGate />
    </StoriesProvider>
  );
};

export const Stories = forwardRef(StoriesRender) as StoriesComponent;
Stories.Preview = StoriesPreview;
Stories.displayName = 'Stories';
