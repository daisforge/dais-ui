import {
  IconPinDashOutline,
  IconPinOutline,
  IconTableColumnPin,
} from '@ui-kit/icons';
import { textInfo } from '@ui-kit/tokens/color';
import React from 'react';

import { SplitIconButton } from '../../../components/SplitIconButton';
import { FEATURE_ICON_SIZES } from '../right-side/feature-icon-btn';
import {
  DropdownRenderCtx,
  FeatureItemWithCustomIcon,
  PinningMenuConfig,
  PinningMenuItem,
} from '../types';
import {
  getDropdownIconSize,
  resolveFeatureIcon,
} from '../use-buttons-to-dropdown';
import { resolvePinningMenuItems } from './resolvePinningMenuItems';

/** value нативной фичи закрепления (для SYSTEM-проверок и компрессии). */
export const PINNING_MENU_VALUE = 'pinning-menu';

/** value нативных пунктов меню (совпадение = override со стороны продукта). */
export const PINNING_MENU_NATIVE_VALUES = {
  reset: 'reset-pinning',
  pinColumns: 'pin-columns',
} as const;

type BuildPinningFeatureParams = {
  /** Текущая высота строк — под неё подбираем размер иконок. */
  rowSize: DropdownRenderCtx['rowSize'];
  /** Конфиг фичи (продуктовые пункты меню). */
  pinningMenuConfig: PinningMenuConfig | undefined;
  /** Нативный экшен «Закрепить столбцы» (закрепить выделенные). */
  onPinSelectedColumns: () => void;
  /** Нативный экшен «Сбросить закрепление» (= «Открепить все»). */
  onResetPinning: () => void;
  /** Размер кнопок SplitIconButton (= featureIcon размера контрл-блока). */
  embedSize: 's' | 'm';
  /** Синий цвет левой иконки — среди видимых колонок есть закреплённая. */
  iconColored: boolean;
  /** Tooltip левой иконки (зависит от выделения и закрепления). */
  iconTooltip: string;
  /** Клик по левой иконке — тоглер пин/анпин/нотификация. */
  onIconClick?: () => void;
};

/**
 * Собирает нативную фичу закрепления столбцов для правой зоны иконок
 * контрл-блока. В несжатом виде — SplitIconButton (иконка-пин + шеврон с меню);
 * при компрессии уходит в overflow-дропдаун вложенным подменю (через details
 * type 'select').
 *
 * mandatory:true — фича не переносится в правый сайдбар (там уже есть раздел
 * «Столбцы»); canBeCompressedInToolsMenu:true — но может уйти в overflow «…».
 * Тот же приём, что у нативной фичи view-mode.
 */
export function buildPinningFeature({
  rowSize,
  pinningMenuConfig,
  onPinSelectedColumns,
  onResetPinning,
  embedSize,
  iconColored,
  iconTooltip,
  onIconClick,
}: BuildPinningFeatureParams): FeatureItemWithCustomIcon {
  const iconSize = FEATURE_ICON_SIZES[embedSize].icon;
  const nativeItems: PinningMenuItem[] = [
    {
      value: PINNING_MENU_NATIVE_VALUES.reset,
      label: 'Открепить всё',
      icon: (ctx) => (
        <IconPinDashOutline
          color="inherit"
          size={getDropdownIconSize(ctx.rowSize)}
        />
      ),
      onClick: onResetPinning,
      order: 100,
      dividerAfter: true,
    },
    {
      value: PINNING_MENU_NATIVE_VALUES.pinColumns,
      label: 'Закрепить столбцы',
      icon: (ctx) => (
        <IconTableColumnPin
          color="inherit"
          size={getDropdownIconSize(ctx.rowSize)}
        />
      ),
      onClick: onPinSelectedColumns,
      order: 200,
    },
  ];

  const resolvedItems = resolvePinningMenuItems(
    nativeItems,
    pinningMenuConfig?.items,
  );

  const handleSelect = (value: string) => {
    resolvedItems.find((item) => item.value === value)?.onClick?.();
  };

  // Пункты для дропдауна SplitIconButton (несжатое состояние).
  const buildDropdownItems = (ctx: DropdownRenderCtx) =>
    resolvedItems.map((item) => ({
      value: item.value,
      label: item.label,
      contentLeft: resolveFeatureIcon(item.icon, ctx),
      dividerAfter: item.dividerAfter,
      disabled: item.disabled,
    }));

  return {
    value: PINNING_MENU_VALUE,
    mandatory: true,
    canBeCompressedInToolsMenu: true,
    CustomIconRender: ({ rowSize: ctxRowSize }) => (
      <SplitIconButton
        icon={
          <IconPinOutline
            color={iconColored ? textInfo : 'inherit'}
            size={iconSize}
          />
        }
        iconTooltip={iconTooltip}
        chevronSize="xs"
        size={embedSize}
        onIconClick={onIconClick}
        iconDomMetadata={pinningMenuConfig?.iconDomMetadata?.dataAttributes}
        items={buildDropdownItems({
          rowSize: ctxRowSize,
          isInDropdown: true,
        })}
        onItemSelect={(item) => handleSelect(item.value as string)}
      />
    ),
    // Компрессия: вложенное подменю в overflow-дропдауне «…».
    details: {
      type: 'select',
      label: 'Закрепление столбцов',
      icon: (ctx) => (
        <IconPinOutline
          color="inherit"
          size={getDropdownIconSize(ctx.rowSize)}
        />
      ),
      value: '',
      options: resolvedItems.map((item) => ({
        value: item.value,
        label: item.label,
        contentLeft: resolveFeatureIcon(item.icon, {
          rowSize,
          isInDropdown: true,
        }),
        dividerAfter: item.dividerAfter,
        disabled: item.disabled,
      })),
      onChange: handleSelect,
    },
  };
}
