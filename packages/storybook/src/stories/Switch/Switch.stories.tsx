/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchProps } from '@ui-kit/components/Switch';

const meta: Meta<SwitchProps> = {
  title: 'Локальные компоненты/Switch',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      toc: true
    },
    layout: 'fullscreen'
  },
  component: Switch
};

export default meta;

type Story = StoryObj<SwitchProps>;

const preCodeSlots = `
    import { Switch } from '@dais-ui/ui-kit';

`;

export const SwitchStory: Story = {
  name: 'Example',
  ...storySourceDoc({
    preCode: preCodeSlots
  }),
  render: () => (
    <div
      style={{
        minHeight: '500px',
        padding: '20px',
        display: 'flex'
      }}
    >
      <Switch label="Label" hasBackground />
    </div>
  )
};
