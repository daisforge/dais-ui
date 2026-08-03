import type { TooltipProps } from '@ui-kit/components/Tooltip';
import { Tooltip } from '@ui-kit/components/Tooltip';
import { bodyXS, inverseTextPrimary } from '@ui-kit/tokens';
import React, { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const contentFontStyles = () => css(bodyXS);

const StyledTooltipContent = styled.div`
  color: ${() => inverseTextPrimary};
  ${() => contentFontStyles()}

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
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </StyledTooltipContent>
);

export interface FiltersActionsTooltipProps
  extends Omit<TooltipProps, 'text' | 'children'> {
  groupLabel?: string;
  items: string[];
  children: React.ReactNode;
}

export const FiltersActionsTooltip: FC<FiltersActionsTooltipProps> = ({
  groupLabel,
  items,
  children,
  ...tooltipProps
}) => {
  // Состояние для принудительного закрытия тултипа
  const [shouldForceCloseTooltip, setShouldForceCloseTooltip] = useState(false);

  // Флаг, определяющий нужно ли показывать тултип (если есть элементы)
  const hasItemsToShow = items.length > 0;

  // Эффект для сброса состояния тултипа при изменении количества элементов
  // Когда элементов было 0, а стало больше 0 - принудительный ререндер не нужен
  // Иначе просто закроется список с выбором элементов, потому что при выборе элементов из списка будет меняться ключ (который зависит от длины items)
  // Нужен принудительный ререндер, когда элементов было больше 0, а потом мы очистили этот список.
  // Тогда возникает бага, что тултип остается отрисованным с одним только groupLabel
  // В этом случае мы меняем внутренний стейт для ререндера -> сокрытия тултипа
  useEffect(() => {
    if (!hasItemsToShow) {
      setShouldForceCloseTooltip(true);
      const resetTimer = setTimeout(() => {
        setShouldForceCloseTooltip(false);
      }, 0);

      return () => clearTimeout(resetTimer);
    }

    return undefined;
  }, [hasItemsToShow]);

  return (
    <Tooltip
      key={`tooltip-${shouldForceCloseTooltip}`} // Ключ для принудительного ререндера
      usePortal
      trigger={hasItemsToShow ? tooltipProps?.trigger ?? 'hover' : 'none'}
      text={<TooltipContent groupLabel={groupLabel} items={items} />}
      size="s"
      {...tooltipProps}
    >
      {children}
    </Tooltip>
  );
};
