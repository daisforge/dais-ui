import{j as n}from"./react-D2T61mpp.js";import{c6 as i,c7 as t,c0 as s}from"./vendor-H482Df_i.js";import{T as d}from"./Table.contextMenu.stories-B1boZEO-.js";import"./react-is-Clcustum.js";import"./styled-components-kNohFqZo.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-CI6eoUuG.js";import"./getFuncAsString-Bp1PYzKJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-B9Pqf4Zj.js";import"./utils-DbCY1Z9_.js";import"./constants-BudGGuoE.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-0jwSobSd.js";import"./Table-BeV-EcNh.js";import"./FiltersActions-DpX5bnfb.js";import"./IconButton-Dfbyl-9e.js";import"./@salutejs/plasma-icons-Co7qeio2.js";import"./Box-DsNuXb8L.js";import"./TextField-DX72kUcf.js";import"./sharedUtilsInputs-lcFqwZca.js";import"./AnalyticalWidget-DSB49XD8.js";import"./Collapse-iz8ikY5l.js";import"./react-data-grid-DCPnnyYy.js";import"./TableTabs-D0zJQre4.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CdHJx3AN.js";import"./ListOfFilters-h0_QR3gb.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D2Fp1WvL.js";import"./MassActions-LD6Xs8Wo.js";import"./Autocomplete-BY4gUMXJ.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d,name:"Docs"}),`
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
`,n.jsx(s,{})]})}function z(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{z as default};
