/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@ui-kit/components/Avatar';
import { Badge } from '@ui-kit/components/Badge';
import { Button } from '@ui-kit/components/Button';
import { Divider } from '@ui-kit/components/Divider';
import { Flow } from '@ui-kit/components/Flow';
import { IconButton } from '@ui-kit/components/IconButton';
import type {
  SplitViewProps,
  SplitViewSlotSizesProps
} from '@ui-kit/components/SplitView';
import { SplitView } from '@ui-kit/components/SplitView';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import { IconTabItem, Tabs } from '@ui-kit/components/Tabs';
import { H2 } from '@ui-kit/components/Typography';
import { Widget } from '@ui-kit/components/Widget';
import { s } from '@ui-kit/constants';
import { IconChevronLeft, IconChevronRight, IconPlasma } from '@ui-kit/icons';
import { backgroundPrimary } from '@ui-kit/tokens';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

const StoryHeader = styled.div`
  position: sticky;
  top: 0;
  height: 72px;
  padding-top: 16px;
  margin-top: -16px;
  background-color: teal;
  z-index: 1;
`;

const meta: Meta<SplitViewProps> = {
  title: 'Композиции/SplitView',
  parameters: {
    docs: {
      toc: true // 👈 Enables the table of contents
    }
  },
  tags: ['!autodocs'],
  component: SplitView
};

export default meta;

type Story = StoryObj<SplitViewProps>;

