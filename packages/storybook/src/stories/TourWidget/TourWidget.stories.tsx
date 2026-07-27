import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { TourWidget } from '@ui-kit/components/TourWidget';

import {
  HorizontalExample,
  PulseExample,
  TourWithoutContentExample,
  TourWithPulseExample,
  VerticalExample
} from './TourWidget.examples';

const meta: Meta<typeof TourWidget> = {
  title: 'Локальные компоненты/TourWidget',
  component: TourWidget,
  tags: ['!autodocs'],
  parameters: {
    docs: {
      toc: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof TourWidget>;

const tourImports = `import { ViewContainer } from '@dais-ui/ui-kit';
import { Box, Button, LinkButton, TourWidget } from '@dais-ui/ui-kit';
import React, { useState } from 'react';`;

const tourWithPulseImports = `import { ViewContainer } from '@dais-ui/ui-kit';
import { Box, Button, LinkButton, TourWidget } from '@dais-ui/ui-kit';
import { tourPulseMixin } from '@dais-ui/ui-kit/mixins';
import React, { useState } from 'react';
import { css } from 'styled-components';`;

const pulseImports = `import { ViewContainer } from '@dais-ui/ui-kit';
import { Box } from '@dais-ui/ui-kit';
import { tourPulseMixin } from '@dais-ui/ui-kit/mixins';
import React from 'react';
import { css } from 'styled-components';`;

const tourHelpersCode = [
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'clampStep'
  ),
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'TourView'
  ),
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'MediaPlaceholder'
  )
].join('\n\n');

const pulseHelpersCode = [
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'TourView'
  ),
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'PulseTarget'
  )
].join('\n\n');

const verticalCode = [
  tourImports,
  tourHelpersCode,
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'VerticalExample'
  )
].join('\n\n');

const horizontalCode = [
  tourImports,
  tourHelpersCode,
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'HorizontalExample'
  )
].join('\n\n');

const tourWithPulseCode = [
  tourWithPulseImports,
  tourHelpersCode,
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'PulseTarget'
  ),
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'TourWithPulseExample'
  )
].join('\n\n');

const pulseCode = [
  pulseImports,
  pulseHelpersCode,
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'PulseExample'
  )
].join('\n\n');

const tourWithoutContentCode = [
  tourWithPulseImports,
  tourHelpersCode,
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'PulseTarget'
  ),
  getFuncAsString(
    'packages/storybook/src/stories/TourWidget/TourWidget.examples.tsx',
    'TourWithoutContentExample'
  )
].join('\n\n');

export const Vertical: Story = {
  name: 'Вертикальный тур',
  ...storySourceDoc({ code: verticalCode, previewSource: 'shown' }),
  render: VerticalExample
};

export const Horizontal: Story = {
  name: 'Горизонтальный тур',
  ...storySourceDoc({ code: horizontalCode, previewSource: 'shown' }),
  render: HorizontalExample
};

export const TourWithPulse: Story = {
  name: 'Тур рядом с пульсацией',
  ...storySourceDoc({ code: tourWithPulseCode, previewSource: 'shown' }),
  render: TourWithPulseExample
};

export const Pulse: Story = {
  name: 'Пульсация',
  ...storySourceDoc({ code: pulseCode, previewSource: 'shown' }),
  render: PulseExample
};

export const TourWithoutContent: Story = {
  name: 'Тур без контента',
  ...storySourceDoc({ code: tourWithoutContentCode, previewSource: 'shown' }),
  render: TourWithoutContentExample
};
