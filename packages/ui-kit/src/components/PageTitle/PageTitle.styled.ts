import { s } from '@ui-kit/constants';
import styled, {
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

export const StyledBackButtonContainer = styled.div.attrs({
  className: cls.backIconButton as string,
})<{ $isAdaptive1280: boolean }>`
  margin-top: ${({ $isAdaptive1280 }) => ($isAdaptive1280 ? '1px' : '6px')};
`;

export const StyledTitle = styled.div.attrs({
  className: cls.title as string,
})``;

export const StyledSubtitle = styled.div.attrs({
  className: cls.subtitle as string,
})``;

/* Кастомный слот правее заголовка */
export const StyledTitleSlot = styled.div.attrs({
  className: cls.titleSlot as string,
})`
  margin-top: 3px;
`;

export const StyledRightBlock = styled.div.attrs({
  className: cls.rightBlock as string,
})`
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  align-self: flex-end;
`;
