import { BoxProps } from '@ui-kit/components/Box';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import { IconChevronRight } from '@ui-kit/icons';
import React, { Fragment, PropsWithChildren, ReactNode, useState } from 'react';
import { CSSObject } from 'styled-components';

import { useComputedMaxWidth } from './hooks/useComputedMaxWidth';
import { useTabsContainerResize } from './hooks/useTabsContainerResize';
import { tableTabsClassNames as cls } from './TableTabs.classNames';
import { EMPTY_ARR } from './TableTabs.constants';
import { TableTabsContext, useTableTabsContext } from './TableTabs.context';
import {
  StyledCollapseBlock,
  StyledCollapsibleContent,
  StyledPanelContainer,
  StyledRightSlot,
  StyledTabsAndPanelsContainer,
  StyledTabsContainer,
  StyledTabsRow
} from './TableTabs.styled';
import {
  isCustomTab,
  TabId,
  TableTabsCollapseConfig,
  TableTabsSize,
  TCustomOrNotTab,
  TTabsContainerOptions,
  TTabsProps
} from './TableTabs.types';

const mapTabsSize = (size?: TableTabsSize): 'xs' | 's' | 'm' => {
  if (size === 'xs') return 'xs';
  return 's';
};

const mapTabItemSize = (size?: TableTabsSize): 'xs' | 's' | 'm' => {
  if (size === 'xs') return 'xs';
  return 's';
};

// Размер кнопки коллапсинга над табами. В xs уменьшаем заодно с табами,
// чтобы блок не торчал крупнее вкладок
const mapCollapseSize = (size?: TableTabsSize): 'xs' | 's' =>
  size === 'xs' ? 'xs' : 's';

const CollapseBlock = ({
  config,
  isCollapsed,
  onToggle,
  size = 's',
  tabsSize
}: {
  config: TableTabsCollapseConfig;
  isCollapsed: boolean;
  onToggle: () => void;
  size?: 'xs' | 's';
  tabsSize?: TableTabsSize;
}) => {
  const text = isCollapsed
    ? config.expandText ?? 'Развернуть'
    : config.collapseText ?? 'Свернуть';

  return (
    <StyledCollapseBlock $collapsed={isCollapsed} $size={tabsSize}>
      <LinkButton
        size={size}
        view="default"
        contentLeft={
          <IconChevronRight
            size={size}
            style={{
              transition: 'rotate 0.3s',
              rotate: isCollapsed ? '0turn' : '0.25turn'
            }}
          />
        }
        onClick={onToggle}
        text={text}
      />
      {config.rightSlot && (
        <StyledRightSlot>{config.rightSlot}</StyledRightSlot>
      )}
    </StyledCollapseBlock>
  );
};

