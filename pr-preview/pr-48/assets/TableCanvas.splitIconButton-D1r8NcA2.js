import{j as i}from"./react-D2T61mpp.js";import{c6 as t,c7 as r,c0 as s}from"./vendor-BCtyWDpp.js";import{S as c}from"./TableCanvas.splitIconButton.stories-T0LXM4rH.js";import"./react-is-Clcustum.js";import"./styled-components-DX8vlra3.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-C0Fue0uU.js";import"./FiltersActions-B_R_7QV1.js";import"./IconButton-tXGbBwdv.js";import"./@salutejs/plasma-icons-CT3auX7M.js";import"./@salutejs/sdds-finai-CtB5qeOi.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-CHCHZ6kC.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BRgSb72-.js";import"./TextField-BT0br7pC.js";import"./sharedUtilsInputs-E3hguDnU.js";import"./AnalyticalWidget-CRwLcQHW.js";import"./Collapse-Hqsw_Qk2.js";import"./Table-Coos7vn0.js";import"./react-data-grid-DVnoNyqM.js";import"./TableTabs-D7jLgkKo.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-cSTo0M2f.js";import"./ListOfFilters-DRLpvTSI.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-TOeAMrkU.js";import"./EmptyState-nH3mac_g.js";import"./MassActions-Dr4Bw81-.js";import"./Autocomplete-QU_N67Il.js";import"./TableGlide-CvwHstre.js";import"./@glideappsfinal/glide-data-grid-BPbG-oNI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DHc23yuC.js";function e(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:c,name:"Docs"}),`
`,i.jsx(o.h1,{id:"spliticonbutton-tablecanvas",children:"SplitIconButton (TableCanvas)"}),`
`,i.jsxs(o.p,{children:["Переиспользуемый компонент для кастомных слотов ControlBlock. Это пара кнопок-иконок рядом: основное действие слева и кнопка-шеврон справа, открывающая дропдаун (паттерн split button). Реэкспортируется из TableCanvas, импорт: ",i.jsx(o.code,{children:"import { SplitIconButton } from '@daisforge/ui/components/TableCanvas'"}),"."]}),`
`,i.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(o.ul,{children:[`
`,i.jsxs(o.li,{children:["Две независимые кнопки: основная иконка (",i.jsx(o.code,{children:"onIconClick"}),") и кнопка-шеврон, открывающая дропдаун"]}),`
`,i.jsx(o.li,{children:"Шеврон и анимация раскрытия идут от компонента, левую иконку и размеры задаёт разработчик"}),`
`,i.jsxs(o.li,{children:["Дропдаун под капотом это TableDropdown, поэтому ширина и размер списка подхватывают ",i.jsx(o.code,{children:"rowSize"})," таблицы автоматически"]}),`
`,i.jsxs(o.li,{children:["Пункты дропдауна (",i.jsx(o.code,{children:"items"}),") полностью на стороне разработчика: галочки, иконки или ничего, библиотека их только прокидывает"]}),`
`,i.jsxs(o.li,{children:["Если ",i.jsx(o.code,{children:"items"})," не заданы, шеврон работает как обычная кнопка (",i.jsx(o.code,{children:"onChevronClick"}),")"]}),`
`]}),`
`,i.jsx(o.h2,{id:"где-использовать",children:"Где использовать"}),`
`,i.jsxs(o.ul,{children:[`
`,i.jsxs(o.li,{children:[i.jsx(o.code,{children:"editing.editModeLeftSlot"})," это кастомный слот слева в режиме редактирования"]}),`
`,i.jsxs(o.li,{children:[i.jsx(o.code,{children:"controlBlock.customFeatures[].CustomIconRender"})," это кастомная фича в правой части панели"]}),`
`]}),`
`,i.jsx(o.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(o.ul,{children:[`
`,i.jsxs(o.li,{children:["Работает только внутри контекста TableCanvas, потому что дропдаун использует контекст таблицы (",i.jsx(o.code,{children:"rowSize"}),", контейнер). Вне таблицы не используется."]}),`
`,i.jsxs(o.li,{children:["Размеры задаёт потребитель: ",i.jsx(o.code,{children:"size"})," для кнопок, ",i.jsx(o.code,{children:"chevronSize"})," для иконки шеврона, размер своей иконки слева."]}),`
`,i.jsxs(o.li,{children:["При компрессии фича уезжает в overflow-дропдаун. Её свёрнутый вид описывается через ",i.jsx(o.code,{children:"details"})," самой фичи, а не через сам компонент. Например ",i.jsx(o.code,{children:"details: { type: 'select' }"})," с галочкой активного пункта в ",i.jsx(o.code,{children:"contentLeft"})," опций."]}),`
`]}),`
`,i.jsxs(o.p,{children:["Описание типов в разделе ",i.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-controlblock-spliticonbutton-api--docs",children:"SplitIconButton API"}),"."]}),`
`,i.jsx(s,{})]})}function N(n={}){const{wrapper:o}={...t(),...n.components};return o?i.jsx(o,{...n,children:i.jsx(e,{...n})}):e(n)}export{N as default};
