import { ReactNode } from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

export type ApprovalCenterProps = {
  /**
   * Дополнительный класс для корневого элемента
   */
  className?: string;
  /**
   * Кастомные CSS-стили для контейнера
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  /**
   * Параметры превью
   */
  preview?: ApprovalCenterPreview;
  /**
   * Параметры вкладок
   */
  tabs: ApprovalCenterTabs;
  /**
   * Параметры вкладки жизненного цикла
   */
  lifeCycle?: LifeCycleItem[];
  /**
   * Параметры вкладки истории
   */
  history?: HistoryItem[];
};

export type ApprovalCenterPreview = {
  /**
   * Параметры кнопки превью
   */
  button?: PreviewButton;
  /**
   * Переключить превью в режим загрузки
   */
  loading?: boolean;
};

export type ApprovalCenterTabs = {
  /**
   * Текущая открытая вкладка
   */
  active: 'LIFE_CYCLE';
  /**
   * Список доступных вкладок
   */
  available:
    | ['LIFE_CYCLE', 'HISTORY']
    | ['HISTORY', 'LIFE_CYCLE']
    | ['HISTORY']
    | ['LIFE_CYCLE'];
};

export type HistoryAction = {
  /**
   * Статус
   */
  status: HistoryItem['status'];
  /**
   * Заголовок
   */
  title: HistoryItem['actionTitle'];
  /**
   * Время
   */
  time: string;
};

export type HistoryDay = {
  /**
   * Дата
   */
  date: string;
  /**
   * Список действий
   */
  actions: HistoryAction[];
};

export type HistoryItem = {
  /**
   * Статус
   */
  status: HistoryItemStatus;
  /**
   * Заголовок действия
   */
  actionTitle: string;
  /**
   * Дата действия
   */
  actionDate: string;
};

export type HistoryProps = {
  historyByDay: HistoryDay[];
};

/**
 * Статусы стадий жизненного цикла
 */
export type StageStatus = 'DEFAULT' | 'WAIT' | 'SUCCESSFUL' | 'FAILURE';

export type LifeCycleButton = {
  /**
   * Слот для контента слева
   */
  contentLeft: ReactNode;
  /**
   * Колбэк, вызываемый по клику
   */
  onClick: () => void;
  /**
   * Текстовая надпись
   */
  text: string;
};

export type StageItem = {
  /**
   * Статус
   */
  status: StageStatus;
  /**
   * Заголовок
   */
  title: string;
  /**
   * Открыт ли элемент аккордеона
   */
  open?: boolean;
  /**
   * Комментарий
   */
  comment?: string;
  /**
   * Тултип на иконке статуса
   */
  tooltip?: { text: string };
  /**
   * Пометка (обычно звёздочка)
   */
  mark?: { tooltip: { text: string }; icon: ReactNode };
  /**
   * Заголовок действия
   */
  actionTitle?: string;
  /**
   * Заголовок даты
   */
  actionDate?: string;
  /**
   * ФИО людей, отвечающих за согласование
   */
  assignee?: [string, ...string[]];
  /**
   * Вспомогательные кнопки
   */
  buttons?: LifeCycleButton[];
};

export type LifeCycleItem = {
  /**
   * Статус
   */
  status: LifeCycleStatus;
  /**
   * Заголовок
   */
  title: string;
  /**
   * Заголовок выполненного действия
   */
  actionTitle?: string;
  /**
   * Дата выполненного действия
   */
  actionDate?: string;
  /**
   * Этапы (аккордеон)
   */
  stages?: StageItem[];
  /**
   * Вспомогательные кнопки
   */
  buttons?: LifeCycleButton[];
};

export type LifeCycleProps = {
  /**
   * Параметры жизненного цикла
   */
  lifeCycle: LifeCycleItem[];
};

export type PreviewButton = {
  /**
   * Колбэк, вызываемый по клику
   */
  onClick: () => void;
  /**
   * Текстовая надпись
   */
  text: string;
};

export type PreviewProps = {
  /**
   * Параметры превью
   */
  preview?: ApprovalCenterProps['preview'];
};

/**
 * Статус элементов истории
 */
export type HistoryItemStatus = 'DEFAULT' | 'WAIT' | 'SUCCESSFUL' | 'FAILURE';

/**
 * Статус жизненного цикла
 */
export type LifeCycleStatus = 'DEFAULT' | 'WAIT' | 'SUCCESSFUL' | 'FAILURE';

/**
 * Статус компонента шага
 */
export type StepStatus = 'active' | 'inactive' | 'completed';

/**
 * Вид компонента шага
 */
export type StepsItemView = 'default' | 'positive' | 'warning' | 'negative';

/**
 * Вариант вкладки
 */
export type TabVariant = 'LIFE_CYCLE' | 'HISTORY';
