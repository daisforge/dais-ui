import type { Meta, StoryObj } from '@storybook/react';
import { BlockGradientScroll } from '@ui-kit/components/BlockGradientScroll';
import { Button } from '@ui-kit/components/Button';
import { BlockGradientScrollMixin } from '@ui-kit/mixins/blockGradientScroll';
import {
  outlineAccent,
  surfaceSolidCard,
  surfaceSolidPrimary,
  textAccent,
  textInfo,
  textNegative,
  textPositive,
  textPrimary,
  textWarningMinor,
} from '@ui-kit/tokens';
import React, { useState } from 'react';
import styled from 'styled-components';

const DemoContainer = styled.div`
  padding: 20px;
  background: ${surfaceSolidCard};
  border-radius: 8px;
`;

const DemoItem = styled.div`
  padding: 16px;
  margin-bottom: 12px;
  background: ${textAccent};
  border-radius: 6px;
  color: ${textPrimary};

  &:last-child {
    margin-bottom: 0;
  }
`;

const generateItems = (count: number) =>
  Array.from({ length: count }, (_, i) => (
    <DemoItem key={i}>
      <h3>Элемент {i + 1}</h3>
    </DemoItem>
  ));

// Миксин styled-компоненты (миксин сам применяет padding)
const BoxWithMixin = styled.div`
  max-height: 300px;
  overflow-y: auto;
  background: ${surfaceSolidCard};
  border-radius: 8px;
  border: 1px solid ${textAccent};

  ${BlockGradientScrollMixin({ padding: 24, variant: 'white' })}
`;

const BoxWithMixinGray = styled.div`
  max-height: 300px;
  overflow-y: auto;
  background: ${surfaceSolidPrimary};
  border-radius: 8px;

  ${BlockGradientScrollMixin({ padding: 24, variant: 'gray' })}
`;

const meta: Meta<typeof BlockGradientScroll> = {
  title: 'Локальные компоненты/BlockGradientScroll',
  component: BlockGradientScroll,
  tags: ['!autodocs'],
  argTypes: {
    variant: {
      description: 'Вариант цвета градиента (white/gray)',
      control: { type: 'select' },
      options: ['white', 'gray'],
    },
    children: {
      description: 'Контент внутри scroll-контейнера',
      control: false,
    },
    className: {
      description: 'CSS класс',
      control: { type: 'text' },
    },
    style: {
      description:
        'Inline стили (padding автоматически подхватывается для градиента)',
      control: false,
    },
    $css: {
      description: 'Кастомные стили styled-components',
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BlockGradientScroll>;

/**
 * Базовый пример использования компонента.
 * Padding автоматически подхватывается из style.
 */
export const Default: Story = {
  name: '1. Базовый компонент',
  args: {
    variant: 'white',
    style: {
      maxHeight: 300,
      overflowY: 'auto',
      padding: 24,
      background: surfaceSolidCard,
      borderRadius: 8,
      border: `1px solid ${outlineAccent}`,
    },
    children: generateItems(8),
  },
};

/**
 * Использование миксина в styled-components.
 * Миксин добавляется к существующему styled-компоненту.
 *
 * ⚠️ Controls не работают — стили зафиксированы при создании компонента.
 */
export const MixinUsage: Story = {
  name: '2. Миксин (styled-components)',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DemoContainer>
      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: 8, fontWeight: 500 }}>variant: white</p>
          <BoxWithMixin>{generateItems(6)}</BoxWithMixin>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: 8, fontWeight: 500 }}>variant: gray</p>
          <BoxWithMixinGray>{generateItems(6)}</BoxWithMixinGray>
        </div>
      </div>
    </DemoContainer>
  ),
};

/**
 * Если контент помещается без скролла — градиент не появляется.
 */
