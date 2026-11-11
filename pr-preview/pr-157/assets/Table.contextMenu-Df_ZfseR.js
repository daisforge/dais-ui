import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as t,ca as s}from"./vendor-7VnaVIpS.js";import{T as d}from"./Table.contextMenu.stories-C8wL-WrS.js";import"./react-is-Clcustum.js";import"./styled-components-CFvxk-I1.js";import"./@tanstack/react-virtual-DLhPRxds.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DTbyk53y.js";import"./getFuncAsString-BlcJv7wu.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-DiDcVCef.js";import"./utils-DX7iE3l_.js";import"./constants-ChwOYBdp.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BIcmm3du.js";import"./Table-B8Kqffoc.js";import"./FiltersActions-BuJrGrZ8.js";import"./IconButton-CMFhYWGF.js";import"./@salutejs/plasma-icons-BYbOMVFw.js";import"./Box-CT_TQepK.js";import"./TextField-BQZavz6y.js";import"./sharedUtilsInputs-o_SOTpff.js";import"./AiAgentPopup-3vHJ3j_d.js";import"./TextArea-B4mQ3bK9.js";import"./sharedUtilsResizable-DFCywCQF.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-X771ClxU.js";import"./react-data-grid-jRoc5f7v.js";import"./TableTabs-C0M1y85Y.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DPdx2mAT.js";import"./@glideappsfinal/glide-data-grid-BIFd4p3p.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-B1cQWloY.js";import"./ListOfFilters-DyIr73Nv.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CJItZ0eh.js";import"./MassActions-CD3Nj8gI.js";import"./Autocomplete-YBf59Vvw.js";function r(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d,name:"Docs"}),`
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
