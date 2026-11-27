import { Dropdown } from '@ui-kit/components/Dropdown';
import React, { forwardRef } from 'react';
import styled, { CSSObject } from 'styled-components';

import { useHeaderContext } from '../../contexts';
import { getTableDropdownConfig } from '../../styles/dropdown-sizes';
import { TableDropdownProps } from './types';

const StyledDropdown: React.ComponentType<TableDropdownProps> = styled(
  Dropdown,
)<{ $css?: CSSObject }>(({ $css }) => $css);

export const SizedTableDropdown = forwardRef<
  HTMLButtonElement,
  TableDropdownProps
>(({ size, variant, listWidth, $css, ...props }, ref) => {
  const { rowSize } = useHeaderContext();
  const config = getTableDropdownConfig(rowSize, size);
  const autoWidth = `calc-size(max-content, clamp(${config.minWidth}px, size, ${config.maxWidth}px))`;
  // Plasma интерполирует число как CSS-строку без единиц измерения.
  const width = typeof listWidth === 'number' ? `${listWidth}px` : listWidth;
  return (
    <StyledDropdown
      {...props}
      ref={ref}
      size={size ?? config.size}
      variant={variant ?? config.variant}
      listWidth={width ?? autoWidth}
      $css={{
        // У Plasma стрелка подменю S имеет размер 24 px, у таблицы — 16 px.
        ...(config.size === 's' && {
          '--plasma-dropdown-item-disclosure-icon-size': `${config.iconWidth}px`,
        }),
        whiteSpace: 'normal',
        overflowWrap: 'anywhere',
        ...$css,
      }}
    />
  );
});

SizedTableDropdown.displayName = 'SizedTableDropdown';
