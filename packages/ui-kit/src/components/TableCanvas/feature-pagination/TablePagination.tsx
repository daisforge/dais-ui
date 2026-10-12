import { IconButton } from '@ui-kit/components/IconButton';
import { Pagination } from '@ui-kit/components/Pagination';
import {
  IconDisclosureLeftOutline,
  IconDisclosureRightOutline,
} from '@ui-kit/icons';
import { createSafeResizeObserver } from '@ui-kit/utils';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import { useRefTableContext } from '../contexts';
import { COLORS, TABLE_BORDER_RADIUS } from '../styles';
import { DURATION } from '../styles/styles.constants';
import {
  DEFAULT_PAGINATION_SIZE,
  getPaginationSlotsAndStatusQuickJumpByWidth,
  PAGINATION_TEXTS,
} from './constants';
import { getPaginationHeight } from './handlers';
import { PaginationProps, PaginationSlots } from './types';

const StyledDiv = styled.div(() => ({
  border: `1px solid ${COLORS.border}`,
  borderTop: 'none',
  borderBottomLeftRadius: `${TABLE_BORDER_RADIUS}px`,
  borderBottomRightRadius: `${TABLE_BORDER_RADIUS}px`,
  backgroundColor: COLORS.white,
  padding: '4px',
}));

const StyledPagination = styled(Pagination)<{ $hideQuickJump?: boolean }>`
  ${({ $hideQuickJump }) =>
    $hideQuickJump &&
    css`
      .pagination-actions.pagination-type-default.pagination-has-perpage-select {
        flex-direction: row;
      }
    `}
`;

