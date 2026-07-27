/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import path from 'path';

import {
  FINPORTAL_PROJECT,
  FINPORTAL_PROJECT_FLAG,
  getProjectName,
  PKG_JSON,
  PKG_JSON_UNTRACKED,
  TGZ_NAME,
  VITE_PROJECT,
  WEBPACK_PROJECT,
  WEBPACK_PROJECT_FLAG,
} from './test-project-constants.js';
import {
  copyFile,
  defaultColor,
  execWithLog,
  findFilesByExtension,
  greenColor,
  npmCmd,
  npxCmd,
  renameFile,
  rmrf,
} from './utils.js';

//  ------------ Динамический выбор проекта
let PROJECT = VITE_PROJECT;
const args = process.argv.slice(2);

if (args.includes(WEBPACK_PROJECT_FLAG)) {
  PROJECT = WEBPACK_PROJECT;
} else if (args.includes(FINPORTAL_PROJECT_FLAG)) {
  PROJECT = FINPORTAL_PROJECT;
}
const PROJECT_NAME = getProjectName(PROJECT);
//  ------------------------------------------------

/**
 * Скрипт для установки зависимостей в тестовом изолированном проекте project ( с самой актуальной собранной версией ui-kit до его публикации)
 */

/**
 * Основная функция скрипта
 * Выполняет последовательно:
 * 1. Сборка ui-kit
 * 2. Удаление старых .tgz файлов
 * 3. Создание .tgz пакета из собранного ui-kit
 * 4. Переименование файлов и копирование package.json
 * 5. Установка зависимостей в project
 */
async function main() {
  console.log(
    `${greenColor}Установка зависимостей проекта ${PROJECT_NAME} запущена...${defaultColor}`
  );

  try {
    // 1. Сборка ui-kit
    console.log('Очистка dist перед ui-kit:build...');
    rmrf('dist/packages/ui-kit');

    console.log('Сброс кэша nx...');
    await safeNxReset();

    console.log('Запуск nx build...');
    await execWithLog(`${npxCmd} nx run ui-kit:build`);
    console.log('✅ Пакет ui-kit успешно собран в папке dist');

    // 2. Удаление старых .tgz файлов
    console.log('Удаление старых .tgz файлов...');
    const oldTgzFiles = findFilesByExtension(PROJECT, '.tgz');
    for (const file of oldTgzFiles) {
      rmrf(path.join(PROJECT, file));
    }
    console.log(
      `✅ Удаление старых файлов .tgz в директории ${PROJECT} завершено`
    );

    // 3. Создание .tgz пакета
    console.log('Создание .tgz пакета...');
    const packDest = path.resolve(PROJECT);
    await execWithLog(`${npmCmd} pack --pack-destination "${packDest}"`, {
      cwd: 'dist/packages/ui-kit',
    });
    console.log(`✅ Пакет успешно создан в ${PROJECT}`);

    // 4. Переименование файлов
    // *.tgz -> ui-kit-tgz.tgz
    // untracked-package.json -> package.json
    console.log('Переименование файлов...');
    const tgzFiles = findFilesByExtension(PROJECT, '.tgz');
    if (tgzFiles.length > 0) {
      const oldTgzPath = path.join(PROJECT, tgzFiles[0]);
      const newTgzPath = path.join(PROJECT, TGZ_NAME);
      renameFile(oldTgzPath, newTgzPath);
    }
    copyFile(
      path.join(PROJECT, PKG_JSON_UNTRACKED),
      path.join(PROJECT, PKG_JSON)
    );
    console.log(`✅ Файлы переименованы`);

    // 5. Установка зависимостей
    console.log('Установка зависимостей...');
    const tgzPath = path.join(PROJECT, TGZ_NAME);
    await execWithLog(`${npmCmd} install "${tgzPath}" --prefix "${PROJECT}"`);
    console.log(`✅ Зависимости проекта ${PROJECT} успешно установлены`);

    console.log(
      `${greenColor}👍 ${PROJECT_NAME}. Зависимости проекта успешно установлены!${defaultColor}`
    );
  } catch (error) {
    throw new Error(
      `Произошла ошибка при попытке установки зависимостей на локальном проекте ${PROJECT_NAME}. Информация об ошибке: ${error.message}`
    );
  }
}

main();

/**
 * Безопасный сброс кэша nx
 * На Windows nx daemon может держать файлы заблокированными,
 * поэтому сначала останавливаем daemon, ждём и затем делаем reset
 */
async function safeNxReset() {
  try {
    // Сначала останавливаем daemon
    await execWithLog(`${npxCmd} nx daemon --stop`, { shell: true }).catch(
      () => {}
    );

    // Ждём немного чтобы процесс завершился
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Пробуем reset
    await execWithLog(`${npxCmd} nx reset`, { shell: true });
  } catch (e) {
    console.warn(
      'Предупреждение: nx reset не удался, продолжаем...',
      e.message
    );
    // Пробуем вручную удалить кэш
    try {
      rmrf('.nx/cache');
      rmrf('node_modules/.cache/nx');
    } catch (_e2) {
      console.warn('Предупреждение: Не удалось очистить кэш nx вручную');
    }
  }
}
