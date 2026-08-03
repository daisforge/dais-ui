import type { TooltipProps } from '@salutejs/sdds-finai';
import { Tooltip } from '@salutejs/sdds-finai';
import { bodyXS, inverseTextPrimary } from '@ui-kit/tokens';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const StyledTooltipContent = styled.div`
  color: ${() => inverseTextPrimary};
  ${() => css(bodyXS)};
  max-height: 130px;
  overflow-y: auto;
  padding-block: 2px;
  padding-right: 2px;

  & > ul {
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & li {
    padding-left: 12px;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 2px;
    }
  }
`;

const TooltipContent: FC<{ groupLabel?: string; items: string[] }> = ({
  groupLabel,
  items,
}) => (
  <StyledTooltipContent>
    <span>{groupLabel}</span>
    <ul>
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  </StyledTooltipContent>
);

const FullWidthWrapper = styled.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`;

export type TooltipListProps = Omit<TooltipProps, 'text' | 'children'> & {
  groupLabel?: string;
  items: string[];
  children: React.ReactNode;
  /**
   * Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
   * Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
   * чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.
   */
  fullWidth?: boolean;
};

export const TooltipList: FC<TooltipListProps> = ({
  groupLabel,
  items,
  children,
  fullWidth,
  ...tooltipProps
}) => {
  // Флаг, определяющий нужно ли показывать тултип (если есть элементы)
  const hasItemsToShow = items.length > 0;

  const tooltip = (
    <Tooltip
      usePortal
      size="s"
      mouseEnterDelay={500}
      {...tooltipProps}
      // Принудительно скрываем тултип, если нет элементов, перебивая пропсы
      trigger={hasItemsToShow ? tooltipProps['trigger'] ?? 'hover' : 'none'}
      text={
        hasItemsToShow ? (
          <TooltipContent groupLabel={groupLabel} items={items} />
        ) : null
      }
      opened={hasItemsToShow ? tooltipProps['opened'] : false}
    >
      {children}
    </Tooltip>
  );

  if (fullWidth) {
    return <FullWidthWrapper>{tooltip}</FullWidthWrapper>;
  }

  return tooltip;
};
