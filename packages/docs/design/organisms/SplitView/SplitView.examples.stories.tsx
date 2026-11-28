import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@ui-kit/components/Avatar';
import { Badge } from '@ui-kit/components/Badge';
import { Button } from '@ui-kit/components/Button';
import { Chip } from '@ui-kit/components/Chip';
import { Divider } from '@ui-kit/components/Divider';
import { Flow } from '@ui-kit/components/Flow';
import { IconButton } from '@ui-kit/components/IconButton';
import { PageTitle } from '@ui-kit/components/PageTitle';
import type {
  SplitViewProps,
  SplitViewSlotSizesProps,
} from '@ui-kit/components/SplitView';
import {
  SplitView,
  splitViewClassNames as svCls,
} from '@ui-kit/components/SplitView';
import { type ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import { IconTabItem, Tabs } from '@ui-kit/components/Tabs';
import { BodyS } from '@ui-kit/components/Typography';
import { Widget, widgetClassNames as wCls } from '@ui-kit/components/Widget';
import { s } from '@ui-kit/constants';
import {
  IconChatOutline,
  IconChevronLeft,
  IconChevronRight,
  IconClip,
  IconClockCircleOutline,
  IconCopyOutline,
  IconDocumentOutline,
  IconHistory,
  IconInfoCircleOutline,
} from '@ui-kit/icons';
import { PageLayout } from '@ui-kit/layouts/PageLayout';
import {
  backgroundPrimary,
  shadowDownSoftS,
  surfaceAccentMinor,
  surfaceInfo,
  surfaceSolidCard,
  surfaceSolidSecondary,
  textSecondary,
} from '@ui-kit/tokens';
import type {
  CSSProperties,
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import type { MeasureGap } from '../../kit/Measure';
import { Measure, MeasureLegend } from '../../kit/Measure';
import { ViewportFrame } from '../../kit/ViewportFrame';
import type { ScreenArgs } from '../../kit/ScreenSwitch';
import { SCREEN_ARG_TYPES, SCREEN_ARGS, withScreen } from '../../kit/ScreenSwitch';

/*
 * Split-view занимает высоту окна браузера: от низа хедера до низа страницы.
 * На дизайн-странице примеры показываются двумя способами:
 * - в рамке заданной высоты прямо на странице (высота панели задаётся через `$css`,
 *   всё остальное, отступы, ширина, Widget, работает как в коде);
 * - в окне нужной ширины через ViewportFrame (истории «Окно: …»), где высоту, отступы
 *   и ширину Split-view считает сам компонент от размера окна.
 */

const meta: Meta = {
  title: 'Композиции/SplitView/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

const frameId = (name: string) =>
  `композиции-splitview-для-дизайнеров--${name}`;

const noop = () => undefined;

/* Данные таблицы: выдуманные и нейтральные */

type Task = {
  id: number;
  title: string;
  status: string;
  due: string;
  owner: string;
};

const TASKS: Task[] = [
  { id: 1024, title: 'Согласование договора поставки', status: 'В работе', due: '28.11.2026', owner: 'Отдел закупок' },
  { id: 1025, title: 'Проверка счёта на оплату', status: 'Новая', due: '30.11.2026', owner: 'Бухгалтерия' },
  { id: 1026, title: 'Продление лицензии', status: 'На согласовании', due: '02.12.2026', owner: 'ИТ-отдел' },
  { id: 1027, title: 'Акт сверки с поставщиком', status: 'В работе', due: '04.12.2026', owner: 'Бухгалтерия' },
  { id: 1028, title: 'Изменение лимита по проекту', status: 'Новая', due: '05.12.2026', owner: 'Финансовый отдел' },
  { id: 1029, title: 'Закупка оборудования', status: 'На доработке', due: '08.12.2026', owner: 'Отдел закупок' },
  { id: 1030, title: 'Отчёт за третий квартал', status: 'Готово', due: '10.12.2026', owner: 'Финансовый отдел' },
  { id: 1031, title: 'Договор аренды офиса', status: 'На согласовании', due: '12.12.2026', owner: 'Юридический отдел' },
  { id: 1032, title: 'Возврат авансового платежа', status: 'В работе', due: '15.12.2026', owner: 'Бухгалтерия' },
  { id: 1033, title: 'Пересмотр бюджета', status: 'Новая', due: '18.12.2026', owner: 'Финансовый отдел' },
  { id: 1034, title: 'Обновление реквизитов', status: 'Готово', due: '20.12.2026', owner: 'Юридический отдел' },
  { id: 1035, title: 'Оплата услуг связи', status: 'В работе', due: '22.12.2026', owner: 'ИТ-отдел' },
];

/* Строка по индексу: индекс приходит из выделения строки в таблице */
const taskAt = (index: number): Task =>
  TASKS[index] ?? { id: 0, title: '', status: '', due: '', owner: '' };

const COLUMNS: readonly ColumnConfig<Task>[] = [
  { key: 'id', name: '№', width: 72 },
  { key: 'title', name: 'Задача', width: 260 },
  { key: 'status', name: 'Статус', width: 150 },
  { key: 'due', name: 'Срок', width: 110 },
  { key: 'owner', name: 'Исполнитель', width: 170 },
];

type RowState = [
  number | undefined,
  Dispatch<SetStateAction<number | undefined>>,
];

/* Таблица: клик по строке выделяет строку целиком (highlightActiveType: 'row') */
const TaskTable = ({
  height,
  rowState,
  onRow,
}: {
  height: number | string;
  rowState: RowState;
  onRow?: (task: Task | undefined) => void;
}) => (
  <TableCanvas
    tableConfig={{
      containerStyle: { height },
      cellsSelection: { mode: 'range-cell' },
      highlightActiveType: 'row',
      highlightActiveRow: {
        state: rowState,
        onChange: ({ row }) => onRow?.(row),
      },
    }}
    columnConfig={COLUMNS}
    rows={TASKS}
  />
);

/* Содержимое Split-view */

const slotStyle: CSSProperties = {
  padding: s.x4,
  borderRadius: s.x2,
  border: `1px dashed ${surfaceInfo}`,
  color: surfaceInfo,
  backgroundColor: surfaceAccentMinor,
};

const SlotStub = ({ children }: { children: ReactNode }) => (
  <div style={slotStyle}>
    <BodyS>{children}</BodyS>
  </div>
);

const groupStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '140px 1fr',
  rowGap: 8,
  columnGap: 16,
  padding: 12,
  borderRadius: 12,
  backgroundColor: surfaceSolidSecondary,
};

const Field = ({ label, value }: { label: string; value: string }) => (
  <>
    <BodyS style={{ color: textSecondary }}>{label}</BodyS>
    <BodyS>{value}</BodyS>
  </>
);

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <div style={{ display: 'grid', gap: 6, padding: 12 }}>
    <BodyS style={{ fontWeight: 600 }}>{title}</BodyS>
    {children}
  </div>
);

const DOCUMENTS = [
  'Договор поставки, версия 3',
  'Спецификация к договору',
  'Протокол разногласий',
  'Счёт на предоплату',
  'Акт приёма-передачи',
  'Доверенность на подписание',
  'Письмо поставщика',
  'Расчёт стоимости',
];

const TaskBody = ({ task, long = false }: { task: Task; long?: boolean }) => (
  <div style={{ display: 'grid', gap: 8 }}>
    <div style={groupStyle}>
      <Field label="Тип" value="Согласование" />
      <Field label="Статус" value={task.status} />
    </div>
    <div style={groupStyle}>
      <Field label="Дата создания" value="12.11.2026" />
      <Field label="Срок исполнения" value={task.due} />
    </div>
    <div style={groupStyle}>
      <Field label="Инициатор" value="Финансовый отдел" />
      <Field label="Исполнитель" value={task.owner} />
    </div>
    <Section title="Описание задачи">
      <BodyS>
        Проверить условия, сроки и сумму, приложить подписанные документы и
        передать задачу на следующий этап согласования.
      </BodyS>
    </Section>
    {long ? (
      <Section title="Документы">
        {DOCUMENTS.map((doc) => (
          <BodyS key={doc}>{doc}</BodyS>
        ))}
      </Section>
    ) : null}
    {long ? (
      <Section title="История">
        <BodyS>12.11.2026 Задача создана</BodyS>
        <BodyS>13.11.2026 Добавлены документы</BodyS>
        <BodyS>14.11.2026 Задача передана исполнителю</BodyS>
        <BodyS>16.11.2026 Запрошены уточнения</BodyS>
      </Section>
    ) : null}
  </div>
);

const TAB_ICONS = [
  IconDocumentOutline,
  IconChatOutline,
  IconClip,
  IconHistory,
  IconInfoCircleOutline,
] as const;

const TAB_NAMES = ['Основное', 'Комментарии', 'Вложения', 'История', 'Сведения'];

const tabName = (index: number) => TAB_NAMES[index] ?? '';

type PanelProps = {
  task?: Task;
  header?: boolean;
  subHeader?: boolean;
  subFooter?: boolean;
  footer?: boolean;
  customBlock?: boolean;
  leftTabBar?: boolean;
  badge?: boolean;
  chip?: boolean;
  avatar?: boolean;
  title?: string;
  description?: boolean;
  descText?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  kebab?: boolean;
  nav?: boolean;
  fullscreen?: boolean;
  fullScreened?: boolean;
  onToggleFullScreen?: () => void;
  onClose?: () => void;
  avatarSize?: SplitViewSlotSizesProps['avatarSize'];
  body?: ReactNode;
  long?: boolean;
  initialScroll?: number;
  actionView?: 'accent' | 'dark';
  actionText?: string;
};

/* Split-view в коде: Widget с containerType="splitView", части Header, Body (Widget.Content) и Footer */
const Panel = (p: PanelProps) => {
  const task = p.task ?? taskAt(0);
  const title = p.title ?? task.title;
  const [tab, setTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const content = ref.current?.querySelector(`.${wCls.content}`);

    if (content && p.initialScroll) {
      content.scrollTop = p.initialScroll;
    }
  }, [p.initialScroll]);

  const subTitle = p.description ? (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      {p.leftIcon ? <IconClockCircleOutline size="xs" color="inherit" /> : null}
      {p.descText ?? `Заявка № ${task.id}`}
      {p.rightIcon ? <IconCopyOutline size="xs" color="inherit" /> : null}
    </span>
  ) : undefined;

  const rightBlock =
    p.kebab || p.nav ? (
      <>
        {p.kebab ? (
          <Widget.IconButtonDots
            size="xs"
            iconSize="xs"
            iconOrientation="vertical"
            dropdownProps={{
              items: [
                { label: 'Скопировать ссылку', value: 'link' },
                { label: 'Открыть в новой вкладке', value: 'tab' },
              ],
            }}
          />
        ) : null}
        {p.kebab && p.nav ? <Widget.Divider /> : null}
        {p.nav ? (
          <Flow mainAxisGap={s.x2}>
            <IconButton view="secondary" size="xs">
              <IconChevronLeft size="xs" />
            </IconButton>
            <IconButton view="secondary" size="xs">
              <IconChevronRight size="xs" />
            </IconButton>
          </Flow>
        ) : null}
      </>
    ) : undefined;

  const body =
    p.body ??
    (p.leftTabBar && tab > 0 ? (
      <Section title={tabName(tab)}>
        <BodyS>Содержимое раздела «{tabName(tab)}»</BodyS>
      </Section>
    ) : (
      <TaskBody task={task} long={p.long} />
    ));

  const widget = (
    <Widget
      ref={ref}
      containerType={p.fullScreened ? 'modal' : 'splitView'}
      style={p.leftTabBar ? { flex: 1, minWidth: 0 } : undefined}
    >
      {p.header === false ? null : (
        <Widget.Header
          onClose={p.onClose ?? noop}
          fullScreened={p.fullscreen ? !!p.fullScreened : undefined}
          toggleFullScreened={p.onToggleFullScreen}
          title={title}
          titleLeftSlot={
            p.avatar ? (
              <Avatar size={p.avatarSize ?? 'l'} name={task.owner} />
            ) : undefined
          }
          badge={p.badge ? { text: 'Согласование', transparent: true } : undefined}
          titleRightSlot={
            p.chip ? <Chip size="xs" view="default" text="Согласование" hasClear={false} /> : undefined
          }
          subTitle={subTitle}
          rightBlock={rightBlock}
          bottomBlock={
            p.subHeader ? (
              <div style={{ display: 'flex', gap: s.x2 }}>
                <Badge size="s" transparent view="accent" text={task.status} />
                <Badge size="s" transparent view="warning" text={`Срок ${task.due}`} />
              </div>
            ) : undefined
          }
        />
      )}

      <Widget.Content>{body}</Widget.Content>

      {p.footer || p.subFooter ? (
        <Widget.Footer
          topBlock={p.subFooter ? <SlotStub>Sub-Footer</SlotStub> : undefined}
          leftBlock={
            p.footer && p.customBlock ? (
              <SlotStub>Custom block</SlotStub>
            ) : undefined
          }
          rightBlock={
            p.footer ? (
              <Flow mainAxisGap={s.x4}>
                <Button text="Отменить" size="xs" view="secondary" />
                <Button
                  text={p.actionText ?? 'Сохранить'}
                  size="xs"
                  view={p.actionView ?? 'accent'}
                />
              </Flow>
            ) : undefined
          }
        />
      ) : null}
    </Widget>
  );

  if (!p.leftTabBar) {
    return widget;
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Tabs
        orientation="vertical"
        size="s"
        view="divider"
        style={{ alignSelf: 'flex-start', paddingTop: s.x8 }}
      >
        {TAB_ICONS.map((Icon, i) => (
          <IconTabItem
            key={tabName(i)}
            selected={i === tab}
            onClick={() => setTab(i)}
            orientation="vertical"
            view="divider"
            size="s"
            tabIndex={0}
            title={tabName(i)}
            style={{ padding: `${s.x4} 10px ${s.x3} 10px` }}
          >
            <Icon color="inherit" />
          </IconTabItem>
        ))}
      </Tabs>
      <Divider orientation="vertical" />
      {widget}
    </div>
  );
};

