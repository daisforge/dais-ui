import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as t,ca as s}from"./vendor-Cn_w75H7.js";import{T as d}from"./Table.contextMenu.stories-CKE0YjL-.js";import"./react-is-Clcustum.js";import"./styled-components-WMyamcfa.js";import"./@tanstack/react-virtual-BQEO76G2.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CI86uvbI.js";import"./getFuncAsString-Cqrt6fUK.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-CP10X8-N.js";import"./utils-WrAxOZfo.js";import"./constants-Ci5uyz-N.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-fsSIzTFQ.js";import"./Table-BmFqbDFe.js";import"./FiltersActions-8fPslQ6R.js";import"./IconButton-DtUJUCzT.js";import"./@salutejs/plasma-icons-BtZKC4fq.js";import"./Box-BWZ52CnR.js";import"./TextField-D3rlTnaG.js";import"./sharedUtilsInputs-CneW2Pp3.js";import"./AnalyticalWidget-DTDser7a.js";import"./Collapse-os_VNpzX.js";import"./react-data-grid-BrzwM-Bw.js";import"./TableTabs-5M5jD2V-.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-C_jvyESM.js";import"./ListOfFilters-Bvs_x8Bx.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BS3fnBr4.js";import"./MassActions-DgXhg-c-.js";import"./Autocomplete-CKYux7G7.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d,name:"Docs"}),`
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
