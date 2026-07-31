import {
  TabItem,
  type TabItemProps,
  Tabs,
  type TabsProps,
} from '@ui-kit/components/Tabs';
import styled, { CSSObject } from 'styled-components';

export type FiltersActionsTabsProps = TabsProps & {
  /** Кастомные стили */
  $css?: CSSObject | TemplateStringsArray;
};

export type FiltersActionsTabItemProps = TabItemProps & {
  /** Кастомные стили */
  $css?: CSSObject | TemplateStringsArray;
};

export const FiltersActionsTabs = styled(Tabs).attrs((props) => ({
  size: 'xs' as typeof props.size,
  view: 'filled' as typeof props.view,
  ...props,
}))<{ $css?: CSSObject | TemplateStringsArray }>`
  & {
    margin: -2px;
    ${({ $css }) => $css}
  }
`;
export const FiltersActionsTabItem = styled(TabItem).attrs((props) => ({
  size: 's' as typeof props.size,
  view: 'default' as typeof props.view,
  ...props,
}))<{ $css?: CSSObject | TemplateStringsArray }>`
  & {
    ${({ $css }) => $css}
  }
`;
