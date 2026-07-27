import { Box } from '@ui-kit/components/Box';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { Collapse } from '@ui-kit/components/Collapse';
import { Typography } from '@ui-kit/components/Typography';
import { useBreakpoint } from '@ui-kit/utils';
import React from 'react';

import { AnimatedCounter } from '../Table/components/AnimatedCounter';
import type { MassActionsCounterProps } from './types';

/**
 * Компонент счетчика для MassActions
 * Стилизован аналогично SummaryCheckbox из таблицы
 */
export const MassActionsCounter: React.FC<MassActionsCounterProps> = ({
  selectedCount,
  label = 'Выбрано',
  showCheckbox = false,
  checked = false,
  onCheckboxChange,
  className,
  indeterminate
}) => {
  const { down } = useBreakpoint();
  const isCompact = down('xl');
  const isHaveCounter = selectedCount > 0;
  const labelVariant = isCompact ? 'BodyXS' : 'BodyS';

  const sizeOnOpen = (() => {
    if (selectedCount === 0) return '0px';

    const symbolsCount = selectedCount.toString().length;
    // Средняя ширина одного символа шрифта body-xxs (Counter xs)
    const sizeOfSymbol = 6.1;
    // Горизонтальный padding Counter xs: 0.25rem * 2 = 4px * 2 ≈ 7.1px
    const sizeOfCounterWithoutSymbols = 7.1;
    // Counter xs при одной цифре становится квадратным (width = height = 16px),
    // поэтому минимальная ширина — 16px
    return `${
      Math.max(16, sizeOfCounterWithoutSymbols + symbolsCount * sizeOfSymbol) +
      4
    }px`;
  })();

  const checkboxElement = showCheckbox ? (
    <Box
      $css={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      <Checkbox
        checked={checked}
        indeterminate={indeterminate}
        onChange={onCheckboxChange}
        size="m"
      />
      <Typography variant={labelVariant}>{label}</Typography>
    </Box>
  ) : (
    <Typography variant={labelVariant}>{label}</Typography>
  );

  return (
    <Box
      className={className}
      $css={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {checkboxElement}
      <Collapse
        duration={0.3}
        orientation="horizontal"
        isOpen={isHaveCounter}
        unMountOnClose
        sizeOnOpen={sizeOnOpen}
        extContainerCss={{
          overflow: 'visible',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
        intContainerCss={{
          always: {
            opacity: '0',
            transition: '.3s ease'
          },
          onOpen: {
            opacity: 1
          }
        }}
      >
        {isHaveCounter && (
          <AnimatedCounter
            className="counter"
            key={selectedCount}
            count={selectedCount}
            size="xs"
            view="accent"
            style={{
              marginBottom: '3px'
            }}
          />
        )}
      </Collapse>
    </Box>
  );
};
