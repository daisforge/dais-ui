import {
  dataInfoGradient,
  dataNegativeGradient,
  dataPositiveGradient,
  dataWarningGradient,
  outlineInfo,
  outlineNegative,
  outlinePositive,
  outlineWarning,
  shadowDownHardS,
  textPrimary,
} from '@ui-kit/tokens';
import { css } from 'styled-components';

const PREFIX = 'dais-ui__';
const NOTIFICATION_WRAPPER = 'notification-wrapper';
const NOTIFICATION_TEXT = 'notification-text';
const NOTIFICATION_TITLE = 'notification-title';

export const cls = {
  wrapper: `${PREFIX}notification`,
  positive: `${PREFIX}notification--positive`,
  negative: `${PREFIX}notification--negative`,
  warning: `${PREFIX}notification--warning`,
  info: `${PREFIX}notification--info`,
  hasBackground: `${PREFIX}notification--has-background`,
  hasTitleColor: `${PREFIX}notification--has-title-color`,
  hasBorderColor: `${PREFIX}notification--has-border-color`,
};

const VIEW_STYLES = {
  positive: {
    background: dataPositiveGradient,
    borderColor: outlinePositive,
  },
  negative: {
    background: dataNegativeGradient,
    borderColor: outlineNegative,
  },
  warning: {
    background: dataWarningGradient,
    borderColor: outlineWarning,
  },
  info: {
    background: dataInfoGradient,
    borderColor: outlineInfo,
  },
} as const;

export const generateNotificationViewStyles = () =>
  Object.entries(VIEW_STYLES)
    .map(([view, tokens]) => {
      const viewClass = cls[view as keyof typeof cls];
      return css`
        /* Фон (если нет hasBackground) */
        .${cls.wrapper}.${viewClass}:not(.${cls.hasBackground}) {
          .${NOTIFICATION_WRAPPER} {
            overflow: hidden;
          }

          .notification-buttons-wrapper,
          .${NOTIFICATION_TEXT}, .${NOTIFICATION_TITLE} {
            z-index: 1;
          }

          .${NOTIFICATION_WRAPPER}::after {
            content: '';
            position: absolute;
            z-index: 0;
            height: 600px;
            width: 600px;
            top: 0;
            right: 0;
            transform: translate(50%, -80%);
            background: ${tokens.background};
            pointer-events: none;
          }
        }

        /* Цвет текста (если нет hasTitle) */
        .${cls.wrapper}.${viewClass}:not(.${cls.hasTitleColor}) {
          .${NOTIFICATION_TITLE} {
            color: ${textPrimary};
          }
        }

        /* Обводка */
        .${cls.wrapper}.${viewClass} {
          .${NOTIFICATION_WRAPPER} {
            border: 1px solid ${tokens.borderColor};
            box-shadow: ${shadowDownHardS};
          }
        }
      `;
    })
    .flat();
