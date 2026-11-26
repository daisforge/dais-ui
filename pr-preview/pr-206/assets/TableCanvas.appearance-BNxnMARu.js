import{j as r}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-2C5_55Sm.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-4UYDCAo9.js";import{A as p}from"./TableCanvas.appearance.stories-CyoBcDg4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-1kmEus0U.js";import"./@tanstack/react-virtual-BrFVuQDq.js";import"./preload-helper-Ba06O5E_.js";import"./index-Cu4lwwaE.js";import"./index-BnZ2fnE9.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CPH7segy.js";import"./storySourceDoc-tVKyHcEN.js";import"./Switch-DFPex1Sn.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-DfKFI7EK.js";import"./TableCanvas-CSA72piO.js";import"./utils-C_hbAdEU.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BrITifw3.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Box-BOi9y4XS.js";import"./Collapse-x0oUGUsB.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C6ymOVSX.js";import"./@daisforge/glide-data-grid-Dg1H6o5e.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-CZ7z4L4-.js";import"./sharedUiSearch-Cr4brFk9.js";import"./TextField-BEb9pUML.js";import"./sharedUtilsInputs-DkiMFibt.js";import"./TypographyWithAutoTooltip-BLlDrrGC.js";import"./Typography-oCC8R11s.js";import"./ListOfFilters--K-6QqtC.js";import"./FiltersActions-FKXTE1GP.js";import"./IconButton-DV8DLcRq.js";import"./TooltipList-BobQEzUM.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrgB7_nv.js";import"./NumberFormat-4pASPFmT.js";import"./EmptyState-D_G0Tkxe.js";import"./unidentified@3x-Ca_hkon8.js";import"./ErrorPage-Cq66XBZO.js";import"./Autocomplete-Bj_aoMK_.js";function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:p,name:"Docs"}),`
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
`,r.jsx(s,{})]})}function ir(e={}){const{wrapper:n}={...o(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(i,{...e})}):i(e)}export{ir as default};
