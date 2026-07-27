/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '@ui-kit/components/Accordion';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Dropdown } from '@ui-kit/components/Dropdown';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { IconButton } from '@ui-kit/components/IconButton';
import type {
  LeftPanelProps,
  LeftPanelSlotSizesProps
} from '@ui-kit/components/LeftPanel';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import { List, ListItem } from '@ui-kit/components/List';
import {
  SegmentGroup,
  SegmentItem,
  SegmentProvider
} from '@ui-kit/components/Segment';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { BodyS, H2, H4, Typography } from '@ui-kit/components/Typography';
import { Widget } from '@ui-kit/components/Widget';
import { br, s } from '@ui-kit/constants';
import {
  IconGroupOutline,
  IconHierarchy,
  IconPinFill,
  IconSearch
} from '@ui-kit/icons';
import {
  surfaceAccentMinor,
  surfaceInfo,
  surfaceSolidCard
} from '@ui-kit/tokens';
import { useState } from 'react';
import styled from 'styled-components';

const meta: Meta<LeftPanelProps> = {
  title: 'Композиции/LeftPanel',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      toc: true
    },
    layout: 'fullscreen'
  },
  component: LeftPanel
};

export default meta;

type Story = StoryObj<LeftPanelProps>;

const preCodeSlots = `
    import { useState } from 'react';
    import {
        IconGroupOutline,
    } from '@daisforge/ui/icons';
    import {
        Box,
        Button,
        H2,
        IconButton,
        LeftPanel,
        Widget,
    } from '@daisforge/ui';
    import type { LeftPanelSlotSizesProps } from '@daisforge/ui';
     import { br, s } from '@daisforge/ui/constants';
`;

