import{j as o}from"./react-CAOzMBF_.js";import{cf as n,cg as s,c9 as e}from"./vendor-DmWczWMC.js";import{T as m}from"./TableCanvas.stickyRowsCols.stories-Cj_01vUx.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DCFsnh-i.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Cf946dgV.js";import"./StoryHint-AurwRlnz.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas--V1Oe2HJ.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./utils-BRhO4Lv3.js";import"./constants-BTEQz0S6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-Bupqgw5V.js";import"./@salutejs/plasma-icons-Do5ggeDI.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-bR3W_Vcm.js";import"./IconButton-DrFnI92n.js";import"./Box-DvvYTz20.js";import"./TextField-CnhFS_gL.js";import"./sharedUtilsInputs-Di5vVZ_-.js";import"./AiAgentPopup-B66oKRFb.js";import"./TextArea-Cv7R6aLw.js";import"./sharedUtilsResizable-CmwXdA8D.js";import"./Table-ChKOqV__.js";import"./Collapse-BWM9xDkM.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-CtKcLbML.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-X7KTMvnG.js";import"./@glideappsfinal/glide-data-grid-Bu0bvcrP.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DNCEow7e.js";import"./ListOfFilters-mLYnvtM0.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-BV9umFfi.js";import"./EmptyState-SlkiClXz.js";import"./MassActions-BUPCvXXr.js";import"./Autocomplete-HYOtuq3Z.js";import"./ErrorPage-CzL6_iyw.js";function r(t){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m,name:"Docs"}),`
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
