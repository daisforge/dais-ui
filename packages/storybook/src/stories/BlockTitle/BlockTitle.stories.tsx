/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import type {
  BlockTitleProps,
  BlockTitleSlotSizesProps
} from '@ui-kit/components/BlockTitle';
import { BlockTitle } from '@ui-kit/components/BlockTitle';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Chip } from '@ui-kit/components/Chip';
import { IconButton } from '@ui-kit/components/IconButton';
import { BodyS } from '@ui-kit/components/Typography';
import { br, s } from '@ui-kit/constants';
import { IconDotsVerticalCenteredOutline, IconPlasma } from '@ui-kit/icons';
import {
  lightBackgroundPrimary,
  shadowDownSoftS,
  surfaceAccentMinor,
  surfaceInfo,
  surfaceSolidCard
} from '@ui-kit/tokens';

import { LeftPanelBlock } from './components';

const meta: Meta<BlockTitleProps> = {
  title: 'Композиции/BlockTitle',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      toc: true
    },
    layout: 'fullscreen'
  },
  component: BlockTitle
};

export default meta;

type Story = StoryObj<BlockTitleProps>;

const renderRightActionsSlot = ({
  buttonSize,
  actionIconSize
}: BlockTitleSlotSizesProps) => (
  <div style={{ display: 'flex', gap: s.x4 }}>
    <IconButton size={buttonSize} view="secondary">
      <IconDotsVerticalCenteredOutline size={actionIconSize} color="inherit" />
    </IconButton>
    <Button size={buttonSize} view="secondary">
      Label
    </Button>
    <Button size={buttonSize} view="accent">
      Label
    </Button>
  </div>
);

const preCodeSlots = `
    import { useState } from 'react';
    import {
        Box,
        Button,
        IconButton,
        BlockTitle,
        type BlockTitleSlotSizesProps
    } from '@dais-ui/ui-kit';
     import { br, s } from '@dais-ui/ui-kit/constants';
`;

export const BlockTitleSlots: Story = {
  name: 'BlockTitle Slots',
  ...storySourceDoc({
    preCode: preCodeSlots
  }),
  render: () => (
    <div
      style={{
        height: '100vh',
        padding: '20px',
        display: 'flex',
        backgroundColor: lightBackgroundPrimary
      }}
    >
      {/* Компонент левой панели */}
      <LeftPanelBlock />
      <div
        style={{
          flex: 1,
          padding: s.x8,
          boxShadow: shadowDownSoftS,
          backgroundColor: surfaceSolidCard,
          borderRadius: s.x8
        }}
      >
        <BlockTitle
          title="Title"
          description="description"
          titleSize="H5"
          /* Правая и левая иконки */
          titleLeftSlot={({ titleIconSize }: BlockTitleSlotSizesProps) => (
            <IconPlasma size={titleIconSize} />
          )}
          titleRightSlot={({ titleIconSize }: BlockTitleSlotSizesProps) => (
            <IconPlasma size={titleIconSize} />
          )}
          /* Кастомный блок сверху */
          topSlot={
            <Box
              style={{
                padding: s.x8,
                borderRadius: br.s,
                border: `1px solid ${surfaceInfo}`,
                color: surfaceInfo,
                backgroundColor: surfaceAccentMinor
              }}
            >
              <BodyS>BlockTitle topSlot</BodyS>
            </Box>
          }
          /* Правая часть */
          rightSlot={
            <Box
              style={{
                padding: s.x8,
                borderRadius: br.s,
                border: `1px solid ${surfaceInfo}`,
                color: surfaceInfo,
                backgroundColor: surfaceAccentMinor,
                width: '200px'
              }}
            >
              <BodyS>BlockTitle rightSlot</BodyS>
            </Box>
          }
        />
      </div>
    </div>
  )
};

const preCodeExample = `
    import { useState } from 'react';
    import {
        Box,
        Button,
        IconButton,
        BlockTitle,
        type BlockTitleSlotSizesProps
    } from '@dais-ui/ui-kit';
     import { br, s } from '@dais-ui/ui-kit/constants';
`;

