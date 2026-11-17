import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { PageLoader } from '@ui-kit/components/PageLoader';
import { PageTitle } from '@ui-kit/components/PageTitle';
import { TextField } from '@ui-kit/components/TextField';
import { useState } from 'react';

const meta: Meta<typeof PageLoader> = {
  title: 'Композиции/PageLoader',
  component: PageLoader,
  tags: ['!autodocs'],
  args: {
    active: true,
    title: 'Загрузка страницы',
    subtitle: 'Данные обрабатываются, обычно это занимает не более 10 секунд',
  },
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Default: Story = {
  name: 'Загрузка страницы',
  ...storySourceDoc({ previewSource: 'shown' }),
  render: (args) => (
    <Box display="flex" flexDirection="column" minHeight="480px" gap="24px">
      <PageTitle title="Отчёты" />
      <PageLoader {...args}>
        <TextField label="Название отчёта" defaultValue="Годовой отчёт" />
      </PageLoader>
    </Box>
  ),
};

export const WithoutSubtitle: Story = {
  name: 'Без описания',
  args: { subtitle: null },
  render: (args) => (
    <Box display="flex" minHeight="320px">
      <PageLoader {...args} />
    </Box>
  ),
};

export const Narrow: Story = {
  name: 'Узкая область контента',
  render: (args) => (
    <Box display="flex" width="280px" maxWidth="100%" minHeight="320px">
      <PageLoader {...args} />
    </Box>
  ),
};

export const PreserveContent: Story = {
  name: 'Сохранение контента при загрузке',
  render: function Render(args) {
    const [active, setActive] = useState(false);

    return (
      <Box display="flex" flexDirection="column" minHeight="480px" gap="24px">
        <PageTitle
          title="Отчёты"
          rightSlot={
            <Button onClick={() => setActive((value) => !value)}>
              {active ? 'Завершить загрузку' : 'Начать загрузку'}
            </Button>
          }
        />
        <PageLoader {...args} active={active}>
          <TextField label="Название отчёта" defaultValue="Черновик" />
        </PageLoader>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, 'Годовой отчёт');
    await userEvent.click(
      canvas.getByRole('button', { name: 'Начать загрузку' }),
    );
    await expect(canvas.getByRole('status')).toBeVisible();
    await expect(input.closest('[inert]')).not.toBeNull();
    await expect(canvas.queryByRole('textbox')).toBeNull();
    await userEvent.click(
      canvas.getByRole('button', { name: 'Завершить загрузку' }),
    );
    await expect(canvas.queryByRole('status')).toBeNull();
    await expect(canvas.getByRole('textbox')).toBe(input);
    await expect(input).toHaveValue('Годовой отчёт');
    await expect(input.closest('[inert]')).toBeNull();
  },
};
