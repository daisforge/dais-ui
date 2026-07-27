/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import {
  IconBell,
  IconBellActive,
  IconCalendar,
  IconClock,
  IconEye,
  IconHeart,
  IconHeartStroke,
  IconInfo,
  IconLock,
  IconPersone,
  IconRefresh,
  IconReset,
  IconSettings,
  IconStar
} from '@ui-kit/icons';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/ControlBlock',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;

type Story = StoryObj;

type AnalyticsMode = 'basic' | 'advanced';
type TimeRange = 'day' | 'week' | 'month';
type UserFilter = 'all' | 'my' | 'team';

const preCode = `
  import { ColumnConfig, Table } from '@daisforge/ui';
  import {
  IconBell,
  IconBellActive,
  IconCalendar,
  IconClock,
  IconEye,
  IconHeart,
  IconHeartStroke,
  IconInfo,
  IconLock,
  IconPersone,
  IconRefresh,
  IconReset,
  IconSettings,
  IconStar,
  } from '@daisforge/ui/icons';
 import { IconButton } from '@daisforge/ui';
 import React, { useMemo, useState } from 'react';

type AnalyticsMode = 'basic' | 'advanced';
type TimeRange = 'day' | 'week' | 'month';
type UserFilter = 'all' | 'my' | 'team';

`;

export const ControlBlockWithCustomFeatures: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const columns: readonly ColumnConfig<Row>[] = useMemo(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'developer', name: 'Developer' }
      ],
      []
    );

    const [rows] = useState(createRows);

    // Состояния для кастомных фич
    const [isFavorite, setIsFavorite] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [isLocked, setIsLocked] = useState(false);
    const [analyticsMode, setAnalyticsMode] = useState<AnalyticsMode>('basic');
    const [timeRange, setTimeRange] = useState<TimeRange>('week');
    const [userFilter, setUserFilter] = useState<UserFilter>('all');
    const [favoritesOnly, setFavoritesOnly] = useState(false);
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const filterLabels = {
      all: 'Все',
      my: 'Мои',
      team: 'Команда'
    };

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },
          fullScreenEnabled: true,
          controlBlock: {
            customFeatures: [
              // Обязательная кастомная фича
              {
                value: 'favorite',
                label: isFavorite ? 'Удалить из избранного' : 'В избранное',
                Icon: IconStar,
                onClick: () => setIsFavorite(!isFavorite),
                mandatory: true,
                details: {
                  type: 'switch',
                  label: 'В избранном',
                  checked: isFavorite,
                  onChange: () => setIsFavorite(!isFavorite)
                }
              },
              {
                value: 'refresh-feature',
                CustomIconRender: () => (
                  <EmbedIconButton
                    size="m"
                    onClick={() => {
                      // eslint-disable-next-line no-alert
                      alert('Click on refresh-feature in ControlBlock');
                    }}
                    style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconRefresh size="s" />
                  </EmbedIconButton>
                ),
                details: {
                  type: 'button',
                  label: 'Обновить',
                  onClick: () =>
                    // eslint-disable-next-line no-alert
                    alert('Click for customFeatureRefresh2 in Sidebar'),
                  icon: <IconRefresh size="s" />
                }
              },

              // Кастомные фичи
              {
                value: 'notifications',
                label: notificationsEnabled
                  ? 'Отключить уведомления'
                  : 'Включить уведомления',
                Icon: notificationsEnabled ? IconBellActive : IconBell,
                onClick: () => setNotificationsEnabled(!notificationsEnabled),
                details: {
                  type: 'switch',
                  label: 'Уведомления',
                  checked: notificationsEnabled,
                  onChange: () => setNotificationsEnabled(!notificationsEnabled)
                }
              },
              {
                value: 'analytics-mode',
                label: `Аналитика (${
                  analyticsMode === 'basic' ? 'базовая' : 'расширенная'
                })`,
                Icon: IconInfo, // Замена IconChart на IconInfo
                onClick: () => {}, // Добавлен обязательный onClick
                details: {
                  type: 'select',
                  label: 'Режим аналитики',
                  icon: <IconInfo />,
                  value: analyticsMode,
                  options: [
                    { value: 'basic', label: 'Базовая' },
                    { value: 'advanced', label: 'Расширенная' }
                  ],
                  onChange: (val) => setAnalyticsMode(val as AnalyticsMode)
                }
              },
              {
                value: 'lock-table',
                label: isLocked ? 'Разблокировать' : 'Заблокировать',
                Icon: IconLock,
                onClick: () => setIsLocked(!isLocked),
                details: {
                  type: 'button',
                  label: isLocked ? 'Разблокировать' : 'Заблокировать',
                  onClick: () => setIsLocked(!isLocked),
                  icon: <IconLock />
                }
              },
              {
                value: 'time-range',
                label: `Период: ${timeRange}`,
                Icon: IconCalendar,
                onClick: () => {}, // Добавлен обязательный onClick
                details: {
                  type: 'select',
                  label: 'Временной период',
                  icon: <IconCalendar />,
                  value: timeRange,
                  options: [
                    { value: 'day', label: 'День' },
                    { value: 'week', label: 'Неделя' },
                    { value: 'month', label: 'Месяц' }
                  ],
                  onChange: (val) => setTimeRange(val as TimeRange)
                }
              },
              {
                value: 'user-filter',
                label: `Пользователи: ${filterLabels[userFilter]}`,
                Icon: IconPersone,
                onClick: () => {},
                details: {
                  type: 'select',
                  label: 'Фильтр пользователей',
                  icon: <IconPersone />,
                  value: userFilter,
                  options: [
                    { value: 'all', label: 'Все' },
                    { value: 'my', label: 'Мои' },
                    { value: 'team', label: 'Команда' }
                  ],
                  onChange: (val) => setUserFilter(val as UserFilter)
                }
              },
              {
                value: 'favorites-only',
                label: favoritesOnly ? 'Все записи' : 'Только избранные',
                Icon: favoritesOnly ? IconHeart : IconHeartStroke,
                onClick: () => setFavoritesOnly(!favoritesOnly),
                details: {
                  type: 'switch',
                  label: 'Только избранные',
                  checked: favoritesOnly,
                  onChange: () => setFavoritesOnly(!favoritesOnly)
                }
              },
              {
                value: 'auto-refresh',
                label: autoRefresh
                  ? 'Отключить автообновление'
                  : 'Включить автообновление',
                Icon: IconReset,
                onClick: () => setAutoRefresh(!autoRefresh),
                details: {
                  type: 'switch',
                  label: 'Автообновление',
                  checked: autoRefresh,
                  onChange: () => setAutoRefresh(!autoRefresh)
                }
              },
              {
                value: 'dark-mode',
                label: darkMode ? 'Светлая тема' : 'Темная тема',
                Icon: darkMode ? IconEye : IconSettings,
                onClick: () => setDarkMode(!darkMode),
                details: {
                  type: 'switch',
                  label: 'Темная тема',
                  checked: darkMode,
                  onChange: () => setDarkMode(!darkMode)
                }
              },
              {
                value: 'time-tracker',
                label: 'Таймер',
                Icon: IconClock,
                onClick: () => {}, // Добавлен обязательный onClick
                details: {
                  type: 'custom',
                  render: () => <div>Кастомный компонент таймера</div>
                }
              }
            ]
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
