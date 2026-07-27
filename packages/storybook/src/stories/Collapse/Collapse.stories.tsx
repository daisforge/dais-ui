import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Collapse, CollapseProps } from '@ui-kit/components/Collapse';
import React, { FC, useState } from 'react';

const StoryRender: FC<CollapseProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Button onClick={() => setIsOpen((p) => !p)}>
        {isOpen ? 'Закрыть' : 'Открыть'}
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Button onClick={() => setIsOpen((p) => !p)}>
          {isOpen ? 'Закрыть' : 'Открыть'}
        </Button>
      </Collapse>
    </Box>
  );
};

const meta: Meta<CollapseProps> = {
  title: 'Локальные компоненты/Collapse',
  component: Collapse,
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj<CollapseProps>;

export const Default: Story = {
  name: 'Collapse',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                    import { Box, Button, Collapse } from '@dais-ui/ui-kit';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} {...args}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `
      }
    }
  },
  render: (args) => <StoryRender {...args} />
};

/**
 * Просом `orientation` можно задавать направление открытия/закрытия.
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal'
  },
  name: 'Горизонтальная ориентация',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                    import { Box, Button, Collapse } from '@dais-ui/ui-kit';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} orientation={'horizontal'}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `
      }
    }
  },
  render: (args) => <StoryRender {...args} />
};

/**
 * `unMountOnClose: true` - При закрытии элемента, элемент будет размонтирован

 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Unmount: Story = {
  args: {
    unMountOnClose: true
  },
  name: 'Unmount',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                    import { Box, Button, Collapse } from '@dais-ui/ui-kit';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} unMountOnClose>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `
      }
    }
  },
  render: (args) => <StoryRender {...args} />
};

/**
 * Есть возможность задать длительность анимации `duration: number` в секундах.
 * В данном примере анимация длится 5 секунд
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Duration: Story = {
  args: {
    duration: 5
  },
  name: 'Длительность анимации',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                    import { Box, Button, Collapse } from '@dais-ui/ui-kit';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} duration={5}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `
      }
    }
  },
  render: (args) => <StoryRender {...args} />
};

/**
 * Есть возможность задать тип анимации (default - `linear`). [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
 *
 * `animation?: TransitionTimingFunction | { open: TransitionTimingFunction, close: TransitionTimingFunction }`
 *
 * В данном примере анимация раскрытия `steps(3)`, а анимация закрытия `cubic-bezier(.29, 1.01, 1, -0.68)`
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Animation: Story = {
  args: {
    animation: {
      open: 'steps(3)',
      close: 'cubic-bezier(.29, 1.01, 1, -0.68)'
    },
    duration: 2
  },
  name: 'Тип анимации',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                    import { Box, Button, Collapse } from '@dais-ui/ui-kit';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse
                                isOpen={isOpen}
                                duration={2}
                                animation={{
                                    open: 'steps(3)',
                                    close: 'cubic-bezier(.29, 1.01, 1, -0.68)',
                                }}
                            >
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `
      }
    }
  },
  render: (args) => <StoryRender {...args} />
};

/**
 * Есть возможность контролировать размер раскрытия контейнера `sizeOnOpen`.
 * В данном примере контейнер раскрывается на `20px`.
 *
 * *`Collapse` работает более корректно, когда установлен размер*
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const OpenedSize: Story = {
  args: {
    sizeOnOpen: 20
  },
  name: 'Размер открытого контейнера',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                    import { Box, Button, Collapse } from '@dais-ui/ui-kit';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} sizeOnOpen={20}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `
      }
    }
  },
  render: (args) => <StoryRender {...args} />
};

/**
 * Есть возможность контролировать размер контейнера в закрытом состоянии `sizeOnClose`.
 * В данном примере контейнер недоскрывается на `20px`.
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const ClosedSize: Story = {
  args: {
    sizeOnClose: 20
  },
  name: 'Размер закрытого контейнера',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        code: `
                    import { Box, Button, Collapse } from '@dais-ui/ui-kit';

                    const [isOpen, setIsOpen] = useState(false);

                    return (
                        <Box display="flex" flexDirection="column" gap={16}>
                            <Button onClick={() => setIsOpen((p) => !p)}>
                                {isOpen ? 'Закрыть' : 'Открыть'}
                            </Button>
                            <Collapse isOpen={isOpen} sizeOnClose={20}>
                                <Button onClick={() => setIsOpen((p) => !p)}>
                                    {isOpen ? 'Закрыть' : 'Открыть'}
                                </Button>
                            </Collapse>
                        </Box>
                    );
                `
      }
    }
  },
  render: (args) => <StoryRender {...args} />
};
