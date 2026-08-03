import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { IconKeyOutline } from '@ui-kit/icons';
import React from 'react';

import { TableDropdown } from '../components/TableDropdown/TableDropdown';
import { TableTooltip } from '../components/TableTooltip';
import { useHeaderContext } from '../contexts';
import { DataAttributes } from '../types/utils.type';
import { getKeyTextOptionsWithIcon } from './handlers';
import { KeyText } from './types';

interface KeyTextIconWithDropdownProps {
  keyText: KeyText;
  setKeyText: React.Dispatch<React.SetStateAction<KeyText>>;
  className?: string;
}

export const KeyTextIconWithDropdown: React.FC<
  KeyTextIconWithDropdownProps & DataAttributes
> = ({
  keyText,
  setKeyText,
  className,
  ...rest // data-атрибуты
}) => {
  const { rowSize } = useHeaderContext();
  return (
    <TableDropdown
      onItemSelect={(i) => {
        setKeyText(i.value as KeyText);
      }}
      items={getKeyTextOptionsWithIcon({ keyText, rowSize })}
    >
      <TableTooltip
        text="Ключ текст"
        animated
        target={
          <EmbedIconButton
            size="m"
            // view="clear"
            className={className}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...rest}
          >
            <IconKeyOutline color="inherit" />
          </EmbedIconButton>
        }
      />
    </TableDropdown>
  );
};
