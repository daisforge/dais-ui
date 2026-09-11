import{j as n}from"./react-D2T61mpp.js";import{cc as o,cd as t,c6 as d}from"./vendor-BSh-q9Ou.js";import{T as c}from"./TableCanvas.domMetadata.stories-Dp8U-yew.js";import"./react-is-Clcustum.js";import"./styled-components-CbgoXU45.js";import"./@tanstack/react-virtual-D4DYTxIh.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-CavNiRmo.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D9NWFDEQ.js";import"./FiltersActions-DWCdugaM.js";import"./IconButton-CJw7yEkJ.js";import"./@salutejs/plasma-icons-BrsFlXba.js";import"./@salutejs/sdds-finai-BkbdvS5g.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CnArmH7g.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Bg7shm0b.js";import"./TextField-VB4WAPL1.js";import"./sharedUtilsInputs-COjFvFwZ.js";import"./AnalyticalWidget-BTQ0VNFn.js";import"./Collapse-DJBsDA9p.js";import"./Table-rHnSGp-o.js";import"./react-data-grid-CC8ALFI1.js";import"./TableTabs-RalHP3o0.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Col2MVTv.js";import"./ListOfFilters-D8GazY7Y.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-v4lYr5cP.js";import"./EmptyState-G7_pvWiP.js";import"./MassActions-DJUm5kFh.js";import"./Autocomplete-C0nsjXn5.js";import"./TableGlide-BcKEiC_p.js";import"./@glideappsfinal/glide-data-grid-XDUil1-6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DWE_MJAa.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c,name:"Docs"}),`
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
`,n.jsx(d,{})]})}function Q(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{Q as default};
