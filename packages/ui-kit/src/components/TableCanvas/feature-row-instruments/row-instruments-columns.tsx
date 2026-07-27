import { IconButton, IconButtonProps } from '@ui-kit/components/IconButton';
import { IconDotsVerticalCenteredOutline } from '@ui-kit/icons';
import styled from 'styled-components';

import { TableDropdown } from '../components/TableDropdown/TableDropdown';
import { useHeaderContext } from '../contexts';
import { hideRowServiceKeysHandler } from '../data/hideServiceKeysHanlder';
import { CellInfoGlideInstance } from '../TableGlideInstance';
import { ObjectForExtending } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import { ROW_I_COLUMN_KEY, ROW_I_COLUMN_WIDTH } from './constants';
import { useRowInstrumentsCtx } from './ctx';
import { RowInstrumentsDropdownItemOption } from './types';

const StyledIconButton = styled(IconButton)({ flexShrink: 0 });

const dotsButtonProps = {
  title: 'Инструменты строки',
  children: <IconDotsVerticalCenteredOutline size="xs" color="inherit" />
} satisfies IconButtonProps;

const CustomIconButton = ({ children, ...props }: IconButtonProps) => (
  <StyledIconButton view="secondary" size="xs" {...props}>
    {children}
  </StyledIconButton>
);

export function RowIRenderCell({
  row,
  rowInd
}: // onRowChange,
CellInfoGlideInstance<ObjectForExtending>) {
  const rowInstrumentsGetConfig = useRowInstrumentsCtx();
  const headerCtx = useHeaderContext();

  // Не ренедрим кнопку, если нет функции конфигурации для получения items
  if (!rowInstrumentsGetConfig) {
    return null;
  }

  const { items, dropdownProps } = rowInstrumentsGetConfig({
    row: hideRowServiceKeysHandler(row),
    rowIdx: rowInd,
    onRowChange: (_r: unknown) => {
      // onRowChange(hideRowServiceKeysHandler(r));
    },
    additional: headerCtx
  });

  // Не ренедрим кнопку, если массив для items пустой
  if (items.length === 0) {
    return null;
  }

  if (
    dropdownProps?.useItemContentAsButtonContent &&
    items.length === 1 &&
    items[0]
  ) {
    const oneItem = items[0];
    const iconContent = oneItem.contentLeft ?? oneItem.contentRight;

    if (iconContent) {
      return (
        <CustomIconButton
          title={oneItem.label}
          onClick={(e) => {
            if (dropdownProps?.onItemSelect) {
              dropdownProps.onItemSelect(oneItem, e);
              return;
            }
            if (oneItem.onItemSelect) {
              oneItem.onItemSelect(oneItem, e);
            }
          }}
        >
          {iconContent}
        </CustomIconButton>
      );
    }
  }

  return (
    <TableDropdown
      onItemSelect={(i: RowInstrumentsDropdownItemOption, e) => {
        if (i.onItemSelect) {
          i.onItemSelect(i, e);
        }
      }}
      items={items}
      {...dropdownProps}
    >
      <CustomIconButton {...dotsButtonProps} />
    </TableDropdown>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RowIColumn: ColumnConfigInternal<any, unknown> = {
  key: ROW_I_COLUMN_KEY,
  name: '',
  isServiceColumn: true,
  width: ROW_I_COLUMN_WIDTH,
  minWidth: ROW_I_COLUMN_WIDTH,
  // maxWidth: ROW_I_COLUMN_WIDTH,
  // cellClass: `${ROW_I_COL_CLASS}`,
  // headerCellClass: `${ROW_I_COL_CLASS} ${ROW_I_HEADER_COL_CLASS}`,
  // summaryCellClass: `${ROW_I_COL_CLASS} ${ROW_I_SUMMARY_COL_CLASS}`,
  frozen: true,
  // resizable: false,
  // sortable: false,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderCell(props: any) {
    return <RowIRenderCell {...props} />;
  }
};
