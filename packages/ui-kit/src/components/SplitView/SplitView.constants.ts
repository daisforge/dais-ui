const PRE = 'SplitView__';

export const splitViewClassNames = {
  container: `${PRE}container`,
  separator: `${PRE}separator`,
  separatorButton: `${PRE}separator-button`,
  mainBlock: `${PRE}main-block`,
  sidebarBlock: `${PRE}sidebar-block`,
  sidebarBlockIsResizing: `${PRE}sidebar-block-is-resizing`,
  sidebarIsClosingOrClosedOrOpening: `${PRE}sidebar-is-closing-closed-opening`,
  sidebarBlockFullScreenContentContainer: `${PRE}sidebar-block__full-screen-content-container`,
  sidebarBlockInModal: `${PRE}sidebar-block-in-modal`
} as const;

const gapBetweenBlocksDefaultWidth = 32;
const separatorButtonDefaultWidth = 12;
export const splitViewConstants = {
  mainWidthVar: '--main-width',
  separatorWidthVar: '--separator-width',
  sidebarWidthVar: '--sidebar-width',
  sidebarWidthInPxVar: '--sidebar-width-in-px',
  gapBetweenBlocksDefaultWidth,
  separatorButtonDefaultWidth,
  separatorDefaultWidth:
    gapBetweenBlocksDefaultWidth + separatorButtonDefaultWidth,
  // SIZES DEFAULT
  sidebarWidths: {
    minWidthPx: 600,
    adaptive1280MinWidthPx: 440,
    maxWidthPercent: 70,
    defaultWidthPercent: 30
  }
} as const;
