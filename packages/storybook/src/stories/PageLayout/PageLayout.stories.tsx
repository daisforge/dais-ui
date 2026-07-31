/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Dropdown } from '@ui-kit/components/Dropdown';
import { Flow } from '@ui-kit/components/Flow';
import { IconButton } from '@ui-kit/components/IconButton';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import { List, ListItem } from '@ui-kit/components/List';
import { PageTitle } from '@ui-kit/components/PageTitle';
import { SplitView } from '@ui-kit/components/SplitView';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { Widget } from '@ui-kit/components/Widget';
import { IconGroupOutline, IconHierarchy, IconSearch } from '@ui-kit/icons';
import { Layout } from '@ui-kit/layouts/Layout';
import { PageLayout, PageLayoutProps } from '@ui-kit/layouts/PageLayout';
import { surfaceSolidCard } from '@ui-kit/tokens';
import React, { useState } from 'react';
import styled from 'styled-components';

// ─── Общие styled-хелперы ───────────────────────────────────────────

const HEADER_HEIGHT = 72;

const FixedHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  --global-header-height: ${HEADER_HEIGHT}px;
  background: ${surfaceSolidCard};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
  font-size: 14px;
  gap: 12px;
`;

const FakeHeader = ({ children }: { children: React.ReactNode }) => (
  <FixedHeaderWrapper>
    <PageLayout paddingTop={0} paddingBottom={0} minHeight={0}>
      <HeaderContent>{children}</HeaderContent>
    </PageLayout>
  </FixedHeaderWrapper>
);

const ContentBlock = styled(Box)<{ $bg?: string }>`
  background: ${({ $bg }) => $bg ?? '#f0f0f0'};
  border-radius: 8px;
  padding: 16px;
  min-height: 120px;
`;

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
`;

const MainArea = styled.div`
  flex: 1;
  min-width: 0;
`;

const SidebarContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// ─── Переиспользуемые блоки ─────────────────────────────────────────

const DefaultPageHeader = (
  <PageTitle
    breadcrumbs={{
      items: [{ title: 'Главная', href: '#' }, { title: 'Раздел' }],
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
);

const navItems = [
  { label: 'Дашборд', value: 'dashboard' },
  { label: 'Аналитика', value: 'analytics' },
  { label: 'Отчёты', value: 'reports' },
  { label: 'Справочники', value: 'references' },
  { label: 'Журнал операций', value: 'journal' },
  { label: 'Пользователи', value: 'users' },
  { label: 'Роли и доступы', value: 'roles' },
  { label: 'Настройки', value: 'settings' },
];

const LeftPanelExpandedContent = () => (
  <Widget $css={{ overflow: 'hidden' }}>
    <Widget.Header
      title="Навигация"
      $css={{ overflow: 'hidden' }}
      bottomBlock={<TextFieldSearch />}
    />
    <Widget.Content>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.value}>{item.label}</ListItem>
        ))}
      </List>
    </Widget.Content>
    <Widget.Footer>
      <Button view="secondary" stretching="filled" size="s">
        Все разделы
      </Button>
    </Widget.Footer>
  </Widget>
);

const LeftPanelCollapsedContent = () => (
  <>
    <IconButton size="s" view="secondary">
      <IconSearch />
    </IconButton>
    <IconButton size="s" view="secondary">
      <IconGroupOutline />
    </IconButton>
    <Dropdown items={navItems} portal="document">
      <IconButton size="s" view="secondary">
        <IconHierarchy />
      </IconButton>
    </Dropdown>
  </>
);

const LongContentBlocks = ({ count = 15 }: { count?: number }) => (
  <>
    {Array.from({ length: count }, (_, i) => (
      <ContentBlock key={i} style={{ marginBottom: 12 }}>
        Блок контента #{i + 1}
      </ContentBlock>
    ))}
  </>
);

// ─── preCode для storySourceDoc ─────────────────────────────────────

