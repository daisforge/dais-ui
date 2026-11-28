import type { Meta, StoryObj } from '@storybook/react';
import type { NumberFormatAmountProps } from '@ui-kit/components/NumberFormatAmount';
import { NumberFormatAmount } from '@ui-kit/components/NumberFormatAmount';
import { BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconInfoCircleOutline, IconPlasma } from '@ui-kit/icons';
import type { CSSProperties, ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

import { DocPair } from '../../kit/DocPair';
import type { EdgeGap } from '../../kit/EdgeMeasure';
import { EdgeMeasure } from '../../kit/EdgeMeasure';

const meta: Meta = {
  title: 'Локальные компоненты/NumberFormatAmount/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

type Size = 's' | 'xs';
type View = 'default' | 'positive' | 'negative' | 'warning';

const AMOUNT = '1234567.89';

/**
 * Поле с состоянием, как в продукте: можно вводить, стирать и очищать крестиком.
 * Формат в примерах: пробел между разрядами, точка перед дробной частью, 2 знака после точки.
 */
const Amount = ({
  initial = AMOUNT,
  clear = true,
  width = 300,
  ...rest
}: Omit<NumberFormatAmountProps, 'value' | 'onChange' | 'onClear'> & {
  initial?: string;
  clear?: boolean;
  width?: number;
}) => {
  const [value, setValue] = useState(initial);

  return (
    <div style={{ width, maxWidth: '100%' }}>
      <NumberFormatAmount
        size="s"
        thousandSeparator=" "
        decimalSeparator="."
        decimalScale={2}
        placeholder="Сумма"
        {...rest}
        value={value}
        onChange={(e) => setValue(e?.target?.value ?? '')}
        onClear={clear ? () => setValue('') : undefined}
      />
    </div>
  );
};

/** Поле без состояния: значение хранит само поле. Так работает вставка числа при разделителе «запятая» */
const FreeAmount = ({ width = 300, ...rest }: NumberFormatAmountProps & { width?: number }) => (
  <div style={{ width, maxWidth: '100%' }}>
    <NumberFormatAmount size="s" thousandSeparator=" " placeholder="Сумма" {...rest} />
  </div>
);

const icon = (size: Size) => <IconPlasma size={size === 's' ? 's' : 'xs'} color="inherit" />;

const Caption = ({ children }: { children: ReactNode }) => (
  <BodyS style={{ marginBottom: s.x4 }}>{children}</BodyS>
);

const grid = (min = 220): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
  gap: s.x8,
  alignItems: 'start',
});

const Cell = ({ caption, children }: { caption: string; children: ReactNode }) => (
  <div>
    <Caption>{caption}</Caption>
    {children}
  </div>
);

/* Живая настройка */

type PlaygroundArgs = {
  Size: Size;
  Label: boolean;
  'Title Caption': boolean;
  Optional: boolean;
  Required: boolean;
  'Has Hint': boolean;
  Value: 'Empty' | 'Filled';
  View: View;
  Disabled: boolean;
  ReadOnly: boolean;
  LeftIcon: boolean;
  Clear: boolean;
  RightIcon: boolean;
  HintInner: boolean;
  HintOuter: boolean;
  TB: boolean;
  TA: boolean;
  'Left caption': boolean;
  'Разделитель дробной части': '.' | ',';
  'Знаков после разделителя': number;
};