export const NoScroll: Story = {
  name: '3. Мало контента (без скролла)',
  args: {
    variant: 'white',
    style: {
      maxHeight: 300,
      overflowY: 'auto',
      padding: 24,
      borderRadius: 8,
      border: `1px solid ${outlineAccent}`,
    },
    children: generateItems(2),
  },
};

/**
 * Несколько контейнеров на одной странице работают независимо.
 * Каждый компонент автоматически получает свои padding'и.
 */
export const MultipleContainers: Story = {
  name: '4. Несколько контейнеров',
  render: () => (
    <DemoContainer>
      <div style={{ display: 'flex', gap: 20 }}>
        <BlockGradientScroll
          variant="white"
          style={{
            flex: 1,
            maxHeight: 300,
            overflowY: 'auto',
            padding: 24,
            borderRadius: 8,
            border: `1px solid ${outlineAccent}`,
          }}
        >
          {generateItems(6)}
        </BlockGradientScroll>

        <BlockGradientScroll
          variant="gray"
          style={{
            flex: 1,
            maxHeight: 300,
            overflowY: 'auto',
            padding: 24,
            background: surfaceSolidPrimary,
            borderRadius: 8,
            border: `1px solid ${outlineAccent}`,
          }}
        >
          {generateItems(6)}
        </BlockGradientScroll>

        <BlockGradientScroll
          variant="white"
          style={{
            flex: 1,
            maxHeight: 300,
            overflowY: 'auto',
            padding: '0 16px 32px',
            borderRadius: 8,
            border: `1px solid ${outlineAccent}`,
          }}
        >
          {generateItems(6)}
        </BlockGradientScroll>
      </div>
    </DemoContainer>
  ),
};

/**
 * Интерактивный пример: добавление и удаление элементов.
 * Градиент появляется/исчезает автоматически в зависимости от количества контента.
 */
