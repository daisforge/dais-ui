import { useMemo } from 'react';

import type { MassActionsButtonProps } from '../types';

export const useMassActionsButtons = ({
  buttons,
  visibleButtonsCount,
}: {
  buttons?: MassActionsButtonProps[];
  visibleButtonsCount: number;
}) => {
  // Разделяем кнопки на видимые и скрытые в dropdown
  // Accent кнопки всегда видимы и сохраняют свой порядок
  const { visibleButtons, buttonsInDropdown } = useMemo(() => {
    const allButtons = buttons ?? [];

    // Собираем индексы accent и не-accent кнопок
    const accentButtonIndexes = new Set<number>();
    const nonAccentButtonIndexes: number[] = [];

    allButtons.forEach((button, index) => {
      const isAccent = button.view === 'accent';
      if (isAccent) {
        accentButtonIndexes.add(index);
      } else {
        nonAccentButtonIndexes.push(index);
      }
    });

    // Количество не-accent кнопок, которые должны быть видимы
    const accentCount = accentButtonIndexes.size;
    const nonAccentVisibleCount = Math.max(
      0,
      visibleButtonsCount - accentCount,
    );

    // Индексы видимых не-accent кнопок (первые nonAccentVisibleCount)
    const visibleNonAccentIndexes = new Set(
      nonAccentButtonIndexes.slice(0, nonAccentVisibleCount),
    );

    // Формируем массив видимых кнопок, сохраняя оригинальный порядок
    const visible: MassActionsButtonProps[] = [];
    const inDropdown: MassActionsButtonProps[] = [];

    // Проходим по всем кнопкам в оригинальном порядке
    allButtons.forEach((button, index) => {
      if (accentButtonIndexes.has(index)) {
        // Accent кнопки всегда видимы
        visible.push(button);
      } else if (visibleNonAccentIndexes.has(index)) {
        // Видимые не-accent кнопки
        visible.push(button);
      } else {
        // Остальные не-accent кнопки идут в дропдаун
        inDropdown.push(button);
      }
    });

    return {
      visibleButtons: visible,
      buttonsInDropdown: inDropdown,
    };
  }, [buttons, visibleButtonsCount]);

  return {
    visibleButtons,
    buttonsInDropdown,
    allButtons: buttons ?? [],
  };
};
