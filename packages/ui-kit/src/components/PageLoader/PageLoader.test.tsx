import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { PageLoader } from './PageLoader';

afterEach(cleanup);

describe('PageLoader', () => {
  it('сохраняет DOM и состояние контента при переключении загрузки', () => {
    const content = <input aria-label="Название" defaultValue="Черновик" />;
    const { rerender } = render(
      <PageLoader active={false}>{content}</PageLoader>,
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Новое название' } });
    input.focus();

    rerender(<PageLoader>{content}</PageLoader>);

    expect(screen.getByRole('status').textContent).toContain(
      'Загрузка страницы',
    );
    expect(input.isConnected).toBe(true);
    expect(input.closest('[inert]')).not.toBeNull();
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(document.activeElement).not.toBe(input);

    rerender(<PageLoader active={false}>{content}</PageLoader>);

    expect(screen.queryByRole('status')).toBeNull();
    expect(screen.getByRole('textbox')).toBe(input);
    expect(input.value).toBe('Новое название');
    expect(input.closest('[inert]')).toBeNull();
  });

  it('не блокирует заголовок и действия вне области контента', () => {
    render(
      <>
        <button type="button">Назад</button>
        <PageLoader>
          <button type="button">Сохранить</button>
        </PageLoader>
      </>,
    );

    expect(
      screen.getByRole('button', { name: 'Назад' }).closest('[inert]'),
    ).toBeNull();
    expect(screen.queryByRole('button', { name: 'Сохранить' })).toBeNull();
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
  });

  it('передаёт ref и HTML-атрибуты контейнеру и обновляет aria-busy', () => {
    const ref = createRef<HTMLDivElement>();
    const { rerender } = render(
      <PageLoader ref={ref} id="page-content" className="custom-loader" />,
    );
    expect(ref.current?.id).toBe('page-content');
    expect(ref.current?.classList.contains('custom-loader')).toBe(true);
    expect(ref.current?.getAttribute('aria-busy')).toBe('true');

    rerender(<PageLoader ref={ref} active={false} />);
    expect(ref.current?.getAttribute('aria-busy')).toBe('false');
  });
});