/* Рамка страницы на дизайн-странице: хедер, основной контент слева, Split-view справа */

const HEADER_H = 48;
const BOTTOM_GAP = 32;

/* Высота панели на странице считается от окна браузера, в рамке задаём её явно */
const fixedHeight = (height: number) => `
  & .${svCls.separator}, & .${svCls.sidebarBlock} {
    position: relative;
    top: 0;
    height: ${height}px;
  }
`;

type Sidebar = NonNullable<SplitViewProps['sidebar']>;

const DemoHeader = () => (
  <div
    style={{
      position: 'relative',
      zIndex: 1,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      height: HEADER_H,
      paddingInline: 16,
      backgroundColor: surfaceSolidCard,
      boxShadow: shadowDownSoftS,
    }}
  >
    <BodyS style={{ fontWeight: 600 }}>Header FinAI</BodyS>
  </div>
);

const DemoPage = ({
  height,
  main,
  sidebar,
}: {
  height: number;
  main: ReactNode;
  sidebar: Sidebar;
}) => (
  <div
    style={{
      height,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: 12,
      backgroundColor: backgroundPrimary,
    }}
  >
    <DemoHeader />
    <SplitView
      $css={fixedHeight(height - HEADER_H - BOTTOM_GAP)}
      style={{ paddingLeft: 16 }}
      mainContent={<div style={{ paddingTop: 16 }}>{main}</div>}
      /*
       * Рамка на дизайн-странице 960 px, это меньше настоящей страницы, поэтому ширина при открытии
       * больше 30%: панель около 600 px при любой ширине окна. Ширина по умолчанию видна в окнах «Окно: …»
       */
      sidebar={{ defaultWidthPercent: 66, ...sidebar }}
    />
  </div>
);

