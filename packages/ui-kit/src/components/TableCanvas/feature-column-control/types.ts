import { ReactNode } from 'react';

import { DomMetadata } from '../types/additional.type';

/**
 * Данные о раскрытии промежутка по двойному клику на индикаторе скрытых столбцов.
 * Приходят во внешний колбэк, чтобы потребитель мог отреагировать на автораскрытие
 * (например, дозагрузить данные раскрытых колонок или залогировать событие).
 */
export type HiddenColumnsIndicatorExpandInfo = {
  /** Ключи скрытых столбцов, которые раскрываются (весь промежуток за линией). */
  keys: string[];
  /** Видимый сосед слева от линии. undefined, если линия у левого края таблицы. */
  leftKey?: string;
  /** Видимый сосед справа от линии. undefined, если линия у правого края таблицы. */
  rightKey?: string;
};

export type ColumnsControlApplyMode = 'confirm' | 'instant';

export type ColumnsControlConfig = {
  enable: boolean;
  /**
   * @default enable
   */
  hiding?: boolean;
  /**
   * @default enable
   */
  pinning?: boolean;
  /**
   * @default enable
   */
  reorderingAside?: boolean;
  /**
   * reorderingHeader  - активация изменения порядка колонок  посредством перемещения шапок колонок таблицы
   */
  /**
   * @default enable
   */
  reorderingHeader?: boolean;
  onReorderingHeader?: (params: {
    newOrder: string[];
    sourceKey: string;
    targetKey: string;
  }) => void;

  columnsLabel?: Record<
    string,
    ReactNode | ((isHidden: boolean, isPinned: boolean) => ReactNode)
  >;

  /**
   * Виртуализация списка колонок в правом сайдбаре: в DOM держатся только
   * видимые строки списка. false — отключить полностью; { minCount } —
   * включать, когда строк в списке не меньше порога.
   * @default { minCount: 30 }
   */
  virtualization?: boolean | { minCount?: number };

  orderDefault?: string[];

  pinnedDefault?: string[];
  disablePinning?: string[];

  hiddenDefault?: string[];
  disableHiding?: string[];
  /**
   * Скрытые столбцы под управлением снаружи: пара [значение, сеттер], как у
   * useState. Таблица показывает и прячет столбцы по значению, а свитчи в
   * правом сайдбаре, индикатор скрытых столбцов, меню закрепления и сеттеры
   * в onConfirm пишут через переданный сеттер. Таблица при этом не
   * пересоздаётся, прокрутка, выделение и настройки столбцов сохраняются.
   *
   * Когда hiddenState передан, hiddenDefault не читается. Флаг hiding
   * отвечает только за элементы интерфейса (свитчи, индикатор), значение
   * hiddenState применяется и при hiding: false.
   *
   * Для столбцов с парой key/text можно передать исходный ключ из
   * columnConfig, таблица сама скроет оба столбца пары. После действий
   * пользователя в значении окажутся оба ключа пары.
   *
   * Массив держите в useState, а не создавайте заново на каждом рендере.
   * Свои столбцы меняйте функциональным сеттером, тогда скрытие, сделанное
   * пользователем в сайдбаре, сохранится. Если показ зависит от режима
   * редактирования, меняйте оба состояния в одном обработчике:
   *
   * @example
   * const [hidden, setHidden] = useState(['comment']);
   * const toggleEdit = () => {
   *   setEditOn(!editOn);
   *   setHidden((prev) =>
   *     editOn
   *       ? [...new Set([...prev, 'comment'])]
   *       : prev.filter((key) => key !== 'comment'),
   *   );
   * };
   */
  hiddenState?: [string[], React.Dispatch<React.SetStateAction<string[]>>];
  /**
   * Индикатор скрытых столбцов: синяя полосатая линия в шапке на границе, за
   * которой скрыты столбцы. Двойной клик по линии раскрывает весь промежуток,
   * ресайз на этой границе работает как обычно.
   * @default hiding
   */
  hiddenColumnsIndicator?: boolean;
  /**
   * Уведомление о раскрытии промежутка двойным кликом по индикатору скрытых
   * столбцов. Само раскрытие (снятие скрытия) обёртка делает сама; колбэк нужен,
   * чтобы внешний потребитель мог подписаться на это событие и узнать, какие
   * столбцы раскрылись и между какими видимыми колонками стояла линия.
   */
  onHiddenColumnsIndicatorExpand?: (
    info: HiddenColumnsIndicatorExpandInfo,
  ) => void;

  /**
   * Как применяются изменения из панели настройки колонок (правый сайдбар).
   * - `confirm` — панель копит изменения локально, внизу кнопки «Отменить» и
   *   «Применить»; в таблицу и в `onConfirm` изменения уходят по кнопке.
   * - `instant` — кнопок нет, каждое действие (свитч видимости, пин, перенос,
   *   «открепить все» и т.п.) сразу меняет таблицу, а `onConfirm` вызывается
   *   после каждого такого действия с тем же контрактом, что и по кнопке.
   * @default 'confirm'
   */
  applyMode?: ColumnsControlApplyMode;

  onConfirm?: (
    params: {
      pinned: string[];
      order: string[];
      hidden: string[];
      changed: { pinned?: 'pinned'; order?: 'order'; hidden?: 'hidden' };
    },
    setters: {
      setColumnsOrder: (value: React.SetStateAction<string[]>) => void;
      setPinnedCols: (value: React.SetStateAction<string[]>) => void;
      setHiddenCols: (value: React.SetStateAction<string[]>) => void;
    },
  ) => void;
  /**
   * DomMetadata для кнопок закрепления столбцов
   */
  pinDomMetadata?: DomMetadata;
  /**
   * DomMetadata для свитчеров скрытия/показа столбцов
   */
  switchDomMetadata?: DomMetadata;
};