export const LeftPanelSlots: Story = {
  name: 'LeftPanel со слотами',
  ...storySourceDoc({
    preCode: preCodeSlots
  }),
  render: () => {
    // Состояние отвечает за открытие/закрытие панели
    const [isShow, setIsShow] = useState(false);
    const [width, setWidth] = useState<number | undefined>(360);

    // Вызывается при переключении панели
    const handleToggle = (next: boolean) => {
      setIsShow(next);
      if (next) {
        setWidth(undefined);
      } else {
        setWidth(360);
      }
    };

    // Вызывается для получения изменений ширины
    const handleResize = (width: number) => {
      setWidth(width);
    };

    return (
      <div
        style={{
          height: '100vh',
          padding: '20px',
          display: 'flex',
          backgroundColor: '#f5f5f5'
        }}
      >
        <LeftPanel
          // Максимальная ширина
          maxWidth={360}
          // State для управления ширины
          widthState={[width, setWidth]}
          // Коллбэк, вызывается при смене состояния
          onResize={handleResize}
          // Коллбэк, вызывается при смене состояния
          onToggleCollapse={handleToggle}
          // Управление состоянием панели
          collapseState={[isShow, setIsShow]}
          // Slot для раскрытой панели (рекомендуется использовать widget)
          expandedContent={
            <Widget $css={{ overflow: 'hidden' }}>
              {/* Заголовок виджета */}
              <Widget.Header
                title="Title"
                $css={{
                  overflow: 'hidden'
                }}
                bottomBlock={
                  <Box
                    style={{
                      padding: s.x8,
                      borderRadius: br.s,
                      border: `1px solid ${surfaceInfo}`,
                      color: surfaceInfo,
                      backgroundColor: surfaceAccentMinor
                    }}
                  >
                    <BodyS>Widget.Header bottomBlock</BodyS>
                  </Box>
                }
              />
              {/* Основной контент со скроллом */}
              <Widget.Content>
                <Box
                  style={{
                    padding: s.x8,
                    borderRadius: br.s,
                    border: `1px solid ${surfaceInfo}`,
                    color: surfaceInfo,
                    backgroundColor: surfaceAccentMinor,
                    height: '800px'
                  }}
                >
                  <BodyS>Widget.Content</BodyS>
                </Box>
              </Widget.Content>
              {/* Нижняя часть виджета */}
              <Widget.Footer>
                <Box
                  style={{
                    padding: s.x8,
                    borderRadius: br.s,
                    border: `1px solid ${surfaceInfo}`,
                    color: surfaceInfo,
                    width: '100%',
                    backgroundColor: surfaceAccentMinor
                  }}
                >
                  <BodyS>Widget.Footer</BodyS>
                </Box>
              </Widget.Footer>
            </Widget>
          }
          // Контент в свернутом состоянии
          collapsedContent={({ buttonSize }: LeftPanelSlotSizesProps) => (
            <>
              <IconButton
                size={buttonSize}
                view="accent"
                style={{
                  border: `1px solid ${surfaceInfo}`,
                  backgroundColor: surfaceAccentMinor,
                  color: surfaceInfo
                }}
              >
                <IconGroupOutline />
              </IconButton>
              <IconButton
                size={buttonSize}
                view="accent"
                style={{
                  border: `1px solid ${surfaceInfo}`,
                  backgroundColor: surfaceAccentMinor,
                  color: surfaceInfo
                }}
              >
                <IconGroupOutline />
              </IconButton>
              <IconButton
                size={buttonSize}
                view="accent"
                style={{
                  border: `1px solid ${surfaceInfo}`,
                  backgroundColor: surfaceAccentMinor,
                  color: surfaceInfo
                }}
              >
                <IconGroupOutline />
              </IconButton>
            </>
          )}
          // Нижняя часть в свернутом состоянии
          collapsedFooterContent={({ buttonSize }: LeftPanelSlotSizesProps) => (
            <IconButton
              size={buttonSize}
              view="accent"
              style={{
                border: `1px solid ${surfaceInfo}`,
                backgroundColor: surfaceAccentMinor,
                color: surfaceInfo
              }}
            >
              <IconGroupOutline />
            </IconButton>
          )}
        />
        <div
          style={{
            flex: 1,
            padding: s.x8,
            boxShadow:
              'var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)',
            backgroundColor: surfaceSolidCard,
            borderRadius: s.x8
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <H2 style={{ marginBottom: s.x8 }}>Контент</H2>
            {/* Кнопка управления панелью */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {width && <H4 style={{ marginRight: s.x8 }}>{width}px</H4>}
              <Button onClick={() => handleToggle(!isShow)}>
                Открыть/Закрыть
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const preCodeExample = `
    import { useState } from 'react';
    import {
        IconHierarchy,
        IconSearch,
    } from '@daisforge/ui/icons';
    import {
        Box,
        Button,
        Dropdown,
        H2,
        IconButton,
        LeftPanel,
        LeftPanelProps,
        List,
        ListItem,
        SegmentGroup,
        SegmentItem,
        SegmentProvider,
        TextFieldSearch,
        Widget,
    } from '@daisforge/ui';
     import type { LeftPanelSlotSizesProps } from '@daisforge/ui';
     import { br, s } from '@daisforge/ui/constants';
     import styled from 'styled-components';

`;

const FullWidthListItem = styled(ListItem)`
  & .cell-content {
    width: 100%;
  }
`;

export const LeftPanelExample: Story = {
  name: 'Example',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => {
    // Данные для кнопок
    const items = [
      {
        label: 'label',
        value: 'label1'
      },
      {
        label: 'label',
        value: 'label2'
      }
    ];

    // Данные для списка
    const contentItems = [
      {
        label: 'Основной план',
        value: 'label1'
      },
      {
        label: 'План блока',
        value: 'label2'
      },
      {
        label: 'Персональный план',
        value: 'label3'
      },
      {
        label: 'Журнал публикаций',
        value: 'label4'
      }
    ];

    // Состояние отвечает за открытие/закрытие панели
    const [isShow, setIsShow] = useState(false);
    const [width, setWidth] = useState<number | undefined>(360);

    // Вызывается при переключении панели
    const handleToggle = (next: boolean) => {
      setIsShow(next);
      if (next) {
        setWidth(undefined);
      } else {
        setWidth(360);
      }
    };

    return (
      <div
        style={{
          height: '100vh',
          padding: '20px',
          display: 'flex',
          backgroundColor: '#f5f5f5'
        }}
      >
        <LeftPanel
          // Максимальная ширина
          maxWidth={360}
          widthState={[width, setWidth]}
          // Коллбэк, вызывается при смене состояния
          onToggleCollapse={handleToggle}
          // Управление состоянием панели
          collapseState={[isShow, setIsShow]}
          // Slot для раскрытой панели (рекомендуется использовать widget)
          expandedContent={({ buttonSize }: LeftPanelSlotSizesProps) => (
            <Widget $css={{ overflow: 'hidden' }}>
              <Widget.Header
                title="Title"
                badge={{ text: 'badge', size: 's' }}
                $css={{
                  overflow: 'hidden',
                  columnGap: '56px !important'
                }}
                subTitle={<BodyS>description</BodyS>}
                bottomBlock={
                  <>
                    {/* Группа переключателей */}
                    <SegmentProvider defaultSelected={['item_0']}>
                      <SegmentGroup
                        style={{ marginBottom: s.x8 }}
                        hasBackground
                        size={buttonSize}
                        stretch
                      >
                        {items.map((_, i) => (
                          <SegmentItem
                            view="secondary"
                            // eslint-disable-next-line react/no-array-index-key
                            key={`item:${i}`}
                            value={`item_${i}`}
                            label={`Label ${i + 1}`}
                            size={buttonSize}
                          />
                        ))}
                      </SegmentGroup>
                    </SegmentProvider>

                    <div
                      style={{
                        display: 'flex',
                        gap: s.x4
                      }}
                    >
                      {/* Поле поиска и кнопки */}
                      <TextFieldSearch size={buttonSize} />
                      <IconButton
                        size={buttonSize}
                        view="secondary"
                        style={{ aspectRatio: '1 / 1' }}
                      >
                        <IconGroupOutline />
                      </IconButton>
                      <IconButton
                        size={buttonSize}
                        view="secondary"
                        style={{ aspectRatio: '1 / 1' }}
                      >
                        <IconGroupOutline />
                      </IconButton>
                    </div>
                  </>
                }
              />
              {/* Основной список */}
              <Widget.Content>
                <List>
                  {contentItems.map((_, index) => (
                    <FullWidthListItem>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Typography variant="BodyM">Текст</Typography>
                          <EmbedIconButton size="s" view="default">
                            <IconPinFill size="xs" />
                          </EmbedIconButton>
                        </div>
                        <Accordion size="s" view="clear" stretching="filled">
                          <AccordionItem
                            type="arrow"
                            title="Короткий текст тут"
                          >
                            <List view="default" size="s" variant="tight">
                              <ListItem>
                                Aaa +{' '}
                                {index % 2 === 0
                                  ? 'aaaaa aaaaaaaaa aaaaaaa aaaaaaaaa'.repeat(
                                      // eslint-disable-next-line prettier/prettier
                                      10,
                                    )
                                  : ''}
                              </ListItem>
                            </List>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </FullWidthListItem>
                  ))}
                </List>
              </Widget.Content>
              {/* Нижняя часть виджета */}
              <Widget.Footer>
                <Button size={buttonSize} view="secondary" stretching="filled">
                  Какая-то кнопка
                </Button>
              </Widget.Footer>
            </Widget>
          )}
          // Slot для контента закрытой панели
          collapsedContent={({ buttonSize }: LeftPanelSlotSizesProps) => (
            <>
              <IconButton size={buttonSize} view="secondary">
                <IconSearch />
              </IconButton>
              <IconButton size={buttonSize} view="secondary">
                <IconGroupOutline />
              </IconButton>
              <IconButton size={buttonSize} view="secondary">
                <IconGroupOutline />
              </IconButton>
              <Dropdown items={contentItems} portal="document">
                <IconButton size={buttonSize} view="secondary">
                  <IconHierarchy />
                </IconButton>
              </Dropdown>
            </>
          )}
          //   Slot для ниженй части закрытой панели
          collapsedFooterContent={({ buttonSize }: LeftPanelSlotSizesProps) => (
            <IconButton size={buttonSize} view="secondary">
              <IconGroupOutline />
            </IconButton>
          )}
        />
        <div
          style={{
            flex: 1,
            padding: s.x8,
            boxShadow:
              'var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)',
            backgroundColor: surfaceSolidCard,
            borderRadius: s.x8
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <H2 style={{ marginBottom: s.x8 }}>Контент</H2>
            {/* Кнопка управления панелью */}
            <Button onClick={() => handleToggle(!isShow)}>
              Открыть/Закрыть
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
