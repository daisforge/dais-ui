import { MouseEvent } from 'react';

import { usePlatformNavigation } from './usePlatformNavigation';
/**
  Хук для перехода на страницу портала. Возвращает для ссылки её обычные свойства — href и onClick:
  поведение ссылки сохраняется целиком (адрес при наведении, копирование, новая вкладка),
  а обычный клик переводит на другую страницу портала без перезагрузки.
*/
export const usePlatformLink = (path?: string | null) => {
  const navigation = usePlatformNavigation();

  return {
    // Полный адрес портала: baseUrl плюс путь, соединённые одним слэшем.
    // href нужен, чтобы браузер показывал адрес при наведении и давал скопировать ссылку или открыть её в новой вкладке.
    href: path
      ? `${navigation.baseUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
      : undefined,
    onClick: (event: MouseEvent<HTMLElement>) => {
      // Зажатая клавиша меняет смысл клика: Ctrl и ⌘ — открыть в новой вкладке, Shift — в новом окне, Alt — скачать.
      // Ctrl у Windows и Linux, ⌘ у macOS, поэтому проверяем обе.
      const isModified =
        event.metaKey || event.ctrlKey || event.altKey || event.shiftKey;

      // Если путь пустой, клик не левой кнопкой (средняя кнопка — это тоже новая вкладка) или с зажатой клавишей,
      // ничего не делаем: браузер сам выполнит то, что пользователь задумал.
      if (!path || event.button !== 0 || isModified) return;

      // Обычный клик левой кнопкой: отменяем перезагрузку страницы и переходим силами root.
      event.preventDefault();
      navigation.navigateToPlatformUrl(path);
    },
  };
};
