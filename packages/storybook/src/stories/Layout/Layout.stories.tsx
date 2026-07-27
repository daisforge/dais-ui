import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import { PageTitle } from '@ui-kit/components/PageTitle';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import { IconClock } from '@ui-kit/icons';
import { Layout, LAYOUT_VARIANTS, LayoutProps } from '@ui-kit/layouts/Layout';
import React, { useState } from 'react';

import { someText } from './data';

const meta: Meta<LayoutProps> = {
  title: 'Композиции/Layout',
  component: Layout,
  argTypes: {
    variant: {
      options: Object.keys(LAYOUT_VARIANTS),
      control: { type: 'select' },
      description: 'Вариант раскладки страницы',
      table: {
        type: {
          summary: 'LayoutVariant',
          detail: `type LayoutVariant = ${Object.keys(LAYOUT_VARIANTS).join(
            ' | '
          )}`
        }
      }
    },
    headerSlot: {
      description: 'Контент для хедера страницы',
      table: {
        type: {
          summary: 'ReactNode'
        }
      }
    },
    mainSlot: {
      description: 'Основной контент страницы',
      table: {
        type: {
          summary: 'ReactNode | ReactNode[]'
        }
      }
    },
    customSpacing: {
      description: 'Кастомные отступы для раскладки',
      table: {
        type: {
          summary: 'LayoutSpacing',
          detail: `{
  horizontal?: string;
  vertical?: string;
  gutter?: string;
  headerHeight?: string;
}`
        }
      }
    },
    classes: {
      description: 'Классы для стилизации компонента',
      table: {
        type: {
          summary: 'string | LayoutClasses',
          detail: `{
  root?: string;
  header?: string;
  main?: string;
  item?: string;
  centeredItem?: string;
}`
        }
      }
    }
  },
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj<LayoutProps>;

const DefaultContent = () => {
  const items = Array(4).fill(0);
  const [index, setIndex] = useState(0);

  return (
    <Flow orientation="vertical" mainAxisGap={10} style={{ padding: '0.5rem' }}>
      <Tabs view="filled" stretch size="xs">
        {items.map((_, i) => (
          <TabItem
            view="secondary"
            size="xs"
            selected={i === index}
            tabIndex={0}
            contentLeft={<IconClock size="xs" color="inherit" />}
            onClick={() => setIndex(i)}
          >
            {`Label${i + 1}`}
          </TabItem>
        ))}
      </Tabs>
      <h3>Flex</h3>
      <Flow crossAxisGap={10} mainAxisGap={10} orientation="horizontal">
        <Box $css={{ minWidth: '150px', background: '#ffffdf' }}>Текст 1</Box>
        <Box $css={{ minWidth: '150px', background: '#ffffdf' }}>Текст 2</Box>
        <Box $css={{ minWidth: '150px', background: '#ffffdf' }}>Текст 3</Box>
      </Flow>
      <h3>Grid</h3>
      <Box
        $css={{
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '10px'
        }}
      >
        <Box $css={{ background: '#dfffff ' }}>Текст</Box>
        <Box $css={{ background: '#dfffff ' }}>Текст</Box>
        <Box $css={{ background: '#dfffff ' }}>Текст</Box>
        <Box $css={{ background: '#dfffff ' }}>Текст</Box>
      </Box>
      <p>{someText}</p>
    </Flow>
  );
};

const DefaultHeader = (
  <Box width="100%" height="100%" background="#ffdfdf">
    <PageTitle
      breadcrumbs={{
        items: [{ title: 'Главная', href: '#' }, { title: 'Раздел' }]
      }}
      title="Заголовок страницы"
      subtitle="Описание страницы или подзаголовок"
      titleSlot={
        <Button size="xs" view="secondary">
          Действие
        </Button>
      }
      rightSlot={
        <Flow mainAxisGap={8}>
          <Button size="s" view="secondary">
            Отмена
          </Button>
          <Button size="s" view="accent">
            Сохранить
          </Button>
        </Flow>
      }
    />
  </Box>
);
/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const V1_1: Story = {
  args: {
    variant: 'V1_1',
    headerSlot: DefaultHeader,
    mainSlot: (
      <Box width="100%" height="100%" background="#dfffdf">
        <DefaultContent />
      </Box>
    )
  },
  name: 'V1_1: Одноколоночная',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const V2_1: Story = {
  args: {
    variant: 'V2_1',
    headerSlot: DefaultHeader,
    mainSlot: [
      <Box width="100%" height="100%" key="left" background="#dfffdf">
        <DefaultContent />
      </Box>,
      <Box width="100%" height="100%" key="right" background="#dfdfff">
        <DefaultContent />
      </Box>
    ]
  },
  name: 'V2_1: Две колонки (основная слева)',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const V2_2: Story = {
  args: {
    variant: 'V2_2',
    headerSlot: DefaultHeader,
    mainSlot: [
      <Box key="left" background="#dfffdf" width="100%" height="100%">
        <DefaultContent />
      </Box>,
      <Box key="right" background="#dfdfff" width="100%" height="100%">
        <DefaultContent />
      </Box>
    ]
  },
  name: 'V2_2: Две колонки (основная справа)',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const V3_1: Story = {
  args: {
    variant: 'V3_1',
    headerSlot: DefaultHeader,
    mainSlot: [
      <Box key="left" background="#dfffdf" width="100%" height="100%">
        <DefaultContent />
      </Box>,
      <Box key="right" background="#dfdfff" width="100%" height="100%">
        <DefaultContent />
      </Box>
    ]
  },
  name: 'V3_1: Две колонки справа узкая',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const V3_2: Story = {
  args: {
    variant: 'V3_2',
    headerSlot: DefaultHeader,
    mainSlot: [
      <Box key="left" background="#dfffdf" width="100%" height="100%">
        <DefaultContent />
      </Box>,
      <Box key="right" background="#dfdfff" width="100%" height="100%">
        <DefaultContent />
      </Box>
    ]
  },
  name: 'V3_2: Две колонки слева узкая',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const V3_3: Story = {
  args: {
    variant: 'V3_3',
    headerSlot: DefaultHeader,
    mainSlot: [
      <Box key="left" background="#dfffdf" width="100%" height="100%">
        <DefaultContent />
      </Box>,
      <Box key="center" background="#ffdfff" width="100%" height="100%">
        <DefaultContent />
      </Box>,
      <Box key="right" background="#dfdfff" width="100%" height="100%">
        <DefaultContent />
      </Box>
    ]
  },
  name: 'V3_3: Три колонки (центр шире)',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const V4_1: Story = {
  args: {
    variant: 'V4_1',
    headerSlot: DefaultHeader,
    mainSlot: [
      <Box key="left" background="#dfffdf" width="100%" height="100%">
        <DefaultContent />
      </Box>,
      <Box key="right" background="#dfdfff" width="100%" height="100%">
        <DefaultContent />
      </Box>
    ]
  },
  name: 'V4_1: Две равные колонки',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const V4_2: Story = {
  args: {
    variant: 'V4_2',
    headerSlot: DefaultHeader,
    mainSlot: [
      <Box key="left" background="#dfffdf" width="100%" height="100%">
        <DefaultContent />
      </Box>,
      <Box key="center" background="#ffdfff" width="100%" height="100%">
        <DefaultContent />
      </Box>,
      <Box key="right" background="#dfdfff" width="100%" height="100%">
        <DefaultContent />
      </Box>
    ]
  },
  name: 'V4_2: Три равные колонки',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const V5_1: Story = {
  args: {
    variant: 'V5_1',
    headerSlot: DefaultHeader,
    mainSlot: [
      <Box key="left" background="#dfffdf" width="100%" height="100%">
        <DefaultContent />
      </Box>,
      <Box key="right" background="#dfdfff" width="100%" height="100%">
        <DefaultContent />
      </Box>
    ]
  },
  name: 'V5_1: Фиксир. слева + центрир.',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * #### Кастомные отступы для раскладки
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const CustomSpacing: Story = {
  args: {
    variant: 'V1_1',
    headerSlot: DefaultHeader,
    mainSlot: (
      <Box width="100%" height="100%" background="#dfffdf">
        <DefaultContent />
      </Box>
    ),
    customSpacing: {
      horizontal: 'auto',
      vertical: '24px',
      gutter: '32px',
      headerHeight: '250px'
    }
  },
  name: 'Кастомные отступы',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};

/**
 * #### Кастомные классы для элементов
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const CustomClasses: Story = {
  args: {
    variant: 'V1_1',
    headerSlot: DefaultHeader,
    mainSlot: (
      <Box width="100%" height="100%" background="#dfffdf">
        <DefaultContent />
      </Box>
    ),
    classes: {
      root: 'custom-root-class',
      header: 'custom-header-class',
      main: 'custom-main-class'
    }
  },
  name: 'Кастомные классы',
  parameters: {
    docs: {
      source: {
        format: 'dedent'
      }
    }
  }
};
