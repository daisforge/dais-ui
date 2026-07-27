/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import { ModalDFConfirmation } from '@ui-kit/components/ModalDFConfirmation';
import { s } from '@ui-kit/constants';
import { IconPlasma } from '@ui-kit/icons';
import React, { useState } from 'react';

const meta: Meta<typeof ModalDFConfirmation> = {
  title: 'Локальные компоненты/ModalDFConfirmation',
  parameters: {
    docs: {
      layout: 'fullscreen'
    }
  },
  tags: ['!autodocs'],
  component: ModalDFConfirmation
};

export default meta;

type Story = StoryObj<typeof ModalDFConfirmation>;

function SavingExampleRender() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDFConfirmation
        opened={opened}
        onClose={() => setOpened(false)}
        contentContainerProps={{
          css: { maxWidth: '500px' }
        }}
        content={{
          header: 'Сохранить изменения перед выходом?',
          body: 'У вас есть несохранённые данные. При выходе без сохранения восстановить их будет невозможно',
          bodyMarginBlock: s.x4,
          mainButton: { text: 'Сохранить' },
          secondaryButton: {
            text: 'Выйти без сохранения'
          }
        }}
      />
    </>
  );
}

function VariantsExampleRender() {
  const [openedPositive, setOpenedPositive] = useState(false);
  const [openedWarning, setOpenedWarning] = useState(false);
  const [openedAccent, setOpenedAccent] = useState(false);
  const [openedNegative, setOpenedNegative] = useState(false);
  return (
    <>
      <div style={{ display: 'flex', gap: s.x2 }}>
        <Button view="positive" onClick={() => setOpenedPositive(true)}>
          Открыть модальное окно
        </Button>
        <Button view="warning" onClick={() => setOpenedWarning(true)}>
          Открыть модальное окно
        </Button>
        <Button view="accent" onClick={() => setOpenedAccent(true)}>
          Открыть модальное окно
        </Button>
        <Button view="negative" onClick={() => setOpenedNegative(true)}>
          Открыть модальное окно
        </Button>
      </div>
      <ModalDFConfirmation
        view="positive"
        icon={<IconPlasma />}
        opened={openedPositive}
        onClose={() => setOpenedPositive(false)}
        contentContainerProps={{
          css: { maxWidth: '500px' }
        }}
        content={{
          header: 'Изменения сохранены',
          body: 'Данные были сохранены. Можно закрыть форму и продолжить пользоваться услугами',
          bodyMarginBlock: s.x4,
          mainButton: { text: 'Далее', view: 'positive' }
        }}
      />
      <ModalDFConfirmation
        view="warning"
        icon={<IconPlasma />}
        opened={openedWarning}
        onClose={() => setOpenedWarning(false)}
        contentContainerProps={{
          css: { maxWidth: '500px' }
        }}
        content={{
          header: 'Что-то пошло не так',
          body: 'Произошла ошибка. Нужно проверить введенные данные',
          bodyMarginBlock: s.x4,
          mainButton: { text: 'Сохранить', view: 'warning' },
          secondaryButton: {
            text: 'Выйти без сохранения'
          }
        }}
      />
      <ModalDFConfirmation
        view="info"
        icon={<IconPlasma />}
        opened={openedAccent}
        onClose={() => setOpenedAccent(false)}
        contentContainerProps={{
          css: { maxWidth: '500px' }
        }}
        content={{
          header: 'Сохранить изменения перед выходом?',
          body: 'У вас есть несохранённые данные. При выходе без сохранения восстановить их будет невозможно',
          bodyMarginBlock: s.x4,
          mainButton: { text: 'Сохранить' },
          secondaryButton: {
            text: 'Выйти без сохранения'
          }
        }}
      />
      <ModalDFConfirmation
        view="negative"
        icon={<IconPlasma />}
        opened={openedNegative}
        onClose={() => setOpenedNegative(false)}
        contentContainerProps={{
          css: { maxWidth: '432px' }
        }}
        content={{
          header: 'Удалить данные?',
          body: 'Если удалить данные, восстановить их и продолжить работу будет невозможно',
          mainButton: { text: 'Удалить', view: 'negative' },
          secondaryButton: {
            text: 'Отменить',
            onClick: () => setOpenedNegative(false)
          }
        }}
      />
    </>
  );
}

function CustomFooterExampleRender() {
  const [opened, setOpened] = useState(false);
  const description =
    'Добавьте кастомный футер, когда нужно встроить нестандартные кнопки или дополнительный контент.';

  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть модальное окно</Button>
      <ModalDFConfirmation
        opened={opened}
        onClose={() => setOpened(false)}
        content={{
          header: 'Заголовок модального окна',
          body: description,
          footer: (
            <ModalDFConfirmation.Footer
              leftBlock={<Button size="s" text="Кнопка" view="clear" />}
              rightBlock={
                <Flow mainAxisGap={s.x4}>
                  <Button size="s" view="secondary" text="Кнопка 2" />
                  <Button size="s" view="accent" text="Кнопка 1" />
                </Flow>
              }
            />
          )
        }}
      />
    </>
  );
}

const savingExamplePreCode = `
import { Button, ModalDFConfirmation } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/ModalDFConfirmation/ModalDFConfirmation.stories.tsx',
  'SavingExampleRender'
)}
`;

const variantsExamplePreCode = `
import { Button, ModalDFConfirmation } from '@daisforge/ui';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/ModalDFConfirmation/ModalDFConfirmation.stories.tsx',
  'VariantsExampleRender'
)}
`;

const customFooterExamplePreCode = `
import { Button, Flow, ModalDFConfirmation } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import React, { useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/ModalDFConfirmation/ModalDFConfirmation.stories.tsx',
  'CustomFooterExampleRender'
)}
`;

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const SavingExample: Story = {
  name: 'Пример сохранения',
  ...storySourceDoc({
    previewSource: 'shown',
    code: savingExamplePreCode
  }),
  render: SavingExampleRender
};

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const VariantsExample: Story = {
  name: 'Примеры разных view и иконок',
  ...storySourceDoc({
    previewSource: 'shown',
    code: variantsExamplePreCode
  }),
  render: VariantsExampleRender
};

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const CustomFooterExample: Story = {
  name: 'Пример c кастомным footer-oм',
  ...storySourceDoc({
    previewSource: 'shown',
    code: customFooterExamplePreCode
  }),
  render: CustomFooterExampleRender
};
