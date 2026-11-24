@AGENTS.md

## Claude Code

- Скиллы из `.agents/skills` доступны через Skill (`.claude/skills` — симлинк).
- Общие для команды хуки и разрешения — `.claude/settings.json`; личные
  настройки — в `.claude/settings.local.json` (не коммитится).
- Stop-хук `scripts/agent-hooks/check-changed.mjs` в конце хода запускает ESLint
  и typecheck для изменённых TS-файлов. Если он вернул ошибки — исправь причину,
  а не обходи проверку.
