import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { DrawerDF } from '@ui-kit/components/DrawerDF';
import { Dropdown, type DropdownProps } from '@ui-kit/components/Dropdown';
import { ModalDF } from '@ui-kit/components/ModalDF';

const meta = {
  title: 'Локальные компоненты/Dropdown/Меню поверх модалки и шторки',
  component: Dropdown,
  args: { items: [] },
} satisfies Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof meta>;

const overlayDropdownProps: DropdownProps = {
  placement: 'bottom-start',
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
