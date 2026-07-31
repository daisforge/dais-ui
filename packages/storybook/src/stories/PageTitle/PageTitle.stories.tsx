/* eslint-disable no-alert */
/* eslint-disable react/jsx-boolean-value */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import type {
  PageTitleProps,
  PageTitleSlotSizesProps,
} from '@ui-kit/components/PageTitle';
import { PageTitle } from '@ui-kit/components/PageTitle';

const meta: Meta<PageTitleProps> = {
  title: 'Композиции/PageTitle',
  tags: ['!autodocs'],
  component: PageTitle,
};

export default meta;

type Story = StoryObj<PageTitleProps>;

const preCode = `
import { PageTitle } from '@daisforge/ui';
import { Button, Flow, IconButton } from '@daisforge/ui';
import { IconPlus } from '@daisforge/ui/icons';
import type { PageTitleSlotSizesProps } from '@daisforge/ui';

`;

/**
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Default: Story = {
  name: 'PageTitle',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode,
  }),
  render: () => (
    <PageTitle
      breadcrumbs={{
        items: [
          { title: 'Главная', href: '#' },
          { title: 'Раздел', href: '#' },
          { title: 'Страница' },
        ],
      }}
      showBackButton
      onBackClick={() => alert('onBackClick')}
      title="Заголовок страницы"
      subtitle="Описание страницы или подзаголовок"
      rightSlot={({ buttonSize }: PageTitleSlotSizesProps) => (
        <Flow mainAxisGap={8}>
          <Button size={buttonSize} view="secondary">
            Действие 1
          </Button>
          <Button size={buttonSize} view="accent">
            Действие 2
          </Button>
        </Flow>
      )}
    />
  ),
};

export const WithTitleSlot: Story = {
  name: 'PageTitle с кастомным слотом',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode,
  }),
  render: () => (
    <PageTitle
      breadcrumbs={{
        items: [{ title: 'Главная', href: '#' }, { title: 'Раздел' }],
      }}
      showBackButton
      onBackClick={() => alert('onBackClick')}
      title="Заголовок страницы"
      subtitle="Описание страницы или подзаголовок"
      titleSlot={
        <Button size="xs" view="secondary">
          Действие
        </Button>
      }
      rightSlot={({ buttonSize }: PageTitleSlotSizesProps) => (
        <Flow mainAxisGap={8}>
          <Button size={buttonSize} view="secondary">
            Отмена
          </Button>
          <Button size={buttonSize} view="accent">
            Сохранить
          </Button>
        </Flow>
      )}
    />
  ),
};

export const WithoutBreadcrumbs: Story = {
  name: 'PageTitle без breadcrumbs',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode,
  }),
  render: () => (
    <PageTitle
      title="Заголовок страницы"
      subtitle="Описание страницы или подзаголовок"
      rightSlot={({ buttonSize }: PageTitleSlotSizesProps) => (
        <Flow mainAxisGap={8}>
          <Button size={buttonSize} view="secondary">
            Действие 1
          </Button>
          <Button size={buttonSize} view="accent">
            Действие 2
          </Button>
        </Flow>
      )}
    />
  ),
};

export const LongTitle: Story = {
  name: 'PageTitle с длинным заголовком',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode,
  }),
  render: () => (
    <PageTitle
      breadcrumbs={{
        items: [
          { title: 'Главная', href: '#' },
          { title: 'Раздел', href: '#' },
          { title: 'Страница' },
        ],
      }}
      title="Очень длинный заголовок страницы, который может не поместиться в одну строку и будет обрезан с помощью TypographyWithAutoTooltip"
      subtitle="Описание страницы или подзаголовок"
      titleTypographyProps={{
        tooltipText:
          'Очень длинный заголовок страницы, который может не поместиться в одну строку и будет обрезан с помощью TypographyWithAutoTooltip',
        lines: 1,
        bold: true,
      }}
      rightSlot={({ buttonSize }: PageTitleSlotSizesProps) => (
        <Flow mainAxisGap={8}>
          <Button size={buttonSize} view="secondary">
            Действие 1
          </Button>
          <Button size={buttonSize} view="accent">
            Действие 2
          </Button>
        </Flow>
      )}
    />
  ),
};
