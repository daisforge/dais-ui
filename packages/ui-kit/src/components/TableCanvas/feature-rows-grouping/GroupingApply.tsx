import { Button } from '@ui-kit/components/Button';
import { useEffect } from 'react';

import { closeTableDropdown } from '../components/TableDropdown/TableDropdown';

export type GroupingApplyProps = {
  onApply: () => void;
  onDiscard: () => void;
  inSubmenu?: boolean;
};

export function GroupingApply({
  onApply,
  onDiscard,
  inSubmenu,
}: GroupingApplyProps) {
  // Plasma размонтирует содержимое при закрытии как списка, так и подменю.
  useEffect(() => {
    // После выбора мышью фокус может покинуть триггер с клавиатурным обработчиком Plasma.
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !event.defaultPrevented)
        closeTableDropdown();
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      onDiscard();
    };
  }, [onDiscard]);
  if (inSubmenu) return null;
  return (
    <Button
      size="xs"
      text="Применить"
      onClick={() => {
        onApply();
        closeTableDropdown();
      }}
    />
  );
}
