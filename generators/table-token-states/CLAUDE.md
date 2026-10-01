# Для Claude и для людей

Это пакет генератора состояний цветов таблицы Table Canvas (dais-ui). Начни с `README.md` — там модель, формулы, API и порядок подключения.

- Источник истины — `code/table-token-states.ts` (формулы) и `code/table-token-sources.ts` (темы, токены, карта ключей).
- Готовый результат — `code/table-token-states.output.json` и `docs/table-token-sources.md`.
- Перед любым изменением формул или карты: `npm install && npm test && npm run typecheck`, после — `npm run generate`.
- Демо — `demo/table-states-prototype.html`, открывается локально.
- История решений в архив не включена намеренно: здесь только итоговое состояние на 18.09.2026.
