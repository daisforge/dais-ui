import{j as i}from"./react-D2T61mpp.js";import{cc as e,cd as r,c6 as s}from"./vendor-CSAr92if.js";import{S as c}from"./TableCanvas.splitIconButton.stories-BsTXISGr.js";import"./react-is-Clcustum.js";import"./styled-components-ZBTAG_Yl.js";import"./@tanstack/react-virtual-B8iA4ZKy.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-3emtYoGw.js";import"./FiltersActions-BKFtPxyb.js";import"./IconButton-b3a_3ixI.js";import"./@salutejs/plasma-icons-okGG1xc8.js";import"./@salutejs/sdds-finai-DjVIg8A-.js";import"./@salutejs/sdds-themes-BbT5gGEE.js";import"./utils-CYEse6yn.js";import"./constants-DqXCEMDa.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-jB8XDFU9.js";import"./TextField-DBFBb3W8.js";import"./sharedUtilsInputs-B-me6R4C.js";import"./AnalyticalWidget-CLSSgCQw.js";import"./Collapse-H8U_Ale8.js";import"./Table-Di2fEJCk.js";import"./react-data-grid-B6EFrvhw.js";import"./TableTabs-BXVZBURa.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CS_ICbFc.js";import"./ListOfFilters-cpcetn1F.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DoOkwcp3.js";import"./EmptyState-CKBYiGrU.js";import"./MassActions-CFvZieSq.js";import"./Autocomplete-CJ0yZAju.js";import"./TableGlide-hALIsnon.js";import"./@glideappsfinal/glide-data-grid-DXWAK0Fv.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DfYmp1nP.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...e(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:c,name:"Docs"}),`
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
