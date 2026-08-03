import { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components';

/**
 * Хелпер для обработки css-пропа
 */
export const getCssProp = (
  cssProp?: string | CSSObject | FlattenSimpleInterpolation,
) =>
  cssProp
    ? css`
        && {
          ${cssProp}
        }
      `
    : undefined;
