import React, { useLayoutEffect, useMemo, useState } from 'react';

import {
  HeaderContextValueTypeInstance,
  useHeaderContext,
  useTableResizeObserver,
} from '../../contexts';
import { FiltersVariables } from '../../feature-filtering/filtering.type';
import { FilterComponentInPopover } from '../../feature-filtering/header-filter-button/filter-component-in-popover';
import { ColumnConfig, ObjectForExtending } from '../../types';
import { viewportToContainerPosition } from '../../utils';
import { POPOVER_Z_INDEX } from '../constants';
import { getPopoverBehavior, useTablePopover } from '../context';
import { getFilterPlacement } from '../utils';
import {
  HiddenTriggerButton,
  PopoverContent,
  StyledPopoverBeta,
  StyledPopoverContainer,
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
    SR,
  >({
    columnConfig,
    onClose,
    popoverIsOpen,
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
  },
) as <
  _FilterStateType extends ObjectForExtending,
  R extends ObjectForExtending,
  SR,
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
 * - open({ position, anchorSize, contentType: 'custom', render, behavior, sourceKey }): контент рисует тот, кто открыл
 * - close()
 *
 * position приходит в viewport-координатах (после absoluteBounds для header).
 * Если передан containerEl, то переводим в координаты контейнера (как ContextMenu/тултип).
 */
export const PopoverInTable = <
  FilterStateType extends ObjectForExtending = ObjectForExtending,
  R extends ObjectForExtending = ObjectForExtending,
  SR = unknown,
>({
  containerEl,
}: {
  /** Контейнер, в который рендерится поповер (тот же, что у renderInContainer). Нужен для перевода viewport -> container-relative и поиска trigger-кнопки. */
  containerEl?: HTMLElement | null;
} = {}) => {
  const { state, close } = useTablePopover();
  const { isOpen, position, anchorSize, contentType, contentData, render } =
    state;

  const [content, setContent] = useState<HTMLDivElement | null>(null);
  const [placement, setPlacement] = useState<'bottom-start' | 'bottom-end'>(
    'bottom-start',
  );
  useLayoutEffect(() => {
    if (!content || !position) return undefined;
    const updatePlacement = () => {
      const viewportRight = content.ownerDocument.documentElement.clientWidth;
      const right = Math.min(
        containerEl?.getBoundingClientRect().right ?? viewportRight,
        viewportRight,
      );
      setPlacement(
        getFilterPlacement(
          position.x,
          content.getBoundingClientRect().width,
          right,
        ),
      );
    };
    updatePlacement();
    const observer = new ResizeObserver(updatePlacement);
    observer.observe(content);
    return () => observer.disconnect();
  }, [containerEl, content, position]);

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

  // Размер таблицы изменился (окно, полный экран): якорь сдвинулся, закрываем.
  useTableResizeObserver(() => {
    if (isOpen && getPopoverBehavior(state)?.closeOnTableResize) {
      close();
    }
  });

  if (!isOpen || !position || !contentType || !displayPosition) return null;

  // Свой контент (Popover на canvas): якорь размером с элемент или ячейку,
  // рисует его тот, кто открыл, через render.
  if (contentType === 'custom') {
    if (!render) return null;
    return (
      <StyledPopoverContainer
        $x={displayPosition.x}
        $y={displayPosition.y}
        $width={anchorSize?.width}
        $height={anchorSize?.height}
        $passThrough
      >
        {render({ close })}
      </StyledPopoverContainer>
    );
  }

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
      default:
        return null;
    }
  };

  return (
    <StyledPopoverContainer
      $x={displayPosition.x}
      $y={displayPosition.y}
      $width={anchorSize?.width}
      $height={anchorSize?.height}
      $passThrough
    >
      <StyledPopoverBeta
        opened
        shift // Важно: без shift поповер может триггерить ресайзы или region-changed контейнера таблицы, что приводит к автозакрытию (заметно при открытии поповера в последнем столбце)
        target={
          <HiddenTriggerButton
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            data-popover-trigger
          />
        }
        outsideClick
        onToggle={(isOpen) => {
          if (!isOpen) {
            // Закрытие инициировано floating-ui (клик мимо / Esc). Помечаем как
            // outsidePress, чтобы повторный клик по той же иконке фильтра не
            // переоткрывал поповер, а оставлял его закрытым (toggle).
            close({ outsidePress: true });
          }
        }}
        zIndex={POPOVER_Z_INDEX}
        placement={placement}
        hasTail={false}
      >
        <PopoverContent ref={setContent}>{renderContent()}</PopoverContent>
      </StyledPopoverBeta>
    </StyledPopoverContainer>
  );
};
