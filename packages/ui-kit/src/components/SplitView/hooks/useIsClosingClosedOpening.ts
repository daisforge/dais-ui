import { MutableRefObject, useCallback, useEffect, useState } from 'react';
/**
 * isClosingOrClosedOrOpening - нужен для определения моментов анимаций открытия и закрытия sidebar-а.
 *
 * В эти моменты sizes.sidebarPx задается как ширина для дочерних
 * элементов sidebar-а, чтобы предотвратить сжатие контента sidebar-а.
 */
export const useIsClosingClosedOpening = ({
  sidebarIsClosed,
  isResizingRef,
  onTransitionEndExt,
}: {
  sidebarIsClosed: boolean;
  isResizingRef: MutableRefObject<boolean>;
  onTransitionEndExt: React.TransitionEventHandler<HTMLDivElement> | undefined;
}) => {
  const [isClosingOrClosedOrOpening, setIsClosingOrClosedOrOpening] = useState(
    () => sidebarIsClosed,
  );

  useEffect(() => {
    if (sidebarIsClosed) {
      setIsClosingOrClosedOrOpening(true);
    }
  }, [sidebarIsClosed]);

  const onTransitionEnd: NonNullable<typeof onTransitionEndExt> = useCallback(
    (e) => {
      if (onTransitionEndExt) {
        onTransitionEndExt(e);
      }
      if (
        !sidebarIsClosed &&
        !isResizingRef.current &&
        isClosingOrClosedOrOpening
      ) {
        setIsClosingOrClosedOrOpening(false);
      }
    },
    [
      isClosingOrClosedOrOpening,
      isResizingRef,
      onTransitionEndExt,
      sidebarIsClosed,
    ],
  );

  return { isClosingOrClosedOrOpening, onTransitionEnd };
};
