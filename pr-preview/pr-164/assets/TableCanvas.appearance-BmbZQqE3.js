import{j as r}from"./react-B60MRyL7.js";import{ck as o}from"./vendor-BOXbJjQW.js";import{M as t,S as p}from"./WithTooltip-KJL26V4Q-D1oqEq-B.js";import{A as s}from"./TableCanvas.appearance.stories-DlQModCV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-DN-dyp3E.js";import"./@tanstack/react-virtual--f9HMX-L.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-B3szzMwc.js";import"./@salutejs/plasma-icons-LsCQzLxj.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CbpbGoVx.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-b7WWv5em.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-DDW327_Q.js";import"./TableCanvas-CKFUvttF.js";import"./utils-Bs8ZiKbo.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Box-JkhPdOcO.js";import"./Collapse-BNL-7RWo.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DUjkhz5W.js";import"./@glideappsfinal/glide-data-grid-CaPCdkNo.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-dzgHMZvw.js";import"./sharedUiSearch-DQwhVP-7.js";import"./TextField-B86jICzu.js";import"./sharedUtilsInputs-uFKaIJDG.js";import"./TypographyWithAutoTooltip-D4bbCBGZ.js";import"./Typography-Dhksu6ui.js";import"./ListOfFilters-D7npQKzu.js";import"./Table-fGUkz_i2.js";import"./react-data-grid-Cyhpllwh.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-_bpb5vRV.js";import"./NumberFormat-CmAELO3o.js";import"./EmptyState-CciL3-J3.js";import"./unidentified@3x-DpaHf-Py.js";import"./MassActions-2-wzgpjN.js";import"./Autocomplete-MlzChFIs.js";import"./FiltersActions-B9A7BCia.js";import"./IconButton-CqyDmNx8.js";import"./TooltipList-CJDTIlLy.js";import"./ErrorPage-dH3WIaA2.js";function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:s,name:"Docs"}),`
`,r.jsx(n.h1,{id:"appearance-tablecanvas",children:"Appearance (TableCanvas)"}),`
`,r.jsx(n.p,{children:r.jsx(n.strong,{children:"tableConfig.appearance"})}),`
`,r.jsx(n.p,{children:"Готовые варианты внешнего вида таблицы: «чистый» вид и зебра."}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    appearance: { variant: 'clean', zebra: true },
  }}
/>
`})}),`
`,r.jsxs(n.p,{children:["Все поля необязательные. Без ",r.jsx(n.code,{children:"appearance"}),` таблица выглядит как обычно:
`,r.jsx(n.code,{children:"variant"})," по умолчанию ",r.jsx(n.code,{children:"'default'"}),", ",r.jsx(n.code,{children:"zebra"})," по умолчанию ",r.jsx(n.code,{children:"false"}),"."]}),`
`,r.jsxs(n.h2,{id:"чистый-вид--variant-clean",children:["Чистый вид — ",r.jsx(n.code,{children:"variant: 'clean'"})]}),`
`,r.jsx(n.p,{children:`Таблица без линий сетки и внешних рамок. Шапка на белом фоне с серым текстом.
Остальное выглядит как в обычном виде.`}),`
`,r.jsxs(n.h2,{id:"зебра--zebra-true",children:["Зебра — ",r.jsx(n.code,{children:"zebra: true"})]}),`
`,r.jsx(n.p,{children:`Строки через одну окрашены серым. Работает в любом варианте, по умолчанию
выключена.`}),`
`,r.jsx(n.h2,{id:"как-чистый-вид-работает-с-другими-настройками",children:"Как чистый вид работает с другими настройками"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:r.jsx(n.code,{children:"borders"})}),` — линии сетки выключены. Если нужно вернуть отдельные линии,
задайте их в `,r.jsx(n.code,{children:"borders"})," явно."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Наведение и выделение"}),` работают как обычно. Нумерация и чекбоксы
подсвечиваются вместе со строкой.`]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Отмеченные и выбранные строки"}),` красятся своим цветом, в том числе поверх
зебры.`]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Итоговые строки"}),` остаются голубыми, как в обычном виде. Зебра на них не
распространяется.`]}),`
`]}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsxs(n.p,{children:["Типы — ",r.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-appearance-api--docs",children:"Appearance API"})]}),`
`]}),`
`,r.jsx(p,{})]})}function pr(e={}){const{wrapper:n}={...o(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(i,{...e})}):i(e)}export{pr as default};
