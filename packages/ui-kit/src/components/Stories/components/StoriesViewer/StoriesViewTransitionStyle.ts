import { createGlobalStyle, keyframes } from 'styled-components';

import { STORIES_VIEW_TRANSITION_NAME } from '../../Stories.constants';

const slideInRight = keyframes`
  from { transform: translateX(24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;
const slideOutLeft = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-24px); opacity: 0; }
`;
const slideInLeft = keyframes`
  from { transform: translateX(-24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;
const slideOutRight = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(24px); opacity: 0; }
`;

/**
 * Дефолтная анимация смены групп через View Transitions API (пресет `slide`).
 * Направление берётся из data-атрибута на <html>, выставляемого runViewTransition.
 * Потребитель может переопределить эти же псевдоэлементы в своём CSS.
 */
export const StoriesViewTransitionStyle = createGlobalStyle`
  ::view-transition-old(${STORIES_VIEW_TRANSITION_NAME}),
  ::view-transition-new(${STORIES_VIEW_TRANSITION_NAME}) {
    animation-duration: 0.3s;
    animation-timing-function: ease;
  }
  html[data-df-stories-dir='next']::view-transition-new(${STORIES_VIEW_TRANSITION_NAME}) {
    animation-name: ${slideInRight};
  }
  html[data-df-stories-dir='next']::view-transition-old(${STORIES_VIEW_TRANSITION_NAME}) {
    animation-name: ${slideOutLeft};
  }
  html[data-df-stories-dir='prev']::view-transition-new(${STORIES_VIEW_TRANSITION_NAME}) {
    animation-name: ${slideInLeft};
  }
  html[data-df-stories-dir='prev']::view-transition-old(${STORIES_VIEW_TRANSITION_NAME}) {
    animation-name: ${slideOutRight};
  }
`;
