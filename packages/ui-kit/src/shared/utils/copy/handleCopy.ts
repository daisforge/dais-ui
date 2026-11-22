import { createDebugLogger } from '@ui-kit/shared/utils/debug';

const clipboardDebug = createDebugLogger('GLOBAL_COPY/copy');
const PFX = '[shared/utils/handleCopy]';

const copyWithExecCommand = (copyTxt: string): boolean => {
  const textarea = document.createElement('textarea');
  textarea.value = copyTxt;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  try {
    textarea.select();
    return document.execCommand('copy');
  } finally {
    document.body.removeChild(textarea);
  }
};

/**
 * Копирование в буфер в независимости от http/https.
 * Дожидается записи: при ошибке Clipboard API пробует execCommand,
 * если скопировать не удалось, промис отклоняется
 */
export const handleCopyAsync = async (
  copyTxt: string | null | undefined,
): Promise<void> => {
  if (typeof copyTxt !== 'string') {
    clipboardDebug(PFX, 'нет данных для копирования', copyTxt);
    return;
  }

  clipboardDebug(PFX, 'записываем в буфер', copyTxt);

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(copyTxt);
      return;
    } catch (err) {
      clipboardDebug(PFX, 'ошибка clipboard API, fallback: execCommand', err);
    }
  }

  if (!copyWithExecCommand(copyTxt)) {
    throw new Error('Не удалось скопировать в буфер обмена');
  }
};

/**
 * Копирование без ожидания результата: ошибки только пишутся в debug-лог
 */
export const handleCopy = (copyTxt: string | null | undefined) => {
  handleCopyAsync(copyTxt).catch((err) => {
    clipboardDebug(PFX, 'ошибка записи в буфер', err);
  });
};
