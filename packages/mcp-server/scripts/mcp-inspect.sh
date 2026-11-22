#!/usr/bin/env bash
# Временный запуск @modelcontextprotocol/inspector.
# inspector и его optional @rolldown/binding-* (см. package.json "//") требуют node >=22.12,
# а весь остальной репозиторий живёт на node 20 — поэтому переключаем ноду только на время
# этого скрипта (через nvm, если он есть), а сам inspector ставится через npx во временный
# кэш и node_modules/package-lock.json пакета не трогает.
set -euo pipefail

REQUIRED_NODE="22.19.0"

if [ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]; then
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  # shellcheck disable=SC1091
  source "$NVM_DIR/nvm.sh"
  nvm install "$REQUIRED_NODE" >/dev/null 2>&1 || true
  nvm use "$REQUIRED_NODE"
else
  echo "nvm не найден по \$NVM_DIR/\$HOME/.nvm — переключи node на >=22.12 вручную (нужна для mcp:inspect)." >&2
fi

npm run mcp:inspect:check-node
npm run build
npx -y @modelcontextprotocol/inspector@^2.0.0 node ./dist/server.js
