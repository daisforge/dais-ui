import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as a,c7 as l}from"./vendor-BjTBy_Ci.js";import{C as o}from"./CustomArgTypes-C6gFhiAL.js";import{c as t,b as c}from"./StoriesUtils-DTdhI9ts.js";import{T as d}from"./TableCanvas-CTgxHmxA.js";import"./react-is-Clcustum.js";import"./styled-components-Dc99Scm0.js";import"./@tanstack/react-virtual-CldrIALe.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Xgn3hmCg.js";import"./IconButton-BgEGnL-I.js";import"./@salutejs/plasma-icons-DFxxBGQF.js";import"./@salutejs/sdds-finai-DHKFl6LD.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-yH4HuMiA.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DS-qoS4R.js";import"./TextField-CwMZYZbF.js";import"./sharedUtilsInputs-NTEHu9sc.js";import"./AnalyticalWidget-BEZD2fsq.js";import"./Collapse-DCXDn_vs.js";import"./Table-z6Jpj0JL.js";import"./react-data-grid-D3CFa8L-.js";import"./TableTabs-DkehZ1-m.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-ByVM8mhe.js";import"./ListOfFilters-B2oW1oHG.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bc9KJcn_.js";import"./EmptyState-D_jbarxy.js";import"./MassActions-Dr8uXp0Y.js";import"./Autocomplete-DyiIpRyZ.js";import"./TableGlide-IJDgLu1W.js";import"./@glideappsfinal/glide-data-grid-CDyVHtRF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BSF1cvNw.js";function s(r){const n={code:"code",em:"em",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{parameters:{layout:"centered"},title:"Локальные компоненты/TableCanvas"}),`
`,e.jsx(l,{children:"TableCanvas"}),`
`,e.jsx(n.h3,{id:"компонент-для-отрисовки-табличных-данных",children:"Компонент для отрисовки табличных данных"}),`
`,e.jsx(n.p,{children:"Единый инструмент для отображения данных, имеющий набор фичей. Любой продукт сможет использовать таблицу для достижения своих целей."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h4,{id:"в-основе-html-canvas",children:"В основе HTML-canvas"}),`
`,e.jsxs(n.p,{children:["В основе ",e.jsx(n.code,{children:"TableCanvas"})," используется html ",e.jsx(n.code,{children:"canvas"}),` для обеспечения плавной непрерывной отрисовки контента.
В связи с этим, необходимо учитывать особенности во время отрисовки canvas-ячеек. К canvas-ячейкам относятся ячейки шапки, основных данных, итоговых данных.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h4,{id:"миграция-с-table",children:"Миграция с Table"}),`
`,e.jsx(n.p,{children:"Основа API TableCanvas унаследована от API Table для легкой миграции и переиспользования протестированных решений на основе Table."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TableProps"})," и ",e.jsx(n.code,{children:"TableProps.tableConfig"})," обратно совместимы на 95+% c API Table (на основе имеющихся в TableCanvas фичей)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TableProps.columnConfig"})," - претерпел изменения в связи с особенностями рендера на ",e.jsx(n.code,{children:"canvas"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["В ",e.jsx(n.code,{children:"TableProps.columnConfig"})," обновлены свойства ",e.jsx(n.code,{children:"renderHeaderCell, renderCell, renderSummaryCell"}),", теперь:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"они должны быть функциями, которые возвращают Canvas-элементы (импортировать из директории TableCanvas. Примеры: Canvas.Button,Canvas.Badge и тд.)."}),`
`,e.jsx(n.li,{children:"в них нельзя использовать компоненты, только Canvas-элементы."}),`
`,e.jsx(n.li,{children:"В них нельзя вызывать хуки, это функции рендера - не компоненты."}),`
`,e.jsxs(n.li,{children:["если нужны данные для ячеек, то передаем данные либо в ",e.jsx(n.code,{children:"headerContextValue"}),", либо в ",e.jsx(n.code,{children:"rowContextValue"}),". И получаем через ",e.jsx(n.code,{children:"args"})," функции."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"*С более подробной документацией по фичам можно ознакомиться точечно в разделе каждой фичи (в боковом меню)"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h4,{id:"импорт",children:"Импорт"}),`
`,e.jsxs(n.p,{children:["Типы, хуки и компоненты, связанные с ",e.jsx(n.code,{children:"TableCanvas"}),", необходимо импортировать из папки компонента:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {
  ColumnConfig,
  TableCanvas,
  useHeaderContext,
  SIZES,
} from '@daisforge/ui/components/TableCanvas';
`})}),`
`,e.jsxs(n.p,{children:["Остальные компоненты (",e.jsx(n.code,{children:"Badge"}),", ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"Switch"})," и т.д.) импортируются как обычно — из корня пакета:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Badge, Button, Switch } from '@daisforge/ui';
`})}),`
`,e.jsxs(n.p,{children:["Иконки — из ",e.jsx(n.code,{children:"/icons"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { IconSber, IconPlus } from '@daisforge/ui/icons';
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"api",children:"API"}),`
`,e.jsx(n.h4,{id:"tableprops",children:"TableProps"}),`
`,e.jsx(o,{hideColumnDefault:!0,hideHeader:!0,boxShadowNone:!0,of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"tablepropstableconfig",children:"TableProps.tableConfig"}),`
`,e.jsx(o,{hideColumnDefault:!0,hideHeader:!0,boxShadowNone:!0,of:t}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"tablepropscolumnconfig",children:"TableProps.columnConfig"}),`
`,e.jsx(o,{hideColumnDefault:!0,hideHeader:!0,boxShadowNone:!0,of:c})]})}function O(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{O as default};
