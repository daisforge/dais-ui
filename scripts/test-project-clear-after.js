/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import path from 'path';

import {
  FINPORTAL_PROJECT,
  FINPORTAL_PROJECT_FLAG,
  getProjectName,
  TGZ_NAME,
  VITE_PROJECT,
  WEBPACK_PROJECT,
  WEBPACK_PROJECT_FLAG,
} from './test-project-constants.js';
import {
  defaultColor,
  findFilesByExtension,
  greenColor,
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

// package.json не удаляем — он под контролем версий
const DELETE_ARR = ['package-lock.json', 'node_modules', TGZ_NAME];

function main() {
  console.log(
    `${greenColor}Удаление файлов ${DELETE_ARR.join(
      ', ',
    )} в проекте ${PROJECT_NAME}...${defaultColor}`,
  );
  try {
    DELETE_ARR.forEach((fileOrDir) => {
      rmrf(`${PROJECT}/${fileOrDir}`);
    });
    // на всякий удаляем любые .tgz файлы
    const oldTgzFiles = findFilesByExtension(PROJECT, '.tgz');
    for (const file of oldTgzFiles) {
      rmrf(path.join(PROJECT, file));
    }

    console.log(
      `${greenColor}Удаление файлов завершилось успешно!${defaultColor}`,
    );
  } catch (error) {
    console.warn('Удаление завершилось с ошибкой', error);
  }
}

main();
