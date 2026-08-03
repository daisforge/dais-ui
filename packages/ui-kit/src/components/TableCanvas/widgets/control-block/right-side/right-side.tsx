import { Box } from '@ui-kit/components/Box';
// import { Divider } from '@ui-kit/components/Divider';
import React from 'react';

import { FeatureItem } from '../types';
import { FeatureIconBtn } from './feature-icon-btn';

export const RightSide = ({
  icons,
  featureItems,
  featureIconSize,
  registerIconRef,
  triggerSlot,
  triggerAfterCount = 0,
}: {
  icons: FeatureItem[];
  featureItems: FeatureItem[];
  featureIconSize?: 's' | 'm';
  /** Замер реальной ширины иконки для модели компрессии (по value фичи) */
  registerIconRef?: (el: HTMLDivElement | null, value: string) => void;
  /** Триггер overflow-дропдауна «...» — рендерится внутри зоны иконок */
  triggerSlot?: React.ReactNode;
  /**
   * После скольких иконок (с начала массива = крайних справа из-за
   * row-reverse) вставить triggerSlot. Обычно — длина системной связки
   * fullScreen/rowSize.
   */
  triggerAfterCount?: number;
}) => {
  const renderIcon = (
    iconProps: FeatureItem,
    index: number,
    iconsLength: number,
  ) => (
    <FeatureIconBtn
      key={iconProps.value}
      {...iconProps}
      iconsLength={iconsLength}
      index={index}
      featureIconSize={featureIconSize}
      measureRef={
        registerIconRef
          ? (el) => registerIconRef(el, iconProps.value)
          : undefined
      }
    />
  );

  // Если все остальные фичи ушли в дропдаун (остался только триггер левее
  // связки) — rowSize формально последний в массиве и его dividerLeft
  // подавился бы; «удлиняем» массив для связки, чтобы дивайдер между
  // связкой и триггером сохранился.
  const systemSliceLength =
    triggerSlot && icons.length === triggerAfterCount
      ? icons.length + 1
      : icons.length;

  return (
    /* align-items center: иконки центрируются по вертикали независимо от
       высоты соседей (например, триггера дропдауна), без него в xs
       контрл-блоке fullScreen и rowSize прижимались к верхней границе */
    <Box $css="display: flex; flex-direction: row-reverse; align-items: center;">
      {/* Системная связка (крайние справа) */}
      {icons
        .slice(0, triggerAfterCount)
        .map((p, i) => renderIcon(p, i, systemSliceLength))}
      {/* Триггер «...» — визуально левее связки */}
      {triggerSlot}
      {/* Остальные фичи — левее триггера */}
      {icons
        .slice(triggerAfterCount)
        .map((p, i) => renderIcon(p, i + triggerAfterCount, icons.length))}
      {!!featureItems.length && (
        <>
          {/* <Divider
          orientation="vertical"
          length="16px"
          style={{ paddingLeft: '1px' }}
        /> */}

          {/* modals of featureItems */}
          {featureItems.map((item) => {
            if ('CustomIconRender' in item) {
              return null;
            }
            if (!item?.modal) {
              return null;
            }
            return item?.modal;
          })}
        </>
      )}
    </Box>
  );
};
