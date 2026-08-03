import { EmptyState } from '@ui-kit/components/EmptyState';
import { ErrorPage } from '@ui-kit/layouts/ErrorPage';
import { ReactNode } from 'react';

import { OverlayContainer, OverlayContent } from './styled';
import type { TableContentStateOverlay as TableContentStateOverlayType } from './types';

const DEFAULTS = {
  empty: {
    title: 'Нет данных по заданным параметрам',
    subtitle: undefined,
    variant: 'not-result',
  },
} as const;

type TableContentStateOverlayProps = {
  overlay: TableContentStateOverlayType;
  topOffset: number;
};

export const TableContentStateOverlay = ({
  overlay,
  topOffset,
}: TableContentStateOverlayProps) => {
  const displayMode = overlay.displayMode ?? 'body-overlay';
  const content: ReactNode =
    overlay.custom ??
    (() => {
      if (overlay.kind === 'error') {
        return (
          <ErrorPage
            unknownStatus={{
              title: 'Не удалось загрузить данные',
              description: 'Попробуйте обновить страницу или зайдите позже',
              ...(overlay.errorPageProps?.unknownStatus ?? {}),
            }}
            {...overlay.errorPageProps}
          />
        );
      }

      const defaults = DEFAULTS.empty;

      return (
        <EmptyState
          size={overlay.size ?? 'l'}
          centered={overlay.centered ?? true}
          title={overlay.title ?? defaults.title}
          subtitle={overlay.subtitle ?? defaults.subtitle}
          variant={overlay.variant ?? defaults.variant}
          icon={overlay.icon}
          iconProps={overlay.iconProps}
          buttons={overlay.buttons}
          extraButton={overlay.extraButton}
          className={overlay.className}
          classes={overlay.classes}
          $css={overlay.$css}
        />
      );
    })();

  return (
    <OverlayContainer
      $topOffset={topOffset}
      $displayMode={displayMode}
      $borderLeftTopRadiusRounded={overlay.borderLeftTopRadiusRounded ?? false}
      $borderRightTopRadiusRounded={
        overlay.borderRightTopRadiusRounded ?? false
      }
      $borderLeftBottomRadiusRounded={
        overlay.borderLeftBottomRadiusRounded ?? false
      }
      $borderRightBottomRadiusRounded={
        overlay.borderRightBottomRadiusRounded ?? false
      }
    >
      <OverlayContent>{content}</OverlayContent>
    </OverlayContainer>
  );
};
