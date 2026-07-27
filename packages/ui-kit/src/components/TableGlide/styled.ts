import DataEditor from '@glideappsfinal/glide-data-grid';
import styled from 'styled-components';

import { classNames } from './classNames';

export const StyledOverlayPortal = styled.div`
  [id^='gdg-overlay-'] {
    position: fixed;
    z-index: 9001;
    margin-left: calc(-1 * var(--gdg-portal-offset-x, 0px));
    margin-top: calc(-1 * var(--gdg-portal-offset-y, 0px));
  }
`;

export const StyledGlideDataEditor = styled(DataEditor)<{}>`
  /* &:not(.${classNames.glideScroller}) {
    border: 1px solid ${'red'};
  } */
` as typeof DataEditor;
/* .${classNames.glideScroller} {
    ${scrollbarStyles}
  } */
