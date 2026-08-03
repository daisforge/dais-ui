import { LinkButton } from '@ui-kit/components/LinkButton';
import { IconDisclosureDownOutline } from '@ui-kit/icons';
import React, { ReactNode, useState } from 'react';

import { TableDropdown } from '../../components/TableDropdown';
import { TableDropdownConfigProps } from '../../components/TableDropdown/types';
import { ControlBlockButtonProps } from './control-block-button.types';
import {
  useButtonsToDropdownItems,
  useDropdownItemClickHandler,
} from './use-buttons-to-dropdown';

export const ControlBlockActions = ({
  buttons = [],
  dividerIndexes = [],
  triggerSlot,
  dropdownProps,
}: {
  buttons: ControlBlockButtonProps[];
  dividerIndexes?: Array<number>;
  triggerSlot?: ReactNode;
  dropdownProps?: TableDropdownConfigProps;
}) => {
  const { dropdownItems, handlerMap, $summaryCSS, keepOpenItemValues } =
    useButtonsToDropdownItems(buttons);
  const handleItemSelect = useDropdownItemClickHandler(handlerMap);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  return (
    <TableDropdown
      $css={$summaryCSS}
      // Закрытием управляет сам TableDropdown: по keep-open пунктам (колонки
      // группировки, switch-фичи) НЕ закрываемся (мульти-тоггл), по остальным
      // листам закрываемся.
      shouldCloseOnItemSelect={(item) =>
        !keepOpenItemValues.has(String(item.value))
      }
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
                transform: isOpenDropDown ? 'scaleY(-1)' : 'scaleY(1)',
                transition: 'transform 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <IconDisclosureDownOutline size="s" />
            </span>
          }
          style={{
            fontWeight: 500,
            paddingInline: '16px',
          }}
        />
      )}
    </TableDropdown>
  );
};