/* Основной контент без таблицы: там, где важна только панель */
const MainStub = () => (
  <div style={{ display: 'grid', gap: 8, paddingRight: 4 }}>
    <div
      style={{
        width: '50%',
        height: 24,
        borderRadius: 6,
        backgroundColor: surfaceSolidSecondary,
      }}
    />
    {Array.from({ length: 8 }, (_, i) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        style={{ height: 32, borderRadius: 6, backgroundColor: surfaceSolidCard }}
      />
    ))}
  </div>
);

/* Только панель, без основного контента: для сравнения вариантов рядом */
const PanelOnly = ({
  height,
  content,
}: {
  height: number;
  content: Sidebar['content'];
}) => (
  <SplitView
    $css={fixedHeight(height)}
    mainContent={null}
    sidebar={{
      isOpened: true,
      minWidthPx: 0,
      defaultWidthPercent: 100,
      maxWidthPercent: 100,
      content,
    }}
  />
);

const Caption = ({ children }: { children: ReactNode }) => (
  <BodyS style={{ marginBottom: 8, paddingLeft: 44, color: textSecondary }}>
    {children}
  </BodyS>
);

const Pair = ({
  left,
  right,
}: {
  left: [string, ReactNode];
  right: [string, ReactNode];
}) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
    {[left, right].map(([caption, node]) => (
      <div key={caption} style={{ minWidth: 0 }}>
        <Caption>{caption}</Caption>
        {node}
      </div>
    ))}
  </div>
);

