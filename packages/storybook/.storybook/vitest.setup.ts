// Setup скриншотных тестов (vitest.screenshot.config.ts). Раз в файле есть
// setProjectAnnotations, addon-vitest не подключает превью сам — делаем это здесь,
// добавляя к нему хуки, которые нужны только в тестах.
import { setProjectAnnotations } from '@storybook/react-vite';
import { beforeAll } from 'vitest';

import * as previewAnnotations from './preview';
import { screenshotAfterEach } from './screenshot/afterEach';
import {
  setupStorybookHead,
  storybookFrameBeforeEach,
} from './screenshot/storybookFrame';

beforeAll(setupStorybookHead);

setProjectAnnotations([
  previewAnnotations,
  { beforeEach: storybookFrameBeforeEach, afterEach: screenshotAfterEach },
]);
