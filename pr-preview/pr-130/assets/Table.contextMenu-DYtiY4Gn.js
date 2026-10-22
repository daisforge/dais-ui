import{j as n}from"./react-D2T61mpp.js";import{cf as i,cg as t,c9 as s}from"./vendor-BjkZKBJ9.js";import{T as d}from"./Table.contextMenu.stories-Gt4wqsxM.js";import"./react-is-Clcustum.js";import"./styled-components-DWPxO3a9.js";import"./@tanstack/react-virtual-CIOHzlHP.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DCysDipa.js";import"./getFuncAsString-DnrLf2YT.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-DCJJR-3o.js";import"./utils-BjufAae2.js";import"./constants-DatVHdkd.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-C9g5nEPG.js";import"./Table-CW1POAcS.js";import"./FiltersActions-BoC-8SOr.js";import"./IconButton-rY8Us0ma.js";import"./@salutejs/plasma-icons-DcAgON_Z.js";import"./Box-BL5k83Qv.js";import"./TextField-erzztdsv.js";import"./sharedUtilsInputs-DPzVM0xx.js";import"./AiAgentPopup-GUmh_M4X.js";import"./TextArea-B8QDmYJe.js";import"./sharedUtilsResizable-CFLK8Unr.js";import"./Collapse-B0_nnnDs.js";import"./react-data-grid-vaUsH3Yu.js";import"./TableTabs-CrHSD7Vb.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-B7c2Dg7-.js";import"./@glideappsfinal/glide-data-grid-COzVhdar.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BMT36f3p.js";import"./ListOfFilters-B_inEgG7.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CPepKp-_.js";import"./MassActions-BDtqJn10.js";import"./Autocomplete-BkUDz7Uo.js";function r(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d,name:"Docs"}),`
`,n.jsx(o.h1,{id:"contextmenu",children:"ContextMenu"}),`
`,n.jsxs(o.p,{children:["Контекстное меню для заголовков и ячеек legacy ",n.jsx(o.code,{children:"Table"}),"."]}),`
`,n.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["Обработчик правого клика по заголовку через ",n.jsx(o.code,{children:"onHeaderContextMenu"})]}),`
`,n.jsxs(o.li,{children:["Dropdown-меню для заголовка через ",n.jsx(o.code,{children:"onHeaderContextMenuDropDown"})]}),`
`,n.jsxs(o.li,{children:["Dropdown-меню для ячейки через ",n.jsx(o.code,{children:"onCellContextMenuDropDown"})]}),`
`,n.jsx(o.li,{children:"Возможность получить контекст строки, колонки и выбранной ячейки"}),`
`,n.jsx(o.li,{children:"Поддержка многоуровневых пунктов меню"}),`
`]}),`
`,n.jsx(o.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(o.p,{children:["Если одновременно заданы простой handler и dropdown-конфиг, сначала вызывается handler, затем логика dropdown. Dropdown-конфиг использует не все props базового ",n.jsx(o.code,{children:"Dropdown"}),": позиционирование и открытие управляются таблицей."]}),`
`,n.jsx(o.h2,{id:"асинхронная-подгрузка-пунктов",children:"Асинхронная подгрузка пунктов"}),`
`,n.jsx(o.p,{children:"Когда пункты меню неизвестны заранее и подгружаются по правому клику. Запросом и его состоянием (загрузка / данные / ошибка) владеет потребитель — таблица только открывает меню и реактивно перечитывает пункты."}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"onOpen"})," — вызывается при открытии меню; здесь потребитель стартует запрос и хранит своё состояние. Если задан, меню открывается даже при пустом результате ",n.jsx(o.code,{children:"getDropDownItems"}),"."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"getDropDownItems"})," — читается реактивно, пока меню открыто: во время загрузки верните скелетон-пункты, после — реальные. Меню обновляется само, без переоткрытия."]}),`
`,n.jsxs(o.li,{children:["Индикатор загрузки — скелетон-пункты (через ",n.jsx(o.code,{children:"renderItem"}),") или произвольный узел в ",n.jsx(o.code,{children:"beforeList"}),"."]}),`
`,n.jsxs(o.li,{children:["Ошибка — узел в ",n.jsx(o.code,{children:"beforeList"})," (например ",n.jsx(o.code,{children:"EmptyState"})," с кнопкой повтора, вызывающей повторную загрузку)."]}),`
`]}),`
`,n.jsx(o.p,{children:"Пример со скелетонами, успешной загрузкой и ошибкой — в стори ниже."}),`
`,n.jsxs(o.p,{children:["Описание типов - в разделе ",n.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-contextmenu-api--docs",children:"API"}),"."]}),`
`,n.jsx(s,{})]})}function U(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{U as default};
