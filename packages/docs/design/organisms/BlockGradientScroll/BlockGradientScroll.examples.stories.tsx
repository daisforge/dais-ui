import type { Meta, StoryObj } from '@storybook/react';
import { BlockGradientScroll } from '@ui-kit/components/BlockGradientScroll';
import { Button } from '@ui-kit/components/Button';
import { Select } from '@ui-kit/components/Select';
import { TextArea } from '@ui-kit/components/TextArea';
import { TextField } from '@ui-kit/components/TextField';
import { BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { surfaceSolidCard, surfaceSolidPrimary } from '@ui-kit/tokens';
import type { CSSProperties, ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

import { DocPair } from '../../kit/DocPair';
import { ViewportFrame } from '../../kit/ViewportFrame';
import type { ScreenArgs } from '../../kit/ScreenSwitch';
import { SCREEN_ARG_TYPES, SCREEN_ARGS, withScreen } from '../../kit/ScreenSwitch';

const meta: Meta = {
  title: 'Локальные компоненты/BlockGradientScroll/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

type Variant = 'white' | 'gray';

const STORY_ID = 'локальные-компоненты-blockgradientscroll-для-дизайнеров';

const FIELDS = [
  'Объект',
  'Канал',
  'Гипотеза',
  'As Is',
  'To Be',
  'Ответственный',
  'Срок',
  'Комментарий',
];

const Fields = ({ count = FIELDS.length }: { count?: number }) => (
  <div style={{ display: 'grid', gap: s.x6 }}>
    {FIELDS.slice(0, count).map((label) => (
      <TextField key={label} size="s" label={label} placeholder="Введите значение" />
    ))}
  </div>
);

const Footer = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: s.x4, paddingTop: s.x8 }}>
    <Button size="s" view="clear">
      Отменить
    </Button>
    <Button size="s" view="secondary">
      Сохранить
    </Button>
    <Button size="s" view="accent">
      Далее
    </Button>
  </div>
);

const blockBackground = (variant: Variant) => (variant === 'white' ? surfaceSolidCard : surfaceSolidPrimary);

/**
 * Блок страницы со скроллом: контент в BlockGradientScroll, кнопки под ним.
 * Градиент виден, пока ниже есть контент, и исчезает в конце прокрутки.
 * `scroll` прокручивает блок при открытии: 0 начало, 0.5 середина, 1 конец.
 */
const ScrollBlock = ({
  variant = 'white',
  height = 260,
  scroll,
  topGradient = false,
  footer = true,
  children,
}: {
  variant?: Variant;
  height?: number;
  scroll?: number;
  topGradient?: boolean;
  footer?: boolean;
  children?: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;

    if (el && scroll !== undefined) {
      el.scrollTop = (el.scrollHeight - el.clientHeight) * scroll;
    }
  }, [scroll]);

  return (
    <div style={{ padding: s.x8, borderRadius: s.x8, backgroundColor: blockBackground(variant) }}>
      <div style={{ position: 'relative' }}>
        <BlockGradientScroll ref={ref} variant={variant} style={{ maxHeight: height, overflowY: 'auto' }}>
          {children ?? <Fields />}
        </BlockGradientScroll>
        {topGradient ? (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 100,
              pointerEvents: 'none',
              background:
                variant === 'white'
                  ? 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)'
                  : 'linear-gradient(to bottom, rgb(242, 245, 248) 0%, rgba(242, 245, 248, 0) 100%)',
            }}
          />
        ) : null}
      </div>
      {footer ? <Footer /> : null}
    </div>
  );
};

const twoColumns: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: s.x8,
  alignItems: 'start',
};

const Caption = ({ children }: { children: ReactNode }) => (
  <BodyS style={{ marginBottom: s.x4 }}>{children}</BodyS>
);

type PlaygroundArgs = {
  'Цвет градиента': Variant;
  Контент: 'Не помещается' | 'Помещается';
};

export const Playground: StoryObj<PlaygroundArgs & ScreenArgs> = {
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    'Цвет градиента': 'white',
    Контент: 'Не помещается',
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    'Цвет градиента': {
      control: 'inline-radio',
      options: ['white', 'gray'],
      description: 'Под белый или серый фон блока',
    },
    Контент: {
      control: 'inline-radio',
      options: ['Не помещается', 'Помещается'],
      description: 'Помещается ли контент в блок. Это пример, не свойство компонента',
    },
  },
  render: (args) => (
    <div style={{ maxWidth: 560 }}>
      <ScrollBlock variant={args['Цвет градиента']}>
        <Fields count={args.Контент === 'Помещается' ? 2 : FIELDS.length} />
      </ScrollBlock>
    </div>
  ),
};

/* Замер высоты и ширины градиента. Градиент нарисован псевдоэлементом, поэтому размеры берутся из его стилей в браузере */

const MARK = 'rgb(225, 45, 45)';

const markLabel: CSSProperties = {
  position: 'absolute',
  padding: '0 4px',
  borderRadius: 4,
  font: '500 11px/16px sans-serif',
  color: '#fff',
  backgroundColor: MARK,
  whiteSpace: 'nowrap',
};

type Bands = { top: number; left: number; height: number; width: number };

