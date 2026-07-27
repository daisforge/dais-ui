import { useCallback, useEffect, useState } from 'react';

import { ModalDFProps } from '../types';

type DocWitStartTransition = { startViewTransition?: (cb: () => void) => void };
export const getDefault = (fullScreenExternal: ModalDFProps['fullScreen']) => {
  if (!fullScreenExternal) {
    return null;
  }
  if (typeof fullScreenExternal === 'object') {
    return fullScreenExternal.defaultEnabled ?? false;
  }
  return false;
};

export const useFullScreened = (
  fullScreenExternal: ModalDFProps['fullScreen'],
  opened: boolean | undefined
) => {
  const [fullScreened, setFullScreened] = useState(() =>
    getDefault(fullScreenExternal)
  );

  // --------------- возврат к дефолтному состоянию полноэкранного режима при закрытии модального окна
  const savingIsActive =
    fullScreenExternal &&
    typeof fullScreenExternal === 'object' &&
    fullScreenExternal.saveStateAfterClosing;

  useEffect(() => {
    if (!opened && !savingIsActive) {
      setFullScreened(getDefault(fullScreenExternal));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);
  // ------------------------------------------------------------

  const toggleFullScreen = useCallback(() => {
    if (!fullScreenExternal) {
      return;
    }
    const toggle = () =>
      setFullScreened((prev) => {
        if (typeof fullScreenExternal !== 'boolean') {
          if (!prev) {
            fullScreenExternal?.onFullScreen?.();
          } else {
            fullScreenExternal?.onExitFullScreen?.();
          }
        }
        return !prev;
      });

    if (!(document as DocWitStartTransition).startViewTransition) {
      toggle();
    }

    (document as DocWitStartTransition).startViewTransition?.(toggle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    fullScreened,
    toggleFullScreen
  };
};
