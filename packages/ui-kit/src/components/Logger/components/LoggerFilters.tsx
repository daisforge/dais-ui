import { mergeClasses } from '@ui-kit/utils';
import React, { FC, MouseEvent, ReactNode } from 'react';

import { TextXS } from '../../Typography';
import { LOGGER_STATUSES, loggerClassNames as cls } from '../Logger.constants';
import { useLoggerContext } from '../Logger.context';
import { StyledLoggerFilter, StyledLoggerFilters } from '../Logger.styled';
import type { LoggerCounts, LoggerFilterValue } from '../Logger.types';
import { sumLoggerCounts } from '../Logger.utils';
import { LoggerStatusIcon } from './LoggerStatusIcon';

export type LoggerFiltersProps = {
  counts: LoggerCounts;
  value: LoggerFilterValue | null;
  onChange: (value: LoggerFilterValue) => void;
  /** Показывать чипсы статусов без сообщений */
  showEmpty?: boolean;
  className?: string;
  /** Дополнительные чипсы после стандартных */
  extra?: ReactNode;
};

export const LoggerFilters: FC<LoggerFiltersProps> = ({
  counts,
  value,
  onChange,
  showEmpty,
  className,
  extra,
}) => {
  const { labels, classes } = useLoggerContext();

  const handleClick = (event: MouseEvent, next: LoggerFilterValue) => {
    event.stopPropagation();
    onChange(next);
  };

  return (
    <StyledLoggerFilters
      className={mergeClasses(cls.filters, classes?.filters, className)}
      role="group"
    >
      <StyledLoggerFilter
        type="button"
        $active={value === 'all'}
        aria-pressed={value === 'all'}
        className={mergeClasses(cls.filter, classes?.filter)}
        onClick={(event) => handleClick(event, 'all')}
      >
        <TextXS>{`${labels.all} (${sumLoggerCounts(counts)})`}</TextXS>
      </StyledLoggerFilter>
      {LOGGER_STATUSES.filter(
        (status) => showEmpty || (counts[status] ?? 0) > 0,
      ).map((status) => (
        <StyledLoggerFilter
          key={status}
          type="button"
          $active={value === status}
          aria-pressed={value === status}
          data-status={status}
          className={mergeClasses(cls.filter, classes?.filter)}
          onClick={(event) => handleClick(event, status)}
        >
          <LoggerStatusIcon status={status} />
          <TextXS>{counts[status] ?? 0}</TextXS>
        </StyledLoggerFilter>
      ))}
      {extra}
    </StyledLoggerFilters>
  );
};
