import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import type { EmptyStateButtonProps, EmptyStateImageVariant } from '@ui-kit/components/EmptyState';
import { EmptyState } from '@ui-kit/components/EmptyState';
import { PageTitle } from '@ui-kit/components/PageTitle';
import { BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconPlus } from '@ui-kit/icons';
import { backgroundPrimary, surfaceSolidCard, textSecondary } from '@ui-kit/tokens';
import type { CSSProperties, ReactNode } from 'react';

import { DocPair } from '../../kit/DocPair';
import { Measure, MeasureLegend } from '../../kit/Measure';
import { emptyStateImageHandlers } from './emptyStateImages';

const meta: Meta = {
  title: 'Композиции/EmptyState/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
    // настоящие иллюстрации вместо запасной картинки, см. emptyStateImages.ts
    msw: { handlers: emptyStateImageHandlers },
  },
};

export default meta;

type Story = StoryObj;

const Caption = ({ children }: { children: ReactNode }) => (
  <BodyS style={{ color: textSecondary, marginBottom: s.x8 }}>{children}</BodyS>
);

const card: CSSProperties = {
  padding: s.x16,
  borderRadius: s.x8,
  backgroundColor: surfaceSolidCard,
};

const grid = (min: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
  gap: s.x12,
});

const accent = (text: string, plus = false): EmptyStateButtonProps => ({
  type: 'button',
  props: { text, view: 'accent', contentLeft: plus ? <IconPlus color="inherit" /> : undefined },
});

const secondary = (text: string): EmptyStateButtonProps => ({
  type: 'button',
  props: { text, view: 'secondary' },
});

const link = (text: string, view: 'accent' | 'default' = 'accent'): EmptyStateButtonProps => ({
  type: 'link',
  props: { text, view },
});

/* Иллюстрации: подписи как в тексте документа */

const ILLUSTRATIONS: [EmptyStateImageVariant, string][] = [
  ['no-content', 'Нет контента'],
  ['not-found', 'Ничего не найдено'],
  ['loading', 'Загрузка'],
  ['life-circle', 'Жизненный цикл'],
  ['need-access', 'Нужен доступ'],
  ['no-access', 'Нет доступа'],
  ['success', 'Успех'],
];

const ERRORS: [EmptyStateImageVariant, string][] = [
  ['400', '400'],
  ['401', '401'],
  ['403', '403'],
  ['404', '404'],
  ['409', '409'],
  ['500', '500'],
  ['502', '502'],
  ['503', '503'],
  ['unidentified', 'Неопознанная ошибка'],
];

const LABELS = Object.fromEntries([...ILLUSTRATIONS, ...ERRORS]);

/* Живая настройка */

type PlaygroundArgs = {
  Size: 'S' | 'M' | 'L';
  '3D Icon': EmptyStateImageVariant;
  Title: string;
  Subtitle: boolean;
  Buttons: 0 | 1 | 2;
  'Extra button': boolean;
};

const buttonsFor = (size: PlaygroundArgs['Size'], count: number): EmptyStateButtonProps[] => {
  if (count === 0) {
    return [];
  }

  if (size === 'S') {
    return [link('Создать отчёт')];
  }

  if (size === 'M') {
    return [secondary('Создать отчёт')];
  }

  return count === 2 ? [secondary('Обновить'), accent('Создать отчёт')] : [accent('Создать отчёт')];
};

export const Playground: StoryObj<PlaygroundArgs> = {
  name: 'Живая настройка',
  args: {
    Size: 'M',
    '3D Icon': 'no-content',
    Title: 'Отчётов пока нет',
    Subtitle: true,
    Buttons: 1,
    'Extra button': false,
  },
  argTypes: {
    Size: {
      control: 'inline-radio',
      options: ['S', 'M', 'L'],
      description: 'Размер Empty State',
    },
    '3D Icon': {
      control: { type: 'select', labels: LABELS },
      options: [...ILLUSTRATIONS, ...ERRORS].map(([v]) => v),
      description: 'Иллюстрация над заголовком: 3D Icon или Error 3D Icon',
    },
    Title: { control: 'text', description: 'Заголовок' },
    Subtitle: { control: 'boolean', description: 'Описание под заголовком' },
    Buttons: {
      control: 'inline-radio',
      options: [0, 1, 2],
      description: 'Число кнопок. Две кнопки только в L. Уровень кнопки по размеру: S Accent Link, M Secondary Basic, L Accent Basic',
    },
    'Extra button': {
      control: 'boolean',
      description: 'Дополнительная кнопка под рядом кнопок, только в L',
      if: { arg: 'Size', eq: 'L' },
    },
  },
  render: (args) => (
    <EmptyState
      size={args.Size.toLowerCase() as 's' | 'm' | 'l'}
      variant={args['3D Icon']}
      title={args.Title}
      subtitle={args.Subtitle ? 'Здесь вы можете создавать отчёты и работать над ними' : undefined}
      buttons={buttonsFor(args.Size, args.Buttons)}
      extraButton={args.Size === 'L' && args['Extra button'] ? link('Справка', 'default') : undefined}
    />
  ),
};

