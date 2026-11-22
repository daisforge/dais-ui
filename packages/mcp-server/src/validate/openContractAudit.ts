/** Причины открытости проверены по исходникам SDDS 0.369.0 и ui-kit. */
export const OPEN_CONTRACT_GROUPS = [
  {
    reason:
      'SDDS PropsType добавляет строковую сигнатуру; именованные поля сохраняются.',
    source: 'node_modules/@salutejs/plasma-new-hope/types/engines/types.d.ts',
    names: [
      'AvatarGroup',
      'DrawerContent',
      'DrawerFooter',
      'DrawerHeader',
      'Image',
      'ToolbarDivider',
    ],
  },
  {
    reason:
      'BoxProps наследует полиморфный ComponentProps<typeof Box>; явные поля пересечения сохраняются.',
    source: 'packages/ui-kit/src/components/Box/Box.tsx',
    names: [
      'DrawerDF.Content',
      'DrawerDF.Footer',
      'DrawerDF.Header',
      'DrawerDFContent',
      'DrawerDFFooter',
      'DrawerDFHeader',
      'PopoverDF.Body',
      'PopoverDF.Footer',
      'PopoverDFBody',
      'PopoverDFFooter',
      'PopupDF.Body',
      'PopupDF.Footer',
      'PopupDFBody',
      'PopupDFFooter',
      'TableTabs.TabPanel',
      'Widget.Footer',
      'Widget.ServiceButtons',
      'WidgetFooter',
      'WidgetServiceButtons',
    ],
  },
  {
    reason:
      'Omit<BoxProps, children> теряет базовые именованные ключи из-за keyof=string; добавленные поля проверяемы.',
    source: 'packages/ui-kit/src/components/Box/Box.tsx',
    names: [
      'ModalDF.Footer',
      'ModalDF.Header',
      'ModalDFConfirmation.Footer',
      'ModalDFConfirmationFooter',
      'ModalDFFooter',
      'ModalDFHeader',
      'PopoverDF.Header',
      'PopoverDFHeader',
      'PopupDF.Header',
      'PopupDFHeader',
      'Widget.Header',
      'WidgetHeader',
    ],
  },
  {
    reason:
      'ComponentProps от styled-контейнера стирает поля, включая hasBackground.',
    source:
      'packages/ui-kit/src/components/ModalDF/components/ServiceButtons.tsx',
    names: ['ModalDF.ServiceButtons', 'ModalDFServiceButtons'],
  },
  {
    reason:
      'Omit от styled ChipGroup оставляет открытую сигнатуру; chips/opened/commonSize/commonView объявлены явно.',
    source:
      'packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.types.ts',
    names: ['AnalyticalWidget.Chips'],
  },
  {
    reason:
      'styled(...).attrs стирает собственные props до индексной сигнатуры; проверяем также именованные Props в исходнике.',
    source: 'packages/ui-kit/src/layouts/FiltersActions/components',
    names: [
      'FiltersActions.FiltersButton',
      'FiltersActions.TabItem',
      'FiltersActions.Tabs',
      'FiltersActionsFiltersButton',
      'FiltersActionsTabItem',
      'FiltersActionsTabs',
    ],
  },
] as const;

export const OPEN_CONTRACT_AUDIT = new Map<
  string,
  { reason: string; source: string }
>(
  OPEN_CONTRACT_GROUPS.flatMap(({ names, reason, source }) =>
    names.map((name) => [name, { reason, source }] as const),
  ),
);

/** Только для контрактов, у которых styled стёр поля публичной сигнатуры. */
export const DECLARED_PROPS_FALLBACKS: Record<
  string,
  { file: string; type: string }
> = Object.fromEntries(
  ['FiltersButton', 'TabItem', 'Tabs'].flatMap((part) => {
    const value = {
      file: `layouts/FiltersActions/components/${
        part === 'FiltersButton' ? 'FiltersButton' : 'Tabs'
      }.tsx`,
      type: `FiltersActions${part}Props`,
    };
    return [
      [`FiltersActions.${part}`, value],
      [`FiltersActions${part}`, value],
    ];
  }),
);
