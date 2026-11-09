import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

// Перенос кандидатов в эталоны: docker.js вызывает функцию на хосте после успешного update.
// Успех тестов и полноту результатов до этого проверяет run.js внутри контейнера.
export function promoteSnapshots(staging, target, { partial = false } = {}) {
  // Новый набор и резервную копию создаём рядом с эталонами на той же файловой системе.
  const parent = path.dirname(target);
  const candidate = fs.mkdtempSync(path.join(parent, '.snapshots-candidate-'));
  const backup = `${candidate}-previous`;
  const names = (dir) =>
    fs.existsSync(dir)
      ? fs.readdirSync(dir).filter((n) => n.endsWith('.png'))
      : [];

  // Защищаем существующие эталоны от случайной замены пустым результатом.
  const before = names(target);
  const received = names(staging);
  if (!received.length) {
    fs.rmSync(candidate, { recursive: true });
    throw new Error(
      'Refusing to replace baselines with an empty snapshot set.',
    );
  }
  try {
    // При адресном обновлении сохраняем PNG остальных stories.
    // При полном обновлении собираем набор заново: устаревшие PNG в него не попадут.
    if (partial && fs.existsSync(target))
      fs.cpSync(target, candidate, { recursive: true });
    // Вместе с PNG переносится environment.json с параметрами их получения.
    fs.cpSync(staging, candidate, { recursive: true });

    // Сравниваем содержимое файлов для отчёта о добавленных, изменённых и удалённых PNG.
    const after = names(candidate);
    const hash = (file) =>
      crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
    const changes = {
      added: after.filter((n) => !before.includes(n)),
      changed: after.filter(
        (n) =>
          before.includes(n) &&
          hash(path.join(candidate, n)) !== hash(path.join(target, n)),
      ),
      removed: before.filter((n) => !after.includes(n)),
    };

    // Меняем каталог только после подготовки всего набора.
    // Если подстановка нового каталога не удастся, пытаемся вернуть прежний.
    if (fs.existsSync(target)) fs.renameSync(target, backup);
    try {
      fs.renameSync(candidate, target);
    } catch (error) {
      if (fs.existsSync(backup)) fs.renameSync(backup, target);
      throw error;
    }
    // После успешной замены временная резервная копия больше не нужна.
    fs.rmSync(backup, { recursive: true, force: true });
    return changes;
  } finally {
    // При ошибке подготовки удаляем только временный новый набор.
    fs.rmSync(candidate, { recursive: true, force: true });
  }
}
