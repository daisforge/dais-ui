import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as t,ca as s}from"./vendor-DXdfnwad.js";import{T as d}from"./Table.contextMenu.stories-BbfU91pw.js";import"./react-is-Clcustum.js";import"./styled-components-C8QokrFs.js";import"./@tanstack/react-virtual-cZI7JMKe.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fXm3C628.js";import"./getFuncAsString-jGu6yxPb.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-DfxP_Lxo.js";import"./utils-DPjVldhU.js";import"./constants-rCJTDDk_.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DV8XcQV0.js";import"./Table-BCrtpPFY.js";import"./FiltersActions-aJaeqtti.js";import"./IconButton-Bl2UBdAa.js";import"./@salutejs/plasma-icons-EjQFeqZJ.js";import"./Box-CA0XSL2K.js";import"./TextField-VTRFhKVE.js";import"./sharedUtilsInputs-CuFk2zN1.js";import"./AiAgentPopup-BLFPDkW5.js";import"./TextArea-yHmHiOj9.js";import"./sharedUtilsResizable-CAZWAHxi.js";import"./Collapse-fFVUKsg0.js";import"./react-data-grid-B52RWvTe.js";import"./TableTabs-3MefgBAM.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-6sr9gTuy.js";import"./ListOfFilters-BgvN0Ngs.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BKvjTwEP.js";import"./MassActions-C9XZXzdZ.js";import"./Autocomplete-DfjSvcGN.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d,name:"Docs"}),`
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
`,n.jsx(s,{})]})}function K(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{K as default};
