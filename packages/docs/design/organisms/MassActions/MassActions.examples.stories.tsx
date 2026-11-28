import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { IconButton } from '@ui-kit/components/IconButton';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import type { MassActionsButtonProps } from '@ui-kit/components/MassActions';
import { MassActions } from '@ui-kit/components/MassActions';
import { MassActionsStatic } from '@ui-kit/components/MassActionsStatic';
import { BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconDotsVerticalCenteredOutline, IconPlasma } from '@ui-kit/icons';
import { surfaceAccentMinor, surfaceInfo, surfaceSolidCard, textSecondary } from '@ui-kit/tokens';
import type { CSSProperties, ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

import { Measure, MeasureLegend } from '../../kit/Measure';
import { ViewportFrame } from '../../kit/ViewportFrame';
import type { ScreenArgs } from '../../kit/ScreenSwitch';
import { SCREEN_ARG_TYPES, SCREEN_ARGS, withScreen } from '../../kit/ScreenSwitch';

const meta: Meta = {
  title: 'Локальные компоненты/MassActions/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

const ID = 'локальные-компоненты-massactions-для-дизайнеров--';

const noop = () => undefined;

const Caption = ({ children }: { children: ReactNode }) => (
  <BodyS style={{ color: textSecondary, marginBottom: s.x8 }}>{children}</BodyS>
);

const stub: CSSProperties = {
  display: 'grid',
  placeItems: 'center',
  borderRadius: s.x8,
  border: `1px dashed ${surfaceInfo}`,
  color: surfaceInfo,
  backgroundColor: surfaceAccentMinor,
};

const secondary = (text: string, extra: Partial<MassActionsButtonProps> = {}): MassActionsButtonProps => ({
  type: 'button',
  view: 'secondary',
  text,
  onClick: noop,
  ...extra,
} as MassActionsButtonProps);

const primary = (text: string): MassActionsButtonProps => ({ type: 'button', view: 'accent', text, onClick: noop });

const ACTIONS = ['Экспорт', 'Копировать', 'Переместить', 'Архивировать', 'Заморозить'];

/* Панель внутри контентного блока. containerRef указывает на этот блок */

type SceneProps = {
  width?: number | string;
  height?: number;
  count?: number;
  total?: number;
  maxCount?: number;
  checkbox?: boolean;
  label?: string;
  buttons?: MassActionsButtonProps[];
  collapsed?: boolean;
  openMore?: boolean;
  children?: ReactNode;
};

const findPanel = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('div')).find((el) => {
    const style = getComputedStyle(el);

    return style.position === 'absolute' && style.borderTopWidth === '2px';
  });

const visibleButtons = (panel: HTMLElement) =>
  Array.from(panel.querySelectorAll<HTMLElement>('button')).filter((el) => el.getBoundingClientRect().left > -1000);

const Scene = ({
  width = '100%',
  height = 140,
  count = 9,
  total = 12,
  maxCount,
  checkbox = true,
  label,
  buttons = [secondary('Нецелевое 2'), secondary('Нецелевое 1'), primary('Целевое действие')],
  collapsed = false,
  openMore = false,
  children,
}: SceneProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!collapsed && !openMore) {
      return undefined;
    }

    // панель появляется с расчётом ширины и анимацией, кнопки нажимаем после неё
    const timer = window.setTimeout(() => {
      const panel = ref.current && findPanel(ref.current);

      if (!panel) {
        return;
      }

      const all = visibleButtons(panel);

      if (collapsed) {
        all[all.length - 1]?.click();
      }

      if (openMore) {
        all.find((el) => !el.innerText.trim() && el !== all[all.length - 1])?.click();
      }
    }, 700);

    return () => window.clearTimeout(timer);
  }, [collapsed, openMore]);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width,
        maxWidth: '100%',
        height,
        borderRadius: s.x8,
        backgroundColor: surfaceSolidCard,
      }}
    >
      {children}
      <MassActions
        containerRef={ref}
        selectedCount={count}
        leftSection={
          <MassActions.Counter
            selectedCount={count}
            maxCount={maxCount}
            label={label}
            showCheckbox={checkbox}
            checked={count >= total}
            indeterminate={count > 0 && count < total}
            onCheckboxChange={noop}
          />
        }
        buttons={buttons}
      />
    </div>
  );
};

/* Живая настройка */

type PlaygroundArgs = {
  Selected: number;
  Checkbox: boolean;
  Label: string;
  Buttons: number;
  Primary: boolean;
  Icons: boolean;
  Disabled: boolean;
  Width: number;
};

