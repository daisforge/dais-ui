import{j as n}from"./react-D2T61mpp.js";import{c6 as o,c7 as t,c0 as d}from"./vendor-D0k-bL4H.js";import{T as c}from"./TableCanvas.domMetadata.stories-C5uJeQmx.js";import"./react-is-Clcustum.js";import"./styled-components-D8vUpZ79.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-C_wGLEtM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-EGzZCWcK.js";import"./FiltersActions-DFYvS86u.js";import"./IconButton-BwsXIhiD.js";import"./@salutejs/plasma-icons-B2gARaIt.js";import"./@salutejs/sdds-finai-9f2Z3gSc.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-BsIKPznQ.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-oT8vEc87.js";import"./TextField-D9SAbnRq.js";import"./sharedUtilsInputs-BpFlkwj3.js";import"./AnalyticalWidget-C_YOIqNy.js";import"./Collapse-DGqYHNo_.js";import"./Table-Bo3uZOST.js";import"./react-data-grid-p-wBMMSv.js";import"./TableTabs-bchgDMaK.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-WI14EhMn.js";import"./ListOfFilters-CTJFIH40.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C94N8voO.js";import"./EmptyState-CzQ_YjnV.js";import"./MassActions-D1nnBd7w.js";import"./Autocomplete-B7lvUJkZ.js";import"./TableGlide-DzeiQf28.js";import"./@glideappsfinal/glide-data-grid-uBYBN4Je.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BnEFvPen.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c,name:"Docs"}),`
`,n.jsx(e.h1,{id:"dommetadata",children:"DomMetadata"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"tableConfig.*.domMetadata"})}),`
`,n.jsx(e.p,{children:"Метки для автоматизированного тестирования, аналитики и онбординга."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"DomMetadata"}),` позволяет навешивать CSS-классы, data-атрибуты и обработчики кликов на интерактивные элементы таблицы.
Это нужно для:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Аналитики"})," — трекинг кликов по кнопкам таблицы"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автотестов"})," — поиск элементов по ",n.jsx(e.code,{children:"data-testid"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Онбординга"})," — привязка подсказок к конкретным элементам"]}),`
`]}),`
`,n.jsx(e.h2,{id:"поддерживаемые-элементы-classname-dataattributes",children:"Поддерживаемые элементы (className, dataAttributes)"}),`
`,n.jsxs(e.p,{children:["Следующие элементы поддерживают ",n.jsx(e.code,{children:"className"})," и ",n.jsx(e.code,{children:"dataAttributes"})," через ",n.jsx(e.code,{children:"domMetadata"}),":"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Control Block (панель управления):"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Редактирование"})," — ",n.jsx(e.code,{children:"tableConfig.editing.domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Полноэкранный режим"})," — ",n.jsx(e.code,{children:"tableConfig.fullScreenEnabled.domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Размер строки"})," — ",n.jsx(e.code,{children:"tableConfig.rowSize.domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Переключение вида"})," (строки/карточки) — ",n.jsx(e.code,{children:"tableConfig.view.domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Группировка строк"})," — ",n.jsx(e.code,{children:"tableConfig.rowsGrouping.domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поиск"})," — ",n.jsx(e.code,{children:"tableConfig.searching.domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Итоговые строки"})," — ",n.jsx(e.code,{children:"tableConfig.summaryRows.domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"KeyText"})," (controlBlock) — ",n.jsx(e.code,{children:"tableConfig.keyText.controlBlock.domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"KeyText"})," (sidebar) — ",n.jsx(e.code,{children:"tableConfig.keyText.sidebar.domMetadata"})]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Selecting (выбор строк):"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:'Чекбокс "Выбрать все"'})," (controlBlock) — ",n.jsx(e.code,{children:"tableConfig.selecting.controlBlock.domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Свитч в сайдбаре"})," — ",n.jsx(e.code,{children:"tableConfig.selecting.sidebar.domMetadata"})]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Sidebar (правая панель):"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Табы сайдбара"})," — ",n.jsx(e.code,{children:"tableConfig.sidebarConfig.defaultTabs[].domMetadata"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Подтабы настроек"})," (Фильтры, Столбцы) — ",n.jsx(e.code,{children:"tableConfig.sidebarConfig.defaultTabs[{id:'filtering'|'columns'}].domMetadata"})]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Другие:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кнопка сворачивания таблицы"})," — ",n.jsx(e.code,{children:"tableConfig.collapse.domMetadata"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"элементы-с-расширенным-onclick-classname-dataattributes-onclick--detail",children:"Элементы с расширенным onClick (className, dataAttributes, onClick + detail)"}),`
`,n.jsxs(e.p,{children:["В дополнение к ",n.jsx(e.code,{children:"className"})," и ",n.jsx(e.code,{children:"dataAttributes"}),", следующие элементы поддерживают ",n.jsx(e.code,{children:"onClick"})," с контекстом ",n.jsx(e.code,{children:"detail"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Группировать"})," (чекбоксы, сброс) — ",n.jsx(e.code,{children:"tableConfig.rowsGrouping.domMetadata"})," — actions: ",n.jsx(e.code,{children:"toggle-group"}),", ",n.jsx(e.code,{children:"reset-groups"}),", ",n.jsx(e.code,{children:"custom-item-select"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кнопка размера строки"})," — ",n.jsx(e.code,{children:"tableConfig.rowSize.domMetadata"})," — action: ",n.jsx(e.code,{children:"change-row-size"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Шестеренка настроек"})," — ",n.jsx(e.code,{children:"tableConfig.sidebarConfig.defaultTabs[{id:'tableSettings'}].domMetadata"})," — action: ",n.jsx(e.code,{children:"toggle-sidebar-tab"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Крестик закрыть сайдбар"})," — тот же ",n.jsx(e.code,{children:"domMetadata"})," таба — action: ",n.jsx(e.code,{children:"close-sidebar"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Закрепить столбец"})," — ",n.jsx(e.code,{children:"tableConfig.columnsControl.pinDomMetadata"})," — actions: ",n.jsx(e.code,{children:"pin-column"}),", ",n.jsx(e.code,{children:"unpin-column"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Свитчер видимости столбца"})," — ",n.jsx(e.code,{children:"tableConfig.columnsControl.switchDomMetadata"})," — actions: ",n.jsx(e.code,{children:"show-column"}),", ",n.jsx(e.code,{children:"hide-column"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"onclick",children:"onClick"}),`
`,n.jsxs(e.p,{children:["Обработчик ",n.jsx(e.code,{children:"onClick"})," вызывается ",n.jsx(e.strong,{children:"после"})," основной логики элемента. Он не мешает работе кнопки и не вызывает ",n.jsx(e.code,{children:"stopPropagation"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`onClick?: (
  e?: React.MouseEvent<HTMLElement>,  // MouseEvent (undefined для элементов внутри Dropdown)
  detail?: Record<string, unknown>     // контекст: action, columnKey, size и др.
) => void;
`})}),`
`,n.jsx(e.h3,{id:"примеры-detail",children:"Примеры detail"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// Группировка
{ action: 'toggle-group', columnKey: 'status' }
{ action: 'reset-groups' }

// Размер строки
{ action: 'change-row-size', size: 'medium' }

// Сайдбар
{ action: 'toggle-sidebar-tab', tabId: 'tableSettings' }
{ action: 'close-sidebar' }

// Столбцы
{ action: 'pin-column', columnKey: 'name' }
{ action: 'unpin-column', columnKey: 'name' }
{ action: 'hide-column', columnKey: 'name' }
{ action: 'show-column', columnKey: 'name' }
`})}),`
`,n.jsxs(e.p,{children:["Подробнее о типах — в разделе ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-dommetadata-api--docs",children:"API"}),"."]}),`
`,n.jsx(d,{})]})}function O(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{O as default};
