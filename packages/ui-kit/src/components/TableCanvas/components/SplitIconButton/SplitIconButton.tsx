import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { IconChevronDown } from '@ui-kit/icons';
import React, { useState } from 'react';

import { TableDropdown } from '../TableDropdown/TableDropdown';
import { TableTooltip } from '../TableTooltip';
import { IconSlot, Root } from './SplitIconButton.styled';
import { SplitIconButtonProps } from './SplitIconButton.types';

/**
 * SplitIconButton — пара кнопок-иконок: основное действие слева и кнопка-шеврон
 * справа, открывающая дропдаун (паттерн split button). Клики по каждой
 * обрабатываются отдельно (onIconClick / onChevronClick), шеврон с items
 * открывает дропдаун. Предназначен для кастомных слотов контрл-блока таблицы:
 * editModeLeftSlot и customFeatures.
 *
 * Дропдаун под капотом — TableDropdown, поэтому компонент работает внутри
 * контекста TableCanvas и подхватывает rowSize таблицы автоматически (ширина и
 * размер списка). Размеры иконок задаёт потребитель снаружи.
 */
export const SplitIconButton = ({
  icon,
  onIconClick,
  iconTooltip,
  chevronIcon,
  chevronSize = 'xs',
  size = 's',
  items,
  onItemSelect,
  onChevronClick,
  onToggle,
  dropdownProps,
  domMetadata,
  iconDomMetadata,
  chevronDomMetadata
}: SplitIconButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconButton = (
    <EmbedIconButton size={size} onClick={onIconClick} {...iconDomMetadata}>
      <IconSlot>{icon}</IconSlot>
    </EmbedIconButton>
  );

  const chevronButton = (
    <EmbedIconButton
      size={size}
      onClick={items ? undefined : onChevronClick}
      {...chevronDomMetadata}
    >
      <IconSlot $flippable $open={isOpen}>
        {chevronIcon ?? <IconChevronDown size={chevronSize} />}
      </IconSlot>
    </EmbedIconButton>
  );

  return (
    <Root {...domMetadata}>
      {iconTooltip ? (
        <TableTooltip text={iconTooltip} animated target={iconButton} />
      ) : (
        iconButton
      )}
      {items ? (
        <TableDropdown
          items={items}
          onItemSelect={onItemSelect}
          onToggle={(state) => {
            setIsOpen(state);
            onToggle?.(state);
          }}
          {...dropdownProps}
        >
          {chevronButton}
        </TableDropdown>
      ) : (
        chevronButton
      )}
    </Root>
  );
};
