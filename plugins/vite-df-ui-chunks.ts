import { Plugin } from 'vite';

import {
  checkChunkPurity,
  checkRestrictedImports,
  RestrictedImport,
} from './vite-df-ui-chunks.checks';

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
  // Общие контролы в отдельных чанках позволяют TableCanvas обходиться без
  // CSS старой таблицы. Это работает для ESM с tree shaking и отдельной точки
  // входа TableCanvas в CJS. Корневой index.cjs загружает также старую Table.
  {
    chunkName: 'Combobox',
    modulePaths: ['packages/ui-kit/src/components/Combobox/'],
  },
  {
    chunkName: 'Switch',
    modulePaths: ['packages/ui-kit/src/components/Switch/'],
  },
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
    // Сгенерированные цвета состояний таблицы берёт и старая Table. Без
    // отдельного чанка Table загружала весь TableGlide вместе с его CSS.
    // Стоит ДО TableGlide: чанк выбирается по первому совпадению пути
    chunkName: 'TableStateColors',
    modulePaths: [
      'packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts',
    ],
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
    chunkName: 'Stories',
    modulePaths: ['packages/ui-kit/src/components/Stories/'],
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
    chunkName: 'AiAgentPopup',
    modulePaths: ['packages/ui-kit/src/components/AiAgentPopup/'],
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
    chunkName: 'PageLoader',
    modulePaths: ['packages/ui-kit/src/components/PageLoader/'],
  },
  {
    chunkName: 'TypographyWithCollapse',
    modulePaths: ['packages/ui-kit/src/components/TypographyWithCollapse/'],
  },
  // Typography и Tooltip используются почти везде. Без своих чанков Rollup
  // клал их в AiAgentPopup, и любой импорт Typography загружал AiAgentPopup
  {
    chunkName: 'Typography',
    modulePaths: ['packages/ui-kit/src/components/Typography/'],
  },
  {
    chunkName: 'Tooltip',
    modulePaths: ['packages/ui-kit/src/components/Tooltip/'],
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
    chunkName: 'FormSegments',
    modulePaths: ['packages/ui-kit/src/formComponents/FormSegments/'],
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
  {
    // Используют TableCanvas и TableGlide. Без своего чанка лежал в TableGlide
    chunkName: 'sharedUtilsSearch',
    modulePaths: ['packages/ui-kit/src/shared/utils/search/'],
  },
  {
    // Общая сборка resizable-конфига атомарного Popup: используют PopupDF
    // и AiAgentPopup, отдельный чанк, чтобы они не тянули друг друга
    chunkName: 'sharedUtilsResizable',
    modulePaths: ['packages/ui-kit/src/shared/utils/resizable/'],
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
  ...MANUAL_UIKIT_COMP_CHUNKS,
  ...VENDOR_CHUNK,
] as const;

const LEGACY_TABLE_ENTRIES = [
  'components/Table/',
  'components/TableContract/',
  // TODO: MassActions импортирует TableDropdown и AnimatedCounter из Table,
  // а Table импортирует MassActions (циклические чанки). Убрать после выноса
  // общих частей в отдельный модуль
  'components/MassActions/',
];
const GLIDE_TABLE_ENTRIES = [
  'components/TableGlide/',
  'components/TableCanvas/',
];
const GRID_DND_ENTRIES = ['components/GridDND/'];

/**
 * Тяжёлые чанки и CSS из node_modules: какие точки входа могут их загружать.
 * Остальные точки входа получат ошибку сборки с путём, по которому загрузка
 * произошла. Корневая точка входа index разрешена всегда.
 */
export const RESTRICTED_IMPORTS: readonly RestrictedImport[] = [
  {
    target: 'Table',
    allowedEntries: LEGACY_TABLE_ENTRIES,
    reason: 'старая таблица на react-data-grid',
  },
  {
    target: 'react-data-grid/lib/styles.css',
    allowedEntries: LEGACY_TABLE_ENTRIES,
    reason:
      'CSS старой таблицы, при повторной загрузке дублируется на странице',
  },
  {
    target: 'TableGlide',
    allowedEntries: GLIDE_TABLE_ENTRIES,
    reason: 'таблица на glide-data-grid',
  },
  {
    target: '@daisforge/glide-data-grid/dist/index.css',
    allowedEntries: GLIDE_TABLE_ENTRIES,
    reason: 'CSS glide-data-grid',
  },
  {
    target: 'GridDND',
    allowedEntries: GRID_DND_ENTRIES,
    reason: 'сетка с drag-and-drop',
  },
  {
    target: 'react-grid-layout/css/styles.css',
    allowedEntries: GRID_DND_ENTRIES,
    reason: 'CSS react-grid-layout',
  },
];

const calledChunks = new Set();
// const notCalledChunks = () =>
//   ALL_MANUAL_UIKIT_CHUNKS.filter(
//     (m) => !new Set(calledChunks).has(m.chunkName)
//   ).map((m) => m.chunkName);

const manualChunks = (id: string) => {
  const notCalledChunks = () =>
    ALL_MANUAL_UIKIT_CHUNKS.filter(
      (m) => !new Set(calledChunks).has(m.chunkName),
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
    generateBundle({ format }, bundle) {
      const errors = [
        ...checkChunkPurity({
          bundle,
          manualChunks: MANUAL_UIKIT_COMP_CHUNKS,
          getModuleInfo: (id) => this.getModuleInfo(id),
        }),
        ...checkRestrictedImports(
          { bundle, manualChunks: MANUAL_UIKIT_COMP_CHUNKS },
          RESTRICTED_IMPORTS,
        ),
      ];
      if (errors.length) {
        this.error(
          `Граф чанков (${format}) нарушает правила изоляции:\n- ${errors.join(
            '\n- ',
          )}`,
        );
      }
    },
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