export const Playground: StoryObj<PlaygroundArgs & ScreenArgs> = {
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    Selected: 9,
    Checkbox: true,
    Label: 'Выбрано',
    Buttons: 2,
    Primary: true,
    Icons: false,
    Disabled: false,
    Width: 900,
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    Selected: { control: { type: 'number', min: 1, max: 999 }, description: 'Число выбранных объектов' },
    Checkbox: { control: 'boolean', description: 'Чекбокс в счётчике' },
    Label: { control: 'text', description: 'Текст счётчика' },
    Buttons: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Кнопки нецелевых действий (Secondary)',
    },
    Primary: { control: 'boolean', description: 'Кнопка целевого действия (Primary) справа' },
    Icons: { control: 'boolean', description: 'Иконки в кнопках действий' },
    Disabled: { control: 'boolean', description: 'Первая кнопка заблокирована, подсказка при наведении' },
    Width: {
      control: { type: 'range', min: 360, max: 1200, step: 20 },
      description: 'Ширина контентного блока, px. Кнопки, которые не помещаются, уходят в «Ещё»',
    },
  },
  render: (args) => {
    const icon = args.Icons ? { contentLeft: <IconPlasma color="inherit" /> } : {};
    const buttons: MassActionsButtonProps[] = ACTIONS.slice(0, args.Buttons).map((text, i) =>
      secondary(
        text,
        args.Disabled && i === 0
          ? { ...icon, disabled: true, disabledTooltipProps: { text: 'Действие недоступно для выбранных объектов' } }
          : icon,
      ),
    );

    if (args.Primary) {
      buttons.push({ ...primary('Отправить'), ...icon } as MassActionsButtonProps);
    }

    return (
      <Scene
        key={`${args.Width}-${args.Buttons}-${args.Primary}-${args.Icons}`}
        width={args.Width}
        count={args.Selected}
        total={Math.max(args.Selected, 12)}
        checkbox={args.Checkbox}
        label={args.Label}
        buttons={buttons}
      />
    );
  },
};

/* Размеры и отступы: живой замер в окне заданной ширины */

type Edges = { left: number; top: number; width: number; height: number };

const MeasuredScene = ({ width }: { width: number }) => {
  const box = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState<Edges>();

  useLayoutEffect(() => {
    // панель появляется с расчётом ширины и анимацией: перемеряем, пока она не перестанет меняться
    let last = '';
    const update = () => {
      const root = box.current;
      const panel = root && findPanel(root);

      if (!root || !panel) {
        return;
      }

      const mark = (el: Element | null | undefined, name: string) => el?.setAttribute('data-m', name);
      const buttons = visibleButtons(panel);
      const checkbox = panel.querySelector('[class*="Checkbox-styles__StyledTriggerWrapper"]');
      const checkboxRoot = checkbox?.parentElement?.parentElement;

      mark(panel, 'panel');
      mark(checkbox, 'checkbox');
      mark(checkboxRoot?.nextElementSibling, 'label');
      mark(panel.querySelector('.int-container'), 'count');
      mark(panel.querySelector('.plasma-divider-vertical'), 'divider');
      mark(buttons[0], 'b1');
      mark(buttons[1], 'b2');
      mark(buttons[buttons.length - 1], 'collapse');

      const base = root.getBoundingClientRect();
      const r = panel.getBoundingClientRect();
      const next = { left: r.left - base.left, top: r.top - base.top, width: r.width, height: r.height };
      const key = JSON.stringify(next);

      if (key !== last) {
        last = key;
        setEdges(next);
      }
    };
    const timer = window.setInterval(update, 250);
    const stop = window.setTimeout(() => window.clearInterval(timer), 4000);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(stop);
    };
  }, []);

  const edge = (name: string, style: CSSProperties) => (
    <span data-m={name} style={{ position: 'absolute', pointerEvents: 'none', ...style }} />
  );

  return (
    <div style={{ padding: 20, width }}>
      <Measure
        gaps={
          edges
            ? [
                { a: '[data-m="panel"]', b: '&', dir: 'v', tone: 'outer' },
                { a: '[data-m="edge-l"]', b: '[data-m="checkbox"]', dir: 'h' },
                { a: '[data-m="checkbox"]', b: '[data-m="label"]', dir: 'h' },
                { a: '[data-m="label"]', b: '[data-m="count"]', dir: 'h' },
                { a: '[data-m="count"]', b: '[data-m="divider"]', dir: 'h' },
                { a: '[data-m="divider"]', b: '[data-m="b1"]', dir: 'h' },
                { a: '[data-m="b1"]', b: '[data-m="b2"]', dir: 'h' },
                { a: '[data-m="collapse"]', b: '[data-m="edge-r"]', dir: 'h' },
                { a: '[data-m="edge-t"]', b: '[data-m="b1"]', dir: 'v' },
                { a: '[data-m="b1"]', b: '[data-m="edge-b"]', dir: 'v' },
              ]
            : []
        }
      >
        <div ref={box} style={{ position: 'relative' }}>
          <Scene height={150} buttons={[secondary('Нецелевое 2'), secondary('Нецелевое 1'), primary('Целевое действие')]} />
          {edges ? (
            <>
              {edge('edge-l', { left: edges.left + 2, top: edges.top, width: 0, height: edges.height })}
              {edge('edge-r', { left: edges.left + edges.width - 2, top: edges.top, width: 0, height: edges.height })}
              {edge('edge-t', { left: edges.left, top: edges.top + 2, width: edges.width, height: 0 })}
              {edge('edge-b', { left: edges.left, top: edges.top + edges.height - 2, width: edges.width, height: 0 })}
            </>
          ) : null}
        </div>
      </Measure>
      <MeasureLegend />
    </div>
  );
};