function SplitViewTableComponent({
  rows,
  setOpenedTask
}: {
  rows: Row[];
  setOpenedTask: (row: Row) => void;
}) {
  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      {
        key: 'id',
        name: 'id'
      },
      {
        key: 'task',
        name: 'Title'
      },
      {
        key: 'priority',
        name: 'Priority'
      },
      {
        key: 'issueType',
        name: 'Issue Type'
      },
      {
        key: 'complete',
        name: '% Complete'
      }
    ],
    []
  );

  return (
    <Table
      tableConfig={{
        containerStyle: { height: 700 },
        onCellClick({ row }) {
          setOpenedTask(row);
        }
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

/**
 * Кликните на любую ячейку таблицы для открытия SplitView.
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const SplitViewStory: Story = {
  name: 'SplitView',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: `
import { createRows, type Row } from './tableData';
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  SplitView,
  backgroundPrimary,
  Badge,
  Button,
  ColumnConfig,
  Flow,
  H2,
  IconButton,
  s,
  Table,
  Widget,
} from '@daisforge/ui';
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


${getFuncAsString(
  'packages/storybook/src/stories/SplitView/SplitView.stories.tsx',
  'SplitViewTableComponent'
)}


    `
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [openedTask, setOpenedTask] = useState<Row | null>(null);
    const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
    const [sidebarIsFullScreened, setSidebarIsFullScreened] = useState(false);
    const { down } = useBreakpoint();
    const sidebarMinWidthPx = down('xl') ? 530 : undefined;
    const openTaskSidebar = (row: Row) => {
      setOpenedTask(row);
      setSidebarIsOpened(true);
    };
    const toggleFullScreen = () => {
      setSidebarIsFullScreened((prev) => !prev);
    };
    const onSidebarEsc = () => {
      setSidebarIsFullScreened(false);
      setSidebarIsOpened(false);
      setTimeout(() => {
        setOpenedTask(null);
      }, 300);
    };

    return (
      <div style={{ backgroundColor: backgroundPrimary }}>
        <StoryHeader>Header FinAI</StoryHeader>

        <SplitView
          // стилизация для примера
          $css={{ marginInline: -16, paddingLeft: 16 }}
          mainContent={
            <div style={{ paddingBlock: s.x12 }}>
              <H2 style={{ paddingBlock: s.x8 }}>Основной контент</H2>
              <SplitViewTableComponent
                rows={rows}
                setOpenedTask={openTaskSidebar}
              />
            </div>
          }
          sidebar={{
            isOpened: sidebarIsOpened,
            isFullScreened: sidebarIsFullScreened,
            minWidthPx: sidebarMinWidthPx,
            // стилизация для примера
            paddingLeftOnClosed: 16,
            content: ({ avatarSize }: SplitViewSlotSizesProps) => (
              <Widget
                containerType={sidebarIsFullScreened ? 'modal' : 'splitView'}
              >
                <Widget.Header
                  onClose={onSidebarEsc}
                  fullScreened={sidebarIsFullScreened}
                  toggleFullScreened={toggleFullScreen}
                  title={`Обработка документов по ${openedTask?.id}`}
                  titleLeftSlot={
                    <Avatar size={avatarSize} name={openedTask?.task ?? ''} />
                  }
                  rightBlock={
                    <>
                      <Widget.IconButtonDots
                        size="xs"
                        iconSize="xs"
                        iconOrientation="vertical"
                        dropdownProps={{
                          items: [
                            { label: 'label 1', value: '1' },
                            { label: 'label 2', value: '2' }
                          ]
                        }}
                      />
                      <Widget.Divider />
                      <Flow mainAxisGap={s.x2}>
                        <IconButton view="secondary" size="xs">
                          <IconChevronLeft size="xs" />
                        </IconButton>
                        <IconButton view="secondary" size="xs">
                          <IconChevronRight size="xs" />
                        </IconButton>
                      </Flow>
                    </>
                  }
                  badge={{ text: 'Бейдж' }}
                  bottomBlock={
                    <div style={{ display: 'flex', gap: s.x2 }}>
                      <Badge
                        size="s"
                        transparent
                        view="accent"
                        text="В работе"
                      />
                      <Badge
                        size="s"
                        transparent
                        view="negative"
                        text="2-й раз"
                      />
                    </div>
                  }
                />

                <Widget.Content>
                  <div
                    style={{ height: '2000px', backgroundColor: 'goldenrod' }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        right: 0,
                        width: '4px',
                        backgroundColor: 'teal'
                      }}
                    />
                  </div>
                </Widget.Content>

                <Widget.Footer
                  leftBlock={
                    <Flow mainAxisGap={s.x4}>
                      <Button text="Кнопка 1" size="xs" view="secondary" />
                      <Widget.IconButtonDots size="xs" />
                    </Flow>
                  }
                  rightBlock={
                    <Flow mainAxisGap={s.x4}>
                      <Button text="Кнопка" size="xs" view="secondary" />
                      <Button text="Главная кнопка" size="xs" view="accent" />
                    </Flow>
                  }
                />
              </Widget>
            )
          }}
        />
      </div>
    );
  }
};

/**
 * SplitView с вертикальными иконочными табами справа.
 * При включении табов контентная часть sidebar уменьшается.
 * Используется компонент Tabs/Icon/Vertical/Tabs S + Divider.
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const SplitViewWithTabsStory: Story = {
  name: 'SplitView + Tabs Icon Vertical',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: `
import { createRows, type Row } from './tableData';
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  SplitView,
  backgroundPrimary,
  Badge,
  Button,
  ColumnConfig,
  Divider,
  Flow,
  H2,
  IconButton,
  IconTabItem,
  s,
  Table,
  Tabs,
  Widget,
} from '@daisforge/ui';
import { IconPlasma } from '@ui-kit/icons';
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


${getFuncAsString(
  'packages/storybook/src/stories/SplitView/SplitView.stories.tsx',
  'SplitViewTableComponent'
)}


    `
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [openedTask, setOpenedTask] = useState<Row | null>(null);
    const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
    const [sidebarIsFullScreened, setSidebarIsFullScreened] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const { down } = useBreakpoint();
    const sidebarMinWidthPx = down('xl') ? 530 : undefined;

    const tabItems = [0, 1, 2, 3, 4];

    const openTaskSidebar = (row: Row) => {
      setOpenedTask(row);
      setSidebarIsOpened(true);
    };
    const toggleFullScreen = () => {
      setSidebarIsFullScreened((prev) => !prev);
    };
    const onSidebarEsc = () => {
      setSidebarIsFullScreened(false);
      setSidebarIsOpened(false);
      setTimeout(() => {
        setOpenedTask(null);
      }, 300);
    };

    return (
      <div style={{ backgroundColor: backgroundPrimary }}>
        <StoryHeader>Header FinAI</StoryHeader>

        <SplitView
          $css={{ marginInline: -16, paddingLeft: 16 }}
          mainContent={
            <div style={{ paddingBlock: s.x12 }}>
              <H2 style={{ paddingBlock: s.x8 }}>Основной контент</H2>
              <SplitViewTableComponent
                rows={rows}
                setOpenedTask={openTaskSidebar}
              />
            </div>
          }
          sidebar={{
            isOpened: sidebarIsOpened,
            isFullScreened: sidebarIsFullScreened,
            minWidthPx: sidebarMinWidthPx,
            paddingLeftOnClosed: 16,
            content: ({ avatarSize }: SplitViewSlotSizesProps) => (
              <div style={{ display: 'flex', height: '100%' }}>
                {/* Tabs Icon Vertical S — СЛЕВА */}
                <Tabs
                  orientation="vertical"
                  size="s"
                  view="divider"
                  style={{ alignSelf: 'flex-start', paddingTop: s.x8 }}
                >
                  {tabItems.map((id, i) => (
                    <IconTabItem
                      key={`tab:${id}`}
                      selected={i === activeTab}
                      onClick={() => setActiveTab(i)}
                      orientation="vertical"
                      view="divider"
                      size="s"
                      tabIndex={0}
                      style={{ padding: `${s.x4} 10px ${s.x3} 10px` }}
                    >
                      <IconPlasma color="inherit" />
                    </IconTabItem>
                  ))}
                </Tabs>

                {/* Divider вертикальный между табами и Widget */}
                <Divider orientation="vertical" />

                {/* Основной контент Widget — СПРАВА */}
                <Widget
                  containerType={sidebarIsFullScreened ? 'modal' : 'splitView'}
                  style={{ flex: 1, minWidth: 0 }}
                >
                  <Widget.Header
                    onClose={onSidebarEsc}
                    fullScreened={sidebarIsFullScreened}
                    toggleFullScreened={toggleFullScreen}
                    title={`Обработка документов по ${openedTask?.id}`}
                    titleLeftSlot={
                      <Avatar size={avatarSize} name={openedTask?.task ?? ''} />
                    }
                    rightBlock={
                      <>
                        <Widget.IconButtonDots
                          size="xs"
                          iconSize="xs"
                          iconOrientation="vertical"
                          dropdownProps={{
                            items: [
                              { label: 'label 1', value: '1' },
                              { label: 'label 2', value: '2' }
                            ]
                          }}
                        />
                        <Widget.Divider />
                        <Flow mainAxisGap={s.x2}>
                          <IconButton view="secondary" size="xs">
                            <IconChevronLeft size="xs" />
                          </IconButton>
                          <IconButton view="secondary" size="xs">
                            <IconChevronRight size="xs" />
                          </IconButton>
                        </Flow>
                      </>
                    }
                    badge={{ text: 'Бейдж' }}
                    bottomBlock={
                      <div style={{ display: 'flex', gap: s.x2 }}>
                        <Badge
                          size="s"
                          transparent
                          view="accent"
                          text="В работе"
                        />
                        <Badge
                          size="s"
                          transparent
                          view="negative"
                          text="2-й раз"
                        />
                      </div>
                    }
                  />

                  <Widget.Content>
                    <div
                      style={{
                        height: '2000px',
                        backgroundColor: 'goldenrod'
                      }}
                    >
                      Кастомный слот — Tab {activeTab + 1}
                    </div>
                  </Widget.Content>

                  <Widget.Footer
                    leftBlock={
                      <Flow mainAxisGap={s.x4}>
                        <Button text="Кнопка 1" size="xs" view="secondary" />
                        <Widget.IconButtonDots size="xs" />
                      </Flow>
                    }
                    rightBlock={
                      <Flow mainAxisGap={s.x4}>
                        <Button text="Кнопка" size="xs" view="secondary" />
                        <Button text="Главная кнопка" size="xs" view="accent" />
                      </Flow>
                    }
                  />
                </Widget>
              </div>
            )
          }}
        />
      </div>
    );
  }
};
