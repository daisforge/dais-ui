import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import {
  TypographyWithCollapse,
  type TypographyWithCollapseProps,
} from '@ui-kit/components/TypographyWithCollapse';
import { normalizeLines } from '@ui-kit/components/TypographyWithCollapse/normalizeLines';
import { backgroundPrimary, surfaceSolidCard } from '@ui-kit/tokens';
import type { CSSProperties } from 'react';

const meta: Meta<TypographyWithCollapseProps> = {
  title: 'Композиции/TypographyWithCollapse',
  component: TypographyWithCollapse,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
  args: { lines: 4 },
  argTypes: {
    children: { control: false },
    lines: { control: { type: 'number', min: 1, step: 1 } },
  },
};
export default meta;

type Story = StoryObj<TypographyWithCollapseProps>;
const preCode = "import { TypographyWithCollapse } from '@daisforge/ui';\n\n";

export const Default: Story = {
  name: 'Сворачиваемый текст',
  ...storySourceDoc({
    preCode:
      "import type { CSSProperties } from 'react';\nimport { backgroundPrimary, surfaceSolidCard, TypographyWithCollapse } from '@daisforge/ui';\n\n",
    previewSource: 'shown',
    type: 'code',
  }),
  render: ({ lines = 4 }) => {
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
          <TypographyWithCollapse lines={lines}>
            {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
          </TypographyWithCollapse>
        </div>
        <div style={cardStyle}>
          <TypographyWithCollapse lines={lines}>
            Короткий текст помещается целиком, кнопка не нужна.
          </TypographyWithCollapse>
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
  render: ({ lines = 4, children }) => (
    <div style={{ maxWidth: 480 }}>
      <TypographyWithCollapse lines={lines}>{children}</TypographyWithCollapse>
    </div>
  ),
};

export const Expanded: Story = {
  name: 'Раскрытый текст и переключение с клавиатуры',
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  play: async ({ canvasElement, args: { lines = 4 } }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText(/^Длинный текст/);
    const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
    const collapsedHeight = text.getBoundingClientRect().height;
    await expect(
      Math.abs(
        collapsedHeight -
          Math.min(normalizeLines(lines) * lineHeight, text.scrollHeight),
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
      expect(
        Math.abs(viewport.getBoundingClientRect().height - text.scrollHeight),
      ).toBeLessThan(1),
    );
    button.focus();
    await userEvent.keyboard('{Enter}');
    await expect(button).toHaveAccessibleName('Показать полностью');
    await waitFor(() =>
      expect(
        Math.abs(text.getBoundingClientRect().height - collapsedHeight),
      ).toBeLessThan(1),
    );
    await userEvent.keyboard(' ');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() =>
      expect(
        Math.abs(viewport.getBoundingClientRect().height - text.scrollHeight),
      ).toBeLessThan(1),
    );
  },
  render: ({ lines = 4 }) => (
    <div style={{ maxWidth: 480 }}>
      <TypographyWithCollapse lines={lines}>
        {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
      </TypographyWithCollapse>
    </div>
  ),
};

export const ShortText: Story = {
  name: 'Текст помещается целиком',
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).queryByRole('button')).toBeNull();
  },
  render: ({ lines = 4 }) => (
    <TypographyWithCollapse lines={lines}>
      Короткая подпись.
    </TypographyWithCollapse>
  ),
};
