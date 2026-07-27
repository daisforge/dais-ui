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
  VITE_PROJECT,
  WEBPACK_PROJECT,
  WEBPACK_PROJECT_FLAG,
} from './test-project-constants.js';
import {
  defaultColor,
  execWithLog,
  findFilesByExtension,
  greenColor,
  isWindows,
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
 * В этом файле скрипт для тестирования билда ui-kit в тестовом изолированном проекте project
 */

const PKG_JSON = 'package.json';

/**
 * Скрипт для тестирования билда ui-kit в тестовом изолированном проекте project
 */
async function main() {
  console.log(
    `${greenColor}Проверка билда ui-kit в тестовом изолированном проекте ${PROJECT_NAME} запущена...${defaultColor}`
  );

  try {
    // 1. Установка зависимостей
    console.log('Установка зависимостей...');
    await execWithLog('node scripts/vite-project-install-deps.js', {
      maxBuffer: 10 * 1024 * 1024,
      shell: true,
    });
    console.log(`✅ Зависимости проекта ${PROJECT} успешно установлены`);

    // 2. Сборка проекта
    console.log(`Сборка ${PROJECT_NAME}...`);
    rmrf(path.join(PROJECT, 'dist'));
    await execWithLog(`npm run build --prefix "${PROJECT}"`, {
      maxBuffer: 10 * 1024 * 1024,
      shell: true,
    });
    console.log(`✅ Проект ${PROJECT_NAME} успешно собран`);

    // 3. Очистка
    postClearing();

    console.log(
      `${greenColor}👍 Проверка билда ui-kit в тестовом изолированном проекте ${PROJECT_NAME} прошла успешно!${defaultColor}`
    );
  } catch (error) {
    throw new Error(
      `Произошла ошибка при попытке тестирования билда ui-kit на локальном проекте. Информация об ошибке: ${error.message}`
    );
  } finally {
    // Очистка в finally - но только если не было успешной очистки в try
    try {
      postClearing();
    } catch (_e) {
      console.warn('Предупреждение: Очистка в finally не удалась');
    }
  }
}

main();

/**
 * Очистка временных файлов после сборки
 */
function postClearing() {
  console.log('Очистка временных файлов...');

  const tgzFiles = findFilesByExtension(PROJECT, '.tgz');
  for (const file of tgzFiles) {
    rmrf(path.join(PROJECT, file));
  }
  rmrf(path.join(PROJECT, PKG_JSON));
  rmrf(path.join(PROJECT, 'package-lock.json'));
  rmrf(path.join(PROJECT, 'dist'));

  // node_modules удаляем последним и с дополнительной задержкой на Windows
  if (isWindows) {
    // Даём время на освобождение файловых дескрипторов
    // eslint-disable-next-line no-promise-executor-return
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    delay(1000).then(() => {
      rmrf(path.join(PROJECT, 'node_modules'));
    });
  } else {
    rmrf(path.join(PROJECT, 'node_modules'));
  }

  console.log(`✅ Ненужные файлы в директории ${PROJECT} успешно удалены`);
}
