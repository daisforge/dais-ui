import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { TableCanvas } from '@ui-kit/components/TableCanvas';

import { BottomSheetExample } from './TableCanvas.bottomSheet.basic';
import { AllFeaturesExample } from './TableCanvas.bottomSheet.example';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/BottomSheet',
  component: TableCanvas,
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

// prettier-ignore
const basicCode = `
import { Button, IconButton, BodyS } from '@daisforge/ui';
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconChevronDown, IconChevronUp } from '@daisforge/ui/icons';
import React, { useId, useState } from 'react';

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.basic.tsx', 'BottomSheetExample')}

<BottomSheetExample />;
`;

// prettier-ignore
const allFeaturesCode = `
import { Button, IconButton, Switch, TextFieldSearch, BodyS, BodyXS, H5 } from '@daisforge/ui';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type ColumnOrColumnGroupConfig,
  CompactSelection,
  type ControlBlockSize,
  type GridSelection,
  type RowsChangeData,
  type SortColumn,
  TableCanvas,
  type TableConfig,
} from '@daisforge/ui/components/TableCanvas';
import {
  IconBookOpenOutline,
  IconChevronDown,
  IconChevronUp,
  IconDocumentOutline,
  IconInfoCircleOutline,
  IconRefresh,
  IconStar,
} from '@daisforge/ui/icons';
import { outlineSolidPrimary, surfaceInfoMinor, textNegative, textSecondary } from '@daisforge/ui/tokens';
import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';

type BottomSheetRow = {
  id: number | string;
  task: string;
  priority: string;
  issueType: string;
  developer: string;
  complete: number;
  subRows?: BottomSheetRow[];
};

type BottomSheetFilters = {
  priority: string;
  issueType: string[];
  developer: string;
  complete: string;
  globalFilter: string;
};

type BottomSheetSummary = {
  type: 'top' | 'bottom';
  values: Array<{ columnId: string; value: string }>;
};

type BottomSheetDataMode = 'all' | 'pagination' | 'infinity';

type AllFeaturesExampleProps = {
  refTable?: React.ComponentProps<typeof TableCanvas>['refTable'];
  initialCollapsed?: boolean;
  placement?: 'inside' | 'above';
  controlBlockSize?: ControlBlockSize;
  adaptive?: boolean;
  initialError?: boolean;
  initialEmpty?: boolean;
  initialLogHeight?: string | number;
};

type AllFeaturesSettings = {
  structure:
    | 'flat'
    | 'group-tree'
    | 'group-merged'
    | 'subrows-tree'
    | 'subrows-merged';
  dataMode: 'all' | 'pagination' | 'infinity';
  selectionMode: CellsSelectionMode;
  axisSelection: boolean;
  highlight: boolean;
  hover: boolean;
  groupedHeaders: boolean;
  squash: boolean;
  merge: 'none' | 'values' | 'region';
  renderers: boolean;
  tooltips: boolean;
  preview: boolean;
  formats: boolean;
  theme: boolean;
  borders: 'all' | 'horizontal' | 'none' | 'custom';
  variableHeight: boolean;
  headerHeight: '33' | '48';
  unstickyHeader: boolean;
  controlBlockShow: boolean;
  controlBlockSize: ControlBlockSize;
  adaptive: boolean;
  placement: 'inside' | 'above';
  searchOnType: boolean;
  autocomplete: boolean;
  transferEnabled: boolean;
  pasteReadonly: 'skip' | 'abort';
  pasteOverflow: 'truncate' | 'abort';
  pasteValidation: 'none' | 'type-check';
  pasteBroadcast: boolean;
  fillEnabled: boolean;
  fillDirections: 'horizontal' | 'vertical' | 'orthogonal' | 'any';
  allowSubRows: boolean;
};

type AllFeaturesEvent = {
  id: number;
  message: string;
  level: 'info' | 'warning' | 'error';
};

type AllFeaturesChoiceProps = {
  label: string;
  value: string;
  items: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
  disabled?: boolean;
};

type AllFeaturesToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

type AllFeaturesSettingsPanelProps = {
  settings: AllFeaturesSettings;
  onChange: (patch: Partial<AllFeaturesSettings>) => void;
};

type AllFeaturesLogProps = {
  expanded: boolean;
  events: AllFeaturesEvent[];
  onToggle: () => void;
  onClear: () => void;
};

type AllFeaturesNavigationProps = {
  rows: BottomSheetRow[];
  onSelect: (row: BottomSheetRow) => void;
};

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts', 'createBottomSheetRows')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts', 'cloneBottomSheetRows')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts', 'prepareBottomSheetRows')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts', 'applyBottomSheetRowChanges')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts', 'summarizeBottomSheetRows')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.data.ts', 'selectBottomSheetRows')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'AllFeaturesChoice')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'AllFeaturesToggle')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'AllFeaturesSettingsPanel')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'AllFeaturesLog')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'AllFeaturesNavigation')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'createAllFeaturesSettings')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'createAllFeaturesSelection')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'getBottomSheetRowId')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'getBottomSheetChildren')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'findBottomSheetRow')}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/TableCanvas.bottomSheet.example.tsx', 'AllFeaturesExample')}

<AllFeaturesExample />;
`;

export const BottomSheet: Story = {
  name: 'Высота, стрелка и пагинация',
  ...storySourceDoc({ code: basicCode, previewSource: 'shown', type: 'code' }),
  render: BottomSheetExample,
};

export const AllFeatures: Story = {
  name: 'Все возможности таблицы',
  ...storySourceDoc({
    code: allFeaturesCode,
    previewSource: 'hidden',
    type: 'code',
  }),
  render: () => <AllFeaturesExample />,
};
