import { css, keyframes } from 'styled-components';

export const DEFAULT_TRANSITION_DELAY = '0.3s';
export const DEFAULT_TRANSITION = `all ${DEFAULT_TRANSITION_DELAY} ease`;

export const scaleIn = keyframes`
  from { transform: scale(0.85); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const scaleOut = keyframes`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.85); opacity: 0; }
`;

export const scaleAnimation = css<{
  $isOpen: boolean;
  $duration?: string;
  $timing?: string;
}>`
  animation: ${({ $isOpen }) => ($isOpen ? scaleIn : scaleOut)}
    ${({ $duration = '2.35s' }) => $duration}
    ${({ $timing = 'ease' }) => $timing} forwards;
`;

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;