export const Playground: StoryObj<PlaygroundArgs> = {
  name: 'Живая настройка',
  args: {
    Size: 's',
    Label: true,
    'Title Caption': false,
    Optional: false,
    Required: false,
    'Has Hint': false,
    Value: 'Filled',
    View: 'default',
    Disabled: false,
    ReadOnly: false,
    LeftIcon: false,
    Clear: true,
    RightIcon: false,
    HintInner: false,
    HintOuter: false,
    TB: false,
    TA: false,
    'Left caption': true,
    'Разделитель дробной части': '.',
    'Знаков после разделителя': 2,
  },
  argTypes: {
    Size: { control: 'inline-radio', options: ['s', 'xs'], description: 'Размер: 40 S или 32 XS' },
    Label: { control: 'boolean', description: 'Заголовок Title над полем' },
    'Title Caption': { control: 'boolean', description: 'Подпись справа над полем', if: { arg: 'Label', truthy: true } },
    Optional: { control: 'boolean', description: 'Пометка необязательного поля', if: { arg: 'Label', truthy: true } },
    Required: { control: 'boolean', description: 'Красная точка обязательного поля' },
    'Has Hint': { control: 'boolean', description: 'Иконка подсказки у Title', if: { arg: 'Label', truthy: true } },
    Value: { control: 'inline-radio', options: ['Empty', 'Filled'], description: 'Пустое поле или с числом' },
    View: {
      control: 'inline-radio',
      options: ['default', 'positive', 'negative', 'warning'],
      description: 'Цвет поля и подписи под ним',
    },
    Disabled: { control: 'boolean', description: 'Поле недоступно' },
    ReadOnly: { control: 'boolean', description: 'Только чтение' },
    LeftIcon: { control: 'boolean', description: 'Иконка слева' },
    Clear: { control: 'boolean', description: 'Крестик очистки, когда в поле есть число' },
    RightIcon: { control: 'boolean', description: 'Иконка справа' },
    HintInner: { control: 'boolean', description: 'Подсказка внутри поля, когда Label выключен', if: { arg: 'Label', truthy: false } },
    HintOuter: { control: 'boolean', description: 'Подсказка справа от поля, когда Label выключен', if: { arg: 'Label', truthy: false } },
    TB: { control: 'boolean', description: 'Текст до значения' },
    TA: { control: 'boolean', description: 'Текст после значения' },
    'Left caption': { control: 'boolean', description: 'Подпись под полем' },
    'Разделитель дробной части': {
      control: 'inline-radio',
      options: ['.', ','],
      description: 'Точка или запятая. Настраивает разработчик',
    },
    'Знаков после разделителя': {
      control: { type: 'number', min: 0, max: 6 },
      description: 'Сколько знаков помещается после разделителя. Настраивает разработчик',
    },
  },
  render: (args) => {
    const hint = args.Label ? args['Has Hint'] : args.HintInner || args.HintOuter;

    return (
      <Amount
        key={[args.Value, args.Clear, args['Разделитель дробной части'], args['Знаков после разделителя']].join('-')}
        initial={args.Value === 'Filled' ? AMOUNT : ''}
        size={args.Size}
        label={args.Label ? 'Title' : undefined}
        titleCaption={args.Label && args['Title Caption'] ? 'Title Caption' : undefined}
        optional={args.Label && args.Optional}
        required={args.Required}
        hasRequiredIndicator={args.Required}
        hintText={hint ? 'Подсказка' : undefined}
        hintTargetPlacement={!args.Label && args.HintInner ? 'inner' : 'outer'}
        view={args.View}
        disabled={args.Disabled}
        readOnly={args.ReadOnly}
        contentLeft={args.LeftIcon ? icon(args.Size) : undefined}
        contentRight={args.RightIcon ? icon(args.Size) : undefined}
        clear={args.Clear}
        textBefore={args.TB ? 'TB' : undefined}
        textAfter={args.TA ? 'TA' : undefined}
        leftHelper={args['Left caption'] ? 'Left caption' : undefined}
        decimalSeparator={args['Разделитель дробной части']}
        decimalScale={args['Знаков после разделителя']}
        width={340}
      />
    );
  },
};

/* Живой замер отступов */

const FIELD = '.input-wrapper';

const SPACING_GAPS: EdgeGap[] = [
  { a: 'label', ae: 'bottom', b: FIELD, be: 'top' },
  { a: FIELD, ae: 'top', b: FIELD, be: 'bottom', aside: true },
  { a: FIELD, ae: 'bottom', b: '.nf-helper', be: 'top' },
  { a: FIELD, ae: 'left', b: '.nf-left', be: 'left' },
  { a: '.nf-left', ae: 'right', b: 'input', be: 'left' },
  { a: '.nf-right', ae: 'right', b: FIELD, be: 'right' },
];

