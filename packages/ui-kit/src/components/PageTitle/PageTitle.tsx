import {
  Breadcrumbs,
  type BreadcrumbsPropsComp
} from '@ui-kit/components/Breadcrumbs';
import { IconButton } from '@ui-kit/components/IconButton';
import { TypographyWithAutoTooltip } from '@ui-kit/components/Typography';
import { IconChevronLeft } from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens';
import { mCls, useBreakpoint } from '@ui-kit/utils';
import { ComponentProps, forwardRef } from 'react';

import { pageTitleClassNames as cls } from './PageTitle.classNames';
import {
  StyledBackButtonContainer,
  StyledBreadcrumbs,
  StyledContent,
  StyledLeftBlock,
  StyledRightBlock,
  StyledRoot,
  StyledSubtitle,
  StyledTitle,
  StyledTitleBlock,
  StyledTitleSlot
} from './PageTitle.styled';
import type {
  PageTitleIconButtonProps,
  PageTitleProps
} from './PageTitle.types';
import { getPageTitleSlotSizes, renderPageTitleSlot } from './utils';

type PageTitleBackIconButtonProps = PageTitleIconButtonProps & {
  isAdaptive1280: boolean;
};

const PageTitleBackIconButton = ({
  isAdaptive1280,
  ...props
}: PageTitleBackIconButtonProps) => (
  <StyledBackButtonContainer $isAdaptive1280={isAdaptive1280}>
    <IconButton
      size="xs"
      view="secondary"
      className={cls.backIconButton}
      pin="circle-circle"
      {...props}
    >
      <IconChevronLeft size="xs" color="inherit" />
    </IconButton>
  </StyledBackButtonContainer>
);

const PageTitleBreadcrumbs = ({
  breadcrumbs
}: {
  breadcrumbs: PageTitleProps['breadcrumbs'];
}) => {
  if (!breadcrumbs) return null;

  const breadcrumbsProps: BreadcrumbsPropsComp = {
    size: 'm',
    ...breadcrumbs
  };

  return (
    <StyledBreadcrumbs>
      <Breadcrumbs {...breadcrumbsProps} />
    </StyledBreadcrumbs>
  );
};

const PageTitleHeading = ({
  title,
  titleTypographyProps
}: {
  title: PageTitleProps['title'];
  titleTypographyProps?: PageTitleProps['titleTypographyProps'];
}) => {
  if (!title) return null;

  return (
    <StyledTitle>
      <TypographyWithAutoTooltip
        variant="H2"
        bold
        tooltipText={
          (titleTypographyProps && 'tooltipText' in titleTypographyProps
            ? titleTypographyProps['tooltipText']
            : undefined) ?? title
        }
        {...titleTypographyProps}
      >
        {title}
      </TypographyWithAutoTooltip>
    </StyledTitle>
  );
};

const PageTitleSubtitle = ({
  subtitle,
  subtitleTypographyProps
}: {
  subtitle: PageTitleProps['subtitle'];
  subtitleTypographyProps?: PageTitleProps['subtitleTypographyProps'];
}) => {
  if (!subtitle) return null;

  return (
    <StyledSubtitle>
      <TypographyWithAutoTooltip
        variant="BodyS"
        color={textSecondary}
        tooltipText={
          (subtitleTypographyProps && 'tooltipText' in subtitleTypographyProps
            ? subtitleTypographyProps['tooltipText']
            : undefined) ?? subtitle
        }
        {...subtitleTypographyProps}
      >
        {subtitle}
      </TypographyWithAutoTooltip>
    </StyledSubtitle>
  );
};

/**
 * Компонент `PageTitle` предназначен для отображения заголовка страницы с опциональными breadcrumbs, кнопкой «назад», заголовком, подзаголовком и правым блоком действий.
 * Компонент автоматически обрабатывает длинные тексты через `TypographyWithAutoTooltip`, показывая тултип при обрезке.
 * - `title` — заголовок страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="H2"` и `bold={true}`.
 * - `subtitle` — подзаголовок/описание страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="BodyS"`.
 * - `titleTypographyProps` / `subtitleTypographyProps` — пропсы для настройки `TypographyWithAutoTooltip` (включая `tooltipText`, `tooltipProps`, `lines` и другие).
 * - `breadcrumbs` — пропсы для компонента `Breadcrumbs`. По умолчанию `size='m'`, но можно переопределить.
 * - `showBackButton` / `onBackClick` — управление отображением кнопки «назад» слева от заголовка.
 * - `titleSlot` — кастомный слот правее заголовка.
 * - `rightSlot` — контент справа, прижатый к правому краю и к нижней границе компонента.
 */
export const PageTitle = forwardRef<
  HTMLDivElement,
  PageTitleProps & ComponentProps<'div'>
>(
  (
    {
      title,
      titleTypographyProps,
      subtitle,
      subtitleTypographyProps,
      titleSlot,
      rightSlot,
      disableMediaAdaptive = false,
      breadcrumbs,
      $css,
      className,
      showBackButton,
      onBackClick,
      ...rest
    },
    ref
  ) => {
    const { down } = useBreakpoint();
    const isAdaptive1280 = !disableMediaAdaptive && down('xl');
    const slotSizes = getPageTitleSlotSizes(isAdaptive1280);
    const renderedTitleSlot = renderPageTitleSlot(titleSlot, slotSizes);
    const renderedRightSlot = renderPageTitleSlot(rightSlot, slotSizes);

    return (
      <StyledRoot
        ref={ref as ComponentProps<typeof StyledRoot>['ref']}
        $css={$css}
        className={mCls(cls.root, className)}
        {...rest}
      >
        {breadcrumbs && <PageTitleBreadcrumbs breadcrumbs={breadcrumbs} />}

        <StyledContent>
          <StyledLeftBlock>
            {showBackButton && (
              <PageTitleBackIconButton
                isAdaptive1280={isAdaptive1280}
                onClick={onBackClick}
              />
            )}
            {(title || subtitle) && (
              <StyledTitleBlock>
                <PageTitleHeading
                  title={title}
                  titleTypographyProps={titleTypographyProps}
                />
                <PageTitleSubtitle
                  subtitle={subtitle}
                  subtitleTypographyProps={subtitleTypographyProps}
                />
              </StyledTitleBlock>
            )}
            {renderedTitleSlot && (
              <StyledTitleSlot>{renderedTitleSlot}</StyledTitleSlot>
            )}
          </StyledLeftBlock>

          {renderedRightSlot && (
            <StyledRightBlock>{renderedRightSlot}</StyledRightBlock>
          )}
        </StyledContent>
      </StyledRoot>
    );
  }
);

PageTitle.displayName = 'PageTitle';
