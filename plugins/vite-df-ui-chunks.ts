import { Plugin } from 'vite';

/**
 * modulePaths - должен заканчиваться на / чтобы исключить случайный перехват чужих чанков
 * @example modulePaths='packages/ui-kit/src/components/Table' во время
 * проверок пути будет перехватывать чанки modulePaths='packages/ui-kit/src/components/TableCanvas/'
 * так как проверка путей ведется через includes
 *
 * слэш в конце решает проблему и дает уникальность для каждого modulePath
 * */
export const MANUAL_UIKIT_COMP_CHUNKS = [
  // mixin chunks
  {
    chunkName: 'mixins',
    modulePaths: ['packages/ui-kit/src/mixins/'],
  },
  // components chunks
  {
    chunkName: 'Table',
    modulePaths: ['packages/ui-kit/src/components/Table/'],
  },
  {
    chunkName: 'TableCanvas',
    modulePaths: ['packages/ui-kit/src/components/TableCanvas/'],
  },
  {
    chunkName: 'TableTabs',
    modulePaths: ['packages/ui-kit/src/components/TableTabs/'],
  },
  {
    // Общий слой констант для TableCanvas и TableTabs. ОТДЕЛЬНЫЙ чанк, чтобы
    // оба брали константы отсюда, а не друг у друга (иначе меж-чанковый цикл).
    chunkName: 'TableCanvasSharedConstants',
    modulePaths: ['packages/ui-kit/src/components/TableCanvasSharedConstants/'],
  },
  {
    chunkName: 'TableGlide',
    modulePaths: ['packages/ui-kit/src/components/TableGlide/'],
  },
  {
    chunkName: 'TableContract',
    modulePaths: ['packages/ui-kit/src/components/TableContract/'],
  },
  {
    chunkName: 'StoriesUtils',
    modulePaths: ['packages/ui-kit/src/components/StoriesUtils/'],
  },
  {
    chunkName: 'Box',
    modulePaths: ['packages/ui-kit/src/components/Box/'],
  },
  {
    chunkName: 'BlockGradientScroll',
    modulePaths: ['packages/ui-kit/src/components/BlockGradientScroll/'],
  },
  {
    chunkName: 'DrawerDF',
    modulePaths: ['packages/ui-kit/src/components/DrawerDF/'],
  },
  {
    chunkName: 'DatePicker',
    modulePaths: ['packages/ui-kit/src/components/DatePicker/'],
  },
  {
    chunkName: 'ModalDF',
    modulePaths: ['packages/ui-kit/src/components/ModalDF/'],
  },
  {
    chunkName: 'PopoverBeta',
    modulePaths: ['packages/ui-kit/src/components/PopoverBeta/'],
  },
  {
    chunkName: 'PopoverDF',
    modulePaths: ['packages/ui-kit/src/components/PopoverDF/'],
  },
  {
    chunkName: 'ModalDFConfirmation',
    modulePaths: ['packages/ui-kit/src/components/ModalDFConfirmation/'],
  },
  {
    chunkName: 'Popup',
    modulePaths: ['packages/ui-kit/src/components/Popup/'],
  },
  {
    chunkName: 'PopupDF',
    modulePaths: ['packages/ui-kit/src/components/PopupDF/'],
  },
  {
    chunkName: 'Collapse',
    modulePaths: ['packages/ui-kit/src/components/Collapse/'],
  },
  {
    chunkName: 'AiAgentPopover',
    modulePaths: ['packages/ui-kit/src/components/AiAgentPopover/'],
  },
  {
    chunkName: 'TourWidget',
    modulePaths: ['packages/ui-kit/src/components/TourWidget/'],
  },
  {
    chunkName: 'ApprovalCenter',
    modulePaths: ['packages/ui-kit/src/components/ApprovalCenter/'],
  },
  {
    chunkName: 'EmptyState',
    modulePaths: ['packages/ui-kit/src/components/EmptyState/'],
  },
  {
    chunkName: 'AnalyticalWidget',
    modulePaths: ['packages/ui-kit/src/components/AnalyticalWidget/'],
  },
  {
    chunkName: 'Autocomplete',
    modulePaths: ['packages/ui-kit/src/components/Autocomplete/'],
  },
  {
    chunkName: 'AutocompleteSearch',
    modulePaths: ['packages/ui-kit/src/components/AutocompleteSearch/'],
  },
  {
    chunkName: 'TextArea',
    modulePaths: ['packages/ui-kit/src/components/TextArea/'],
  },
  {
    chunkName: 'TextField',
    modulePaths: ['packages/ui-kit/src/components/TextField/'],
  },
  {
    chunkName: 'NumberFormat',
    modulePaths: ['packages/ui-kit/src/components/NumberFormat/'],
  },
  {
    chunkName: 'NumberFormatAmount',
    modulePaths: ['packages/ui-kit/src/components/NumberFormatAmount/'],
  },

  {
    chunkName: 'ListOfFilters',
    modulePaths: ['packages/ui-kit/src/components/ListOfFilters/'],
  },
  {
    chunkName: 'LeftPanel',
    modulePaths: ['packages/ui-kit/src/components/LeftPanel/'],
  },
  {
    chunkName: 'BlockTitle',
    modulePaths: ['packages/ui-kit/src/components/BlockTitle/'],
  },
  {
    chunkName: 'IconSvgSprite',
    modulePaths: ['packages/ui-kit/src/components/IconSvgSprite/'],
  },
  {
    chunkName: 'SplitView',
    modulePaths: ['packages/ui-kit/src/components/SplitView/'],
  },
  {
    chunkName: 'Widget',
    modulePaths: ['packages/ui-kit/src/components/Widget/'],
  },
  {
    chunkName: 'GridDND',
    modulePaths: ['packages/ui-kit/src/components/GridDND/'],
  },
  {
    chunkName: 'IconButton',
    modulePaths: ['packages/ui-kit/src/components/IconButton/'],
  },
  {
    chunkName: 'PageTitle',
    modulePaths: ['packages/ui-kit/src/components/PageTitle/'],
  },
  {
    chunkName: 'Notification',
    modulePaths: ['packages/ui-kit/src/components/Notification/'],
  },
  // form components chunks
  {
    chunkName: 'FormAutocomplete',
    modulePaths: ['packages/ui-kit/src/formComponents/FormAutocomplete/'],
  },
  {
    chunkName: 'FormCombobox',
    modulePaths: ['packages/ui-kit/src/formComponents/FormCombobox/'],
  },
  {
    chunkName: 'FormMask',
    modulePaths: ['packages/ui-kit/src/formComponents/FormMask/'],
  },
  {
    chunkName: 'FormSelect',
    modulePaths: ['packages/ui-kit/src/formComponents/FormSelect/'],
  },
  {
    chunkName: 'FormSwitch',
    modulePaths: ['packages/ui-kit/src/formComponents/FormSwitch/'],
  },
  {
    chunkName: 'FormCheckbox',
    modulePaths: ['packages/ui-kit/src/formComponents/FormCheckbox/'],
  },
  {
    chunkName: 'FormTextArea',
    modulePaths: ['packages/ui-kit/src/formComponents/FormTextArea/'],
  },
  {
    chunkName: 'FormTextField',
    modulePaths: ['packages/ui-kit/src/formComponents/FormTextField/'],
  },
  {
    chunkName: 'FormNumberFormat',
    modulePaths: ['packages/ui-kit/src/formComponents/FormNumberFormat/'],
  },
  {
    chunkName: 'FormDatePickers',
    modulePaths: ['packages/ui-kit/src/formComponents/FormDatePickers/'],
  },
  {
    chunkName: 'FormRadioGroupBox',
    modulePaths: ['packages/ui-kit/src/formComponents/FormRadioGroupBox/'],
  },
  {
    chunkName: 'FormUtils',
    modulePaths: ['packages/ui-kit/src/formComponents/utils/'],
  },
  {
    chunkName: 'MassActions',
    modulePaths: ['packages/ui-kit/src/components/MassActions/'],
  },
  {
    chunkName: 'MassActionsStatic',
    modulePaths: ['packages/ui-kit/src/components/MassActionsStatic/'],
  },
  // constants chunks
  {
    chunkName: 'constants',
    modulePaths: ['packages/ui-kit/src/constants/'],
  },
  // layouts chunks
  {
    chunkName: 'Container',
    modulePaths: ['packages/ui-kit/src/layouts/Container/'],
  },
  {
    chunkName: 'ErrorPage',
    modulePaths: ['packages/ui-kit/src/layouts/ErrorPage/'],
  },
  {
    chunkName: 'FiltersActions',
    modulePaths: ['packages/ui-kit/src/layouts/FiltersActions/'],
  },
  {
    chunkName: 'Layout',
    modulePaths: ['packages/ui-kit/src/layouts/Layout/'],
  },
  {
    chunkName: 'PageLayout',
    modulePaths: ['packages/ui-kit/src/layouts/PageLayout/'],
  },
  // shared
  {
    chunkName: 'sharedUiSearch',
    modulePaths: ['packages/ui-kit/src/shared/ui/Search/'],
  },
  {
    chunkName: 'sharedUtilsInputs',
    modulePaths: ['packages/ui-kit/src/shared/utils/inputs/'],
  },
  {
    chunkName: 'sharedUtilsDebug',
    modulePaths: ['packages/ui-kit/src/shared/utils/debug/'],
  },
  {
    chunkName: 'sharedUtilsCopy',
    modulePaths: ['packages/ui-kit/src/shared/utils/copy/'],
  },
  // utils chunk
  {
    chunkName: 'utils',
    modulePaths: ['packages/ui-kit/src/utils/'],
  },
  // styles chunk
  {
    chunkName: 'styles',
    modulePaths: ['packages/ui-kit/src/styles/'],
  },
] as const;

