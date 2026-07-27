import React from 'react';

import { ContentFormat } from '../../types';
import { CLASS } from '../constants';
import { CellContentSpan } from './CellContentSpan';
import { formatCellValue } from './formatCellContent';
import { getAlignment } from './getAlignment';

export const FormattedContent = (value: unknown, format?: ContentFormat) => {
  if (React.isValidElement(value)) {
    return value;
  }
  const formattedValue = formatCellValue(value, format);
  const title = typeof formattedValue === 'string' ? formattedValue : undefined;

  const alignContent = getAlignment(format);

  return (
    <CellContentSpan
      className={CLASS.cellContent}
      title={title}
      alignContent={alignContent}
    >
      {formattedValue}
    </CellContentSpan>
  );
};