export const Spacing1440: Story = {
  name: 'Замер в окне 1440 px',
  parameters: { layout: 'fullscreen' },
  render: () => <MeasuredScene width={900} />,
};

export const Spacing1280: Story = {
  name: 'Замер в окне 1280 px',
  parameters: { layout: 'fullscreen' },
  render: () => <MeasuredScene width={900} />,
};

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <ViewportFrame storyId={`${ID}spacing-1440`} width={1440} visibleWidth={940} height={250} caption="Окно 1440 px: кнопки S, высота панели 68 px" />
      <ViewportFrame storyId={`${ID}spacing-1280`} width={1280} visibleWidth={940} height={250} caption="Окно 1280 px: кнопки XS, высота панели 60 px" />
    </div>
  ),
};

/* Панель рядом с Left Panel и Split-view: по центру контент-области */

const CenterView = () => (
  <div style={{ display: 'grid', gap: s.x16 }}>
    <div>
      <Caption>Рядом с Left Panel</Caption>
      <div style={{ display: 'flex', gap: s.x8, height: 180 }}>
        <div style={{ ...stub, width: 240, flex: 'none' }}>
          <BodyS>Left Panel</BodyS>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Scene height={180} buttons={[secondary('Экспорт'), primary('Отправить')]} />
        </div>
      </div>
    </div>
    <div>
      <Caption>Рядом с открытым Split-view</Caption>
      <div style={{ display: 'flex', gap: s.x8, height: 180 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Scene height={180} buttons={[secondary('Экспорт'), primary('Отправить')]} />
        </div>
        <div style={{ ...stub, width: 280, flex: 'none' }}>
          <BodyS>Split-view</BodyS>
        </div>
      </div>
    </div>
  </div>
);

export const CenterWithPanels: Story = {
  name: 'По центру контент-области',
  render: () => <CenterView />,
};

/* Состав: сцены в окне 1440 px, чтобы кнопки были размера S, а ширина блока совпадала с примером */

export const AnatomyScene: Story = {
  name: 'Состав, окно 1440 px',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ padding: 20 }}>
      <Scene
        width={720}
        height={120}
        buttons={[secondary('Нецелевое 2'), secondary('Нецелевое 1'), secondary('Нецелевое 3'), primary('Целевое действие')]}
      />
    </div>
  ),
};

export const Anatomy: Story = {
  name: 'Состав',
  render: () => <ViewportFrame storyId={`${ID}anatomy-scene`} width={1440} visibleWidth={760} height={160} />,
};

/* Collapsed */

export const Collapsed: Story = {
  name: 'Collapsed',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <div>
        <Caption>Collapsed = no</Caption>
        <Scene height={110} />
      </div>
      <div>
        <Caption>Свёрнутая панель</Caption>
        <Scene height={110} collapsed />
      </div>
    </div>
  ),
};

/* Появление и скрытие */

const DOCUMENTS = ['Договор поставки', 'Счёт на оплату', 'Акт сверки', 'Заявка на закупку', 'Отчёт за квартал'];

