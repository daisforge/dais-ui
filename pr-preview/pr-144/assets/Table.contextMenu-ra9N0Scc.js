import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as t,ca as s}from"./vendor-CgwLAOzt.js";import{T as d}from"./Table.contextMenu.stories-DTpY0x6E.js";import"./react-is-Clcustum.js";import"./styled-components-U1h2EGhV.js";import"./@tanstack/react-virtual-_mtQm2SE.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DDxNlXvE.js";import"./getFuncAsString-Dt-Kk68z.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-Dc82nemv.js";import"./utils-ParcUs9H.js";import"./constants-AGfDpPJ5.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DBBbtUOz.js";import"./Table-CLuq2r_G.js";import"./FiltersActions-Bhr7wpvG.js";import"./IconButton-C7JOyHb5.js";import"./@salutejs/plasma-icons-BGlmN6_-.js";import"./Box-CGDj7ORg.js";import"./TextField-TTDGbZXl.js";import"./sharedUtilsInputs-Ds36U5zn.js";import"./AiAgentPopup-Bv5A7AJd.js";import"./TextArea-BJ5AU7KW.js";import"./sharedUtilsResizable-Y09-4PJ-.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CUrhIkN9.js";import"./react-data-grid-BveG54b5.js";import"./TableTabs-B18J2TQL.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CpbVbvPN.js";import"./@glideappsfinal/glide-data-grid-D-UmZydu.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CLvEXBOx.js";import"./ListOfFilters-DosdwQNl.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B54ll3if.js";import"./MassActions-A5XUKhxz.js";import"./Autocomplete-DSNOWxVh.js";function r(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d,name:"Docs"}),`
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
`,n.jsx(s,{})]})}function V(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{V as default};
