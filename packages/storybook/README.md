# storybook

Storybook библиотеки `@daisforge/ui`.

## Скриншотные тесты

Истории запускаются как тесты Vitest (browser mode) через `@storybook/addon-vitest`,
см. `vitest.screenshot.config.ts` и `.storybook/screenshot/`:

```bash
npm run screenshot:test                          # из корня репозитория
npm run screenshot:test:one -- AnalyticalWidget  # один файл историй
npm run screenshot:update                        # перезаписать снапшоты
```
