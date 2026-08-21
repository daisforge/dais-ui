/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { ModalDF } from '@ui-kit/components/ModalDF';
import type { StoriesRef } from '@ui-kit/components/Stories';
import { Stories } from '@ui-kit/components/Stories';
import { BodyS } from '@ui-kit/components/Typography';
import { br, s } from '@ui-kit/constants';
import { surfaceAccentMinor, surfaceInfo } from '@ui-kit/tokens';
import React, { useRef, useState } from 'react';

const meta: Meta<typeof Stories> = {
  title: 'Локальные компоненты/Stories',
  component: Stories,
  tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj<typeof Stories>;

// Демо-ассеты как inline SVG — работают офлайн, без внешних URL.
const asset = (label: string, from: string, to: string): string =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="430" height="760"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="430" height="760" fill="url(#g)"/><text x="215" y="380" font-family="sans-serif" font-size="34" fill="#ffffff" text-anchor="middle">${label}</text></svg>`,
  )}`;

// Индикатор «просмотрено» контролируется снаружи. Гасим обводку сразу при
// ПЕРВОМ открытии группы — по onGroupChange (он срабатывает и в момент открытия),
// не дожидаясь просмотра всех сегментов. Если нужно гасить только после полного
// просмотра группы — используйте onGroupComplete вместо onGroupChange.
function useViewed() {
  const [viewed, setViewed] = useState<Record<number, boolean>>({});
  const markViewed = (index: number) =>
    setViewed((prev) => ({ ...prev, [index]: true }));
  return { viewed, markViewed };
}

function CircleStoriesExample() {
  const { viewed, markViewed } = useViewed();

  return (
    <Stories defaultDuration={5000} onGroupChange={markViewed}>
      <Stories.Preview
        title="Обновления"
        image={asset('1', '#08c6c9', '#99b0fe')}
        viewed={viewed[0]}
        slides={[
          {
            src: asset('Слайд 1', '#08c6c9', '#4f8ef7'),
            footer: (
              <Button
                size="s"
                view="accent"
                stretching="filled"
                text="Подробнее"
                onClick={() => undefined}
              />
            ),
          },
          { src: asset('Слайд 2', '#7b61ff', '#99b0fe') },
          {
            src: asset('Слайд 3', '#00b3a4', '#08c6c9'),
            objectFit: 'contain' as const,
          },
        ]}
      />
      <Stories.Preview
        title="Акции недели"
        image={asset('2', '#f7971e', '#ffd200')}
        viewed={viewed[1]}
        slides={[{ src: asset('Акция', '#f7971e', '#ffd200'), duration: 3000 }]}
      />
      <Stories.Preview
        title="Как это работает"
        image={asset('3', '#c471ed', '#f64f59')}
        viewed={viewed[2]}
        slides={[
          { src: asset('Шаг 1', '#c471ed', '#f64f59') },
          { src: asset('Шаг 2', '#12c2e9', '#c471ed') },
        ]}
      />
    </Stories>
  );
}

const circleCode = `
import { Button, Stories } from '@daisforge/ui';
import { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/Stories/Stories.stories.tsx',
  'CircleStoriesExample',
)}
`;

export const Circle: Story = {
  name: 'Круглые триггеры',
  ...storySourceDoc({ code: circleCode, previewSource: 'shown' }),
  render: CircleStoriesExample,
};

function RectStoriesExample() {
  const { viewed, markViewed } = useViewed();

  return (
    <Stories
      defaultDuration={4000}
      groupTransition="slide"
      onGroupChange={markViewed}
    >
      <Stories.Preview
        shape="rect"
        title="Дайджест"
        image={asset('A', '#08c6c9', '#4f8ef7')}
        viewed={viewed[0]}
        slides={[
          { src: asset('Новость 1', '#08c6c9', '#4f8ef7') },
          { src: asset('Новость 2', '#4f8ef7', '#7b61ff') },
        ]}
      />
      <Stories.Preview
        shape="rect"
        title="Новые возможности"
        image={asset('B', '#00b3a4', '#08c6c9')}
        viewed={viewed[1]}
        slides={[
          {
            src: asset('Фича', '#00b3a4', '#08c6c9'),
            footer: (
              <Button
                size="s"
                view="accent"
                stretching="filled"
                as="a"
                href="#"
                text="Открыть"
              />
            ),
          },
        ]}
      />
    </Stories>
  );
}

const rectCode = `
import { Button, Stories } from '@daisforge/ui';

${getFuncAsString(
  'packages/storybook/src/stories/Stories/Stories.stories.tsx',
  'RectStoriesExample',
)}
`;

export const Rect: Story = {
  name: 'Прямоугольные триггеры',
  ...storySourceDoc({ code: rectCode, previewSource: 'shown' }),
  render: RectStoriesExample,
};

function LoadingStoriesExample() {
  const { viewed, markViewed } = useViewed();

  // loadingDelay + отключённая ховер-предзагрузка — чтобы разглядеть спиннер на подложке.
  return (
    <Stories
      loadingDelay={2000}
      preloadOnHover={false}
      onGroupChange={markViewed}
    >
      <Stories.Preview
        title="Загрузка"
        image={asset('⏳', '#08c6c9', '#99b0fe')}
        viewed={viewed[0]}
        slides={[
          { src: asset('Ассет 1', '#08c6c9', '#4f8ef7') },
          { src: asset('Ассет 2', '#7b61ff', '#99b0fe') },
        ]}
      />
    </Stories>
  );
}

const loadingCode = `
import { Stories } from '@daisforge/ui';

${getFuncAsString(
  'packages/storybook/src/stories/Stories/Stories.stories.tsx',
  'LoadingStoriesExample',
)}
`;

export const Loading: Story = {
  name: 'Спиннер загрузки (эмуляция)',
  ...storySourceDoc({ code: loadingCode, previewSource: 'shown' }),
  render: LoadingStoriesExample,
};

function ErrorStateExample() {
  return (
    <Stories>
      <Stories.Preview
        title="Битый ассет"
        image={asset('!', '#8a959d', '#30373c')}
        slides={[{ src: 'data:image/png;base64,not-a-valid-image' }]}
      />
    </Stories>
  );
}

const errorCode = `
import { Stories } from '@daisforge/ui';

${getFuncAsString(
  'packages/storybook/src/stories/Stories/Stories.stories.tsx',
  'ErrorStateExample',
)}
`;

export const ErrorState: Story = {
  name: 'Ошибка: дефолтный EmptyState + ретрай',
  ...storySourceDoc({ code: errorCode, previewSource: 'shown' }),
  render: ErrorStateExample,
};

function ErrorCustomExample() {
  // renderError — свой контент при ошибке загрузки (ctx.retry перезагружает ассет).
  // Отступы 28px по краям баннера добавляет сам компонент.
  return (
    <Stories
      renderError={({ retry }) => (
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: s.x4,
            alignItems: 'center',
            width: '100%',
            padding: s.x8,
            borderRadius: br.s,
            border: `1px solid ${surfaceInfo}`,
            color: surfaceInfo,
            backgroundColor: surfaceAccentMinor,
            textAlign: 'center',
          }}
        >
          <BodyS>Свой контент при ошибке загрузки</BodyS>
          <Button size="s" view="secondary" text="Повторить" onClick={retry} />
        </div>
      )}
    >
      <Stories.Preview
        title="Кастомная ошибка"
        image={asset('!', '#8a959d', '#30373c')}
        slides={[{ src: 'data:image/png;base64,broken-custom' }]}
      />
    </Stories>
  );
}