/* Живая настройка */

type PlaygroundArgs = {
  Header: boolean;
  SubHeader: boolean;
  'Sub-Footer': boolean;
  Footer: boolean;
  'Custom block': boolean;
  LeftTabBar: boolean;
  Badge: boolean;
  Avatar: boolean;
  Title: string;
  Description: boolean;
  DescText: string;
  LeftIcon: boolean;
  RightIcon: boolean;
  Kebab: boolean;
  'Navigation btns': boolean;
  Fullscreen: boolean;
};

const PLAYGROUND_H = 560;

const PlaygroundDemo = (args: PlaygroundArgs) => {
  const rowState = useState<number | undefined>(0);
  const [activeRow, setActiveRow] = rowState;
  const [lastRow, setLastRow] = useState(0);
  const [rowTitle, setRowTitle] = useState<string>();
  const [rowDesc, setRowDesc] = useState<string>();
  const [fullScreened, setFullScreened] = useState(false);

  useEffect(() => {
    if (activeRow !== undefined) {
      setLastRow(activeRow);
    }
  }, [activeRow]);

  /* Клик по строке подставляет её заголовок и номер, правка в переключателях возвращает текст из них */
  useEffect(() => setRowTitle(undefined), [args.Title]);
  useEffect(() => setRowDesc(undefined), [args.DescText]);

  const close = () => {
    setFullScreened(false);
    setActiveRow(undefined);
  };

  return (
    <DemoPage
      height={PLAYGROUND_H}
      main={
        <TaskTable
          height={PLAYGROUND_H - HEADER_H - BOTTOM_GAP - 16}
          rowState={rowState}
          onRow={(task) => {
            if (task) {
              setRowTitle(task.title);
              setRowDesc(`Заявка № ${task.id}`);
            }
          }}
        />
      }
      sidebar={{
        isOpened: activeRow !== undefined,
        isFullScreened: fullScreened,
        content: ({ avatarSize }: SplitViewSlotSizesProps) => (
          <Panel
            task={taskAt(lastRow)}
            title={rowTitle ?? args.Title}
            header={args.Header}
            subHeader={args.SubHeader}
            subFooter={args['Sub-Footer']}
            footer={args.Footer}
            customBlock={args['Custom block']}
            leftTabBar={args.LeftTabBar}
            badge={args.Badge}
            avatar={args.Avatar}
            avatarSize={avatarSize}
            description={args.Description}
            descText={rowDesc ?? args.DescText}
            leftIcon={args.LeftIcon}
            rightIcon={args.RightIcon}
            kebab={args.Kebab}
            nav={args['Navigation btns']}
            fullscreen={args.Fullscreen}
            fullScreened={fullScreened}
            onToggleFullScreen={() => setFullScreened((v) => !v)}
            onClose={close}
          />
        ),
      }}
    />
  );
};

