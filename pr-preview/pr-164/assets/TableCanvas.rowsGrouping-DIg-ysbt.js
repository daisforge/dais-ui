import{j as o}from"./react-B60MRyL7.js";import{ck as t}from"./vendor-qSGXd1Us.js";import{M as e,S as s}from"./WithTooltip-KJL26V4Q-Bf1S2iVs.js";import{T as p}from"./TableCanvas.rowsGrouping.stories-CX6SsoXR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BH12kIqh.js";import"./@tanstack/react-virtual-CQvpRoFv.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-Cth5UJp1.js";import"./@salutejs/plasma-icons-Bl-ri76g.js";import"./DocStoryTemplate-DmnAHCX7.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DaO7J8Q8.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-B7_zEzfW.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B4W7VlQo.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-D3ChpMdG.js";import"./Box-UVnFPpqO.js";import"./Collapse-D79jXGjm.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dv8e4fU6.js";import"./@glideappsfinal/glide-data-grid-DdEoqChm.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-DtRUI5Cu.js";import"./sharedUiSearch-DTsmIBBF.js";import"./TextField-BtXegmzX.js";import"./sharedUtilsInputs-BI7rpFaO.js";import"./TypographyWithAutoTooltip-5KAdelsS.js";import"./Typography-CTKr_sJz.js";import"./ListOfFilters-Cnj5iC7n.js";import"./Table-BdIphlwG.js";import"./react-data-grid-DdOkLnO5.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C_H9aUMK.js";import"./NumberFormat-CwjFs2HO.js";import"./EmptyState-D4xLHGxg.js";import"./unidentified@3x-DpaHf-Py.js";import"./MassActions-B_59yU0y.js";import"./Autocomplete-BgAEXI77.js";import"./FiltersActions-BAVZ6HRF.js";import"./IconButton-D064SFCb.js";import"./TooltipList-Ur2omvrs.js";import"./ErrorPage-tc4jOnub.js";import"./tableData-DKA5H0bF.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:p,name:"Docs"}),`
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
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:["Подробнее о типах — ",o.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowsgrouping-api--docs",children:"RowsGrouping API"})]}),`
`]}),`
`,o.jsx(s,{})]})}function so(i={}){const{wrapper:r}={...t(),...i.components};return r?o.jsx(r,{...i,children:o.jsx(n,{...i})}):n(i)}export{so as default};