/** Часть других пакетов, которые мы сохраняем как наш чанк, чтобы выцепить из др либы нужную нам часть.
 *  Другая библиотека вся не тянется
 */

export const EXTERNAL_PACKAGE_MODULES_AS_CHUNK = [
  {
    chunkName: 'EXTERNAL_PACKAGE_MODULE_sdds_finai_high_contrast__light_theme',
    modulePaths: [
      '@salutejs-ds/sdds_finai_high_contrast/theme/themes/sdds_finai_high_contrast__light.js',
    ],
  },
] as const;

/** Нежелательный чанк.
 * Что подпадает под этот чанк - мы устраняем с помощью "отметить пакет как external deps"
 * это делается в {@link  [ui-kit/vite.config.ts](../packages/ui-kit/vite.config.ts)} в config.rollupOptions.external
 */
export const VENDOR_CHUNK = [
  {
    chunkName: 'vendor',
    modulePaths: ['node_modules'],
  },
] as const;

export const ALL_MANUAL_UIKIT_CHUNKS = [
  ...EXTERNAL_PACKAGE_MODULES_AS_CHUNK,
  ...MANUAL_UIKIT_COMP_CHUNKS,
  ...VENDOR_CHUNK,
] as const;

const calledChunks = new Set();
// const notCalledChunks = () =>
//   ALL_MANUAL_UIKIT_CHUNKS.filter(
//     (m) => !new Set(calledChunks).has(m.chunkName)
//   ).map((m) => m.chunkName);

