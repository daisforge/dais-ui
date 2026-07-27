/* eslint-disable no-nested-ternary */
import { IconButton } from '@ui-kit/components/IconButton';
import { type CompPopoverProps, Popover } from '@ui-kit/components/Popover';
import type { TextFieldProps } from '@ui-kit/components/TextField';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { BodyM, BodyXS } from '@ui-kit/components/Typography';
import { IconClose, IconResizeCorneredFill } from '@ui-kit/icons';
import {
  backgroundPrimary,
  borderRadiusM,
  shadowDownHardS,
  surfaceSolidCard,
  textSecondary,
  textTertiary
} from '@ui-kit/tokens';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import {
  FiltersActionsFiltersButton,
  type FiltersActionsFiltersButtonProps
} from './FiltersButton';
import { RedDot } from './RedDot';

/**
 * Аргумент рендер-пропа `renderTarget` — набор «рычагов» для сборки собственного
 * таргета Popover. Позволяет переопределить внешний вид кнопки, не теряя логику
 * открытия Popover и индикатор активных фильтров.
 */
export type FilterTargetRenderApi = {
  /**
   * Обработчик открытия/закрытия Popover. Повесьте его на `onClick` корневого
   * кликабельного элемента вашего таргета — иначе Popover не будет открываться.
   */
  onClick: (event?: React.MouseEvent) => void;
  /** Открыт ли Popover сейчас — удобно для смены вида таргета в активном состоянии. */
  isOpen: boolean;
  /**
   * Нужно ли показывать красную точку-индикатор (значение пропа `redSquare`).
   * Передайте в `<RedDot visible={isRedDotVisible} />`.
   */
  isRedDotVisible: boolean;
  /**
   * Компонент красной точки-индикатора. Позиционируется абсолютно в правый
   * верхний угол ближайшего контейнера с `position: relative`.
   */
  RedDot: typeof RedDot;
};

export type FiltersActionsFiltersButtonWithPopoverProps = {
  /** Заголовок Popover */
  title: string;
  /** Подзаголовок (опционально) */
  subtitle?: string;
  /** Основной контент для отображения */
  content?: React.ReactNode;
  /** Внешнее состояние открытия/закрытия [isOpen, setIsOpen] */
  state?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /** Callback при закрытии */
  onClose?: () => void;
  /** Контент footer (опционально) */
  footer?: React.ReactNode;
  /** Красный индикатор на кнопке фильтров */
  redSquare?: boolean;
  /**
   * Включить поиск
   */
  searchable?: boolean;
  /**
   * Значение поиска (контролируемый режим)
   */
  searchValue?: string;
  /**
   * Callback изменения поискового запроса
   */
  onSearchChange?: (value: string) => void;
  /**
   * Пропсы для поля поиска
   */
  searchingProps?: Pick<
    TextFieldProps,
    | 'placeholder'
    | 'onBlur'
    | 'onFocus'
    | 'contentLeft'
    | 'contentRight'
    | 'textBefore'
    | 'textAfter'
    | 'name'
    | 'type'
    | 'minLength'
    | 'maxLength'
  >;
  /**
   * Контент отображаемый когда ничего не найдено
   */
  emptySearchContent?: React.ReactNode;
  /**
   * Пропсы для popover
   */
  popoverProps?: Omit<CompPopoverProps, 'opened' | 'target' | 'onToggle'>;
  /** Пропсы для кнопки-таргета FiltersActionsFiltersButton. onClick декорируется: сначала вызовется внешний, потом внутренний toggle. */
  buttonProps?: Partial<FiltersActionsFiltersButtonProps>;
  /**
   * Рендер-проп для полной замены кнопки-таргета Popover собственным элементом
   * (иконкой, кнопкой, любым узлом) — при сохранении нативной логики открытия
   * Popover и красной точки-индикатора. Когда задан, `buttonProps` и дефолтная
   * кнопка «Ещё фильтры» игнорируются.
   *
   * ВАЖНО: повесьте переданный `onClick` на корневой кликабельный элемент вашего
   * таргета. Для красной точки оберните таргет в контейнер с `position: relative`
   * и отрендерьте `<RedDot visible={isRedDotVisible} />`.
   *
   * @example
   * renderTarget={({ onClick, isRedDotVisible, RedDot }) => (
   *   <IconButton onClick={onClick} style={{ position: 'relative' }}>
   *     <IconSettingsFilter />
   *     <RedDot visible={isRedDotVisible} />
   *   </IconButton>
   * )}
   */
  renderTarget?: (api: FilterTargetRenderApi) => React.ReactElement;
};

// ─── Стили ────────────────────────────────────────────────

const C = {
  backgroundPrimary: () => backgroundPrimary,
  borderRadiusM: () => borderRadiusM,
  shadowDownHardS: () => shadowDownHardS,
  textTertiary: () => textTertiary,
  surfaceSolidCard: () => surfaceSolidCard
};

const StyledPopover = styled(Popover)`
  & .popover-root {
    box-shadow: none;
  }

  & .resizable-container {
    /* background-color: ${C.backgroundPrimary}; */
  }
`;

// Контейнер внутри Popover
const PopoverContentContainer = styled.div`
  background-color: ${C.surfaceSolidCard};
  border-radius: ${C.borderRadiusM};
  box-shadow: ${C.shadowDownHardS};
  min-width: 360px;
  max-width: 700px;
  max-height: 80dvh;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

// Header с title, subtitle и крестиком и поиском
const PopoverHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  flex-shrink: 0;
`;

const PopoverHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
`;

// Основной контент с прокруткой
const PopoverMainContent = styled.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 40px;
  margin: 12px 16px 16px 16px;
`;

// Footer фиксированный снизу
const PopoverFooter = styled.div`
  box-sizing: border-box;
  min-height: 60px;
  padding: 12px 16px 16px 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

const DEFAULT_RESIZABLE_CONFIG: CompPopoverProps['resizable'] = {
  minHeight: 430,
  minWidth: 360,
  maxWidth: 700,
  maxHeight: typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600,
  defaultSize: { width: 360, height: 430 },
  directions: ['bottom-right', 'right', 'top-right'],
  icons: {
    topRight: null,
    bottomRight: <IconResizeCorneredFill color={textTertiary} />,
    bottomLeft: null,
    topLeft: null
  },
  hiddenIcons: ['bottom-left', 'top-left', 'top-right']
};

/**
 * Компонент FiltersActionsPopup
 * - Использует Popover (вместо Popup)
 * - Кнопка фильтров является target для Popover
 * - Структура: header, content, опциональный footer
 * - Контент передается извне как ReactNode
 * - Resizable функционал временно закомментирован (будет добавлен позже)
 */
export const FiltersActionsFiltersButtonWithPopover: React.FC<
  FiltersActionsFiltersButtonWithPopoverProps
> = ({
  title,
  subtitle,
  content,
  state: externalState,
  onClose,
  footer,
  redSquare = false,
  popoverProps = {},
  buttonProps,
  renderTarget,
  searchable,
  searchValue,
  onSearchChange,
  searchingProps,
  emptySearchContent
}) => {
  const { resizable: externalResizable, ...restPopoverProps } = popoverProps;

  // Определяем финальное значение для пропса `resizable`
  const getFinalResizable = (external: unknown) => {
    // Явное отключение
    if (external === false) return false;

    // Включение с настройками по умолчанию
    if (external === true || external == null) return DEFAULT_RESIZABLE_CONFIG;

    // Кастомная конфигурация через объект
    if (typeof external === 'object' && external !== null) {
      return { ...DEFAULT_RESIZABLE_CONFIG, ...external };
    }

    // Защита от неожиданных типов
    return DEFAULT_RESIZABLE_CONFIG;
  };

  const finalResizable = getFinalResizable(externalResizable);

  // Внутреннее состояние (используется если нет externalState)
  const [internalState, setInternalState] = useState(false);
  // Источник состояния
  const [isOpened, setIsOpened] = externalState ?? [
    internalState,
    setInternalState
  ];

  // Обработчик закрытия
  const handleClose = useCallback(() => {
    setIsOpened(false);
    onClose?.();
  }, [onClose, setIsOpened]);

  // Toggle для Popover
  const handleToggle = useCallback(
    (opened: boolean) => {
      setIsOpened(opened);
      if (!opened) {
        onClose?.();
      }
    },
    [onClose, setIsOpened]
  );

  // Клик по таргету — тоглит Popover. Используется и дефолтной кнопкой,
  // и кастомным таргетом из renderTarget.
  const handleTargetClick = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened, setIsOpened]);

  return (
    // @ts-expect-error TS2769: libs allows ref: string, but styled-components doesn't. Safe to ignore.
    <StyledPopover
      opened={isOpened}
      onToggle={handleToggle}
      target={
        renderTarget ? (
          renderTarget({
            onClick: handleTargetClick,
            isOpen: isOpened,
            isRedDotVisible: redSquare,
            RedDot
          })
        ) : (
          <FiltersActionsFiltersButton
            redSquare={redSquare}
            hideLabel={false}
            iconSize="s"
            {...buttonProps}
            // styled(x).attrs(...) - attrs генерит тип с [key: string]: any
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              buttonProps?.onClick?.(e);
              handleTargetClick();
            }}
          />
        )
      }
      placement="bottom-start"
      offset={[0, 2]}
      trigger="click"
      hasArrow={false}
      closeOnOverlayClick
      closeOnEsc
      isFocusTrapped
      usePortal
      animated
      resizable={finalResizable}
      {...restPopoverProps}
    >
      <PopoverContentContainer>
        {/* Header */}
        <PopoverHeader>
          <PopoverHeaderTop>
            <HeaderText>
              <BodyM bold>{title}</BodyM>
              {subtitle && <BodyXS color={textSecondary}>{subtitle}</BodyXS>}
            </HeaderText>
            <IconButton
              onClick={handleClose}
              size="xs"
              view="secondary"
              pin="circle-circle"
              title="Закрыть"
              style={{
                marginBottom: '8px'
              }}
            >
              <IconClose size="xs" />
            </IconButton>
          </PopoverHeaderTop>
          {searchable && (
            <TextFieldSearch
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Поиск"
              {...searchingProps}
            />
          )}
        </PopoverHeader>

        {/* Основной контент */}
        <PopoverMainContent>{emptySearchContent || content}</PopoverMainContent>

        {/* Опциональный Footer */}
        {footer && <PopoverFooter>{footer}</PopoverFooter>}
      </PopoverContentContainer>
    </StyledPopover>
  );
};
