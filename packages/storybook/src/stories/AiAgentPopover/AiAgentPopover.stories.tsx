/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */

import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { AiAgentPopover } from '@ui-kit/components/AiAgentPopover';
import { Button } from '@ui-kit/components/Button';
import { BodyS, H3 } from '@ui-kit/components/Typography';
import { textSecondary } from '@ui-kit/tokens';
import React from 'react';

const meta: Meta<typeof AiAgentPopover> = {
  title: 'Локальные компоненты/AiAgentPopover',
  component: AiAgentPopover,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AiAgentPopover>;

function PopoverContent({ onClose }: { onClose?: () => void }) {
  return (
    <div
      style={{
        minWidth: '224px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <H3>AI Assistant</H3>
      <BodyS style={{ margin: '8px 0', color: textSecondary }}>
        Пример содержимого AI-ассистента
      </BodyS>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          width: '100%',
          marginTop: 'auto',
        }}
      >
        <Button
          size="s"
          view="secondary"
          onClick={onClose}
          style={{ flexGrow: 1 }}
        >
          Отмена
        </Button>
        <Button size="s" view="accent" style={{ flexGrow: 1 }}>
          Применить
        </Button>
      </div>
    </div>
  );
}

const preCode = `
import { AiAgentPopover } from '@daisforge/ui';

${getFuncAsString(
  'packages/storybook/src/stories/AiAgentPopover/AiAgentPopover.stories.tsx',
  'PopoverContent',
)}

`;

/**
 * Пример с поддержкой ресайза контента popover.
 */
export const Resizable: Story = {
  name: 'Resizable',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render() {
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <AiAgentPopover
          draggable
          defaultPosition="bottom-right"
          dragBoundary={{
            bottom: 10,
            top: 10,
            left: 10,
            right: 10,
          }}
          resizable={() => ({ minWidth: 250 })}
          onResizeStart={() => {
            // eslint-disable-next-line no-console
            console.debug('resize start');
          }}
          onResizeEnd={() => {
            // eslint-disable-next-line no-console
            console.debug('resize end');
          }}
          useStorage
          targetDataAttributes={{
            'data-testid': 'aiAgentPopover',
          }}
        >
          <PopoverContent onClose={() => alert('close')} />
        </AiAgentPopover>
      </div>
    );
  },
};

/**
 * Состояние открытия управляется внутри компонента.
 */
export const Uncontrolled: Story = {
  name: 'Example',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render() {
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <AiAgentPopover
          draggable
          defaultPosition="bottom-right"
          dragBoundary={{
            bottom: 10,
            top: 10,
            left: 10,
            right: 10,
          }}
          onPositionChange={(pos) => {
            // eslint-disable-next-line no-console
            console.debug('pos', pos);
          }}
          useStorage
          targetDataAttributes={{
            'data-testid': 'aiAgentPopover',
          }}
        >
          <PopoverContent onClose={() => alert('close')} />
        </AiAgentPopover>
      </div>
    );
  },
};
