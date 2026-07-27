import { useState } from 'react';

import { RequiredOnly } from '../types';
import { FullScreen, FullScreenObj } from './types';

const isHaveExternalState = (
  p: FullScreen | undefined
): p is RequiredOnly<FullScreenObj, 'state'> =>
  typeof p !== 'boolean' && typeof p?.state !== 'undefined';

/**
 * @default fullScreenPortal=document.body
 */
export const useFullScreenState = (
  fullScreenConfig: FullScreen | undefined
) => {
  const configIsObj = typeof fullScreenConfig !== 'boolean';

  const internalState = useState(
    (configIsObj && fullScreenConfig?.defaultOpened) ?? false
  );
  const portal = (() => {
    if (configIsObj) {
      return fullScreenConfig?.portal ?? document.body;
    }
    return document.body;
  })();

  return {
    state: isHaveExternalState(fullScreenConfig)
      ? fullScreenConfig.state
      : internalState,
    fullScreenPortal: portal
  };
};
