import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@ui-kit/components/Typography';
import { TypographyVariant } from '@ui-kit/components/Typography/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Локальные компоненты/Typography',
  component: Typography,
  tags: ['!autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'DsplL',
        'DsplM',
        'DsplS',
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'BodyL',
        'BodyM',
        'BodyS',
        'BodyXS',
        'BodyXXS',
        'TextL',
        'TextM',
        'TextS',
        'TextXS'
      ] satisfies TypographyVariant[]
    },
    bold: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="DsplL">Display L (DsplL)</Typography>
      <Typography variant="DsplM">Display M (DsplM)</Typography>
      <Typography variant="DsplS">Display S (DsplS)</Typography>
      <Typography variant="H1">Heading 1 (H1)</Typography>
      <Typography variant="H2">Heading 2 (H2)</Typography>
      <Typography variant="H3">Heading 3 (H3)</Typography>
      <Typography variant="H4">Heading 4 (H4)</Typography>
      <Typography variant="H5">Heading 5 (H5)</Typography>
      <Typography variant="TextL">Text L (TextL)</Typography>
      <Typography variant="TextM">Text M (TextM)</Typography>
      <Typography variant="TextS">Text S (TextS)</Typography>
      <Typography variant="TextXS">Text XS (TextXS)</Typography>
      <Typography variant="BodyL">Body L (BodyL)</Typography>
      <Typography variant="BodyM">Body M (BodyM)</Typography>
      <Typography variant="BodyS">Body S (BodyS)</Typography>
      <Typography variant="BodyXS">Body XS (BodyXS)</Typography>
      <Typography variant="BodyXXS">Body XXS (BodyXXS)</Typography>
    </div>
  )
};

export const WithStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="H3" bold>
        Жирный заголовок
      </Typography>
      <Typography variant="TextL" bold>
        Жирный текст
      </Typography>
    </div>
  )
};

export const TextWithDifferentTags: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="H1" as="h1">
        Заголовок h1
      </Typography>
      <Typography variant="BodyM" as="p">
        Абзац текста
      </Typography>
      <Typography variant="BodyM" as="span">
        Текст внутри строки
      </Typography>
      <Typography variant="BodyM" as="div">
        Блочный текст
      </Typography>
    </div>
  )
};
