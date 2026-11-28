import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import { IconButton } from '@ui-kit/components/IconButton';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { PopupProvider } from '@ui-kit/components/Popup';
import type { PopupDFSize } from '@ui-kit/components/PopupDF';
import { PopupDF } from '@ui-kit/components/PopupDF';
import { Select } from '@ui-kit/components/Select';
import { SSRProvider } from '@ui-kit/components/SSRProvider';
import { TextField } from '@ui-kit/components/TextField';
import { BodyS, BodyXS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconFilter, IconPlasma } from '@ui-kit/icons';
import { surfaceAccentMinor, surfaceInfo, surfaceSolidPrimary } from '@ui-kit/tokens';
import type { ComponentProps, CSSProperties, ReactNode, RefObject } from 'react';
import { useRef, useState } from 'react';

import { DocPair } from '../../kit/DocPair';

import type { EdgeGap } from '../../kit/EdgeMeasure';
import { EdgeMeasure } from '../../kit/EdgeMeasure';

const meta: Meta = {
  title: 'Локальные компоненты/PopupDF/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

type Placement = NonNullable<ComponentProps<typeof PopupDF>['placement']>;

const slotStyle: CSSProperties = {
  padding: '8px 12px',
  borderRadius: s.x2,
  border: `1px dashed ${surfaceInfo}`,
  color: surfaceInfo,
  backgroundColor: surfaceAccentMinor,
  whiteSpace: 'nowrap',
};

const SlotStub = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={className} style={slotStyle}>
    <BodyS>{children}</BodyS>
  </div>
);

const buttonSize = { l: 's', m: 'xs', s: 'xxs' } as const;
const linkGap = { l: s.x8, m: s.x6, s: s.x4 } as const;

const FooterActions = ({ size, link = false }: { size: PopupDFSize; link?: boolean }) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: linkGap[size] }}>
    {link ? (
      <LinkButton href="/" size={buttonSize[size]} onClick={(e) => e.preventDefault()}>
        LinkButton
      </LinkButton>
    ) : null}
    <Flow mainAxisGap={s.x2}>
      <Button size={buttonSize[size]} view="secondary">
        Отменить
      </Button>
      <Button size={buttonSize[size]} view="accent">
        Добавить
      </Button>
    </Flow>
  </div>
);

const SELECT_ITEMS = [
  { value: '1', label: 'Вариант 1' },
  { value: '2', label: 'Вариант 2' },
];

