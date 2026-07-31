/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

// utils
const JSON_PARSE = (v: string | undefined | null) => JSON.parse(v ?? '{}');

// Очистка DOM после каждого теста
afterEach(() => {
  cleanup();
});

// Мок PopupProvider
vi.mock('@ui-kit/components/Popup', () => ({
  PopupProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-popup-provider">{children}</div>
  ),
}));

// Мок DrawerX для проверки передаваемых пропсов
vi.mock('./components/DrawerX', () => ({
  DrawerX: vi.fn(({ children, ...props }: Record<string, any>) => (
    <div data-testid="mock-drawer-x" data-props={JSON.stringify(props)}>
      {children}
    </div>
  )),
}));

// Мок всех дочерних компонентов для изоляции компонента
vi.mock('./components/BackIconButton', () => ({
  DrawerDFBackIconButton: vi.fn(() => (
    <div data-testid="mock-back-icon">Назад</div>
  )),
}));

vi.mock('./components/CloseButton', () => ({
  CloseButton: vi.fn(({ onClose }: Record<string, any>) => (
    <button type="button" data-testid="mock-close-button" onClick={onClose}>
      Закрыть
    </button>
  )),
}));

vi.mock('./components/DotsIconButton', () => ({
  DrawerDFDotsIconButton: vi.fn(() => (
    <div data-testid="mock-dots-icon">Меню</div>
  )),
}));

// Импорт после моков
// eslint-disable-next-line import/first
import { DrawerDF } from './DrawerDF';

