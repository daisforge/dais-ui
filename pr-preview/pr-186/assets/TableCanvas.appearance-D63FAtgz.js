import{j as r}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-DKFmtNka.js";import{M as t,S as p}from"./WithTooltip-KJL26V4Q-Dlfksjg-.js";import{A as s}from"./TableCanvas.appearance.stories-DqfaoBXR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-ChIeFzsB.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-DFNf2sUb.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-By_8dfga.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./TableCanvas-BzMrGPU9.js";import"./utils-Booj3GAg.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D9OGSedu.js";import"./@daisforge/glide-data-grid-DsruqOe9.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-HvjNq9qy.js";import"./sharedUiSearch-DYvRq6Y1.js";import"./TextField-U5vj9Sk3.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-DtI0umxp.js";import"./Typography-BA5qaSRD.js";import"./ListOfFilters-pUT-hS77.js";import"./Table-B_R4Jl-V.js";import"./react-data-grid-zJbN7yQ-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-zDalxEv_.js";import"./EmptyState-D043bTLp.js";import"./unidentified@3x-DknQZlpI.js";import"./MassActions-DEEWZF0I.js";import"./Autocomplete-BZdAUz1o.js";import"./FiltersActions-C31fHDPP.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./ErrorPage-RmT4xeii.js";function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:s,name:"Docs"}),`
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
