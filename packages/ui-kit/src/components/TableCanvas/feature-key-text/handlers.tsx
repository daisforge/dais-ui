import { Box } from '@ui-kit/components/Box';
import { IconDone } from '@ui-kit/icons';
import { textInfo } from '@ui-kit/tokens';
import React from 'react';

import { SIZE } from '../styles';
import { ObjectForExtending } from '../types';
import { getDropdownIconSize } from '../widgets/control-block/use-buttons-to-dropdown';
import { KEY_TEXT_KEY, KEY_TEXT_OPTIONS, KEY_TEXT_PARENT } from './constants';
import type { KeyText, KeyTextConfig } from './types';

export const showKeyText = (
  tableConfigKeyText: boolean | KeyTextConfig | undefined,
) => {
  if (!tableConfigKeyText) {
    return false;
  }

  if (typeof tableConfigKeyText === 'boolean') {
    return tableConfigKeyText;
  }
  return tableConfigKeyText.showInControl ?? true;
};
export const getKeyTextCol = <
  ColumnObj extends { key: string },
  Column extends ColumnObj | ((props: { keyText: KeyText }) => ColumnObj),
>(
  col: Column,
  keyText: KeyText,
) => (typeof col === 'function' ? col({ keyText }) : (col as ColumnObj));

export const getCols = <K, T>({
  keyText,
  key,
  text,
}: {
  keyText: KeyText;
  key: K;
  text: T;
}) => {
  const result: (K | T)[] = [];
  switch (keyText) {
    case 'key':
      result.push(key);
      break;
    case 'keyText':
      result.push(key, text);
      break;
    case 'textKey':
      result.push(text, key);
      break;

    default: // 'text'
      result.push(text);
      break;
  }
  return result;
};
export const isKeyTextColumn = <Col extends ObjectForExtending>(col: Col) =>
  typeof col?.[KEY_TEXT_PARENT] !== 'undefined' ||
  typeof col?.[KEY_TEXT_KEY] !== 'undefined';

export const getColsWithKeyText = <
  Column extends {
    key: string;
    keyText?: Column | ((props: { keyText: KeyText }) => Column);
  },
>(
  cols: Column[],
  keyText: KeyText,
) =>
  cols.reduce((acc, curr) => {
    if (!curr.keyText) {
      acc.push(curr);
      return acc;
    }

    const keyCol = {
      ...getKeyTextCol(curr.keyText, keyText),
      [KEY_TEXT_PARENT]: curr.key,
    } as Column;

    const current = { ...curr, keyText: keyCol };

    const arrForPush = getCols({ keyText, key: keyCol, text: current });

    acc.push(...arrForPush);

    return acc;
  }, [] as typeof cols);

export const getKeyTextOptionsWithIcon = ({
  keyText,
  onItemSelect,
  rowSize,
}: {
  keyText: KeyText;
  onItemSelect?: (item: KeyText) => void;
  rowSize?: SIZE;
}) =>
  KEY_TEXT_OPTIONS.map((el) => ({
    ...el,

    contentLeft: (
      <Box
        $css={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          visibility: keyText === el.value ? 'visible' : 'hidden',
        }}
      >
        <IconDone
          size={rowSize ? getDropdownIconSize(rowSize) : 's'}
          color={textInfo}
        />
      </Box>
    ),

    ...(onItemSelect && { onItemSelect: () => onItemSelect(el.value) }),
  }));
