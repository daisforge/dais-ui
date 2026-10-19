import { createDebugLogger } from '@ui-kit/shared/utils/debug';

const clipboardDebug = createDebugLogger('GLOBAL_COPY/copy');
const PFX = '[shared/utils/copyTextToClipboard]';

const copyWithExecCommand = (text: string): boolean => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
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
 * В отличие от `handleCopy` сообщает результат: `true`, если текст скопирован
 */
export const copyTextToClipboard = async (text: string): Promise<boolean> => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      clipboardDebug(PFX, 'clipboard API: ошибка, пробуем execCommand', err);
    }
  }

  try {
    return copyWithExecCommand(text);
  } catch (err) {
    clipboardDebug(PFX, 'execCommand: ошибка записи в буфер', err);
    return false;
  }
};
