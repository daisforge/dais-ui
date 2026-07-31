/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import { MassActions, MassActionsProps } from '@ui-kit/components/MassActions';
import { MassActionsStatic } from '@ui-kit/components/MassActionsStatic';
import { s } from '@ui-kit/constants';
import { IconDotsVerticalCenteredOutline, IconPlasma } from '@ui-kit/icons';
import { surfaceSolidCard } from '@ui-kit/tokens';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const meta: Meta<MassActionsProps> = {
  title: 'Локальные компоненты/MassActions',
  component: MassActions,
  parameters: {
    docs: {
      layout: 'fullscreen',
    },
  },
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<MassActionsProps>;

// Контейнер для демонстрации
const DemoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const ContentBox = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 550px;
  background: ${surfaceSolidCard};
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  margin: 0 0 16px 0;
  color: #333;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 0 0 24px 0;
  color: #666;
  font-size: 16px;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.div<{ $selected?: boolean }>`
  padding: 16px;
  background: ${({ $selected }: { $selected?: boolean }) =>
    $selected ? '#e3f2fd' : '#f5f5f5'};
  border: 2px solid
    ${({ $selected }: { $selected?: boolean }) =>
      $selected ? '#2196f3' : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ $selected }: { $selected?: boolean }) =>
      $selected ? '#bbdefb' : '#eeeeee'};
  }
`;

// Базовый пример standalone использования
function StandaloneExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const items = [
    { id: 1, name: 'Документ 1' },
    { id: 2, name: 'Документ 2' },
    { id: 3, name: 'Документ 3' },
    { id: 4, name: 'Документ 4' },
    { id: 5, name: 'Документ 5' },
  ];

  // Вычисляем состояние чекбокса на основе selectedItems
  const allSelected = selectedItems.size === items.length;
  const someSelected =
    selectedItems.size > 0 && selectedItems.size < items.length;
  const checked = allSelected;
  const indeterminate = someSelected;

  const toggleItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // Выделяем все элементы
      setSelectedItems(new Set(items.map((item) => item.id)));
    } else {
      // Снимаем выделение со всех элементов
      setSelectedItems(new Set());
    }
  };

  const handleSend = () => {
    alert(`Отправить ${selectedItems.size} элементов`);
  };

  const handleExport = () => {
    alert(`Экспорт ${selectedItems.size} элементов`);
  };

  const handleArchive = () => {
    alert(`Архивация ${selectedItems.size} элементов`);
  };

  return (
    <DemoContainer>
      <ContentBox ref={containerRef} style={{ position: 'relative' }}>
        <Title>Standalone MassActions</Title>
        <Description>
          Выберите элементы ниже, чтобы увидеть панель массовых действий
        </Description>
        <ItemsList>
          {items.map((item) => (
            <Item
              key={item.id}
              $selected={selectedItems.has(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              {item.name}
            </Item>
          ))}
        </ItemsList>

        {selectedItems.size > 0 && (
          <MassActions
            containerRef={containerRef}
            selectedCount={selectedItems.size}
            leftSection={
              <MassActions.Counter
                selectedCount={selectedItems.size}
                showCheckbox
                checked={checked}
                indeterminate={indeterminate}
                onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleCheckboxChange(e.target.checked)
                }
              />
            }
            buttons={[
              {
                text: 'Экспорт',
                onClick: handleExport,
                type: 'button',
                view: 'secondary',
              },
              {
                text: 'Архивировать',
                onClick: handleArchive,
                type: 'button',
                view: 'secondary',
              },
              {
                view: 'accent',
                onClick: handleSend,
                type: 'button',
                text: 'Отправить',
              },
            ]}
          />
        )}
      </ContentBox>
    </DemoContainer>
  );
}

