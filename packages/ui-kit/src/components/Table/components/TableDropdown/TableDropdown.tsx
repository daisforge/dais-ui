import { Dropdown } from '@ui-kit/components/Dropdown';
import React, { useEffect } from 'react';
import styled, { CSSObject } from 'styled-components';

import {
  useHeaderContext,
  useRefTableGlobalContainerContext,
} from '../../contexts';
import { LIST_WIDTH, SIZES } from '../../styles/styles.constants';
import { TableDropdownProps } from './types';

const StyledDropdown = styled(Dropdown)<{ $css?: CSSObject }>(
  ({ $css }) => $css,
) as typeof Dropdown;
export const TableDropdown = (
  props: TableDropdownProps & { isOpen?: boolean },
) => {
  const refTableGlobalContainer = useRefTableGlobalContainerContext();
  const { rowSize } = useHeaderContext();
  return (
    <StyledDropdown
      portal={refTableGlobalContainer}
      listWidth={LIST_WIDTH[rowSize]}
      size={SIZES[rowSize].input}
      {...props}
    />
  );
};

export const TableDropdownWithCustomClickOutside = ({
  onClose,
  isOpen,
  portal,
  ...props
}: TableDropdownProps & { isOpen?: boolean; onClose?: () => void }) => {
  const refTableGlobalContainer = useRefTableGlobalContainerContext();
  const { rowSize } = useHeaderContext();

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClickOutside = (e: MouseEvent) => {
      let menuElement: HTMLElement | null = null;

      if (typeof portal === 'string') {
        menuElement = document.getElementById(portal);
      } else if (portal && 'current' in portal) {
        menuElement = portal.current;
      } else if (refTableGlobalContainer?.current) {
        menuElement = refTableGlobalContainer.current;
      }

      if (menuElement && !menuElement.contains(e.target as Node) && onClose) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, portal, refTableGlobalContainer]);

  return (
    <StyledDropdown
      listWidth={LIST_WIDTH[rowSize]}
      size={SIZES[rowSize].input}
      closeOnOverlayClick={false}
      {...props}
    />
  );
};
