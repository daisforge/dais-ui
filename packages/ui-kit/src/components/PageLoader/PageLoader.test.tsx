import { cleanup, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { PageLoader } from './PageLoader';

afterEach(cleanup);

describe('PageLoader', () => {
  it('объявляет загрузку с заголовком и описанием по умолчанию', () => {
    render(<PageLoader />);

    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(
      'Загрузка страницы',
    );
    expect(screen.getByRole('status').textContent).toContain(
      'Данные обрабатываются, обычно это занимает не более 10 секунд',
    );
  });

  it('позволяет заменить тексты и скрыть описание', () => {
    const { rerender } = render(
      <PageLoader title="Загрузка отчёта" subtitle="Подготавливаем данные" />,
    );
    expect(screen.getByRole('status').textContent).toBe(
      'Загрузка отчётаПодготавливаем данные',
    );

    rerender(<PageLoader title="Загрузка отчёта" subtitle={null} />);
    expect(screen.getByRole('status').textContent).toBe('Загрузка отчёта');

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
