import { cleanup, render, screen } from '@testing-library/react';
import { PopoverBeta } from '@ui-kit/components/PopoverBeta';
import React, { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { getFloatingContainer } from '../utils/floatingContainer';

/**
 * Страховка внешней зависимости: защита фокуса и Esc ищут контейнер поповера
 * по разметке, которую ставят floating-ui и PopoverBeta. Если атомарка её
 * поменяет, этот тест упадёт раньше, чем вернётся фокус-рамка в таблице.
 */
describe('getFloatingContainer на настоящем PopoverBeta', () => {
  afterEach(() => {
    cleanup();
  });

  it('находит фокусируемый контейнер поповера по ref и по содержимому', async () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <PopoverBeta opened target={<div />} ref={ref}>
        <button type="button">Содержимое</button>
      </PopoverBeta>,
    );

    const content = await screen.findByText('Содержимое');
    const fromContent = getFloatingContainer(content);
    expect(fromContent).not.toBeNull();
    expect(getFloatingContainer(ref.current)).toBe(fromContent);
    expect(fromContent?.contains(ref.current)).toBe(true);
  });
});