const ifHeader = { if: { arg: 'Header', truthy: true } } as const;
const ifDescription = { if: { arg: 'Description', truthy: true } } as const;

export const Playground: StoryObj<PlaygroundArgs & ScreenArgs> = {
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    Header: true,
    SubHeader: true,
    'Sub-Footer': false,
    Footer: true,
    'Custom block': false,
    LeftTabBar: false,
    Badge: true,
    Avatar: true,
    Title: taskAt(0).title,
    Description: true,
    DescText: `Заявка № ${taskAt(0).id}`,
    LeftIcon: false,
    RightIcon: false,
    Kebab: true,
    'Navigation btns': true,
    Fullscreen: true,
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    Header: { control: 'boolean', description: 'Шапка с заголовком и кнопками' },
    SubHeader: { control: 'boolean', description: 'Блок под шапкой, не скроллится вместе с Body' },
    'Sub-Footer': { control: 'boolean', description: 'Блок над Footer' },
    Footer: { control: 'boolean', description: 'Блок внизу, всегда закреплён' },
    'Custom block': {
      control: 'boolean',
      description: 'Кастомный блок в Footer',
      if: { arg: 'Footer', truthy: true },
    },
    LeftTabBar: { control: 'boolean', description: 'Вертикальные иконочные табы слева' },
    Badge: { control: 'boolean', description: 'Бадж справа от заголовка', ...ifHeader },
    Avatar: { control: 'boolean', description: 'Аватар слева от заголовка', ...ifHeader },
    Title: { control: 'text', description: 'Текст заголовка', ...ifHeader },
    Description: { control: 'boolean', description: 'Блок описания под заголовком', ...ifHeader },
    DescText: { control: 'text', description: 'Текст описания', ...ifDescription },
    LeftIcon: { control: 'boolean', description: 'Иконка слева от описания', ...ifDescription },
    RightIcon: { control: 'boolean', description: 'Иконка справа от описания', ...ifDescription },
    Kebab: { control: 'boolean', description: 'Кнопка с несколькими действиями', ...ifHeader },
    'Navigation btns': { control: 'boolean', description: 'Кнопки со стрелками влево и вправо', ...ifHeader },
    Fullscreen: { control: 'boolean', description: 'Кнопка полноэкранного режима', ...ifHeader },
  },
  render: (args) => <PlaygroundDemo {...args} />,
};

/* Окна: страница целиком, высоту и ширину Split-view считает компонент от размера окна */

const FrameHeader = () => (
  <div
    className="sv-header"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: surfaceSolidCard,
      boxShadow: shadowDownSoftS,
    }}
  >
    <PageLayout paddingTop={0} paddingBottom={0} minHeight={0}>
      <div style={{ display: 'flex', alignItems: 'center', height: 72 }}>
        <BodyS style={{ fontSize: 20, fontWeight: 600 }}>Header FinAI</BodyS>
      </div>
    </PageLayout>
  </div>
);

/* Живая ширина панели: подпись в Body */
const WidthLabel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const block = ref.current?.closest(`.${svCls.sidebarBlock}`);

    if (!block) {
      return undefined;
    }

    const update = () => setWidth(Math.round(block.getBoundingClientRect().width));
    const observer = new ResizeObserver(update);

    observer.observe(block);
    update();

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 8,
        padding: '12px 16px',
        borderRadius: 12,
        color: surfaceInfo,
        backgroundColor: surfaceAccentMinor,
        font: '600 30px/40px sans-serif',
      }}
    >
      {width ? `Ширина Split-view: ${width} px` : ' '}
    </div>
  );
};

