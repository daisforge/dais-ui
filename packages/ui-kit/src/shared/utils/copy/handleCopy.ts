import { createDebugLogger } from '@ui-kit/shared/utils/debug';

const clipboardDebug = createDebugLogger('GLOBAL_COPY/copy');
const PFX = '[shared/utils/handleCopy]';

/**
 * Копирование в буфер в независимости от http/https
 */

export const handleCopy = (copyTxt: string | null | undefined) => {
  if (typeof copyTxt !== 'string') {
    clipboardDebug(PFX, 'нет данных для копирования', copyTxt);

    return;
  }

  clipboardDebug(PFX, 'записываем в буфер', copyTxt);

  if (navigator.clipboard?.writeText) {
    clipboardDebug(PFX, 'clipboard API доступен, используем writeText');
    navigator.clipboard.writeText(copyTxt).catch((err) => {
      clipboardDebug(PFX, 'ошибка записи в буфер', err);
    });
  } else {
    clipboardDebug(PFX, 'clipboard API недоступен, fallback: execCommand');
    try {
      const textarea = document.createElement('textarea');
      textarea.value = copyTxt;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    } catch (err) {
      clipboardDebug(PFX, 'fallback: ошибка записи в буфер', err);
    }
  }
};

export const handleCopyAsync = async (copyTxt: string | null) =>
  new Promise((resolve, reject) => {
    try {
      resolve(handleCopy(copyTxt));
    } catch (error) {
      reject(error);
    }
  });
