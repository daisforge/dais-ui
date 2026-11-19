import{j as e}from"./react-DNGZQ4GM.js";import{ck as s}from"./vendor-D0kRSEyZ.js";import{M as a,T as l}from"./WithTooltip-KJL26V4Q-DmYH2O2Q.js";import{C as o}from"./CustomArgTypes-6VBmtjy2.js";import{c as t,b as d}from"./StoriesUtils-DOSMI5Pc.js";import{T as c}from"./TableCanvas-C7Nx4gFI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-B2Euy7F3.js";import"./@tanstack/react-virtual-BMRZReVx.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-mtwU-xhz.js";import"./@salutejs/plasma-icons-CyCZXKIi.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-7sb7r4ay.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CTfk_qKV.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-ChNwZ-Li.js";import"./Box-C7bn7Vor.js";import"./Collapse-DJQXB-S_.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BHSmjU_O.js";import"./@glideappsfinal/glide-data-grid-DDGyHJjW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-BHejy9n4.js";import"./sharedUiSearch-CIBppFsz.js";import"./TextField-DpANoGFF.js";import"./sharedUtilsInputs-04PyxkHI.js";import"./TypographyWithAutoTooltip-D2KyJ3uF.js";import"./Typography-C1XIPscs.js";import"./ListOfFilters-CtA3cmfs.js";import"./Table-CLU8EiQJ.js";import"./react-data-grid-CXBejiga.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CYVukoKk.js";import"./NumberFormat-BcUnw3yr.js";import"./EmptyState-Cjd9SZHm.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3mEmrXD.js";import"./Autocomplete-Bjb9HDRp.js";import"./FiltersActions-MFwki4_2.js";import"./IconButton-C1E4pz8y.js";import"./TooltipList-BKC8WC44.js";import"./ErrorPage-G4F_Gk7e.js";function i(r){const n={code:"code",em:"em",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{parameters:{layout:"centered"},title:"Локальные компоненты/TableCanvas"}),`
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
`,e.jsx(o,{hideColumnDefault:!0,hideHeader:!0,boxShadowNone:!0,of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"tablepropstableconfig",children:"TableProps.tableConfig"}),`
`,e.jsx(o,{hideColumnDefault:!0,hideHeader:!0,boxShadowNone:!0,of:t}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"tablepropscolumnconfig",children:"TableProps.columnConfig"}),`
`,e.jsx(o,{hideColumnDefault:!0,hideHeader:!0,boxShadowNone:!0,of:d})]})}function le(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{le as default};
