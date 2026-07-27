import { Button } from '@ui-kit/components/Button';
import { Dropdown } from '@ui-kit/components/Dropdown';
import { IconButton } from '@ui-kit/components/IconButton';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import { List, ListItem } from '@ui-kit/components/List';
import {
  SegmentGroup,
  SegmentItem,
  SegmentProvider
} from '@ui-kit/components/Segment';
import { Widget } from '@ui-kit/components/Widget';
import { IconGroupOutline, IconHierarchy, IconSearch } from '@ui-kit/icons';
import { useState } from 'react';

export const LeftPanelBlock = () => {
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

  // Вызывается при переключении панели
  const handleToggle = (next: boolean) => {
    setIsShow(next);
  };

  return (
    <LeftPanel
      // Максимальная ширина
      maxWidth={360}
      // Коллбэк, вызывается при смене состояния
      onToggleCollapse={handleToggle}
      // Управление состоянием панели
      collapseState={[isShow, setIsShow]}
      // Slot для раскрытой панели (рекомендуется использовать widget)
      expandedContent={
        <Widget $css={{ overflow: 'hidden' }}>
          <Widget.Header
            title="Title"
            $css={{ overflow: 'hidden', padding: 0 }}
            bottomBlock={
              <>
                {/* Группа переключателей */}
                <SegmentProvider defaultSelected={['item_0']}>
                  <SegmentGroup hasBackground size="xs" stretch>
                    {items.map((_, i) => (
                      <SegmentItem
                        view="secondary"
                        // eslint-disable-next-line react/no-array-index-key
                        key={`item:${i}`}
                        value={`item_${i}`}
                        label={`Label ${i + 1}`}
                        size="s"
                      />
                    ))}
                  </SegmentGroup>
                </SegmentProvider>
              </>
            }
          />
          {/* Основной список */}
          <Widget.Content>
            <List>
              {contentItems.map((item) => (
                <ListItem key={item.value} style={{ cursor: 'pointer' }}>
                  {item.label}
                </ListItem>
              ))}
            </List>
          </Widget.Content>
          {/* Нижняя часть виджета */}
          <Widget.Footer>
            <Button view="secondary" stretching="filled">
              Какая-то кнопка
            </Button>
          </Widget.Footer>
        </Widget>
      }
      // Slot для контента закрытой панели
      collapsedContent={
        <>
          <IconButton size="s" view="secondary">
            <IconSearch />
          </IconButton>
          <IconButton size="s" view="secondary">
            <IconGroupOutline />
          </IconButton>
          <IconButton size="s" view="secondary">
            <IconGroupOutline />
          </IconButton>
          <Dropdown items={contentItems}>
            <IconButton size="s" view="secondary">
              <IconHierarchy />
            </IconButton>
          </Dropdown>
        </>
      }
      //   Slot для ниженй части закрытой панели
      collapsedFooterContent={
        <IconButton size="s" view="secondary">
          <IconGroupOutline />
        </IconButton>
      }
    />
  );
};
