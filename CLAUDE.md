@AGENTS.md

## Claude Code

- Скиллы доступны через Skill из `.claude/skills` — это копии `.agents/skills`.
  Правь источник в `.agents/skills` и запускай `npm run skills:sync`.
- Общие для команды хуки и разрешения — `.claude/settings.json`; личные
  настройки — в `.claude/settings.local.json` (не коммитится).
- Хук `scripts/agent-hooks/check-changed.mjs` в конце хода проверяет ESLint и
  typecheck изменённого за ход. Если он вернул ошибки — исправь причину, а не
  обходи проверку.
