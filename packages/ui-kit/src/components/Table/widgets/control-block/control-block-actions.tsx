import { LinkButton } from '@ui-kit/components/LinkButton';
import { IconDisclosureDownOutline } from '@ui-kit/icons';
import { useDropdownItemClickHandler } from '@ui-kit/utils/dropdownUtils';
import React, { ReactNode, useState } from 'react';

import { TableDropdown } from '../../components/TableDropdown';
import { TableDropdownConfigProps } from '../../components/TableDropdown/types';
import { ControlBlockButtonProps } from './control-block-button.types';
import { useButtonsToDropdownItems } from './use-buttons-to-dropdown';

export const ControlBlockActions = ({
  buttons = [],
  dividerIndexes = [],
  triggerSlot,
  dropdownProps
}: {
  buttons: ControlBlockButtonProps[];
  dividerIndexes?: Array<number>;
  triggerSlot?: ReactNode;
  dropdownProps?: TableDropdownConfigProps;
}) => {
  const { dropdownItems, handlerMap, $summaryCSS } =
    useButtonsToDropdownItems(buttons);
  const handleItemSelect = useDropdownItemClickHandler(handlerMap);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  return (
    <TableDropdown
      $css={$summaryCSS}
      closeOnSelect
      {...dropdownProps}
      onItemSelect={handleItemSelect}
      items={dropdownItems.map((item, index) => {
        if (dividerIndexes.includes(index)) {
          item.dividerAfter = true;
        }
        return item;
      })}
      onToggle={(state) => setIsOpenDropDown(state)}
    >
      {triggerSlot || (
        <LinkButton
          text="Действия"
          contentRight={
            <span
              style={{
                transform: isOpenDropDown ? 'rotate(180deg)' : `rotate(0deg)`,
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <IconDisclosureDownOutline size="s" />
            </span>
          }
          style={{
            fontWeight: 500,
            paddingInline: '16px'
          }}
        />
      )}
    </TableDropdown>
  );
};