const FramePage = ({
  defaultWidthPercent,
  fullScreen = false,
  widthLabel = false,
}: {
  defaultWidthPercent?: number;
  fullScreen?: boolean;
  widthLabel?: boolean;
}) => {
  const rowState = useState<number | undefined>(0);
  const [activeRow, setActiveRow] = rowState;
  const [lastRow, setLastRow] = useState(0);
  const [fullScreened, setFullScreened] = useState(fullScreen);

  useEffect(() => {
    if (activeRow !== undefined) {
      setLastRow(activeRow);
    }
  }, [activeRow]);

  const task = taskAt(lastRow);

  return (
    <>
      <FrameHeader />
      <PageLayout>
        <SplitView
          insidePageLayout
          mainContent={
            <div style={{ paddingTop: 16 }}>
              <PageTitle title="Заявки" />
              <div style={{ marginTop: 16 }}>
                <TaskTable height="calc(100vh - 210px)" rowState={rowState} />
              </div>
            </div>
          }
          sidebar={{
            isOpened: activeRow !== undefined,
            isFullScreened: fullScreened,
            defaultWidthPercent,
            content: ({ avatarSize }: SplitViewSlotSizesProps) => (
              <Panel
                task={task}
                header
                subHeader
                footer
                badge
                avatar
                avatarSize={avatarSize}
                description
                kebab
                nav
                fullscreen
                fullScreened={fullScreened}
                onToggleFullScreen={() => setFullScreened((v) => !v)}
                onClose={() => {
                  setFullScreened(false);
                  setActiveRow(undefined);
                }}
                body={
                  <>
                    {widthLabel ? <WidthLabel /> : null}
                    <TaskBody task={task} long />
                  </>
                }
              />
            ),
          }}
        />
      </PageLayout>
    </>
  );
};

/* Подписи замера внутри окна крупнее: окно уменьшается под колонку текста */
const BIG_MARKS = `
.sv-marks > div > span[aria-hidden="true"] > span + span {
  z-index: 101;
  font-size: 20px !important;
  line-height: 28px !important;
  padding: 0 8px !important;
  border-radius: 6px !important;
}
/* Отступ 0 px от хедера: подпись над линией, в пустой части хедера */
.sv-marks > div > span[aria-hidden="true"]:nth-of-type(1) > span + span {
  transform: translate(-50%, calc(-100% - 6px)) !important;
}
/* Отступ 0 px до правого края: подпись внутри окна, в правом отступе панели */
.sv-marks > div > span[aria-hidden="true"]:nth-of-type(3) > span + span {
  transform: translate(calc(-100% - 2px), 140px) !important;
}
`;

const OUTER_GAPS: MeasureGap[] = [
  { a: '.sv-header', b: `.${svCls.sidebarBlock}`, dir: 'v', tone: 'outer' },
  { a: `.${svCls.mainBlock}`, b: `.${svCls.separatorButton}`, dir: 'h', tone: 'outer' },
  { a: `.${svCls.sidebarBlock}`, b: '&', dir: 'h', tone: 'outer' },
  { a: `.${svCls.sidebarBlock}`, b: '&', dir: 'v', tone: 'outer' },
];

export const FrameSpacing: Story = {
  name: 'Окно: отступы на странице',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="sv-marks">
      <style>{BIG_MARKS}</style>
      <Measure gaps={OUTER_GAPS} style={{ height: '100vh', overflow: 'hidden' }}>
        <FramePage />
      </Measure>
    </div>
  ),
};

export const FrameMin: Story = {
  name: 'Окно: минимальная ширина',
  parameters: { layout: 'fullscreen' },
  render: () => <FramePage defaultWidthPercent={1} widthLabel />,
};

export const FrameMax: Story = {
  name: 'Окно: максимальная ширина',
  parameters: { layout: 'fullscreen' },
  render: () => <FramePage defaultWidthPercent={70} widthLabel />,
};

export const FrameFullscreen: Story = {
  name: 'Окно: полноэкранный режим',
  parameters: { layout: 'fullscreen' },
  render: () => <FramePage fullScreen />,
};

/* Размеры и отступы */

const INNER_GAPS: MeasureGap[] = [
  { a: '&', b: `.${wCls.headerTitlesContainer}`, dir: 'h', tone: 'inner' },
  { a: '&', b: `.${wCls.header}`, dir: 'v', tone: 'inner' },
  { a: `.${wCls.headerRightBlock}`, b: '&', dir: 'h', tone: 'inner' },
  { a: `.${wCls.footer}`, b: '&', dir: 'v', tone: 'inner' },
];

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <ViewportFrame
        storyId={frameId('frame-spacing')}
        width={1440}
        height={640}
        caption="Окно 1440 px: отступы Split-view до хедера, основного контента, правого края и низа страницы"
      />
      <div>
        <DemoPage
          height={460}
          main={<MainStub />}
          sidebar={{
            isOpened: true,
            content: ({ avatarSize }: SplitViewSlotSizesProps) => (
              <Measure gaps={INNER_GAPS} style={{ height: '100%', display: 'flow-root' }}>
                <Panel
                  header
                  subHeader
                  footer
                  badge
                  avatar
                  avatarSize={avatarSize}
                  description
                  kebab
                  nav
                  fullscreen
                />
              </Measure>
            ),
          }}
        />
        <BodyS style={{ marginTop: 8, color: textSecondary, fontSize: 12 }}>
          Внутренние отступы Split-view: слева, сверху, справа и снизу
        </BodyS>
      </div>
      <MeasureLegend />
    </div>
  ),
};

