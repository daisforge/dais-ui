import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { Button } from '@ui-kit/components/Button';
import { DrawerDF } from '@ui-kit/components/DrawerDF';
import {
  Dropdown,
  type DropdownItemOption,
  DropdownProps,
} from '@ui-kit/components/Dropdown';
import { ModalDF } from '@ui-kit/components/ModalDF';

const meta = {
  title: 'Локальные компоненты/Dropdown/Совместимость SDDS',
  component: Dropdown,
  args: { items: [] },
  parameters: { screenshot: { keepState: true } },
} satisfies Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof meta>;

const Alignment = ({
  placement,
}: Pick<DropdownProps<DropdownItemOption>, 'placement'>) => (
  <div style={{ width: 700, height: 400, padding: '150px 250px' }}>
    <Dropdown
      placement={placement}
      alwaysOpened
      listWidth="160px"
      items={[
        { value: 'edit', label: 'Редактировать' },
        { value: 'copy', label: 'Копировать' },
      ]}
    >
      <Button text="Действия" style={{ width: 200 }} />
    </Dropdown>
  </div>
);

export const LegacyTop: Story = { render: () => <Alignment placement="top" /> };
export const LegacyBottom: Story = {
  render: () => <Alignment placement="bottom" />,
};
export const LegacyLeft: Story = {
  render: () => <Alignment placement="left" />,
};
export const LegacyRight: Story = {
  render: () => <Alignment placement="right" />,
};
export const NewCenter: Story = {
  render: () => <Alignment placement="bottom-center" />,
};

export const NestedLegacyPlacement: Story = {
  render: () => (
    <div style={{ width: 700, height: 400, padding: '40px 160px' }}>
      <Dropdown
        placement="bottom"
        alwaysOpened
        listWidth="200px"
        items={[
          {
            value: 'export',
            label: 'Экспорт',
            placement: 'right',
            trigger: 'click',
            items: [{ value: 'csv', label: 'Скачать CSV' }],
          },
        ]}
      >
        <Button text="Действия" />
      </Dropdown>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(await page.findByText('Экспорт'));
    await waitFor(() => expect(page.getByText('Скачать CSV')).toBeVisible());
  },
};

const overlayDropdownProps: DropdownProps<DropdownItemOption> = {
  placement: 'bottom',
  listWidth: '220px',
  items: [{ value: 'export', label: 'Экспортировать данные' }],
};

const openOverlayMenu: NonNullable<Story['play']> = async ({
  canvasElement,
}) => {
  const page = within(canvasElement.ownerDocument.body);
  await userEvent.click(
    await page.findByRole('combobox', { name: 'Действия документа' }),
  );
  await waitFor(() =>
    expect(page.getByText('Экспортировать данные')).toBeVisible(),
  );
};

export const InsideModal: Story = {
  parameters: { screenshot: { capture: 'page', keepState: true } },
  render: () => (
    <ModalDF opened onClose={() => {}}>
      <ModalDF.Main>
        <ModalDF.Header
          title="Документ"
          rightBlock={
            <ModalDF.DotsIconButton
              aria-label="Действия документа"
              dropdownProps={overlayDropdownProps}
            />
          }
        />
        <ModalDF.Content>
          <div style={{ height: 160 }}>
            Меню не должно обрезаться границами модального окна.
          </div>
        </ModalDF.Content>
      </ModalDF.Main>
    </ModalDF>
  ),
  play: openOverlayMenu,
};

export const InsideDrawer: Story = {
  parameters: { screenshot: { capture: 'page', keepState: true } },
  render: () => (
    <DrawerDF
      opened
      onClose={() => {}}
      header={
        <DrawerDF.Header
          title="Документ"
          rightBlock={
            <DrawerDF.DotsIconButton
              aria-label="Действия документа"
              dropdownProps={overlayDropdownProps}
            />
          }
        />
      }
      main={
        <DrawerDF.Content>
          Меню доступно поверх содержимого панели.
        </DrawerDF.Content>
      }
    />
  ),
  play: openOverlayMenu,
};
