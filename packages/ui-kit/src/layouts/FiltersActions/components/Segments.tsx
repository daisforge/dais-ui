import { SegmentItem, type SegmentItemProps } from '@ui-kit/components/Segment';
import styled, { CSSObject } from 'styled-components';

export type FiltersActionsSegmentItemProps = SegmentItemProps & {
  /** Кастомные стили */
  $css?: CSSObject | TemplateStringsArray;
};

export const FiltersActionsSegmentItem = styled(SegmentItem).attrs((props) => ({
  size: 's' as typeof props.size,
  view: 'primary' as typeof props.view,
  ...props
}))<{ $css?: CSSObject | TemplateStringsArray }>`
  & {
    ${({ $css }) => $css}
  }
`;
