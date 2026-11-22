/* eslint-disable import/extensions -- Эта CommonJS-точка входа Storybook доступна по имени файла. */
const fs = require('node:fs');
const path = require('node:path');
const StorybookEnvironment = require('@storybook/test-runner/playwright/custom-environment.js');

// Jest загружает это CommonJS-окружение внутри Docker через test-runner-jest.config.js.
// При ошибке render, play или preVisit хук postVisit не вызывается.
// Собираем диагностику этих сбоев через события тестового окружения Jest.
module.exports = class ScreenshotEnvironment extends StorybookEnvironment {
  async setup() {
    // Стандартное окружение создаёт браузер и страницу; затем подключаем сбор ошибок.
    await super.setup();
    this.browserErrors = [];
    // Записи консоли и исключения помогают разобрать сбой. Сами эти обработчики
    // не объявляют тест упавшим: результат определяют проверки и события Jest.
    this.global.page.on('pageerror', (error) =>
      this.browserErrors.push({
        type: 'pageerror',
        message: error.stack ?? error.message,
      }),
    );
    this.global.page.on('console', (message) => {
      if (message.type() === 'error')
        this.browserErrors.push({ type: 'console', message: message.text() });
    });
    // Дополнительно сохраняем необработанные Promise-ошибки и события window.error.
    await this.global.page.evaluate(() => {
      window.screenshotErrors = [];
      window.addEventListener('unhandledrejection', (event) =>
        window.screenshotErrors.push({
          type: 'unhandledrejection',
          message: String(event.reason?.stack ?? event.reason),
        }),
      );
      window.addEventListener('error', (event) =>
        window.screenshotErrors.push({
          type: 'error',
          message: event.error?.stack ?? event.message,
        }),
      );
    });
  }

  async handleTestEvent(event) {
    await super.handleTestEvent(event);
    const { env } = this.global.process;
    if (event.name === 'test_start') {
      // Страница переиспользуется: очищаем диагностику предыдущей story.
      // Текущий id затем задаст preVisit в test-runner.ts.
      delete env.SCREENSHOT_CURRENT_STORY;
      this.browserErrors = [];
      await this.global.page.evaluate(() => {
        window.screenshotErrors = [];
      });
    }
    // Обрабатываем только падение теста или хука, для которого уже известна story.
    if (
      !['test_fn_failure', 'hook_failure'].includes(event.name) ||
      !env.SCREENSHOT_CURRENT_STORY
    )
      return;
    const id = env.SCREENSHOT_CURRENT_STORY;
    const root = env.SCREENSHOT_ARTIFACTS_DIR;
    if (!root) return;
    const dir = path.join(root, id);
    fs.mkdirSync(dir, { recursive: true });
    const { page } = this.global;
    if (page && !page.isClosed()) {
      // Даже при раннем сбое сохраняем вид страницы. Ошибка этого дополнительного
      // снимка не должна подменить исходную причину падения теста.
      await page
        .screenshot({
          path: path.join(dir, 'failure-page.png'),
          timeout: 10000,
        })
        .catch(() => {});
    }
    // Дополняем запись из обычного захвата, если она успела появиться.
    // run.js использует этот JSON для сводного отчёта и проверки полноты результатов.
    fs.mkdirSync(path.join(root, 'stories'), { recursive: true });
    const file = path.join(root, 'stories', `${id}.json`);
    const previous = fs.existsSync(file)
      ? JSON.parse(fs.readFileSync(file, 'utf8'))
      : {};
    fs.writeFileSync(
      file,
      JSON.stringify(
        {
          ...previous,
          id,
          status: 'failed',
          error: String(event.error?.stack ?? event.error),
          browserErrors: this.browserErrors,
          windowErrors: await page
            .evaluate(() => window.screenshotErrors)
            .catch(() => []),
        },
        null,
        2,
      ),
    );
  }
};
