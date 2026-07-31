import { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components';

export const getCssStyle = (
  widthsProp: string | undefined,
  $css: CSSObject | string | FlattenSimpleInterpolation | undefined,
) => {
  if (!widthsProp && !$css) {
    return undefined;
  }
  const widths = widthsProp && {
    $css: widthsProp
      .split(' ')
      .map((s, i) => ({
        [`& > *:nth-child(${i + 1})`]: {
          width: s,
        },
      }))
      .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  };

  return css`
    ${() => widths && widths.$css};
    ${() => $css && $css};
  `;
};
