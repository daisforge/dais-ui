/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@ui-kit/components/Box';
import { SplitIconButton } from '@ui-kit/components/TableCanvas';
import { IconDone, IconStar } from '@ui-kit/icons';
import { textInfo } from '@ui-kit/tokens';
import React, { useState } from 'react';

/**
 * Демо-фича «звезда» на базе SplitIconButton. Показывает компонент сразу в
 * двух ролях: как кастомная иконка фичи в панели (CustomIconRender) и как её
 * представление в overflow-дропдауне при компрессии (details). Оба варианта
 * делят одно состояние выбора, поэтому метка не рассинхронизируется.
 *
 * Папка `_lib` намеренно без `.stories`, чтобы хелпер не попадал в мета-доку.
 */

export const STAR_OPTIONS = [
  { value: 'important', label: 'Важное' },
  { value: 'urgent', label: 'Срочное' },
  { value: 'later', label: 'На потом' },
];

type RowSize = 'big' | 'medium' | 'small';
// eslint-disable-next-line react/no-unused-prop-types
type RenderCtx = { rowSize: RowSize; isInDropdown: boolean };

/**
 * Возвращает объект customFeature (value + CustomIconRender + details).
 * Вызывается в render-функции стори (это хук с useState).
 * @param embedSize размер кнопок SplitIconButton (обычный контрл-блок 'm', APE 's')
 * @param panelStarSize размер иконки звезды в панели (обычный 's', APE 'xs')
 */
export const useStarFeature = ({
  embedSize = 'm',
  panelStarSize = 's',
}: {
  embedSize?: 's' | 'm';
  panelStarSize?: 'xs' | 's';
} = {}) => {
  const [selected, setSelected] = useState('important');

  // Галочки в свёрнутом дропдауне — это НАШИ данные. Кладём их в contentLeft
  // опций через расширенный канал details.select (Pick из DropdownItemOption).
  // Библиотека ничего не навязывает: хотим галочку — кладём, не хотим — нет.
  const labelOptions = STAR_OPTIONS.map((opt) => ({
    ...opt,
    contentLeft: (
      <Box
        $css={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          visibility: selected === opt.value ? 'visible' : 'hidden',
        }}
      >
        <IconDone size="s" color={textInfo} />
      </Box>
    ),
  }));

  return {
    value: 'star-with-checks',
    // Вид в панели: основная иконка-звезда + шеврон с дропдауном выбора метки
    CustomIconRender: ({ rowSize }: RenderCtx) => {
      const items = STAR_OPTIONS.map((opt) => ({
        ...opt,
        contentLeft: (
          <Box
            $css={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              visibility: selected === opt.value ? 'visible' : 'hidden',
            }}
          >
            <IconDone
              size={rowSize === 'small' ? 'xs' : 's'}
              color={textInfo}
            />
          </Box>
        ),
      }));

      return (
        <SplitIconButton
          icon={<IconStar size={panelStarSize} />}
          chevronSize="xs"
          size={embedSize}
          items={items}
          onItemSelect={(item) => setSelected(String(item.value))}
          onIconClick={() => alert('Star icon click')}
          domMetadata={{ 'data-test-id': 'star-compound-with-checks' }}
        />
      );
    },
    // Вид в свёрнутом overflow-дропдауне: тот же выбор метки как select
    details: {
      type: 'select' as const,
      label: 'Метка',
      value: selected,
      options: labelOptions,
      onChange: (value: string) => setSelected(value),
      icon: ({ rowSize }: RenderCtx) => (
        <IconStar size={rowSize === 'small' ? 'xs' : 's'} />
      ),
    },
  };
};
