import type { ComponentProps, ReactNode, Ref } from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import { ModalDFProps } from '../ModalDF';

export type SplitViewSlotSizesProps = {
  /**
   * Размер Avatar в кастомном контенте sidebar
   */
  avatarSize: 'l' | 'm';
};

export type SplitViewAdaptiveContent =
  | ReactNode
  | ((props: SplitViewSlotSizesProps) => ReactNode);

export type SplitViewProps = Omit<ComponentProps<'div'>, 'ref' | 'onResize'> & {
  /**
   * Prop для основного контента (слева)
   */
  mainContent: ReactNode;
  /**
   * Prop свойств sidebar-а (справа), в том числе и контента
   */
  sidebar?: {
    /**
     * Prop для контента sidebar-а
     * Можно передать ReactNode или callback с размерами для адаптива.
     */
    content: SplitViewAdaptiveContent;
    /**
     * Состояние открытости sidebar-а (sidebar может полностью закрываться)
     * @default true
     */
    isOpened?: boolean;
    /**
     * Состояние открытости полноэкранного режима sidebar-а.
     * Открытие sidebar-а в модальном окне на всю ширину экрана
     * @default false
     */
    isFullScreened?: boolean;
    /**
     * Для переопределения (или добавления) свойств модального окна.
     * Не все свойства можно переопределить.
     */
    fullScreenedModalDFProps?: ModalDFProps;
    /**
     * Число от 1 до 100. Процент от ширины родителя.
     * Величина sidebar-а ширины по умолчанию в %-ых значениях от родителя
     * @default 30
     */
    defaultWidthPercent?: number;
    /**
     * Число от 1 до 100. Процент от ширины родителя.
     * @default 70
     */
    maxWidthPercent?: number;
    /**
     * Число в пикселях
     * @default 600, на viewport <= 1280px — 440
     */
    minWidthPx?: number;
    /**
     * Отступ слева у sidebar в px, когда он будет закрыт (Указывать до 32px - не больше).
     * Может понадобится для корректного смещения SplitView вправо.
     * @example 32
     *
     * @default 0
     */
    paddingLeftOnClosed?: number;
  };
  /**
   * Отключает принудительный адаптив компонента на viewport <= 1280px.
   *
   * @deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
   *
   * @remarks
   * При `true` компонент использует desktop-размеры для `sidebar.content` и desktop min-width sidebar, если `sidebar.minWidthPx` не передан.
   * Поведение сохраняется даже на viewport <= 1280px.
   * Это временный escape hatch, не основной сценарий использования.
   *
   * @default false
   */
  disableMediaAdaptive?: boolean;
  refContainer?: Ref<HTMLDivElement>;
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  onResize?: (data: SplVSizes) => void;
  /**
   * Высота шапки в пикселях. Если передан — используется как приоритет для sticky top и расчёта высоты.
   * Если не передан — берётся из CSS-переменной --global-header-height (fallback 72px).
   */
  headerHeight?: number;
  /**
   * Компенсация padding-inline от PageLayout.
   * При true контейнер SplitView получает отрицательный margin-right,
   * чтобы sidebar прижимался к правому краю viewport.
   * @default false
   */
  insidePageLayout?: boolean;
};

export type SplVSizes = {
  /**
   * Ширина main content в процентах
   */
  main: number;
  /**
   * Ширина main content в пикселях
   */
  mainPx?: number;
  /**
   * Ширина sidebar content в процентах
   */
  sidebar: number;
  /**
   * Ширина sidebar content в пикселях
   */
  sidebarPx?: number;
};
