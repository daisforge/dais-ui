import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
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

export const Default: Story = {
  name: 'Загрузка страницы',
  ...storySourceDoc({
    preCode: "import { Box, PageLoader } from '@daisforge/ui';",
    previewSource: 'shown',
  }),
  render: (args) => (
    <Box display="flex" height="480px">
      <PageLoader {...args} />
    </Box>
  ),
};
