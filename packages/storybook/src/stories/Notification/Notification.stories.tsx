/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import {
  addNotification,
  Notification,
  NotificationsProvider,
} from '@ui-kit/components/Notification';
import { Typography } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconPlasma } from '@ui-kit/icons';
import { textPrimary } from '@ui-kit/tokens';
import React from 'react';

const meta: Meta<typeof Notification> = {
  title: 'Локальные компоненты/Notification',
  component: Notification,
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof Notification>;

function VariantsExampleRender() {
  return (
    <div style={{ display: 'flex', gap: s.x2 }}>
      <NotificationsProvider>
        <Button
          view="positive"
          onClick={() =>
            addNotification(
              {
                id: 'positive-notification',
                view: 'positive',
                title: 'Title',
                icon: <IconPlasma />,
                children: (
                  <Typography variant="TextS" color={textPrimary}>
                    Text
                  </Typography>
                ),
                closeIconType: 'thin',
                actions: (
                  <>
                    <Button
                      size="xxs"
                      view="secondary"
                      style={{ marginRight: '4px' }}
                    >
                      Label
                    </Button>
                    <Button size="xxs" view="secondary">
                      Label
                    </Button>
                  </>
                ),
                layout: 'horizontal',
                width: '459px',
              },
              null,
            )
          }
        >
          Уведомление: positive
        </Button>
        <Button
          view="warning"
          onClick={() =>
            addNotification(
              {
                id: 'warning-notification',
                view: 'warning',
                title: 'Title',
                icon: <IconPlasma />,
                children: (
                  <Typography variant="TextS" color={textPrimary}>
                    Text
                  </Typography>
                ),
                closeIconType: 'thin',
                actions: (
                  <>
                    <Button
                      size="xxs"
                      view="secondary"
                      style={{ marginRight: '4px' }}
                    >
                      Label
                    </Button>
                    <Button size="xxs" view="secondary">
                      Label
                    </Button>
                  </>
                ),
                layout: 'horizontal',
                width: '459px',
              },
              null,
            )
          }
        >
          Уведомление: warning
        </Button>
        <Button
          view="accent"
          onClick={() =>
            addNotification(
              {
                id: 'info-notification',
                view: 'info',
                title: 'Title',
                icon: <IconPlasma />,
                children: (
                  <Typography variant="TextS" color={textPrimary}>
                    Text
                  </Typography>
                ),
                closeIconType: 'thin',
                actions: (
                  <>
                    <Button
                      size="xxs"
                      view="secondary"
                      style={{ marginRight: '4px' }}
                    >
                      Label
                    </Button>
                    <Button size="xxs" view="secondary">
                      Label
                    </Button>
                  </>
                ),
                layout: 'horizontal',
                width: '459px',
              },
              null,
            )
          }
        >
          Уведомление: info
        </Button>
        <Button
          view="negative"
          onClick={() =>
            addNotification(
              {
                id: 'negative-notification',
                view: 'negative',
                title: 'Title',
                icon: <IconPlasma />,
                children: (
                  <Typography variant="TextS" color={textPrimary}>
                    Text
                  </Typography>
                ),
                closeIconType: 'thin',
                actions: (
                  <>
                    <Button
                      size="xxs"
                      view="secondary"
                      style={{ marginRight: '4px' }}
                    >
                      Label
                    </Button>
                    <Button size="xxs" view="secondary">
                      Label
                    </Button>
                  </>
                ),
                layout: 'horizontal',
                width: '459px',
              },
              null,
            )
          }
        >
          Уведомление: negative
        </Button>
      </NotificationsProvider>
    </div>
  );
}

const variantsPreCode = `
import { Button, Notification, NotificationsProvider, addNotification } from '@daisforge/ui';
import { Typography } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { IconPlasma } from '@daisforge/ui/icons';
import { textPrimary } from '@daisforge/ui/tokens';
import React from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/Notification/Notification.stories.tsx',
  'VariantsExampleRender',
)}
`;

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Variants: Story = {
  name: 'Примеры разных view',
  ...storySourceDoc({
    previewSource: 'shown',
    code: variantsPreCode,
  }),
  render: () => <VariantsExampleRender />,
};
