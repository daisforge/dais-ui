/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { DrawerDF } from '@ui-kit/components/DrawerDF';
import { Flow } from '@ui-kit/components/Flow';
import { s } from '@ui-kit/constants';
import React, { useState } from 'react';

import { longLorem, shortLorem } from './data';
import { TabsComp } from './Tabs';

const meta: Meta<typeof DrawerDF> = {
  title: 'Локальные компоненты/DrawerDF',
  parameters: {
    docs: {
      layout: 'fullscreen'
    }
  },
  component: DrawerDF,
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj<typeof DrawerDF>;

function DrawerWithOneMainContentExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть drawer</Button>
      <DrawerDF
        opened={opened}
        onClose={() => setOpened(false)}
        header={
          <DrawerDF.Header
            title="Заголовок дровера"
            subTitle="Подзаголовок здесь"
            badge={{ text: 'Label' }}
            rightBlock={
              <Flow
                mainAxisGap={s.x1}
                style={{ flexWrap: 'nowrap', gap: s.x4 }}
              >
                <DrawerDF.DotsIconButton />
                <Button text="Вторичная 1" size="xs" view="secondary" />
              </Flow>
            }
            footerBlock={<TabsComp stretch />}
          />
        }
        main={<DrawerDF.Content>{longLorem}</DrawerDF.Content>}
        footer={
          <DrawerDF.Footer
            $css={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button view="clear" size="xs">
              Очистить
            </Button>
            <div>
              <Button view="secondary" size="xs">
                Действие 1
              </Button>
              <Button view="accent" size="xs" style={{ marginLeft: 8 }}>
                Главная кнопка
              </Button>
            </div>
          </DrawerDF.Footer>
        }
      />
    </>
  );
}

function DrawerWithMultipleContentExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть drawer</Button>
      <DrawerDF
        opened={opened}
        onClose={() => setOpened(false)}
        width="fit-content"
        header={
          <DrawerDF.Header
            title="Заголовок дровера"
            subTitle="Подзаголовок здесь"
            badge={{ text: 'Label' }}
            rightBlock={
              <Flow
                mainAxisGap={s.x1}
                style={{ flexWrap: 'nowrap', gap: s.x4 }}
              >
                <DrawerDF.DotsIconButton />
                <Button text="Вторичная 1" size="xs" view="secondary" />
                <Button text="Главная кнопка" size="xs" view="accent" />
              </Flow>
            }
            footerBlock={<TabsComp stretch />}
          />
        }
        main={[
          <DrawerDF.Content key="left" fixedWidth="150px">
            <Button view="accent" size="xs">
              Обосновать
            </Button>
            {shortLorem}
          </DrawerDF.Content>,
          <DrawerDF.Content key="middle" fixedWidth="50%">
            {longLorem}
          </DrawerDF.Content>,
          <DrawerDF.Content key="right-1">{shortLorem}</DrawerDF.Content>,
          <DrawerDF.Content key="right-2">{shortLorem}</DrawerDF.Content>
        ]}
      />
    </>
  );
}

function DrawerSingleContentNoHeaderExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>
        Открыть drawer (одиночный контент)
      </Button>
      <DrawerDF
        opened={opened}
        onClose={() => setOpened(false)}
        width="560px"
        main={<DrawerDF.Content>{longLorem}</DrawerDF.Content>}
      />
    </>
  );
}

function DrawerWithBackButtonExample() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть drawer с back</Button>
      <DrawerDF
        opened={opened}
        onClose={() => setOpened(false)}
        showBackButton
        onBackClick={() => setOpened(false)}
        header={
          <DrawerDF.Header
            title="Заголовок с кнопкой назад"
            subTitle="Кнопка назад закрывает drawer"
            rightBlock={
              <Flow
                mainAxisGap={s.x1}
                style={{ flexWrap: 'nowrap', gap: s.x4 }}
              >
                <DrawerDF.DotsIconButton />
                <Button text="Вторичная" size="xs" view="secondary" />
              </Flow>
            }
          />
        }
        main={<DrawerDF.Content>{longLorem}</DrawerDF.Content>}
        footer={
          <DrawerDF.Footer
            $css={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button view="clear" size="xs">
              Очистить
            </Button>
            <div>
              <Button view="secondary" size="xs">
                Действие 1
              </Button>
              <Button view="accent" size="xs" style={{ marginLeft: 8 }}>
                Действие 2
              </Button>
            </div>
          </DrawerDF.Footer>
        }
      />
    </>
  );
}

const drawerWithOneMainContentCode = `
import { Button, DrawerDF, Flow } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { longLorem } from './data';
import { TabsComp } from './Tabs';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx',
  'DrawerWithOneMainContentExample'
)}
`;

const drawerWithMultipleContentCode = `
import { Button, DrawerDF, Flow } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { longLorem, shortLorem } from './data';
import { TabsComp } from './Tabs';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx',
  'DrawerWithMultipleContentExample'
)}
`;

const drawerSingleContentNoHeaderCode = `
import { Button, DrawerDF } from '@daisforge/ui';
import { longLorem } from './data';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx',
  'DrawerSingleContentNoHeaderExample'
)}
`;

const drawerWithBackButtonCode = `
import { Button, DrawerDF, Flow } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { longLorem } from './data';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx',
  'DrawerWithBackButtonExample'
)}
`;

export const DrawerWithOneMainContent: Story = {
  name: 'DrawerDF with one content',
  ...storySourceDoc({
    previewSource: 'shown',
    code: drawerWithOneMainContentCode
  }),
  render: DrawerWithOneMainContentExample
};

export const DrawerDFWithMultipleMainContent: Story = {
  name: 'DrawerDF with multiple content',
  ...storySourceDoc({
    previewSource: 'shown',
    code: drawerWithMultipleContentCode
  }),
  render: DrawerWithMultipleContentExample
};

export const DrawerWithSingleContentNoHeaderNoFooter: Story = {
  name: 'DrawerDF with single content (no header, no footer)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: drawerSingleContentNoHeaderCode
  }),
  render: DrawerSingleContentNoHeaderExample
};

export const DrawerWithBackButton: Story = {
  name: 'DrawerDF with back button',
  ...storySourceDoc({
    previewSource: 'shown',
    code: drawerWithBackButtonCode
  }),
  render: DrawerWithBackButtonExample
};
