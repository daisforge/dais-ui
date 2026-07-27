import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import { BodyL } from '@ui-kit/components/Typography';
import { Container, ContainerProps } from '@ui-kit/layouts/Container';
import React from 'react';

const meta: Meta<ContainerProps> = {
  title: 'Композиции/Container',
  component: Container,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <Box height={200}>
        <Story />
      </Box>
    )
  ],
  argTypes: {
    children: {
      description: `Контент контейнера. В split-режиме принимает массив из 2 или 3 элементов
      (для view '1/1/1' и '1/3/1' требуется 3 элемента)`,
      table: {
        defaultValue: { summary: 'undefined' },
        type: {
          summary:
            'ReactNode | [ReactElement, ReactElement] | [ReactElement, ReactElement, ReactElement]'
        }
      }
    },
    stretch: {
      description: 'Растянуть контейнер на все доступное пространство',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    split: {
      description: `Разделить контейнер на колонки.
                \n В \`children\` при этом нужно передать массив элементов:
                \n - 2 элемента для view: '30/70', '20/80', '70/30', '80/20', 'fixed-fluid'
                \n - 3 элемента для view: '1/1/1', '1/3/1'`,
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    view: {
      options: [
        '30/70',
        '20/80',
        '70/30',
        '80/20',
        '1/1/1',
        '1/3/1',
        'fixed-fluid'
      ],
      control: { type: 'select' },
      description: `Варианты отображения колонок:
            \n - '30/70', '20/80', '70/30', '80/20' - две колонки с разным соотношением
            \n - '1/1/1' - три равные колонки
            \n - '1/3/1' - две узкие колонки по бокам (20%) и широкая в центре (60%)
            \n - 'fixed-fluid' - фиксированная левая колонка и гибкая правая
            \n Можно задать только когда \`split === true\``,
      table: {
        defaultValue: { summary: '30/70' }
      }
    },
    className: {
      description: `prop для задания class-а`,
      table: {
        defaultValue: { summary: 'undefined' },
        type: {
          summary: 'string | undefined'
        }
      }
    },
    css: {
      description: `prop для задания стилей`,
      table: {
        type: {
          summary: 'CSSObject | string | undefined'
        },
        defaultValue: { summary: 'undefined' }
      }
    },
    fixedWidth: {
      description: `Ширина фиксированной колонки (только для view='fixed-fluid')`,
      table: {
        type: {
          summary: 'string | undefined'
        },
        defaultValue: { summary: '288px' }
      },
      if: { arg: 'view', eq: 'fixed-fluid' }
    }
  }
};

export default meta;

type Story = StoryObj<ContainerProps>;

export const Default: Story = {
  name: 'Контейнер',
  args: {
    children: (
      <Box height="100%" background="#ffdfdf">
        <BodyL>Some content in container</BodyL>
      </Box>
    )
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                    import { BodyL, Box, Container } from '@dais-ui/ui-kit';

                    <Box height={200}>
                        <Container>
                            <Box height="100%" background="#ffdfdf">
                               <BodyL>Some content in container</BodyL>
                            </Box>
                        </Container>
                    </Box>
                `
      }
    }
  }
};

export const Stretch: Story = {
  args: {
    children: <Box height="100%" background="#ffdfdf" />,
    stretch: true
  },
  name: 'Растянуть',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                import { BodyL, Box, Container } from '@dais-ui/ui-kit';

                <Box height={200}>
                    <Container stretch>
                        <Box height="100%" background="#ffdfdf" />
                    </Container>
                </Box>
            `
      }
    }
  }
};

export const Split: Story = {
  args: {
    children: [
      <Box height="100%" background="#ffdfdf" />,
      <Box height="100%" background="#dfffdf" />
    ],
    stretch: true,
    split: true,
    view: '30/70'
  },
  name: 'Сплит (30/70)',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                import { Box, Container } from '@dais-ui/ui-kit';

                <Box height={200}>
                    <Container stretch split view="30/70">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                    </Container>
                </Box>
            `
      }
    }
  }
};

export const SplitThreeEqualColumns: Story = {
  args: {
    children: [
      <Box key="left" height="100%" background="#ffdfdf" />,
      <Box key="center" height="100%" background="#dfffdf" />,
      <Box key="right" height="100%" background="#dfdfff" />
    ],
    stretch: true,
    split: true,
    view: '1/1/1'
  },
  name: 'Сплит (1/1/1)',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                import { Box, Container } from '@dais-ui/ui-kit';

                <Box height={200}>
                    <Container stretch split view="1/1/1">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                        <Box height="100%" background="#dfdfff" />
                    </Container>
                </Box>
            `
      }
    }
  }
};

export const SplitWideCenterColumn: Story = {
  args: {
    children: [
      <Box key="left" height="100%" background="#ffdfdf" />,
      <Box key="center" height="100%" background="#dfffdf" />,
      <Box key="right" height="100%" background="#dfdfff" />
    ],
    stretch: true,
    split: true,
    view: '1/3/1'
  },
  name: 'Сплит (1/3/1)',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                import { Box, Container } from '@dais-ui/ui-kit';

                <Box height={400}>
                    <Container stretch split view="1/3/1">
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                        <Box height="100%" background="#dfdfff" />
                    </Container>
                </Box>
            `
      }
    }
  }
};

export const SplitFixedFluid: Story = {
  args: {
    children: [
      <Box key="left" height="100%" background="#ffdfdf" />,
      <Box key="right" height="100%" background="#dfffdf" />
    ],
    stretch: true,
    split: true,
    view: 'fixed-fluid',
    fixedWidth: '300px'
  },
  name: 'Сплит (fixed-fluid)',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                import { Box, Container } from '@dais-ui/ui-kit';

                <Box height={200}>
                    <Container stretch split view="fixed-fluid" >
                        <Box height="100%" background="#ffdfdf" />
                        <Box height="100%" background="#dfffdf" />
                    </Container>
                </Box>
            `
      }
    }
  }
};
