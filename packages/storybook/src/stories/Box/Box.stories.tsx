/* eslint-disable no-alert */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps } from '@ui-kit/components/Box';
import { Link } from '@ui-kit/components/Link';
import { textAccent, textNegative, textPositive } from '@ui-kit/tokens';
import React from 'react';

const meta: Meta<BoxProps> = {
  title: 'Локальные компоненты/Box',
  component: Box,
  args: {
    hidden: false,
  },
  argTypes: {
    $css: {
      description: 'Кастомные стили styled-components для корневого узла',
    },
    as: {
      description:
        'Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонента. (Например: `li`, `p`, `button` и т.д.)',

      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'div' },
        type: { summary: 'string' },
      },
    },
    hidden: {
      description: 'Скрытие элемента',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<BoxProps>;

/**
 *
 * ```ts
 * import { Box, BoxProps } from '@daisforge/ui';
 * ```
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Default: Story = {
  name: 'Box',
  ...storySourceDoc({
    preCode: `
// textAccent - токен акцентного цвета
import { Box, textAccent, textNegative } from '@daisforge/ui';

`,
    previewSource: 'shown',
  }),
  render: () => (
    <Box
      $css={{
        height: '200px',
        width: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        background: textAccent,
        borderRadius: 16,
        color: 'white',
      }}
    >
      Box №1
      <Box height={100} background={textNegative}>
        Box №2
      </Box>
    </Box>
  ),
};

/**
 * `Box` позволяет добавить стили через пропс `$css`, которые трансформируются в хешируемый класс, а не в inline стили.
 * В данном примере стили добавляются через объект `CSSObject`.
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const CSSObject: Story = {
  name: 'Стилизация через CSS Object',
  ...storySourceDoc({
    preCode: `import { Box, textAccent } from '@daisforge/ui';

    `,
    previewSource: 'shown',
  }),

  render: () => (
    <Box
      $css={{
        height: '200px',
        width: '500px',
        background: textAccent,
        borderRadius: 16,
        color: 'white',
      }}
    />
  ),
};

/**
 * В данном примере стили `$css` добавляются через `string`.
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const CSSString: Story = {
  name: 'Стилизация через CSS String',
  ...storySourceDoc({
    preCode: `import { Box, textPositive } from '@daisforge/ui';

    `,
    previewSource: 'shown',
  }),

  render: () => (
    <Box
      $css={`
            height: 100px;
            width: 300px;
            background: ${textPositive};
            border-radius: 8px;
        `}
    />
  ),
};

/**
 * В `Box` заложен функционал стилизации напрямую через `props`. Например можно установть `width`, `background`, `margin` и т.д.
 * В данном примере стили добавляются напрямую через `props`.
 *
 * *Примечание: присутствуют не все варианты стилей из `CSSProperties`.*
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const CSSProps: Story = {
  name: 'Стилизация через props',
  ...storySourceDoc({
    preCode: `import { Box } from '@daisforge/ui';

    `,
    previewSource: 'shown',
  }),

  render: () => (
    <Box
      height={200}
      width={200}
      background="yellow"
      border="8px solid green"
    />
  ),
};

/**
 * `Box` позволяет устанавливать любой React-компонент в качестве корневого узла через пропс `as`.
 * В данном примере в качестве узлового элемента используется `Link` из SDDS.
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`
 */
export const BoxAnyComponent: Story = {
  name: 'React компонент корневого узла',
  ...storySourceDoc({
    preCode: `import { Box, Button } from '@daisforge/ui';

    `,
    previewSource: 'shown',
  }),

  render: () => (
    <Box as={Link} onClick={() => alert('Я кнопка')}>
      Теперь это кнопка (нажми на меня)
    </Box>
  ),
};

/**
 * `Box` позволяет устанавливать любой HTML элемент (через `string`) в качестве корневого узла через пропс `as` (например: `li`, `p`, `input` и т.д.).
 * В данном примере в качестве узлового элемента используется `input`.
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`
 */
export const BoxHtmlComponent: Story = {
  name: 'HTML корневого узла',
  ...storySourceDoc({
    preCode: `import { Box } from '@daisforge/ui';

    `,
    previewSource: 'shown',
  }),

  render: () => <Box as="input" placeholder="Теперь это Input" />,
};
