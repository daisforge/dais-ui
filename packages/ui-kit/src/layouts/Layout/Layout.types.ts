import { HTMLAttributes, ReactNode } from 'react';

import { LAYOUT_VARIANTS } from './Layout.constants';

export type LayoutVariant = keyof typeof LAYOUT_VARIANTS;

export type LayoutSpacing = {
  horizontal?: string;
  vertical?: string | { top?: string; bottom?: string };
  gutter?: string;
  headerHeight?: string;
};

export type LayoutClasses = {
  root?: string;
  header?: string;
  main?: string;
  item?: string;
  centeredItem?: string;
};

export type LayoutProps = {
  variant?: LayoutVariant;
  headerSlot?: ReactNode;
  mainSlot?: ReactNode;
  /** @deprecated Используйте прямые пропсы marginTop, marginBottom, paddingTop, paddingBottom */
  customSpacing?: LayoutSpacing;
  /** margin-top. Если передан — отключает дефолтный и адаптивный margin-top */
  marginTop?: string;
  /** margin-bottom. Если передан — отключает дефолтный и адаптивный margin-bottom */
  marginBottom?: string;
  /** padding-top. Добавляет внутренний отступ сверху */
  paddingTop?: string;
  /** padding-bottom. Добавляет внутренний отступ снизу */
  paddingBottom?: string;
  /** margin-left. Если передан — перебивает customSpacing.horizontal */
  marginLeft?: string;
  /** margin-right. Если передан — перебивает customSpacing.horizontal */
  marginRight?: string;
  /** padding-left. Добавляет внутренний отступ слева */
  paddingLeft?: string;
  /** padding-right. Добавляет внутренний отступ справа */
  paddingRight?: string;
  classes?: string | LayoutClasses;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;
