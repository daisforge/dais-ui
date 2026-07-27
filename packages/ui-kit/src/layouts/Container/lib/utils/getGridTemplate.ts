import { media } from '@ui-kit/utils/breakpoint';
import { css } from 'styled-components';

import { TContainerView } from '../../Container.types';

/**
 * Генератор grid-template-columns для разных view
 */
export const getGridTemplate = (view: TContainerView) => {
  switch (view) {
    case '30/70':
      return css`
        grid-template-columns:
          minmax(var(--container-min-col-width), 30%)
          minmax(0, 1fr);
      `;
    case '20/80':
      return css`
        grid-template-columns:
          minmax(var(--container-min-col-width), 20%)
          minmax(0, 1fr);
      `;
    case '70/30':
      return css`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(var(--container-min-col-width), 30%);
      `;
    case '80/20':
      return css`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(var(--container-min-col-width), 20%);
      `;
    case '1/1':
      return css`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 1fr);

        ${media.down('xl')`
          grid-template-columns: minmax(0, 1fr)
        `}
      `;
    case '1/1/1':
      return css`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 1fr)
          minmax(0, 1fr);

        ${media.down('xl')`
          grid-template-columns: minmax(0, 1fr)
        `}
      `;
    case '1/3/1':
      return css`
        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 3fr)
          minmax(0, 1fr);
      `;
    case 'fixed-fluid':
      return css`
        grid-template-columns:
          minmax(var(--container-min-fixed-width), var(--container-fixed-width))
          1fr;
      `;
    default:
      return css`
        grid-template-columns:
          minmax(var(--container-min-col-width), 30%)
          minmax(0, 1fr);
      `;
  }
};
