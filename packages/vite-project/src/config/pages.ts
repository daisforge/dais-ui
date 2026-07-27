import { lazy } from 'react';

export const pages = {
  combobox: lazy(() =>
    import('../pages/Combobox').then((m) => ({
      default: m.ComboboxExample,
    }))
  ),
  select: lazy(() =>
    import('../pages/Select').then((m) => ({ default: m.SelectExample }))
  ),
  button: lazy(() =>
    import('../pages/Button').then((m) => ({ default: m.ButtonExample }))
  ),
  table: lazy(() =>
    import('../pages/Table').then((m) => ({ default: m.TableExample }))
  ),
  popoverBeta: lazy(() =>
    import('../pages/PopoverBeta').then((m) => ({
      default: m.PopoverBetaExample,
    }))
  ),
  tableCanvasColumnsGroup: lazy(() =>
    import('../pages/TableCanvasColumnsGroup').then((m) => ({
      default: m.TableCanvasColumnsGroup,
    }))
  ),
  tableCanvasTooltip: lazy(() =>
    import('../pages/TableCanvasTooltip').then((m) => ({
      default: m.TableCanvasTooltipExamples,
    }))
  ),
  splitView: lazy(() => import('../pages/SplitViewAndListOfFilters')),
  pageTitle: lazy(() =>
    import('../pages/PageTitle').then((m) => ({
      default: m.PageTitleExample,
    }))
  ),
  tableCanvasFiltering: lazy(() =>
    import('../pages/TableCanvasFiltering').then((m) => ({
      default: m.TableCanvasFilteringExamples,
    }))
  ),
  tree: lazy(() =>
    import('../pages/Tree').then((m) => ({
      default: m.TreeExample,
    }))
  ),
  numberFormatAmount: lazy(() =>
    import('../pages/NumberFormatAmount').then((m) => ({
      default: m.NumberFormatAmountExample,
    }))
  ),
} as const;

export type PageKey = keyof typeof pages;

export const pageLabels: Record<PageKey, string> = {
  combobox: 'Combobox',
  select: 'Select',
  button: 'Button',
  table: 'Table',
  popoverBeta: 'Popover Beta',
  tableCanvasColumnsGroup: 'TableCanvas Columns Group',
  tableCanvasTooltip: 'TableCanvas Tooltip',
  splitView: 'SplitView & ListOfFilters',
  pageTitle: 'PageTitle',
  tableCanvasFiltering: 'TableCanvas Filtering',
  tree: 'Tree',
  numberFormatAmount: 'NumberFormatAmount',
};

export const pageIcons: Record<PageKey, string> = {
  combobox: '~',
  select: '>',
  button: '#',
  table: '|',
  popoverBeta: '^',
  tableCanvasColumnsGroup: '%',
  tableCanvasTooltip: '?',
  splitView: '/',
  pageTitle: 'T',
  tableCanvasFiltering: 'F',
  tree: 'Tree',
  numberFormatAmount: '$',
};

/** Страницы, закреплённые в шапке навигации */
export const pinnedPages: PageKey[] = ['combobox', 'select', 'button', 'table'];
