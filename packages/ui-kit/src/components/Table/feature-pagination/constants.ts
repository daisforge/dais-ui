import { PaginationSize, PaginationSlots } from './types';

export const PAGINATION_PADDING: { [K in PaginationSize]: number } = {
  xs: 4,
  s: 4,
};

export const PAGINATION_HEIGHT: { [K in PaginationSize]: number } = {
  xs: 32,
  s: 40,
};

export const PAGINATION_TEXTS = {
  textQuickJump: 'Перейти к',
  textPerPage: 'Показывать по',
};

export const DEFAULT_PAGINATION_SIZE = 's';

const PAGINATION_SLOT_WIDTH_BY_SIZE = {
  xs: 33,
  s: 41,
};

const PAGINATION_START_WIDTH_ADAPTIVE = {
  xs: 670,
  s: 800,
};

/**
 * Мапка брейкпоинтов для slots в зависимости от size пагинации
 * Каждый size имеет массив правил: [минимальная ширина, количество slots]
 * Правила отсортированы по убыванию ширины (от большего к меньшему)
 */
export const PAGINATION_SLOTS_BREAKPOINTS: {
  [K in PaginationSize]: Array<{
    minWidth: number;
    slots: PaginationSlots;
    hasQuickJump?: boolean;
  }>;
} = {
  xs: [
    {
      minWidth: PAGINATION_START_WIDTH_ADAPTIVE.xs - PAGINATION_PADDING.xs * 2,
      slots: 9,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.xs -
        PAGINATION_SLOT_WIDTH_BY_SIZE.xs -
        PAGINATION_PADDING.xs * 2,
      slots: 8,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.xs -
        PAGINATION_SLOT_WIDTH_BY_SIZE.xs * 2 -
        PAGINATION_PADDING.xs * 2,
      slots: 7,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.xs -
        PAGINATION_SLOT_WIDTH_BY_SIZE.xs * 3 -
        PAGINATION_PADDING.xs * 2,
      slots: 1,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.xs -
        PAGINATION_SLOT_WIDTH_BY_SIZE.xs * 6 -
        PAGINATION_PADDING.xs * 2,
      slots: 1,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.xs -
        PAGINATION_SLOT_WIDTH_BY_SIZE.xs * 7 -
        PAGINATION_PADDING.xs * 2,
      slots: 1,
      hasQuickJump: false,
    },
    // {
    //   minWidth:
    //     PAGINATION_START_WIDTH_ADAPTIVE.xs -
    //     PAGINATION_SLOT_WIDTH_BY_SIZE.xs * 4 -
    //     PAGINATION_PADDING.xs * 2,
    //   slots: 5,
    // },
    // {
    //   minWidth:
    //     PAGINATION_START_WIDTH_ADAPTIVE.xs -
    //     PAGINATION_SLOT_WIDTH_BY_SIZE.xs * 5 -
    //     PAGINATION_PADDING.xs * 2,
    //   slots: 4,
    // },
    // {
    //   minWidth:
    //     PAGINATION_START_WIDTH_ADAPTIVE.xs -
    //     PAGINATION_SLOT_WIDTH_BY_SIZE.xs * 6 -
    //     PAGINATION_PADDING.xs * 2,
    //   slots: 3,
    // },
    // {
    //   minWidth:
    //     PAGINATION_START_WIDTH_ADAPTIVE.xs -
    //     PAGINATION_SLOT_WIDTH_BY_SIZE.xs * 7 -
    //     PAGINATION_PADDING.xs * 2,
    //   slots: 2,
    // },
    { minWidth: 0, slots: 1 },
  ],
  s: [
    {
      minWidth: PAGINATION_START_WIDTH_ADAPTIVE.s - PAGINATION_PADDING.s * 2,
      slots: 7,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.s -
        PAGINATION_SLOT_WIDTH_BY_SIZE.s -
        PAGINATION_PADDING.s * 2,
      slots: 8,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.s -
        PAGINATION_SLOT_WIDTH_BY_SIZE.s * 2 -
        PAGINATION_PADDING.s * 2,
      slots: 7,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.s -
        PAGINATION_SLOT_WIDTH_BY_SIZE.s * 3 -
        PAGINATION_PADDING.s * 2,
      slots: 1,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.s -
        PAGINATION_SLOT_WIDTH_BY_SIZE.s * 6 -
        PAGINATION_PADDING.s * 2,
      slots: 1,
      hasQuickJump: true,
    },
    {
      minWidth:
        PAGINATION_START_WIDTH_ADAPTIVE.s -
        PAGINATION_SLOT_WIDTH_BY_SIZE.s * 7 -
        PAGINATION_PADDING.s * 2,
      slots: 1,
      hasQuickJump: false,
    },
    // {
    //   minWidth:
    //     PAGINATION_START_WIDTH_ADAPTIVE.s -
    //     PAGINATION_SLOT_WIDTH_BY_SIZE.s * 4 -
    //     PAGINATION_PADDING.s * 2,
    //   slots: 5,
    // },
    // {
    //   minWidth:
    //     PAGINATION_START_WIDTH_ADAPTIVE.s -
    //     PAGINATION_SLOT_WIDTH_BY_SIZE.s * 5 -
    //     PAGINATION_PADDING.s * 2,
    //   slots: 4,
    // },
    // {
    //   minWidth:
    //     PAGINATION_START_WIDTH_ADAPTIVE.s -
    //     PAGINATION_SLOT_WIDTH_BY_SIZE.s * 6 -
    //     PAGINATION_PADDING.s * 2,
    //   slots: 3,
    // },
    // {
    //   minWidth:
    //     PAGINATION_START_WIDTH_ADAPTIVE.s -
    //     PAGINATION_SLOT_WIDTH_BY_SIZE.s * 7 -
    //     PAGINATION_PADDING.s * 2,
    //   slots: 2,
    // },
    { minWidth: 0, slots: 1, hasQuickJump: false },
  ],
};

/**
 * Хелпер для определения количества slots в зависимости от size и ширины контейнера
 * @param size - размер пагинации
 * @param width - текущая ширина контейнера пагинации
 * @returns количество slots для Pagination компонента или undefined если не найдено
 */
export const getPaginationSlotsAndStatusQuickJumpByWidth = (
  size: PaginationSize,
  width: number,
): [PaginationSlots, boolean] => {
  const breakpoints = PAGINATION_SLOTS_BREAKPOINTS[size];

  if (!breakpoints) {
    return [undefined, true];
  }

  // Находим первый брейкпоинт, где width >= minWidth
  const matchedBreakpoint = breakpoints.find((bp) => width >= bp.minWidth);

  return [matchedBreakpoint?.slots, matchedBreakpoint?.hasQuickJump ?? true];
};