/* Размеры и отступы */

const spacingGaps = [
  { a: '.emptyState__icon', b: '.emptyState__title', dir: 'v' as const },
  { a: '.emptyState__title', b: '.emptyState__subtitle', dir: 'v' as const },
  { a: '.emptyState__subtitle', b: '.emptyState__buttons', dir: 'v' as const },
  { a: '.emptyState__buttons > :first-child', b: '.emptyState__buttons > :nth-child(2)', dir: 'h' as const },
  { a: '.emptyState__buttons', b: '.emptyState__extraButton', dir: 'v' as const },
];

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => (
    <div style={{ display: 'grid', gap: s.x24 }}>
      <div>
        <Caption>S</Caption>
        <Measure gaps={spacingGaps}>
          <EmptyState
            size="s"
            variant="no-content"
            title="Пока ничего нет"
            subtitle="Когда появятся, вы найдёте их здесь"
            buttons={[link('Создать отчёт')]}
          />
        </Measure>
      </div>
      <div>
        <Caption>M</Caption>
        <Measure gaps={spacingGaps}>
          <EmptyState
            size="m"
            variant="no-content"
            title="Отчётов пока нет"
            subtitle="Здесь вы можете создавать отчёты и работать над ними"
            buttons={[secondary('Создать отчёт')]}
          />
        </Measure>
      </div>
      <div>
        <Caption>L</Caption>
        <Measure gaps={spacingGaps}>
          <EmptyState
            size="l"
            variant="no-content"
            title="Отчётов пока нет"
            subtitle="Здесь вы можете создавать отчёты и работать над ними"
            buttons={[secondary('Обновить'), accent('Создать отчёт')]}
            extraButton={link('Справка', 'default')}
          />
        </Measure>
      </div>
      <MeasureLegend />
    </div>
  ),
};

/* Размер */

export const SizeS: Story = {
  name: 'S',
  render: () => (
    <div style={{ ...card, maxWidth: 360 }}>
      <EmptyState size="s" variant="no-content" title="Пока ничего нет" />
    </div>
  ),
};

export const SizeM: Story = {
  name: 'M',
  render: () => (
    <EmptyState size="m" variant="no-content" title="[Отчётов] пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
  ),
};

export const SizeL: Story = {
  name: 'L',
  render: () => (
    <EmptyState size="l" variant="no-content" title="[Отчётов] пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
  ),
};

/* 3D Icon */

const IllustrationGrid = ({ items }: { items: [EmptyStateImageVariant, string][] }) => (
  <div style={grid(150)}>
    {items.map(([variant, label]) => (
      <div key={variant} style={{ textAlign: 'center' }}>
        <EmptyState size="s" variant={variant} title={label} />
      </div>
    ))}
  </div>
);

