import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, expect, it } from 'vitest';

import { TourWidget, tourWidgetTokens as tokens } from './index';

afterEach(cleanup);

it('применяет публичные токены из $css поверх палитры и геометрии', () => {
  const { getByTestId } = render(
    <TourWidget
      data-testid="tour"
      $css={{
        [tokens.background]: 'rgb(10, 20, 30)',
        [tokens.themeShapeMiddle]: 'rgb(200, 10, 20)',
        [tokens.borderRadius]: '22px',
        [tokens.gradientFrameHeight]: '34%',
      }}
    />,
  );
  const style = getComputedStyle(getByTestId('tour'));

  expect(style.getPropertyValue(tokens.background).replace(/\s/g, '')).toBe(
    'rgb(10,20,30)',
  );
  expect(
    style.getPropertyValue(tokens.themeShapeMiddle).replace(/\s/g, ''),
  ).toBe('rgb(200,10,20)');
  expect(style.getPropertyValue(tokens.borderRadius)).toBe('22px');
  expect(style.getPropertyValue(tokens.gradientFrameHeight)).toBe('34%');
});
