import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as d,ca as t}from"./vendor-DnKKx4bH.js";import{T as s}from"./TableCanvasContextMenu.stories-Cg7Aszi1.js";import"./react-is-Clcustum.js";import"./styled-components-C073gJi0.js";import"./@tanstack/react-virtual-B5-u2qiU.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./getFuncAsString-Cqrt6fUK.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-Br3rrfw-.js";import"./utils-DRSpp9Bp.js";import"./constants-Ci5uyz-N.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-C-BS5BDf.js";import"./TableCanvas-CNTnXOQI.js";import"./FiltersActions-DBXrn3j3.js";import"./IconButton-oJL-bVR-.js";import"./@salutejs/plasma-icons-Rw5fh_oL.js";import"./Box-b0oKlQLU.js";import"./TextField-CgsMQ_fz.js";import"./sharedUtilsInputs-CjipMgcW.js";import"./AnalyticalWidget-DINBEyFe.js";import"./Collapse-C6pDB8Nq.js";import"./Table-C-eKP1Ax.js";import"./react-data-grid-CCvc9oWK.js";import"./TableTabs-C_1qx54X.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-D8_fgEYR.js";import"./ListOfFilters-BHZnh67Q.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C1N2i35g.js";import"./MassActions-DZVwPVpR.js";import"./Autocomplete-Xo0gWHsM.js";import"./TableGlide-CgfDIRuf.js";import"./@glideappsfinal/glide-data-grid-CMhPjIm0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DlCFxk90.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:s,name:"Docs"}),`
`,n.jsx(e.h1,{id:"context-menu",children:"Context Menu"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"tableConfig.onHeaderContextMenu / onCellContextMenu / onHeaderContextMenuDropdown / onCellContextMenuDropdown"})}),`
`,n.jsx(e.p,{children:"Контекстное меню для заголовков колонок и ячеек."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Правый клик по заголовку колонки или ячейке открывает контекстное меню"}),`
`,n.jsx(e.li,{children:"Поддержка многоуровневых dropdown-меню (на основе компонента Dropdown)"}),`
`,n.jsx(e.li,{children:"Кастомизация пунктов меню в зависимости от контекста (колонка/ячейка)"}),`
`,n.jsx(e.li,{children:"Обработка выбора пунктов меню с передачей соответствующего контекста"}),`
`]}),`
`,n.jsx(e.h2,{id:"варианты-использования",children:"Варианты использования"}),`
`,n.jsx(e.h3,{id:"1-простой-обработчик-клика-без-меню",children:"1. Простой обработчик клика (без меню)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onHeaderContextMenu"})," — для заголовков колонок"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onCellContextMenu"})," — для ячеек таблицы"]}),`
`]}),`
`,n.jsx(e.h3,{id:"2-dropdown-меню-расширенный-вариант",children:"2. Dropdown-меню (расширенный вариант)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onHeaderContextMenuDropdown"})," — для заголовков"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onCellContextMenuDropdown"})," — для ячеек"]}),`
`]}),`
`,n.jsx(e.h2,{id:"приоритет-вызова",children:"Приоритет вызова"}),`
`,n.jsx(e.p,{children:"Если определены оба варианта (и обработчик, и dropdown):"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Сначала вызывается ",n.jsx(e.code,{children:"onHeaderContextMenu"})," / ",n.jsx(e.code,{children:"onCellContextMenu"})]}),`
`,n.jsx(e.li,{children:"Затем происходит обработка dropdown-меню"}),`
`]}),`
`,n.jsx(e.h2,{id:"конфигурация-dropdown",children:"Конфигурация Dropdown"}),`
`,n.jsx(e.p,{children:"Для конфигурации dropdown-меню используются специальные пропсы, исключающие некоторые параметры стандартного Dropdown, которые управляются таблицей (например, позиционирование, триггеры и т.д.)."}),`
`,n.jsx(e.h2,{id:"асинхронная-подгрузка-пунктов",children:"Асинхронная подгрузка пунктов"}),`
`,n.jsx(e.p,{children:"Когда пункты меню неизвестны заранее и подгружаются по правому клику. Запросом и его состоянием (загрузка / данные / ошибка) владеет потребитель — таблица только открывает меню и реактивно перечитывает пункты."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onOpen"})," — вызывается при открытии меню; здесь потребитель стартует запрос и хранит своё состояние. Если задан, меню открывается даже при пустом результате ",n.jsx(e.code,{children:"getDropdownItems"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDropdownItems"})," — читается реактивно, пока меню открыто: во время загрузки верните скелетон-пункты, после — реальные. Меню обновляется само, без переоткрытия."]}),`
`,n.jsxs(e.li,{children:["Индикатор загрузки — скелетон-пункты (через ",n.jsx(e.code,{children:"renderItem"}),") или произвольный узел в ",n.jsx(e.code,{children:"beforeList"}),"."]}),`
`,n.jsxs(e.li,{children:["Ошибка — узел в ",n.jsx(e.code,{children:"beforeList"})," (например ",n.jsx(e.code,{children:"EmptyState"})," с кнопкой повтора, вызывающей повторную загрузку)."]}),`
`]}),`
`,n.jsx(e.p,{children:"Пример со скелетонами, успешной загрузкой и ошибкой — в стори ниже."}),`
`,n.jsxs(e.p,{children:["Подробное описание API и типов доступно в разделе ",n.jsx(e.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-contextmenu-api--docs",children:"API"}),"."]}),`
`,n.jsx(t,{})]})}function Q(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{Q as default};
