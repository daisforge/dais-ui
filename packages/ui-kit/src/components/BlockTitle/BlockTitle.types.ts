import { Box } from '@ui-kit/components/Box';
import { Typography } from '@ui-kit/components/Typography';
import { ComponentProps, ReactNode } from 'react';

export type BlockTitleSlotSizesProps = {
  /**
   * Размер иконки рядом с заголовком
   */
  titleIconSize: 's' | 'xs';
  /**
   * Размер Badge рядом с заголовком
   */
  titleBadgeSize: 'm' | 's';
  /**
   * Размер кнопок в правом слоте
   */
  buttonSize: 's' | 'xs';
  /**
   * Размер иконок внутри кнопок в правом слоте
   */
  actionIconSize: 's' | 'xs';
};

export type BlockTitleAdaptiveSlot =
  | ReactNode
  | ((props: BlockTitleSlotSizesProps) => ReactNode);

export type BlockTitleProps = {
  /**
   * Текст заголовка
   */
  title?: string;
  /**
   * Размер заголовка
   */
  titleSize?: ComponentProps<typeof Typography>['variant'];
  /**
   * Иконка слева от заголовка (обычно используется иконка)
   */
  titleLeftSlot?: BlockTitleAdaptiveSlot;
  /**
   * Иконка справа от заголовка (обычно используется иконка)
   */
  titleRightSlot?: BlockTitleAdaptiveSlot;
  /**
   * Текст Заголовка
   */
  description?: string;
  /**
   * Слот для верхней части
   */
  topSlot?: BlockTitleAdaptiveSlot;
  /**
   * Слот для правой части
   */
  rightSlot?: BlockTitleAdaptiveSlot;
  /**
   * Отключает принудительный адаптив компонента на viewport <= 1280px.
   *
   * @deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
   *
   * @remarks
   * При `true` компонент использует desktop-размеры для слотов и кнопки назад даже на viewport <= 1280px.
   * Это временный escape hatch, не основной сценарий использования.
   *
   * @default false
   */
  disableMediaAdaptive?: boolean;
  /**
   * Передача props в контейнер
   */
  containerProps?: ComponentProps<typeof Box>;
  /**
   * Callback при клике на кнопку со стрелкой назад слева от заголовка
   */
  onBackButtonClick?: () => void;
};