const errorCustomCode = `
import { BodyS, Button, Stories, surfaceAccentMinor, surfaceInfo } from '@daisforge/ui';
import { br, s } from '@daisforge/ui/constants';

${getFuncAsString(
  'packages/storybook/src/stories/Stories/Stories.stories.tsx',
  'ErrorCustomExample',
)}
`;

export const ErrorCustom: Story = {
  name: 'Ошибка: кастомный контент (renderError)',
  ...storySourceDoc({ code: errorCustomCode, previewSource: 'shown' }),
  render: ErrorCustomExample,
};

function ImperativeControlExample() {
  const ref = useRef<StoriesRef>(null);
  const { viewed, markViewed } = useViewed();
  const [state, setState] = useState({ open: false, group: 0, slide: 0 });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Button
          size="s"
          text="Открыть группу 1"
          onClick={() => ref.current?.open(0)}
        />
        <Button
          size="s"
          text="Открыть группу 2"
          onClick={() => ref.current?.open(1)}
        />
        <span>
          {state.open
            ? `Открыто: группа ${state.group}, слайд ${state.slide}`
            : 'Закрыто'}
        </span>
      </div>
      <Stories
        ref={ref}
        onGroupChange={markViewed}
        onOpenChange={(open, groupMeta) =>
          setState((prev) => ({ ...prev, open, group: groupMeta.groupIndex }))
        }
        onSlideChange={(group, slide) =>
          setState((prev) => ({ ...prev, group, slide }))
        }
      >
        <Stories.Preview
          title="Группа 1"
          image={asset('1', '#08c6c9', '#99b0fe')}
          viewed={viewed[0]}
          slides={[
            { src: asset('1.1', '#08c6c9', '#4f8ef7') },
            { src: asset('1.2', '#4f8ef7', '#7b61ff') },
          ]}
        />
        <Stories.Preview
          title="Группа 2"
          image={asset('2', '#f7971e', '#ffd200')}
          viewed={viewed[1]}
          slides={[
            { src: asset('2.1', '#f7971e', '#ffd200') },
            { src: asset('2.2', '#f64f59', '#c471ed') },
            { src: asset('2.3', '#12c2e9', '#c471ed') },
          ]}
        />
      </Stories>
    </div>
  );
}

const imperativeCode = `
import { Button, Stories, StoriesRef } from '@daisforge/ui';
import { useRef, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/Stories/Stories.stories.tsx',
  'ImperativeControlExample',
)}
`;

export const ImperativeControl: Story = {
  name: 'Внешнее управление через ref',
  ...storySourceDoc({ code: imperativeCode, previewSource: 'shown' }),
  render: ImperativeControlExample,
};

