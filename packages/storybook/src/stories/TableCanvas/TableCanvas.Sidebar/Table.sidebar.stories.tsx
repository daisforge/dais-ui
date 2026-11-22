import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { TableCanvas } from '@ui-kit/components/TableCanvas';

import {
  ActiveTabCallbackExample,
  ControlledActiveTabExample,
  DefaultOpenExample,
  LeftSidebarExample,
  RightSidebarExample,
  WithCustomTabExample,
} from './Table.sidebar.examples';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Sidebar',
  component: TableCanvas,
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

// prettier-ignore
const withCustomTabCode = `
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { IconInfo } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'createSidebarData')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'WithCustomTabExample')}
`;

// prettier-ignore
const defaultOpenCode = `
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { IconInfo } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'createSidebarData')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'DefaultOpenExample')}
`;

// prettier-ignore
const controlledActiveTabCode = `
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { Button } from '@daisforge/ui';
import { IconInfo, IconSettings } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'createSidebarData')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'ControlledActiveTabExample')}
`;

// prettier-ignore
const activeTabCallbackCode = `
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { IconInfo, IconSettings } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'createSidebarData')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'ActiveTabCallbackExample')}
`;

// prettier-ignore
const leftSidebarCode = `
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { Button, TextFieldSearch, BodyS } from '@daisforge/ui';
import { IconBookOpenOutline, IconDocumentOutline } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'LeftSidebarExample')}
`;

// prettier-ignore
const rightSidebarCode = `
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { Button, BodyS } from '@daisforge/ui';
import { IconBookOpenOutline, IconDocumentOutline } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx', 'RightSidebarExample')}
`;

export const WithCustomTab: Story = {
  name: 'С кастомной вкладкой',
  ...storySourceDoc({
    code: withCustomTabCode,
    previewSource: 'shown',
    type: 'code',
  }),
  render: WithCustomTabExample,
};

export const DefaultOpen: Story = {
  name: 'Открыт по умолчанию на кастомной вкладке',
  ...storySourceDoc({
    code: defaultOpenCode,
    previewSource: 'shown',
    type: 'code',
  }),
  render: DefaultOpenExample,
};

export const ControlledActiveTab: Story = {
  name: 'Внешнее управление активной вкладкой',
  ...storySourceDoc({
    code: controlledActiveTabCode,
    previewSource: 'shown',
    type: 'code',
  }),
  render: ControlledActiveTabExample,
};

export const ActiveTabCallback: Story = {
  name: 'Колбэк активной вкладки',
  ...storySourceDoc({
    code: activeTabCallbackCode,
    previewSource: 'shown',
    type: 'code',
  }),
  render: ActiveTabCallbackExample,
};

export const LeftSidebar: Story = {
  name: 'Левая панель: ширина по активной вкладке',
  ...storySourceDoc({
    code: leftSidebarCode,
    previewSource: 'shown',
    type: 'code',
  }),
  render: LeftSidebarExample,
};

export const RightSidebar: Story = {
  name: 'Правая панель: контент и ширина по активной вкладке',
  ...storySourceDoc({
    code: rightSidebarCode,
    previewSource: 'shown',
    type: 'code',
  }),
  render: RightSidebarExample,
};
