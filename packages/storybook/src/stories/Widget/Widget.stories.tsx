/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@ui-kit/components/Avatar';
import { Badge } from '@ui-kit/components/Badge';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { Counter } from '@ui-kit/components/Counter';
import { Flow } from '@ui-kit/components/Flow';
import { IconButton } from '@ui-kit/components/IconButton';
import { SplitViewProps } from '@ui-kit/components/SplitView';
import { Widget } from '@ui-kit/components/Widget';
import { s } from '@ui-kit/constants';
import { IconChevronLeft, IconChevronRight } from '@ui-kit/icons';
import { backgroundPrimary } from '@ui-kit/tokens';

import { longText } from '../AnalyticalWidget/lib/utils';

const meta: Meta<typeof Widget> = {
  title: 'Композиции/Widget',
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  tags: ['!autodocs'],
  component: Widget,
};

export default meta;

type Story = StoryObj<SplitViewProps>;

/**
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const WidgetStory: Story = {
  name: 'Widget',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: `
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  backgroundPrimary,
  Badge,
  Button,
  Flow,
  IconButton,
  s,
  Widget,
} from '@daisforge/ui';

    `,
  }),
  render: () => (
    <div style={{ backgroundColor: backgroundPrimary }}>
      <Widget $css={{ marginInline: 'auto', height: 600 }}>
        <Widget.Header
          onClose={() => {}}
          fullScreened={false}
          toggleFullScreened={() => {}}
          title="Обработка документов по задаче №2"
          titleLeftSlot={<Avatar size="l" name="Задача №2" />}
          rightBlock={
            <>
              <Widget.IconButtonDots
                size="xs"
                dropdownProps={{
                  items: [
                    { label: 'label 1', value: '1' },
                    { label: 'label 2', value: '2' },
                  ],
                }}
              />
              <Widget.Divider />
              <Flow mainAxisGap={s.x2}>
                <IconButton view="secondary" size="xs">
                  <IconChevronLeft size="xs" />
                </IconButton>
                <IconButton view="secondary" size="xs">
                  <IconChevronRight size="xs" />
                </IconButton>
              </Flow>
            </>
          }
          badge={{ text: 'Бейдж' }}
          bottomBlock={
            <div style={{ display: 'flex', gap: s.x2 }}>
              <Badge size="s" transparent view="accent" text="В работе" />
              <Badge size="s" transparent view="negative" text="2-й раз" />
            </div>
          }
        />

        <Widget.Content>
          <div
            style={{
              height: '2000px',
              backgroundColor: 'goldenrod',
            }}
          >
            <span
              style={{
                position: 'absolute',
                right: 0,
                width: '4px',
                backgroundColor: 'teal',
              }}
            />
          </div>
        </Widget.Content>

        <Widget.Footer
          leftBlock={
            <Flow mainAxisGap={s.x4}>
              <Button text="Кнопка 1" size="s" view="secondary" />
              <Widget.IconButtonDots size="s" />
            </Flow>
          }
          rightBlock={
            <Flow mainAxisGap={s.x4}>
              <Button text="Кнопка" size="s" view="secondary" />
              <Button text="Главная кнопка" size="s" view="accent" />
            </Flow>
          }
        />
      </Widget>
    </div>
  ),
};

/**
 *
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const WidgetStoryText: Story = {
  name: 'WidgetTextContent',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: `
import {
  IconChevronLeft,
  IconChevronRight,
  Avatar,
  backgroundPrimary,
  Badge,
  Button,
  Flow,
  IconButton,
  s,
  Widget,
} from '@daisforge/ui';

    `,
  }),
  render: () => (
    <div style={{ backgroundColor: backgroundPrimary }}>
      <Widget $css={{ marginInline: 'auto', height: 600 }}>
        <Widget.Header
          onClose={() => {}}
          fullScreened={false}
          toggleFullScreened={() => {}}
          title="Обработка документов по задаче №2"
          titleLeftSlot={<Avatar size="l" name="Задача №2" />}
          rightBlock={
            <>
              <Widget.IconButtonDots
                size="xs"
                dropdownProps={{
                  items: [
                    { label: 'label 1', value: '1' },
                    { label: 'label 2', value: '2' },
                  ],
                }}
              />
              <Widget.Divider />
              <Flow mainAxisGap={s.x2}>
                <IconButton view="secondary" size="xs">
                  <IconChevronLeft size="xs" />
                </IconButton>
                <IconButton view="secondary" size="xs">
                  <IconChevronRight size="xs" />
                </IconButton>
              </Flow>
            </>
          }
          badge={{ text: 'Бейдж' }}
          bottomBlock={
            <div style={{ display: 'flex', gap: s.x2 }}>
              <Badge size="s" transparent view="accent" text="В работе" />
              <Badge size="s" transparent view="negative" text="2-й раз" />
            </div>
          }
        />

        <Widget.Content>
          <div
            style={{
              height: '2000px',
            }}
          >
            <span>{longText()}</span>
            <span
              style={{
                position: 'absolute',
                right: 0,
                width: '4px',
                backgroundColor: 'teal',
              }}
            />
          </div>
        </Widget.Content>

        <Widget.Footer
          leftBlock={
            <Flow mainAxisGap={s.x4}>
              <Button text="Кнопка 1" size="s" view="secondary" />
              <Widget.IconButtonDots size="s" />
            </Flow>
          }
          rightBlock={
            <Flow mainAxisGap={s.x4}>
              <Button text="Кнопка" size="s" view="secondary" />
              <Button text="Главная кнопка" size="s" view="accent" />
            </Flow>
          }
        />
      </Widget>
    </div>
  ),
};

/**
 *
 * #####ℹ️ Bug MYBRUN: leftBlock контент не центрируется по вертикали.
 *
 * Checkbox + Counter в leftBlock прижаты к верху,
 * а кнопки в rightBlock выше — видно смещение.
 */
export const WidgetFooterAlignBug: Story = {
  name: 'Footer leftBlock — проблема вертикального центрирования',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: `
import {
  backgroundPrimary,
  Button,
  Checkbox,
  Counter,
  Flow,
  s,
  Widget,
} from '@daisforge/ui';

    `,
  }),
  render: () => (
    <div style={{ backgroundColor: backgroundPrimary }}>
      <Widget $css={{ marginInline: 'auto', height: 400 }}>
        <Widget.Header
          onClose={() => {}}
          fullScreened={false}
          toggleFullScreened={() => {}}
          title="Footer leftBlock — баг вертикального центрирования"
        />

        <Widget.Content>
          <div style={{ padding: s.x8 }}>
            <p>
              Посмотри на футер: в leftBlock — Checkbox и Counter, в rightBlock
              — кнопки. Контент leftBlock прижат к верху ячейки, а не
              центрирован по вертикали относительно rightBlock.
            </p>
          </div>
        </Widget.Content>

        <Widget.Footer
          leftBlock={
            <div style={{ display: 'flex', gap: s.x4, alignItems: 'center' }}>
              <Checkbox size="s" label="Выбрать всё" />
              <Counter count={5} view="accent" size="xs" />
            </div>
          }
          rightBlock={
            <Flow mainAxisGap={s.x4}>
              <Button text="Отмена" size="s" view="secondary" />
              <Button text="Применить" size="s" view="accent" />
            </Flow>
          }
        />
      </Widget>
    </div>
  ),
};
