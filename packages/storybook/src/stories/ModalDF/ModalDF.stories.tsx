/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import { Link } from '@ui-kit/components/Link';
import { ModalDF, ModalDFProps } from '@ui-kit/components/ModalDF';
import { TextS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { useState } from 'react';

import { longLorem, shortLorem } from '../DrawerDF/data';

const meta: Meta<ModalDFProps> = {
  title: 'Локальные компоненты/ModalDF',
  parameters: {
    docs: {
      layout: 'fullscreen',
    },
  },
  tags: ['!autodocs'],
  component: ModalDF,
};

export default meta;

type Story = StoryObj<ModalDFProps>;

function ModalDFWithOneContentExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDF opened={opened} onClose={() => setOpened(false)} fullScreen>
        <ModalDF.Main>
          <ModalDF.Header
            title="Заголовок"
            badge={{ text: 'Бейдж' }}
            subTitle="Подзаголовок"
            showBackButton
            onBackClick={() => {}}
            rightBlock={
              <>
                <Flow mainAxisGap={s.x4} style={{ flexWrap: 'nowrap' }}>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                </Flow>
                <ModalDF.Divider />
                <Flow mainAxisGap={s.x1} style={{ flexWrap: 'nowrap' }}>
                  <ModalDF.DotsIconButton />
                  <Button text="Кнопка 1" size="xs" view="secondary" />
                  <Button text="Кнопка 2" size="xs" view="secondary" />
                </Flow>
              </>
            }
          />

          <ModalDF.Content>{longLorem}</ModalDF.Content>

          <ModalDF.Footer
            leftBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка 1" size="s" view="secondary" />
                <Button text="Кнопка 2" size="s" view="secondary" />
                <ModalDF.DotsIconButton size="s" />
              </Flow>
            }
            rightBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка" size="s" view="secondary" />
                <Button text="Главная кнопка" size="s" view="accent" />
              </Flow>
            }
          />
        </ModalDF.Main>
      </ModalDF>
    </>
  );
}

function ModalDFWithLeftBlockExample() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDF
        opened={opened}
        onClose={() => setOpened(false)}
        fullScreen
        contentContainerProps={{
          css: { '&&': { minWidth: '1000px' } },
        }}
      >
        <ModalDF.Left>
          <ModalDF.Header title="Заголовок 1" subTitle="Подзаголовок 1" />
          <ModalDF.Content>{shortLorem}</ModalDF.Content>
        </ModalDF.Left>

        <ModalDF.Main>
          <ModalDF.Header
            title="Заголовок 2"
            badge={{ text: 'Бейдж 2' }}
            subTitle="Подзаголовок 2"
            rightBlock={
              <>
                <Flow mainAxisGap={s.x4} style={{ flexWrap: 'nowrap' }}>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                </Flow>
                <ModalDF.Divider />
                <Flow mainAxisGap={s.x1} style={{ flexWrap: 'nowrap' }}>
                  <ModalDF.DotsIconButton />
                  <Button text="Кнопка 1" size="xs" view="secondary" />
                  <Button text="Кнопка 2" size="xs" view="secondary" />
                </Flow>
              </>
            }
          />

          <ModalDF.Content>{shortLorem}</ModalDF.Content>

          <ModalDF.Footer
            leftBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка 1" size="s" view="secondary" />
                <Button text="Кнопка 2" size="s" view="secondary" />
                <ModalDF.DotsIconButton size="s" />
              </Flow>
            }
            rightBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка" size="s" view="secondary" />
                <Button text="Главная кнопка" size="s" view="accent" />
              </Flow>
            }
          />
        </ModalDF.Main>
      </ModalDF>
    </>
  );
}

function ModalDFWithBigContentsExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDF
        opened={opened}
        onClose={() => setOpened(false)}
        fullScreen
        contentContainerProps={{
          css: { '&&': { minWidth: '1000px' } },
        }}
      >
        <ModalDF.Left>
          <ModalDF.Header
            title="Заголовок 1"
            badge={{ text: 'Бейдж 1' }}
            subTitle="Заголовок 1"
          />

          <ModalDF.Content>{longLorem}</ModalDF.Content>
          <ModalDF.Footer
            rightBlock={<Button view="secondary" size="s" text="Кнопка" />}
          />
        </ModalDF.Left>
        <ModalDF.Main>
          <ModalDF.Header
            title="Заголовок 2"
            badge={{ text: 'Бейдж 2' }}
            subTitle="Подзаголовок 2"
            rightBlock={
              <>
                <Flow mainAxisGap={s.x4} style={{ flexWrap: 'nowrap' }}>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                  <TextS>
                    <Link href={window.location.href} view="accent">
                      ссылка
                    </Link>
                  </TextS>
                </Flow>
                <ModalDF.Divider />
                <Flow mainAxisGap={s.x1} style={{ flexWrap: 'nowrap' }}>
                  <ModalDF.DotsIconButton />
                  <Button text="Кнопка 1" size="xs" view="secondary" />
                  <Button text="Кнопка 2" size="xs" view="secondary" />
                </Flow>
              </>
            }
          />

          <ModalDF.Content>{longLorem}</ModalDF.Content>

          <ModalDF.Footer
            leftBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка 1" size="s" view="secondary" />
                <Button text="Кнопка 2" size="s" view="secondary" />
                <ModalDF.DotsIconButton size="s" />
              </Flow>
            }
            rightBlock={
              <Flow mainAxisGap={s.x4}>
                <Button text="Кнопка" size="s" view="secondary" />
                <Button text="Главная кнопка" size="s" view="accent" />
              </Flow>
            }
          />
        </ModalDF.Main>
      </ModalDF>
    </>
  );
}

function ModalDFEmptyExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDF opened={opened} onClose={() => setOpened(false)} fullScreen>
        <ModalDF.Main>
          <ModalDF.ServiceButtons
            $css={{ marginLeft: 'auto', paddingBottom: s.x8 }}
          />
          <ModalDF.Content>{longLorem}</ModalDF.Content>
        </ModalDF.Main>
      </ModalDF>
    </>
  );
}

const modalDFWithOneContentPreCode = `
import {
  Button,
  Flow,
  Link,
  ModalDF,
  TextS,
} from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { longLorem } from '../DrawerDF/data';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/ModalDF/ModalDF.stories.tsx',
  'ModalDFWithOneContentExample',
)}
`;

const modalDFWithLeftBlockPreCode = `
import {
  Button,
  Flow,
  Link,
  ModalDF,
  TextS,
} from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { shortLorem } from '../DrawerDF/data';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/ModalDF/ModalDF.stories.tsx',
  'ModalDFWithLeftBlockExample',
)}
`;

const modalDFWithBigContentsPreCode = `
import {
  Button,
  Flow,
  Link,
  ModalDF,
  TextS,
} from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { longLorem } from '../DrawerDF/data';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/ModalDF/ModalDF.stories.tsx',
  'ModalDFWithBigContentsExample',
)}
`;

const modalDFEmptyPreCode = `
import { Button, ModalDF } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { longLorem } from '../DrawerDF/data';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/ModalDF/ModalDF.stories.tsx',
  'ModalDFEmptyExample',
)}
`;

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const ModalDFWithOneContent: Story = {
  name: 'ModalDF',
  ...storySourceDoc({
    previewSource: 'shown',
    code: modalDFWithOneContentPreCode,
  }),
  render: ModalDFWithOneContentExample,
};

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const ModalDFWithLeftBlock: Story = {
  name: 'ModalDF с доп. блоком слева',
  ...storySourceDoc({
    previewSource: 'shown',
    code: modalDFWithLeftBlockPreCode,
  }),
  render: ModalDFWithLeftBlockExample,
};

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const ModalDFWithBigContents: Story = {
  name: 'ModalDF с большим количеством контента',
  ...storySourceDoc({
    previewSource: 'shown',
    code: modalDFWithBigContentsPreCode,
  }),
  render: ModalDFWithBigContentsExample,
};

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const ModalDFEmpty: Story = {
  name: 'ModalDF без шапки и футера',
  ...storySourceDoc({
    previewSource: 'shown',
    code: modalDFEmptyPreCode,
  }),
  render: ModalDFEmptyExample,
};
