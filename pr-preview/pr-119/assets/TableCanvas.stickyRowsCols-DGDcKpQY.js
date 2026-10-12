import{j as o}from"./react-D2T61mpp.js";import{cf as n,cg as s,c9 as e}from"./vendor-Dyxex4G2.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-D0Mil2j7.js";import"./react-is-Clcustum.js";import"./styled-components-6RO4idrj.js";import"./@tanstack/react-virtual-1rhIG8s3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CRhVkSSa.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CzLXmGKw.js";import"./FiltersActions-fVDuaCL0.js";import"./IconButton-Ddh-5EVO.js";import"./@salutejs/plasma-icons-BD2BLRHB.js";import"./@salutejs/sdds-finai-BYfzdLjN.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-BljJKfDf.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C_u9fLc1.js";import"./TextField-BHN1wQJv.js";import"./sharedUtilsInputs-DWNMqfjd.js";import"./AiAgentPopup-CA7ltgC_.js";import"./TextArea-B5ga9leA.js";import"./sharedUtilsResizable-B3T8qHbg.js";import"./Table-DMsl_asr.js";import"./Collapse-Bfwy5CbO.js";import"./react-data-grid-BxN3VegY.js";import"./TableTabs-DiK6S-8p.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cq7o-sTL.js";import"./@glideappsfinal/glide-data-grid-CXZvspA6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DtgT8M4N.js";import"./ListOfFilters-CzZyLocN.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DeYAKL_F.js";import"./EmptyState-Jp9ecwfB.js";import"./MassActions-CtXp3uUT.js";import"./Autocomplete-8jMU0-ZO.js";import"./ErrorPage-CZler-gG.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