const ShowHideView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string[]>(['Счёт на оплату']);
  const toggle = (name: string) =>
    setSelected((list) => (list.includes(name) ? list.filter((x) => x !== name) : [...list, name]));
  const all = selected.length === DOCUMENTS.length;

  return (
    <div ref={ref} style={{ position: 'relative', height: 330, padding: s.x16, borderRadius: s.x8, backgroundColor: surfaceSolidCard }}>
      <div style={{ display: 'grid', gap: s.x8 }}>
        {DOCUMENTS.map((name) => (
          <Checkbox key={name} label={name} checked={selected.includes(name)} onChange={() => toggle(name)} />
        ))}
      </div>
      <MassActions
        containerRef={ref}
        selectedCount={selected.length}
        leftSection={
          <MassActions.Counter
            selectedCount={selected.length}
            showCheckbox
            checked={all}
            indeterminate={selected.length > 0 && !all}
            onCheckboxChange={() => setSelected(selected.length > 0 && !all ? [...DOCUMENTS] : [])}
          />
        }
        buttons={[secondary('Экспорт'), primary('Отправить')]}
      />
    </div>
  );
};

export const ShowHide: Story = {
  name: 'Появление и скрытие',
  render: () => <ShowHideView />,
};

/* Чекбокс и число в счётчике */

const CounterBox = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'inline-flex', padding: `${s.x12} ${s.x16}`, borderRadius: s.x8, backgroundColor: surfaceSolidCard }}>
    {children}
  </div>
);

export const CheckboxStates: Story = {
  name: 'Чекбокс в счётчике',
  render: () => (
    <div style={{ display: 'flex', gap: s.x24, flexWrap: 'wrap' }}>
      <div>
        <Caption>Выбрана часть объектов</Caption>
        <CounterBox>
          <MassActions.Counter selectedCount={3} showCheckbox indeterminate onCheckboxChange={noop} />
        </CounterBox>
      </div>
      <div>
        <Caption>Выбраны все объекты</Caption>
        <CounterBox>
          <MassActions.Counter selectedCount={12} showCheckbox checked onCheckboxChange={noop} />
        </CounterBox>
      </div>
    </div>
  ),
};

export const CounterMax: Story = {
  name: 'Предел числа',
  render: () => <Scene height={110} count={150} total={300} maxCount={99} />,
};

/* Название и количество действий */

export const CompressionScene: Story = {
  name: 'Кнопки в «Ещё», окно 1440 px',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ padding: 20 }}>
      <Scene
        width={600}
        height={330}
        openMore
        buttons={[...ACTIONS.map((text) => secondary(text)), primary('Отправить')]}
      />
    </div>
  ),
};

export const Compression: Story = {
  name: 'Кнопки в «Ещё»',
  render: () => (
    <ViewportFrame storyId={`${ID}compression-scene`} width={1440} visibleWidth={640} height={370} caption="Контентный блок 600 px" />
  ),
};

export const FiveButtonsScene: Story = {
  name: 'Пять кнопок, окно 1440 px',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ padding: 20 }}>
      <Scene
        width={1000}
        height={120}
        buttons={[...ACTIONS.slice(0, 4).map((text) => secondary(text)), primary('Отправить')]}
      />
    </div>
  ),
};

export const FiveButtons: Story = {
  name: 'Пять кнопок',
  render: () => (
    <ViewportFrame storyId={`${ID}five-buttons-scene`} width={1440} visibleWidth={1040} height={160} caption="Контентный блок 1000 px" />
  ),
};

/* Блокировка кнопок */

export const Disabled: Story = {
  name: 'Блокировка кнопки',
  render: () => (
    <Scene
      height={200}
      count={1}
      total={4}
      buttons={[
        secondary('Сравнить версии', {
          contentLeft: <IconPlasma color="inherit" />,
          disabled: true,
          disabledTooltipProps: { text: 'Выберите 2 версии, чтобы их сравнить', opened: true },
        }),
        primary('Отправить на согласование'),
      ]}
    />
  ),
};

/* Mass Actions в Left Panel */

const LeftPanelView = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', height: 380 }}>
      <LeftPanel
        collapseState={[collapsed, setCollapsed]}
        expandedContent={
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: s.x8 }}>
            <BodyS style={{ color: textSecondary }}>Содержимое Left Panel</BodyS>
            <MassActionsStatic show>
              <IconButton size="s" view="secondary">
                <IconDotsVerticalCenteredOutline />
              </IconButton>
              <Button text="Label" contentLeft={<IconPlasma />} size="s" view="secondary" style={{ flexGrow: 1 }} />
              <Button text="Label" contentLeft={<IconPlasma />} size="s" view="secondary" style={{ flexGrow: 1 }} />
            </MassActionsStatic>
          </div>
        }
      />
    </div>
  );
};

export const LeftPanelFooter: Story = {
  name: 'Mass Actions в Left Panel',
  render: () => <LeftPanelView />,
};
