import{j as o}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as e}from"./vendor-DUKY-ZmD.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-DtqcjmFB.js";import"./react-is-Clcustum.js";import"./styled-components-DexUWfrL.js";import"./@tanstack/react-virtual-Cr0lIrFi.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fem7FPN4.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-_ZOliQRe.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-B7bM75xW.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BlXmPeRI.js";import"./@salutejs/plasma-icons-Dih4v0gS.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-D-_B-hw1.js";import"./IconButton-2EYMx7xU.js";import"./Box-DzoDF2Cl.js";import"./TextField-DTWtGsZA.js";import"./sharedUtilsInputs-nTDdyG6d.js";import"./AiAgentPopup-B3a2_caC.js";import"./TextArea-CRKH8gvq.js";import"./sharedUtilsResizable-BNivU2A4.js";import"./Table-RvW8Zx2O.js";import"./Collapse-dGbLemZS.js";import"./react-data-grid-UAUG1bC3.js";import"./TableTabs-COpRDDVL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CR1B7ydz.js";import"./@glideappsfinal/glide-data-grid-B3ucdcmY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DiIgDDKz.js";import"./ListOfFilters-L7YV_Ybl.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-odUQWjcD.js";import"./EmptyState-Bicjyxvj.js";import"./MassActions-BRGBzJ8j.js";import"./Autocomplete-BBqSmVvF.js";import"./ErrorPage-FpU_bsEK.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
`,o.jsx(i.h1,{id:"липкие-строки-и-колонки-tablecanvas",children:"Липкие строки и колонки (TableCanvas)"}),`
`,o.jsx(i.p,{children:o.jsx(i.strong,{children:"tableConfig.stickyColumns, tableConfig.stickyRows"})}),`
`,o.jsxs(i.p,{children:["Строки и колонки, которые прилипают к краю таблицы при прокрутке, как ",o.jsx(i.code,{children:"position: sticky"})," в CSS."]}),`
`,o.jsxs(i.ul,{children:[`
`,o.jsx(i.li,{children:"Элемент едет вместе с таблицей, пока не дойдёт до края, затем остаётся на месте."}),`
`,o.jsx(i.li,{children:"Следующие липкие встают под ним (строки) или правее него (колонки)."}),`
`,o.jsxs(i.li,{children:["В отличие от закреплённых колонок (",o.jsx(i.code,{children:"columnsControl.pinnedDefault"}),"), липкая колонка остаётся на своём месте в таблице."]}),`
`]}),`
`,o.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(i.ul,{children:[`
`,o.jsx(i.li,{children:"Колонки задаются ключами или предикатом по колонке — порядок колонок и реордер не важны."}),`
`,o.jsx(i.li,{children:"Строки задаются предикатом или индексами. Предикат работает с сортировкой и фильтрами, его результаты кешируются (подгрузка чанками проверяет только новые строки). Индексы не требуют прохода по строкам — для таблиц на миллионы строк."}),`
`,o.jsx(i.li,{children:"Сочетается с закреплёнными колонками, нумерацией строк, группировкой колонок, итоговыми строками и слитыми ячейками."}),`
`,o.jsx(i.li,{children:"Разная высота строк поддерживается."}),`
`]}),`
`,o.jsxs(i.blockquote,{children:[`
`,o.jsxs(i.p,{children:["Подробнее о типах — ",o.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-stickyrowscols-api--docs",children:"StickyRowsCols API"})]}),`
`]}),`
`,o.jsx(e,{})]})}function Y(t={}){const{wrapper:i}={...n(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(r,{...t})}):r(t)}export{Y as default};