export const TableTabs = <T extends TabId>({
  children,
  activeTabIdState,
  tabs,
  tabsProps,
  tabsAndPanelsContainerCss,
  tabsContainerOptions,
  rightSlot,
  size,
  collapsing
}: PropsWithChildren & {
  tabs: TCustomOrNotTab<T>[];
  activeTabIdState?: [T, ((newV: T) => void) | ((oldV: T) => T)];
  tabsProps?: TTabsProps;
  tabsAndPanelsContainerCss?: string | CSSObject;
  tabsContainerOptions?: TTabsContainerOptions;
  rightSlot?: ReactNode;
  size?: TableTabsSize;
  collapsing?: TableTabsCollapseConfig;
}) => {
  const [activeTabId, setActiveTabId] = activeTabIdState ?? EMPTY_ARR;

  const [internalCollapsed, setInternalCollapsed] = useState(
    collapsing?.defaultCollapsed ?? false
  );

  const isCollapsingEnabled = collapsing && collapsing?.enabled;
  const [isCollapsed, setIsCollapsed] = collapsing?.collapsedState ?? [
    internalCollapsed,
    setInternalCollapsed
  ];

  const handleToggleCollapse = () => {
    const next = !isCollapsed;
    setIsCollapsed(next);
    collapsing?.onToggleCollapse?.(next);
  };

  const maxWidth = tabsContainerOptions?.maxWidth;

  const needsResizeObserver =
    !maxWidth || (typeof maxWidth === 'string' && maxWidth.includes('%'));

  const { ref: parentContainerRef, width: parentContainerWidth } =
    useTabsContainerResize(needsResizeObserver);

  const tabsContainerRef = React.useRef<HTMLDivElement | null>(null);

  const computedMaxWidth = useComputedMaxWidth(maxWidth, parentContainerWidth);

  const tabsSize = mapTabsSize(size);
  const tabItemSize = mapTabItemSize(size);

  return (
    <TableTabsContext.Provider value={activeTabId}>
      <StyledTabsAndPanelsContainer
        ref={parentContainerRef}
        className={cls.tabsAndPanelsContainer}
        $css={tabsAndPanelsContainerCss}
        $isCollapsed={isCollapsingEnabled && isCollapsed}
      >
        {isCollapsingEnabled && (
          <CollapseBlock
            config={collapsing}
            isCollapsed={isCollapsed}
            onToggle={handleToggleCollapse}
            size={mapCollapseSize(size)}
            tabsSize={size}
          />
        )}
        <StyledCollapsibleContent
          $isCollapsed={isCollapsingEnabled && isCollapsed}
        >
          <StyledTabsContainer
            ref={tabsContainerRef}
            className={cls.tabsContainer}
            $hasCollapsing={isCollapsingEnabled}
            $size={size}
          >
            <StyledTabsRow>
              <Tabs
                key={computedMaxWidth}
                view="clear"
                orientation="horizontal"
                size={tabsSize}
                {...(tabsProps as Record<string, unknown>)}
                style={{
                  width: rightSlot ? undefined : '100%',
                  flex: rightSlot ? '1 1 auto' : undefined,
                  ...tabsProps?.style
                }}
              >
                {tabs.map((tabProps, i) => {
                  if (isCustomTab(tabProps)) {
                    return (
                      <Fragment key={tabProps.tabId}>
                        {tabProps.custom}
                      </Fragment>
                    );
                  }
                  const { label, tabId, ...restTabProps } = tabProps;
                  return (
                    <TabItem
                      key={tabId}
                      view="divider"
                      itemIndex={i}
                      selected={tabId === activeTabId}
                      onClick={() => setActiveTabId?.(tabId)}
                      tabIndex={0}
                      size={tabItemSize}
                      {...restTabProps}
                    >
                      {label}
                    </TabItem>
                  );
                })}
              </Tabs>
              {rightSlot && <StyledRightSlot>{rightSlot}</StyledRightSlot>}
            </StyledTabsRow>
          </StyledTabsContainer>
          {children}
        </StyledCollapsibleContent>
      </StyledTabsAndPanelsContainer>
    </TableTabsContext.Provider>
  );
};

const TabPanel = <T extends TabId>({
  children,
  tabId,
  unmountOnClose = true,
  className,
  style,
  ...boxProps
}: {
  tabId: T;
  /**
   * @default true
   */
  unmountOnClose?: boolean;
} & BoxProps) => {
  const { activeTabId } = useTableTabsContext('notTable');
  let currCls = `${cls.tabPanel} ${className ?? ''}`;

  const isVisible = tabId !== undefined && activeTabId === tabId;
  if (unmountOnClose) {
    return (
      isVisible && (
        <StyledPanelContainer className={currCls} style={style} {...boxProps}>
          {children}
        </StyledPanelContainer>
      )
    );
  }
  const styleForHide = isVisible ? undefined : { display: 'none' };
  if (styleForHide) {
    currCls += `${currCls} ${cls.tabPanelHided}`;
  }

  return (
    <StyledPanelContainer
      className={currCls}
      style={(style || styleForHide) && { ...style, ...styleForHide }}
      {...boxProps}
    >
      {children}
    </StyledPanelContainer>
  );
};

TableTabs.TabPanel = TabPanel;
