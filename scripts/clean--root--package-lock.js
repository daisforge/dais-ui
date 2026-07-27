/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

const { dirname } = import.meta;

const filePath = path.join(dirname, '../', 'package-lock.json');
const keysForDeleteMatch = 'packages/ui-kit/node_modules';

function cleanObject(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  if (!obj.packages) return;

  for (const key in obj.packages) {
    if (key.startsWith(keysForDeleteMatch)) {
      delete obj.packages[key];
    }
  }
}

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Ошибка чтения файла ${filePath}:`, err);
    return;
  }

  let json;
  try {
    json = JSON.parse(data);
  } catch (parseErr) {
    console.error(`Ошибка парсинга JSON (${filePath}):`, parseErr);
    return;
  }

  cleanObject(json);

  fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf8', (writeErr) => {
    if (writeErr) {
      console.error(`Ошибка записи файла ${filePath}:`, writeErr);
    } else {
      console.log(`Файл ${filePath} успешно обновлён.`);
    }
  });
});
