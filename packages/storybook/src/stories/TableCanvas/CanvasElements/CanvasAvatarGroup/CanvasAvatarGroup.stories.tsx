import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { http, HttpResponse } from 'msw';
import React, { useMemo } from 'react';

import {
  avatarCopyText,
  avatarFixtureSource,
  avatarItems,
  createAvatarSvg,
} from '../CanvasAvatar/avatarFixtures';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatarGroup',
  tags: ['!autodocs'],
  parameters: {
    msw: {
      handlers: [
        http.get(
          '/canvas-images/virtual/:person',
          ({ params }) =>
            new HttpResponse(
              createAvatarSvg({ variant: Number(params.person) }),
              {
                headers: { 'Content-Type': 'image/svg+xml' },
              },
            ),
        ),
      ],
    },
  },
};
export default meta;
const preCode = `
import React, { useMemo } from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type CanvasAvatarItem } from '@daisforge/ui/components/TableCanvas';

${avatarFixtureSource}
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/avatarFixtures.ts',
  'avatarCopyText',
)}
`;

function VirtualTable() {
  const rows = useMemo(() => {
    const cases = [
      { label: '5 → 3 +2', items: avatarItems, total: 5, visible: 3 },
      {
        label: '2 загружено из 5',
        items: avatarItems.slice(0, 2),
        total: 5,
        visible: 3,
      },
      { label: 'Пустая группа', items: [], total: 0, visible: 3 },
      { label: 'Известен только total', items: [], total: 5, visible: 3 },
      { label: 'visibleCount=0', items: avatarItems, total: 5, visible: 0 },
    ];
    return Array.from({ length: 700 }, (_, id) => {
      const scenario = cases[id % cases.length]!;
      return {
        ...scenario,
        id,
        label: `Строка ${id + 1}: ${scenario.label}`,
        items: scenario.items.map((item, index) => ({
          ...item,
          url: `/canvas-images/virtual/${index}?row=${id}`,
        })),
      };
    });
  }, []);
  const columns = useMemo<ColumnConfig<(typeof rows)[number]>[]>(
    () => [
      { key: 'label', name: 'Строка и сценарий', width: 280 },
      ...[200, 60].map<ColumnConfig<(typeof rows)[number]>>((width) => ({
        key: `team-${width}`,
        name: width === 60 ? 'Узко' : 'Группа',
        width,
        copyData: (row) => avatarCopyText(row.items, row.total),
        renderCell: ({ row }) => (
          <Canvas.Container padding={8}>
            <Canvas.AvatarGroup
              items={row.items}
              totalCount={row.total}
              visibleCount={row.visible}
            />
          </Canvas.Container>
        ),
      })),
    ],
    [],
  );
  return (
    <TableCanvas
      rows={rows}
      columnConfig={columns}
      tableConfig={{ rowHeight: 44, containerStyle: { height: '360px' } }}
    />
  );
}
export const Virtualized: StoryObj = {
  name: 'Количество участников, узкая колонка и прокрутка',
  ...storySourceDoc({
    preCode: `${preCode}
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx',
  'VirtualTable',
)}`,
    type: 'code',
    previewSource: 'hidden',
  }),
  render: () => (
    <>
      <p>
        700 строк с разным количеством участников в обычной и узкой колонках. У
        каждой строки свои URL фотографий — прокрутите таблицу, чтобы увидеть
        загрузку новых изображений.
      </p>
      <VirtualTable />
    </>
  ),
};
