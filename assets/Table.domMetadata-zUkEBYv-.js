import{j as n}from"./react-CAOzMBF_.js";import{cg as o,ch as d,ca as t}from"./vendor-Dh4d6dCz.js";import{T as c}from"./Table.domMetadata.stories-EJt9PC8d.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BD-2WP2k.js";import"./@tanstack/react-virtual-4Nv0GpZT.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-B68YIrJ_.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-Df8TShI7.js";import"./FiltersActions-C1cIIXAL.js";import"./IconButton-BY5jSHYi.js";import"./@salutejs/plasma-icons-CkR551sF.js";import"./@salutejs/sdds-finai-Yd8FRL4L.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-I85SwEfQ.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-V-E_7_e1.js";import"./TextField-DU1R_gtM.js";import"./sharedUtilsInputs-C3919g4u.js";import"./AiAgentPopup-GQs-IAp5.js";import"./TextArea-CeV4EuOw.js";import"./sharedUtilsResizable-CBJT9eg4.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CcEN_5QW.js";import"./react-data-grid-BG41yzHd.js";import"./TableTabs-BC4rHx7P.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-zZ1mupmy.js";import"./@glideappsfinal/glide-data-grid-gV_BbKzF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BDOhBaAU.js";import"./ListOfFilters-DuG7GQT_.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-C_muNst-.js";import"./EmptyState-DS3f5Djm.js";import"./MassActions-nvob83TA.js";import"./Autocomplete-Ce-yJoLc.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:c,name:"Docs"}),`
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
`,n.jsx(t,{})]})}function U(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{U as default};
