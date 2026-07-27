import { ReactNode } from 'react';

import { DomMetadata } from '../types/additional.type';

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
    }
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
