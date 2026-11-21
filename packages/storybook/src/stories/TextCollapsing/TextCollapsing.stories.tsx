import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import {
  TextCollapsing,
  type TextCollapsingProps,
} from '@ui-kit/components/TextCollapsing';
import { backgroundPrimary, surfaceSolidCard } from '@ui-kit/tokens';
import type { CSSProperties } from 'react';

const meta: Meta<TextCollapsingProps> = {
  title: 'Локальные компоненты/TextCollapsing',
  component: TextCollapsing,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
  args: { collapsedLines: 4 },
  argTypes: {
    children: { control: false },
    collapsedLines: { control: { type: 'number', min: 1, step: 1 } },
  },
};
export default meta;

type Story = StoryObj<TextCollapsingProps>;
const preCode = "import { TextCollapsing } from '@daisforge/ui';\n\n";

export const Default: Story = {
  name: 'Сворачиваемый текст',
  ...storySourceDoc({
    preCode:
      "import type { CSSProperties } from 'react';\nimport { backgroundPrimary, surfaceSolidCard, TextCollapsing } from '@daisforge/ui';\n\n",
    previewSource: 'shown',
    type: 'code',
  }),
  render: ({ collapsedLines = 4 }) => {
    const cardStyle: CSSProperties = {
      width: 640,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: '32px 40px',
      borderRadius: 24,
      background: surfaceSolidCard,
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          padding: 24,
          background: backgroundPrimary,
        }}
      >
        <div style={cardStyle}>
          <TextCollapsing collapsedLines={collapsedLines}>
            {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
          </TextCollapsing>
        </div>
        <div style={cardStyle}>
          <TextCollapsing collapsedLines={collapsedLines}>
            Короткий текст помещается целиком, кнопка не нужна.
          </TextCollapsing>
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  name: 'Настройка числа строк',
  argTypes: { children: { control: 'text' } },
  args: {
    children: 'Длинный текст, который можно свернуть и развернуть. '.repeat(14),
  },
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  render: ({ collapsedLines = 4, children }) => (
    <div style={{ maxWidth: 480 }}>
      <TextCollapsing collapsedLines={collapsedLines}>
        {children}
      </TextCollapsing>
    </div>
  ),
};

export const Expanded: Story = {
  name: 'Раскрытие и сворачивание',
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  play: async ({ canvasElement, args: { collapsedLines = 4 } }) => {
    // В обычном Storybook пользователь раскрывает текст вручную.
    if (document.documentElement.dataset.storybookTestRunner !== 'true') return;

    const canvas = within(canvasElement);
    const text = canvas.getByText(/^Длинный текст/);
    const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
    const collapsedHeight = text.getBoundingClientRect().height;
    const lines = Number.isFinite(collapsedLines)
      ? Math.max(1, Math.floor(collapsedLines))
      : 4;
    await expect(
      Math.abs(
        collapsedHeight - Math.min(lines * lineHeight, text.scrollHeight),
      ),
    ).toBeLessThan(1);
    if (text.scrollHeight <= collapsedHeight + 1) {
      await expect(canvas.queryByRole('button')).toBeNull();
      return;
    }

    const button = await canvas.findByRole('button', {
      name: 'Показать полностью',
    });

    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    const viewport = text.parentElement;
    if (!viewport) throw new Error('Не найдена область сворачиваемого текста');
    await waitFor(() =>
      expect(viewport.getBoundingClientRect().height).toBe(text.scrollHeight),
    );
    button.focus();
    await userEvent.keyboard('{Enter}');
    await expect(button).toHaveAccessibleName('Показать полностью');
    await waitFor(() =>
      expect(text.getBoundingClientRect().height).toBe(collapsedHeight),
    );
  },
  render: ({ collapsedLines = 4 }) => (
    <div style={{ maxWidth: 480 }}>
      <TextCollapsing collapsedLines={collapsedLines}>
        {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
      </TextCollapsing>
    </div>
  ),
};

export const ShortText: Story = {
  name: 'Текст помещается целиком',
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).queryByRole('button')).toBeNull();
  },
  render: ({ collapsedLines = 4 }) => (
    <TextCollapsing collapsedLines={collapsedLines}>
      Короткая подпись.
    </TextCollapsing>
  ),
};
