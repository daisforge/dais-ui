import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as d,ca as t}from"./vendor-8LkLf-EW.js";import{T as s}from"./TableCanvasContextMenu.stories-DuRzekPv.js";import"./react-is-Clcustum.js";import"./styled-components-977JO8e_.js";import"./@tanstack/react-virtual-DFitcOyT.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./getFuncAsString-BlcJv7wu.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-DB9rzJCX.js";import"./utils-Bz10k1I6.js";import"./constants-ChwOYBdp.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B1oBtYhP.js";import"./TableCanvas-Mbw1YkT2.js";import"./@salutejs/plasma-icons-BdpyX49f.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-C8zJtQCS.js";import"./IconButton-F7tjg1RO.js";import"./Box-kyMLzOlr.js";import"./TextField-CqanmeIn.js";import"./sharedUtilsInputs-Dhx-TaFa.js";import"./AiAgentPopup-DI4jXySu.js";import"./TextArea-B9dO1dvT.js";import"./sharedUtilsResizable-0LtnTkr-.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-ILp9g_js.js";import"./Collapse-sIF2WGK9.js";import"./react-data-grid-DeoNXEWJ.js";import"./TableTabs-BTy1FtUr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B09rarZh.js";import"./@glideappsfinal/glide-data-grid-DyEz4IEh.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSpqG_CO.js";import"./ListOfFilters-LyTm63hj.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-G9s9w3SE.js";import"./MassActions-CkFKx0e4.js";import"./Autocomplete-K1up5yCj.js";import"./ErrorPage-cEwVQA9v.js";function r(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:s,name:"Docs"}),`
`,n.jsx(o.h1,{id:"context-menu",children:"Context Menu"}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"tableConfig.onHeaderContextMenu / onCellContextMenu / onHeaderContextMenuDropdown / onCellContextMenuDropdown"})}),`
`,n.jsx(o.p,{children:"Контекстное меню для заголовков колонок и ячеек."}),`
`,n.jsxs(o.p,{children:["Если список нужен по левому клику или наведению на конкретный элемент внутри ячейки (кнопка «три точки», кнопка действий), используйте проп ",n.jsx(o.code,{children:"dropdown"})," на Canvas-элементе: раздел ",n.jsx(o.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-dropdown--docs",children:"Dropdown"}),". Пункты и их асинхронная подгрузка там устроены похоже."]}),`
`,n.jsx(o.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Правый клик по заголовку колонки или ячейке открывает контекстное меню"}),`
`,n.jsx(o.li,{children:"Поддержка многоуровневых dropdown-меню (на основе компонента Dropdown)"}),`
`,n.jsx(o.li,{children:"Кастомизация пунктов меню в зависимости от контекста (колонка/ячейка)"}),`
`,n.jsx(o.li,{children:"Обработка выбора пунктов меню с передачей соответствующего контекста"}),`
`]}),`
`,n.jsx(o.h2,{id:"варианты-использования",children:"Варианты использования"}),`
`,n.jsx(o.h3,{id:"1-простой-обработчик-клика-без-меню",children:"1. Простой обработчик клика (без меню)"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"onHeaderContextMenu"})," — для заголовков колонок"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"onCellContextMenu"})," — для ячеек таблицы"]}),`
`]}),`
`,n.jsx(o.h3,{id:"2-dropdown-меню-расширенный-вариант",children:"2. Dropdown-меню (расширенный вариант)"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"onHeaderContextMenuDropdown"})," — для заголовков"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"onCellContextMenuDropdown"})," — для ячеек"]}),`
`]}),`
`,n.jsx(o.h2,{id:"приоритет-вызова",children:"Приоритет вызова"}),`
`,n.jsx(o.p,{children:"Если определены оба варианта (и обработчик, и dropdown):"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsxs(o.li,{children:["Сначала вызывается ",n.jsx(o.code,{children:"onHeaderContextMenu"})," / ",n.jsx(o.code,{children:"onCellContextMenu"})]}),`
`,n.jsx(o.li,{children:"Затем происходит обработка dropdown-меню"}),`
`]}),`
`,n.jsx(o.h2,{id:"конфигурация-dropdown",children:"Конфигурация Dropdown"}),`
`,n.jsx(o.p,{children:"Для конфигурации dropdown-меню используются специальные пропсы, исключающие некоторые параметры стандартного Dropdown, которые управляются таблицей (например, позиционирование, триггеры и т.д.)."}),`
`,n.jsx(o.h2,{id:"асинхронная-подгрузка-пунктов",children:"Асинхронная подгрузка пунктов"}),`
`,n.jsx(o.p,{children:"Когда пункты меню неизвестны заранее и подгружаются по правому клику. Запросом и его состоянием (загрузка / данные / ошибка) владеет потребитель — таблица только открывает меню и реактивно перечитывает пункты."}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"onOpen"})," — вызывается при открытии меню; здесь потребитель стартует запрос и хранит своё состояние. Если задан, меню открывается даже при пустом результате ",n.jsx(o.code,{children:"getDropdownItems"}),"."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"getDropdownItems"})," — читается реактивно, пока меню открыто: во время загрузки верните скелетон-пункты, после — реальные. Меню обновляется само, без переоткрытия."]}),`
`,n.jsxs(o.li,{children:["Индикатор загрузки — скелетон-пункты (через ",n.jsx(o.code,{children:"renderItem"}),") или произвольный узел в ",n.jsx(o.code,{children:"beforeList"}),"."]}),`
`,n.jsxs(o.li,{children:["Ошибка — узел в ",n.jsx(o.code,{children:"beforeList"})," (например ",n.jsx(o.code,{children:"EmptyState"})," с кнопкой повтора, вызывающей повторную загрузку)."]}),`
`]}),`
`,n.jsx(o.p,{children:"Пример со скелетонами, успешной загрузкой и ошибкой — в стори ниже."}),`
`,n.jsxs(o.p,{children:["Подробное описание API и типов доступно в разделе ",n.jsx(o.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-contextmenu-api--docs",children:"API"}),"."]}),`
`,n.jsx(t,{})]})}function Y(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{Y as default};
