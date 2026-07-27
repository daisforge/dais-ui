import { Box } from '@ui-kit/components/Box';
import { ColumnConfig, ObjectForExtending } from '@ui-kit/components/Table';
import React, { PropsWithChildren } from 'react';

import { KeyText, KeyTextMap } from '../feature-key-text/types';
import { ColumnsControlInner } from './ColumnsControlInner';
import { ColumnsControlConfig } from './types';

export const ColumnsControl = <Row extends ObjectForExtending, SummaryRow>({
  opened,
  onClose,
  ...innerControlProps
}: {
  opened: boolean;
  onClose: () => void;
  columnsOrder: string[];
  getDefaultColumnsOrder: () => string[];
  setColumnsOrder: React.Dispatch<React.SetStateAction<string[]>>;
  pinnedCols: string[];
  setPinnedCols: React.Dispatch<React.SetStateAction<string[]>>;
  hiddenCols: string[];
  setHiddenCols: React.Dispatch<React.SetStateAction<string[]>>;
  columnConfig: readonly ColumnConfig<Row, SummaryRow>[];
  columnsControlConfig: ColumnsControlConfig;
  colsWithKeyTextMap: KeyTextMap;
  keyText: KeyText;
  tableConfigKeyTextBoolean: boolean;
} & PropsWithChildren) => (
  <Box
    $css={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }}
  >
    <ColumnsControlInner {...{ ...innerControlProps, onClose, opened }} />
  </Box>
);