// Пример с явным контролем видимости через проп show
function ShowPropExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const items = [
    { id: 1, name: 'Документ 1' },
    { id: 2, name: 'Документ 2' },
    { id: 3, name: 'Документ 3' },
  ];

  // Вычисляем состояние чекбокса на основе selectedItems
  const allSelected = selectedItems.size === items.length;
  const someSelected =
    selectedItems.size > 0 && selectedItems.size < items.length;
  const checked = allSelected;
  const indeterminate = someSelected;

  const toggleItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // Выделяем все элементы
      setSelectedItems(new Set(items.map((item) => item.id)));
    } else {
      // Снимаем выделение со всех элементов
      setSelectedItems(new Set());
    }
  };

  return (
    <DemoContainer>
      <ContentBox ref={containerRef} style={{ position: 'relative' }}>
        <Title>Пример с пропом show</Title>
        <Description>
          Проп show позволяет явно контролировать видимость панели, даже если
          selectedCount === 0. Чекбокс работает так же, как в базовом примере:
          галочка когда все выбрано, минус когда выбрано частично, пусто когда
          ничего не выбрано.
        </Description>
        <div style={{ marginBottom: s.x8, display: 'flex', gap: s.x4 }}>
          <Button onClick={() => setShow(!show)}>
            {show ? 'Скрыть' : 'Показать'} панель
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: s.x2 }}>
            <span>selectedCount: {selectedItems.size}</span>
            <span>show: {show ? 'true' : 'false'}</span>
          </div>
        </div>
        <ItemsList>
          {items.map((item) => (
            <Item
              key={item.id}
              $selected={selectedItems.has(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              {item.name}
            </Item>
          ))}
        </ItemsList>

        <MassActions
          containerRef={containerRef}
          selectedCount={selectedItems.size}
          show={show}
          leftSection={
            <MassActions.Counter
              selectedCount={selectedItems.size}
              showCheckbox
              checked={checked}
              indeterminate={indeterminate}
              onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCheckboxChange(e.target.checked)
              }
            />
          }
          buttons={[
            {
              text: 'Действие 1',
              onClick: () => alert('Действие 1'),
              type: 'button',
              view: 'secondary',
            },
            {
              text: 'Действие 2',
              onClick: () => alert('Действие 2'),
              type: 'button',
              view: 'secondary',
            },
          ]}
        />
      </ContentBox>
    </DemoContainer>
  );
}

// Пример с узким контейнером (компрессия)
function NarrowContainerExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const items = [
    { id: 1, name: 'Документ 1' },
    { id: 2, name: 'Документ 2' },
    { id: 3, name: 'Документ 3' },
    { id: 4, name: 'Документ 4' },
    { id: 5, name: 'Документ 5' },
  ];

  // Вычисляем состояние чекбокса на основе selectedItems
  const allSelected = selectedItems.size === items.length;
  const someSelected =
    selectedItems.size > 0 && selectedItems.size < items.length;
  const checked = allSelected;
  const indeterminate = someSelected;

  const toggleItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // Выделяем все элементы
      setSelectedItems(new Set(items.map((item) => item.id)));
    } else {
      // Снимаем выделение со всех элементов
      setSelectedItems(new Set());
    }
  };

  return (
    <DemoContainer>
      <ContentBox
        ref={containerRef}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <Title>Узкий контейнер</Title>
        <Description>
          При недостатке места кнопки автоматически скрываются в дропдаун
          скрытых действий. Выберите элементы ниже, чтобы увидеть компрессию
          кнопок.
        </Description>
        <ItemsList style={{ marginTop: s.x8, marginBottom: s.x8 }}>
          {items.map((item) => (
            <Item
              key={item.id}
              $selected={selectedItems.has(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              {item.name}
            </Item>
          ))}
        </ItemsList>

        {selectedItems.size > 0 && (
          <MassActions
            containerRef={containerRef}
            selectedCount={selectedItems.size}
            leftSection={
              <MassActions.Counter
                selectedCount={selectedItems.size}
                showCheckbox
                checked={checked}
                indeterminate={indeterminate}
                onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleCheckboxChange(e.target.checked)
                }
              />
            }
            buttons={[
              {
                text: 'Экспорт',
                onClick: () => alert('Экспорт'),
                view: 'secondary',
                type: 'button',
              },
              {
                text: 'Копировать',
                onClick: () => alert('Копировать'),
                view: 'secondary',
                type: 'button',
              },
              {
                text: 'Переместить',
                onClick: () => alert('Переместить'),
                view: 'secondary',
                type: 'button',
              },
              {
                text: 'Архивировать',
                onClick: () => alert('Архивировать'),
                view: 'secondary',
                type: 'button',
              },
              {
                text: 'Заморозить',
                onClick: () => alert('Заморозить'),
                view: 'secondary',
                type: 'button',
              },
              {
                type: 'button',
                text: 'Отправить',
                view: 'accent',
                onClick: () => alert('Отправить'),
              },
            ]}
          />
        )}
      </ContentBox>
    </DemoContainer>
  );
}

