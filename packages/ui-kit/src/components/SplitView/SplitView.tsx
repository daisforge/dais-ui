import { clamp, mCls, mergeRefs, useBreakpoint } from '@ui-kit/utils';
import { useMemo, useRef, useState } from 'react';

import { SplitViewFullscreenWrapper } from './components/SplitViewFullscreenWrapper';
import { useIsClosingClosedOpening } from './hooks/useIsClosingClosedOpening';
import { useResize } from './hooks/useResize';
import { useUpdateSidebarPxOnContainerResize } from './hooks/useUpdateSidebarPxOnContainerResize';
import {
  splitViewClassNames as cls,
  splitViewConstants as c,
} from './SplitView.constants';
import { cssVars, StyledDiv } from './SplitView.styled';
import type { SplitViewProps, SplVSizes } from './SplitView.type';
import {
  getSplitViewSidebarMinWidthPx,
  getSplitViewSlotSizes,
  renderSplitViewContent,
} from './utils';

export const SplitView = ({
  mainContent,
  sidebar,
  //
  style,
  refContainer,
  $css,
  onTransitionEnd: onTransitionEndExt,
  onResize,
  headerHeight,
  insidePageLayout = false,
  disableMediaAdaptive = false,
  ...restProps
}: SplitViewProps) => {
  const isResizingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { down } = useBreakpoint();
  const isAdaptive1280 = !disableMediaAdaptive && down('xl');
  const {
    minWidthPx: sidebarMinWidthPxProp,
    maxWidthPercent: sidebarMaxWidthPercent = c.sidebarWidths.maxWidthPercent,
    defaultWidthPercent: sidebarDefaultWidthPercent = c.sidebarWidths
      .defaultWidthPercent,
  } = sidebar ?? {};
  const sidebarContent = sidebar?.content;
  const sidebarMinWidthPx = getSplitViewSidebarMinWidthPx(
    isAdaptive1280,
    sidebarMinWidthPxProp,
  );
  const slotSizes = useMemo(
    () => getSplitViewSlotSizes(isAdaptive1280),
    [isAdaptive1280],
  );
  const renderedSidebarContent = useMemo(
    () => renderSplitViewContent(sidebarContent, slotSizes),
    [sidebarContent, slotSizes],
  );

  const [sizes, setSizes] = useState<SplVSizes>(() => {
    const sidebarDefWidth = clamp(
      0,
      sidebarDefaultWidthPercent,
      Math.min(sidebarMaxWidthPercent, 100),
    );
    const mainWidth = 100 - sidebarDefWidth;
    return { main: mainWidth, sidebar: sidebarDefWidth };
  });

  const sidebarIsClosed = !sidebar?.isOpened;

  const { startResizing } = useResize({
    setSizes,
    containerRef,
    isResizingRef,
    sidebarMaxWidthPercent,
    sidebarMinWidthPx,
    onResize,
  });

  useUpdateSidebarPxOnContainerResize({
    setSizes,
    containerRef,
    sidebarMaxWidthPercent,
    sidebarMinWidthPx,
    onResize,
  });

  const { isClosingOrClosedOrOpening, onTransitionEnd } =
    useIsClosingClosedOpening({
      sidebarIsClosed,
      isResizingRef,
      onTransitionEndExt,
    });

  return (
    <StyledDiv
      ref={mergeRefs(containerRef, refContainer)}
      style={{
        ...cssVars(
          sizes,
          sidebarIsClosed,
          sidebar?.paddingLeftOnClosed,
          sidebarMinWidthPx,
        ),
        ...style,
      }}
      $css={$css}
      $headerHeight={headerHeight}
      $insidePageLayout={insidePageLayout}
      $sidebarIsClosed={sidebarIsClosed}
      onTransitionEnd={onTransitionEnd}
      {...restProps}
    >
      <div className={cls.mainBlock}>{mainContent}</div>

      <div className={cls.separator}>
        <button
          className={cls.separatorButton}
          type="button"
          onMouseDown={startResizing}
        >
          Разделитель
        </button>
      </div>
      <div
        className={mCls(
          cls.sidebarBlock,
          isClosingOrClosedOrOpening && cls.sidebarIsClosingOrClosedOrOpening,
          sidebar?.isFullScreened && cls.sidebarBlockInModal,
        )}
      >
        <SplitViewFullscreenWrapper
          isFullScreened={sidebar?.isFullScreened}
          fullScreenedModalDFProps={sidebar?.fullScreenedModalDFProps}
        >
          {renderedSidebarContent}
        </SplitViewFullscreenWrapper>
      </div>
    </StyledDiv>
  );
};
