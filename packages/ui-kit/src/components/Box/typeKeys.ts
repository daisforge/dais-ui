import { CSSProperties } from 'styled-components';

export type BoxCSSProperties = Pick<
  CSSProperties,
  | 'width'
  | 'maxWidth'
  | 'minWidth'
  | 'height'
  | 'maxHeight'
  | 'minHeight'
  | 'margin'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'marginBottom'
  | 'padding'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingBottom'
  | 'display'
  | 'flexDirection'
  | 'justifyContent'
  | 'justifyItems'
  | 'justifySelf'
  | 'flexGrow'
  | 'flexWrap'
  | 'flexShrink'
  | 'gap'
  | 'position'
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'zIndex'
  | 'boxSizing'
  | 'overflow'
  | 'cursor'
  | 'background'
  | 'backgroundColor'
  | 'opacity'
  | 'border'
  | 'borderWidth'
  | 'borderColor'
  | 'borderStyle'
  | 'borderRadius'
>;

export type keyBoxCSSProperties = keyof BoxCSSProperties;

export const boxCSSKeys: Set<keyBoxCSSProperties> = new Set([
  'width',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',

  'margin',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',

  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',

  'display',
  'flexDirection',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'flexGrow',
  'flexWrap',
  'flexShrink',
  'gap',

  'position',
  'top',
  'left',
  'right',
  'bottom',

  'zIndex',

  'boxSizing',
  'overflow',
  'cursor',

  'background',
  'backgroundColor',
  'opacity',

  'border',
  'borderWidth',
  'borderColor',
  'borderStyle',
  'borderRadius'
]);