export const BlockTitleExample: Story = {
  name: 'BlockTitle Example',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => (
    <div
      style={{
        height: '100vh',
        padding: '20px',
        display: 'flex',
        backgroundColor: lightBackgroundPrimary
      }}
    >
      {/* Компонент левой панели */}
      <LeftPanelBlock />
      <div
        style={{
          flex: 1,
          padding: s.x8,
          boxShadow: shadowDownSoftS,
          backgroundColor: surfaceSolidCard,
          borderRadius: s.x8
        }}
      >
        <BlockTitle
          title="Страница"
          titleSize="H4"
          /* Кастомный блок сверху */
          topSlot={({ titleBadgeSize }: BlockTitleSlotSizesProps) => (
            <div style={{ display: 'flex', gap: s.x2 }}>
              <Badge
                size={titleBadgeSize}
                view="light"
                text="Обновил: 12345678"
              />
              <Badge
                size={titleBadgeSize}
                view="light"
                text="Дата изменения: 03.06.2025, 09:00"
              />
              <Chip size="xs" view="accent" text="Описание" />
            </div>
          )}
          /* Правая часть */
          rightSlot={renderRightActionsSlot}
        />
      </div>
    </div>
  )
};

export const BlockTitleWithBadge: Story = {
  name: 'BlockTitle с Badge',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => (
    <div
      style={{
        height: '100vh',
        padding: '20px',
        display: 'flex',
        backgroundColor: lightBackgroundPrimary
      }}
    >
      <LeftPanelBlock />
      <div
        style={{
          flex: 1,
          padding: s.x8,
          boxShadow: shadowDownSoftS,
          backgroundColor: surfaceSolidCard,
          borderRadius: s.x8
        }}
      >
        <BlockTitle
          title="Title"
          description="Description"
          titleRightSlot={({ titleBadgeSize }: BlockTitleSlotSizesProps) => (
            <Badge
              size={titleBadgeSize}
              view="default"
              text="Label"
              style={{ marginLeft: '12px' }}
            />
          )}
          rightSlot={renderRightActionsSlot}
        />
      </div>
    </div>
  )
};

export const BlockTitleWithBackButton: Story = {
  name: 'BlockTitle с кнопкой назад',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => (
    <div
      style={{
        height: '100vh',
        padding: '20px',
        display: 'flex',
        backgroundColor: lightBackgroundPrimary
      }}
    >
      <LeftPanelBlock />
      <div
        style={{
          flex: 1,
          padding: s.x8,
          boxShadow: shadowDownSoftS,
          backgroundColor: surfaceSolidCard,
          borderRadius: s.x8
        }}
      >
        <BlockTitle
          title="Title"
          titleSize="H3"
          description="Description"
          // eslint-disable-next-line no-alert
          onBackButtonClick={() => alert('onBackClick')}
          titleRightSlot={({ titleBadgeSize }: BlockTitleSlotSizesProps) => (
            <Badge
              size={titleBadgeSize}
              view="default"
              text="Label"
              style={{ marginLeft: '12px' }}
            />
          )}
          rightSlot={renderRightActionsSlot}
        />
      </div>
    </div>
  )
};

export const BlockTitleWithBackButtonAndIcon: Story = {
  name: 'BlockTitle с кнопкой назад и иконкой',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => (
    <div
      style={{
        height: '100vh',
        padding: '20px',
        display: 'flex',
        backgroundColor: lightBackgroundPrimary
      }}
    >
      <LeftPanelBlock />
      <div
        style={{
          flex: 1,
          padding: s.x8,
          boxShadow: shadowDownSoftS,
          backgroundColor: surfaceSolidCard,
          borderRadius: s.x8
        }}
      >
        <BlockTitle
          title="Title"
          description="Description"
          // eslint-disable-next-line no-alert
          onBackButtonClick={() => alert('onBackClick')}
          titleRightSlot={({ titleIconSize }: BlockTitleSlotSizesProps) => (
            <IconPlasma size={titleIconSize} />
          )}
          rightSlot={renderRightActionsSlot}
        />
      </div>
    </div>
  )
};
