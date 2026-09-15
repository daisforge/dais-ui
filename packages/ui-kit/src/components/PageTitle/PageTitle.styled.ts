import { s } from '@ui-kit/constants';
import { media } from '@ui-kit/utils/breakpoint';
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { pageTitleClassNames as cls } from './PageTitle.classNames';

export const StyledRoot = styled.div.attrs({
  className: cls.root as string,
})<{ $css?: string | CSSObject | FlattenSimpleInterpolation }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${() => s.x8};
`;

export const StyledBreadcrumbs = styled.div.attrs({
  className: cls.breadcrumbs as string,
})``;

export const StyledContent = styled.div.attrs({
  className: cls.content as string,
})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${() => s.x12};
`;

export const StyledLeftBlock = styled.div.attrs({
  className: cls.leftBlock as string,
})`
  display: flex;
  align-items: flex-start;
  gap: ${() => s.x8};
  flex: 1;
  min-width: 0;
`;

export const StyledTitleBlock = styled.div.attrs({
  className: cls.titleBlock as string,
})`
  display: flex;
  flex-direction: column;
  gap: ${() => s.x2};
  flex-shrink: 1;
  min-width: 0;
`;

/*
 * Отступ сверху компенсирует разницу высоты текстовой коробки заголовка H2
 * между макетом и вёрсткой. Высота H2 bold меняется по вьюпортам (тема
 * sdds-finai): от 1281px это 38px, от 960 до 1280px это 34px, до 959px это
 * 30px. Под каждую высоту свой отступ, чтобы кнопка была выровнена по заголовку.
 * Ступени включаются в адаптивном режиме (isAdaptive1280). Десктоп (>=1281px)
 * и disableMediaAdaptive дают отступ как для 38px, без ступеней вниз.
 */
export const StyledBackButtonContainer = styled.div.attrs({
  className: cls.backIconButton as string,
})<{ $isAdaptive1280?: boolean }>`
  margin-top: 4px;
  ${({ $isAdaptive1280 }) =>
    $isAdaptive1280 &&
    css`
      ${media.exact(960, 1280)`
        margin-top: 2px;
      `}
      ${media.exact(0, 959)`
        margin-top: 0;
      `}
    `}
`;

export const StyledTitle = styled.div.attrs({
  className: cls.title as string,
})``;

export const StyledSubtitle = styled.div.attrs({
  className: cls.subtitle as string,
})``;

/*
 * Кастомный слот правее заголовка. Отступ сверху под высоту текста H2, по тем
 * же вьюпортам, что и у кнопки назад (см. StyledBackButtonContainer).
 * Ступени включаются в адаптивном режиме (isAdaptive1280).
 */
export const StyledTitleSlot = styled.div.attrs({
  className: cls.titleSlot as string,
})<{ $isAdaptive1280?: boolean }>`
  margin-top: 4px;
  ${({ $isAdaptive1280 }) =>
    $isAdaptive1280 &&
    css`
      ${media.exact(960, 1280)`
        margin-top: 3px;
      `}
      ${media.exact(0, 959)`
        margin-top: 2px;
      `}
    `}
`;

export const StyledRightBlock = styled.div.attrs({
  className: cls.rightBlock as string,
})`
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  align-self: flex-end;
`;