/* Общие настройки */

export const HeaderToggle: Story = {
  name: 'Header',
  render: () => (
    <Pair
      left={[
        'Header включён',
        <PanelOnly
          height={300}
          content={<Panel header badge avatar description kebab footer />}
        />,
      ]}
      right={[
        'Header выключен',
        <PanelOnly height={300} content={<Panel header={false} footer />} />,
      ]}
    />
  ),
};

export const SubHeader: Story = {
  name: 'SubHeader',
  render: () => (
    <DemoPage
      height={440}
      main={<MainStub />}
      sidebar={{
        isOpened: true,
        content: ({ avatarSize }: SplitViewSlotSizesProps) => (
          <Panel
            header
            subHeader
            badge
            avatar
            avatarSize={avatarSize}
            description
            kebab
            nav
            fullscreen
            long
            initialScroll={120}
          />
        ),
      }}
    />
  ),
};

export const ScrollPin: Story = {
  name: 'Sub-Footer и Footer при скролле',
  render: () => (
    <DemoPage
      height={440}
      main={<MainStub />}
      sidebar={{
        isOpened: true,
        content: ({ avatarSize }: SplitViewSlotSizesProps) => (
          <Panel
            header
            badge
            avatar
            avatarSize={avatarSize}
            description
            kebab
            nav
            fullscreen
            subFooter
            footer
            customBlock
            long
            initialScroll={160}
          />
        ),
      }}
    />
  ),
};

export const LeftTabBar: Story = {
  name: 'LeftTabBar',
  render: () => (
    <DemoPage
      height={440}
      main={<MainStub />}
      sidebar={{
        isOpened: true,
        content: ({ avatarSize }: SplitViewSlotSizesProps) => (
          <Panel
            header
            badge
            avatar
            avatarSize={avatarSize}
            description
            kebab
            fullscreen
            footer
            leftTabBar
          />
        ),
      }}
    />
  ),
};

/* Настройки Header */

export const BadgeOrChip: Story = {
  name: 'Badge и Chip',
  render: () => (
    <Pair
      left={[
        'Badge',
        <PanelOnly height={160} content={<Panel header badge avatar description />} />,
      ]}
      right={[
        'Chip на месте Badge',
        <PanelOnly height={160} content={<Panel header chip avatar description />} />,
      ]}
    />
  ),
};

export const LongTitle: Story = {
  name: 'Длинный и короткий заголовок',
  render: () => (
    <Pair
      left={[
        'Длинный заголовок: не больше 2 строк, целиком в подсказке',
        <PanelOnly
          height={160}
          content={
            <Panel
              header
              badge
              avatar
              description
              title="Согласование дополнительного соглашения к договору поставки оборудования и программного обеспечения на 2027 год"
            />
          }
        />,
      ]}
      right={[
        'Короткий заголовок с Badge',
        <PanelOnly
          height={160}
          content={
            <Panel
              header
              badge
              avatar
              description
              task={taskAt(1)}
              title="Счёт № 1025"
            />
          }
        />,
      ]}
    />
  ),
};

export const HeaderButtons: Story = {
  name: 'Кнопки в Header',
  render: () => (
    <div style={{ maxWidth: 644 }}>
      <PanelOnly
        height={180}
        content={<Panel header badge avatar description kebab nav fullscreen />}
      />
    </div>
  ),
};

/* Механика */

const OPEN_CLOSE_H = 480;

const OpenCloseDemo = () => {
  const rowState = useState<number | undefined>(undefined);
  const [activeRow, setActiveRow] = rowState;
  const [lastRow, setLastRow] = useState(0);

  useEffect(() => {
    if (activeRow !== undefined) {
      setLastRow(activeRow);
    }
  }, [activeRow]);

  return (
    <DemoPage
      height={OPEN_CLOSE_H}
      main={
        <>
          <BodyS style={{ marginBottom: 8, color: textSecondary }}>
            Нажмите на строку, чтобы открыть Split-view
          </BodyS>
          <TaskTable
            height={OPEN_CLOSE_H - HEADER_H - BOTTOM_GAP - 16 - 28}
            rowState={rowState}
          />
        </>
      }
      sidebar={{
        isOpened: activeRow !== undefined,
        content: ({ avatarSize }: SplitViewSlotSizesProps) => (
          <Panel
            task={taskAt(lastRow)}
            header
            badge
            avatar
            avatarSize={avatarSize}
            description
            footer
            onClose={() => setActiveRow(undefined)}
          />
        ),
      }}
    />
  );
};

export const OpenClose: Story = {
  name: 'Открытие и закрытие',
  render: () => <OpenCloseDemo />,
};

