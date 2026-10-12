import{j as o}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as e}from"./vendor-By2mUyvN.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-BRDscuvq.js";import"./react-is-Clcustum.js";import"./styled-components-BPB167xT.js";import"./@tanstack/react-virtual-D5gG3S4Y.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-D0Pi0Ieo.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CcbTLH34.js";import"./FiltersActions-DexbIXr-.js";import"./IconButton-DZx4Ub5W.js";import"./@salutejs/plasma-icons-BcMtTKus.js";import"./@salutejs/sdds-finai-DDqftsph.js";import"./@salutejs/sdds-themes-Cf5iJiw2.js";import"./utils-CK6VYEh0.js";import"./constants-BMyuY-FV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BAebgheD.js";import"./TextField-B_dVN-pi.js";import"./sharedUtilsInputs-xiu2mbBy.js";import"./AiAgentPopup-BWOKqXZr.js";import"./TextArea-DlKSoBIV.js";import"./sharedUtilsResizable-SytP4_rG.js";import"./Table-BAdxuaGC.js";import"./Collapse-C5Dp_Zbb.js";import"./react-data-grid-DlRlWyaC.js";import"./TableTabs-BYW-ad5U.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cc3Mgk17.js";import"./@glideappsfinal/glide-data-grid-C-fDNxVh.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CmxuZ5kM.js";import"./ListOfFilters-Dwiw1irJ.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DSh94Ed2.js";import"./EmptyState-By7Y5evh.js";import"./MassActions-C88Gd8yh.js";import"./Autocomplete-BdRAahke.js";import"./ErrorPage-CXsCluDT.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
`,o.jsx(e,{})]})}function W(t={}){const{wrapper:i}={...n(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(r,{...t})}):r(t)}export{W as default};
