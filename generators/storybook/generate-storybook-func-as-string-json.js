/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { extname, join } from 'path';

// eslint-disable-next-line import/extensions
import { copyFuncAsStringSync } from './copy-func-as-string.js';

// Основной каталог проекта
const projectDir = './packages/storybook';
const savePath = './packages/storybook/src/functions.string.json';

// Расширения файлов, которые нужно проверить
const extensions = ['.md', '.mdx', '.js', '.jsx', '.ts', '.tsx'];

// Название компонента для поиска
const componentName = 'getFuncAsString';

async function main() {
  // Объект для хранения путей и связанных типов
  let collectedData = {};
  // Функция для рекурсивного прохода по файлам
  function walkDirectory(dir) {
    const results = [];

    readdirSync(dir).forEach((item) => {
      const itemPath = join(dir, item);
      const stat = statSync(itemPath);

      if (stat.isDirectory()) {
        // Если это директория, продолжаем рекурсию
        results.push(...walkDirectory(itemPath));
      } else {
        // Проверяем расширение файла
        const extension = extname(itemPath);
        if (extensions.includes(extension)) {
          // Читаем содержимое файла
          const content = readFileSync(itemPath, 'utf8');
          // Проверяем наличие компонента
          if (content.includes(`${componentName}(`)) {
            collectPathsAndNames(content, itemPath); // Анализируем файл и добавляем пути и типы
          }
        }
      }
    });

    return results;
  }

  // Функция для сбора путей и типов из пропсов компонента
  function collectPathsAndNames(fileContent, extractedFilePath) {
    const pattern = /getFuncAsString\(.*?\)/gs;

    // Сперва вытащим все компоненты
    const components = [...fileContent.matchAll(pattern)].map((m) => m[0]);

    // Для каждого компонента извлечём пропсы
    const extractedProps = components.reduce((acc, component) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unsafe-optional-chaining
      const [filePath, funcName] = component
        .split('(')?.[1]
        ?.slice(0, -1)
        .trim()
        .split(',')
        .map((s) => s.trim().slice(1, -1));

      if (filePath && funcName) {
        acc[`${filePath}$$$${funcName}`] = {
          filePath,
          funcName,
          extractedFilePath,
        };
      }

      return acc;
    }, {});
    collectedData = { ...collectedData, ...extractedProps };
  }

  // Выполнение поиска
  walkDirectory(projectDir);

  // Выводим собранные данные

  const x = Object.fromEntries(
    Object.entries(collectedData).map(([key, { filePath, funcName }]) => {
      const func = copyFuncAsStringSync(filePath, funcName);

      // eslint-disable-next-line no-console
      console.log(`Функция ${funcName} успешно записана!`);
      return [key, func];
    })
  );

  writeFileSync(savePath, JSON.stringify(x));
}

main();
