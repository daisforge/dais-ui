import { createSafeResizeObserver } from '@ui-kit/utils';
import { useEffect, useRef, useState } from 'react';

export const useUpdateSize = (
  isOpened: boolean,
  paddingInlineOfContainer: number,
  borderInlineOfContainer: number
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const refIsActive = !!ref.current;

  const [_resizedWidthOfContainer, setResized] = useState(0);

  const container = ref.current;
  const firstChild = ref.current?.firstChild as HTMLDivElement | null;

  const lastChild = ref.current?.lastChild as HTMLDivElement | null;

  const maxWidthForCenterElement =
    (container &&
      firstChild &&
      lastChild &&
      container.offsetWidth -
        firstChild.offsetWidth -
        lastChild.offsetWidth -
        paddingInlineOfContainer * 2 -
        borderInlineOfContainer * 2) ??
    undefined;

  useEffect(() => {
    const refCurrent = ref.current;

    let width = 0;
    function outputsize() {
      width = refCurrent?.offsetWidth ?? 0;

      setResized(width);
    }
    outputsize();

    const Observer = createSafeResizeObserver(outputsize);

    if (isOpened && refCurrent) {
      Observer.observe(refCurrent);
    }

    return () => {
      Observer.disconnect();
    };
  }, [isOpened, refIsActive]);

  return {
    refForContainer: ref,
    maxWidthForCenterElement
  };
};
