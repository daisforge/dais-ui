import { BoxProps } from '@ui-kit/components/Box';
import { ButtonCompProps } from '@ui-kit/components/Button';
import { EmptyState, ErrorPageVariant } from '@ui-kit/components/EmptyState';
import React, { ReactNode, useCallback } from 'react';

import { classNames } from './classNames';
import { STATUSES, UNKNOWN_STATUS_OBJ } from './constants';
import { StyledContainer, StyledErrorId } from './styled';

export type StatusButton = {
  label: ReactNode;
  view?: NonNullable<ButtonCompProps['view']>;
};

export type CustomStatusObj = {
  title: ReactNode;
  description: ReactNode;
  button?: StatusButton;
  buttons?: StatusButton[];
};
export type StatusCode = number | 'unknown' | undefined;
export type ErrorPageProps = {
  /**
   * `statusCode` - статус-код ошибки. Поддерживаются по умолчанию: 400 | 403 | 404 | 409 | 500 | 502 | 503
   */
  statusCode?: StatusCode;
  /**
   * `buttonHandler` - обработка клика по кнопке при разных ошибках
   */
  buttonHandler?: (
    statusCode: StatusCode,
    statusObj: CustomStatusObj,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void;
  /**
   * `customStatuses` - кастомные статусы и содержимое для их отображения.
   * Если переданы статусы, которые компонентом по умолчанию поддерживаются, то кастомный перезапишет дефолтный.
   */
  customStatuses?: Record<number, CustomStatusObj>;
  /**
   * `unknownStatus` - содержимое для отображения, если статус не передан или статуса нет среди известных.
   *
   * Если данное свойство не передано, то при неизвестных статусах будет выбрано отображение по умолчанию.
   */
  unknownStatus?: CustomStatusObj;
  /**
   * `containerProps` - Пропсы для контейнера компонента. Например, `$css`, `style`.
   */
  containerProps?: BoxProps;
  /**
   * Показывать код ошибки перед заголовком. Например, "503: Сервис временно недоступен"
   * @default false
   */
  showStatusCode?: boolean;
  /**
   * Идентификатор ошибки. Отображается под кнопками (или под subtitle, если кнопок нет).
   * Формат отображения: "Идентификатор ошибки: {значение}"
   */
  errorId?: string;
  /**
   * Размер страницы ошибки. Влияет на изображение, типографику и отступы
   * (размерная сетка та же, что у `EmptyState`).
   * @default 'l'
   */
  size?: 's' | 'm' | 'l';
};

export const ErrorPage = (props: ErrorPageProps) => {
  const {
    statusCode,
    buttonHandler,
    unknownStatus,
    customStatuses,
    containerProps,
    showStatusCode = false,
    errorId,
    size = 'l',
  } = props;
  const statuses = { ...STATUSES, ...customStatuses } as Record<
    number,
    CustomStatusObj
  >;
  const statusObj =
    (typeof statusCode === 'number' && statuses[statusCode]) ||
    (unknownStatus ?? (UNKNOWN_STATUS_OBJ as CustomStatusObj));

  const { title, description, button, buttons } = statusObj;

  // Собираем все кнопки с проверкой наличия label
  const allButtons = [
    ...(button?.label ? [button] : []),
    ...(buttons?.filter((btn) => btn.label) || []),
  ];

  const statusIsNumber = typeof statusCode === 'number';

  // Маппинг statusCode в variant для изображения
  const getVariantFromStatusCode = useCallback(():
    | ErrorPageVariant
    | undefined => {
    if (typeof statusCode === 'number') {
      const statusCodeStr = statusCode.toString();
      const validVariants: ErrorPageVariant[] = [
        '400',
        '401',
        '403',
        '404',
        '409',
        '500',
        '502',
        '503',
      ];
      if (validVariants.includes(statusCodeStr as ErrorPageVariant)) {
        return statusCodeStr as ErrorPageVariant;
      }
    }
    return 'unidentified';
  }, [statusCode]);

  const imageVariant = getVariantFromStatusCode();

  return (
    <StyledContainer {...containerProps}>
      <div className={classNames.contentContainer}>
        {/*
        Старая реализация (может понадобится)
        <H2 className={classNames.title}>
          {statusIsNumber && `${statusCode}: `}
          {title}
        </H2>
        <BodyL className={classNames.description}>{description}</BodyL>
        {button && (
          <Button
            size="s"
            view="accent"
            className={classNames['navigate-btn']}
            onClick={(e) => buttonHandler?.(statusCode, statusObj, e)}
          >
            {button.label}
          </Button>
        )} */}
        <EmptyState
          size={size}
          variant={imageVariant}
          title={
            showStatusCode && statusIsNumber ? (
              <>
                {statusCode}: {title}
              </>
            ) : (
              title
            )
          }
          subtitle={description}
          buttons={allButtons.map((btn, index) => ({
            type: 'button' as const,
            props: {
              view: btn.view || 'accent', // здесь учитываем view
              onClick: (e: React.MouseEvent<HTMLButtonElement>) =>
                buttonHandler?.(statusCode, statusObj, e),
              children: btn.label,
              key: index,
            },
          }))}
          classes={{
            buttons: classNames['navigate-btn'],
            title: classNames.title,
            subtitle: classNames.description,
          }}
        />
        {errorId && (
          <StyledErrorId
            className={classNames['error-id']}
            $hasButtons={allButtons.length > 0}
          >
            Идентификатор ошибки: {errorId}
          </StyledErrorId>
        )}
      </div>
    </StyledContainer>
  );
};