function InsideModalExample() {
  const { viewed, markViewed } = useViewed();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button
        size="s"
        text="Открыть модалку со сторями"
        onClick={() => setOpened(true)}
      />
      <ModalDF opened={opened} onClose={() => setOpened(false)}>
        <ModalDF.Main>
          <ModalDF.Header
            title="Сторис внутри модалки"
            subTitle="Клик по кружку открывает вьюер поверх модалки (zIndex выше оверлея ModalDF)"
          />
          <ModalDF.Content>
            {/* zIndex выше оверлея ModalDF, чтобы вьюер перекрыл модалку */}
            <Stories zIndex={10000} onGroupChange={markViewed}>
              <Stories.Preview
                title="Промо"
                image={asset('1', '#08c6c9', '#99b0fe')}
                viewed={viewed[0]}
                slides={[
                  { src: asset('Слайд 1', '#08c6c9', '#4f8ef7') },
                  { src: asset('Слайд 2', '#7b61ff', '#99b0fe') },
                ]}
              />
              <Stories.Preview
                title="Новости"
                image={asset('2', '#f7971e', '#ffd200')}
                viewed={viewed[1]}
                slides={[{ src: asset('Новость', '#f7971e', '#ffd200') }]}
              />
            </Stories>
          </ModalDF.Content>
        </ModalDF.Main>
      </ModalDF>
    </>
  );
}

const insideModalCode = `
import { Button, ModalDF, Stories } from '@daisforge/ui';
import { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/Stories/Stories.stories.tsx',
  'InsideModalExample',
)}
`;

export const InsideModal: Story = {
  name: 'Триггеры внутри ModalDF',
  ...storySourceDoc({ code: insideModalCode, previewSource: 'shown' }),
  render: InsideModalExample,
};

function HiddenArrowsExample() {
  const { viewed, markViewed } = useViewed();

  // arrows="never" — стрелки навигации скрыты; сегменты и группы листаются тапом/клавишами ←/→.
  return (
    <Stories arrows="never" onGroupChange={markViewed}>
      <Stories.Preview
        title="Группа 1"
        image={asset('1', '#08c6c9', '#99b0fe')}
        viewed={viewed[0]}
        slides={[{ src: asset('Слайд 1', '#08c6c9', '#4f8ef7') }]}
      />
      <Stories.Preview
        title="Группа 2"
        image={asset('2', '#f7971e', '#ffd200')}
        viewed={viewed[1]}
        slides={[{ src: asset('Слайд 2', '#f7971e', '#ffd200') }]}
      />
      <Stories.Preview
        title="Группа 3"
        image={asset('3', '#c471ed', '#f64f59')}
        viewed={viewed[2]}
        slides={[{ src: asset('Слайд 3', '#c471ed', '#f64f59') }]}
      />
    </Stories>
  );
}

const hiddenArrowsCode = `
import { Stories } from '@daisforge/ui';

${getFuncAsString(
  'packages/storybook/src/stories/Stories/Stories.stories.tsx',
  'HiddenArrowsExample',
)}
`;

export const HiddenArrows: Story = {
  name: 'Стрелки скрыты (arrows="never")',
  ...storySourceDoc({ code: hiddenArrowsCode, previewSource: 'shown' }),
  render: HiddenArrowsExample,
};

function TitlesExample() {
  const { viewed, markViewed } = useViewed();

  return (
    <Stories onGroupChange={markViewed}>
      <Stories.Preview
        title="Очень длинное название сторис, которое не помещается в две строки и уходит в троеточие с тултипом"
        image={asset('L', '#08c6c9', '#99b0fe')}
        viewed={viewed[0]}
        slides={[{ src: asset('Слайд', '#08c6c9', '#4f8ef7') }]}
      />
      <Stories.Preview
        title="Слева"
        titleProps={{ style: { textAlign: 'left' } }}
        image={asset('◀', '#f7971e', '#ffd200')}
        viewed={viewed[1]}
        slides={[{ src: asset('Слайд', '#f7971e', '#ffd200') }]}
      />
      <Stories.Preview
        title="Крупнее, не жирный, цветной"
        titleProps={{ variant: 'BodyS', bold: false, color: '#08c6c9' }}
        image={asset('●', '#7b61ff', '#99b0fe')}
        viewed={viewed[2]}
        slides={[{ src: asset('Слайд', '#7b61ff', '#99b0fe') }]}
      />
      <Stories.Preview
        title="Справа"
        titleProps={{ style: { textAlign: 'right' } }}
        image={asset('▶', '#c471ed', '#f64f59')}
        viewed={viewed[3]}
        slides={[{ src: asset('Слайд', '#c471ed', '#f64f59') }]}
      />
    </Stories>
  );
}

const titlesCode = `
import { Stories } from '@daisforge/ui';

${getFuncAsString(
  'packages/storybook/src/stories/Stories/Stories.stories.tsx',
  'TitlesExample',
)}
`;

export const Titles: Story = {
  name: 'Подписи: 2 строки, ellipsis, выравнивание',
  ...storySourceDoc({ code: titlesCode, previewSource: 'shown' }),
  render: TitlesExample,
};
