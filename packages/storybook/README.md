# Storybook

Сценарии и документация компонентов находятся в `src/stories/`. Команды ниже
выполняются из корня репозитория.

```bash
npm run storybook                    # Локальный Storybook на порту 4400
npm run screenshot:test -- TableCanvas # Проверка выбранных story-файлов в Docker
```

[Инструкция по скриншотным тестам](test/screenshot-tests.md) описывает обновление
эталонов, настройки stories, разбор ошибок и ручной GitHub Actions. Для
скриншотных тестов отдельный сервер Storybook не нужен.
