import type { HotkeyConfig } from '../types';

/**
 * Проверяет, соответствует ли `KeyboardEvent` заданной комбинации клавиш.
 *
 * Используется `event.code` (физический код), поэтому хоткей работает
 * одинаково на любой раскладке — `Ctrl+C` на русской клавиатуре тоже
 * сработает.
 *
 * Если передан массив конфигов, срабатывает любой из них.
 */
export function matchHotkey(
  event: KeyboardEvent,
  config: HotkeyConfig | HotkeyConfig[],
): boolean {
  const configs = Array.isArray(config) ? config : [config];

  return configs.some((cfg) => {
    if (event.code !== cfg.code) return false;

    const expectedCtrl = cfg.ctrl ?? true;
    const expectedShift = cfg.shift ?? false;
    const expectedAlt = cfg.alt ?? false;
    const expectedMeta = cfg.meta ?? false;

    // На Mac Cmd заменяет Ctrl, поэтому при ожидаемом ctrl принимаем и metaKey.
    const ctrlOrMeta = event.ctrlKey || event.metaKey;
    const ctrlMatches = expectedCtrl ? ctrlOrMeta : !ctrlOrMeta;

    return (
      ctrlMatches &&
      event.shiftKey === expectedShift &&
      event.altKey === expectedAlt &&
      (expectedMeta ? event.metaKey : true)
    );
  });
}

/** Хоткей копирования по умолчанию: Ctrl+C / Cmd+C. */
export const DEFAULT_COPY_HOTKEY: HotkeyConfig = { code: 'KeyC', ctrl: true };

/** Хоткей вставки по умолчанию: Ctrl+V / Cmd+V. */
export const DEFAULT_PASTE_HOTKEY: HotkeyConfig = { code: 'KeyV', ctrl: true };
