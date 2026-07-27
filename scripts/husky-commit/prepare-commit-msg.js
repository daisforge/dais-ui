import fs from 'fs';

const commitMsgPath = process.argv[2];
let message = fs.readFileSync(commitMsgPath, 'utf8');

// ----------------------------- 1. Удалить строки комментариев Git
message = message
  .split('\n')
  .filter((line) => !line.trim().startsWith('#'))
  .join('\n');

// ----------------------------- 2. Нормализовать пробелы и удалить лишние пустые строки
message = message.trim().replace(/:\s+/g, ': ');

fs.writeFileSync(commitMsgPath, message, 'utf8');