describe('DrawerDF', () => {
  const baseProps = {
    opened: true,
    onClose: vi.fn(),
  };

  describe('обёртка PopupProvider', () => {
    it('должен оборачивать компонент в PopupProvider', () => {
      render(<DrawerDF {...baseProps} />);
      expect(screen.getByTestId('mock-popup-provider')).toBeDefined();
    });
  });

  describe('логика кнопок закрытия', () => {
    it('должен рендерить CloseButton когда showBackButton ложь или не указан', () => {
      render(<DrawerDF {...baseProps} />);
      expect(screen.getByTestId('mock-close-button')).toBeDefined();
    });

    it('должен рендерить DrawerDFBackIconButton когда showBackButton истина', () => {
      render(<DrawerDF {...baseProps} showBackButton />);
      expect(screen.getByTestId('mock-back-icon')).toBeDefined();
    });
  });

  describe('логика multiple contents', () => {
    it('должен устанавливать $multipleContents в false когда main - одиночный элемент', () => {
      const { container } = render(
        <DrawerDF
          {...baseProps}
          main={<DrawerDF.Content>Контент</DrawerDF.Content>}
        />,
      );
      const props = JSON_PARSE(
        container.querySelector<HTMLDivElement>(
          '[data-testid="mock-drawer-x"]',
        )!.dataset['props'],
      );
      expect(props.$multipleContents).toBe(false);
    });

    it('должен устанавливать $multipleContents в true когда main - массив', () => {
      const { container } = render(
        <DrawerDF
          {...baseProps}
          main={[
            <DrawerDF.Content key="1">Контент 1</DrawerDF.Content>,
            <DrawerDF.Content key="2">Контент 2</DrawerDF.Content>,
          ]}
        />,
      );
      const props = JSON_PARSE(
        container.querySelector<HTMLDivElement>(
          '[data-testid="mock-drawer-x"]',
        )!.dataset['props'],
      );
      expect(props.$multipleContents).toBe(true);
    });

    it('должен вычислять maxWidth по-разному для одиночного и множественного контента', () => {
      const { container: singleContainer } = render(
        <DrawerDF {...baseProps} main={<DrawerDF.Content />} />,
      );
      const singleProps = JSON_PARSE(
        singleContainer.querySelector<HTMLDivElement>(
          '[data-testid="mock-drawer-x"]',
        )!.dataset['props'],
      );

      const { container: multipleContainer } = render(
        <DrawerDF
          {...baseProps}
          main={[
            <DrawerDF.Content key="1">Контент 1</DrawerDF.Content>,
            <DrawerDF.Content key="2">Контент 2</DrawerDF.Content>,
          ]}
        />,
      );
      const multipleProps = JSON_PARSE(
        multipleContainer.querySelector<HTMLDivElement>(
          '[data-testid="mock-drawer-x"]',
        )!.dataset['props'],
      );

      // Одиночный контент использует отступ -52px, множественный - -64px
      expect(singleProps.style.maxWidth).toContain('calc(');
      expect(multipleProps.style.maxWidth).toContain('calc(');
      expect(singleProps.style.maxWidth).not.toBe(multipleProps.style.maxWidth);
    });
  });

  describe('условный рендеринг footer', () => {
    it('должен рендерить footer когда main - одиночный элемент', () => {
      const { getByText } = render(
        <DrawerDF
          {...baseProps}
          main={<DrawerDF.Content>Контент</DrawerDF.Content>}
          footer={<DrawerDF.Footer>Футер</DrawerDF.Footer>}
        />,
      );
      expect(getByText('Футер')).toBeDefined();
    });

    it('должен НЕ рендерить footer когда main - массив (multiple contents)', () => {
      const { queryByText } = render(
        <DrawerDF
          {...baseProps}
          main={[
            <DrawerDF.Content key="1">Контент 1</DrawerDF.Content>,
            <DrawerDF.Content key="2">Контент 2</DrawerDF.Content>,
          ]}
          footer={<DrawerDF.Footer>Футер</DrawerDF.Footer>}
        />,
      );
      // Футер не должен рендериться при множественном контенте
      expect(queryByText('Футер')).toBeNull();
    });
  });

  describe('рендеринг header', () => {
    it('должен рендерить предоставленный header', () => {
      const { getByText } = render(
        <DrawerDF
          {...baseProps}
          header={<DrawerDF.Header title="Заголовок" />}
        />,
      );
      expect(getByText('Заголовок')).toBeDefined();
    });

    it('должен рендерить header когда он не предоставлен', () => {
      const { container } = render(<DrawerDF {...baseProps} />);
      expect(container.innerHTML).toContain('mock-drawer-x');
    });
  });

  describe('структура compound components', () => {
    it('должен иметь DrawerDF.Content как функцию', () => {
      expect(DrawerDF.Content).toBeDefined();
      expect(typeof DrawerDF.Content).toBe('function');
    });

    it('должен иметь DrawerDF.Header как функцию', () => {
      expect(DrawerDF.Header).toBeDefined();
      expect(typeof DrawerDF.Header).toBe('function');
    });

    it('должен иметь DrawerDF.DotsIconButton как функцию', () => {
      expect(DrawerDF.DotsIconButton).toBeDefined();
      expect(typeof DrawerDF.DotsIconButton).toBe('function');
    });

    it('должен иметь DrawerDF.Footer как функцию', () => {
      expect(DrawerDF.Footer).toBeDefined();
      expect(typeof DrawerDF.Footer).toBe('function');
    });
  });

  describe('spread пропсов', () => {
    it('должен передавать дополнительные пропсы в DrawerX', () => {
      const { container } = render(
        <DrawerDF {...baseProps} width="800px" placement="left" />,
      );
      const props = JSON_PARSE(
        container.querySelector<HTMLDivElement>(
          '[data-testid="mock-drawer-x"]',
        )!.dataset['props'],
      );
      expect(props.width).toBe('800px');
      expect(props.placement).toBe('left');
    });

    it('должен передавать $header, $footer флаги в DrawerX', () => {
      const { container } = render(
        <DrawerDF
          {...baseProps}
          header={<DrawerDF.Header title="Заголовок" />}
          footer={<DrawerDF.Footer>Футер</DrawerDF.Footer>}
        />,
      );
      const props = JSON_PARSE(
        container.querySelector<HTMLDivElement>(
          '[data-testid="mock-drawer-x"]',
        )!.dataset['props'],
      );
      expect(props.$header).toBe(true);
      expect(props.$footer).toBe(true);
    });

    it('должен передавать $header=false, $footer=false когда не указаны', () => {
      const { container } = render(<DrawerDF {...baseProps} />);
      const props = JSON_PARSE(
        container.querySelector<HTMLDivElement>(
          '[data-testid="mock-drawer-x"]',
        )!.dataset['props'],
      );
      expect(props.$header).toBe(false);
      expect(props.$footer).toBe(false);
    });
  });

  describe('граничные случаи', () => {
    it('должен обрабатывать null main контент без ошибок', () => {
      expect(() => {
        render(<DrawerDF {...baseProps} main={null} />);
      }).not.toThrow();
    });

    it('должен обрабатывать undefined footer без ошибок', () => {
      expect(() => {
        render(
          <DrawerDF
            {...baseProps}
            main={<DrawerDF.Content />}
            footer={undefined}
          />,
        );
      }).not.toThrow();
    });

    it('должен обрабатывать пустой header без ошибок', () => {
      expect(() => {
        render(
          <DrawerDF {...baseProps} header={<DrawerDF.Header title="" />} />,
        );
      }).not.toThrow();
    });
  });
});
