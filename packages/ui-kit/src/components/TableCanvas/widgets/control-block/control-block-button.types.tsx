import { Button } from '@ui-kit/components/Button';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { ComponentProps, ReactNode } from 'react';

import { TableDropdownProps } from '../../components/TableDropdown/types';
import { DataAttributes } from '../../types/utils.type';
import { DropdownRenderCtx } from './types';

/**
 * @deprecated Дефолтный view 'linkDefault' устарел. Все кнопки controlBlock теперь рендерятся как обычные (не link).
 * Сохранено для обратной совместимости — link-views автоматически маппятся в обычные кнопки.
 */
export const controlButtonDefaultProps = {
  size: 's',
  view: 'linkDefault',
} as const;
type DefPropsKeys = keyof typeof controlButtonDefaultProps;

export type ButtonProps = ComponentProps<typeof Button>;
export type LinkButtonProps = ComponentProps<typeof LinkButton>;
export type LinkButtonView = LinkButtonProps['view'];
export type EmbedIconButtonProps = ComponentProps<typeof EmbedIconButton>;

type LinkView<V extends string | undefined> = V extends string
  ? `link${Capitalize<V>}`
  : undefined;

export type ControlBlockButtonProps = DataAttributes &
  Omit<Partial<ButtonProps>, DefPropsKeys> & {
    /**
     * @deprecated Link-views (`linkDefault`, `linkAccent`, `linkSecondary` и т.д.) устарели.
     * Все кнопки controlBlock теперь рендерятся как обычные (серые) кнопки.
     * Link-views автоматически маппятся в стандартный view при рендеринге.
     */
    view?: LinkView<LinkButtonView> | ButtonProps['view'];
    dropdown?: TableDropdownProps;
    isTargetAction?: boolean;
    /** Не рисовать divider справа от кнопки */
    skipRightDivider?: boolean;
    /** Текст тултипа (показывается при скрытом лейбле) */
    tooltipText?: string;
    /**
     * Не применять flip-анимацию (scaleY) к contentRight при открытии
     * дропдауна. Кейс "Группировать": справа счётчик, а не шеврон,
     * зеркалить его не нужно.
     */
    disableContentRightFlip?: boolean;
    /**
     * Кастомный рендер иконки кнопки, когда она уезжает в overflow дропдаун
     * при компрессии. Получает контекст (rowSize, isInDropdown) и позволяет
     * подобрать размер иконки под дропдаун. Если не задан, в дропдауне
     * используется обычный contentLeft кнопки как есть.
     */
    dropdownIconRender?: (ctx: DropdownRenderCtx) => ReactNode;
  };
