import React, { useEffect, useId, useMemo } from 'react';

import {
  HeaderContextValueTypeInstance,
  useHeaderContext,
  useTableResizeObserver
} from '../../contexts';
import { FiltersVariables } from '../../feature-filtering/filtering.type';
import { FilterComponentInPopover } from '../../feature-filtering/header-filter-button/filter-component-in-popover';
import { ColumnConfig, ObjectForExtending } from '../../types';
import { viewportToContainerPosition } from '../../utils';
import {
  DATA_POPOVER_TRIGGER,
  POPOVER_OFFSET,
  POPOVER_Z_INDEX
} from '../constants';
import { useTablePopover } from '../context';
import {
  HiddenTriggerButton,
  PopoverContent,
  StyledPopoverBeta,
  StyledPopoverContainer
} from './styled';

/**
 * Компонент рендеринга filter контента внутри поповера.
 * Типизированный wrapper для FilterComponentInPopover.
 *
 * ВАЖНО: Обернут в React.memo для предотвращения бесконечных ререндеров.
 * КРИТИЧНО: НЕ используем useTablePopover() внутри этого компонента!
 * Это создаст подписку на контекст, которую React.memo не может предотвратить.
 */
const FilterContent = React.memo(
  <
    FilterStateType extends ObjectForExtending,
    R extends ObjectForExtending,
    SR
  >({
    columnConfig,
    onClose,
    popoverIsOpen
  }: {
    columnConfig: ColumnConfig<R, SR>;
    onClose: () => void;
    popoverIsOpen: boolean;
  }) => {
    const headerContextState = useHeaderContext<
      HeaderContextValueTypeInstance<FilterStateType> & FiltersVariables
    >();

    return (
      <FilterComponentInPopover
        columnConfig={columnConfig}
        popoverIsOpen={popoverIsOpen}
        setPopoverIsOpen={(open) => {
          if (!open) {
            onClose();
          }
        }}
        tabIndex={-1}
        headerContextState={headerContextState}
        filterSource="header"
      />
    );
  }
) as <
  _FilterStateType extends ObjectForExtending,
  R extends ObjectForExtending,
  SR
>(props: {
  columnConfig: ColumnConfig<R, SR>;
  onClose: () => void;
  popoverIsOpen: boolean;
}) => React.ReactElement;

/**
 * Главный компонент поповера в таблице.
 * Рендерится внутри основного контейнера таблицы (через renderInContainer).
 *
 * Управляется через TablePopoverContext:
 * - open({ position, contentType: 'filter', contentData: columnConfig })
 * - close()
 *
 * position приходит в viewport-координатах (после absoluteBounds для header).
 * Если передан containerEl, то переводим в координаты контейнера (как ContextMenu/тултип).
 */
export const PopoverInTable = <
  FilterStateType extends ObjectForExtending = ObjectForExtending,
  R extends ObjectForExtending = ObjectForExtending,
  SR = unknown
>({
  containerEl
}: {
  /** Контейнер, в который рендерится поповер (тот же, что у renderInContainer). Нужен для перевода viewport -> container-relative и поиска trigger-кнопки. */
  containerEl?: HTMLElement | null;
} = {}) => {
  const { state, close } = useTablePopover();
  const { isOpen, position, contentType, contentData } = state;

  const triggerId = useId();

  const displayPosition = useMemo(() => {
    const result = (() => {
      if (!position) return null;
      if (containerEl) {
        return viewportToContainerPosition(position.x, position.y, containerEl);
      }
      return position;
    })();
    return result;
  }, [position, containerEl]);

  useTableResizeObserver(() => {
    if (isOpen && contentType === 'filter') {
      close();
    }
  });

  /**
   * Программный клик на hidden button для открытия PopoverBeta.
   *
   * Почему .click() на DOM-элементе, а не через React ref:
   * PopoverBeta внутренне подписывается на click-события своего target.
   * При попытке вызвать ref.current.click() клик не доходил до обработчиков
   * PopoverBeta — вероятно, из-за того что PopoverBeta клонирует target
   * и вешает свои обработчики при монтировании.
   * Единственный рабочий способ — найти реальный DOM-элемент и вызвать .click().
   *
   * Почему двойной requestAnimationFrame:
   * Первый RAF откладывает выполнение до следующего кадра отрисовки — к этому моменту
   * React завершает рендер и коммит (DOM-элементы уже в документе).
   * Второй RAF нужен, потому что PopoverBeta сам использует RAF/microtask при инициализации
   * обработчиков после монтирования. Одного кадра недостаточно — клик происходит раньше,
   * чем PopoverBeta успевает подписаться на события target. Два RAF гарантируют,
   * что и React-коммит, и внутренняя инициализация PopoverBeta завершены.
   */
  useEffect(() => {
    if (isOpen && containerEl) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const trigger = containerEl.querySelector<HTMLElement>(
            `[${DATA_POPOVER_TRIGGER}="${triggerId}"]`
          );
          trigger?.click();
        });
      });
    }
  }, [isOpen, triggerId, containerEl]);

  if (!isOpen || !position || !contentType || !displayPosition) return null;

  // Рендер контента в зависимости от типа
  const renderContent = () => {
    switch (contentType) {
      case 'filter':
        return (
          typeof contentData === 'object' &&
          contentData &&
          'columnConfig' in contentData && (
            <FilterContent<FilterStateType, R, SR>
              columnConfig={contentData?.columnConfig as ColumnConfig<R, SR>}
              onClose={close}
              popoverIsOpen={isOpen}
            />
          )
        );
      case 'custom':
        // Заглушка для будущего расширения
        return <div>Custom content placeholder</div>;
      default:
        return null;
    }
  };

  return (
    <StyledPopoverContainer $x={displayPosition.x} $y={displayPosition.y}>
      <StyledPopoverBeta
        trigger="click"
        // flip
        shift // Важно: без shift поповер может триггерить ресайзы или region-changed контейнера таблицы, что приводит к автозакрытию (заметно при открытии поповера в последнем столбце)
        target={
          <HiddenTriggerButton
            type="button"
            {...{ [DATA_POPOVER_TRIGGER]: triggerId }}
            aria-hidden="true"
            tabIndex={-1}
          />
        }
        outsideClick
        onToggle={(isOpen) => {
          if (!isOpen) {
            close();
          }
        }}
        offset={POPOVER_OFFSET}
        zIndex={POPOVER_Z_INDEX}
        placement="bottom-start"
        hasTail={false}
      >
        <PopoverContent>{renderContent()}</PopoverContent>
      </StyledPopoverBeta>
    </StyledPopoverContainer>
  );
};
