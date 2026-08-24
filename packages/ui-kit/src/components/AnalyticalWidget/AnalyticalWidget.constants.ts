import { AnalyticalWidgetSize } from './AnalyticalWidget.types';

// Стили с адаптивом (понадобятся в будущем)
// export const ANALYTICAL_WIDGET_STYLES = {
//   l: {
//     xl: {
//       minWidth: '396px',
//       maxWidth: '608px',
//       width: '100%',
//       minHeight: '512px',
//       padding: '16px',
//       borderRadius: '16px',
//     },
//     lg: {
//       minWidth: '396px',
//       maxWidth: '608px',
//       width: '100%',
//       minHeight: '432px',
//       padding: '16px',
//       borderRadius: '16px',
//     },
//     md: {
//       minWidth: '396px',
//       maxWidth: '608px',
//       width: '100%',
//       minHeight: '344px',
//       padding: '10px',
//       borderRadius: '12px',
//     },
//   },
//   m: {
//     xl: {
//       minWidth: '396px',
//       maxWidth: '608px',
//       width: '100%',
//       minHeight: '248px',
//       padding: '16px',
//       borderRadius: '16px',
//     },
//     lg: {
//       minWidth: '396px',
//       maxWidth: '608px',
//       width: '100%',
//       minHeight: '208px',
//       padding: '16px',
//       borderRadius: '16px',
//     },
//     md: {
//       minWidth: '396px',
//       maxWidth: '608px',
//       width: '100%',
//       minHeight: '172px',
//       padding: '10px',
//       borderRadius: '12px',
//     },
//   },
//   s: {
//     xl: {
//       minWidth: '190px',
//       maxWidth: '296px',
//       width: '100%',
//       minHeight: '248px',
//       padding: '16px',
//       borderRadius: '16px',
//     },
//     lg: {
//       minWidth: '190px',
//       maxWidth: '296px',
//       width: '100%',
//       minHeight: '208px',
//       padding: '16px',
//       borderRadius: '16px',
//     },
//     md: {
//       minWidth: '190px',
//       maxWidth: '296px',
//       width: '100%',
//       minHeight: '172px',
//       padding: '10px',
//       borderRadius: '12px',
//     },
//   },
// };

export const ANALYTICAL_WIDGET_STYLES = {
  l: {
    xl: {
      minWidth: '448px',
      maxWidth: 'unset', // 608
      width: '100%',
      minHeight: '512px',
      padding: '12px',
      borderRadius: '16px',
    },
    lg: {
      minWidth: '448px',
      maxWidth: 'unset', // 608
      width: '100%',
      minHeight: '512px', // 432px
      padding: '12px',
      borderRadius: '16px',
    },
    md: {
      minWidth: '448px',
      maxWidth: 'unset', // 608
      width: '100%',
      minHeight: '512px', // 344px
      padding: '12px',
      borderRadius: '16px',
    },
  },
  m: {
    xl: {
      minWidth: '448px',
      maxWidth: 'unset', // 608
      width: '100%',
      minHeight: '248px',
      padding: '12px',
      borderRadius: '16px',
    },
    lg: {
      minWidth: '448px',
      maxWidth: 'unset', // 608
      width: '100%',
      minHeight: '248px', // 208px
      padding: '12px',
      borderRadius: '16px',
    },
    md: {
      minWidth: '448px',
      maxWidth: 'unset', // 608
      width: '100%',
      minHeight: '248px', // 172px
      padding: '12px',
      borderRadius: '16px',
    },
  },
  s: {
    xl: {
      minWidth: '216px',
      maxWidth: 'unset', // 296px
      width: '100%',
      minHeight: '248px',
      padding: '12px',
      borderRadius: '16px',
    },
    lg: {
      minWidth: '216px',
      maxWidth: 'unset', // 296px
      width: '100%',
      minHeight: '248px', // 208px
      padding: '12px',
      borderRadius: '16px',
    },
    md: {
      minWidth: '216px',
      maxWidth: 'unset', // 296px
      width: '100%',
      minHeight: '248px', // 172px
      padding: '12px',
      borderRadius: '16px',
    },
  },
};

export const SLOT_VISIBILITY: {
  [key in AnalyticalWidgetSize]: {
    topSlot: boolean;
    middleSlot: boolean;
  };
} = {
  l: {
    topSlot: true, // Filters + chips
    middleSlot: true, // Tabs
  },
  m: {
    topSlot: true, // Filters + chips
    middleSlot: false, // Tabs
  },
  s: {
    topSlot: true, // Filters + chips
    middleSlot: false, // Tabs
  },
};

export const analyticalWidgetClassNames = {
  root: 'analytical-widget',
  header: 'analytical-widget__header',
  popoverInfo: 'analytical-widget__popover-info',
  topSlot: 'analytical-widget__top-slot',
  middleSlot: 'analytical-widget__middle-slot',
  contentSlot: 'analytical-widget__content',
  headerActions: 'analytical-widget__header-actions',
  selfSpacedTopSlot: 'analytical-widget__self-spaced-top-slot',
  // Маркер на корне виджета: rightSlot шапки заполнен. По нему абсолютная
  // dots-кнопка (сиблинг) поднимает top с 12 до 16 через CSS.
  hasRightSlot: 'analytical-widget--has-right-slot',
} as const;