// Пример с LeftPanel
function WithLeftPanelExample() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isShowMassActionsStatic, setIsShowMassActionsStatic] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const items = [
    { id: 1, name: 'Документ 1' },
    { id: 2, name: 'Документ 2' },
    { id: 3, name: 'Документ 3' },
    { id: 4, name: 'Документ 4' },
    { id: 5, name: 'Документ 5' },
  ];

  // Вычисляем состояние чекбокса на основе selectedItems
  const allSelected = selectedItems.size === items.length;
  const someSelected =
    selectedItems.size > 0 && selectedItems.size < items.length;
  const checked = allSelected;
  const indeterminate = someSelected;

  const toggleItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // Выделяем все элементы
      setSelectedItems(new Set(items.map((item) => item.id)));
    } else {
      // Снимаем выделение со всех элементов
      setSelectedItems(new Set());
    }
  };

  const handleToggle = (next: boolean) => {
    setIsLeftPanelOpen(next);
  };

  return (
    <div
      style={{
        height: '100vh',
        padding: '20px',
        display: 'flex',
        backgroundColor: '#f5f5f5',
      }}
    >
      <LeftPanel
        onToggleCollapse={handleToggle}
        collapseState={[isLeftPanelOpen, setIsLeftPanelOpen]}
        expandedContent={
          <div
            style={{
              padding: s.x8,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Title style={{ fontSize: '18px', marginBottom: s.x4 }}>
              Левая панель
            </Title>
            <Description style={{ fontSize: '14px', marginBottom: s.x8 }}>
              В левой панели используется StaticMassActionsPanel с базовыми
              кнопками
            </Description>
            <MassActionsStatic show={isShowMassActionsStatic}>
              <IconButton size="s" view="secondary">
                <IconDotsVerticalCenteredOutline />
              </IconButton>
              <Button
                text="Label 1"
                contentLeft={<IconPlasma />}
                size="s"
                view="secondary"
                onClick={() => alert('Label 1')}
                style={{
                  flexGrow: 1,
                }}
              />
              <Button
                text="Label 2"
                size="s"
                contentLeft={<IconPlasma />}
                view="secondary"
                onClick={() => alert('Label 2')}
                style={{
                  flexGrow: 1,
                }}
              />
            </MassActionsStatic>
          </div>
        }
        collapsedContent={
          isShowMassActionsStatic && (
            <>
              <IconButton size="s" view="secondary">
                <IconDotsVerticalCenteredOutline />
              </IconButton>
              <IconButton size="s" view="secondary">
                <IconPlasma />
              </IconButton>
              <IconButton size="s" view="secondary">
                <IconPlasma />
              </IconButton>
            </>
          )
        }
      />
      <div
        ref={mainContainerRef}
        style={{
          flex: 1,
          padding: s.x8,
          backgroundColor: surfaceSolidCard,
          borderRadius: s.x8,
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: s.x8,
          }}
        >
          <Title style={{ fontSize: '20px', margin: 0 }}>
            Основной контент
          </Title>
        </div>
        <Description style={{ fontSize: '14px', marginBottom: s.x8 }}>
          В основном контенте используется адаптивный MassActions. Выберите
          документ.
        </Description>
        <div style={{ marginBottom: '16px' }}>
          <div
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            <Button onClick={() => handleToggle(!isLeftPanelOpen)}>
              {isLeftPanelOpen ? 'Закрыть' : 'Открыть'} левую панель
            </Button>
            <Button onClick={() => setIsShowMassActionsStatic((prev) => !prev)}>
              {isShowMassActionsStatic ? 'Закрыть' : 'Открыть'}{' '}
              MassActionsStatic в левой части
            </Button>
          </div>
        </div>
        <ItemsList>
          {items.map((item) => (
            <Item
              key={item.id}
              $selected={selectedItems.has(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              {item.name}
            </Item>
          ))}
        </ItemsList>

        {selectedItems.size > 0 && (
          <MassActions
            containerRef={mainContainerRef}
            selectedCount={selectedItems.size}
            leftSection={
              <MassActions.Counter
                selectedCount={selectedItems.size}
                showCheckbox
                checked={checked}
                indeterminate={indeterminate}
                onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleCheckboxChange(e.target.checked)
                }
              />
            }
            buttons={[
              {
                text: 'Экспорт',
                onClick: () => alert('Экспорт'),
                type: 'button',
                view: 'secondary',
              },
              {
                text: 'Архивировать',
                onClick: () => alert('Архивировать'),
                type: 'button',
                view: 'secondary',
              },
              {
                text: 'Копировать',
                onClick: () => alert('Копировать'),
                type: 'button',
                view: 'secondary',
              },
              {
                text: 'Переместить',
                onClick: () => alert('Переместить'),
                type: 'button',
                view: 'secondary',
              },
              {
                view: 'accent',
                onClick: () => alert('Отправить'),
                type: 'button',
                text: 'Отправить',
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}

const standalonePreCode = `
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${getFuncAsString(
  'packages/storybook/src/stories/MassActions/MassActions.stories.tsx',
  'StandaloneExample',
)}
`;

const showPropPreCode = `
import { useRef, useState } from 'react';
import { Button } from '@ui-kit/components/Button';
import { MassActions } from '@ui-kit/components/MassActions';
import { s } from '@ui-kit/constants';

${getFuncAsString(
  'packages/storybook/src/stories/MassActions/MassActions.stories.tsx',
  'ShowPropExample',
)}
`;

const narrowContainerPreCode = `
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${getFuncAsString(
  'packages/storybook/src/stories/MassActions/MassActions.stories.tsx',
  'NarrowContainerExample',
)}
`;

const withLeftPanelPreCode = `
import { useRef, useState } from 'react';
import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import { MassActions } from '@ui-kit/components/MassActions';
import { StaticMassActionsPanel } from '@ui-kit/components/StaticMassActionsPanel';
import { s } from '@ui-kit/constants';
import { IconDotsVerticalCenteredOutline, IconPlasma } from '@ui-kit/icons';
import { surfaceSolidCard } from '@ui-kit/tokens';

${getFuncAsString(
  'packages/storybook/src/stories/MassActions/MassActions.stories.tsx',
  'WithLeftPanelExample',
)}
`;

const adaptive1280PreCode = `
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${getFuncAsString(
  'packages/storybook/src/stories/MassActions/MassActions.stories.tsx',
  'StandaloneExample',
)}
`;

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Standalone: Story = {
  name: 'Standalone MassActions',
  ...storySourceDoc({
    previewSource: 'shown',
    code: standalonePreCode,
  }),
  render: StandaloneExample,
};

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const WithShowProp: Story = {
  name: 'С явным контролем видимости (show)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: showPropPreCode,
  }),
  render: ShowPropExample,
};

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const NarrowContainer: Story = {
  name: 'Узкий контейнер (компрессия)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: narrowContainerPreCode,
  }),
  render: NarrowContainerExample,
};

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const WithLeftPanel: Story = {
  name: 'В комбинации с LeftPanel',
  ...storySourceDoc({
    previewSource: 'shown',
    code: withLeftPanelPreCode,
  }),
  render: WithLeftPanelExample,
};

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Adaptive1280: Story = {
  name: '1280 Адаптив',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  ...storySourceDoc({
    previewSource: 'shown',
    code: adaptive1280PreCode,
  }),
  render: StandaloneExample,
};
