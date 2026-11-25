import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { normalizeLines } from './normalizeLines';
import { TypographyWithCollapse } from './TypographyWithCollapse';

describe('normalizeLines', () => {
  it.each([
    [undefined, 4],
    [NaN, 4],
    [Infinity, 4],
    [-2, 1],
    [0, 1],
    [2.9, 2],
    [5, 5],
  ])('для %s возвращает %s', (lines, expected) => {
    expect(normalizeLines(lines)).toBe(expected);
  });
});

describe('TypographyWithCollapse', () => {
  let fullHeight: number;
  let notifyResize: () => void;
  const observe = vi.fn();
  const disconnect = vi.fn();
  const cancel = vi.fn();
  const animate = vi.fn(() => ({ cancel, onfinish: null }));
  const content = (value: string) => <em>{value}</em>;

  const mockViewportAnimation = (button: HTMLElement) => {
    const viewport = document.getElementById(
      button.getAttribute('aria-controls') ?? '',
    );
    if (!viewport) throw new Error('Кнопка должна ссылаться на область текста');
    Object.defineProperty(viewport, 'animate', { value: animate });
  };

  beforeEach(() => {
    fullHeight = 120;
    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(callback: () => void) {
          notifyResize = callback;
        }

        observe = observe;

        disconnect = disconnect;
      },
    );
    vi.spyOn(Element.prototype, 'scrollHeight', 'get').mockImplementation(
      () => fullHeight,
    );
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(
      function measureRect(this: Element) {
        const clamped =
          this.getAttribute('data-collapsed') === 'true' ||
          this.parentElement?.hasAttribute('data-measuring');
        const height = clamped ? Math.min(80, fullHeight) : fullHeight;
        return {
          x: 0,
          y: 0,
          top: 0,
          left: 0,
          bottom: height,
          right: 200,
          width: 200,
          height,
          toJSON() {},
        };
      },
    );
    vi.stubGlobal('matchMedia', undefined);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('показывает кнопку при переполнении после ресайза и сбрасывает раскрытие, если текст поместился', () => {
    fullHeight = 80;
    render(<TypographyWithCollapse>Описание</TypographyWithCollapse>);
    expect(screen.queryByRole('button')).toBeNull();
    fullHeight = 100;
    act(() => notifyResize());
    fireEvent.click(screen.getByRole('button', { name: 'Показать полностью' }));
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toBe(
      'true',
    );
    fullHeight = 60;
    act(() => notifyResize());
    expect(screen.queryByRole('button')).toBeNull();
    fullHeight = 120;
    act(() => notifyResize());
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toBe(
      'false',
    );
  });

  it('учитывает новый текст даже при прежней высоте свёрнутого блока', async () => {
    fullHeight = 80;
    const { rerender } = render(
      <TypographyWithCollapse>Короткое описание</TypographyWithCollapse>,
    );
    fullHeight = 120;
    rerender(
      <TypographyWithCollapse>Новое длинное описание</TypographyWithCollapse>,
    );
    const button = await screen.findByRole('button');
    fireEvent.click(button);
    fullHeight = 60;
    rerender(<TypographyWithCollapse>Короткое</TypographyWithCollapse>);
    await waitFor(() => expect(screen.queryByRole('button')).toBeNull());
    fullHeight = 120;
    rerender(
      <TypographyWithCollapse>Снова длинное описание</TypographyWithCollapse>,
    );
    expect(
      (await screen.findByRole('button')).getAttribute('aria-expanded'),
    ).toBe('false');
  });

  it('сохраняет наблюдатель и текущую анимацию при ререндере с эквивалентным JSX', () => {
    const { rerender, unmount } = render(
      <TypographyWithCollapse>{content('Описание')}</TypographyWithCollapse>,
    );
    const button = screen.getByRole('button');
    mockViewportAnimation(button);
    fireEvent.click(button);
    expect(animate).toHaveBeenCalledOnce();
    rerender(
      <TypographyWithCollapse>{content('Описание')}</TypographyWithCollapse>,
    );
    expect(observe).toHaveBeenCalledTimes(1);
    expect(cancel).not.toHaveBeenCalled();
    unmount();
    expect(cancel).toHaveBeenCalledOnce();
    expect(disconnect).toHaveBeenCalledOnce();
  });

  it('учитывает reduced motion при переключении с клавиатуры', () => {
    vi.stubGlobal('matchMedia', () => ({ matches: true }));
    render(<TypographyWithCollapse>Описание</TypographyWithCollapse>);
    const button = screen.getByRole('button');
    mockViewportAnimation(button);
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(button.getAttribute('aria-expanded')).toBe('true');
    fireEvent.keyDown(button, { key: ' ' });
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(animate).not.toHaveBeenCalled();
  });

  it('отделяет заголовок и его обработчики от кнопки раскрытия', () => {
    const ref = createRef<HTMLDivElement>();
    const onClick = vi.fn();
    const onKeyDown = vi.fn();
    render(
      <TypographyWithCollapse
        as="h2"
        variant="H2"
        bold
        ref={ref}
        data-testid="root"
        className="product"
        style={{ marginTop: 8 }}
        onClick={onClick}
        onKeyDown={onKeyDown}
        expandLabel="Подробнее"
        collapseLabel="Скрыть"
      >
        Описание
      </TypographyWithCollapse>,
    );
    const root = screen.getByTestId('root');
    expect(root.tagName).toBe('DIV');
    const heading = screen.getByRole('heading', { level: 2, name: 'Описание' });
    expect(ref.current).toBe(root);
    expect(root.classList.contains('product')).toBe(true);
    expect(root.style.marginTop).toBe('8px');
    const button = screen.getByRole('button', { name: 'Подробнее' });
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: 'Скрыть' })).toBe(button);
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(onClick).not.toHaveBeenCalled();
    expect(onKeyDown).not.toHaveBeenCalled();
    fireEvent.click(heading);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
