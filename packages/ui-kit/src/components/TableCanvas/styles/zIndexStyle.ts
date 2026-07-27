import { css } from 'styled-components';

import { CLASS_PINNED_RIGHT_COL } from '../feature-column-control/constantsUI';
import { tableClassNames as cls } from './classNames';
import { CUSTOM_TOKENS, CUSTOM_TOKENS_KEYS } from './styles.constants';

export const cellZIndexStyles = css`
  /* var */
  ${CUSTOM_TOKENS_KEYS.zIndexCell}: 0;

  z-index: ${CUSTOM_TOKENS.zIndexCell};

  &.${cls.cellPinnedLeft}, &.${CLASS_PINNED_RIGHT_COL} {
    z-index: calc(${CUSTOM_TOKENS.zIndexCell} + 1);
  }
`;
export const sumRowCellZIndexStyles = css`
  ${CUSTOM_TOKENS_KEYS.zIndexCell}: 1;
`;

export const headerCellZIndex = css`
  --digit-max: 50;
  --digit-1: 0;
  --digit-2: 0;
  --current-z-index: calc(var(--digit-max) - (var(--digit-1) + var(--digit-2)));

  z-index: var(--current-z-index);

  /* Get element order */
  &:nth-of-type(10n + 0) {
    --digit-1: 0;
  }
  &:nth-of-type(10n + 1) {
    --digit-1: 1;
  }
  &:nth-of-type(10n + 2) {
    --digit-1: 2;
  }
  &:nth-of-type(10n + 3) {
    --digit-1: 3;
  }
  &:nth-of-type(10n + 4) {
    --digit-1: 4;
  }
  &:nth-of-type(10n + 5) {
    --digit-1: 5;
  }
  &:nth-of-type(10n + 6) {
    --digit-1: 6;
  }
  &:nth-of-type(10n + 7) {
    --digit-1: 7;
  }
  &:nth-of-type(10n + 8) {
    --digit-1: 8;
  }
  &:nth-of-type(10n + 9) {
    --digit-1: 9;
  }

  &:nth-of-type(-n + 10) {
    --digit-2: 0;
  }
  &:nth-of-type(n + 10):nth-of-type(-n + 20) {
    --digit-2: 10;
  }
  &:nth-of-type(n + 20):nth-of-type(-n + 30) {
    --digit-2: 20;
  }
  &:nth-of-type(n + 30):nth-of-type(-n + 40) {
    --digit-2: 30;
  }
  &:nth-of-type(n + 40):nth-of-type(-n + 50) {
    --digit-2: 40;
  }
  &:nth-of-type(n + 50):nth-of-type(-n + 60) {
    --digit-2: 50;
  }
  &:nth-of-type(n + 60):nth-of-type(-n + 70) {
    --digit-2: 60;
  }
  &:nth-of-type(n + 70):nth-of-type(-n + 80) {
    --digit-2: 70;
  }
  &:nth-of-type(n + 80):nth-of-type(-n + 90) {
    --digit-2: 80;
  }
  &:nth-of-type(n + 90):nth-of-type(-n + 100) {
    --digit-2: 90;
  }
  &:nth-of-type(n + 100):nth-of-type(-n + 110) {
    --digit-2: 100;
  }
`;