export const Resize: Story = {
  name: 'Resize',
  render: () => (
    <ViewportFrame
      storyId={frameId('frame-min')}
      width={1440}
      height={600}
      caption="Окно 1440 px. Потяните за Resize Control между таблицей и Split-view: ширина меняется от 600 px до 70%"
    />
  ),
};

export const Fullscreen: Story = {
  name: 'Полноэкранный режим',
  render: () => (
    <ViewportFrame
      storyId={frameId('frame-fullscreen')}
      width={1440}
      height={600}
      caption="Окно 1440 px: Split-view в полноэкранном режиме, под ним подложка. Кнопка Fullscreen в Header возвращает обычный режим"
    />
  ),
};

/* Краевые сценарии */

const ACCENT_H = 460;

const AccentCase = ({
  view,
  caption,
}: {
  view: 'accent' | 'dark';
  caption: string;
}) => {
  const rowState = useState<number | undefined>(view === 'dark' ? 1 : undefined);
  const service = view === 'accent';

  return (
    <div>
      <BodyS style={{ marginBottom: 8, fontWeight: 600 }}>{caption}</BodyS>
      <DemoPage
        height={ACCENT_H}
        main={
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 8,
                marginBottom: 12,
                paddingRight: 4,
              }}
            >
              <BodyS style={{ fontWeight: 600 }}>Заявки</BodyS>
              <Button text="Создать заявку" size="xs" view="accent" />
            </div>
            <TaskTable
              height={ACCENT_H - HEADER_H - BOTTOM_GAP - 16 - 44}
              rowState={rowState}
            />
          </>
        }
        sidebar={{
          isOpened: true,
          content: ({ avatarSize }: SplitViewSlotSizesProps) => (
            <Panel
              task={taskAt(1)}
              header
              title={service ? 'Новая заявка' : taskAt(1).title}
              badge={!service}
              avatar={!service}
              avatarSize={avatarSize}
              description={!service}
              footer
              actionView={view}
              actionText={service ? 'Отправить' : 'Сохранить'}
              body={
                service ? (
                  <div style={{ display: 'grid', gap: 8 }}>
                    {['Тип заявки', 'Сумма', 'Срок исполнения', 'Комментарий'].map(
                      (label) => (
                        <div key={label} style={{ display: 'grid', gap: 4 }}>
                          <BodyS style={{ color: textSecondary }}>{label}</BodyS>
                          <div
                            style={{
                              height: 40,
                              borderRadius: 8,
                              backgroundColor: surfaceSolidSecondary,
                            }}
                          />
                        </div>
                      ),
                    )}
                  </div>
                ) : undefined
              }
            />
          ),
        }}
      />
    </div>
  );
};

export const TwoAccentButtons: Story = {
  name: 'Две акцентные кнопки',
  render: () => (
    <div style={{ display: 'grid', gap: 32 }}>
      <AccentCase
        view="accent"
        caption="View=accent: в Split-view открыт отдельный сервис"
      />
      <AccentCase
        view="dark"
        caption="View=dark: Split-view показывает детальную информацию по строке"
      />
    </div>
  ),
};

const RowHighlightDemo = () => {
  const rowState = useState<number | undefined>(2);
  const [activeRow, setActiveRow] = rowState;
  const [lastRow, setLastRow] = useState(2);

  useEffect(() => {
    if (activeRow !== undefined) {
      setLastRow(activeRow);
    }
  }, [activeRow]);

  return (
    <DemoPage
      height={OPEN_CLOSE_H}
      main={
        <TaskTable
          height={OPEN_CLOSE_H - HEADER_H - BOTTOM_GAP - 16}
          rowState={rowState}
        />
      }
      sidebar={{
        isOpened: activeRow !== undefined,
        content: ({ avatarSize }: SplitViewSlotSizesProps) => (
          <Panel
            task={taskAt(lastRow)}
            header
            badge
            avatar
            avatarSize={avatarSize}
            description
            nav
            footer
            onClose={() => setActiveRow(undefined)}
          />
        ),
      }}
    />
  );
};

export const RowHighlight: Story = {
  name: 'Выделение строки',
  render: () => <RowHighlightDemo />,
};

export const MinMaxWidth: Story = {
  name: 'Минимальная и максимальная ширина',
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <ViewportFrame
        storyId={frameId('frame-min')}
        width={1920}
        height={640}
        caption="Окно 1920 px: минимальная ширина Split-view, 600 px"
      />
      <ViewportFrame
        storyId={frameId('frame-max')}
        width={1920}
        height={640}
        caption="Окно 1920 px: максимальная ширина Split-view, 70%"
      />
      <ViewportFrame
        storyId={frameId('frame-max')}
        width={2560}
        height={640}
        caption="Окно 2560 px: максимальная ширина Split-view на экране шире 1920 px"
      />
    </div>
  ),
};
