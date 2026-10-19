import { TextXS } from '@ui-kit/components/Typography';
import { mergeClasses } from '@ui-kit/utils';
import React, { FC, ReactNode } from 'react';

import {
  TABLE_CANVAS_LOGGER_STATUS_LABEL_KEYS,
  TABLE_CANVAS_LOGGER_STATUSES,
  tableCanvasLoggerClassNames as cls,
} from '../TableCanvasLogger.constants';
import { useTableCanvasLoggerContext } from '../TableCanvasLogger.context';
import {
  StyledTableCanvasLoggerFilter,
  StyledTableCanvasLoggerFilters,
} from '../TableCanvasLogger.styled';
import type {
  TableCanvasLoggerCounts,
  TableCanvasLoggerFilterValue,
} from '../TableCanvasLogger.types';
import { sumTableCanvasLoggerCounts } from '../TableCanvasLogger.utils';
import { TableCanvasLoggerStatusIcon } from './TableCanvasLoggerStatusIcon';

export type TableCanvasLoggerFiltersProps = {
  counts: TableCanvasLoggerCounts;
  value: TableCanvasLoggerFilterValue | null;
  onChange: (value: TableCanvasLoggerFilterValue) => void;
  /** Показывать чипсы статусов без сообщений */
  showEmpty?: boolean;
  className?: string;
  /** Дополнительные чипсы после стандартных */
  extra?: ReactNode;
};

export const TableCanvasLoggerFilters: FC<TableCanvasLoggerFiltersProps> = ({
  counts,
  value,
  onChange,
  showEmpty,
  className,
  extra,
}) => {
  const { labels, classes } = useTableCanvasLoggerContext();

  return (
    <StyledTableCanvasLoggerFilters
      className={mergeClasses(cls.filters, classes?.filters, className)}
      role="group"
      aria-label={labels.filters}
    >
      <StyledTableCanvasLoggerFilter
        type="button"
        $active={value === 'all'}
        aria-pressed={value === 'all'}
        className={mergeClasses(cls.filter, classes?.filter)}
        onClick={() => onChange('all')}
      >
        <TextXS>{`${labels.all} (${sumTableCanvasLoggerCounts(
          counts,
        )})`}</TextXS>
      </StyledTableCanvasLoggerFilter>
      {TABLE_CANVAS_LOGGER_STATUSES.filter(
        (status) => showEmpty || (counts[status] ?? 0) > 0,
      ).map((status) => (
        <StyledTableCanvasLoggerFilter
          key={status}
          type="button"
          $active={value === status}
          aria-pressed={value === status}
          data-status={status}
          aria-label={`${
            labels[TABLE_CANVAS_LOGGER_STATUS_LABEL_KEYS[status]]
          }: ${counts[status] ?? 0}`}
          className={mergeClasses(cls.filter, classes?.filter)}
          onClick={() => onChange(status)}
        >
          <TableCanvasLoggerStatusIcon status={status} />
          <TextXS>{counts[status] ?? 0}</TextXS>
        </StyledTableCanvasLoggerFilter>
      ))}
      {extra}
    </StyledTableCanvasLoggerFilters>
  );
};
