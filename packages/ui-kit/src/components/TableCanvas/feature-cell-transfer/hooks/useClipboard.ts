import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { createDebugLogger } from '@ui-kit/shared/utils/debug';
import { useCallback, useEffect, useRef } from 'react';

import type { TableNotification } from '../../feature-notifications';
import type { ObjectForExtending } from '../../types/utils.type';
import type {
  CellTransferConfig,
  RowsChangeType,
  TransferColumnConfig
} from '../types';
import {
  DEFAULT_COPY_HOTKEY,
  DEFAULT_PASTE_HOTKEY,
  matchHotkey
} from '../utils/matchHotkey';
import { useCopy } from './useCopy';
import { usePaste } from './usePaste';

const clipboardDebug = createDebugLogger('TABLE_CANVAS_CLIPBOARD');
const PFX = '[TableCanvas/clipboard]';

/**
 * Теги интерактивных элементов, на которых НЕ нужно перехватывать Ctrl+C/V.
 * Если фокус на одном из этих элементов — пропускаем событие,
 * чтобы нативный copy/paste работал как обычно.
 *
 * Сюда попадают: search input, cell editor input (при редактировании ячейки),
 * textarea, select-dropdown и любые будущие интерактивные элементы
 * внутри контейнера TableCanvas.
 */
const NATIVE_INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

/**
 * Проверяет, является ли event.target интерактивным элементом,
 * в котором нативный copy/paste должен работать без перехвата.
 */
function isNativeInputTarget(target: HTMLElement | null): boolean {
  if (!target) return false;
  if (NATIVE_INPUT_TAGS.includes(target.tagName)) return true;
  if (target.isContentEditable) return true;
  // ARIA-роли для кастомных текстовых полей (например draft.js, Slate)
  const role = target.getAttribute('role');
  if (role === 'textbox' || role === 'searchbox') return true;
  return false;
}

interface UseClipboardParams<R extends ObjectForExtending> {
  editModeEnabled: boolean;
  cellTransferConfig?: CellTransferConfig;
  columns: readonly TransferColumnConfig[];
  flattenedRows: readonly R[];
  containerRef: React.RefObject<HTMLDivElement | null>;
  rowContextValue?: ObjectForExtending;
  headerContextValue?: ObjectForExtending;
  onRowsChange?: (
    rows: R[],
    data: {
      indexes: number[];
      column: TransferColumnConfig;
      rows?: { before: R; after: R }[];
      type: RowsChangeType;
    }
  ) => void;
  onNotification?: (event: TableNotification) => void;
}

/**
 * Объединяет copy и paste: трекает selection, вешает keydown-listener
 * на контейнер и диспатчит хоткеи в `useCopy` / `usePaste`.
 * Сам логикой copy/paste не занимается.
 *
 * Copy/paste glide-data-grid отключены через `keybindings: { copy: false, paste: false }`
 * на уровне DataEditor (см. TableGlide), поэтому stopPropagation не нужен, так как
 * glide просто не обрабатывает эти хоткеи. preventDefault блокирует дефолтное
 * поведение браузера (нативная вставка текста в контейнер).
 *
 * Если в `hotkeys.copy` / `hotkeys.paste` задана кастомная комбинация,
 * одновременно блокируется дефолтный Ctrl+C/V (replace-семантика).
 * Чтобы сохранить и дефолт, и кастом — передайте массив:
 * `copy: [{ code: 'KeyC', ctrl: true }, { code: 'KeyC', ctrl: true, alt: true }]`.
 */
export function useClipboard<R extends ObjectForExtending>({
  editModeEnabled,
  cellTransferConfig,
  columns,
  flattenedRows,
  containerRef,
  rowContextValue,
  headerContextValue,
  onRowsChange,
  onNotification
}: UseClipboardParams<R>) {
  const selectionRef = useRef<GridSelection | null>(null);

  const onGridSelectionChange = useCallback((next: GridSelection) => {
    selectionRef.current = next;
  }, []);

  const { handleCopy } = useCopy({
    cellTransferConfig,
    columns,
    flattenedRows,
    selectionRef,
    onNotification
  });

  const { handlePaste } = usePaste({
    editModeEnabled,
    cellTransferConfig,
    columns,
    flattenedRows,
    selectionRef,
    rowContextValue,
    headerContextValue,
    onRowsChange,
    onNotification
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const hasClipboardApi = !!navigator.clipboard?.readText;
    const userCopyHotkey = cellTransferConfig?.hotkeys?.copy;
    const userPasteHotkey = cellTransferConfig?.hotkeys?.paste;
    const copyHotkey = userCopyHotkey ?? DEFAULT_COPY_HOTKEY;
    const pasteHotkey = userPasteHotkey ?? DEFAULT_PASTE_HOTKEY;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Если фокус на интерактивном элементе (input, textarea, select,
      // contentEditable, role="textbox") — не перехватываем, чтобы нативный
      // copy/paste работал. Касается: search input, cell editor, дропдауны.
      if (isNativeInputTarget(event.target as HTMLElement)) {
        return;
      }

      if (matchHotkey(event, copyHotkey)) {
        clipboardDebug(PFX, 'хоткей копирования сработал', {
          code: event.code,
          ctrl: event.ctrlKey,
          meta: event.metaKey
        });
        event.preventDefault();
        handleCopy();
        return;
      }

      // Кастомный copy задан — дефолтный Ctrl+C не должен копировать через glide.
      if (userCopyHotkey && matchHotkey(event, DEFAULT_COPY_HOTKEY)) {
        clipboardDebug(PFX, 'дефолтный copy подавлен (задан кастомный хоткей)');
        event.preventDefault();
        return;
      }

      if (matchHotkey(event, pasteHotkey)) {
        clipboardDebug(PFX, 'хоткей вставки сработал', {
          code: event.code,
          ctrl: event.ctrlKey,
          meta: event.metaKey
        });
        if (hasClipboardApi) {
          event.preventDefault();
          handlePaste();
        }
        // Без clipboard API не блокируем, браузер сгенерирует paste event
        return;
      }

      if (userPasteHotkey && matchHotkey(event, DEFAULT_PASTE_HOTKEY)) {
        clipboardDebug(
          PFX,
          'дефолтный paste подавлен (задан кастомный хоткей)'
        );
        event.preventDefault();
      }
    };

    const handleNativePaste = (event: ClipboardEvent) => {
      if (isNativeInputTarget(event.target as HTMLElement)) {
        return;
      }
      if (hasClipboardApi) return;

      const text = event.clipboardData?.getData('text/plain');
      if (!text) return;

      clipboardDebug(PFX, 'fallback paste event', { length: text.length });
      event.preventDefault();
      handlePaste(text);
    };

    container.addEventListener('keydown', handleKeyDown);
    container.addEventListener('paste', handleNativePaste);
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      container.removeEventListener('paste', handleNativePaste);
    };
  }, [containerRef, handleCopy, handlePaste, cellTransferConfig]);

  return {
    onGridSelectionChange,
    handleCopy,
    handlePaste
  };
}
