import {
  DEFAULT_PAGINATION_SIZE,
  PAGINATION_HEIGHT,
  PAGINATION_PADDING
} from './constants';

export const getPaginationHeight = (
  paginationActiveInConfig: boolean,
  customSize: keyof typeof PAGINATION_HEIGHT | undefined
) => {
  if (!paginationActiveInConfig) {
    return 0;
  }
  return (
    PAGINATION_HEIGHT[customSize ?? DEFAULT_PAGINATION_SIZE] +
    PAGINATION_PADDING[customSize ?? DEFAULT_PAGINATION_SIZE] * 2
  );
};
