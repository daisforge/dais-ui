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

import wideImage from '../CanvasAvatar/images/wide.png';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasImage',
  tags: ['!autodocs'],
};
export default meta;
function ImageFitsExample() {
  const rows = [
    {
      id: 0,
      image: 'Горы',
      src: wideImage,
    },
  ];
  const fits: ImageFit[] = ['cover', 'contain', 'fill'];
  const columns: ColumnConfig<(typeof rows)[number]>[] = fits.map((fit) => ({
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
            fit={fit}
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
      tableConfig={{ rowHeight: 104, containerStyle: { height: '160px' } }}
    />
  );
}

// Парсер meta-info ожидает getFuncAsString без завершающей запятой.
// prettier-ignore
const exampleCode = `
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type ImageFit } from '@daisforge/ui/components/TableCanvas';
import wideImage from '../CanvasAvatar/images/wide.png';

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
