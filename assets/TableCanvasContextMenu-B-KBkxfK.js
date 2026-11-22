import{j as n}from"./react-DYHuXpTF.js";import{dd as i}from"./vendor-mp8l63Ho.js";import{M as d,S as t}from"./WithTooltip-KJL26V4Q-opuTDqCP.js";import{T as s}from"./TableCanvasContextMenu.stories-CQNT-bRo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-DJuuFW7o.js";import"./@tanstack/react-virtual-Bf_zwBlO.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-Deim4iXY.js";import"./tableData-DKA5H0bF.js";import"./getFuncAsString-CYIdLC6X.js";import"./storySourceDoc-tVKyHcEN.js";import"./EmptyState-CLdIttbM.js";import"./utils-BG0hbt_n.js";import"./constants-3UB8ZrMK.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./unidentified@3x-iHLYaSSf.js";import"./@salutejs/sdds-finai-DHa74VUi.js";import"./TableCanvas-CWF-FWG1.js";import"./@salutejs/plasma-icons-wDMzmI_C.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-D3xWh3lY.js";import"./Box-D92o8JBZ.js";import"./Collapse-B9yBjfXx.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DeC_sa2e.js";import"./@daisforge/glide-data-grid-D59PDnqt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-CsrlmC7O.js";import"./sharedUiSearch-dyhDuXRC.js";import"./TextField-Bli-zwWY.js";import"./sharedUtilsInputs-B2YHYxoS.js";import"./TypographyWithAutoTooltip-CVA0K4WN.js";import"./Typography-T8Ohpufv.js";import"./ListOfFilters-Cw-S9oeO.js";import"./Table-BHHarSeO.js";import"./react-data-grid-B-99mHK-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-wXqMuSB9.js";import"./NumberFormat-DHHUUJcn.js";import"./MassActions-BpuP8p-v.js";import"./Autocomplete-Do8fumv9.js";import"./FiltersActions-CM8jemmV.js";import"./IconButton-Dl2SfgPJ.js";import"./TooltipList-DDxSrS8o.js";import"./ErrorPage-BWqvDDex.js";function r(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:s,name:"Docs"}),`
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
`,n.jsx(t,{})]})}function sn(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{sn as default};