export const TablePagination = (
  props: PaginationProps & {
    setPaginationHeight: React.Dispatch<React.SetStateAction<number>>;
    isCollapsed?: boolean;
    enableCollapse?: boolean;
  },
) => {
  const {
    onChangePageValue,
    onChange: onChangeTablePagination,
    setPaginationHeight,
    isCollapsed = false,
    enableCollapse = false,
    size = DEFAULT_PAGINATION_SIZE,
    responsiveSlots = false,
    onResize,
    value,
    count,
    ...rest
  } = props ?? {};
  const paginationRef = useRef<HTMLDivElement>(null);
  const [naturalHeight, setNaturalHeight] = useState<number | null>(null);
  const refTable = useRefTableContext();
  const [dynamicSlots, setDynamicSlots] = useState<PaginationSlots>(undefined);
  const [showQuickJump, setShowQuickJump] = useState<boolean>(true);

  // Определяем нужны ли стрелки навигации (когда slots === 1)
  const needsNavigationArrows = responsiveSlots && dynamicSlots === 1;

  // Вычисляем максимальную страницу: count - это количество записей, perPage - на странице
  // eslint-disable-next-line prefer-destructuring
  const perPage = rest['perPage'];
  const maxPage = useMemo(() => {
    if (!count || !perPage) return undefined;
    return Math.ceil(count / perPage);
  }, [count, perPage]);

  const scrollToTop = useCallback(() => {
    refTable?.current?.scrollTo(0, 0);
  }, [refTable]);

  // Обработчик для onChange (с perPage)
  const handleChange = useCallback(
    (page?: number, perPage?: number) => {
      onChangeTablePagination?.(page, perPage, scrollToTop);
    },
    [onChangeTablePagination, scrollToTop],
  );

  // Обработчик для onChangePageValue (без perPage)
  const handlePageValueChange = useCallback(
    (page?: number) => {
      onChangePageValue?.(page, scrollToTop);
    },
    [onChangePageValue, scrollToTop],
  );

  // Обработчики для стрелок навигации
  const handlePrevPage = useCallback(() => {
    if (value && value > 1) {
      if (onChangeTablePagination) {
        onChangeTablePagination(value - 1, perPage, scrollToTop);
      } else if (onChangePageValue) {
        onChangePageValue(value - 1, scrollToTop);
      }
    }
  }, [value, perPage, onChangeTablePagination, onChangePageValue, scrollToTop]);

  const handleNextPage = useCallback(() => {
    if (value && maxPage && value < maxPage) {
      if (onChangeTablePagination) {
        onChangeTablePagination(value + 1, perPage, scrollToTop);
      } else if (onChangePageValue) {
        onChangePageValue(value + 1, scrollToTop);
      }
    }
  }, [
    value,
    maxPage,
    perPage,
    onChangeTablePagination,
    onChangePageValue,
    scrollToTop,
  ]);

  // Стрелки для узких экранов (когда slots === 1)
  const leftContent = useMemo(
    () =>
      needsNavigationArrows ? (
        <IconButton
          size={size}
          view="clear"
          onClick={handlePrevPage}
          disabled={!value || value <= 1}
        >
          <IconDisclosureLeftOutline />
        </IconButton>
      ) : undefined,
    [needsNavigationArrows, size, handlePrevPage, value],
  );

  const rightContent = useMemo(
    () =>
      needsNavigationArrows ? (
        <IconButton
          size={size}
          view="clear"
          onClick={handleNextPage}
          disabled={!value || !maxPage || value >= maxPage}
        >
          <IconDisclosureRightOutline />
        </IconButton>
      ) : undefined,
    [needsNavigationArrows, size, handleNextPage, value, maxPage],
  );

  useEffect(() => {
    if (!paginationRef.current || !setPaginationHeight) {
      return undefined;
    }

    const resizeObserver = createSafeResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        // Измеряем внутренний блок: его естественный размер не зависит от collapse.
        const borderBox = entry.borderBoxSize?.[0];
        const bounds = entry.target.getBoundingClientRect();
        const height = borderBox?.blockSize ?? bounds.height;
        const width = borderBox?.inlineSize ?? bounds.width;
        if (height > 0) {
          setNaturalHeight(height);
          setPaginationHeight(height);
        }
        onResize?.(width);
        // Вычисляем slots на основе ширины и size
        const [slots, statusQuickJump] =
          getPaginationSlotsAndStatusQuickJumpByWidth(size, width);

        if (responsiveSlots) {
          setDynamicSlots(() => slots);
          setShowQuickJump(statusQuickJump);
        }
      }
    });

    resizeObserver.observe(paginationRef.current);

    return () => {
      resizeObserver.disconnect();
    };
    // onResize не добавляю в зависимость, потому что не факт, что его обернут в useCallback, эффект будет тригериться постоянно из-за этого
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPaginationHeight, size, responsiveSlots]);

  // Не размонтируем пагинацию, чтобы сохранить её состояние.
  // aria-hidden исключает чтение скринридером, inert — фокус и взаимодействие.
  return (
    <div
      aria-hidden={isCollapsed}
      {...(isCollapsed ? { inert: '' } : {})}
      style={
        enableCollapse
          ? {
              height: isCollapsed
                ? 0
                : naturalHeight ?? getPaginationHeight(true, size),
              opacity: isCollapsed ? 0 : 1,
              overflow: isCollapsed ? 'hidden' : undefined,
              transition: `height ${DURATION}s ease, opacity ${DURATION}s ease`,
            }
          : undefined
      }
    >
      <StyledDiv ref={paginationRef}>
        <StyledPagination
          {...PAGINATION_TEXTS}
          size={size}
          value={value}
          count={count}
          hasQuickJump={responsiveSlots ? showQuickJump : rest['hasQuickJump']}
          slots={responsiveSlots ? dynamicSlots : rest['slots']}
          leftContent={leftContent}
          rightContent={rightContent}
          onChange={onChangeTablePagination ? handleChange : undefined}
          onChangePageValue={
            onChangePageValue ? handlePageValueChange : undefined
          }
          $hideQuickJump={responsiveSlots ? !showQuickJump : false}
          {...rest}
        />
      </StyledDiv>
    </div>
  );
};