export const DynamicContent: Story = {
  name: '5. Динамический контент',
  render: function DynamicContentRender() {
    const [items, setItems] = useState([1, 2, 3]);

    const addItem = () => {
      setItems((prev) => [...prev, Math.max(...prev, 0) + 1]);
    };

    const removeItem = () => {
      setItems((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
    };

    const reset = () => {
      setItems([1, 2, 3]);
    };

    return (
      <DemoContainer>
        <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
          <Button
            onClick={addItem}
            style={{
              background: textPositive,
              color: textPrimary,
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            + Добавить
          </Button>
          <Button
            onClick={removeItem}
            style={{
              background: textNegative,
              color: textPrimary,
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            − Удалить
          </Button>
          <Button
            onClick={reset}
            style={{
              background: textInfo,
              color: textPrimary,
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            Сбросить
          </Button>
          <span
            style={{
              alignSelf: 'center',
              marginLeft: 8,
              color: textWarningMinor,
            }}
          >
            Элементов: {items.length}
          </span>
        </div>

        <BlockGradientScroll
          variant="white"
          style={{
            maxHeight: 300,
            overflowY: 'auto',
            padding: 24,
            borderRadius: 8,
            border: `1px solid ${outlineAccent}`,
          }}
        >
          {items.map((id) => (
            <DemoItem key={id}>
              <h3>Элемент {id}</h3>
            </DemoItem>
          ))}
          {items.length === 0 && (
            <div
              style={{
                color: textWarningMinor,
                textAlign: 'center',
                padding: 40,
              }}
            >
              Пусто. Добавь элементы.
            </div>
          )}
        </BlockGradientScroll>
      </DemoContainer>
    );
  },
};

/**
 * Проверка что все способы кастомизации работают:
 * style, className, $css
 */
export const StylingMethods: Story = {
  name: '6. Способы стилизации (style, className, $css)',
  render: () => (
    <DemoContainer>
      <style>
        {`
          .custom-gradient-box {
            max-height: 200px;
            overflow-y: auto;
            padding: 20px;
            background: #fff8e1;
            border-radius: 8px;
            border: 2px dashed #ffa000;
          }
        `}
      </style>

      <div style={{ display: 'flex', gap: 20, flexDirection: 'column' }}>
        {/* style prop */}
        <div>
          <p style={{ marginBottom: 8, fontWeight: 500 }}>
            1. Через style prop
          </p>
          <pre
            style={{
              color: '#000',
              background: '#f5f5f5',
              padding: 12,
              borderRadius: 4,
              fontSize: 12,
              marginBottom: 8,
              overflow: 'auto',
            }}
          >
            {`<BlockGradientScroll
  variant="white"
  style={{
    maxHeight: 200,
    overflowY: 'auto',
    padding: 20,
    background: '#e8f5e9',
    border: '2px solid #4caf50',
  }}
>
  {children}
</BlockGradientScroll>`}
          </pre>
          <BlockGradientScroll
            variant="white"
            style={{
              maxHeight: 200,
              overflowY: 'auto',
              padding: 20,
              background: '#e8f5e9',
              borderRadius: 8,
              border: '2px solid #4caf50',
            }}
          >
            {generateItems(5)}
          </BlockGradientScroll>
        </div>

        {/* className prop */}
        <div>
          <p style={{ marginBottom: 8, fontWeight: 500 }}>2. Через className</p>
          <pre
            style={{
              color: '#000',
              background: '#f5f5f5',
              padding: 12,
              borderRadius: 4,
              fontSize: 12,
              marginBottom: 8,
              overflow: 'auto',
            }}
          >
            {`.custom-gradient-box {
  max-height: 200px;
  overflow-y: auto;
  padding: 20px;
  background: #fff8e1;
  border: 2px dashed #ffa000;
}

<BlockGradientScroll
  variant="white"
  className="custom-gradient-box"
>
  {children}
</BlockGradientScroll>`}
          </pre>
          <BlockGradientScroll variant="white" className="custom-gradient-box">
            {generateItems(5)}
          </BlockGradientScroll>
        </div>

        {/* $css prop */}
        <div>
          <p style={{ marginBottom: 8, fontWeight: 500 }}>
            3. Через $css (styled-components)
          </p>
          <pre
            style={{
              color: '#000',
              background: '#f5f5f5',
              padding: 12,
              borderRadius: 4,
              fontSize: 12,
              marginBottom: 8,
              overflow: 'auto',
            }}
          >
            {`<BlockGradientScroll
  variant="white"
  $css={\`
    max-height: 200px;
    overflow-y: auto;
    padding: 20px;
    background: linear-gradient(...);
    border: 2px solid #2196f3;
  \`}
>
  {children}
</BlockGradientScroll>`}
          </pre>
          <BlockGradientScroll
            variant="white"
            $css={`
              max-height: 200px;
              overflow-y: auto;
              padding: 20px;
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border-radius: 8px;
              border: 2px solid #2196f3;
            `}
          >
            {generateItems(5)}
          </BlockGradientScroll>
        </div>
      </div>
    </DemoContainer>
  ),
};

export const AdaptiveLessThan1280: Story = {
  name: '1280 Адаптив',
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  render: () => (
    <DemoContainer>
      <div
        style={{
          display: 'flex',
          gap: 20,
          flexDirection: 'column',
        }}
      >
        <div>
          <p style={{ marginBottom: 8, fontWeight: 500 }}>
            Компонент `BlockGradientScroll`
          </p>
          <BlockGradientScroll
            variant="white"
            style={{
              maxHeight: 300,
              overflowY: 'auto',
              padding: 24,
              borderRadius: 8,
              border: `1px solid ${outlineAccent}`,
            }}
          >
            {generateItems(8)}
          </BlockGradientScroll>
        </div>

        <div>
          <p style={{ marginBottom: 8, fontWeight: 500 }}>
            Миксин `BlockGradientScrollMixin`
          </p>
          <BoxWithMixin>{generateItems(8)}</BoxWithMixin>
        </div>
      </div>
    </DemoContainer>
  ),
};
