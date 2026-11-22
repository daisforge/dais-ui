import { ReactNode } from 'react';

import { DomMetadata } from '../types/additional.type';

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

  orderDefault?: string[];

  pinnedDefault?: string[];
  disablePinning?: string[];

  hiddenDefault?: string[];
  disableHiding?: string[];

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
