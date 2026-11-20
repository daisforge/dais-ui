import { cleanup, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { PageLoader } from './PageLoader';

afterEach(cleanup);

describe('PageLoader', () => {
  it('показывает только текст загрузки по умолчанию', () => {
    render(<PageLoader />);

    expect(screen.getByRole('status').textContent).toBe('Загрузка страницы');
    expect(screen.queryByRole('heading')).toBeNull();
  });

  it('позволяет заменить тексты и скрыть описание', () => {
    const { rerender } = render(
      <PageLoader title="Загрузка отчёта" subtitle="Подготавливаем данные" />,
    );
    expect(screen.getByRole('status').textContent).toBe(
      'Загрузка отчётаПодготавливаем данные',
    );

    rerender(<PageLoader title="Загрузка отчёта" subtitle="" />);
    expect(screen.getByRole('status').textContent).toBe('Загрузка отчёта');
  });

  it('передаёт ref и HTML-атрибуты контейнеру', () => {
    const ref = createRef<HTMLDivElement>();
    render(<PageLoader ref={ref} id="page-loader" className="custom-loader" />);

    expect(ref.current).toBe(screen.getByRole('status'));
    expect(ref.current?.id).toBe('page-loader');
    expect(ref.current?.classList.contains('custom-loader')).toBe(true);
  });
});
