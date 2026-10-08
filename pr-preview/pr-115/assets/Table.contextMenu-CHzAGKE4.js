import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as t,ca as s}from"./vendor-DeTnNj4Y.js";import{T as d}from"./Table.contextMenu.stories-CnKelaaR.js";import"./react-is-Clcustum.js";import"./styled-components-DdokC5aN.js";import"./@tanstack/react-virtual-De5X9U1Y.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Dn3tfWr8.js";import"./getFuncAsString-BKNbpy42.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-DWWHkzJG.js";import"./utils-CnqbZkiM.js";import"./constants-DI5pidOH.js";import"./@salutejs/sdds-themes-qyCoD_pW.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CR2jG7gG.js";import"./Table-DdyMGdwT.js";import"./FiltersActions-BOhkYRWC.js";import"./IconButton-CiN1tqM5.js";import"./@salutejs/plasma-icons-DO39JMB0.js";import"./Box-DX5ST7G7.js";import"./TextField-Dr5BOjh4.js";import"./sharedUtilsInputs-DMjRfQ_3.js";import"./AnalyticalWidget-_Usa-H1c.js";import"./Collapse-CfczhZGb.js";import"./react-data-grid-hjNugmjj.js";import"./TableTabs-B8A6oUgt.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DxWLNWqW.js";import"./ListOfFilters-B36bCL_T.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-dFRrOuxH.js";import"./MassActions-CfwEqYJq.js";import"./Autocomplete-1PW07WU4.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d,name:"Docs"}),`
`,n.jsx(e.h1,{id:"contextmenu",children:"ContextMenu"}),`
`,n.jsxs(e.p,{children:["Контекстное меню для заголовков и ячеек legacy ",n.jsx(e.code,{children:"Table"}),"."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Обработчик правого клика по заголовку через ",n.jsx(e.code,{children:"onHeaderContextMenu"})]}),`
`,n.jsxs(e.li,{children:["Dropdown-меню для заголовка через ",n.jsx(e.code,{children:"onHeaderContextMenuDropDown"})]}),`
`,n.jsxs(e.li,{children:["Dropdown-меню для ячейки через ",n.jsx(e.code,{children:"onCellContextMenuDropDown"})]}),`
`,n.jsx(e.li,{children:"Возможность получить контекст строки, колонки и выбранной ячейки"}),`
`,n.jsx(e.li,{children:"Поддержка многоуровневых пунктов меню"}),`
`]}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.p,{children:["Если одновременно заданы простой handler и dropdown-конфиг, сначала вызывается handler, затем логика dropdown. Dropdown-конфиг использует не все props базового ",n.jsx(e.code,{children:"Dropdown"}),": позиционирование и открытие управляются таблицей."]}),`
`,n.jsx(e.h2,{id:"асинхронная-подгрузка-пунктов",children:"Асинхронная подгрузка пунктов"}),`
`,n.jsx(e.p,{children:"Когда пункты меню неизвестны заранее и подгружаются по правому клику. Запросом и его состоянием (загрузка / данные / ошибка) владеет потребитель — таблица только открывает меню и реактивно перечитывает пункты."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onOpen"})," — вызывается при открытии меню; здесь потребитель стартует запрос и хранит своё состояние. Если задан, меню открывается даже при пустом результате ",n.jsx(e.code,{children:"getDropDownItems"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDropDownItems"})," — читается реактивно, пока меню открыто: во время загрузки верните скелетон-пункты, после — реальные. Меню обновляется само, без переоткрытия."]}),`
`,n.jsxs(e.li,{children:["Индикатор загрузки — скелетон-пункты (через ",n.jsx(e.code,{children:"renderItem"}),") или произвольный узел в ",n.jsx(e.code,{children:"beforeList"}),"."]}),`
`,n.jsxs(e.li,{children:["Ошибка — узел в ",n.jsx(e.code,{children:"beforeList"})," (например ",n.jsx(e.code,{children:"EmptyState"})," с кнопкой повтора, вызывающей повторную загрузку)."]}),`
`]}),`
`,n.jsx(e.p,{children:"Пример со скелетонами, успешной загрузкой и ошибкой — в стори ниже."}),`
`,n.jsxs(e.p,{children:["Описание типов - в разделе ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-contextmenu-api--docs",children:"API"}),"."]}),`
`,n.jsx(s,{})]})}function G(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{G as default};
