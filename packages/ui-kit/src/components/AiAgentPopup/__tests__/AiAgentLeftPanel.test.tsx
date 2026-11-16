import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { AiAgentLeftPanel } from '../AiAgentLeftPanel';
import type { AiAgentLeftPanelItem } from '../AiAgentPopup.types';

afterEach(() => cleanup());

const icon = (id: string) => <span data-testid={`icon-${id}`} />;

const button = (id: string) =>
  screen.getByTestId(`icon-${id}`).closest('button') as HTMLButtonElement;

describe('AiAgentLeftPanel', () => {
  it('кнопка-действие вызывает onClick и не открывает раздел', () => {
    const onClear = vi.fn();
    const onActiveKeyChange = vi.fn();
    const items: AiAgentLeftPanelItem[] = [
      { key: 'clear', icon: icon('clear'), onClick: onClear },
    ];

    render(
      <AiAgentLeftPanel items={items} onActiveKeyChange={onActiveKeyChange} />,
    );
    fireEvent.click(button('clear'));

    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onActiveKeyChange).not.toHaveBeenCalled();
  });

  it('раздел с onClick вызывает onClick и открывается', () => {
    const onClick = vi.fn();
    const onActiveKeyChange = vi.fn();
    const items: AiAgentLeftPanelItem[] = [
      {
        key: 'history',
        icon: icon('history'),
        title: 'История',
        content: <div>контент истории</div>,
        onClick,
      },
    ];

    render(
      <AiAgentLeftPanel items={items} onActiveKeyChange={onActiveKeyChange} />,
    );
    fireEvent.click(button('history'));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onActiveKeyChange).toHaveBeenCalledWith('history');
    expect(screen.getByText('контент истории')).toBeTruthy();
  });

  it('выключенная кнопка не реагирует на клик', () => {
    const onClick = vi.fn();
    const onActiveKeyChange = vi.fn();
    const items: AiAgentLeftPanelItem[] = [
      { key: 'clear', icon: icon('clear'), onClick, disabled: true },
      {
        key: 'history',
        icon: icon('history'),
        title: 'История',
        content: <div>контент истории</div>,
        disabled: true,
      },
    ];

    render(
      <AiAgentLeftPanel items={items} onActiveKeyChange={onActiveKeyChange} />,
    );
    expect(button('clear').disabled).toBe(true);
    fireEvent.click(button('clear'));
    fireEvent.click(button('history'));

    expect(onClick).not.toHaveBeenCalled();
    expect(onActiveKeyChange).not.toHaveBeenCalled();
  });

  it('кнопки bottom стоят в отдельной нижней группе в порядке items', () => {
    const items: AiAgentLeftPanelItem[] = [
      { key: 'a', icon: icon('a'), onClick: vi.fn(), placement: 'bottom' },
      { key: 'b', icon: icon('b'), onClick: vi.fn() },
      { key: 'c', icon: icon('c'), onClick: vi.fn(), placement: 'bottom' },
    ];

    render(<AiAgentLeftPanel items={items} />);

    const topGroup = button('b').parentElement;
    const bottomGroup = button('a').parentElement;
    expect(topGroup).not.toBe(bottomGroup);
    expect(button('c').parentElement).toBe(bottomGroup);
    expect(
      Array.from(bottomGroup?.children ?? []).map((el) =>
        el.contains(screen.getByTestId('icon-a')) ? 'a' : 'c',
      ),
    ).toEqual(['a', 'c']);
    expect(topGroup?.nextElementSibling).toBe(bottomGroup);
  });

  it('activeKey кнопки-действия не открывает раздел', () => {
    const items: AiAgentLeftPanelItem[] = [
      { key: 'clear', icon: icon('clear'), onClick: vi.fn() },
    ];

    render(<AiAgentLeftPanel items={items} activeKey="clear" />);

    // Полоса видна, раздел не открыт
    expect(
      screen
        .getByTestId('icon-clear')
        .closest('[aria-hidden]')
        ?.getAttribute('aria-hidden'),
    ).toBe('false');
  });
});