const SPACING_GAPS_PLAIN: EdgeGap[] = [
  { a: FIELD, ae: 'left', b: 'input', be: 'left' },
  { a: FIELD, ae: 'top', b: FIELD, be: 'bottom', aside: true },
];

const SpacingField = ({ size, plain = false }: { size: Size; plain?: boolean }) => (
  <EdgeMeasure gaps={plain ? SPACING_GAPS_PLAIN : SPACING_GAPS}>
    <div style={{ padding: '4px 48px 24px 0' }}>
      {plain ? (
        <Amount size={size} width={280} clear={false} label={size === 's' ? '40 S' : '32 XS'} />
      ) : (
        <Amount
          size={size}
          width={280}
          clear={false}
          label={size === 's' ? '40 S' : '32 XS'}
          contentLeft={<span className="nf-left" style={{ display: 'inline-flex' }}>{icon(size)}</span>}
          contentRight={<span className="nf-right" style={{ display: 'inline-flex' }}>{icon(size)}</span>}
          leftHelper={<span className="nf-helper" style={{ display: 'block' }}>Left caption</span>}
        />
      )}
    </div>
  </EdgeMeasure>
);

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => (
    <div style={grid(330)}>
      <SpacingField size="s" />
      <SpacingField size="xs" />
      <SpacingField size="s" plain />
      <SpacingField size="xs" plain />
    </div>
  ),
};

/* Заголовок */

export const LabelExample: Story = {
  name: 'Label',
  render: () => (
    <div style={grid()}>
      <Cell caption="С Label">
        <Amount label="Title" width={240} />
      </Cell>
      <Cell caption="Без Label">
        <Amount width={240} />
      </Cell>
      <Cell caption="С Title Caption">
        <Amount label="Title" titleCaption="Title Caption" width={240} />
      </Cell>
    </div>
  ),
};

export const OptionalExample: Story = {
  name: 'Optional',
  render: () => <Amount label="Title" optional width={260} />,
};

export const RequiredExample: Story = {
  name: 'Required',
  render: () => (
    <div style={grid()}>
      <Cell caption="С Label">
        <Amount label="Title" required hasRequiredIndicator width={240} />
      </Cell>
      <Cell caption="Без Label">
        <Amount required hasRequiredIndicator width={240} />
      </Cell>
    </div>
  ),
};

/* Пара к правилу «у поля одна подсказка». Вторую подсказку в коде не поставить, сторона «нельзя» собрана иконкой */

export const PairHint: Story = {
  name: 'Пара: одна подсказка',
  render: () => (
    <DocPair
      goodText="Одна подсказка у Title"
      badText="Две подсказки: у Title и внутри поля"
      good={<Amount label="Title" hintText="Подсказка" width={260} />}
      bad={
        <Amount
          label="Title"
          hintText="Подсказка"
          width={260}
          contentRight={<IconInfoCircleOutline size="s" color="inherit" />}
        />
      }
    />
  ),
};

/* Состояния */

export const ValueExample: Story = {
  name: 'Value',
  render: () => (
    <div style={grid()}>
      <Cell caption="Empty, 40 S">
        <Amount label="Title" initial="" width={240} />
      </Cell>
      <Cell caption="Filled, 40 S">
        <Amount label="Title" width={240} />
      </Cell>
      <Cell caption="Empty, 32 XS">
        <Amount size="xs" label="Title" initial="" width={240} />
      </Cell>
      <Cell caption="Filled, 32 XS">
        <Amount size="xs" label="Title" width={240} />
      </Cell>
    </div>
  ),
};

export const ViewExample: Story = {
  name: 'View',
  render: () => (
    <div style={grid()}>
      {(['default', 'positive', 'negative', 'warning'] as const).map((view) => (
        <Cell key={view} caption={view}>
          <Amount view={view} leftHelper="Left caption" width={240} />
        </Cell>
      ))}
    </div>
  ),
};

