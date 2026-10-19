import{j as n}from"./react-D2T61mpp.js";import{cf as o,cg as d,c9 as t}from"./vendor-2EFGsDAW.js";import{T as c}from"./Table.domMetadata.stories-SCqZ4hBS.js";import"./react-is-Clcustum.js";import"./styled-components-CkGUZS6l.js";import"./@tanstack/react-virtual-CgKIdlLV.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C0cS6_z6.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-CYJ23fFg.js";import"./FiltersActions-BdWuyKp2.js";import"./IconButton-BPBecMcD.js";import"./@salutejs/plasma-icons-DjOk_Iqv.js";import"./@salutejs/sdds-finai-Df8ub7bm.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DorKzGa8.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Cu8qm5st.js";import"./TextField-BWWrAgpe.js";import"./sharedUtilsInputs-dvBzx1lw.js";import"./AiAgentPopup-C5VcNz6M.js";import"./TextArea-8Pmmijw8.js";import"./sharedUtilsResizable-Vc7eKtE8.js";import"./Collapse-rAELqX1J.js";import"./react-data-grid-BZuVg6KG.js";import"./TableTabs-BW7SYtuy.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-zF25t3KY.js";import"./@glideappsfinal/glide-data-grid-D5hfjlrt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-tjs8-Xha.js";import"./ListOfFilters-IXh8xjxR.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-rX7NuMgS.js";import"./EmptyState-DgVTGC82.js";import"./MassActions-CamMel1G.js";import"./Autocomplete-Dk7pnfyL.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:c,name:"Docs"}),`
`,n.jsx(e.h1,{id:"dommetadata",children:"DomMetadata"}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Data-атрибуты для автотестов и аналитики"}),`
`,n.jsx(e.li,{children:"CSS-классы для элементов таблицы и фич"}),`
`,n.jsx(e.li,{children:"Поддержка action metadata для интерактивных элементов"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Метки для автоматизированного тестирования, аналитики и онбординга"})}),`
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
`,n.jsxs(e.p,{children:["Подробнее о типах — в разделе ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-dommetadata-api--docs",children:"API"}),"."]}),`
`,n.jsx(t,{})]})}function Q(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{Q as default};
