import{j as i}from"./react-D2T61mpp.js";import{cg as e,ch as r,ca as s}from"./vendor-D5oPH3BX.js";import{S as c}from"./TableCanvas.splitIconButton.stories-DLNpIgfV.js";import"./react-is-Clcustum.js";import"./styled-components-PgjJSJpA.js";import"./@tanstack/react-virtual-BeN0wEDh.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas--430oz65.js";import"./FiltersActions-CVe5SO_k.js";import"./IconButton-MUImkC04.js";import"./@salutejs/plasma-icons-Cs9sImtB.js";import"./@salutejs/sdds-finai-Dlxy1h5S.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CotpbP-M.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-De9MX9Q7.js";import"./TextField-DMbIRtkW.js";import"./sharedUtilsInputs-CuSwYetx.js";import"./AnalyticalWidget-B0Mw9UcY.js";import"./Collapse-DHQlduwv.js";import"./Table-CjUG2Av1.js";import"./react-data-grid-BAtqug44.js";import"./TableTabs-Cd3Z5gJO.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-J4lOI0-g.js";import"./ListOfFilters-B4NIq99x.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BD87J8Px.js";import"./EmptyState-D_ExiAVr.js";import"./MassActions-DPT1VO7w.js";import"./Autocomplete-BwrRpsxY.js";import"./TableGlide-m9dqU8ZY.js";import"./@glideappsfinal/glide-data-grid-q7kZxXjj.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CZaeQWVv.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...e(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:c,name:"Docs"}),`
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
`,i.jsx(s,{})]})}function O(n={}){const{wrapper:o}={...e(),...n.components};return o?i.jsx(o,{...n,children:i.jsx(t,{...n})}):t(n)}export{O as default};
