/* eslint-disable no-console */
import { exec as execUsual, execSync } from 'child_process';
import fs from 'fs';
import util from 'util';

export const greenColor = '\x1b[0;32m';
export const defaultColor = '\x1b[0m';
export const redColor = '\x1b[0;31m';
export const aquaColorUnderlineStyle = '\x1b[4;36m'; // бирюзовый
export const aquaColor = '\x1b[36'; // бирюзовый
export const resetStyles = '\x1b[0m';
export const underlineStyle = '\x1b[4m'; // Start Underline
export const italicStyle = '\x1b[3m';
export const boldStyle = '\x1b[1m';
export const whiteBgColorBlackTxtColor = ' \x1b[47;30m';
// Определяем команду npm/npx в зависимости от ОС (на Windows нужен .cmd)
export const isWindows = process.platform === 'win32';
export const npxCmd = isWindows ? 'npx.cmd' : 'npx';
export const npmCmd = isWindows ? 'npm.cmd' : 'npm';

const exec = util.promisify(execUsual);

/**
 * Кроссплатформенное удаление файлов/директорий с повторными попытками
 * На Windows файлы часто залочены (антивирус, IDE, node процессы),
 * поэтому нужны retry и fallback через shell
 */
export function rmrf(targetPath) {
  // Если путь не существует - ничего делать не нужно
  if (!fs.existsSync(targetPath)) return;

  try {
    fs.rmSync(targetPath, {
      recursive: true, // Удалять директории рекурсивно со всем содержимым
      force: true, // Игнорировать ошибки если файл не существует
      maxRetries: 3, // Повторить 3 раза при ошибке (EBUSY, ENOTEMPTY)
      retryDelay: 1000, // Ждать 1 секунду между попытками
    });
  } catch (e) {
    console.warn(
      `Предупреждение: fs.rmSync не удался для ${targetPath}, пробуем через shell...`
    );

    // Fallback: если Node.js не справился, пробуем нативную команду ОС
    // Это помогает с длинными путями и залоченными файлами на Windows
    try {
      if (isWindows) {
        // rmdir /s - рекурсивно, /q - без подтверждения
        execSync(`rmdir /s /q "${targetPath}"`, { stdio: 'ignore' });
      } else {
        // rm -r - рекурсивно, -f - force (игнорировать ошибки)
        execSync(`rm -rf "${targetPath}"`, { stdio: 'ignore' });
      }
    } catch (_e2) {
      // Если и shell не помог - просто логируем, не падаем
      console.warn(
        `Предупреждение: Не удалось удалить ${targetPath}: ${e.message}`
      );
    }
  }
}

/**
 * Поиск файлов по расширению в директории
 */
export function findFilesByExtension(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(ext));
}

/** Копирование файла */
export function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

/** Переименование файла */
export function renameFile(oldPath, newPath) {
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }
}

/** Обёртка для exec с выводом ошибок и увеличенным буфером */
export async function execWithLog(command, options = {}) {
  try {
    const { stdout, stderr } = await exec(command, {
      ...options,
      maxBuffer: 10 * 1024 * 1024, // 10MB буфер
      shell: true,
    });
    if (stderr && !stderr.includes('npm WARN')) {
      console.log('stderr:', stderr);
    }
    return { stdout, stderr };
  } catch (error) {
    console.error(`Команда завершилась с ошибкой: ${command}`);
    if (error.stdout) console.error('stdout:', error.stdout);
    if (error.stderr) console.error('stderr:', error.stderr);
    throw error;
  }
}