const GradientSize = ({ children, showWidth = false }: { children: ReactNode; showWidth?: boolean }) => {
  const box = useRef<HTMLDivElement>(null);
  const [band, setBand] = useState<Bands>();

  useLayoutEffect(() => {
    const root = box.current;

    if (!root) {
      return undefined;
    }

    const update = () => {
      const el = root.querySelector<HTMLElement>('.blockGradientScroll_container');

      if (!el) {
        return;
      }

      const base = root.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const after = getComputedStyle(el, '::after');

      setBand({
        top: r.bottom - base.top,
        left: r.left - base.left,
        height: parseFloat(after.height) || 0,
        width: parseFloat(after.width) || r.width,
      });
    };
    const observer = new ResizeObserver(update);

    observer.observe(root);
    update();
    document.fonts?.ready.then(update);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={box} style={{ position: 'relative', paddingRight: 64 }}>
      {children}
      {band ? (
        <span aria-hidden="true">
          <span
            style={{
              position: 'absolute',
              left: band.left,
              top: band.top - band.height,
              width: band.width,
              height: band.height,
              outline: `1px dashed ${MARK}`,
              pointerEvents: 'none',
            }}
          />
          <span
            style={{
              position: 'absolute',
              left: band.left + band.width + 24,
              top: band.top - band.height,
              width: 4,
              height: band.height,
              borderRadius: 2,
              backgroundColor: MARK,
            }}
          />
          <span style={{ ...markLabel, left: band.left + band.width + 34, top: band.top - band.height / 2, transform: 'translateY(-50%)' }}>
            {Math.round(band.height)}
          </span>
          {showWidth ? (
            <span style={{ ...markLabel, left: band.left + band.width / 2, top: band.top - 12, transform: 'translate(-50%, -50%)' }}>
              {`ширина ${Math.round(band.width)}`}
            </span>
          ) : null}
        </span>
      ) : null}
    </div>
  );
};

/* Окна заданной ширины: высота градиента зависит от ширины окна браузера */

const windowStage: CSSProperties = {
  minHeight: '100vh',
  padding: 32,
  boxSizing: 'border-box',
  backgroundColor: surfaceSolidPrimary,
};

const WindowStory: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={windowStage}>
      <div style={{ maxWidth: 640 }}>
        <GradientSize showWidth>
          <ScrollBlock />
        </GradientSize>
      </div>
    </div>
  ),
};

export const Window1440: Story = { ...WindowStory, name: 'Окно 1440 px' };

export const Window1000: Story = { ...WindowStory, name: 'Окно 1000 px' };

export const SpacingLive: Story = {
  name: 'Размер градиента на живом компоненте',
  render: () => (
    <ViewportFrame storyId={`${STORY_ID}--window-1440`} width={1440} height={380} visibleWidth={720} caption="Окно 1440 px" />
  ),
};

export const Adaptive: Story = {
  name: 'Версия 1280',
  render: () => (
    <div style={twoColumns}>
      <ViewportFrame storyId={`${STORY_ID}--window-1440`} width={1440} height={380} visibleWidth={720} caption="Окно 1440 px: градиент 100 px" />
      <ViewportFrame storyId={`${STORY_ID}--window-1000`} width={1000} height={380} visibleWidth={720} caption="Окно 1000 px: градиент 60 px" />
    </div>
  ),
};

/* Форма в блоке со скроллом */

const SELECT_ITEMS = [
  { value: '1', label: 'Вариант 1' },
  { value: '2', label: 'Вариант 2' },
];

export const FormInBlock: Story = {
  name: 'Форма в блоке со скроллом',
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <ScrollBlock height={230}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: s.x6 }}>
          <Select size="s" label="Что тестируется" placeholder="Выберите объект" items={SELECT_ITEMS} />
          <Select size="s" label="Канал" placeholder="Выберите канал" items={SELECT_ITEMS} />
          <div style={{ gridColumn: '1 / -1' }}>
            <TextArea size="s" label="Гипотеза" placeholder="Опишите гипотезу" rightHelper="0/1000" />
          </div>
          <TextField size="s" label="As Is" placeholder="Введите As Is" required />
          <TextField size="s" label="To Be" placeholder="Введите To Be" required />
          <TextField size="s" label="Метрика" placeholder="Введите метрику" />
          <TextField size="s" label="Срок" placeholder="Введите срок" />
        </div>
      </ScrollBlock>
    </div>
  ),
};

/* Пара к правилу с запретом */

export const PairTop: Story = {
  name: 'Пара: градиент сверху',
  render: () => (
    <DocPair
      goodText="Скролл посередине: градиент только внизу блока"
      badText="Скролл посередине: градиент и сверху контента"
      good={<ScrollBlock height={220} scroll={0.5} footer={false} />}
      bad={<ScrollBlock height={220} scroll={0.5} footer={false} topGradient />}
    />
  ),
};

export const ScrollStates: Story = {
  name: 'Градиент при прокрутке',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: s.x8, alignItems: 'start' }}>
      {[
        { scroll: 0, text: 'Начало прокрутки: градиент виден' },
        { scroll: 0.5, text: 'Середина: градиент виден' },
        { scroll: 1, text: 'Конец контента: градиента нет' },
      ].map(({ scroll, text }) => (
        <div key={text}>
          <Caption>{text}</Caption>
          <ScrollBlock height={220} scroll={scroll} footer={false} />
        </div>
      ))}
    </div>
  ),
};

export const NoScroll: Story = {
  name: 'Контент помещается',
  render: () => (
    <div style={{ maxWidth: 560 }}>
      <ScrollBlock height={260}>
        <Fields count={2} />
      </ScrollBlock>
    </div>
  ),
};

export const Variants: Story = {
  name: 'Цвет градиента',
  render: () => (
    <div style={twoColumns}>
      {(['white', 'gray'] as const).map((variant) => (
        <div key={variant}>
          <Caption>{variant === 'white' ? 'white на белом фоне' : 'gray на сером фоне'}</Caption>
          <div style={{ padding: variant === 'gray' ? s.x8 : 0, borderRadius: s.x8, backgroundColor: surfaceSolidCard }}>
            <ScrollBlock variant={variant} height={220} footer={false} />
          </div>
        </div>
      ))}
    </div>
  ),
};