const FilterFields = ({ count = 3 }: { count?: number }) => (
  <div style={{ display: 'grid', gap: s.x6 }}>
    {Array.from({ length: count }, (_, i) =>
      i % 3 === 2 ? (
        <div key={i} style={{ display: 'flex', gap: s.x4, alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <TextField size="s" label="Текст" placeholder="Введите текст" />
          </div>
          <IconButton size="s" view="secondary">
            <IconFilter size="s" color="inherit" />
          </IconButton>
        </div>
      ) : (
        <Select key={i} size="s" label="Текст" placeholder="Выберите значение" items={SELECT_ITEMS} />
      ),
    )}
  </div>
);

/**
 * Сцена для показа PopupDF прямо на странице: окно открыто и нарисовано внутри рамки
 * (проп `frame`), а не поверх всего экрана. Так пример виден без клика и не закрывает текст.
 */
const Stage = ({
  height = 320,
  children,
}: {
  height?: number;
  children: (frame: RefObject<HTMLDivElement>) => ReactNode;
}) => {
  const frame = useRef<HTMLDivElement>(null);

  return (
    <SSRProvider>
      <PopupProvider>
        <div
          ref={frame}
          style={{
            position: 'relative',
            height,
            borderRadius: s.x8,
            overflow: 'hidden',
            backgroundColor: surfaceSolidPrimary,
          }}
        >
          {children(frame)}
        </div>
      </PopupProvider>
    </SSRProvider>
  );
};

type WindowProps = {
  frame: RefObject<HTMLDivElement>;
  size?: PopupDFSize;
  placement?: Placement;
  width?: number;
  height?: number;
  header?: boolean;
  title?: ReactNode;
  description?: ReactNode;
  close?: boolean;
  subHeader?: ReactNode;
  back?: boolean;
  footer?: boolean;
  link?: boolean;
  resize?: boolean;
  draggable?: boolean;
  body?: ReactNode;
  className?: string;
};

/** Одно открытое окно PopupDF внутри рамки. Крестик закрывает окно, кнопка возвращает его */
const Window = ({
  frame,
  size = 'm',
  placement = 'center',
  width = 340,
  height,
  header = true,
  title = 'Ещё фильтры',
  description = 'Подзаголовок, если нужен',
  close = true,
  subHeader,
  back = false,
  footer = true,
  link = false,
  resize = false,
  draggable = false,
  body,
  className,
}: WindowProps) => {
  const [opened, setOpened] = useState(true);
  // grid с одной ячейкой растягивает окно на заданную высоту, тогда Body прокручивается (как в истории Size L)
  const style: CSSProperties = height
    ? { width, height, display: 'grid', gridTemplateRows: 'minmax(0, 1fr)', gridTemplateColumns: 'minmax(0, 1fr)' }
    : { width };

  return (
    <>
      {opened ? null : (
        <div style={{ position: 'absolute', left: 16, top: 16 }}>
          <Button size="xs" view="secondary" onClick={() => setOpened(true)}>
            Открыть PopupDF
          </Button>
        </div>
      )}
      <PopupDF
        className={className}
        opened={opened}
        onToggle={setOpened}
        frame={frame}
        placement={placement}
        size={size}
        draggable={draggable}
        resizable={resize ? { defaultSize: { width, height: height ?? 240 } } : undefined}
        style={resize ? undefined : style}
      >
        {header ? (
          <PopupDF.Header
            className="pdf-header"
            title={title}
            description={description}
            showCloseButton={close}
            subHeader={subHeader}
            onBackButtonClick={back ? () => undefined : undefined}
          />
        ) : null}
        <PopupDF.Body className="pdf-body">{body ?? <SlotStub>Custom slot</SlotStub>}</PopupDF.Body>
        {footer ? (
          <PopupDF.Footer className="pdf-footer">
            <FooterActions size={size} link={link} />
          </PopupDF.Footer>
        ) : null}
      </PopupDF>
    </>
  );
};

const Caption = ({ children }: { children: ReactNode }) => (
  <BodyS style={{ marginBottom: s.x4 }}>{children}</BodyS>
);

const columns = (min: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
  gap: s.x8,
  alignItems: 'start',
});

/** Два окна рядом в отдельных рамках, с подписью над каждым */
const Duo = ({
  height = 300,
  items,
}: {
  height?: number;
  items: { caption: string; props: Omit<WindowProps, 'frame'> }[];
}) => (
  <div style={columns(320)}>
    {items.map(({ caption, props }) => (
      <div key={caption}>
        <Caption>{caption}</Caption>
        <Stage height={height}>{(frame) => <Window frame={frame} width={300} {...props} />}</Stage>
      </div>
    ))}
  </div>
);

/* Живая настройка */

type PlaygroundArgs = {
  Size: PopupDFSize;
  Placement: Placement;
  Header: boolean;
  Description: boolean;
  Close: boolean;
  Back: boolean;
  subHeader: boolean;
  Footer: boolean;
  LinkButton: boolean;
  ResizeIcon: boolean;
  Draggable: boolean;
};

const PLACEMENTS: Placement[] = [
  'center',
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

export const Playground: StoryObj<PlaygroundArgs> = {
  name: 'Живая настройка',
  args: {
    Size: 'm',
    Placement: 'center',
    Header: true,
    Description: true,
    Close: true,
    Back: false,
    subHeader: false,
    Footer: true,
    LinkButton: false,
    ResizeIcon: false,
    Draggable: false,
  },
  argTypes: {
    Size: { control: 'inline-radio', options: ['s', 'm', 'l'], description: 'Размер окна' },
    Placement: { control: 'select', options: PLACEMENTS, description: 'Положение окна на экране' },
    Header: { control: 'boolean', description: 'Шапка окна' },
    Description: { control: 'boolean', description: 'Описание под заголовком', if: { arg: 'Header', truthy: true } },
    Close: { control: 'boolean', description: 'Кнопка закрытия', if: { arg: 'Header', truthy: true } },
    Back: { control: 'boolean', description: 'Кнопка «Назад»', if: { arg: 'Header', truthy: true } },
    subHeader: { control: 'boolean', description: 'Кастомный контент под заголовком', if: { arg: 'Header', truthy: true } },
    Footer: { control: 'boolean', description: 'Блок с кнопками внизу окна' },
    LinkButton: { control: 'boolean', description: 'Дополнительная кнопка Link Button', if: { arg: 'Footer', truthy: true } },
    ResizeIcon: { control: 'boolean', description: 'Иконка ресайза: пользователь тянет окно и меняет размер' },
    Draggable: { control: 'boolean', description: 'Пользователь перетаскивает окно мышью' },
  },
  render: (args) => (
    <Stage height={440}>
      {(frame) => (
        <Window
          key={`${args.Size}-${args.Placement}-${String(args.ResizeIcon)}`}
          frame={frame}
          size={args.Size}
          placement={args.Placement}
          width={396}
          header={args.Header}
          description={args.Description ? 'Подзаголовок, если нужен' : null}
          close={args.Close}
          back={args.Back}
          subHeader={args.subHeader ? <SlotStub>subHeader</SlotStub> : undefined}
          footer={args.Footer}
          link={args.LinkButton}
          resize={args.ResizeIcon}
          draggable={args.Draggable}
          body={<FilterFields count={2} />}
        />
      )}
    </Stage>
  ),
};

/* Пары к правилам с запретом */

export const PairUse: Story = {
  name: 'Пара: когда не использовать',
  render: () => (
    <DocPair
      goodText="Объёмный контент и действие: поля формы и кнопки"
      badText="Одна короткая справочная фраза"
      good={
        <Stage height={340}>
          {(frame) => <Window frame={frame} width={280} body={<FilterFields count={2} />} />}
        </Stage>
      }
      bad={
        <Stage height={340}>
          {(frame) => (
            <Window
              frame={frame}
              width={280}
              title="Подсказка"
              description={null}
              footer={false}
              body={<BodyS>Сумма указана без НДС</BodyS>}
            />
          )}
        </Stage>
      }
    />
  ),
};

export const PairHeight: Story = {
  name: 'Пара: длинный контент',
  render: () => (
    <DocPair
      goodText="Высота окна ограничена, Body прокручивается, кнопки на месте"
      badText="Окно выше видимой области, кнопки ушли за край"
      good={
        <Stage height={340}>
          {(frame) => <Window frame={frame} width={280} height={300} body={<FilterFields count={6} />} />}
        </Stage>
      }
      bad={
        <Stage height={340}>
          {(frame) => <Window frame={frame} width={280} placement="top" body={<FilterFields count={6} />} />}
        </Stage>
      }
    />
  ),
};

const WIN = '.popup-base-root > div > div';

const SPACING_GAPS: EdgeGap[] = [
  { a: WIN, ae: 'top', b: '.pdf-header', be: 'top' },
  { a: WIN, ae: 'left', b: '.pdf-header', be: 'left' },
  { a: 'button[title="Назад"]', ae: 'right', b: '.pdf-title', be: 'left' },
  { a: '.pdf-title', ae: 'bottom', b: '.pdf-desc', be: 'top' },
  { a: '.pdf-desc', ae: 'bottom', b: '.pdf-sub', be: 'top' },
  { a: '.pdf-header', ae: 'bottom', b: '.pdf-body', be: 'top' },
  { a: '.pdf-body', ae: 'bottom', b: '.pdf-footer', be: 'top' },
  { a: '.pdf-footer', ae: 'bottom', b: WIN, be: 'bottom' },
];

const SpacingWindow = ({ size }: { size: PopupDFSize }) => (
  <EdgeMeasure gaps={SPACING_GAPS}>
    <Stage height={330}>
      {(frame) => (
        <Window
          frame={frame}
          size={size}
          width={340}
          back
          title={<div className="pdf-title">Ещё фильтры</div>}
          description={<BodyXS className="pdf-desc">Подзаголовок, если нужен</BodyXS>}
          subHeader={<SlotStub className="pdf-sub">subHeader</SlotStub>}
        />
      )}
    </Stage>
  </EdgeMeasure>
);

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => (
    <div style={columns(380)}>
      <div>
        <Caption>Размер M</Caption>
        <SpacingWindow size="m" />
      </div>
      <div>
        <Caption>Размер S</Caption>
        <SpacingWindow size="s" />
      </div>
    </div>
  ),
};

/* Размеры и положение */

export const Sizes: Story = {
  name: 'Размеры S, M, L',
  render: () => (
    <Stage height={300}>
      {(frame) => (
        <>
          {(
            [
              ['s', 'left'],
              ['m', 'center'],
              ['l', 'right'],
            ] as const
          ).map(([size, placement]) => (
            <Window
              key={size}
              frame={frame}
              size={size}
              placement={placement}
              width={260}
              title={`Размер ${size.toUpperCase()}`}
            />
          ))}
        </>
      )}
    </Stage>
  ),
};

const Mini = ({ frame, placement, resize = false }: { frame: RefObject<HTMLDivElement>; placement: Placement; resize?: boolean }) => (
  <Window
    frame={frame}
    size="s"
    placement={placement}
    width={180}
    height={resize ? 110 : undefined}
    title={placement}
    description={null}
    footer={false}
    resize={resize}
    body={<BodyXS>PopupDF</BodyXS>}
  />
);

export const Placements: Story = {
  name: 'Положение на экране',
  render: () => (
    <Stage height={400}>
      {(frame) => (
        <>
          {(['center', 'top', 'bottom', 'left', 'right'] as const).map((placement) => (
            <Mini key={placement} frame={frame} placement={placement} />
          ))}
        </>
      )}
    </Stage>
  ),
};

export const ResizeCorners: Story = {
  name: 'Иконка ресайза в разных углах',
  render: () => (
    <Stage height={360}>
      {(frame) => (
        <>
          {(['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map((placement) => (
            <Mini key={placement} frame={frame} placement={placement} resize />
          ))}
        </>
      )}
    </Stage>
  ),
};

/* Общие настройки */

export const HeaderToggle: Story = {
  name: 'Header',
  render: () => (
    <Duo
      items={[
        { caption: 'Header включён', props: {} },
        { caption: 'Header выключен', props: { header: false } },
      ]}
    />
  ),
};

export const FooterToggle: Story = {
  name: 'Footer',
  render: () => (
    <Duo
      items={[
        { caption: 'Footer включён', props: {} },
        { caption: 'Footer выключен', props: { footer: false } },
      ]}
    />
  ),
};

export const ResizeIconToggle: Story = {
  name: 'ResizeIcon',
  render: () => (
    <Duo
      items={[
        { caption: 'ResizeIcon включена: иконка в правом нижнем углу', props: { resize: true, height: 200 } },
        { caption: 'ResizeIcon выключена', props: {} },
      ]}
    />
  ),
};

export const Resize: Story = {
  name: 'Resize',
  render: () => (
    <div>
      <Caption>Потяните окно за иконку в правом нижнем углу</Caption>
      <Stage height={380}>
        {(frame) => <Window frame={frame} placement="top-left" width={320} height={220} resize />}
      </Stage>
    </div>
  ),
};

export const Draggable: Story = {
  name: 'Draggable',
  render: () => (
    <div>
      <Caption>Перетащите окно мышью в другое место</Caption>
      <Stage height={360}>{(frame) => <Window frame={frame} width={320} draggable />}</Stage>
    </div>
  ),
};

/* Настройки Header */

export const PairTitle: Story = {
  name: 'Пара: заголовок',
  render: () => (
    <DocPair
      goodText="В Header всегда есть Title"
      badText="Header без Title: только описание и крестик"
      good={<Stage height={260}>{(frame) => <Window frame={frame} width={280} />}</Stage>}
      bad={<Stage height={260}>{(frame) => <Window frame={frame} width={280} title={null} />}</Stage>}
    />
  ),
};

const LONG_TITLE = 'Фильтры по аналитике продаж за квартал по всем подразделениям и каналам';
const LONG_DESCRIPTION =
  'Выберите блок, трайб и аллокацию, чтобы увидеть данные по плану продаж за выбранный квартал с разбивкой по каналам';

export const LongTitle: Story = {
  name: 'Длинный Title',
  render: () => (
    <Stage height={260}>{(frame) => <Window frame={frame} width={300} title={LONG_TITLE} description={null} />}</Stage>
  ),
};

export const Description: Story = {
  name: 'Description',
  render: () => (
    <div style={columns(260)}>
      {[
        { caption: 'С описанием', description: 'Подзаголовок, если нужен' },
        { caption: 'Без описания', description: null },
        { caption: 'Длинное описание: 2 строки и подсказка', description: LONG_DESCRIPTION },
      ].map(({ caption, description }) => (
        <div key={caption}>
          <Caption>{caption}</Caption>
          <Stage height={240}>
            {(frame) => <Window frame={frame} width={250} description={description} footer={false} />}
          </Stage>
        </div>
      ))}
    </div>
  ),
};

export const Close: Story = {
  name: 'Close',
  render: () => (
    <Duo
      height={240}
      items={[
        { caption: 'Close включена', props: { footer: false } },
        { caption: 'Close выключена', props: { footer: false, close: false } },
      ]}
    />
  ),
};

export const Back: Story = {
  name: 'Back',
  render: () => (
    <Stage height={240}>{(frame) => <Window frame={frame} width={320} back footer={false} />}</Stage>
  ),
};

export const SubHeader: Story = {
  name: 'subHeader',
  render: () => (
    <Stage height={280}>
      {(frame) => (
        <Window
          frame={frame}
          width={340}
          footer={false}
          subHeader={
            <div style={{ display: 'flex', gap: s.x4, alignItems: 'center', color: surfaceInfo }}>
              <IconPlasma size="xs" color="inherit" />
              <BodyS>Кастомный слот</BodyS>
            </div>
          }
        />
      )}
    </Stage>
  ),
};

/* Настройки Body */

export const BodyScroll: Story = {
  name: 'Scroll в Body',
  render: () => (
    <Stage height={360}>
      {(frame) => <Window frame={frame} width={320} height={320} body={<FilterFields count={6} />} />}
    </Stage>
  ),
};

export const BodyCustom: Story = {
  name: 'Custom в Body',
  render: () => (
    <Stage height={380}>{(frame) => <Window frame={frame} width={340} body={<FilterFields count={3} />} />}</Stage>
  ),
};

/* Настройки Footer */

export const FooterLink: Story = {
  name: 'LinkButton',
  render: () => (
    <Duo
      height={260}
      items={[
        { caption: 'Две кнопки', props: {} },
        { caption: 'С LinkButton', props: { link: true, width: 340 } },
      ]}
    />
  ),
};
