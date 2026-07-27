import type { Preview } from '@storybook/react';
import storybookTheme from './theme';

import { mswInitialize, mswLoader } from '../src/msw';
import { previewSourceTransform } from './sourceCode/previewSourceTransform';
import { globalTypeTheme, withTheme } from './decoratorThemes';
import { docsPage } from './docsPage';

// Workaround: to make VoiceOver read russian text properly
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', 'ru');
}

mswInitialize();

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: '<= 1280',
          styles: {
            width: '1280px',
            height: '900px',
          },
          type: 'desktop',
        },
      },
    },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      hideNoControlsWarning: true,
    },
    docs: {
      theme: storybookTheme,
      // TODO compare with old storybook
      page: docsPage,
      source: {
        transform: previewSourceTransform,
      },
    },
    options: {
      storySort: {
        order: [
          'Images',
          'SDDS',
          'Локальные компоненты',
          'Композиции',
          [
            'Table',
            [
              'API',
              ['Table', 'tableConfig', 'columnConfig'],
              'SimpleTable',
              'MultipleFeatures',
              ['Simple', 'Custom'],
              'Filtering',
              'Sorting',
              ['Simple', 'Manual'],
              'RowsGrouping',
              ['API и пример простой реализации'],
            ],
          ],
        ],
      },
    },
  },
  loaders: [mswLoader],
  globalTypes: {
    theme: globalTypeTheme,
  },
  decorators: [withTheme],

  tags: ['autodocs'],
};

export default preview;
