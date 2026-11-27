import{j as o}from"./react-UEdzNlUe.js";import{df as t}from"./vendor-DTHFTCxs.js";import{M as e,S as s}from"./WithTooltip-KJL26V4Q-BLbQjfn-.js";import{T as p}from"./TableCanvas.rowsGrouping.stories-9CYPMDf5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-EhFzO87Y.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./DocStoryTemplate-Ci6gdKWw.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Ph-O9Fjm.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-7MphdwvM.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B8Iabp4m.js";import"./@salutejs/plasma-icons-Ds6qywPJ.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-Cpse2u-_.js";import"./Box-CAVr5OBu.js";import"./Collapse-C9SIU-FL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-CLiKwyq9.js";import"./@daisforge/glide-data-grid-BxEVBdtG.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-QolVGGjB.js";import"./sharedUiSearch-Blb9DTGJ.js";import"./TextField-D25ygU2-.js";import"./sharedUtilsInputs-DjjTtkSA.js";import"./Typography-gTMphbdr.js";import"./ListOfFilters-Dk_zKR4J.js";import"./FiltersActions-CVWFxJUb.js";import"./IconButton-Bf4wRAsC.js";import"./Tooltip-B481aNNP.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B3DTr_Ly.js";import"./NumberFormat-DDiwPRY3.js";import"./EmptyState-DmSFhx-j.js";import"./unidentified@3x-BjiX_gDg.js";import"./ErrorPage-BYsD4yyE.js";import"./Autocomplete-DGklYyP-.js";import"./tableData-DKA5H0bF.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:p,name:"Docs"}),`
`,o.jsx(r.h1,{id:"rowsgrouping-tablecanvas",children:"RowsGrouping (TableCanvas)"}),`
`,o.jsx(r.p,{children:o.jsx(r.strong,{children:"tableConfig.rowsGrouping + columnConfig.rowsGrouping"})}),`
`,o.jsx(r.p,{children:"Группировка строк таблицы по значениям колонок с поддержкой вложенных группировок."}),`
`,o.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:["Управляемое состояние группировки через ",o.jsx(r.code,{children:"groupByState"})]}),`
`,o.jsx(r.li,{children:"Кнопка с выпадающим списком для выбора группировок в controlBlock"}),`
`,o.jsxs(r.li,{children:["Кастомный рендер сгруппированных строк через ",o.jsx(r.code,{children:"renderGroupCell"})]}),`
`,o.jsxs(r.li,{children:["Кастомные элементы в выпадающем списке через ",o.jsx(r.code,{children:"groupButton.defaultCustomItems"})]}),`
`,o.jsxs(r.li,{children:["Возможность замены данных группированных строк через ",o.jsx(r.code,{children:"groupRowReplaceTo"})]}),`
`]}),`
`,o.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"rowKeyGetter"})," должен возвращать уникальный идентификатор строки"]}),`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"groupedColumnProps"})," позволяет настроить колонку с группировкой (ширину, рендер и т.д.)"]}),`
`,o.jsxs(r.li,{children:["В ",o.jsx(r.code,{children:"columnConfig.rowsGrouping"})," можно указать ",o.jsx(r.code,{children:"groupByColumn: false"})," для исключения колонки из группировки"]}),`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"columnGroupLabel"})," переопределяет лейбл в выпадающем списке (default: ",o.jsx(r.code,{children:"columnConfig.key"}),")"]}),`
`]}),`
`,o.jsx(r.p,{children:"В истории «Простая группировка» включите «24 дополнительных столбца» в Controls и нажмите «Группировать». Прокрутите список до 2023 года и выберите его. Счётчик на кнопке покажет количество выбранных столбцов."}),`
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:["Подробнее о типах — ",o.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowsgrouping-api--docs",children:"RowsGrouping API"})]}),`
`]}),`
`,o.jsx(s,{})]})}function no(i={}){const{wrapper:r}={...t(),...i.components};return r?o.jsx(r,{...i,children:o.jsx(n,{...i})}):n(i)}export{no as default};