const preCode = `
    import { useState } from 'react';
    import {
        IconGroupOutline,
        IconHierarchy,
        IconSearch,
    } from '@daisforge/ui/icons';
    import {
        Button,
        Dropdown,
        IconButton,
        Layout,
        LeftPanel,
        List,
        ListItem,
        PageLayout,
        PageTitle,
        SplitView,
        TextFieldSearch,
        Widget,
    } from '@daisforge/ui';
    import styled from 'styled-components';

    const FlexContainer = styled.div\`
      display: flex;
      height: 100%;
    \`;

    const MainArea = styled.div\`
      flex: 1;
      min-width: 0;
    \`;
`;

// ─── Meta ───────────────────────────────────────────────────────────

const meta: Meta<PageLayoutProps> = {
  title: 'Композиции/PageLayout',
  component: PageLayout,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      toc: true,
    },
  },
};

export default meta;

type Story = StoryObj<PageLayoutProps>;

// ─── 1. Basic ───────────────────────────────────────────────────────

/**
 * ##### Базовый пример
 *
 * `PageLayout` + `Layout V1_1` + имитация fixed-шапки микрофронта.
 * Шапка задаёт CSS-переменную `--global-header-height`, `PageLayout`
 * автоматически подхватывает её для `padding-top`.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Basic: Story = {
  name: 'Базовый',
  ...storySourceDoc({ preCode }),
  render: () => (
    <>
      <FakeHeader>Шапка микрофронта (fixed)</FakeHeader>
      <PageLayout>
        <Layout
          variant="V1_1"
          marginBottom="0"
          headerSlot={DefaultPageHeader}
          mainSlot={
            <>
              <ContentBlock>Основной контент</ContentBlock>
              <ContentBlock>Ещё один блок контента</ContentBlock>
            </>
          }
        />
      </PageLayout>
    </>
  ),
};

// ─── 2. WithTwoColumns ──────────────────────────────────────────────

/**
 * ##### Двухколоночная раскладка
 *
 * `PageLayout` + `Layout V2_1` — основная колонка слева, дополнительная справа.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const WithTwoColumns: Story = {
  name: 'Двухколоночная раскладка',
  ...storySourceDoc({ preCode }),
  render: () => (
    <>
      <FakeHeader>Шапка микрофронта (fixed)</FakeHeader>
      <PageLayout>
        <Layout
          variant="V2_1"
          marginBottom="0"
          headerSlot={DefaultPageHeader}
          mainSlot={[
            <ContentBlock key="left" $bg="#dfffdf">
              Левая колонка (основная)
            </ContentBlock>,
            <ContentBlock key="right" $bg="#dfdfff">
              Правая колонка
            </ContentBlock>,
          ]}
        />
      </PageLayout>
    </>
  ),
};

// ─── 3. WithLongContent ─────────────────────────────────────────────

/**
 * ##### Страничный скролл
 *
 * Длинный контент внутри `PageLayout`. `min-height: 100dvh` обеспечивает
 * корректную работу скролла страницы.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const WithLongContent: Story = {
  name: 'Страничный скролл',
  ...storySourceDoc({ preCode }),
  render: () => (
    <>
      <FakeHeader>Шапка микрофронта (fixed)</FakeHeader>
      <PageLayout>
        <Layout
          variant="V1_1"
          marginBottom="0"
          headerSlot={DefaultPageHeader}
          mainSlot={<LongContentBlocks count={20} />}
        />
      </PageLayout>
    </>
  ),
};

// ─── 4. WithSplitView ───────────────────────────────────────────────

/**
 * ##### PageLayout + SplitView
 *
 * Кнопка в шапке toggle-ит sidebar. SplitView подхватывает
 * `--global-header-height` и `--page-layout-padding-bottom` через CSS-переменные.
 * `insidePageLayout` компенсирует padding-inline PageLayout.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
function WithSplitViewTemplate() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <FakeHeader>
        Шапка микрофронта (fixed)
        <Button
          size="xs"
          view={sidebarOpen ? 'secondary' : 'accent'}
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? 'Закрыть сайдбар' : 'Открыть сайдбар'}
        </Button>
      </FakeHeader>
      <PageLayout>
        <SplitView
          insidePageLayout
          mainContent={
            <Layout
              variant="V1_1"
              marginTop="0"
              marginBottom="0"
              paddingTop="16px"
              headerSlot={DefaultPageHeader}
              mainSlot={
                <>
                  <ContentBlock>
                    Основной контент. SplitView с insidePageLayout компенсирует
                    padding-inline PageLayout через отрицательный margin-right.
                  </ContentBlock>
                  <ContentBlock>Ещё один блок</ContentBlock>
                </>
              }
            />
          }
          sidebar={{
            content: (
              <SidebarContent>
                <Widget>
                  <Widget.Header title="Детали" />
                  <Widget.Content>Информация о записи</Widget.Content>
                </Widget>
                <Widget>
                  <Widget.Header title="Действия" />
                  <Widget.Content>
                    <Flow mainAxisGap={8} orientation="vertical">
                      <Button size="s" view="accent" stretching="filled">
                        Утвердить
                      </Button>
                      <Button size="s" view="secondary" stretching="filled">
                        Отклонить
                      </Button>
                    </Flow>
                  </Widget.Content>
                </Widget>
              </SidebarContent>
            ),
            isOpened: sidebarOpen,
            defaultWidthPercent: 30,
          }}
        />
      </PageLayout>
    </>
  );
}

const withSplitViewCode = `${preCode}
${getFuncAsString(
  'packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx',
  'WithSplitViewTemplate',
)}
`;

export const WithSplitView: Story = {
  name: 'SplitView (toggle sidebar)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: withSplitViewCode,
  }),
  render: WithSplitViewTemplate,
};

// ─── 5. SplitViewWithLongContent ────────────────────────────────────

/**
 * ##### SplitView + длинный контент
 *
 * Основной контент скроллится, sidebar остаётся на месте (sticky).
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
function SplitViewLongContentTemplate() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <FakeHeader>
        Шапка микрофронта (fixed)
        <Button
          size="xs"
          view="secondary"
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? 'Скрыть' : 'Показать'} сайдбар
        </Button>
      </FakeHeader>
      <PageLayout>
        <SplitView
          insidePageLayout
          mainContent={
            <Layout
              variant="V1_1"
              marginTop="0"
              marginBottom="0"
              paddingTop="16px"
              headerSlot={DefaultPageHeader}
              mainSlot={<LongContentBlocks count={25} />}
            />
          }
          sidebar={{
            content: (
              <SidebarContent>
                <Widget>
                  <Widget.Header title="Фильтры" />
                  <Widget.Content>
                    Sticky sidebar — не скроллится вместе с основным контентом
                  </Widget.Content>
                </Widget>
              </SidebarContent>
            ),
            isOpened: sidebarOpen,
            defaultWidthPercent: 25,
          }}
        />
      </PageLayout>
    </>
  );
}

const splitViewLongContentCode = `${preCode}
${getFuncAsString(
  'packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx',
  'SplitViewLongContentTemplate',
)}
`;

export const SplitViewWithLongContent: Story = {
  name: 'SplitView + длинный контент',
  ...storySourceDoc({
    previewSource: 'shown',
    code: splitViewLongContentCode,
  }),
  render: SplitViewLongContentTemplate,
};

// ─── 6. WithLeftPanel ───────────────────────────────────────────────

/**
 * ##### LeftPanel + Layout
 *
 * Сворачиваемая навигация слева + основной контент справа.
 * `LeftPanel` — часть `mainSlot` внутри `Layout`, объединённая через
 * flex-контейнер с основной областью.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
function WithLeftPanelTemplate() {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState<number | undefined>(280);

  return (
    <>
      <FakeHeader>Шапка микрофронта (fixed)</FakeHeader>
      <PageLayout>
        <Layout
          variant="V1_1"
          marginBottom="0"
          headerSlot={DefaultPageHeader}
          mainSlot={
            <FlexContainer>
              <LeftPanel
                collapseState={[collapsed, setCollapsed]}
                widthState={[width, setWidth]}
                maxWidth={360}
                expandedContent={<LeftPanelExpandedContent />}
                collapsedContent={<LeftPanelCollapsedContent />}
                collapsedFooterContent={
                  <IconButton size="s" view="secondary">
                    <IconGroupOutline />
                  </IconButton>
                }
              />
              <MainArea>
                <ContentBlock>Контент страницы «Дашборд»</ContentBlock>
                <ContentBlock style={{ marginTop: 12 }}>
                  LeftPanel сворачивается / разворачивается. Layout
                  адаптируется.
                </ContentBlock>
                <ContentBlock style={{ marginTop: 12 }}>
                  Дополнительный блок контента
                </ContentBlock>
                <ContentBlock style={{ marginTop: 12 }}>
                  Ещё один блок для демонстрации высоты
                </ContentBlock>
              </MainArea>
            </FlexContainer>
          }
        />
      </PageLayout>
    </>
  );
}

const withLeftPanelCode = `${preCode}
${getFuncAsString(
  'packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx',
  'WithLeftPanelTemplate',
)}
`;

export const WithLeftPanel: Story = {
  name: 'LeftPanel + Layout',
  ...storySourceDoc({
    previewSource: 'shown',
    code: withLeftPanelCode,
  }),
  render: WithLeftPanelTemplate,
};

// ─── 7. LeftPanel + SplitView ───────────────────────────────────────

/**
 * ##### LeftPanel + SplitView
 *
 * Полная комбинация: навигация (`LeftPanel`) + основной контент с панелью
 * деталей (`SplitView`). Типовой сценарий для страниц с таблицей и боковой
 * панелью деталей. `LeftPanel` — часть `mainSlot` в `Layout`.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
function LeftPanelWithSplitViewTemplate() {
  const [collapsed, setCollapsed] = useState(false);
  const [panelWidth, setPanelWidth] = useState<number | undefined>(260);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <FakeHeader>
        Шапка микрофронта (fixed)
        <Button
          size="xs"
          view={sidebarOpen ? 'secondary' : 'accent'}
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? 'Скрыть детали' : 'Показать детали'}
        </Button>
      </FakeHeader>
      <PageLayout>
        <SplitView
          insidePageLayout
          mainContent={
            <Layout
              variant="V1_1"
              marginTop="0"
              marginBottom="0"
              paddingTop="16px"
              style={{
                height: '100%',
              }}
              headerSlot={DefaultPageHeader}
              mainSlot={
                <FlexContainer>
                  <LeftPanel
                    collapseState={[collapsed, setCollapsed]}
                    widthState={[panelWidth, setPanelWidth]}
                    maxWidth={360}
                    expandedContent={<LeftPanelExpandedContent />}
                    collapsedContent={<LeftPanelCollapsedContent />}
                    collapsedFooterContent={
                      <IconButton size="s" view="secondary">
                        <IconGroupOutline />
                      </IconButton>
                    }
                  />
                  <MainArea>
                    <ContentBlock>
                      Таблица или список записей. Выбор записи открывает панель
                      деталей справа через SplitView.
                    </ContentBlock>
                    <ContentBlock style={{ marginTop: 12 }}>
                      Ещё один блок контента
                    </ContentBlock>
                  </MainArea>
                </FlexContainer>
              }
            />
          }
          sidebar={{
            content: (
              <SidebarContent>
                <Widget>
                  <Widget.Header title="Детали записи" />
                  <Widget.Content>
                    <p>ID: 12345</p>
                    <p>Статус: Активна</p>
                    <p>Дата: 15.03.2026</p>
                  </Widget.Content>
                </Widget>
                <Widget>
                  <Widget.Header title="Действия" />
                  <Widget.Content>
                    <Flow mainAxisGap={8} orientation="vertical">
                      <Button size="s" view="accent" stretching="filled">
                        Редактировать
                      </Button>
                      <Button size="s" view="secondary" stretching="filled">
                        Архивировать
                      </Button>
                    </Flow>
                  </Widget.Content>
                </Widget>
              </SidebarContent>
            ),
            isOpened: sidebarOpen,
            defaultWidthPercent: 30,
          }}
        />
      </PageLayout>
    </>
  );
}

const leftPanelWithSplitViewCode = `${preCode}
${getFuncAsString(
  'packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx',
  'LeftPanelWithSplitViewTemplate',
)}
`;

export const LeftPanelWithSplitView: Story = {
  name: 'LeftPanel + SplitView',
  ...storySourceDoc({
    previewSource: 'shown',
    code: leftPanelWithSplitViewCode,
  }),
  render: LeftPanelWithSplitViewTemplate,
};

// ─── 8. LeftPanel + SplitView + длинный контент ─────────────────────

/**
 * ##### LeftPanel + SplitView + скролл
 *
 * Полная сборка: навигация + основной контент со скроллом + sticky sidebar.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
function FullComboLongTemplate() {
  const [collapsed, setCollapsed] = useState(false);
  const [panelWidth, setPanelWidth] = useState<number | undefined>(260);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <FakeHeader>
        Шапка микрофронта (fixed)
        <Button
          size="xs"
          view="secondary"
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? 'Скрыть' : 'Показать'}
        </Button>
      </FakeHeader>
      <PageLayout>
        <SplitView
          insidePageLayout
          mainContent={
            <Layout
              variant="V1_1"
              marginTop="0"
              marginBottom="0"
              paddingTop="16px"
              style={{
                height: '100%',
              }}
              headerSlot={DefaultPageHeader}
              mainSlot={
                <FlexContainer>
                  <LeftPanel
                    collapseState={[collapsed, setCollapsed]}
                    widthState={[panelWidth, setPanelWidth]}
                    maxWidth={360}
                    expandedContent={<LeftPanelExpandedContent />}
                    collapsedContent={<LeftPanelCollapsedContent />}
                    collapsedFooterContent={
                      <IconButton size="s" view="secondary">
                        <IconGroupOutline />
                      </IconButton>
                    }
                  />
                  <MainArea>
                    <LongContentBlocks count={20} />
                  </MainArea>
                </FlexContainer>
              }
            />
          }
          sidebar={{
            content: (
              <SidebarContent>
                <Widget>
                  <Widget.Header title="Sticky sidebar" />
                  <Widget.Content>
                    Этот sidebar остаётся на месте при прокрутке основного
                    контента.
                  </Widget.Content>
                </Widget>
              </SidebarContent>
            ),
            isOpened: sidebarOpen,
            defaultWidthPercent: 25,
          }}
        />
      </PageLayout>
    </>
  );
}

const fullComboLongCode = `${preCode}
${getFuncAsString(
  'packages/storybook/src/stories/PageLayout/PageLayout.stories.tsx',
  'FullComboLongTemplate',
)}
`;

export const FullComboLongContent: Story = {
  name: 'LeftPanel + SplitView + скролл',
  ...storySourceDoc({
    previewSource: 'shown',
    code: fullComboLongCode,
  }),
  render: FullComboLongTemplate,
};

// ─── 9. PageLayout для шапки микрофронта ────────────────────────────

/**
 * ##### PageLayout для шапки микрофронта
 *
 * Команда шапки использует `PageLayout` с `paddingTop={0}`, `paddingBottom={0}`
 * и `minHeight={0}`. От `PageLayout` им нужны только боковые отступы по
 * брейкпоинтам и `max-width` для центрирования.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
const MicroFrontHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
`;

export const ForMicroFrontHeader: Story = {
  name: 'Для шапки микрофронта',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => (
    <>
      <FixedHeaderWrapper>
        <PageLayout paddingTop={0} paddingBottom={0} minHeight={0}>
          <MicroFrontHeaderContent>
            <span style={{ fontWeight: 600 }}>Логотип</span>
            <Flow mainAxisGap={8}>
              <Button size="s" view="secondary">
                Раздел 1
              </Button>
              <Button size="s" view="secondary">
                Раздел 2
              </Button>
              <Button size="s" view="accent">
                Профиль
              </Button>
            </Flow>
          </MicroFrontHeaderContent>
        </PageLayout>
      </FixedHeaderWrapper>
      <PageLayout>
        <Layout
          variant="V1_1"
          marginBottom="0"
          headerSlot={DefaultPageHeader}
          mainSlot={
            <>
              <ContentBlock>
                Основной контент страницы. Шапка сверху обёрнута в PageLayout с
                paddingTop={'{0}'}, paddingBottom={'{0}'} и minHeight={'{0}'}.
              </ContentBlock>
              <ContentBlock>Ещё один блок контента</ContentBlock>
              <ContentBlock>Третий блок</ContentBlock>
            </>
          }
        />
      </PageLayout>
    </>
  ),
};
