import{j as e}from"./react-D2T61mpp.js";import{c2 as r,c3 as s,bY as c}from"./vendor-B9akQ2rM.js";import{S as t}from"./Table.selectingRow.simple.stories-B1VGl0hE.js";import"./react-is-Clcustum.js";import"./styled-components-aOrnb-IU.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-CCmiUlhJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-BusfJGEF.js";import"./FiltersActions-CYnaaTca.js";import"./IconButton-D-WOxaGF.js";import"./@salutejs/plasma-icons-CEBC1OsY.js";import"./@salutejs/sdds-finai-Czf81g_D.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-Do7iH5st.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-aaX20gNQ.js";import"./TextField-Dn_OVPDh.js";import"./sharedUtilsInputs-1oidr2JG.js";import"./AnalyticalWidget-DpD8_yYL.js";import"./Collapse-CMBUHEmB.js";import"./react-data-grid-CnSZsIqC.js";import"./TableTabs-xRBo-lfL.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BAPhjwj0.js";import"./ListOfFilters-BhEWZBS8.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DnSb6yMz.js";import"./EmptyState-0norAzr7.js";import"./MassActions-65C83bZi.js";import"./Autocomplete-rhD7c79E.js";function n(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
`,e.jsx(i.h1,{id:"selecting-row",children:"Selecting Row"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"tableConfig.selecting"})}),`
`,e.jsx(i.p,{children:"Выбор строк таблицы с помощью чекбоксов."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Управляемое состояние через ",e.jsx(i.code,{children:"ReadonlySet<string | number>"})]}),`
`,e.jsxs(i.li,{children:["Кнопка переключения видимости в control block (",e.jsx(i.code,{children:"showInControl: true"}),")"]}),`
`,e.jsxs(i.li,{children:["Контроль на уровне строк: ",e.jsx(i.code,{children:"rowCheckboxDisabled"}),", ",e.jsx(i.code,{children:"rowShowCheckbox"})]}),`
`,e.jsxs(i.li,{children:["Поддержка иерархических таблиц через ",e.jsx(i.code,{children:"selectingRules.levels"})]}),`
`,e.jsxs(i.li,{children:["Кастомизация summary-чекбокса через ",e.jsx(i.code,{children:"summaryChecked"})]}),`
`,e.jsxs(i.li,{children:["Полное переопределение логики через ",e.jsx(i.code,{children:"rowGetStates"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"rowKeyGetter"})," должен возвращать уникальный идентификатор строки"]}),`
`,e.jsxs(i.li,{children:["В иерархических таблицах ",e.jsx(i.code,{children:"selectingRules.levels"})," определяет, на каких уровнях доступен выбор"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"summaryChecked"})," позволяет кастомизировать логику «Выбрать все»"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"rowGetStates"})," переопределяет ",e.jsx(i.code,{children:"checked"}),", ",e.jsx(i.code,{children:"indeterminate"}),", ",e.jsx(i.code,{children:"showCheckbox"}),", ",e.jsx(i.code,{children:"checkboxDisabled"})," для каждой строки"]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-selectingrow-api--docs",children:"Selecting Row API"})]}),`
`]}),`
`,e.jsx(c,{})]})}function Y(o={}){const{wrapper:i}={...r(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(n,{...o})}):n(o)}export{Y as default};