export const Illustrations: Story = {
  name: '3D Icon и Error 3D Icon',
  render: () => (
    <div style={{ display: 'grid', gap: s.x24 }}>
      <div>
        <Caption>3D Icon, размер S</Caption>
        <IllustrationGrid items={ILLUSTRATIONS} />
      </div>
      <div>
        <Caption>Error 3D Icon, размер S</Caption>
        <IllustrationGrid items={ERRORS} />
      </div>
      <div>
        <Caption>Одна иллюстрация в размерах S, M и L</Caption>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: s.x24, flexWrap: 'wrap' }}>
          {(['s', 'm', 'l'] as const).map((size) => (
            <EmptyState key={size} size={size} variant="no-content" />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Subtitle: Story = {
  name: 'Subtitle',
  render: () => (
    <div style={grid(300)}>
      <div>
        <Caption>Subtitle включён</Caption>
        <EmptyState size="m" variant="no-content" title="Отчётов пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
      </div>
      <div>
        <Caption>Subtitle выключен</Caption>
        <EmptyState size="m" variant="no-content" title="Отчётов пока нет" />
      </div>
    </div>
  ),
};

/* Кнопки */

export const WhenButton: Story = {
  name: 'Когда нужна кнопка',
  render: () => (
    <div style={grid(280)}>
      <div>
        <Caption>Кнопка нужна: пользователь может создать отчёт</Caption>
        <EmptyState
          size="m"
          variant="no-content"
          title="Отчётов пока нет"
          subtitle="Здесь вы можете создавать отчёты и работать над ними"
          buttons={[secondary('Создать отчёт')]}
        />
      </div>
      <div>
        <Caption>Кнопка не нужна: пользователь не может повлиять на пустое состояние</Caption>
        <EmptyState size="m" variant="success" title="Отчётов пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
      </div>
      <div>
        <Caption>Кнопка не нужна: контент добавляют на других страницах</Caption>
        <EmptyState
          size="m"
          variant="no-content"
          title="Избранных сервисов пока нет"
          subtitle="Добавляйте сервисы в избранное с помощью кнопки «Добавить в избранное»"
        />
      </div>
    </div>
  ),
};

export const PairAccent: Story = {
  name: 'Пара: Accent Basic Button',
  render: () => (
    <DocPair
      goodText="Accent Basic Button в Empty State L"
      badText="Accent Basic Button в Empty State M"
      good={
        <EmptyState
          size="l"
          variant="no-content"
          title="[Справочников] пока нет"
          subtitle="Здесь вы можете [создавать справочники] и работать над ними"
          buttons={[accent('[Создать справочник]', true)]}
        />
      }
      bad={
        <EmptyState
          size="m"
          variant="no-content"
          title="Отчётов пока нет"
          subtitle="Здесь вы можете создавать отчёты и работать над ними"
          buttons={[accent('Создать отчёт')]}
        />
      }
    />
  ),
};

export const LinkInM: Story = {
  name: 'Accent Link Button в M',
  render: () => (
    <div style={{ display: 'grid', gap: s.x24 }}>
      <PageTitle
        title="Отчёты"
        rightSlot={({ buttonSize }: { buttonSize: 's' | 'xs' }) => (
          <Button size={buttonSize} view="accent">
            Создать отчёт
          </Button>
        )}
      />
      <div style={card}>
        <EmptyState
          size="m"
          variant="no-content"
          title="Отчётов пока нет"
          subtitle="Здесь вы можете создавать отчёты и работать над ними"
          buttons={[link('Создать отчёт')]}
        />
      </div>
    </div>
  ),
};

export const LinkInS: Story = {
  name: 'Accent Link Button в S',
  render: () => (
    <div style={{ ...card, maxWidth: 360 }}>
      <EmptyState size="s" variant="no-content" title="Пока ничего нет" buttons={[link('Создать отчёт')]} />
    </div>
  ),
};

export const ButtonsL: Story = {
  name: 'Кнопки в L',
  render: () => (
    <EmptyState
      size="l"
      variant="no-content"
      title="Отчётов пока нет"
      subtitle="Здесь вы можете создавать отчёты и работать над ними"
      buttons={[secondary('Обновить'), accent('Создать отчёт')]}
      extraButton={link('Справка', 'default')}
    />
  ),
};

/* Пустой левый блок */

const Block = ({ title, children, style }: { title?: string; children: ReactNode; style?: CSSProperties }) => (
  <div style={{ ...card, display: 'flex', flexDirection: 'column', ...style }}>
    {title ? <BodyS style={{ fontWeight: 600, marginBottom: s.x8 }}>{title}</BodyS> : null}
    <div style={{ flex: 1, display: 'flex' }}>{children}</div>
  </div>
);

export const PairLeftBlock: Story = {
  name: 'Пара: пустой левый блок',
  render: () => (
    <DocPair
      goodText="Одно Empty State L на всю контентную часть страницы"
      badText="Пустое состояние и в левом, и в центральном блоке"
      good={
        <Block style={{ minHeight: 420 }}>
          <EmptyState
            size="l"
            centered
            variant="no-content"
            title="[Справочников] пока нет"
            subtitle="Когда появятся, вы найдёте их здесь"
          />
        </Block>
      }
      bad={
        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: s.x8, minHeight: 420 }}>
          <Block title="Справочники">
            <EmptyState size="s" centered variant="no-content" title="Пока ничего нет" />
          </Block>
          <Block>
            <EmptyState size="m" centered variant="no-content" title="[Справочников] пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
          </Block>
        </div>
      }
    />
  ),
};

export const LeftBlockButtons: Story = {
  name: 'Пустой левый блок: с кнопкой и без',
  render: () => (
    <div style={grid(320)}>
      <div>
        <Caption>Пользователь может добавить контент</Caption>
        <EmptyState
          size="l"
          variant="no-content"
          title="[Справочников] пока нет"
          subtitle="Здесь вы можете [создавать справочники] и работать над ними"
          buttons={[accent('[Создать справочник]', true)]}
        />
      </div>
      <div>
        <Caption>Пользователь не может добавить контент</Caption>
        <EmptyState size="l" variant="no-content" title="[Справочников] пока нет" subtitle="Когда появятся, вы найдёте их здесь" />
      </div>
    </div>
  ),
};

export const Background: Story = {
  name: 'Фон под Empty State',
  render: () => (
    <div style={grid(320)}>
      <div>
        <Caption>На сером фоне страницы</Caption>
        <div style={{ padding: s.x16, borderRadius: s.x8, backgroundColor: backgroundPrimary, border: '1px solid rgba(8, 8, 8, 0.12)', minHeight: 520, display: 'flex' }}>
          <EmptyState
            size="l"
            centered
            variant="no-content"
            title="[Справочников] пока нет"
            subtitle="Здесь вы можете [создавать справочники] и работать над ними"
            buttons={[accent('[Создать справочник]', true)]}
          />
        </div>
      </div>
      <div>
        <Caption>В белом блоке</Caption>
        <div style={{ ...card, minHeight: 520, display: 'flex' }}>
          <EmptyState
            size="l"
            centered
            variant="no-content"
            title="[Справочников] пока нет"
            subtitle="Здесь вы можете [создавать справочники] и работать над ними"
            buttons={[accent('[Создать справочник]', true)]}
          />
        </div>
      </div>
    </div>
  ),
};
