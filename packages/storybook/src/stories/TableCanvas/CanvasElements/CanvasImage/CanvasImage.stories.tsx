import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  type ColumnConfig,
  type ImageFit,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React from 'react';

import { createAvatarImage } from '../CanvasAvatar/avatarFixtures';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasImage',
  tags: ['!autodocs'],
};
export default meta;
function ImageFitsExample() {
  const rows = [
    {
      id: 0,
      image: 'wide',
      src: createAvatarImage({ width: 192, height: 96 }),
    },
    {
      id: 1,
      image: 'tall',
      src: createAvatarImage({ width: 96, height: 192, variant: 1 }),
    },
    {
      id: 2,
      image: 'transparent',
      src: createAvatarImage({
        width: 192,
        height: 96,
        transparent: true,
        variant: 2,
      }),
    },
  ];
  const columns: ColumnConfig<(typeof rows)[number]>[] = [
    'cover',
    'contain',
    'fill',
  ].map((fit) => ({
    key: fit,
    name: fit,
    width: 170,
    copyData: (row) => row.image,
    renderCell: ({ row, theme }) => (
      <Canvas.Container padding={8}>
        <Canvas.Container
          position="relative"
          style={{ width: 88, height: 88 }}
          tooltip={`${row.image}: ${fit}`}
        >
          <Canvas.Image
            src={row.src}
            fit={fit as ImageFit}
            style={{ width: 88, height: 88 }}
          />
          <Canvas.Rect
            position="absolute"
            left={0}
            top={0}
            style={{ width: 88, height: 88 }}
            borderColor={theme.tokens.outlineAccent}
            borderWidth={1}
            zIndex={1}
          />
        </Canvas.Container>
      </Canvas.Container>
    ),
  }));
  return (
    <TableCanvas
      rows={rows}
      columnConfig={columns}
      tableConfig={{ rowHeight: 104, containerStyle: { height: '390px' } }}
    />
  );
}

// Парсер meta-info ожидает getFuncAsString без завершающей запятой.
// prettier-ignore
const exampleCode = `
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type ImageFit } from '@daisforge/ui/components/TableCanvas';
import { createAvatarImage } from '../CanvasAvatar/avatarFixtures';

${getFuncAsString('packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx', 'ImageFitsExample')}
`;

export const Fits: StoryObj = {
  name: 'Режимы вписывания',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden',
  }),
  render: ImageFitsExample,
};
