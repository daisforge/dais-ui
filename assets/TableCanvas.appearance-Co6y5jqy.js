import{j as r}from"./react-DNGZQ4GM.js";import{ck as o}from"./vendor-BbbJ9Z83.js";import{M as t,S as p}from"./WithTooltip-KJL26V4Q-ZJQwZcgM.js";import{A as s}from"./TableCanvas.appearance.stories-VwBvpJvl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-D_Edv4_h.js";import"./@tanstack/react-virtual-CcNjsb-5.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-CuyfXGnQ.js";import"./@salutejs/plasma-icons-BJIYJCV4.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-D8gcSeh5.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-L9H5tuHV.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./@salutejs/sdds-finai-BuI7JyX1.js";import"./TableCanvas-pEobp6sH.js";import"./utils-DoXDRJ4u.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Box-1lujwMH2.js";import"./Collapse-CCWmnco9.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-PAsMjfPb.js";import"./@glideappsfinal/glide-data-grid-BCJEzwn8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-DTtAc4Ys.js";import"./TableTabs-DsUIER9h.js";import"./sharedUiSearch-DtK2Kt5u.js";import"./TextField-dI5Q6Mwb.js";import"./sharedUtilsInputs-BcRl6j87.js";import"./TypographyWithAutoTooltip-C3PM-cpw.js";import"./Typography-CIXQr6Yl.js";import"./ListOfFilters-NwMG4Gt8.js";import"./Table-BDqwvkNH.js";import"./react-data-grid-CiWOk-dj.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Deh6I-nV.js";import"./NumberFormat-Ja5qKQtO.js";import"./EmptyState-KjA_X5Eh.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-CIAtDoD6.js";import"./Autocomplete-CDywWsDe.js";import"./FiltersActions-CwpBf5qJ.js";import"./IconButton-DFBxeTV9.js";import"./TooltipList-C8NjZIWl.js";import"./ErrorPage-D09L1K1F.js";function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:s,name:"Docs"}),`
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
`,r.jsx(p,{})]})}function sr(e={}){const{wrapper:n}={...o(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(i,{...e})}):i(e)}export{sr as default};