/** Фокус ставится один раз при открытии, без прокрутки страницы */
const FocusedAmount = () => {
  const box = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    box.current?.querySelector('input')?.focus({ preventScroll: true });
  }, []);

  return (
    <div ref={box}>
      <Amount label="Focused" contentRight={icon('s')} width={240} />
    </div>
  );
};

export const States: Story = {
  name: 'Focused, Disabled, ReadOnly',
  render: () => (
    <div style={grid()}>
      <FocusedAmount />
      <Amount label="Disabled" disabled contentRight={icon('s')} width={240} />
      <Amount label="ReadOnly" readOnly contentRight={icon('s')} width={240} />
    </div>
  ),
};

/* Контент внутри поля */

export const ContentExample: Story = {
  name: 'LeftIcon, ContentRight, HintOuter',
  render: () => (
    <div style={grid(240)}>
      <Cell caption="LeftIcon">
        <Amount contentLeft={icon('s')} clear={false} width={240} />
      </Cell>
      <Cell caption="Clear, RightIcon и HintInner">
        <Amount contentRight={icon('s')} hintText="Подсказка" hintTargetPlacement="inner" width={240} />
      </Cell>
      <Cell caption="HintOuter">
        <Amount hintText="Подсказка" hintTargetPlacement="outer" width={240} />
      </Cell>
    </div>
  ),
};

export const TextBeforeAfter: Story = {
  name: 'TB и TA',
  render: () => (
    <div style={grid()}>
      <Cell caption="Со значением">
        <Amount textBefore="TB" textAfter="TA" width={240} />
      </Cell>
      <Cell caption="С плейсхолдером">
        <Amount textBefore="TB" textAfter="TA" initial="" width={240} />
      </Cell>
      <Cell caption="Сумма в рублях">
        <Amount label="Сумма" textAfter="₽" initial="150000" width={240} />
      </Cell>
    </div>
  ),
};

/* Механика ввода */

export const Decimal: Story = {
  name: 'Дробная часть',
  render: () => (
    <div style={grid()}>
      <Cell caption="Разделитель точка">
        <Amount label="Сумма" initial="1234.5" width={240} />
      </Cell>
      <Cell caption="Разделитель запятая">
        <Amount label="Сумма" decimalSeparator="," initial="1234,5" width={240} />
      </Cell>
      <Cell caption="2 знака: 1234567.899 показано так">
        <Amount label="Сумма" initial="1234567.899" width={240} />
      </Cell>
      <Cell caption="Фиксированные 2 знака: 12 показано так">
        <Amount label="Сумма" fixedDecimalScale initial="12" width={240} />
      </Cell>
    </div>
  ),
};

export const Negative: Story = {
  name: 'Отрицательные числа',
  render: () => (
    <div style={grid()}>
      <Cell caption="Отрицательное число">
        <Amount label="Сумма" initial="-1500" width={240} />
      </Cell>
      <Cell caption="Отрицательные запрещены: минус не вводится">
        <Amount label="Сумма" allowNegative={false} initial="" placeholder="Попробуйте ввести -5" width={240} />
      </Cell>
    </div>
  ),
};

export const LeadingZeros: Story = {
  name: 'Нули в начале',
  render: () => (
    <Cell caption="Введите 000123 и уйдите из поля: останется 123">
      <Amount label="Сумма" initial="" placeholder="000123" width={260} />
    </Cell>
  ),
};

export const Paste: Story = {
  name: 'Вставка числа',
  render: () => (
    <Cell caption="Скопируйте 1234.56 и вставьте в поле: точка станет запятой">
      <FreeAmount label="Сумма" decimalSeparator="," decimalScale={2} width={260} />
    </Cell>
  ),
};

export const MaxLength: Story = {
  name: 'Максимальная длина',
  render: () => (
    <Cell caption="Длина 5: помещается 1 234">
      <Amount label="Сумма" maxLength={5} initial="" placeholder="Введите 12345" width={260} />
    </Cell>
  ),
};
