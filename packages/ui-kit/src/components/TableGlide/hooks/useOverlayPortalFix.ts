import { useEffect, type RefObject } from 'react';

import { getFixedPositionOffset } from '../utils/getFixedPositionOffset';
import { throttleWithLastCall } from '@ui-kit/utils';

/**
 * Компенсирует сдвиг `position: fixed` overlay-элементов Glide,
 * когда portal-div находится внутри контейнера с CSS `transform` (модалка).
 *
 * Измеряет offset через `getFixedPositionOffset` (probe-элемент)
 * и выставляет CSS-переменные `--gdg-portal-offset-x/y` на portal-div.
 * Стили `StyledOverlayPortal` компенсируют сдвиг через `margin`.
 */
export function useOverlayPortalFix(
  portalRef: RefObject<HTMLDivElement | null>,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return;
    const portal = portalRef.current;
    if (!portal) return;

    const update = throttleWithLastCall(() => {
      const { x, y } = getFixedPositionOffset(portal);
      portal.style.setProperty('--gdg-portal-offset-x', `${x}px`);
      portal.style.setProperty('--gdg-portal-offset-y', `${y}px`);
    }, 100);

    update();

    window.addEventListener('resize', update);
    portal.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
      portal.removeEventListener('resize', update);
    };
  }, [portalRef, enabled]);
}
