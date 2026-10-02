import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  type AvatarSize,
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React from 'react';

import { avatarItems, transparentAvatarImage } from './avatarFixtures';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatar',
  tags: ['!autodocs'],
};
export default meta;
function AvatarContentAndSizesExample() {
  const rows = ['s', 'm', 'l', 'xxl'].map((size, id) => ({
    id,
    size: size as AvatarSize,
  }));
  const columns: ColumnConfig<(typeof rows)[number]>[] = [
    {
      key: 'size',
      name: 'Размер',
      width: 110,
      renderCell: ({ row }) => <Canvas.Text>{row.size}</Canvas.Text>,
    },
    ...[
      { key: 'photo', name: 'Фото', url: avatarItems[0]!.url },
      { key: 'initials', name: 'Инициалы' },
      {
        key: 'custom',
        name: 'customText',
        customText: 'AI',
        url: avatarItems[0]!.url,
      },
      {
        key: 'broken',
        name: 'Ошибка первой загрузки',
        url: '/canvas-images/missing.svg',
      },
      {
        key: 'alpha',
        name: 'SVG без фона',
        url: transparentAvatarImage,
      },
    ].map(({ key, name, ...content }) => ({
      key,
      name,
      width: 150,
      copyData: 'Анна Иванова',
      renderCell: ({ row }: { row: (typeof rows)[number] }) => (
        <Canvas.Container padding={8}>
          <Canvas.Avatar
            name="Анна Иванова"
            size={row.size}
            {...content}
            tooltip="Анна Иванова"
          />
        </Canvas.Container>
      ),
    })),
  ];
  return (
    <TableCanvas
      rows={rows}
      columnConfig={columns}
      tableConfig={{ rowHeight: 104, containerStyle: { height: '490px' } }}
    />
  );
}

// Парсер meta-info ожидает getFuncAsString без завершающей запятой.
// prettier-ignore
const exampleCode = `
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type AvatarSize } from '@daisforge/ui/components/TableCanvas';
import { avatarItems, transparentAvatarImage } from './avatarFixtures';

${getFuncAsString('packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx', 'AvatarContentAndSizesExample')}
`;

export const ContentAndSizes: StoryObj = {
  name: 'Содержимое и размеры',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden',
  }),
  render: AvatarContentAndSizesExample,
};
