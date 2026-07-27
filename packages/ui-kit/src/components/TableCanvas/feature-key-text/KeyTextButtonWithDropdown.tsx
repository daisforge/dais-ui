import { Button } from '@ui-kit/components/Button';
import { IconChevronDown } from '@ui-kit/icons';
import React from 'react';

import { TableDropdown } from '../components/TableDropdown/TableDropdown';
import { DataAttributes } from '../types/utils.type';
import { KEY_TEXT } from './constants';
import { getKeyTextOptionsWithIcon } from './handlers';
import { KeyText } from './types';

interface KeyTextButtonWithDropdownProps {
  keyText: KeyText;
  setKeyText: React.Dispatch<React.SetStateAction<KeyText>>;
  className?: string;
}

export const KeyTextButtonWithDropdown: React.FC<
  KeyTextButtonWithDropdownProps & DataAttributes
> = ({ keyText, setKeyText, className, ...rest }) => {
  const currentLabel =
    KEY_TEXT[keyText as keyof typeof KEY_TEXT]?.label ?? 'Ключ и текст';

  return (
    <TableDropdown
      onItemSelect={(i) => {
        setKeyText(i.value as KeyText);
      }}
      items={getKeyTextOptionsWithIcon({ keyText })}
    >
      <Button
        size="xs"
        view="secondary"
        text={currentLabel}
        contentRight={<IconChevronDown size="xs" />}
        className={className}
        {...rest}
      />
    </TableDropdown>
  );
};
