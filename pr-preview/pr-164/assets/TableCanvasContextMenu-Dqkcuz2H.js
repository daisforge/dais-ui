import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as d,ca as t}from"./vendor-DUKY-ZmD.js";import{T as s}from"./TableCanvasContextMenu.stories-CWQrjW_M.js";import"./react-is-Clcustum.js";import"./styled-components-DexUWfrL.js";import"./@tanstack/react-virtual-Cr0lIrFi.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./getFuncAsString-B1yRgn90.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-Bicjyxvj.js";import"./utils-B7bM75xW.js";import"./constants-BxGpUxiJ.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BlXmPeRI.js";import"./TableCanvas-_ZOliQRe.js";import"./@salutejs/plasma-icons-Dih4v0gS.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-D-_B-hw1.js";import"./IconButton-2EYMx7xU.js";import"./Box-DzoDF2Cl.js";import"./TextField-DTWtGsZA.js";import"./sharedUtilsInputs-nTDdyG6d.js";import"./AiAgentPopup-B3a2_caC.js";import"./TextArea-CRKH8gvq.js";import"./sharedUtilsResizable-BNivU2A4.js";import"./Table-RvW8Zx2O.js";import"./Collapse-dGbLemZS.js";import"./react-data-grid-UAUG1bC3.js";import"./TableTabs-COpRDDVL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CR1B7ydz.js";import"./@glideappsfinal/glide-data-grid-B3ucdcmY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DiIgDDKz.js";import"./ListOfFilters-L7YV_Ybl.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-odUQWjcD.js";import"./MassActions-BRGBzJ8j.js";import"./Autocomplete-BBqSmVvF.js";import"./ErrorPage-FpU_bsEK.js";function r(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:s,name:"Docs"}),`
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
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"onOpen"})," — вызывается при каждом открытии меню, в том числе повторном на той же ячейке; здесь потребитель стартует запрос и хранит своё состояние. Если задан, меню открывается даже при пустом результате ",n.jsx(o.code,{children:"getDropdownItems"}),". В ",n.jsx(o.code,{children:"onOpen"})," синхронно переводите состояние в загрузку и принимайте только ответ последнего запроса, иначе после действия над строкой меню покажет устаревший список."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"getDropdownItems"})," — читается реактивно при отрисовке, пока меню открыто: во время загрузки верните скелетон-пункты, после — реальные. Меню обновляется само, без переоткрытия, когда меняется объект настроек меню. Побочных действий в ",n.jsx(o.code,{children:"getDropdownItems"})," не делайте."]}),`
`,n.jsxs(o.li,{children:["Индикатор загрузки — скелетон-пункты (через ",n.jsx(o.code,{children:"renderItem"}),") или произвольный узел в ",n.jsx(o.code,{children:"beforeList"}),"."]}),`
`,n.jsxs(o.li,{children:["Ошибка — узел в ",n.jsx(o.code,{children:"beforeList"})," (например ",n.jsx(o.code,{children:"EmptyState"})," с кнопкой повтора, вызывающей повторную загрузку)."]}),`
`]}),`
`,n.jsx(o.p,{children:"Пример со скелетонами, успешной загрузкой и ошибкой — в стори ниже."}),`
`,n.jsxs(o.p,{children:["Подробное описание API и типов доступно в разделе ",n.jsx(o.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-contextmenu-api--docs",children:"API"}),"."]}),`
`,n.jsx(t,{})]})}function W(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{W as default};