const manualChunks = (id: string) => {
  const notCalledChunks = () =>
    ALL_MANUAL_UIKIT_CHUNKS.filter(
      (m) => !new Set(calledChunks).has(m.chunkName)
    ).map((m) => m.chunkName);

  let currentManualChunkName;
  // eslint-disable-next-line no-restricted-syntax
  for (const el of ALL_MANUAL_UIKIT_CHUNKS) {
    if (el.modulePaths.some((path) => id.includes(path))) {
      currentManualChunkName = el.chunkName;
      calledChunks.add(currentManualChunkName);
      // // раскомментировать для выявления вендорных чанков во время сборки
      if (currentManualChunkName === 'vendor') {
        // eslint-disable-next-line no-console
        console.log(':::---------id: ', id);
      }

      // // раскомментировать для выявления чанков. которые перехвачены другими чанками во время сборки (должен оставаться только vendor)
      // eslint-disable-next-line no-console
      console.log('========notCalledChunks():', notCalledChunks());

      return currentManualChunkName;
    }
  }

  // // раскомментировать для выявления чанков. которые перехвачены другими чанками во время сборки (должен оставаться только vendor)
  // eslint-disable-next-line no-console
  console.log('========notCalledChunks():', notCalledChunks());

  return undefined;
};

export function viteDFUIChunks(): Plugin {
  return {
    name: 'vite-df-ui-chunks',
    config(_config) {
      return {
        build: {
          rollupOptions: {
            output: {
              manualChunks,
            },
          },
        },
      };
    },
  };
}
