import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import { PageLoader } from '@ui-kit/components/PageLoader';

const meta: Meta<typeof PageLoader> = {
  title: 'Композиции/PageLoader',
  component: PageLoader,
  tags: ['!autodocs'],
  args: {
    title: 'Загрузка страницы',
    subtitle: 'Данные обрабатываются, обычно это занимает не более 10 секунд',
  },
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

const preCode = `import { Box, PageLoader } from '@daisforge/ui';`;

export const Default: Story = {
  name: 'Загрузка страницы',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        preCode,
        type: 'dynamic',
        transform: (source: string) => `${preCode}\n\n${source}`,
      },
    },
  },
  render: (args) => (
    <Box display="flex" height="480px">
      <PageLoader {...args} />
    </Box>
  ),
};
